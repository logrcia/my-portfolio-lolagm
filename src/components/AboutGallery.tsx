import React, { useState } from 'react';
import { X, ZoomIn, Palette, Camera, Sparkles } from 'lucide-react';

export type GalleryCategory = 'art' | 'photography' | 'illustration' | null;

interface GalleryItem {
  id: string;
  title: string;
  medium: string;
  src: string;
  aspect: string;
  rotation: string;
  frameStyle: 'ornate' | 'scallop' | 'corner' | 'pendant' | 'custom';
}

const GALLERY_DATA: Record<Exclude<GalleryCategory, null>, {
  heading: string;
  items: GalleryItem[];
}> = {
  art: {
    heading: 'Some of my work',
    items: [
      {
        id: 'art-1',
        title: 'Fluid Pink & Gold Bloom',
        medium: 'Watercolor & gold accents on canvas',
        src: '/assets/aistudio/arte1_8c8a4ea4.PNG',
        aspect: 'aspect-square',
        rotation: '-rotate-1',
        frameStyle: 'custom',
      },
      {
        id: 'art-2',
        title: 'Peony & Ferns on Turquoise',
        medium: 'Acrylic & gold metallic leaf on canvas',
        src: '/assets/aistudio/arte2_8af23744.PNG',
        aspect: 'aspect-square',
        rotation: 'rotate-1',
        frameStyle: 'custom',
      },
      {
        id: 'art-3',
        title: 'Pastel Botanicals',
        medium: 'Acrylic & textured relief on canvas',
        src: '/assets/aistudio/arte3_6b15eaf2.PNG',
        aspect: 'aspect-square',
        rotation: '-rotate-1',
        frameStyle: 'custom',
      },
    ],
  },
  photography: {
    heading: 'Some of my work',
    items: [
      {
        id: 'photo-1',
        title: 'Calm Horizon & White Sailboat',
        medium: 'Coastal landscape photography',
        src: '/assets/aistudio/ph1_00f9ea6a.PNG',
        aspect: 'aspect-square',
        rotation: '-rotate-1',
        frameStyle: 'custom',
      },
      {
        id: 'photo-2',
        title: 'Sunlit Garden Companion',
        medium: 'Portrait photography',
        src: '/assets/aistudio/ph2_f3451e26.PNG',
        aspect: 'aspect-square',
        rotation: 'rotate-1',
        frameStyle: 'custom',
      },
      {
        id: 'photo-3',
        title: 'Quiet Bay & Wooden Boat',
        medium: 'Coastal photography',
        src: '/assets/aistudio/ph3_9fcd3d99.PNG',
        aspect: 'aspect-square',
        rotation: '-rotate-1',
        frameStyle: 'custom',
      },
    ],
  },
  illustration: {
    heading: 'Some of my work',
    items: [
      {
        id: 'ill-1',
        title: 'Character Study with Stars',
        medium: 'Digital character illustration',
        src: '/assets/aistudio/illustration1_c2468892.PNG',
        aspect: 'aspect-square',
        rotation: '-rotate-1',
        frameStyle: 'custom',
      },
      {
        id: 'ill-2',
        title: 'Floral Bouquet Portrait',
        medium: 'Digital character illustration',
        src: '/assets/aistudio/illustration2_c000b534.PNG',
        aspect: 'aspect-square',
        rotation: 'rotate-1',
        frameStyle: 'custom',
      },
    ],
  },
};

// SVG Hand-Drawn Doodle Frame 1: Ornate Baroque Frame
const OrnateDoodleFrame: React.FC = () => (
  <svg
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    className="absolute -inset-2.5 sm:-inset-3 w-[calc(100%+20px)] sm:w-[calc(100%+24px)] h-[calc(100%+20px)] sm:h-[calc(100%+24px)] pointer-events-none text-[#1E1B1B] z-10"
  >
    {/* Outer hand-drawn double border */}
    <rect
      x="5"
      y="5"
      width="90"
      height="90"
      rx="3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="8.5"
      y="8.5"
      width="83"
      height="83"
      rx="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.85"
    />
    {/* Ornate top scroll flourish */}
    <path
      d="M40 5 C43 1, 47 0.5, 50 1.5 C53 0.5, 57 1, 60 5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="50" cy="1.2" r="1.2" fill="currentColor" />
    <path
      d="M37 5 C35 2, 31 2.5, 33 5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M63 5 C65 2, 69 2.5, 67 5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    {/* Bottom flourish */}
    <path
      d="M43 95 C46 98, 48 99, 50 98 C52 99, 54 98, 57 95"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

// SVG Hand-Drawn Doodle Frame 2: Scalloped Wavy Border Frame
const ScallopDoodleFrame: React.FC = () => (
  <svg
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    className="absolute -inset-3 sm:-inset-3.5 w-[calc(100%+24px)] sm:w-[calc(100%+28px)] h-[calc(100%+24px)] sm:h-[calc(100%+28px)] pointer-events-none text-[#1E1B1B] z-10"
  >
    {/* Inner rectangular border */}
    <rect
      x="9"
      y="9"
      width="82"
      height="82"
      rx="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    {/* Outer scalloped loops */}
    <path
      d="
        M 10 7 Q 15 4, 20 7 Q 25 4, 30 7 Q 35 4, 40 7 Q 45 4, 50 7 Q 55 4, 60 7 Q 65 4, 70 7 Q 75 4, 80 7 Q 85 4, 90 7
        Q 94 12, 92 17 Q 95 22, 92 27 Q 95 32, 92 37 Q 95 42, 92 47 Q 95 52, 92 57 Q 95 62, 92 67 Q 95 72, 92 77 Q 95 82, 92 87 Q 94 91, 90 93
        Q 85 96, 80 93 Q 75 96, 70 93 Q 65 96, 60 93 Q 55 96, 50 93 Q 45 96, 40 93 Q 35 96, 30 93 Q 25 96, 20 93 Q 15 96, 10 93
        Q 6 89, 8 84 Q 5 79, 8 74 Q 5 69, 8 64 Q 5 59, 8 54 Q 5 49, 8 44 Q 5 39, 8 34 Q 5 29, 8 24 Q 5 19, 8 14 Q 6 9, 10 7 Z
      "
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// SVG Hand-Drawn Doodle Frame 3: Corner Rings Frame
const CornerDoodleFrame: React.FC = () => (
  <svg
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    className="absolute -inset-2.5 sm:-inset-3 w-[calc(100%+20px)] sm:w-[calc(100%+24px)] h-[calc(100%+20px)] sm:h-[calc(100%+24px)] pointer-events-none text-[#1E1B1B] z-10"
  >
    {/* Outer wobbly line */}
    <rect
      x="4"
      y="4"
      width="92"
      height="92"
      rx="3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* Inner frame line */}
    <rect
      x="8"
      y="8"
      width="84"
      height="84"
      rx="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.85"
    />
    {/* 4 corner loops/washers */}
    <circle cx="6" cy="6" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="6" cy="6" r="0.8" fill="currentColor" />

    <circle cx="94" cy="6" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="94" cy="6" r="0.8" fill="currentColor" />

    <circle cx="6" cy="94" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="6" cy="94" r="0.8" fill="currentColor" />

    <circle cx="94" cy="94" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="94" cy="94" r="0.8" fill="currentColor" />
  </svg>
);

// SVG Hand-Drawn Doodle Frame 4: Pendant Hanging Oval Frame
const PendantDoodleFrame: React.FC = () => (
  <svg
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    className="absolute -inset-3 sm:-inset-4 w-[calc(100%+24px)] sm:w-[calc(100%+32px)] h-[calc(100%+24px)] sm:h-[calc(100%+32px)] pointer-events-none text-[#1E1B1B] z-10"
  >
    {/* Top hanging wire and nail loop */}
    <path
      d="M36 12 L50 3 L64 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="50" cy="2.5" r="1.5" fill="currentColor" />
    {/* Double oval frame */}
    <ellipse
      cx="50"
      cy="55"
      rx="44"
      ry="42"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <ellipse
      cx="50"
      cy="55"
      rx="40"
      ry="38"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      opacity="0.85"
    />
  </svg>
);

// Cute Hand-drawn Heart Doodle
const DoodleHeart: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${className} text-[#D97186]`}
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export const AboutGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const toggleCategory = (cat: Exclude<GalleryCategory, null>) => {
    setActiveCategory((prev) => (prev === cat ? null : cat));
  };

  const renderFrame = (style: GalleryItem['frameStyle']) => {
    switch (style) {
      case 'ornate':
        return <OrnateDoodleFrame />;
      case 'scallop':
        return <ScallopDoodleFrame />;
      case 'corner':
        return <CornerDoodleFrame />;
      case 'pendant':
        return <PendantDoodleFrame />;
      case 'custom':
        return null;
      default:
        return <OrnateDoodleFrame />;
    }
  };

  return (
    <div className="w-full my-6">
      {/* 3 Discipline Buttons Centered */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-4">
        {/* Art Button */}
        <button
          onClick={() => toggleCategory('art')}
          aria-expanded={activeCategory === 'art'}
          className={`cursor-pointer inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 border-2 ${
            activeCategory === 'art'
              ? 'bg-[#1E1B1B] text-[#FAF4EF] border-[#1E1B1B] shadow-sm scale-102'
              : 'bg-white/80 hover:bg-white text-[#1E1B1B] border-[#1E1B1B] hover:border-[#D97186] hover:text-[#D97186] shadow-2xs'
          }`}
        >
          <Palette size={15} />
          <span>Art</span>
          <span className="text-[11px] opacity-75">{activeCategory === 'art' ? '✕' : '↓'}</span>
        </button>

        {/* Photography Button */}
        <button
          onClick={() => toggleCategory('photography')}
          aria-expanded={activeCategory === 'photography'}
          className={`cursor-pointer inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 border-2 ${
            activeCategory === 'photography'
              ? 'bg-[#1E1B1B] text-[#FAF4EF] border-[#1E1B1B] shadow-sm scale-102'
              : 'bg-white/80 hover:bg-white text-[#1E1B1B] border-[#1E1B1B] hover:border-[#D97186] hover:text-[#D97186] shadow-2xs'
          }`}
        >
          <Camera size={15} />
          <span>Photography</span>
          <span className="text-[11px] opacity-75">
            {activeCategory === 'photography' ? '✕' : '↓'}
          </span>
        </button>

        {/* Illustration Button */}
        <button
          onClick={() => toggleCategory('illustration')}
          aria-expanded={activeCategory === 'illustration'}
          className={`cursor-pointer inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 border-2 ${
            activeCategory === 'illustration'
              ? 'bg-[#1E1B1B] text-[#FAF4EF] border-[#1E1B1B] shadow-sm scale-102'
              : 'bg-white/80 hover:bg-white text-[#1E1B1B] border-[#1E1B1B] hover:border-[#D97186] hover:text-[#D97186] shadow-2xs'
          }`}
        >
          <Sparkles size={15} />
          <span>Illustration</span>
          <span className="text-[11px] opacity-75">
            {activeCategory === 'illustration' ? '✕' : '↓'}
          </span>
        </button>
      </div>

      {/* Unfolded Gallery Screen */}
      {activeCategory && (
        <div className="relative mt-5 p-6 sm:p-8 bg-[#F6ECE4] border-2 border-[#1E1B1B] rounded-2xl sm:rounded-3xl shadow-sm transition-all animate-fade-in overflow-hidden">
          {/* Header of the unfolded gallery */}
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <span className="font-script text-2xl sm:text-3xl font-bold text-[#D97186] inline-block -rotate-1">
              {GALLERY_DATA[activeCategory].heading}
            </span>
            <DoodleHeart className="w-5 h-5 -rotate-6" />
          </div>

          {/* Collage Gallery Wall arranged in the inspiration doodle frame style */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 ${
              GALLERY_DATA[activeCategory].items.length >= 3
                ? 'md:grid-cols-3 max-w-4xl gap-6 sm:gap-8'
                : 'md:grid-cols-2 max-w-2xl gap-8 sm:gap-10'
            } items-center justify-items-center mx-auto py-2`}
          >
            {GALLERY_DATA[activeCategory].items.map((item, idx) => (
              <div
                key={item.id}
                className={`relative group cursor-pointer transition-transform duration-300 hover:scale-103 hover:z-20 ${item.rotation}`}
                onClick={() => setSelectedPhoto(item)}
              >
                {item.frameStyle === 'custom' ? (
                  /* Artwork already includes its own custom hand-drawn frame PNG */
                  <div className="relative flex flex-col items-center">
                    <div className="relative w-60 h-60 sm:w-64 sm:h-64 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-contain filter drop-shadow-[0_8px_18px_rgba(30,27,27,0.12)] transition-transform duration-300 group-hover:scale-104 select-none"
                        referrerPolicy="no-referrer"
                        draggable={false}
                      />

                      {/* Hover Zoom Prompt */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="p-2.5 rounded-full bg-[#1E1B1B]/75 text-white shadow-md backdrop-blur-2xs">
                          <ZoomIn size={18} />
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Framed card wrapper with subtle creamy backing to mimic framed canvas */
                  <div className="relative p-3.5 sm:p-4 bg-[#FCF8F5] rounded-xl shadow-[0_6px_18px_rgba(30,27,27,0.08)]">
                    {/* Hand-drawn SVG Frame Overlay */}
                    {renderFrame(item.frameStyle)}

                    {/* Artwork Image */}
                    <div
                      className={`relative overflow-hidden rounded-md ${item.aspect} w-56 sm:w-64 bg-stone-100 flex items-center justify-center`}
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-104 select-none"
                        referrerPolicy="no-referrer"
                        draggable={false}
                      />

                      {/* Hover Zoom Prompt */}
                      <div className="absolute inset-0 bg-[#1E1B1B]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                        <span className="p-2 rounded-full bg-[#1E1B1B]/70 backdrop-blur-2xs">
                          <ZoomIn size={18} />
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Decorative heart doodles on alternating cards like the inspiration picture */}
                {idx === 0 && (
                  <div className="absolute -top-2 -right-2 transform rotate-12 pointer-events-none">
                    <DoodleHeart className="w-5 h-5 text-[#D97186]" />
                  </div>
                )}
                {idx === 1 && (
                  <div className="absolute -bottom-1 -left-2 transform -rotate-12 pointer-events-none">
                    <DoodleHeart className="w-5 h-5 text-[#D97186]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-6 pt-4 border-t border-[#1E1B1B]/15">
            <span className="font-script text-sm sm:text-base text-[#6E6666]">
              Click on any piece to enlarge ✦
            </span>
          </div>
        </div>
      )}

      {/* Modal / Lightbox for viewing artwork up close */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-[#1E1B1B]/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-2xl w-full bg-[#FAF4EF] rounded-2xl p-4 sm:p-6 shadow-2xl border-2 border-[#1E1B1B]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-[#1E1B1B]/10 hover:bg-[#1E1B1B]/20 text-[#1E1B1B] transition-colors cursor-pointer z-10"
              aria-label="Close preview"
            >
              <X size={20} />
            </button>

            {/* Lightbox Image with Framed Look */}
            <div
              className={`max-h-[75vh] flex items-center justify-center overflow-hidden rounded-lg p-2 ${
                selectedPhoto.frameStyle === 'custom'
                  ? 'bg-transparent'
                  : 'bg-stone-100 border border-[#1E1B1B]/20'
              }`}
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-md"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
