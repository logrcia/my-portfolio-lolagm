import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ExternalLink, RefreshCw, AlertCircle, ImageIcon } from 'lucide-react';

interface ArenaBlock {
  id: number | string;
  title: string | null;
  generated_title?: string;
  class: string;
  image?: {
    display?: { url: string };
    thumb?: { url: string };
    square?: { url: string };
    large?: { url: string };
    original?: { url: string };
  };
  content?: string;
  source?: {
    url: string;
    title?: string;
  };
}

interface MoodboardProps {
  channelSlug?: string;
}

const POLL_INTERVAL_MS = 30000;
const FOCUS_THROTTLE_MS = 5000;
const PER_PAGE = 100;
const MAX_PAGES = 10;

function extractCleanSlug(rawSlug: string): string {
  return rawSlug
    .trim()
    .replace(/^https?:\/\/(?:www\.)?are\.na\/(?:[^/]+\/)?/, '')
    .replace(/^channels?\//, '')
    .split(/[?#]/)[0]
    .replace(/\/+$/, '');
}

function normalizeV3Block(item: any): ArenaBlock {
  const img = item.image;
  return {
    id: item.id,
    title: item.title ?? null,
    generated_title: item.title ?? undefined,
    class: item.type || item.base_type || 'Block',
    image: img
      ? {
          display: img.medium?.src ? { url: img.medium.src } : undefined,
          large: img.large?.src ? { url: img.large.src } : undefined,
          original: img.src ? { url: img.src } : undefined,
          thumb: img.small?.src ? { url: img.small.src } : undefined,
          square: img.square?.src ? { url: img.square.src } : undefined,
        }
      : undefined,
    content: typeof item.content === 'string' ? item.content : undefined,
    source: item.source?.url
      ? { url: item.source.url, title: item.source.title }
      : undefined,
  };
}

function isDisplayableBlock(block: ArenaBlock): boolean {
  const hasImage = Boolean(
    block.image?.display?.url ||
      block.image?.large?.url ||
      block.image?.original?.url ||
      block.image?.thumb?.url
  );
  const hasText = Boolean(block.content && block.content.trim().length > 0);
  return hasImage || hasText;
}

async function fetchAllV2Contents(cleanSlug: string, cacheBust: number): Promise<ArenaBlock[]> {
  const allBlocks: ArenaBlock[] = [];

  for (let page = 1; page <= MAX_PAGES; page += 1) {
    const url = `https://api.are.na/v2/channels/${encodeURIComponent(
      cleanSlug
    )}/contents?per=${PER_PAGE}&page=${page}&sort=position&direction=desc&_t=${cacheBust}`;

    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) {
      throw new Error(`Are.na v2 HTTP ${res.status}`);
    }

    const pageData = await res.json();
    const pageContents: ArenaBlock[] = Array.isArray(pageData?.contents) ? pageData.contents : [];
    allBlocks.push(...pageContents);

    if (pageContents.length < PER_PAGE) {
      break;
    }
  }

  return allBlocks;
}

async function fetchAllV3Contents(cleanSlug: string, cacheBust: number): Promise<ArenaBlock[]> {
  const allBlocks: ArenaBlock[] = [];

  for (let page = 1; page <= MAX_PAGES; page += 1) {
    const url = `https://api.are.na/v3/channels/${encodeURIComponent(
      cleanSlug
    )}/contents?per=${PER_PAGE}&page=${page}&_t=${cacheBust}`;

    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) {
      throw new Error(`Are.na v3 HTTP ${res.status}`);
    }

    const pageData = await res.json();
    const rawItems: any[] = Array.isArray(pageData?.data) ? pageData.data : [];
    allBlocks.push(...rawItems.map(normalizeV3Block));

    if (!pageData?.meta?.has_more_pages || rawItems.length === 0) {
      break;
    }
  }

  return allBlocks;
}

export const Moodboard: React.FC<MoodboardProps> = ({ channelSlug = 'inspo-z5eag9wxqag' }) => {
  const [blocks, setBlocks] = useState<ArenaBlock[]>([]);
  const [channelTitle, setChannelTitle] = useState<string>('inspo');
  const [loading, setLoading] = useState<boolean>(true);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const lastFetchAtRef = useRef<number>(0);
  const blocksCountRef = useRef<number>(0);

  useEffect(() => {
    blocksCountRef.current = blocks.length;
  }, [blocks.length]);

  const fetchChannelData = useCallback(
    async (options: { background?: boolean } = {}) => {
      const { background = false } = options;
      const cleanSlug = extractCleanSlug(channelSlug);
      if (!cleanSlug) return;

      const cacheBust = Date.now();
      lastFetchAtRef.current = cacheBust;

      if (!background && blocksCountRef.current === 0) {
        setLoading(true);
      } else {
        setIsSyncing(true);
      }

      try {
        // Fetch live metadata + uncached channel contents directly from Are.na (CORS enabled)
        const metaPromise = fetch(
          `https://api.are.na/v3/channels/${encodeURIComponent(cleanSlug)}?_t=${cacheBust}`,
          { cache: 'no-store' }
        )
          .then((r) => (r.ok ? r.json() : null))
          .catch(() => null);

        let liveContents: ArenaBlock[] | null = null;

        try {
          liveContents = await fetchAllV2Contents(cleanSlug, cacheBust);
        } catch {
          liveContents = await fetchAllV3Contents(cleanSlug, cacheBust);
        }

        const metaData = await metaPromise;
        if (metaData?.title) {
          setChannelTitle(metaData.title);
        }

        const validBlocks = liveContents.filter(isDisplayableBlock);
        setBlocks(validBlocks);
        setError(null);
      } catch (err) {
        console.warn('Are.na live sync warning:', err);

        // Emergency offline snapshot only if we don't already have live blocks rendered
        if (blocksCountRef.current === 0) {
          try {
            const localRes = await fetch(`/assets/inspo_channel_backup.json?_t=${cacheBust}`, {
              cache: 'no-store',
            });
            if (localRes.ok) {
              const localData = await localRes.json();
              if (localData?.title) {
                setChannelTitle(localData.title);
              }
              const fallbackBlocks: ArenaBlock[] = Array.isArray(localData?.contents)
                ? localData.contents.filter(isDisplayableBlock)
                : [];
              setBlocks(fallbackBlocks);
            }
          } catch {
            // no-op
          }
        }

        setError('Unable to sync live with Are.na right now. Showing last saved blocks.');
      } finally {
        setLoading(false);
        setIsSyncing(false);
      }
    },
    [channelSlug]
  );

  useEffect(() => {
    fetchChannelData({ background: false });

    const intervalId = window.setInterval(() => {
      if (document.visibilityState === 'visible') {
        fetchChannelData({ background: true });
      }
    }, POLL_INTERVAL_MS);

    const handleReturnToTab = () => {
      if (document.visibilityState === 'visible') {
        const now = Date.now();
        if (now - lastFetchAtRef.current >= FOCUS_THROTTLE_MS) {
          fetchChannelData({ background: true });
        }
      }
    };

    document.addEventListener('visibilitychange', handleReturnToTab);
    window.addEventListener('focus', handleReturnToTab);

    return () => {
      window.clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleReturnToTab);
      window.removeEventListener('focus', handleReturnToTab);
    };
  }, [fetchChannelData]);

  const cleanSlug = extractCleanSlug(channelSlug);

  return (
    <section
      id="moodboard"
      className="relative px-6 sm:px-12 md:px-16 max-w-5xl mx-auto pt-4 pb-20 sm:pb-28 scroll-mt-20"
    >
      {/* Header in English */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#1D1B1B] tracking-[-0.01em]">
            Moodboard {channelTitle ? `— “${channelTitle}”` : ''}
          </h2>
          <p className="text-xs sm:text-sm text-[#5C5656] mt-0.5 max-w-xl">
            Visual references, archive pieces, and aesthetic inspiration in continuous update.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => fetchChannelData({ background: true })}
            disabled={isSyncing}
            aria-label="Sync latest images from Are.na"
            title="Sync latest images from Are.na"
            className="inline-flex items-center justify-center p-2 text-[#D97186] bg-[#F4E9E1] hover:bg-[#EADBCE] border border-[#E5D7CC] rounded-xl transition-all duration-200 shadow-2xs cursor-pointer disabled:opacity-60"
          >
            <RefreshCw size={14} className={isSyncing ? 'animate-spin' : ''} />
          </button>

          {/* View on Are.na Link */}
          <a
            href={`https://www.are.na/channel/${cleanSlug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#D97186] bg-[#F4E9E1] hover:bg-[#EADBCE] border border-[#E5D7CC] rounded-xl transition-all duration-200 group shadow-2xs"
            title="View full channel on Are.na"
          >
            <span>View on Are.na</span>
            <ExternalLink
              size={13}
              className="transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>

      {/* Error notice in English */}
      {error && (
        <div className="mb-6 p-3 bg-[#FFF2F4] border border-[#F5C2CB] rounded-xl flex items-center justify-between text-xs text-[#9B2C47]">
          <div className="flex items-center gap-2">
            <AlertCircle size={15} className="shrink-0" />
            <span>{error}</span>
          </div>
          <button
            type="button"
            onClick={() => fetchChannelData({ background: false })}
            className="font-semibold underline ml-2 hover:opacity-80 cursor-pointer"
          >
            Retry
          </button>
        </div>
      )}

      {/* Visual Moodboard in English */}
      {loading ? (
        <div className="py-20 flex flex-col items-center justify-center gap-3 text-[#7A7270]">
          <RefreshCw size={24} className="animate-spin text-[#D97186]" />
          <span className="text-xs font-medium">Loading moodboard...</span>
        </div>
      ) : blocks.length === 0 ? (
        <div className="py-16 text-center bg-[#F7EFE9] rounded-2xl border border-[#EFE3D9] p-6">
          <ImageIcon size={32} className="mx-auto text-[#A89E9A] mb-2" />
          <p className="text-sm font-medium text-[#4A4545]">This channel is currently empty.</p>
        </div>
      ) : (
        /* Visual masonry grid: 2 columns on mobile, 3 on tablet, 4 on desktop */
        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
          {blocks.map((block) => {
            const imgUrl =
              block.image?.display?.url ||
              block.image?.large?.url ||
              block.image?.original?.url ||
              block.image?.thumb?.url;

            const targetUrl = block.source?.url || `https://www.are.na/block/${block.id}`;
            const altText = block.title || block.generated_title || 'Visual inspiration';

            return (
              <a
                key={block.id}
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block break-inside-avoid rounded-2xl overflow-hidden bg-[#EFE4DC] border border-[#EADBCE] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                title="Open original source"
              >
                {imgUrl ? (
                  <img
                    src={imgUrl}
                    alt={altText}
                    className="w-full h-auto block object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="p-6 text-sm text-[#4A4545] font-serif italic text-center leading-relaxed">
                    “{block.content}”
                  </div>
                )}

                {/* Subtle hover icon */}
                <div className="absolute inset-0 bg-[#D97186]/0 group-hover:bg-[#D97186]/10 transition-colors duration-300 pointer-events-none flex items-end justify-end p-3">
                  <div className="w-7 h-7 rounded-full bg-white/90 text-[#1D1B1B] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm backdrop-blur-xs">
                    <ExternalLink size={13} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </section>
  );
};
