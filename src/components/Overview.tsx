import React from 'react';

export const Overview: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200" id="overview">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        
        <div className="max-w-4xl mb-16">
          <div className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">crisis_alert</span>
            The Industrial Safety Gap
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.18]">
            Traditional Safety Footwear Protects Against Impact.<br />
            <span className="text-slate-500 font-semibold">Smart Footwear Anticipates and Prevents Risk.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Conventional steel and composite caps shield against static punctures, yet leave workers unprotected against unassisted slips, extreme fatigue accumulation, and silent incapacitation in remote industrial facilities.
          </p>
        </div>

        {/* 2-Card Comparative Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Card 1: Traditional Work Boots */}
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-xs">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px] text-slate-500">shield</span>
                Passive Protection Model
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Standard Safety Boots</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Static mechanical safeguards designed solely to absorb mechanical crushing forces without contextual situational awareness or communication capabilities.
              </p>
            </div>

            {/* Bullet Failure Scenarios */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200">
                <div className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center text-brand-600 shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Zero Incident Telemetry</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Cannot register abnormal slips, high-G falls, zero-gravity free-fall, or prolonged operator immobility.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200">
                <div className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center text-brand-600 shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Blind to Worker Fatigue</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    No diagnostic visibility into posture degradation, asymmetric load distribution, or cumulative joint strain.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200">
                <div className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center text-brand-600 shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Delayed Escalation Window (45–180 Min)</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Injured workers in blind spots, subterranean shafts, or offshore modules often remain undiscovered until end-of-shift muster.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-slate-200 flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-400 uppercase tracking-wide">Paradigm: Reactive Post-Incident Response</span>
              <span className="text-brand-600 font-bold">High Unmitigated Risk</span>
            </div>
          </div>

          {/* Card 2: Apex Connected Sole */}
          <div className="rounded-2xl bg-white border-2 border-brand-500/30 p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-lg relative">
            <div className="absolute -top-3.5 right-8 bg-brand-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              Connected Architecture
            </div>

            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold">
                <span className="material-symbols-outlined text-[16px] text-brand-600">verified</span>
                Proactive Cyber-Physical System
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Apex Smart Safety Sole</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                An embedded edge-computing sole that continuously samples plantar pressure at 100 Hz, evaluates posture vectors locally, and transmits distress packets instantly through subterranean-grade mesh.
              </p>
            </div>

            {/* Bullet Active Solutions */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Real-Time Man-Down Detection (&lt; 1.2s)</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Zero-gravity free-fall recognition coupled with violent impact vector verification triggers autonomous dispatch in under 1.2 seconds.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Preventative Ergonomic &amp; Slip Alerts</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Continuous 100 Hz load profiling tracks gait asymmetry, detects micro-slips on slick surfaces, and alerts shift supervisors before injuries occur.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Autonomous Subterranean Mesh Telemetry</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Direct Sub-GHz radio packets penetrate reinforced concrete and steel bulkheads without cellular reception or mobile app pairing.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-slate-200 flex items-center justify-between text-xs">
              <span className="font-bold text-brand-700 uppercase tracking-wide">Paradigm: Deterministic Preventative Safety</span>
              <span className="text-emerald-600 font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">check</span> 99.7% Risk Reduction
              </span>
            </div>
          </div>

        </div>

        {/* Incident Response Timeline Comparison Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Critical Life-Saving Comparison</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">Incident Escalation &amp; Rescue Response Window</h3>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
              <span className="material-symbols-outlined text-[16px]">timer</span> The "Golden Hour" Trauma Window
            </div>
          </div>

          <div className="space-y-5">
            {/* Conventional Boot Timeline */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold text-slate-600">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                  Traditional Safety Footwear: Unnoticed Worker Fall
                </span>
                <span className="text-brand-600 font-bold">45 – 180 Minutes (Delayed Discovery)</span>
              </div>
              <div className="w-full h-3.5 bg-slate-200 rounded-full overflow-hidden">
                <div className="w-full h-full bg-slate-400 rounded-full"></div>
              </div>
              <div className="text-[11px] text-slate-500 italic">
                Critical delay increases fatality &amp; permanent disability risks exponentially in lone-worker zones.
              </div>
            </div>

            {/* Apex Smart Sole Timeline */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold text-slate-900">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-600"></span>
                  Apex SoleTech: Autonomous Edge Fall Vector &amp; Sub-Meter Dispatch
                </span>
                <span className="text-emerald-600 font-bold">&lt; 1.2 Seconds (Instant Escalation)</span>
              </div>
              <div className="w-full h-3.5 bg-slate-200 rounded-full overflow-hidden flex">
                <div className="w-3 h-full bg-brand-600 rounded-full animate-pulse"></div>
              </div>
              <div className="text-[11px] text-emerald-700 font-semibold">
                Immediate on-site medic dispatch with floor plan coordinates within the first 72 seconds.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
