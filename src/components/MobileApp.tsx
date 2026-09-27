import React, { useState } from 'react';

type AppScreen = 'dashboard' | 'location' | 'sos' | 'geofencing' | 'contacts' | 'device';

export const MobileApp: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<AppScreen>('dashboard');

  const screens = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', desc: 'Holistic Safety Overview & Telemetry' },
    { id: 'location', label: 'Live Location', icon: 'location_on', desc: 'Real-Time Map & Route Breadcrumbs' },
    { id: 'sos', label: 'SOS', icon: 'e911_emergency', desc: 'Emergency Dispatch & Response Hub' },
    { id: 'geofencing', label: 'Geofencing', icon: 'radar', desc: 'Safe Zone Radii & Perimeter Alerts' },
    { id: 'contacts', label: 'Emergency Contacts', icon: 'group', desc: 'Guardian Escalation & Priority Chain' },
    { id: 'device', label: 'Device Status', icon: 'memory', desc: 'Battery, Firmware & Sensor Diagnostics' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200 text-slate-800 relative overflow-hidden" id="mobile-app">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-cyan-600 animate-ping"></span>
              Connected Guardian Experience
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14]">
              The NIRVANA Mobile App
            </h2>
            
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Monitor device safety status, track live locations, configure custom geofence safe zones, and coordinate emergency response with a clean, modern iOS &amp; Android companion app.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Cloud Sync: Sub-second &bull; Offline Fallback Ready</span>
          </div>
        </div>

        {/* Screen Switcher Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10">
          {screens.map((sc) => {
            const isSelected = activeScreen === sc.id;
            return (
              <button
                key={sc.id}
                onClick={() => setActiveScreen(sc.id as AppScreen)}
                className={`p-3.5 rounded-xl border transition-all text-left flex flex-col justify-between ${
                  isSelected
                    ? 'bg-purple-600 text-white border-purple-600 shadow-md ring-2 ring-purple-200'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="material-symbols-outlined text-[22px]">
                    {sc.icon}
                  </span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                </div>
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider block">
                    {sc.label}
                  </span>
                  <span className="text-[10px] opacity-80 line-clamp-1 mt-0.5">
                    {sc.desc}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Smartphone Shell with Live Interactive UI */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[420px] rounded-[48px] bg-slate-950 border-[8px] border-slate-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] p-4 sm:p-5 overflow-hidden">
            
            {/* Phone Notch & Camera Pill */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-4 bg-slate-900 rounded-full z-30 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-slate-950 border border-slate-800" />
            </div>

            {/* Phone Status Bar */}
            <div className="pt-2 px-3 pb-3 flex items-center justify-between text-[11px] font-mono text-slate-400 relative z-20">
              <span>09:41</span>
              <div className="flex items-center gap-1.5">
                <span>5G</span>
                <span>📶</span>
                <span>94% 🔋</span>
              </div>
            </div>

            {/* Inner App Container */}
            <div className="w-full min-h-[560px] rounded-[36px] bg-navy-950 border border-slate-800/80 p-4 flex flex-col justify-between overflow-hidden relative text-white">
              
              {/* Screen 1: Dashboard */}
              {activeScreen === 'dashboard' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <span className="text-[11px] font-mono text-purple-400">NIRVANA SENTINEL</span>
                      <h3 className="text-lg font-extrabold text-white">Safety Dashboard</h3>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-[10px] font-mono text-emerald-400 font-bold">
                      ACTIVE
                    </span>
                  </div>

                  {/* Device Status Card */}
                  <div className="p-4 rounded-2xl bg-navy-900 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-900/60 border border-purple-500/30 flex items-center justify-center p-1">
                        <img src="/nirvana-logo.png" alt="NIRVANA" className="h-5 w-auto object-contain" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">NIRVANA Pod #01</div>
                        <div className="text-[10px] font-mono text-slate-400">Firmware v2.4.1 &bull; BLE Synced</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400">94%</span>
                  </div>

                  {/* Safety Score Meter */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/60 to-navy-900 border border-purple-900/40 space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-400">PERIMETER STATUS:</span>
                      <span className="text-cyan-400 font-bold">IN SAFE ZONE</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full" />
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                      <span>Fall Detection: ARMED</span>
                      <span>IMU: 100 Hz</span>
                    </div>
                  </div>

                  {/* Quick SOS Trigger in App */}
                  <button
                    onClick={() => setActiveScreen('sos')}
                    className="w-full py-3.5 rounded-2xl bg-emergency-600 hover:bg-emergency-500 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[18px]">e911_emergency</span>
                    <span>TRIGGER EMERGENCY SOS</span>
                  </button>

                  {/* Recent Activity Feed */}
                  <div className="space-y-2">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      Recent Activity
                    </div>
                    <div className="p-2.5 rounded-xl bg-navy-900/60 border border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
                      <span>Departed Home Safe Zone</span>
                      <span className="text-slate-500 font-mono">08:15 AM</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-navy-900/60 border border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
                      <span>Arrived at Campus Safe Zone</span>
                      <span className="text-slate-500 font-mono">09:05 AM</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Screen 2: Live Location */}
              {activeScreen === 'location' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <span className="text-[11px] font-mono text-blue-400">POSITIONING ENGINE</span>
                      <h3 className="text-lg font-extrabold text-white">Live Tracking</h3>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400">GNSS LOCKED</span>
                  </div>

                  <div className="w-full h-56 rounded-2xl bg-[#090e1a] border border-blue-900/40 relative overflow-hidden flex items-center justify-center p-3">
                    <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center shadow-lg shadow-cyan-500/50 animate-bounce">
                        📍
                      </div>
                      <div className="mt-2 px-2.5 py-1 rounded-lg bg-navy-950/90 border border-cyan-500/40 text-[10px] font-mono text-white">
                        NIRVANA Device &bull; Accurate ~8m
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-navy-900 border border-slate-800 font-mono text-[11px] space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-400">COORDINATES:</span>
                      <span className="text-cyan-300">37.7749° N, 122.4194° W</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">LAST PING:</span>
                      <span className="text-slate-200">2 seconds ago</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">SPEED / BEARING:</span>
                      <span className="text-emerald-400">Walking &bull; 1.2 m/s</span>
                    </div>
                  </div>

                  <button className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider">
                    Share Live Tracking Link
                  </button>
                </div>
              )}

              {/* Screen 3: SOS */}
              {activeScreen === 'sos' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <span className="text-[11px] font-mono text-emergency-400">EMERGENCY PROTOCOL</span>
                      <h3 className="text-lg font-extrabold text-white">SOS Dispatch Hub</h3>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">STANDBY</span>
                  </div>

                  <div className="p-6 rounded-2xl bg-emergency-950/40 border border-emergency-500/40 text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-emergency-600 border-2 border-emergency-400 flex items-center justify-center text-white mx-auto shadow-md">
                      <span className="material-symbols-outlined text-[32px]">e911_emergency</span>
                    </div>
                    <h4 className="text-base font-bold text-white">
                      Instant Distress Broadcast
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Sends immediate coordinates and audio alarm beacon to authorized contacts and emergency services.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <button className="p-3 rounded-xl bg-navy-900 border border-slate-800 text-slate-200 hover:border-slate-600 flex flex-col items-center gap-1">
                      <span className="material-symbols-outlined text-[18px] text-purple-400">volume_up</span>
                      <span>Audio Beacon</span>
                    </button>
                    <button className="p-3 rounded-xl bg-navy-900 border border-slate-800 text-slate-200 hover:border-slate-600 flex flex-col items-center gap-1">
                      <span className="material-symbols-outlined text-[18px] text-emergency-400">local_police</span>
                      <span>Call 911</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Screen 4: Geofencing */}
              {activeScreen === 'geofencing' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <span className="text-[11px] font-mono text-purple-400">VIRTUAL BOUNDARIES</span>
                      <h3 className="text-lg font-extrabold text-white">Safe Zone Rules</h3>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400">2 ACTIVE</span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-3.5 rounded-2xl bg-navy-900 border border-purple-500/40 space-y-1">
                      <div className="flex justify-between items-center text-xs font-bold text-white">
                        <span>Campus Safe Zone</span>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">
                          INSIDE
                        </span>
                      </div>
                      <div className="text-[11px] font-mono text-slate-400">
                        Radius: 500m &bull; Alert: Enter &amp; Exit
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-navy-900 border border-slate-800 space-y-1">
                      <div className="flex justify-between items-center text-xs font-bold text-white">
                        <span>Home Residence</span>
                        <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded">
                          ARMED
                        </span>
                      </div>
                      <div className="text-[11px] font-mono text-slate-400">
                        Radius: 300m &bull; Alert: Exit Only
                      </div>
                    </div>
                  </div>

                  <button className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold uppercase tracking-wider">
                    + Add New Safe Zone
                  </button>
                </div>
              )}

              {/* Screen 5: Emergency Contacts */}
              {activeScreen === 'contacts' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <span className="text-[11px] font-mono text-emerald-400">GUARDIAN CIRCLE</span>
                      <h3 className="text-lg font-extrabold text-white">Emergency Contacts</h3>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">PRIORITY LIST</span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="p-3 rounded-2xl bg-navy-900 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center">
                          1
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Sarah Jenkins</div>
                          <div className="text-[10px] font-mono text-slate-400">Primary Guardian &bull; SMS + Call</div>
                        </div>
                      </div>
                      <span className="text-emerald-400 text-xs font-mono font-bold">VERIFIED</span>
                    </div>

                    <div className="p-3 rounded-2xl bg-navy-900 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                          2
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">David Miller</div>
                          <div className="text-[10px] font-mono text-slate-400">Secondary Contact &bull; Push Alert</div>
                        </div>
                      </div>
                      <span className="text-emerald-400 text-xs font-mono font-bold">VERIFIED</span>
                    </div>
                  </div>

                  <button className="w-full py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 border border-slate-700 text-slate-200 font-mono text-xs font-bold uppercase tracking-wider">
                    + Add Emergency Contact
                  </button>
                </div>
              )}

              {/* Screen 6: Device Status */}
              {activeScreen === 'device' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <span className="text-[11px] font-mono text-cyan-400">HARDWARE TELEMETRY</span>
                      <h3 className="text-lg font-extrabold text-white">Device Diagnostics</h3>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">ALL SYSTEMS NOMINAL</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-navy-900 border border-slate-800 font-mono text-[11px] space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">BATTERY LEVEL:</span>
                      <span className="text-emerald-400 font-bold">94% (Approx 68h remaining)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">CELLULAR SIGNAL:</span>
                      <span className="text-slate-200">LTE-M &bull; -78 dBm (Strong)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">BLUETOOTH LINK:</span>
                      <span className="text-cyan-400 font-bold">BLE 5.3 &bull; PAIRED</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">IMU CALIBRATION:</span>
                      <span className="text-slate-200">100 Hz Baseline Validated</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">FIRMWARE:</span>
                      <span className="text-purple-300">v2.4.1 (Latest)</span>
                    </div>
                  </div>

                  <button className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold uppercase tracking-wider">
                    Run Sensor Self-Test
                  </button>
                </div>
              )}

              {/* In-App Bottom Navigation Bar */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-around text-slate-400 text-xs">
                <button
                  onClick={() => setActiveScreen('dashboard')}
                  className={activeScreen === 'dashboard' ? 'text-purple-400 font-bold' : 'hover:text-white'}
                >
                  Home
                </button>
                <button
                  onClick={() => setActiveScreen('location')}
                  className={activeScreen === 'location' ? 'text-purple-400 font-bold' : 'hover:text-white'}
                >
                  Map
                </button>
                <button
                  onClick={() => setActiveScreen('sos')}
                  className={activeScreen === 'sos' ? 'text-emergency-400 font-bold' : 'hover:text-white'}
                >
                  SOS
                </button>
                <button
                  onClick={() => setActiveScreen('device')}
                  className={activeScreen === 'device' ? 'text-purple-400 font-bold' : 'hover:text-white'}
                >
                  Device
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
