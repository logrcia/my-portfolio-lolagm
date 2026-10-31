import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#D97186] text-white py-3.5 px-6 sm:px-12 md:px-16 flex items-center justify-between shadow-xs select-none">
      <div className="font-semibold text-xs sm:text-sm tracking-[0.14em] uppercase">
        Lola García Marelli
      </div>
      <div className="font-medium text-xs sm:text-sm tracking-[0.18em] uppercase text-white/95">
        Multimedia Designer
      </div>
    </header>
  );
};
