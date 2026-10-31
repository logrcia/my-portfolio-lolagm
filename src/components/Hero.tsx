import React from 'react';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative pt-12 pb-10 sm:pt-16 sm:pb-14 px-6 sm:px-12 max-w-4xl mx-auto">
      {/* Avatar + Introduction split */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12 md:gap-16">
        {/* Avatar Illustration */}
        <div className="shrink-0 w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 relative">
          <img
            src="/assets/avatar_lola.png"
            alt="Lola García Marelli illustrated avatar"
            className="w-full h-full object-contain filter drop-shadow-xs select-none transition-transform duration-300 hover:scale-105"
            draggable={false}
          />
        </div>

        {/* Text statement */}
        <div className="flex-1 text-center sm:text-left pt-2">
          <p className="text-xl sm:text-2xl md:text-[23px] leading-[1.6] text-[#1E1B1B] font-normal tracking-[-0.01em]">
            I'm{' '}
            <span className="font-script text-[#D97186] text-3xl sm:text-4xl md:text-[42px] font-semibold inline-block transform -rotate-1 px-1">
              Lola
            </span>
            , a Multimedia Design student focused on art direction, branding and video editing. My work combines conceptual thinking, visual identity, and a strong attention to detail to create clear, engaging, and meaningful design.
          </p>
        </div>
      </div>

      {/* "Take a look!" CTA with down arrow */}
      <div className="mt-12 sm:mt-16 text-center">
        <button
          onClick={onExploreClick}
          className="group inline-flex flex-col items-center gap-1.5 text-[#D97186] hover:text-[#B84E64] transition-colors cursor-pointer focus:outline-none"
          aria-label="Scroll to projects"
        >
          <span className="text-sm sm:text-base font-medium tracking-wide">
            Take a look!
          </span>
          <span className="text-lg leading-none transform transition-transform duration-200 group-hover:translate-y-1">
            ↓
          </span>
        </button>
      </div>
    </section>
  );
};
