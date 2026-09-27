import React, { useState } from 'react';

export const Hero: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>('sos');

  const capabilities = [
    {
      id: 'location',
      icon: '📍',
      label: 'Location',
      desc: 'Real-Time GNSS & Cellular Pings',
      color: 'from-blue-500 to-cyan-400',
      badgeBg: 'bg-white/95 border-blue-200 text-blue-900 shadow-md',
      pos: 'top-2 left-4 sm:top-4 sm:left-8',
    },
    {
      id: 'sos',
      icon: '🆘',
      label: 'SOS Alert',
      desc: 'Direct Emergency Lifeline Trigger',
      color: 'from-red-500 to-rose-400',
      badgeBg: 'bg-white/95 border-red-200 text-red-900 shadow-md',
      pos: 'top-2 right-4 sm:top-4 sm:right-8',
    },
    {
      id: 'fall',
      icon: '⚠️',
      label: 'Fall Detection',
      desc: 'Multi-Axis IMU Sensor Fusion',
      color: 'from-amber-500 to-yellow-400',
      badgeBg: 'bg-white/95 border-amber-200 text-amber-900 shadow-md',
      pos: 'bottom-20 left-4 sm:bottom-24 sm:left-6',
    },
    {
      id: 'geofence',
      icon: '📐',
      label: 'Geofencing',
      desc: 'Automated Safe Zone Perimeters',
      color: 'from-purple-500 to-indigo-400',
      badgeBg: 'bg-white/95 border-purple-200 text-purple-900 shadow-md',
      pos: 'bottom-20 right-4 sm:bottom-24 sm:right-6',
    },
    {
      id: 'app',
      icon: '📱',
      label: 'Mobile App',
      desc: 'Guardian Monitoring & Telemetry',
      color: 'from-emerald-500 to-teal-400',
      badgeBg: 'bg-white/95 border-emerald-200 text-emerald-900 shadow-md',
      pos: 'bottom-2 left-1/2 -translate-x-1/2',
    },
  ];

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center py-10 lg:py-14 xl:py-16 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200 overflow-hidden">
      {/* Background subtle technical grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundSize: '40px 40px',
          backgroundImage:
            'linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)',
        }}
      />
      
      {/* Subtle ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-100/40 blur-[130px] pointer-events-none -z-10" />

      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Brand, Vision & Copy (6 Cols) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            
            {/* Official Brand Presentation: [UPLOADED LOGO] + NIRVANA / Universal Personal Safety Technology */}
            <div className="flex flex-wrap items-center gap-3.5">
              <div className="flex items-center gap-3 p-1.5 pr-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <img
                  src="/nirvana-logo.png"
                  alt="NIRVANA Official Logo"
                  className="h-12 w-12 sm:h-14 sm:w-14 object-contain rounded-xl shadow-xs"
                />
                <div className="flex flex-col text-left">
                  <span className="text-lg sm:text-xl font-black tracking-tight text-slate-950 font-sans leading-none">
                    NIRVANA
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-purple-700 uppercase mt-1">
                    Universal Personal Safety Technology
                  </span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                </span>
                <span>Universal SOS Safety Device</span>
              </div>
            </div>

            {/* Main Headline & Supporting Positioning */}
            <div className="space-y-3.5">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.5rem] font-bold text-slate-950 tracking-tight leading-[1.12]">
                NIRVANA &mdash; <br />
                <span className="text-purple-600">
                  Safety, Wherever You Go.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
                A universal SOS safety device built for real-time location detection, autonomous fall detection, geofencing, SOS alerts, mobile application, and connected safety monitoring.
              </p>
            </div>

            {/* Core Message Callout Banner */}
            <div className="p-4 sm:p-5 rounded-xl bg-purple-50/70 border border-purple-200/80 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700 shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">shield</span>
                </div>
                <div>
                  <div className="text-xs font-mono font-bold tracking-wider text-purple-700 uppercase">
                    Core Philosophy
                  </div>
                  <p className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                    "Safety shouldn't depend on having your phone in your hand."
                  </p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    NIRVANA provides an independent safety layer that can accompany the user through different situations — from solo commutes to remote worksites and assistive care.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#positioning"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold shadow-xs hover:shadow-md transition-all whitespace-nowrap"
              >
                <span>Explore NIRVANA</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-semibold shadow-xs transition-colors whitespace-nowrap"
              >
                <span className="material-symbols-outlined text-[18px] text-slate-500">play_circle</span>
                <span>See How It Works</span>
              </a>
            </div>

            {/* 5-Stage Data Flow Pipeline Indicator */}
            <div className="pt-4 border-t border-slate-200">
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2 font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Signal Architecture Flow
              </div>
              <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-600 overflow-x-auto pb-1 gap-1">
                <span className="text-slate-900 font-bold bg-slate-100 px-2 py-0.5 rounded border border-slate-200">DEVICE</span>
                <span className="text-slate-400">&rarr;</span>
                <span className="text-purple-700 font-semibold">SENSORS</span>
                <span className="text-slate-400">&rarr;</span>
                <span className="text-blue-700 font-semibold">SAFETY INTELLIGENCE</span>
                <span className="text-slate-400">&rarr;</span>
                <span className="text-rose-700 font-semibold">LOCATION / ALERT</span>
                <span className="text-slate-400">&rarr;</span>
                <span className="text-emerald-700 font-semibold">MOBILE APP</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium 3D Representation of NIRVANA Device & Capabilities (6 Cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full max-w-[620px] mx-auto min-h-[460px] sm:min-h-[520px] rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 flex items-center justify-center shadow-xl overflow-hidden">
              
              {/* Concentric Radar Wave Visuals */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[300px] h-[300px] rounded-full border border-purple-500/15 animate-ping-slow" />
                <div className="absolute w-[420px] h-[420px] rounded-full border border-purple-500/10" />
                <div className="absolute w-[520px] h-[520px] rounded-full border border-purple-500/5" />
              </div>

              {/* Glowing SVG connection lines to capabilities */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 500 500">
                <path d="M 250 250 L 100 80" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                <path d="M 250 250 L 400 80" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                <path d="M 250 250 L 90 400" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                <path d="M 250 250 L 410 400" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
                <path d="M 250 250 L 250 450" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
              </svg>

              {/* Center 3D NIRVANA Device Visual */}
              <div className="relative z-20 flex flex-col items-center">
                
                {/* 3D Simulated Device Housing */}
                <div className="relative group cursor-pointer">
                  {/* Outer glow ring */}
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 opacity-60 blur-xl group-hover:opacity-90 transition-all duration-500 animate-pulse-ring" />

                  {/* Device Core Chassis */}
                  <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border-4 border-slate-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_2px_10px_rgba(255,255,255,0.15)] flex flex-col items-center justify-center p-4 transition-transform duration-500 group-hover:scale-105">
                    
                    {/* Metallic Chamfered Bezel */}
                    <div className="absolute inset-2 rounded-full border border-purple-500/30 bg-gradient-to-tr from-purple-950/40 via-transparent to-cyan-950/30 pointer-events-none" />

                    {/* Sensor Array LED Ring */}
                    <div className="absolute inset-5 rounded-full border border-dashed border-cyan-400/40 animate-spin" style={{ animationDuration: '24s' }} />

                    {/* Central Brand Badge & SOS Actuator */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-purple-400/40 flex items-center justify-center shadow-inner mb-2 p-1.5">
                        <img src="/nirvana-logo.png" alt="NIRVANA Logo" className="h-full w-full object-contain rounded-xl" />
                      </div>

                      <span className="font-extrabold text-base sm:text-lg tracking-wider text-white uppercase">
                        NIRVANA
                      </span>
                      <span className="text-[10px] font-mono text-cyan-300 font-semibold tracking-wider uppercase">
                        Universal SOS Core
                      </span>

                      {/* Tactile SOS Emergency Button Center */}
                      <button
                        onClick={() => setActiveNode('sos')}
                        className="mt-3 px-3 py-1 rounded-full bg-emergency-600 hover:bg-emergency-500 text-white font-mono font-bold text-[10px] tracking-wider uppercase border border-emergency-400 shadow-md flex items-center gap-1 active:scale-95 transition-all"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                        SOS TRIGGER
                      </button>
                    </div>

                    {/* Active Telemetry Mini Badges on Device Rim */}
                    <div className="absolute top-2 px-2 py-0.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-[9px] font-mono text-cyan-300">
                      GNSS LOCK &bull; OK
                    </div>
                    <div className="absolute bottom-2 px-2 py-0.5 rounded-full bg-slate-900/90 border border-purple-500/40 text-[9px] font-mono text-purple-300">
                      IMU SENSORS &bull; 100Hz
                    </div>
                  </div>
                </div>

                {/* Device Micro Status Bar */}
                <div className="mt-5 px-4 py-1.5 rounded-full bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center gap-3 shadow-md">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    STANDALONE ENGINE
                  </span>
                  <span className="text-slate-600">|</span>
                  <span className="text-slate-400">Zero Phone Dependency</span>
                </div>

              </div>

              {/* 5 Floating Capability Interactive Cards Around Device */}
              {capabilities.map((cap) => {
                const isSelected = activeNode === cap.id;
                return (
                  <div
                    key={cap.id}
                    onClick={() => setActiveNode(cap.id)}
                    className={`absolute ${cap.pos} z-30 cursor-pointer transition-all duration-300 group ${
                      isSelected ? 'scale-105' : 'hover:scale-105'
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-xl backdrop-blur-md border transition-all ${
                        cap.badgeBg
                      } ${isSelected ? 'ring-2 ring-purple-500' : ''}`}
                    >
                      <span className="text-base sm:text-lg">{cap.icon}</span>
                      <div className="text-left">
                        <div className="text-xs font-bold leading-tight flex items-center gap-1">
                          <span>{cap.label}</span>
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />}
                        </div>
                        <div className="text-[10px] text-slate-500 font-mono hidden sm:block">
                          {cap.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
