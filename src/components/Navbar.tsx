import React, { useState } from 'react';

interface NavbarProps {
  onRequestDemo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Product', href: '#product' },
    { label: 'Technology', href: '#technology' },
    { label: 'Use Cases', href: '#use-cases' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Display: [UPLOADED LOGO] NIRVANA */}
        <a className="flex items-center gap-3 sm:gap-3.5 shrink-0 group py-1" href="#" aria-label="NIRVANA Home">
          <div className="relative p-0.5 rounded-xl bg-slate-50 border border-slate-200/90 group-hover:border-purple-300 transition-all shadow-xs flex items-center justify-center">
            <img
              src="/nirvana-logo.png"
              alt="NIRVANA Official Logo"
              className="h-11 sm:h-12 w-11 sm:w-12 object-contain rounded-lg"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-950 font-sans leading-none">
              NIRVANA
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 tracking-tight leading-tight mt-0.5 hidden xs:block">
              Universal Personal Safety Technology
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="hover:text-purple-700 transition-colors py-2 relative group whitespace-nowrap"
              href={link.href}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Action & Status Badges */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Live Telemetry Indicator */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-medium">IoT Mesh Active</span>
          </div>

          {/* CTA Button: Request Demo */}
          <a
            href="#demo-form"
            onClick={(e) => {
              if (onRequestDemo) {
                e.preventDefault();
                onRequestDemo();
              }
            }}
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-semibold shadow-xs transition-all hover:shadow-sm whitespace-nowrap"
          >
            <span>Request Demo</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Slide-Down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-6 shadow-lg">
          <nav className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="hover:text-purple-700 hover:bg-purple-50 transition-colors py-2.5 px-3.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between"
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-slate-400 text-[18px]">chevron_right</span>
              </a>
            ))}
          </nav>
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
            <span className="flex items-center gap-1.5 text-purple-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Universal Personal Safety
            </span>
            <span>NIRVANA 2026</span>
          </div>
        </div>
      )}
    </header>
  );
};
