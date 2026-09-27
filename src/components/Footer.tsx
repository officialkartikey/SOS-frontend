import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-purple-900/30">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 xl:gap-12 mb-12">
          
          {/* Col 1: Brand & Logo: [UPLOADED LOGO] + NIRVANA */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="p-1 rounded-xl bg-white/5 border border-purple-500/30 shadow-md">
                <img
                  src="/nirvana-logo.png"
                  alt="NIRVANA Official Logo"
                  className="h-11 w-11 object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white font-sans leading-none">
                  NIRVANA
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400 font-semibold mt-1">
                  Universal Personal Safety Technology
                </span>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              NIRVANA is a universal SOS safety device platform designed to provide emergency assistance wherever and however the user needs it. Built with real-time location detection, fall detection, geofencing, and connected safety monitoring.
            </p>
            
            <div className="text-xs text-purple-300 font-mono font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>NIRVANA &mdash; Safety, Wherever You Go.</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a className="hover:text-purple-300 transition-colors" href="#about">About NIRVANA</a></li>
              <li><a className="hover:text-purple-300 transition-colors" href="#product">Product Architecture</a></li>
              <li><a className="hover:text-purple-300 transition-colors" href="#technology">Technology Pipeline</a></li>
              <li><a className="hover:text-purple-300 transition-colors" href="#use-cases">Use Cases</a></li>
              <li><a className="hover:text-purple-300 transition-colors" href="#achievements">Achievements &amp; IP</a></li>
              <li><a className="hover:text-purple-300 transition-colors" href="#team">Engineering Team</a></li>
              <li><a className="hover:text-purple-300 transition-colors" href="#contact">Contact &amp; Demo</a></li>
            </ul>
          </div>

          {/* Col 3: Core Safety Capabilities */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a className="hover:text-purple-300 transition-colors" href="#location">Real-Time Location Detection</a></li>
              <li><a className="hover:text-purple-300 transition-colors" href="#fall-detection">Autonomous Fall Detection</a></li>
              <li><a className="hover:text-purple-300 transition-colors" href="#geofencing">Geofencing &amp; Safe Zones</a></li>
              <li><a className="hover:text-purple-300 transition-colors" href="#sos-alert">Emergency SOS Actuation</a></li>
              <li><a className="hover:text-purple-300 transition-colors" href="#mobile-app">Mobile Companion App</a></li>
              <li><a className="hover:text-purple-300 transition-colors" href="#ecosystem">Connected Safety Monitoring</a></li>
            </ul>
          </div>

          {/* Col 4: Verified Credentials & Encryption */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Verified Credentials
            </h4>
            <div className="p-4 rounded-2xl bg-navy-900 border border-slate-800 text-xs space-y-2.5 font-mono">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">IP Status:</span>
                <span className="text-purple-300 font-bold">Innovation Patent Published</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Incubation:</span>
                <span className="text-amber-400 font-bold">STPI OCP 2.0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Media Feature:</span>
                <span className="text-cyan-400 font-bold">RASTA Magazine</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Telemetry:</span>
                <span className="text-emerald-400 font-bold">BLE 5.3 + Cellular IoT</span>
              </div>
              <div className="flex justify-between items-center">
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
            <span className="text-purple-400 font-medium">"NIRVANA &mdash; Safety, Wherever You Go."</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
