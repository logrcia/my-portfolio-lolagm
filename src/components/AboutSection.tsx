import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="relative max-w-5xl mx-auto px-6 sm:px-12 md:px-16 pb-20 sm:pb-28">
      <div className="max-w-3xl">
        {/* About Block */}
        <div className="mb-12 sm:mb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1D1B1B] tracking-[-0.01em] mb-4">
            About
          </h2>
          <p className="text-base sm:text-[17px] leading-[1.65] text-[#242121] font-normal">
            I'm a Multimedia Design student focused on art direction, branding, user experience, and video editing. I'm interested in concept-driven design and visual storytelling, creating cohesive identities where every element has a clear intention. My work combines creativity, attention to detail, and a strong visual sensibility, always aiming to communicate ideas in a clear and engaging way.
          </p>
        </div>

        {/* Background Block */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#1D1B1B] tracking-[-0.01em] mb-4">
            Background
          </h2>
          <p className="text-base sm:text-[17px] leading-[1.65] text-[#242121] font-normal">
            I'm currently studying at Maimónides University, where I've been developing skills in visual communication, branding, user experience, and video editing. Throughout my studies, I've worked on projects that combine concept, identity, and storytelling, allowing me to explore different areas of design and strengthen my creative approach.
          </p>
        </div>
      </div>
    </section>
  );
};
