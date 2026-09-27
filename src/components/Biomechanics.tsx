import React from 'react';

export const Biomechanics: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200" id="biomechanics">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        
        <div className="max-w-4xl mb-16">
          <div className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">biotech</span>
            Biomechanical Telemetry &amp; Gait Profiling
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.18]">
            Continuous 100 Hz Plantar Force Telemetry
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            High-density piezoresistive nodes map dynamic load shifting across every phase of the worker gait cycle, anticipating fatigue degradation, improper lifting, and micro-slips.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Heatmap Static Callout Display */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center shadow-xs">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Calibrated 8-Point Force Matrix Visualizer</div>
            
            <div className="relative w-64 h-96 flex items-center justify-center">
              <svg className="w-full h-full drop-shadow-xs" viewBox="0 0 200 320" fill="none">
                <path
                  d="M 90,20 C 130,20 155,45 155,80 C 155,115 140,140 135,165 C 130,190 140,215 140,245 C 140,285 115,305 85,305 C 55,305 40,285 40,250 C 40,215 50,195 50,165 C 50,135 45,110 50,75 C 55,40 70,20 90,20 Z"
                  fill="#ffffff"
                  stroke="#cbd5e1"
                  strokeWidth="2.5"
                />
                <path d="M 85,260 Q 90,210 80,160 T 110,65" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 3" opacity="0.8" />
                <circle cx="110" cy="65" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
              </svg>

              {/* Plantar nodes */}
              <div className="absolute left-[38%] top-[80%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-500/80 flex items-center justify-center text-white font-mono text-[9px] font-bold shadow-md">
                420kPa
              </div>
              <div className="absolute left-[54%] top-[80%] -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-brand-500/70 flex items-center justify-center text-white font-mono text-[9px] font-bold shadow-md">
                380kPa
              </div>
              <div className="absolute left-[55%] top-[55%] -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-emerald-500/80 flex items-center justify-center text-white font-mono text-[8px] font-bold shadow-xs">
                110kPa
              </div>
              <div className="absolute left-[32%] top-[34%] -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-brand-600/90 flex items-center justify-center text-white font-mono text-[9px] font-bold shadow-md animate-pulse-subtle">
                680kPa
              </div>
              <div className="absolute left-[46%] top-[31%] -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-brand-500/70 flex items-center justify-center text-white font-mono text-[8px] font-bold shadow-xs">
                510kPa
              </div>
              <div className="absolute left-[64%] top-[36%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-amber-500/80 flex items-center justify-center text-white font-mono text-[8px] font-bold shadow-xs">
                320kPa
              </div>
              <div className="absolute left-[60%] top-[18%] -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-emerald-500/80 flex items-center justify-center text-white font-mono text-[8px] font-bold shadow-xs">
                140kPa
              </div>
              <div className="absolute left-[40%] top-[12%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-600/90 flex items-center justify-center text-white font-mono text-[9px] font-bold shadow-md animate-pulse-subtle">
                750kPa
              </div>
            </div>

            <div className="w-full mt-4 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span className="font-medium">0 kPa (Unweighted)</span>
              <div className="h-2 w-36 rounded-full bg-gradient-to-r from-emerald-400 via-amber-400 to-brand-600"></div>
              <span className="font-medium">1,500 kPa (Max Peak)</span>
            </div>
          </div>

          {/* Right: Detailed Telemetry Insights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Sampling Cadence</div>
                <div className="text-2xl font-bold text-slate-900 mt-1">100 Hz I2C</div>
                <p className="text-xs text-slate-600 mt-1">Sub-10ms latency per sensor array sweep.</p>
              </div>
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Dynamic Range</div>
                <div className="text-2xl font-bold text-slate-900 mt-1">0 – 1,500 kPa</div>
                <p className="text-xs text-slate-600 mt-1">Calibrated for static and heavy dynamic impact.</p>
              </div>
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Gait Symmetry</div>
                <div className="text-2xl font-bold text-emerald-600 mt-1">99.4% Match</div>
                <p className="text-xs text-slate-600 mt-1">Bilaterally synchronized RF timestamping.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <h4 className="text-base font-bold text-slate-900">Biomechanical Risk Prevention Applications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-brand-600 text-[20px] shrink-0">speed</span>
                  <div>
                    <span className="font-bold text-slate-900 block">Micro-Slip Detection</span>
                    Instantaneous coefficient of friction drop alerts the operator prior to full balance loss.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-brand-600 text-[20px] shrink-0">airline_seat_recline_extra</span>
                  <div>
                    <span className="font-bold text-slate-900 block">Lifting Posture Guard</span>
                    Asymmetric plantar loading during heavy lifting advises operators to rebalance spinal alignment.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-brand-600 text-[20px] shrink-0">hourglass_bottom</span>
                  <div>
                    <span className="font-bold text-slate-900 block">Cumulative Shift Fatigue</span>
                    Calculates standing duty-cycle and prompts rotation before musculoskeletal strain threshold trips.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-brand-600 text-[20px] shrink-0">accessible_forward</span>
                  <div>
                    <span className="font-bold text-slate-900 block">Limping &amp; Sprain Warning</span>
                    Detects acute antalgic gait adaptations following unnoticed ankle rolls or heel trauma.
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
