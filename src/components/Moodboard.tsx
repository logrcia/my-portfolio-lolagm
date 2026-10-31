import React, { useState, useEffect } from 'react';
import { ExternalLink, RefreshCw, AlertCircle, Sparkles, ImageIcon } from 'lucide-react';

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

export const Moodboard: React.FC<MoodboardProps> = ({ channelSlug = 'inspo-z5eag9wxqag' }) => {
  const [blocks, setBlocks] = useState<ArenaBlock[]>([]);
  const [channelTitle, setChannelTitle] = useState<string>('inspo');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchChannelData = async () => {
    setLoading(true);
    setError(null);

    const cleanSlug = channelSlug.trim();

    try {
      const targetApiUrl = `https://api.are.na/v2/channels/${encodeURIComponent(cleanSlug)}?per=24`;
      
      const proxies = [
        `https://corsproxy.io/?${encodeURIComponent(targetApiUrl)}`,
        `https://api.allorigins.win/raw?url=${encodeURIComponent(targetApiUrl)}`
      ];

      let data: any = null;

      for (const proxyUrl of proxies) {
        try {
          const res = await fetch(proxyUrl, {
            headers: { 'Accept': 'application/json' }
          });
          if (res.ok) {
            data = await res.json();
            break;
          }
        } catch {
          // continuar al siguiente
        }
      }

      if (!data || !data.contents) {
        const localRes = await fetch('/assets/inspo_channel_backup.json');
        if (localRes.ok) {
          data = await localRes.json();
        }
      }

      if (data && data.contents) {
        setChannelTitle(data.title || 'inspo');
        const validBlocks = data.contents.filter((b: any) => b.image || b.content);
        setBlocks(validBlocks);
      } else {
        throw new Error('No se pudo conectar con el canal de Are.na.');
      }
    } catch (err: any) {
      console.warn('Are.na fetch info:', err);
      try {
        const localRes = await fetch('/assets/inspo_channel_backup.json');
        if (localRes.ok) {
          const localData = await localRes.json();
          setChannelTitle(localData.title || 'inspo');
          setBlocks(localData.contents || []);
          return;
        }
      } catch {
        // no-op
      }
      setError('No se pudo sincronizar en vivo con Are.na. Podés visitar el canal directamente.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChannelData();
  }, [channelSlug]);

  return (
    <section id="moodboard" className="relative px-6 sm:px-12 md:px-16 max-w-5xl mx-auto pt-4 pb-20 sm:pb-28 scroll-mt-20">
      {/* Header: Título limpio + Botón a Are.na */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D97186] flex items-center gap-1.5">
              <Sparkles size={14} />
              Canal de Are.na · @lola-garcia-marelli
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#1D1B1B] tracking-[-0.01em]">
            Live Moodboard {channelTitle ? `— “${channelTitle}”` : ''}
          </h2>
          <p className="text-xs sm:text-sm text-[#5C5656] mt-0.5 max-w-xl">
            Referencias visuales, piezas de archivo e inspiración estética en constante actualización.
          </p>
        </div>

        {/* Botón directo para redirigir al canal en Are.na */}
        <a
          href={`https://www.are.na/channel/${channelSlug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#D97186] bg-[#F4E9E1] hover:bg-[#EADBCE] border border-[#E5D7CC] rounded-xl transition-all duration-200 self-start sm:self-auto group shadow-2xs"
          title="Ver canal completo en Are.na"
        >
          <span>Ver canal en Are.na</span>
          <ExternalLink size={13} className="transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* Aviso de error discreto si falla la red */}
      {error && (
        <div className="mb-6 p-3 bg-[#FFF2F4] border border-[#F5C2CB] rounded-xl flex items-center justify-between text-xs text-[#9B2C47]">
          <div className="flex items-center gap-2">
            <AlertCircle size={15} className="shrink-0" />
            <span>{error}</span>
          </div>
          <button
            onClick={fetchChannelData}
            className="font-semibold underline ml-2 hover:opacity-80 cursor-pointer"
          >
            Reintentar
          </button>
        </div>
      )}

      {/* Moodboard 100% Visual */}
      {loading ? (
        <div className="py-20 flex flex-col items-center justify-center gap-3 text-[#7A7270]">
          <RefreshCw size={24} className="animate-spin text-[#D97186]" />
          <span className="text-xs font-medium">Cargando moodboard...</span>
        </div>
      ) : blocks.length === 0 ? (
        <div className="py-16 text-center bg-[#F7EFE9] rounded-2xl border border-[#EFE3D9] p-6">
          <ImageIcon size={32} className="mx-auto text-[#A89E9A] mb-2" />
          <p className="text-sm font-medium text-[#4A4545]">El canal está vacío.</p>
        </div>
      ) : (
        /* Grilla visual tipo masonry: 2 columnas en mobile, 3 en tablet y 4 en desktop */
        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
          {blocks.map((block) => {
            const imgUrl =
              block.image?.display?.url ||
              block.image?.large?.url ||
              block.image?.original?.url ||
              block.image?.thumb?.url;
            
            // Priorizamos la fuente original (ej. Instagram, link web original) y si no, el bloque de Are.na
            const targetUrl = block.source?.url || `https://www.are.na/block/${block.id}`;
            const altText = block.title || block.generated_title || 'Inspiración visual';

            return (
              <a
                key={block.id}
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block break-inside-avoid rounded-2xl overflow-hidden bg-[#EFE4DC] border border-[#EADBCE] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                title="Abrir imagen de origen"
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

                {/* Sutil halo al hover que indica interactividad */}
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
