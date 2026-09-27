import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-purple-900/30">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 xl:gap-12 mb-12">
          
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-xl bg-purple-950/80 border border-purple-500/30">
                <img
                  src="/nirvana-logo.png"
                  alt="NIRVANA Logo"
                  className="h-9 w-auto object-contain rounded-lg"
                />
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              NIRVANA is a universal SOS safety device platform designed to provide emergency assistance wherever and however the user needs it.
            </p>
            <div className="text-xs text-purple-300 font-mono font-medium">
              Universal Personal Safety Technology &bull; 2026
            </div>
          </div>

          {/* Col 2: Core Platform Capabilities */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a className="hover:text-purple-300 transition-colors" href="#location">Real-Time Location</a></li>
              <li><a className="hover:text-purple-300 transition-colors" href="#fall-detection">Fall Detection Engine</a></li>
              <li><a className="hover:text-purple-300 transition-colors" href="#sos-alert">SOS Emergency Alert</a></li>
              <li><a className="hover:text-purple-300 transition-colors" href="#geofencing">Geofencing &amp; Safe Zones</a></li>
              <li><a className="hover:text-purple-300 transition-colors" href="#mobile-app">Mobile Companion App</a></li>
              <li><a className="hover:text-purple-300 transition-colors" href="#ecosystem">Connected Safety Network</a></li>
            </ul>
          </div>

          {/* Col 3: Usage Form Factors & Navigation */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Form Factors
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a className="hover:text-purple-300 transition-colors" href="#positioning">Footwear Integration</a></li>
              <li><a className="hover:text-purple-300 transition-colors" href="#positioning">Wearable Attachment</a></li>
              <li><a className="hover:text-purple-300 transition-colors" href="#positioning">Personal Safety Pod</a></li>
              <li><a className="hover:text-purple-300 transition-colors" href="#positioning">Worker Safety</a></li>
              <li><a className="hover:text-purple-300 transition-colors" href="#positioning">Emergency Assistance</a></li>
              <li><a className="hover:text-purple-300 transition-colors" href="#achievements">Journey &amp; IP Milestones</a></li>
            </ul>
          </div>

          {/* Col 4: Verified Credentials & Encryption */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Verified Credentials
            </h4>
            <div className="p-4 rounded-2xl bg-navy-900 border border-slate-800 text-xs space-y-2 font-mono">
              <div className="flex justify-between">
                <span className="text-slate-400">IP Status:</span>
                <span className="text-purple-300 font-bold">Patent Published</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Incubation:</span>
                <span className="text-amber-400 font-bold">STPI OCP 2.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Media Feature:</span>
                <span className="text-cyan-400 font-bold">RASTA Magazine</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Encryption:</span>
                <span className="text-white font-bold">AES-256 GCM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            &copy; 2026 NIRVANA. All rights reserved. Universal Personal Safety Technology.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">"Safety shouldn't depend on having your phone in your hand."</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
