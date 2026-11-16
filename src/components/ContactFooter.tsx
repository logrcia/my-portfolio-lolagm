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
      className="w-full min-h-screen bg-[#D97186] text-white flex flex-col justify-between px-6 sm:px-12 md:px-16 pt-20 sm:pt-24 pb-8 sm:pb-10 select-none relative scroll-mt-16 overflow-hidden"
    >
      {/* Central Content: Sublabel + Title (Caveat script font) + Centered Illustration + Friendly message + Action Buttons */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto w-full text-center my-auto py-6">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white/80 mb-1">
          Get in touch
        </span>

        {/* Title with the script font ('Caveat') matching 'Lola' in Hero */}
        <h2 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold text-white tracking-normal leading-tight mb-2 sm:mb-3 inline-block transform -rotate-1">
          Contact me!
        </h2>

        {/* Centered Illustration with subtle white rim shadow for optimal contrast on pink background */}
        <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 my-2 sm:my-3 flex items-center justify-center">
          <img
            src="/assets/contact_lola.png"
            alt="Lola García Marelli saludo ilustración"
            className="w-full h-full object-contain filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.18)] select-none transition-transform duration-300 hover:scale-105"
            draggable={false}
          />
        </div>

        {/* Friendly text in English above buttons */}
        <p className="text-base sm:text-lg md:text-[19px] text-white/95 font-medium max-w-lg mx-auto leading-relaxed mt-2 mb-6 sm:mb-8">
          If you have any questions or thoughts, don't hesitate to drop me a message.
          <br className="hidden sm:inline" />{' '}
          I'm really excited to work with you!
        </p>

        {/* Action Box: Email copy & Behance with generous margin-bottom to create separation from footer */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-xl mb-12 sm:mb-16 md:mb-20">
          {/* Email button with copy */}
          <div className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-3 bg-white/15 hover:bg-white/20 border border-white/25 rounded-2xl px-5 py-3 transition-all duration-200 shadow-xs">
            <a
              href={`mailto:${email}`}
              className="text-sm sm:text-base font-medium tracking-wide text-white hover:text-white/90 underline-offset-4 hover:underline"
            >
              {email}
            </a>
            <button
              onClick={handleCopyEmail}
              title="Copy email"
              className="p-1.5 rounded-lg hover:bg-white/20 transition-colors cursor-pointer text-white/90 hover:text-white shrink-0"
              aria-label="Copy email address"
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
      <div className="w-full max-w-5xl mx-auto pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/80 shrink-0">
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
          <span>Email copied to clipboard!</span>
        </div>
      )}
    </footer>
  );
};
