import React from 'react';
import { toolsList } from '../data/portfolioData.ts';

export const ToolsSection: React.FC = () => {
  return (
    <section id="tools" className="w-full pb-16 sm:pb-24 pt-4 scroll-mt-20">
      {/* "Tools" Header */}
      <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16 mb-5">
        <h2 className="text-xl sm:text-2xl font-bold text-[#1D1B1B] tracking-[-0.01em]">
          Tools
        </h2>
        <p className="text-xs sm:text-sm text-[#5C5656] mt-1">
          Software and platforms I use daily for design, motion, and visual production.
        </p>
      </div>

      {/* Dashed Strip */}
      <div className="w-full bg-[#F5E6DE] border-y-2 border-dashed border-[#E398A8] py-8 sm:py-10">
        <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 sm:gap-4 items-center justify-items-center">
            {toolsList.map((tool) => (
              <div
                key={tool.id}
                className="flex flex-col items-center justify-center group"
              >
                {/* Icon / Badge Container */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-2.5 transition-transform duration-200 group-hover:scale-105">
                  {tool.type === 'badge' ? (
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[13px] border-2 border-[#1E1B1B] flex items-center justify-center bg-transparent group-hover:border-[#D97186] transition-colors">
                      <span className="font-bold text-lg sm:text-xl text-[#1E1B1B] tracking-tight group-hover:text-[#D97186] transition-colors">
                        {tool.badgeText}
                      </span>
                    </div>
                  ) : tool.type === 'figma' ? (
                    /* Figma Icon */
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                      <svg
                        className="w-9 h-9 sm:w-10 sm:h-10 text-[#1E1B1B] group-hover:text-[#D97186] transition-colors"
                        viewBox="0 0 38 57"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" />
                        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" />
                        <path d="M0 28.5C0 23.2533 4.25329 19 9.5 19H19V38H9.5C4.25329 38 0 33.7467 0 28.5Z" />
                        <path d="M0 9.5C0 4.25329 4.25329 0 9.5 0H19V19H9.5C4.25329 19 0 14.7467 0 9.5Z" />
                        <path d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" />
                      </svg>
                    </div>
                  ) : tool.type === 'procreate' ? (
                    /* Procreate Brush / Swirl Icon */
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[13px] border-2 border-[#1E1B1B] flex items-center justify-center bg-transparent group-hover:border-[#D97186] transition-colors">
                      <svg
                        className="w-7 h-7 text-[#1E1B1B] group-hover:text-[#D97186] transition-colors"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
                        <path d="M9 8c-2 3-4 3.5-7 4l8 8c.5-3 1-5 4-7" />
                        <path d="m14.5 17.5 2 2" />
                      </svg>
                    </div>
                  ) : (
                    /* Notion 'N' Icon */
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[13px] border-2 border-[#1E1B1B] flex items-center justify-center bg-transparent group-hover:border-[#D97186] transition-colors">
                      <span className="font-serif font-black text-xl sm:text-2xl text-[#1E1B1B] group-hover:text-[#D97186] transition-colors">
                        N
                      </span>
                    </div>
                  )}
                </div>

                {/* Tool Label */}
                <span className="text-xs font-medium text-[#2E2B2B] text-center whitespace-nowrap">
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
