import React from 'react';

interface HeaderProps {
  onNavigate?: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Live moodboard', href: '#moodboard', id: 'moodboard' },
    { label: 'Tools', href: '#tools', id: 'tools' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#D97186] text-white py-3.5 px-4 sm:px-8 md:px-14 flex flex-col md:flex-row items-center justify-between gap-3 shadow-sm select-none">
      {/* Brand Name / Title */}
      <a
        href="#about"
        onClick={(e) => handleClick(e, 'about')}
        className="font-bold text-xs sm:text-sm tracking-[0.15em] uppercase hover:opacity-90 transition-opacity whitespace-nowrap"
      >
        Lola García Marelli
      </a>

      {/* Reorganized Navigation Links */}
      <nav className="flex items-center flex-wrap justify-center gap-x-5 sm:gap-x-7 gap-y-1 text-xs sm:text-[13px] font-medium tracking-[0.04em]">
        {navItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.id)}
              className="text-white/95 hover:text-white transition-colors hover:underline underline-offset-4 decoration-white/70 whitespace-nowrap py-0.5"
            >
              {item.label}
            </a>
            {index < navItems.length - 1 && (
              <span className="text-white/50 text-[10px] hidden sm:inline select-none" aria-hidden="true">
                ·
              </span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </header>
  );
};
