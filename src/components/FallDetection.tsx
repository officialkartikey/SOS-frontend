import React, { useState, useEffect } from 'react';

type FallStage = 'normal' | 'abnormal' | 'detected' | 'check' | 'sos';

export const FallDetection: React.FC = () => {
  const [currentStage, setCurrentStage] = useState<FallStage>('normal');
  const [countdown, setCountdown] = useState<number>(15);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const stages = [
    {
      id: 'normal',
      label: 'NORMAL MOVEMENT',
      desc: 'Regular gait cadence, walking velocity, and nominal 1.0G gravitational baseline.',
      gForce: '1.0 G',
      icon: 'directions_walk',
      color: 'text-emerald-600',
      badge: 'Normal Baseline',
    },
    {
      id: 'abnormal',
      label: 'ABNORMAL MOTION',
      desc: 'Sudden rapid velocity deviation, brief zero-G free-fall phase, or slip trajectory.',
      gForce: '0.2 G &darr;',
      icon: 'trending_down',
      color: 'text-amber-600',
      badge: 'Kinetic Anomaly',
    },
    {
      id: 'detected',
      label: 'FALL DETECTED',
      desc: 'High-G impact signature against ground surface followed immediately by prolonged cessation of movement.',
      gForce: '3.8 G &uarr;',
      icon: 'warning',
      color: 'text-rose-600',
      badge: 'Threshold Exceeded',
    },
    {
      id: 'check',
      label: 'SAFETY CHECK',
      desc: '15-second automated safety verification buffer. User can cancel alert if uninjured to avoid false alarms.',
      gForce: '0.0 G',
      icon: 'timer',
      color: 'text-purple-700',
      badge: 'Cancellation Buffer',
    },
    {
      id: 'sos',
      label: 'SOS RESPONSE',
      desc: 'Safety check window expired without user cancellation. Emergency distress beacon and location dispatched to guardians.',
      gForce: 'Beacon Active',
      icon: 'emergency',
      color: 'text-emergency-600',
      badge: 'Emergency Dispatched',
    },
  ];

  const startSimulation = () => {
    setIsSimulating(true);
    setCurrentStage('abnormal');

    setTimeout(() => {
      setCurrentStage('detected');
    }, 1200);

    setTimeout(() => {
      setCurrentStage('check');
      setCountdown(15);
    }, 2400);
  };

  useEffect(() => {
    if (currentStage !== 'check') return;

    if (countdown <= 0) {
      setCurrentStage('sos');
      setIsSimulating(false);
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [currentStage, countdown]);

  const cancelCheck = () => {
    setCurrentStage('normal');
    setIsSimulating(false);
    setCountdown(15);
  };

  const getStageIndex = (stage: FallStage) => {
    switch (stage) {
      case 'normal': return 0;
      case 'abnormal': return 1;
      case 'detected': return 2;
      case 'check': return 3;
      case 'sos': return 4;
    }
  };

  const activeIndex = getStageIndex(currentStage);

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200 text-slate-800 relative overflow-hidden" id="fall-detection">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Intelligent Kinetic Recognition
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14]">
              Autonomous Fall Detection
            </h2>
            
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Understand how NIRVANA analyzes motion dynamics to detect potential falls automatically using sensor data, verifying situational state before dispatching emergency assistance.
            </p>
          </div>

          {/* Interactive Simulation Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={startSimulation}
              disabled={isSimulating}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-xs transition-all disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-[18px]">play_arrow</span>
              <span>{isSimulating ? 'Simulating Event...' : 'Simulate Fall Event'}</span>
            </button>
          </div>
        </div>

        {/* 5-Step Visual Sequence Progress Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-10">
          {stages.map((st, idx) => {
            const isCurrent = activeIndex === idx;
            const isCompleted = activeIndex > idx;

            return (
              <div
                key={st.id}
                onClick={() => {
                  setCurrentStage(st.id as FallStage);
                  if (st.id === 'check') setCountdown(15);
                }}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-purple-50/70 border-purple-500 shadow-sm ring-1 ring-purple-400/40'
                    : isCompleted
                    ? 'bg-slate-50 border-slate-300 text-slate-700'
                    : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-[10px] font-bold text-slate-400">
                    STAGE 0{idx + 1}
                  </span>
                  <span
                    className={`material-symbols-outlined text-[20px] ${
                      isCurrent ? st.color : isCompleted ? 'text-purple-600' : 'text-slate-400'
                    }`}
                  >
                    {st.icon}
                  </span>
                </div>

                <div className="space-y-0.5">
                  <h4
                    className={`font-mono text-xs font-bold uppercase tracking-wider ${
                      isCurrent ? 'text-slate-900' : 'text-slate-700'
                    }`}
                  >
                    {st.label}
                  </h4>
                  <div className="text-[10px] font-mono text-slate-500">
                    {st.badge}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Simulation Canvas & Waveform Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Subtle Human-Motion Kinetic Profile (6 Cols) */}
          <div className="lg:col-span-6 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs relative">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <span className="font-mono text-xs font-bold text-slate-700 uppercase tracking-wider">
                Kinetic Vector Profile
              </span>
              <span
                className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                  currentStage === 'sos'
                    ? 'bg-red-50 text-red-700 border-red-200'
                    : currentStage === 'check'
                    ? 'bg-purple-50 text-purple-700 border-purple-200'
                    : currentStage === 'detected'
                    ? 'bg-amber-50 text-amber-700 border-amber-200'
                    : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                }`}
              >
                {stages[activeIndex].label}
              </span>
            </div>

            {/* Simulated 100 Hz IMU Acceleration Waveform */}
            <div className="my-6 p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-white">
              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                <span>IMU 3-AXIS ACCELEROMETER TELEMETRY (G-FORCE)</span>
                <span className="text-cyan-400 font-bold">{stages[activeIndex].gForce}</span>
              </div>

              <div className="w-full h-32 relative flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                  <line x1="0" y1="50" x2="400" y2="50" stroke="#334155" strokeWidth="0.8" strokeDasharray="3 3" />
                  
                  {currentStage === 'normal' && (
                    <path
                      d="M 0 50 Q 25 35 50 50 T 100 50 T 150 50 T 200 50 T 250 50 T 300 50 T 350 50 T 400 50"
                      fill="none"
                      stroke="#34d399"
                      strokeWidth="2.5"
                    />
                  )}
                  {currentStage === 'abnormal' && (
                    <path
                      d="M 0 50 Q 40 45 80 50 L 140 85 L 200 15 L 260 90 L 320 40 L 400 50"
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="2.5"
                    />
                  )}
                  {(currentStage === 'detected' || currentStage === 'check' || currentStage === 'sos') && (
                    <path
                      d="M 0 50 L 80 50 L 120 90 L 150 5 L 180 95 L 210 50 L 400 50"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="2.5"
                    />
                  )}
                </svg>
              </div>

              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-slate-800">
                <span>T-2.0s Nominal</span>
                <span>T-0.5s Free-Fall Drop</span>
                <span>T+0s Impact (3.8G)</span>
                <span>T+1.0s Immobility</span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {stages[activeIndex].desc}
            </p>

          </div>

          {/* Right Column: Safety Check & Cancellation Buffer (6 Cols) */}
          <div className="lg:col-span-6 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs relative">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <span className="font-mono text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Verification Safeguard
                </span>
                <span className="font-mono text-xs text-purple-700 font-bold">
                  Pre-Dispatch Buffer
                </span>
              </div>

              {/* Safety Check Countdown Box */}
              {currentStage === 'check' ? (
                <div className="p-6 rounded-2xl bg-purple-50 border border-purple-200 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center font-mono text-3xl font-extrabold mx-auto shadow-md">
                    {countdown}s
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-slate-900">
                      Fall Impact Detected. Are you OK?
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Emergency SOS dispatch will automatically initiate if not dismissed.
                    </p>
                  </div>

                  <button
                    onClick={cancelCheck}
                    className="w-full py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-xs transition-all"
                  >
                    I'M OK — CANCEL SOS ALERT
                  </button>
                </div>
              ) : currentStage === 'sos' ? (
                <div className="p-6 rounded-2xl bg-red-50 border border-red-200 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emergency-600 text-white flex items-center justify-center mx-auto shadow-md">
                    <span className="material-symbols-outlined text-[28px]">e911_emergency</span>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-slate-900">
                      Emergency Alert Dispatched
                    </h4>
                    <p className="text-xs text-red-700 mt-1">
                      Location payload and distress notifications delivered to 2 emergency contacts.
                    </p>
                  </div>

                  <button
                    onClick={cancelCheck}
                    className="px-4 py-2 rounded-lg bg-white text-slate-700 border border-slate-300 text-xs font-mono hover:bg-slate-50"
                  >
                    Reset Simulation
                  </button>
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 mx-auto">
                    <span className="material-symbols-outlined text-[24px]">verified_user</span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      Safety Sentinel Active
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Press "Simulate Fall Event" above to experience the kinetic detection sequence, including the automated 15-second safety-check cancellation window.
                    </p>
                  </div>
                </div>
              )}

              {/* Responsible Algorithmic Explanation */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 leading-relaxed flex items-start gap-2.5">
                <span className="material-symbols-outlined text-purple-700 text-[18px] shrink-0 mt-0.5">info</span>
                <span>
                  <strong>Conceptual Architecture:</strong> Fall detection models motion physics (free-fall velocity, sudden high-G deceleration, and ensuing stillness). Because real-world environments produce varied biomechanical signals, NIRVANA explicitly pairs algorithmic intelligence with false-alarm cancellation safeguards rather than claiming unconditional 100% detection.
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
