import React, { useEffect } from 'react';
import { X, Sparkles, Calendar, UserCheck } from 'lucide-react';
import { Project } from '../types.ts';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#252020]/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl bg-[#FAF4EF] rounded-[24px] border border-[#EADBCE] shadow-2xl overflow-hidden z-10 my-8 transition-all max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EADBCE] bg-[#FAF4EF]">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#D97186]">
              {project.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1D1B1B] leading-tight">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#EADBCE]/50 text-[#5C5656] hover:text-[#1D1B1B] transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Main Visual */}
          <div className="w-full aspect-[796/460] rounded-2xl overflow-hidden bg-[#ECE1D8] border border-[#EADBCE] shadow-xs">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quick Meta Strip */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 py-3 px-4 rounded-xl bg-[#F4E9E1] border border-[#E8DCD1] text-xs sm:text-sm text-[#4A4545]">
            <div className="flex items-center gap-1.5">
              <UserCheck size={15} className="text-[#D97186]" />
              <span>
                <strong className="font-semibold text-[#1D1B1B]">Role:</strong> {project.role}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={15} className="text-[#D97186]" />
              <span>
                <strong className="font-semibold text-[#1D1B1B]">Year:</strong> {project.year}
              </span>
            </div>
          </div>

          {/* Overview Section */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[#1D1B1B] mb-2">
              Project Overview
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#3B3636]">
              {project.fullOverview}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#1D1B1B] mb-2.5 flex items-center gap-2">
                <Sparkles size={16} className="text-[#D97186]" />
                Key Highlights
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-[#3B3636]">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#D97186] font-bold mt-1 text-sm">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tools Used */}
          <div>
            <h3 className="text-sm sm:text-base font-bold text-[#1D1B1B] mb-2">
              Tools & Software
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-[#EFE3D9] text-[#2C2727] border border-[#E2D4C9]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#F5ECE4] border-t border-[#EADBCE] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#D97186] hover:bg-[#C85E73] rounded-xl transition-colors cursor-pointer shadow-xs"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
