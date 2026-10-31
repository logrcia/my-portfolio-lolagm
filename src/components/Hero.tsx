import React from 'react';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col justify-between items-center px-6 sm:px-12 md:px-16 pt-24 sm:pt-28 pb-10 max-w-4xl mx-auto"
    >
      {/* Central Content: Avatar + Statement */}
      <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 w-full my-auto">
        {/* Avatar Illustration */}
        <div className="shrink-0 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 relative">
          <img
            src="/assets/avatar_lola.png"
            alt="Lola García Marelli illustrated avatar"
            className="w-full h-full object-contain filter drop-shadow-sm select-none transition-transform duration-300 hover:scale-105"
            draggable={false}
          />
        </div>

        {/* Text statement */}
        <div className="flex-1 text-center sm:text-left">
          <p className="text-xl sm:text-2xl md:text-[23px] leading-[1.6] text-[#1E1B1B] font-normal tracking-[-0.01em]">
            I'm{' '}
            <span className="font-script text-[#D97186] text-3xl sm:text-4xl md:text-[42px] font-semibold inline-block transform -rotate-1 px-1">
              Lola
            </span>
            , a Multimedia Design student focused on art direction, branding and video editing. My work combines conceptual thinking, visual identity, and a strong attention to detail to create clear, engaging, and meaningful design.
          </p>
        </div>
      </div>

      {/* "Take a look!" CTA with down arrow pinned to bottom of full viewport */}
      <div className="pt-6 pb-2 text-center shrink-0">
        <button
          onClick={onExploreClick}
          className="group inline-flex flex-col items-center gap-1.5 text-[#D97186] hover:text-[#B84E64] transition-colors cursor-pointer focus:outline-none"
          aria-label="Scroll down to projects"
        >
          <span className="text-sm sm:text-base font-medium tracking-wide">
            Take a look!
          </span>
          <span className="text-lg leading-none transform transition-transform duration-200 group-hover:translate-y-1.5 animate-bounce">
            ↓
          </span>
        </button>
      </div>
    </section>
  );
};
