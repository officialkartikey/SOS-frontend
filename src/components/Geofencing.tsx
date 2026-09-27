import React, { useState } from 'react';

export const Geofencing: React.FC = () => {
  const [isOutside, setIsOutside] = useState<boolean>(false);
  const [radius, setRadius] = useState<number>(450);

  const toggleBoundary = () => {
    setIsOutside(!isOutside);
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200 text-slate-800 relative overflow-hidden" id="geofencing">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
              Autonomous Perimeter Monitoring
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14]">
              Intelligent Geofencing
            </h2>
            
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Define custom safe zones around homes, schools, workplaces, or transit paths. NIRVANA automatically detects when the boundary is crossed and notifies authorized contacts without battery-draining continuous map polling.
            </p>
          </div>

          {/* Interactive Toggle Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleBoundary}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-xs font-bold uppercase tracking-wider shadow-xs transition-all ${
                isOutside
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'bg-emergency-600 hover:bg-emergency-700 text-white'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">
                {isOutside ? 'arrow_back' : 'warning'}
              </span>
              <span>
                {isOutside ? 'Return Device to Safe Zone' : 'Simulate Crossing Boundary'}
              </span>
            </button>
          </div>
        </div>

        {/* Main Grid: Interactive Map with Circular Safe Zone & Alert Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Map Canvas (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-[520px] rounded-3xl bg-[#090e1a] border border-slate-800 shadow-xl overflow-hidden p-6 flex flex-col justify-between">
              
              <div className="absolute inset-0 pointer-events-none opacity-25">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="geofenceGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#475569" strokeWidth="0.8" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#geofenceGrid)" />
                </svg>
              </div>

              {/* Safe Zone SVG Circle in Map */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 500">
                <defs>
                  <radialGradient id="safeZoneGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
                    <stop offset="80%" stopColor="#7c3aed" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <circle
                  cx="240"
                  cy="250"
                  r={radius / 3}
                  fill="url(#safeZoneGlow)"
                  stroke={isOutside ? '#ef4444' : '#06b6d4'}
                  strokeWidth="2.5"
                  strokeDasharray={isOutside ? '6 6' : 'none'}
                  className="transition-all duration-700"
                />

                <circle
                  cx="240"
                  cy="250"
                  r={radius / 4.5}
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity="0.4"
                />
              </svg>

              {/* Map Header Status */}
              <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      isOutside ? 'bg-emergency-500 animate-ping' : 'bg-emerald-400 animate-pulse'
                    }`}
                  />
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    {isOutside ? 'Status: Boundary Breached' : 'Status: Inside Safe Zone'}
                  </span>
                </div>
                <div className="font-mono text-[11px] text-slate-400">
                  Radius: {radius}m &bull; High Frequency Geofence
                </div>
              </div>

              {/* Label Inside Safe Zone */}
              <div className="absolute top-[250px] left-[240px] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center pointer-events-none">
                <span className="font-mono text-xs font-extrabold text-cyan-300 tracking-widest uppercase bg-slate-900/90 px-3 py-1 rounded-full border border-cyan-500/40 shadow-lg">
                  SAFE ZONE
                </span>
                <span className="text-[10px] font-mono text-slate-400 mt-1">
                  Designated Perimeter
                </span>
              </div>

              {/* Label Outside Safe Zone */}
              <div className="absolute top-[80px] right-[40px] z-10 flex flex-col items-end pointer-events-none">
                <span
                  className={`font-mono text-xs font-extrabold tracking-widest uppercase px-3 py-1 rounded-full border shadow-lg ${
                    isOutside
                      ? 'bg-emergency-950/90 text-red-300 border-emergency-500/60 animate-pulse'
                      : 'bg-slate-900/80 text-slate-400 border-slate-800'
                  }`}
                >
                  GEOFENCE ALERT
                </span>
                <span className="text-[10px] font-mono text-slate-400 mt-1">
                  Exclusion / Alert Region
                </span>
              </div>

              {/* NIRVANA Device Pin */}
              <div
                style={{
                  top: isOutside ? '110px' : '230px',
                  left: isOutside ? '480px' : '260px',
                  transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
                className="absolute z-20 flex flex-col items-center -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              >
                <div className="relative">
                  <span
                    className={`absolute -inset-2.5 rounded-full pointer-events-none ${
                      isOutside ? 'bg-emergency-500/40 animate-ping' : 'bg-cyan-400/40 animate-pulse'
                    }`}
                  />
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-white shadow-xl border-2 transition-all ${
                      isOutside
                        ? 'bg-emergency-600 border-white'
                        : 'bg-purple-600 border-white'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {isOutside ? 'warning' : 'person_pin_circle'}
                    </span>
                  </div>
                </div>

                <div
                  className={`mt-2 px-2.5 py-1 rounded-xl text-center shadow-lg backdrop-blur-md border ${
                    isOutside
                      ? 'bg-slate-900/95 border-emergency-500/50 text-red-200'
                      : 'bg-slate-900/95 border-cyan-500/50 text-cyan-200'
                  }`}
                >
                  <span className="font-mono text-[11px] font-bold block">
                    NIRVANA DEVICE
                  </span>
                  <span className="font-mono text-[9px]">
                    {isOutside ? 'Out of Bounds' : 'Protected'}
                  </span>
                </div>
              </div>

              {/* Bottom Controls: Radius Slider */}
              <div className="relative z-20 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <span className="text-slate-400 whitespace-nowrap">Radius:</span>
                  <input
                    type="range"
                    min="250"
                    max="800"
                    step="50"
                    value={radius}
                    onChange={(e) => setRadius(Number(e.target.value))}
                    className="w-full sm:w-44 accent-purple-500 cursor-pointer"
                  />
                  <span className="text-white font-bold">{radius}m</span>
                </div>

                <div className="text-[11px] text-slate-400">
                  Click 'Simulate Crossing Boundary' to trigger crossing
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Alert Card & Geofence Intelligence (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Real-Time Geofence Alert Card */}
            <div
              className={`rounded-2xl border p-6 sm:p-8 transition-all duration-300 shadow-xs relative overflow-hidden ${
                isOutside
                  ? 'bg-red-50/80 border-emergency-400 shadow-sm ring-1 ring-red-400/40'
                  : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <span className="font-mono text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Automated Event Dispatch
                </span>
                <span
                  className={`font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                    isOutside
                      ? 'bg-emergency-600 text-white border-emergency-500'
                      : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  }`}
                >
                  {isOutside ? 'TRIGGERED' : 'NORMAL'}
                </span>
              </div>

              {/* Alert Content */}
              <div className="mt-5 space-y-3">
                <div className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isOutside
                        ? 'bg-emergency-600 text-white shadow-xs'
                        : 'bg-emerald-100 text-emerald-700'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[22px]">
                      {isOutside ? 'crisis_alert' : 'verified'}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">
                      {isOutside ? 'Geofence boundary crossed' : 'Device inside Safe Zone'}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {isOutside
                        ? 'Device NIRVANA-01 crossed the perimeter at 03:42 PM. Automated SMS & App push notification dispatched to 2 emergency contacts.'
                        : 'Device NIRVANA-01 is securely operating within Campus Safe Zone. Battery at 92%, GNSS lock stable.'}
                    </p>
                  </div>
                </div>

                {/* Telemetry Snapshot */}
                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-[11px] space-y-1 text-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-500">ZONE_NAME:</span>
                    <span className="text-purple-700 font-bold">Campus Safe Zone</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">EVENT_TYPE:</span>
                    <span className={isOutside ? 'text-emergency-600 font-bold' : 'text-emerald-700 font-bold'}>
                      {isOutside ? 'GEOFENCE_EXIT' : 'GEOFENCE_WITHIN'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">TIME:</span>
                    <span className="text-slate-900">Today, 03:42:18 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">NOTIFIED:</span>
                    <span className="text-slate-900">Sarah M. (Guardian 1), David K. (Guardian 2)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Application Callout */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-2 shadow-xs">
              <span className="font-mono font-bold text-slate-900 uppercase tracking-wide block">
                Why Automated Geofencing Matters:
              </span>
              <p className="leading-relaxed">
                Parents, caregivers, and lone-worker managers can rest assured knowing they will receive immediate proactive notifications if a child, senior, or worker departs an authorized perimeter — with zero manual check-ins needed.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
