import React, { useState } from 'react';

export const SosAlert: React.FC = () => {
  const [isTriggered, setIsTriggered] = useState<boolean>(false);
  const [alertStep, setAlertStep] = useState<number>(0);

  const steps = [
    {
      label: 'SOS BUTTON PRESSED',
      desc: 'Tactile positive-click trigger engaged on device',
      time: 'T+0 ms',
      icon: 'touch_app',
    },
    {
      label: 'LOCATION CAPTURED',
      desc: 'Multi-constellation GNSS & cell-tower coordinates locked',
      time: 'T+180 ms',
      icon: 'my_location',
    },
    {
      label: 'EMERGENCY ALERT SENT',
      desc: 'AES-256 encrypted distress payload transmitted over cellular IoT',
      time: 'T+420 ms',
      icon: 'cell_tower',
    },
    {
      label: 'AUTHORIZED CONTACT NOTIFIED',
      desc: 'High-priority push alert, SMS & live tracking link delivered to guardian circle',
      time: 'T+980 ms',
      icon: 'contact_phone',
    },
  ];

  const handleTrigger = () => {
    setIsTriggered(true);
    setAlertStep(0);

    setTimeout(() => setAlertStep(1), 350);
    setTimeout(() => setAlertStep(2), 750);
    setTimeout(() => setAlertStep(3), 1150);
  };

  const handleReset = () => {
    setIsTriggered(false);
    setAlertStep(0);
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200 text-slate-800 relative overflow-hidden" id="sos-alert">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 text-emergency-700 text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emergency-600 animate-ping"></span>
            Critical Life-Safety Protocol
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            When Seconds Matter.
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Safety shouldn't depend on having your phone in your hand, unlocking a screen, or finding an app. A single deliberate press of the NIRVANA SOS actuator instantly triggers emergency dispatch.
          </p>
        </div>

        {/* Main Interactive SOS Emergency Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Interactive Tactile SOS Trigger Simulator (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            
            <div className="relative group cursor-pointer my-6">
              <div
                className={`absolute -inset-8 rounded-full transition-all duration-500 ${
                  isTriggered
                    ? 'bg-emergency-500/20 animate-ping-slow'
                    : 'bg-purple-100 group-hover:bg-purple-200'
                }`}
              />

              {/* Big Emergency SOS Button */}
              <button
                onClick={handleTrigger}
                className={`relative w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 flex flex-col items-center justify-center p-6 shadow-xl transition-all duration-300 active:scale-95 select-none ${
                  isTriggered
                    ? 'bg-gradient-to-tr from-emergency-700 via-emergency-600 to-rose-500 border-white shadow-emergency-600/50 ring-8 ring-emergency-100'
                    : 'bg-slate-900 border-emergency-500 hover:border-emergency-400 shadow-lg hover:scale-105'
                }`}
              >
                <span className="material-symbols-outlined text-[44px] text-white mb-2">
                  {isTriggered ? 'crisis_alert' : 'e911_emergency'}
                </span>

                <span className="font-extrabold text-xl sm:text-2xl tracking-widest text-white uppercase">
                  {isTriggered ? 'DISPATCHED' : 'PRESS SOS'}
                </span>

                <span className="text-[10px] font-mono text-white/90 mt-1 uppercase tracking-wider font-semibold">
                  {isTriggered ? 'Transmitting...' : 'Deliberate Tactile Press'}
                </span>
              </button>
            </div>

            {/* Simulation Status & Reset Button */}
            <div className="mt-4 flex flex-col items-center gap-3">
              <span className="font-mono text-xs text-slate-500">
                {isTriggered
                  ? 'Emergency Sequence Active — Sub-Second Relay Complete'
                  : 'Click the button above to simulate a real emergency trigger'}
              </span>

              {isTriggered && (
                <button
                  onClick={handleReset}
                  className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300 text-xs font-mono transition-all"
                >
                  Reset SOS Simulation
                </button>
              )}
            </div>

          </div>

          {/* Right Column: Simulated Emergency Event Sequence & Realistic Mobile Notification (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 4-Step Simulated Sequence */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-slate-600 uppercase tracking-wider mb-2">
                Emergency Telemetry Execution Chain
              </div>

              {steps.map((st, idx) => {
                const isReached = isTriggered && alertStep >= idx;
                const isCurrent = isTriggered && alertStep === idx;

                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border transition-all duration-300 flex items-center justify-between gap-4 ${
                      isCurrent
                        ? 'bg-red-50 border-emergency-400 shadow-sm ring-1 ring-red-300'
                        : isReached
                        ? 'bg-emerald-50/70 border-emerald-300 text-slate-900'
                        : 'bg-slate-50 border-slate-200 text-slate-500'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                          isReached
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {isReached ? '✓' : `0${idx + 1}`}
                      </div>

                      <div>
                        <h4
                          className={`font-mono text-xs sm:text-sm font-bold uppercase tracking-wider ${
                            isReached ? 'text-slate-900' : 'text-slate-500'
                          }`}
                        >
                          {st.label}
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {st.desc}
                        </p>
                      </div>
                    </div>

                    <span className="font-mono text-xs text-slate-500 whitespace-nowrap">
                      {st.time}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Realistic Mobile Notification Card (Explicit Prompt Requirement) */}
            <div className="mt-6 p-6 rounded-2xl bg-slate-900 border-2 border-emergency-500 shadow-xl text-white relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2 text-emergency-400 font-mono font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emergency-500 animate-ping"></span>
                  <span>PRIORITY LIFE-SAFETY ALERT</span>
                </div>
                <span className="font-mono text-slate-400 text-[11px]">NOW</span>
              </div>

              {/* Exact Required Notification Copy */}
              <div className="mt-4 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emergency-600 flex items-center justify-center text-white shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-[26px]">emergency</span>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                    NIRVANA SOS ALERT
                  </h3>
                  <p className="text-sm font-semibold text-emergency-300 mt-0.5">
                    Emergency assistance may be required.
                  </p>
                  <p className="text-xs text-slate-300 mt-1.5 flex items-center gap-1 font-mono">
                    <span className="text-cyan-400">📍 Location available:</span>
                    <span>37.7749° N, 122.4194° W (Near 4th &amp; Market St)</span>
                  </p>
                </div>
              </div>

              {/* Notification Quick Actions */}
              <div className="mt-5 pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-semibold">
                <button className="py-2.5 px-3 rounded-lg bg-emergency-600 hover:bg-emergency-500 text-white font-mono flex items-center justify-center gap-1.5 shadow-xs">
                  <span className="material-symbols-outlined text-[16px]">call</span>
                  <span>Call User</span>
                </button>
                <button className="py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-mono flex items-center justify-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">map</span>
                  <span>Live Tracking</span>
                </button>
                <button className="py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-mono flex items-center justify-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">local_police</span>
                  <span>Dispatch 911</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
