import React from 'react';
import { Project } from '../types.ts';

interface ProjectGridProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onSelectProject }) => {
  return (
    <section id="work" className="relative px-6 sm:px-12 md:px-16 max-w-5xl mx-auto pt-24 sm:pt-28 pb-16 sm:pb-24 scroll-mt-20">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-[#1D1B1B] tracking-[-0.01em]">
          Work
        </h2>
        <p className="text-xs sm:text-sm text-[#5C5656] mt-1">
          Selected projects in editorial photography, branding, and video editing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 sm:gap-y-16">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group cursor-pointer flex flex-col text-left transition-transform duration-200"
          >
            {/* Card Thumbnail Image */}
            <div className="w-full aspect-[796/460] rounded-[22px] overflow-hidden bg-[#EFE4DC] border border-[#E8DDD4] shadow-xs group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 relative">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              {/* Subtle hover overlay hint */}
              <div className="absolute inset-0 bg-[#D97186]/0 group-hover:bg-[#D97186]/5 transition-colors duration-300 pointer-events-none" />
            </div>

            {/* Title & Category */}
            <div className="mt-3.5 sm:mt-4 pl-0.5">
              <h3 className="text-lg sm:text-xl font-bold text-[#1D1B1B] tracking-[-0.01em] group-hover:text-[#D97186] transition-colors">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5656] font-normal mt-0.5">
                {project.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
