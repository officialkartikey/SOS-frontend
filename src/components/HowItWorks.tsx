import React, { useState, useEffect } from 'react';

interface PipelineStep {
  id: number;
  label: string;
  role: string;
  subtext: string;
  latency: string;
  protocol: string;
  description: string;
  icon: string;
}

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const steps: PipelineStep[] = [
    {
      id: 0,
      label: 'USER',
      role: 'Everyday Activity or Incident',
      subtext: 'Carries or wears NIRVANA',
      latency: 'T+0 ms',
      protocol: 'Physical Motion / Panic Press',
      description:
        'The user goes about daily activities, commutes, or operates on high-risk sites. NIRVANA accompanies them unobtrusively.',
      icon: 'person',
    },
    {
      id: 1,
      label: 'NIRVANA DEVICE',
      role: 'Autonomous Hardware Sentinel',
      subtext: 'Continuous edge monitoring',
      latency: '< 10 ms',
      protocol: 'Ultra-Low-Power Standby',
      description:
        'The compact NIRVANA device monitors motion vectors and maintains stand-by communication without requiring manual interaction.',
      icon: 'device_hub',
    },
    {
      id: 2,
      label: 'SENSOR DATA',
      role: 'High-Fidelity Telemetry Sampling',
      subtext: '100 Hz IMU & Pressure Readings',
      latency: '10 ms',
      protocol: 'SPI / I2C Bus Pipeline',
      description:
        'Multi-axis accelerometer, gyroscope, and ground contact sensors capture kinetic acceleration curves, step signatures, and sudden impact spikes.',
      icon: 'sensors',
    },
    {
      id: 3,
      label: 'SAFETY EVENT DETECTION',
      role: 'Local Edge Intelligence',
      subtext: 'Zero-G + High-G + Immobility',
      latency: '< 150 ms',
      protocol: 'On-Device State Machine',
      description:
        'Firmware algorithm distinguishes normal movement from abnormal spikes (slips, falls, violent shocks, or tactile SOS triggers).',
      icon: 'troubleshoot',
    },
    {
      id: 4,
      label: 'LOCATION / ALERT PROCESSING',
      role: 'Coordinate Ingestion & Packaging',
      subtext: 'Multi-constellation GNSS Fix',
      latency: '< 400 ms',
      protocol: 'AES-256 GCM Payload',
      description:
        'Device packages accurate coordinates, timestamp, and incident vector into an encrypted emergency data packet.',
      icon: 'near_me',
    },
    {
      id: 5,
      label: 'MOBILE APP / CONTACTS',
      role: 'Instant Notification Relay',
      subtext: 'Authorized emergency circle',
      latency: '< 800 ms',
      protocol: 'Cellular IoT / Push Notification',
      description:
        'Distress signal is delivered instantaneously to designated family members, supervisors, or authorized guardians with live tracking link.',
      icon: 'notifications_active',
    },
    {
      id: 6,
      label: 'EMERGENCY RESPONSE',
      role: 'Rapid Life-Safety Intervention',
      subtext: 'Assistance dispatched',
      latency: '< 1.2s Total',
      protocol: 'Voice / Map / First Responder',
      description:
        'Authorized contacts or emergency teams receive live coordinates and telemetry status, closing the gap when seconds count.',
      icon: 'emergency',
    },
  ];

  // Auto progression of glowing packet
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [isPlaying, steps.length]);

  const current = steps[activeStep];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200 text-slate-800 relative overflow-hidden" id="technology">
      <span id="how-it-works" className="sr-only">How NIRVANA Works</span>
      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 lg:mb-18">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="flex items-center gap-3 p-1.5 pr-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
                <img
                  src="/nirvana-logo.png"
                  alt="NIRVANA Logo"
                  className="h-10 w-10 object-contain rounded-xl"
                />
                <div className="flex flex-col">
                  <span className="text-base font-black tracking-tight text-slate-950 font-sans leading-none">
                    NIRVANA
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-purple-700 font-bold mt-0.5">
                    Universal Personal Safety Technology
                  </span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-bold tracking-wider uppercase shadow-xs">
                <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
                End-to-End Technology Pipeline
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14]">
              How NIRVANA Works
            </h2>
            
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Trace the sub-second journey of a safety event from kinetic detection to emergency contact dispatch across the NIRVANA connected safety platform.
            </p>
          </div>

          {/* Interactive Flow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 text-xs font-mono font-semibold transition-all shadow-xs"
            >
              <span className="material-symbols-outlined text-[18px]">
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
              <span>{isPlaying ? 'Pause Simulation' : 'Auto Play'}</span>
            </button>
          </div>
        </div>

        {/* Desktop Pipeline Flow Bar with Glowing Data Packet */}
        <div className="hidden xl:block mb-12 relative">
          
          {/* Connecting Track Line */}
          <div className="absolute top-1/2 left-8 right-8 h-1 bg-slate-200 -translate-y-1/2 rounded-full z-0" />
          
          {/* Active Gradient Line */}
          <div
            className="absolute top-1/2 left-8 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-emergency-600 -translate-y-1/2 rounded-full z-0 transition-all duration-500"
            style={{ width: `${(activeStep / (steps.length - 1)) * 96}%` }}
          />

          {/* Nodes Grid */}
          <div className="grid grid-cols-7 gap-3 relative z-10">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <div
                  key={step.id}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  {/* Node Circle */}
                  <div className="relative mb-3">
                    {isActive && (
                      <span className="absolute -inset-2 rounded-full bg-purple-400/30 animate-ping-slow pointer-events-none" />
                    )}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 border-2 ${
                        isActive
                          ? 'bg-purple-600 text-white border-purple-600 scale-110 shadow-md ring-4 ring-purple-100'
                          : isPast
                          ? 'bg-white text-purple-700 border-purple-300 shadow-xs'
                          : 'bg-white text-slate-400 border-slate-200 group-hover:border-slate-300'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[24px]">
                        {step.icon}
                      </span>
                    </div>
                  </div>

                  {/* Node Label */}
                  <span
                    className={`font-mono text-[11px] font-bold uppercase tracking-wider block transition-colors ${
                      isActive ? 'text-purple-700' : 'text-slate-600'
                    }`}
                  >
                    {step.label}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono mt-0.5">
                    {step.latency}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active Stage Deep-Dive Card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xs relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Stage Summary (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs font-bold text-purple-700 uppercase tracking-wider bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                  Step {activeStep + 1} of 7: {current.label}
                </span>
                <span className="font-mono text-xs text-slate-600 bg-white px-3 py-1 rounded-full border border-slate-200">
                  Latency: {current.latency}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {current.role}
              </h3>

              <p className="text-base text-slate-600 leading-relaxed font-normal">
                {current.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
                <span>Protocol: <strong className="text-slate-800">{current.protocol}</strong></span>
                <span>&bull;</span>
                <span>Subsystem: <strong className="text-slate-800">{current.subtext}</strong></span>
              </div>
            </div>

            {/* Right Column: Simulated Live Packet Telemetry (5 Cols) */}
            <div className="lg:col-span-5 bg-slate-900 rounded-2xl border border-slate-800 p-5 font-mono text-xs text-slate-300 space-y-2.5 shadow-md">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  PACKET INSPECTOR
                </span>
                <span>TLS 1.3 / ENCRYPTED</span>
              </div>

              <div className="space-y-1 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-slate-500">EVENT_ID:</span>
                  <span className="text-purple-300">#NRV-2026-098X</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">SOURCE:</span>
                  <span className="text-slate-200">NIRVANA_CORE_DEVICE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">STATE:</span>
                  <span className="text-cyan-300">{current.label}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">ELAPSED:</span>
                  <span className="text-emerald-400">{current.latency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">BEARING:</span>
                  <span className="text-slate-300">37.7749° N, 122.4194° W</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-500">
                Total pipeline turnaround from mechanical trigger to authorized notification is guaranteed sub-second.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
