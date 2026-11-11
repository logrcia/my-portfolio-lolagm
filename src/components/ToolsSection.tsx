import React from 'react';
import { toolsList } from '../data/portfolioData.ts';

export const ToolsSection: React.FC = () => {
  const renderToolSvg = (id: string) => {
    switch (id) {
      case 'ps':
        // Photoshop: Estilo tipográfico Adobe 'Ps'
        return (
          <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 32 32" fill="none">
            <path
              d="M8.5 7h5.8c3.2 0 5.2 1.6 5.2 4.4 0 2.9-2.1 4.5-5.3 4.5H11.7V25H8.5V7zm3.2 6.4h2.3c1.6 0 2.5-.7 2.5-2 0-1.2-.9-1.9-2.5-1.9h-2.3v3.9z"
              fill="currentColor"
            />
            <path
              d="M21 16.2c0-1.8 1.4-2.8 3.5-2.8 2 0 3.3.9 3.5 2.5h-2.1c-.2-.7-.7-1-1.4-1-.8 0-1.3.4-1.3 1 0 .6.4.9 1.7 1.2 2.4.6 3.4 1.3 3.4 3 0 1.9-1.5 2.9-3.7 2.9-2.2 0-3.6-1-3.8-2.6h2.2c.2.7.7 1.1 1.6 1.1.9 0 1.5-.4 1.5-1.1 0-.6-.4-1-1.8-1.3-2.3-.5-3.2-1.3-3.2-2.9z"
              fill="currentColor"
            />
          </svg>
        );

      case 'ai':
        // Illustrator: Estilo tipográfico Adobe 'Ai'
        return (
          <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 32 32" fill="none">
            <path
              d="M7 25l5.2-18h3.2L20.6 25h-3.2l-1.2-4.5h-5.2L9.8 25H7zm4.9-7.2h3.8L13.8 10h-.2l-1.7 7.8z"
              fill="currentColor"
            />
            <path
              d="M23 13.5h3.2V25H23V13.5zm0-4.5h3.2V11H23V9z"
              fill="currentColor"
            />
          </svg>
        );

      case 'pr':
        // Premiere Pro: Estilo tipográfico Adobe 'Pr'
        return (
          <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 32 32" fill="none">
            <path
              d="M8.5 7h5.8c3.2 0 5.2 1.6 5.2 4.4 0 2.9-2.1 4.5-5.3 4.5H11.7V25H8.5V7zm3.2 6.4h2.3c1.6 0 2.5-.7 2.5-2 0-1.2-.9-1.9-2.5-1.9h-2.3v3.9z"
              fill="currentColor"
            />
            <path
              d="M20.5 13.5h3.1v2.2h.1c.6-1.5 1.8-2.3 3.3-2.3.4 0 .7 0 1 .1v3.2c-.4-.1-.8-.1-1.3-.1-1.8 0-3.1 1.1-3.1 3.2V25h-3.1V13.5z"
              fill="currentColor"
            />
          </svg>
        );

      case 'figma':
        // Figma: Logo oficial exacto (Flaticon 5968704 / vector canónico) relleno monocromático adaptado al color
        return (
          <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" />
            <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" />
            <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" />
            <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" />
            <path d="M12 8h4c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4V8z" />
          </svg>
        );

      case 'capcut':
        // CapCut: Logo oficial canónico con líneas contorneadas visibles e invertidas
        return (
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8"
            viewBox="0 0 25 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          >
            <path d="M24.189 6.442V2.671l-4.535 2.383V4.91c.002-1.505-1.078-2.411-2.638-2.411H2.64C.993 2.5 0 3.407 0 4.91V8.72L6.354 12 0 15.316v3.8C0 20.595 1 21.5 2.64 21.5h14.373c1.56 0 2.639-.907 2.639-2.382v-.197l4.536 2.409v-3.828L13.64 12 24.19 6.443z" />
            <path d="M9.982 13.873l7.797 4.083H2.157l7.825-4.083z" />
            <path d="M17.723 6.045l-7.742 4.057-7.825-4.057h15.567z" />
          </svg>
        );

      case 'ae':
        // After Effects: Estilo tipográfico Adobe 'Ae'
        return (
          <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 32 32" fill="none">
            <path
              d="M7 25l5.2-18h3.2L20.6 25h-3.2l-1.2-4.5h-5.2L9.8 25H7zm4.9-7.2h3.8L13.8 10h-.2l-1.7 7.8z"
              fill="currentColor"
            />
            <path
              d="M21.5 19.4c0-3.4 2.3-5.9 5.8-5.9 3.2 0 5.2 2.2 5.2 5.6v.8h-7.8c.2 1.6 1.4 2.7 3.2 2.7 1.2 0 2.2-.5 2.7-1.3h3.1c-.8 2.3-2.7 3.7-5.8 3.7-3.7 0-6.4-2.4-6.4-5.6zm7.8-1.5c-.1-1.4-1.2-2.3-2.6-2.3-1.4 0-2.4.9-2.6 2.3h5.2z"
              fill="currentColor"
            />
          </svg>
        );

      case 'procreate':
        // Procreate: Logo oficial adjunto por el usuario (/assets/aistudio/procreate_b5b3012c.png) adaptado con máscara al color y hover del tema
        return (
          <div
            className="w-7 h-7 sm:w-8 sm:h-8 bg-current transition-colors"
            style={{
              WebkitMaskImage: 'url(/assets/aistudio/procreate_b5b3012c.png)',
              maskImage: 'url(/assets/aistudio/procreate_b5b3012c.png)',
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskPosition: 'center',
            }}
            role="img"
            aria-label="Procreate"
          />
        );

      case 'notion':
        // Notion: Logo oficial canónico con colores invertidos (bloque 3D delineado y 'N' destacada)
        return (
          <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none">
            {/* Tapa superior en perspectiva 3D */}
            <path
              d="M4.46 4.21c.75.6 1.03.56 2.43.46l11.44-.84c.37 0 .47-.23.37-.51L17.7 1.5c-.28-.37-.84-.56-1.49-.51L2.69 2.06c-.65.05-.8.37-.52.79l2.29 1.36z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            {/* Cuerpo del bloque 3D contorneado sin relleno empastado */}
            <path
              d="M6.05 7.66v13.63c0 .84.42 1.12 1.3 1.08l12.42-.75c.89-.05 1.12-.56 1.12-1.35V6.54c0-.79-.33-1.12-1.12-1.07L7.35 6.26c-.79.05-1.3.47-1.3 1.4z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            {/* Letra 'N' de Notion rellena */}
            <path
              d="M16.78 8.27c.1.42 0 .84-.42.88l-.7.1v9.61c-.42.23-.88.37-1.35.37-.75 0-1.03-.23-1.63-1.02l-4.53-7.14v7.09l1.4.33c.05.37-.18.79-.6.79H5.95c-.1-.42 0-.84.42-.88l.93-.14V9.61l-1.3-.14c-.05-.42.14-.79.6-.84l3.55-.23 4.8 7.28V9.28l-1.2-.14c-.05-.42.18-.79.65-.84l3.36-.23z"
              fill="currentColor"
            />
          </svg>
        );

      default:
        return null;
    }
  };

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
                {/* Cuadrado redondeado uniforme con borde de 2px en color #1E1B1B y hover en #D97186 */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[15px] border-2 border-[#1E1B1B] bg-transparent flex items-center justify-center mb-2.5 transition-all duration-200 group-hover:scale-105 group-hover:border-[#D97186] text-[#1E1B1B] group-hover:text-[#D97186] shadow-2xs">
                  {renderToolSvg(tool.id)}
                </div>

                {/* Tool Label */}
                <span className="text-xs font-medium text-[#2E2B2B] text-center whitespace-nowrap group-hover:text-[#D97186] transition-colors">
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
