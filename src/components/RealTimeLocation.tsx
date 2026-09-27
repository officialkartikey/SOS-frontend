import React, { useState } from 'react';

export const RealTimeLocation: React.FC = () => {
  const [isLivePinging, setIsLivePinging] = useState<boolean>(true);
  const [selectedWaypoint, setSelectedWaypoint] = useState<number>(3);

  const timelineEvents = [
    {
      time: '08:15 AM',
      title: 'Residential Safe Zone Exit',
      desc: 'Device departed primary safe zone perimeter. Background tracking active.',
      coords: '37.7812° N, 122.4089° W',
      status: 'verified',
    },
    {
      time: '08:42 AM',
      title: 'In-Transit via Metro Route',
      desc: 'Cellular IoT fallback engaged during tunnel transit. Pings nominal.',
      coords: '37.7780° N, 122.4140° W',
      status: 'verified',
    },
    {
      time: '09:05 AM',
      title: 'Campus Arrival & Check-In',
      desc: 'Entered designated education safe zone. Battery at 94%.',
      coords: '37.7749° N, 122.4194° W',
      status: 'verified',
    },
    {
      time: 'Live Now',
      title: 'Current Active Location',
      desc: 'Periodic GNSS heartbeat ping. Signal lock with 11 satellites.',
      coords: '37.7752° N, 122.4188° W',
      status: 'active',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200 text-slate-800 relative overflow-hidden" id="location">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
              Independent Situational Telemetry
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14]">
              Real-Time Location Tracking
            </h2>
            
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Track and share the user's current location with authorized emergency contacts seamlessly — whether paired with a phone or operating autonomously over cellular networks.
            </p>
          </div>

          {/* Map Status Pill */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsLivePinging(!isLivePinging)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-mono font-semibold shadow-xs hover:border-slate-300"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live Pings: {isLivePinging ? 'Active (3s)' : 'Paused'}</span>
            </button>
          </div>
        </div>

        {/* Main Grid: Interactive Dark Map & Simulated Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Dark Map (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-[500px] sm:h-[550px] rounded-3xl bg-[#090e1a] border border-slate-800 shadow-xl overflow-hidden p-6 flex flex-col justify-between">
              
              {/* Simulated Dark City Street Map Vector Graphics */}
              <div className="absolute inset-0 bg-[#090e1a] pointer-events-none">
                <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="streetMap" width="120" height="120" patternUnits="userSpaceOnUse">
                    <path d="M 0 30 L 120 30 M 0 90 L 120 90 M 30 0 L 30 120 M 90 0 L 90 120" stroke="#38bdf8" strokeWidth="1" />
                    <rect x="35" y="35" width="50" height="50" fill="#1e293b" rx="4" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#streetMap)" />
                </svg>

                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path d="M -50 300 L 700 100" stroke="#334155" strokeWidth="4" opacity="0.4" />
                  <path d="M 100 550 L 500 -50" stroke="#334155" strokeWidth="6" opacity="0.3" />
                  <circle cx="200" cy="320" r="160" fill="none" stroke="#7c3aed" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
                </svg>
              </div>

              {/* Dynamic Connection Path between NIRVANA Device and Authorized Contact */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 600 500">
                <defs>
                  <linearGradient id="locationPathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#818cf8" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#34d399" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                <path
                  d="M 180 320 Q 300 200 440 160"
                  fill="none"
                  stroke="url(#locationPathGrad)"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                  className={isLivePinging ? 'animate-progress-flow' : ''}
                />
              </svg>

              {/* Top Map HUD */}
              <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    Satellite Mesh: Active
                  </span>
                </div>
                <div className="font-mono text-[11px] text-slate-400">
                  Dual Uplink: BLE + Cellular Standalone
                </div>
              </div>

              {/* Marker 1: NIRVANA DEVICE (Current Location) */}
              <div className="absolute top-[320px] left-[180px] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <div className="relative">
                  <span className="absolute -inset-3 rounded-full bg-cyan-400/40 animate-ping-slow pointer-events-none" />
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-500 border-2 border-white flex items-center justify-center text-white shadow-xl shadow-cyan-950/80">
                    <span className="text-xl">📍</span>
                  </div>
                </div>

                <div className="mt-2 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-cyan-500/50 backdrop-blur-md text-center shadow-lg">
                  <span className="font-mono text-xs font-bold text-white block">
                    NIRVANA DEVICE
                  </span>
                  <span className="font-mono text-[10px] text-cyan-300">
                    Current Location
                  </span>
                </div>
              </div>

              {/* Marker 2: Authorized Contact (Guardian Mobile App) */}
              <div className="absolute top-[160px] left-[440px] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <div className="relative">
                  <span className="absolute -inset-3 rounded-full bg-emerald-400/30 animate-pulse pointer-events-none" />
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 border-2 border-white flex items-center justify-center text-white shadow-xl shadow-emerald-950/80">
                    <span className="text-xl">📱</span>
                  </div>
                </div>

                <div className="mt-2 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-emerald-500/50 backdrop-blur-md text-center shadow-lg">
                  <span className="font-mono text-xs font-bold text-white block">
                    Authorized Contact
                  </span>
                  <span className="font-mono text-[10px] text-emerald-300">
                    Live Guardian Link
                  </span>
                </div>
              </div>

              {/* Bottom HUD: Coordinates & Responsible Technical Accuracy Note */}
              <div className="relative z-20 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">LAT/LON:</span>
                  <span className="text-white">37.7752° N, 122.4188° W</span>
                  <span className="text-slate-500">&bull;</span>
                  <span className="text-slate-400">Fix Confidence: High</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Distance: 1.4 km &bull; Ping Latency: 240 ms
                </div>
              </div>

            </div>

            {/* Responsible Location Framing Disclaimer */}
            <div className="mt-3 p-3.5 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-600 leading-relaxed flex items-start gap-2 shadow-2xs">
              <span className="material-symbols-outlined text-purple-700 text-[16px] shrink-0 mt-0.5">verified</span>
              <span>
                <strong>System Note:</strong> NIRVANA employs multi-constellation GNSS complemented by cellular cell-tower tri-lateration to deliver dependable location situational awareness. We do not make unsupported claims of centimeter-level or guaranteed indoors location.
              </span>
            </div>
          </div>

          {/* Right Column: Simulated Location Timeline (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs relative">
            <div className="space-y-5">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="font-mono text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Simulated Location Timeline
                </span>
                <span className="font-mono text-[10px] text-slate-400">
                  Today &bull; Verified Breadcrumbs
                </span>
              </div>

              {/* Timeline Items */}
              <div className="space-y-3">
                {timelineEvents.map((evt, idx) => {
                  const isSelected = selectedWaypoint === idx;
                  const isActive = evt.status === 'active';

                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedWaypoint(idx)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-purple-50/70 border-purple-400 shadow-xs'
                          : 'bg-slate-50/60 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span
                          className={`font-mono text-xs font-bold ${
                            isActive ? 'text-purple-700 flex items-center gap-1.5' : 'text-slate-600'
                          }`}
                        >
                          {isActive && <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />}
                          {evt.time}
                        </span>

                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                            isActive
                              ? 'bg-purple-100 text-purple-800 border-purple-200'
                              : 'bg-white text-slate-500 border-slate-200'
                          }`}
                        >
                          {evt.coords}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 mt-1">
                        {evt.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        {evt.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Guardian Escalation Note */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Authorized Guardian Sharing</span>
                <span className="text-emerald-700 font-semibold">2 CONTACTS SYNCED</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
