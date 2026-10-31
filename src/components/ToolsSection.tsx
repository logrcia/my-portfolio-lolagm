import React from 'react';
import { toolsList } from '../data/portfolioData.ts';

export const ToolsSection: React.FC = () => {
  return (
    <section className="w-full pb-16 sm:pb-20">
      {/* "Tools" Header */}
      <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16 mb-5">
        <h2 className="text-xl sm:text-2xl font-bold text-[#1D1B1B] tracking-[-0.01em]">
          Tools
        </h2>
      </div>

      {/* Dashed Strip */}
      <div className="w-full bg-[#F5E6DE] border-y-2 border-dashed border-[#E398A8] py-8 sm:py-10">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6 items-center justify-items-center">
            {toolsList.map((tool) => (
              <div
                key={tool.id}
                className="flex flex-col items-center justify-center group"
              >
                {/* Icon / Badge Container */}
                <div className="w-16 h-16 sm:w-[70px] sm:h-[70px] flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-105">
                  {tool.type === 'badge' ? (
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[14px] border-2 border-[#1E1B1B] flex items-center justify-center bg-transparent">
                      <span className="font-bold text-xl sm:text-2xl text-[#1E1B1B] tracking-tight">
                        {tool.badgeText}
                      </span>
                    </div>
                  ) : (
                    /* Figma Icon */
                    <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                      <svg
                        className="w-11 h-11 sm:w-12 sm:h-12 text-[#1E1B1B]"
                        viewBox="0 0 38 57"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {/* Figma classic 5 nodes outlined */}
                        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" />
                        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" />
                        <path d="M0 28.5C0 23.2533 4.25329 19 9.5 19H19V38H9.5C4.25329 38 0 33.7467 0 28.5Z" />
                        <path d="M0 9.5C0 4.25329 4.25329 0 9.5 0H19V19H9.5C4.25329 19 0 14.7467 0 9.5Z" />
                        <path d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Tool Label */}
                <span className="text-xs sm:text-sm font-medium text-[#2E2B2B] text-center">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
