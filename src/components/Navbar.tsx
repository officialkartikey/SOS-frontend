import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Biomechanics', href: '#biomechanics' },
    { label: 'Applications', href: '#applications' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 h-20 flex items-center justify-between gap-6">
        
        {/* Brand Logo */}
        <a className="flex items-center gap-3.5 shrink-0 group" href="#">
          <div className="w-11 h-11 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-sm group-hover:bg-brand-700 transition-colors">
            <span className="material-symbols-outlined text-[24px]">health_and_safety</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-slate-900 leading-tight">Apex SoleTech</span>
            <span className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase">Industrial Life-Safety Solutions</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="hover:text-brand-600 transition-colors py-2 relative group"
              href={link.href}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-600 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Action & Certification Badges */}
        <div className="flex items-center gap-3.5 sm:gap-4">
          {/* Live System Telemetry Status */}
          <div className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[11px] text-slate-600">Mesh Active: 99.98%</span>
          </div>

          {/* Certified Badge */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
            <span>ANSI &amp; ISO-20345 Certified</span>
          </div>

          {/* CTA Button */}
          <a
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-sm transition-all focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 whitespace-nowrap"
            href="#contact"
          >
            Schedule Demo
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Slide-Down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-5 shadow-lg">
          <nav className="flex flex-col gap-4 text-base font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="hover:text-brand-600 transition-colors py-1.5 flex items-center justify-between"
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-slate-400 text-[18px]">chevron_right</span>
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                ANSI &amp; ISO-20345 Certified
              </span>
              <span className="font-mono">Sub-GHz RF</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
