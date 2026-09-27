import React, { useState } from 'react';

interface NavbarProps {
  onRequestDemo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Vision', href: '#positioning' },
    { label: 'Features', href: '#features' },
    { label: '3D Device', href: '#device' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Live Location', href: '#location' },
    { label: 'Fall Detection', href: '#fall-detection' },
    { label: 'Geofencing', href: '#geofencing' },
    { label: 'Emergency SOS', href: '#sos-alert' },
    { label: 'Mobile App', href: '#mobile-app' },
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Use Cases', href: '#use-cases' },
    { label: 'Journey & IP', href: '#achievements' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo - Official Uploaded NIRVANA Logo */}
        <a className="flex items-center gap-3 shrink-0 group py-1" href="#">
          <div className="relative rounded-xl p-1 bg-gradient-to-r from-purple-900/10 to-blue-900/10 border border-purple-200 group-hover:border-purple-400 transition-all shadow-xs">
            <img
              src="/nirvana-logo.png"
              alt="NIRVANA Official Logo"
              className="h-10 sm:h-11 w-auto object-contain rounded-lg"
            />
          </div>
          <div className="hidden xl:flex flex-col text-left">
            <span className="text-[10px] font-mono font-bold tracking-widest text-purple-700 uppercase">
              Universal Safety Platform
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Location &bull; Fall &bull; SOS &bull; Geofence
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden 2xl:flex items-center gap-5 text-[13px] font-semibold text-slate-600">
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

        {/* Medium-Screen Simplified Desktop Navigation */}
        <nav className="hidden lg:flex 2xl:hidden items-center gap-4 text-xs font-semibold text-slate-600">
          <a className="hover:text-purple-700 transition-colors" href="#positioning">Vision</a>
          <a className="hover:text-purple-700 transition-colors" href="#features">Features</a>
          <a className="hover:text-purple-700 transition-colors" href="#device">3D Device</a>
          <a className="hover:text-purple-700 transition-colors" href="#how-it-works">How It Works</a>
          <a className="hover:text-purple-700 transition-colors" href="#location">Location</a>
          <a className="hover:text-purple-700 transition-colors" href="#sos-alert">SOS Alert</a>
          <a className="hover:text-purple-700 transition-colors" href="#mobile-app">Mobile App</a>
          <a className="hover:text-purple-700 transition-colors" href="#achievements">Journey</a>
        </nav>

        {/* Action & Status Badges */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Live Telemetry Indicator */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-medium">IoT Mesh Active</span>
          </div>

          {/* CTA Button */}
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
            <span>Request a Demo</span>
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
          <nav className="grid grid-cols-2 gap-3 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="hover:text-purple-700 transition-colors py-2 px-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between"
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-slate-400 text-[16px]">chevron_right</span>
              </a>
            ))}
          </nav>
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
            <span className="flex items-center gap-1.5 text-purple-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Universal SOS Safety Platform
            </span>
            <span>NIRVANA 2026</span>
          </div>
        </div>
      )}
    </header>
  );
};
