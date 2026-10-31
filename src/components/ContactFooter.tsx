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
    <footer id="contact" className="w-full bg-[#D97186] text-white py-10 sm:py-12 px-6 sm:px-12 md:px-16 select-none relative scroll-mt-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-center md:text-left">
        {/* "Contact me!" */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight shrink-0">
          Contact me!
        </h2>

        {/* Email Link with Quick Copy */}
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${email}`}
            className="text-sm sm:text-base font-medium tracking-wide text-white hover:text-white/80 transition-colors underline-offset-4 hover:underline"
          >
            {email}
          </a>
          <button
            onClick={handleCopyEmail}
            title="Copiar email"
            className="p-1.5 rounded-md hover:bg-white/15 transition-colors cursor-pointer text-white/90 hover:text-white"
            aria-label="Copiar dirección de email"
          >
            {copied ? <Check size={16} className="text-emerald-200" /> : <Copy size={16} />}
          </button>
        </div>

        {/* Behance Link */}
        <div className="shrink-0">
          <a
            href="https://behance.net/logrcia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-white hover:text-white/80 transition-colors underline-offset-4 hover:underline"
          >
            <span>{behance}</span>
            <ExternalLink size={14} className="opacity-80" />
          </a>
        </div>
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
