import React, { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'lolagarciamarelli@gmail.com';
  const behance = 'behance.net/logrcia';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer
      id="contact"
      className="w-full min-h-screen bg-[#D97186] text-white flex flex-col justify-between px-6 sm:px-12 md:px-16 pt-24 sm:pt-28 pb-10 select-none relative scroll-mt-16 overflow-hidden"
    >
      {/* Central Content: Sublabel + Title + Centered Illustration + Action Buttons */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full text-center my-auto">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white/80 mb-2">
          Get in touch
        </span>

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6">
          Contact me!
        </h2>

        {/* Centered Illustration with subtle white rim shadow for optimal contrast on pink background */}
        <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 my-2 sm:my-4 flex items-center justify-center">
          <img
            src="/assets/contact_lola.png"
            alt="Lola García Marelli saludo ilustración"
            className="w-full h-full object-contain filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.18)] select-none transition-transform duration-300 hover:scale-105"
            draggable={false}
          />
        </div>

        {/* Action Box: Email copy & Behance */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-xl mt-4 sm:mt-6">
          {/* Email button with copy */}
          <div className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-3 bg-white/15 hover:bg-white/20 border border-white/25 rounded-2xl px-5 py-3 transition-all duration-200">
            <a
              href={`mailto:${email}`}
              className="text-sm sm:text-base font-medium tracking-wide text-white hover:text-white/90 underline-offset-4 hover:underline"
            >
              {email}
            </a>
            <button
              onClick={handleCopyEmail}
              title="Copiar email"
              className="p-1.5 rounded-lg hover:bg-white/20 transition-colors cursor-pointer text-white/90 hover:text-white shrink-0"
              aria-label="Copiar dirección de email"
            >
              {copied ? <Check size={18} className="text-emerald-200" /> : <Copy size={18} />}
            </button>
          </div>

          {/* Behance Link */}
          <a
            href="https://behance.net/logrcia"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-[#D97186] hover:bg-white/95 font-semibold text-sm sm:text-base px-6 py-3 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
          >
            <span>{behance}</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      {/* Footer bottom small print / credit */}
      <div className="w-full max-w-5xl mx-auto pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/80">
        <span>© {new Date().getFullYear()} Lola García Marelli · Multimedia Designer</span>
        <a
          href="#home"
          className="hover:text-white transition-colors underline-offset-4 hover:underline"
        >
          Back to top ↑
        </a>
      </div>

      {/* Floating Copied Toast */}
      {copied && (
        <div className="fixed bottom-6 right-6 bg-[#2B2727] text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 border border-white/10 z-50 animate-fade-in">
          <Check size={16} className="text-emerald-400" />
          <span>¡Email copiado al portapapeles!</span>
        </div>
      )}
    </footer>
  );
};
