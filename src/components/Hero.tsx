import React from 'react';
import { SoleVisualizer } from './SoleVisualizer';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center py-8 lg:py-12 xl:py-14 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200 overflow-hidden">
      {/* Background subtle technical grid lines */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundSize: '40px 40px',
          backgroundImage:
            'linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)',
        }}
      />

      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Copy & Value Proposition (5 Cols) */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-6 xl:space-y-7">
            
            {/* Telematics Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
              </span>
              <span>Next-Generation Worker Telematics</span>
              <span className="text-brand-300">|</span>
              <span className="font-mono text-[11px] text-brand-600 font-medium">IoT Sole Platform</span>
            </div>

            {/* Main Heading with responsive high-density typography */}
            <div className="space-y-3.5">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.5rem] font-bold text-slate-950 tracking-tight leading-[1.12]">
                Smart Safety Footwear Sole for Connected Industrial Safety
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                Transform standard protective boots into autonomous life-safety nodes. Our embedded sensor matrix delivers sub-second man-down fall alerts, ergonomic risk prevention, and mesh-connected worker location tracking.
              </p>
            </div>

            {/* CTA Row */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 whitespace-nowrap"
                href="#contact"
              >
                <span>Request Enterprise Pilot</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <a
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 text-slate-700 text-sm font-semibold shadow-xs transition-colors whitespace-nowrap"
                href="#architecture"
              >
                <span className="material-symbols-outlined text-[18px] text-slate-500">layers</span>
                <span>Explore Sole Stack</span>
              </a>
            </div>

            {/* Primary Key Metrics Grid (Expansive 4 Cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-5 border-t border-slate-200">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">&lt; 1.2s</div>
                <div className="text-xs font-medium text-slate-500 mt-1">Alert Latency</div>
                <div className="text-[10px] text-brand-600 font-semibold mt-1 flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[12px]">bolt</span> Sub-second
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">72 Hours</div>
                <div className="text-xs font-medium text-slate-500 mt-1">Battery Life</div>
                <div className="text-[10px] text-emerald-600 font-semibold mt-1 flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[12px]">autorenew</span> Kinetic Assist
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">IP67</div>
                <div className="text-xs font-medium text-slate-500 mt-1">Ingress Shield</div>
                <div className="text-[10px] text-slate-600 font-semibold mt-1 flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[12px]">shield</span> Hermetic Seal
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">1,100 N</div>
                <div className="text-xs font-medium text-slate-500 mt-1">Kevlar Plate</div>
                <div className="text-[10px] text-amber-700 font-semibold mt-1 flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[12px]">verified</span> ISO 20345
                </div>
              </div>
            </div>

            {/* Active Device Live Status Micro-Ticker */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Active Telemetry Node:</span>
                <span className="font-mono text-slate-900 font-semibold">UNIT #APX-704-B</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500 font-mono text-[11px]">
                <span>RSSI: -44 dBm</span>
                <span className="text-slate-300">|</span>
                <span className="text-emerald-600 font-semibold">NOMINAL</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Architecture Visualizer (7 Cols) */}
          <div className="lg:col-span-6 xl:col-span-7">
            <SoleVisualizer />
          </div>

        </div>
      </div>
    </section>
  );
};
