import React from 'react';
import { AboutGallery } from './AboutGallery.tsx';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative max-w-5xl mx-auto px-6 sm:px-12 md:px-16 pt-12 pb-20 sm:pb-28 scroll-mt-24">
      <div className="w-full">
        {/* About Block */}
        <div className="mb-12 sm:mb-14">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1D1B1B] tracking-[-0.01em] mb-4">
            About
          </h2>
          <div className="space-y-4 text-base sm:text-[17px] leading-[1.65] text-[#242121] font-normal">
            <p>
              I'm a Multimedia Design student based in Buenos Aires, Argentina, with a strong interest in art direction, visual identity, and visual storytelling.
            </p>
            <p>
              Beyond digital design, I'm passionate about exploring different artistic disciplines, especially painting with acrylics and watercolors, photography, and illustration. I enjoy experimenting with different techniques and materials, and finding ways to bring a more human and personal touch to my work.
            </p>

            {/* 3 Discipline Buttons & Unfoldable Hand-Drawn Framed Gallery */}
            <AboutGallery />

            <p>
              My creative process often starts on paper, where I sketch, explore ideas, and experiment before bringing them into the digital world. I believe that every visual decision should have a purpose, and I'm particularly interested in creating work that connects aesthetics with meaning and narrative.
            </p>
          </div>
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
