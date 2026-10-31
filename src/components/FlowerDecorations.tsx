import React from 'react';

export const FlowerDecorations: React.FC = () => {
  return (
    <div className="pointer-events-none select-none absolute inset-0 overflow-hidden z-0">
      {/* 1. Left top near "Take a look" / Project 1 */}
      <img
        src="/assets/flower_small.png"
        alt=""
        aria-hidden="true"
        className="absolute left-2 sm:left-6 md:left-10 lg:left-16 top-[420px] sm:top-[440px] w-8 h-8 sm:w-11 sm:h-11 object-contain opacity-75 mix-blend-multiply"
      />

      {/* 2. Right top near Project 2 */}
      <img
        src="/assets/flower_main.png"
        alt=""
        aria-hidden="true"
        className="absolute right-2 sm:right-6 md:right-8 lg:right-14 top-[450px] sm:top-[480px] w-14 h-14 sm:w-20 sm:h-20 object-contain opacity-75 mix-blend-multiply"
      />

      {/* 3. Left bottom near Project 3 */}
      <img
        src="/assets/flower_tilted.png"
        alt=""
        aria-hidden="true"
        className="absolute left-2 sm:left-4 md:left-8 lg:left-12 top-[1020px] sm:top-[980px] w-12 h-12 sm:w-16 sm:h-16 object-contain opacity-75 mix-blend-multiply rotate-6"
      />

      {/* 4. Right bottom near Project 4 */}
      <img
        src="/assets/flower_main.png"
        alt=""
        aria-hidden="true"
        className="absolute right-2 sm:right-4 md:right-6 lg:right-10 top-[960px] sm:top-[920px] w-12 h-12 sm:w-16 sm:h-16 object-contain opacity-75 mix-blend-multiply -rotate-12"
      />

      {/* 5. Left above Tools */}
      <img
        src="/assets/flower_main.png"
        alt=""
        aria-hidden="true"
        className="absolute left-6 sm:left-12 md:left-20 lg:left-28 top-[1380px] sm:top-[1280px] w-12 h-12 sm:w-16 sm:h-16 object-contain opacity-70 mix-blend-multiply"
      />

      {/* 6. Left side of About section */}
      <img
        src="/assets/flower_tilted.png"
        alt=""
        aria-hidden="true"
        className="absolute left-2 sm:left-4 md:left-6 lg:left-10 top-[1780px] sm:top-[1680px] w-12 h-12 sm:w-16 sm:h-16 object-contain opacity-75 mix-blend-multiply rotate-45"
      />

      {/* 7. Right side of About section */}
      <img
        src="/assets/flower_main.png"
        alt=""
        aria-hidden="true"
        className="absolute right-2 sm:right-6 md:right-10 lg:right-14 top-[1720px] sm:top-[1620px] w-14 h-14 sm:w-20 sm:h-20 object-contain opacity-75 mix-blend-multiply"
      />

      {/* 8. Right side of Background section */}
      <img
        src="/assets/flower_small.png"
        alt=""
        aria-hidden="true"
        className="absolute right-4 sm:right-12 md:right-16 lg:right-24 top-[1980px] sm:top-[1880px] w-9 h-9 sm:w-12 sm:h-12 object-contain opacity-75 mix-blend-multiply"
      />

      {/* 9. Bottom left near Background */}
      <img
        src="/assets/flower_small.png"
        alt=""
        aria-hidden="true"
        className="absolute left-6 sm:left-14 md:left-20 lg:left-24 top-[2150px] sm:top-[2050px] w-8 h-8 sm:w-10 sm:h-10 object-contain opacity-70 mix-blend-multiply"
      />

      {/* 10. Bottom right corner near contact */}
      <img
        src="/assets/flower_tilted.png"
        alt=""
        aria-hidden="true"
        className="absolute right-3 sm:right-6 md:right-10 lg:right-12 top-[2180px] sm:top-[2080px] w-12 h-12 sm:w-16 sm:h-16 object-contain opacity-75 mix-blend-multiply"
      />
    </div>
  );
};
