import React, { useState } from 'react';

interface ContactProps {
  onSuccessSubmit: (refNum: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onSuccessSubmit }) => {
  const [cohortSize, setCohortSize] = useState('pilot');

  const cohortDetailsMap: Record<string, string> = {
    pilot:
      'Includes: 2x Sub-GHz Industrial Gateways • 50x Smart Sole Inserts • Web EHS Live Console • On-Site Field Engineer',
    facility:
      'Includes: 6x Sub-GHz Industrial Gateways • 250x Smart Sole Inserts • SCADA API Connector • 24/7 EHS Dedicated Support',
    enterprise:
      'Includes: Full-Facility Sub-GHz Mesh Cluster • 250+ Custom-Fitted Soles • High-Availability Enterprise Cloud • Dedicated Implementation Team',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randId = Math.floor(1000 + Math.random() * 9000);
    onSuccessSubmit(`#APX-2026-${randId}`);
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50" id="contact">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
          
          {/* Left Column: Information & Roadmap */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="text-xs font-bold text-brand-600 uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">handshake</span>
                Enterprise Engagement
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.18]">
                Schedule an On-Site Industrial Evaluation
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Equip an operational shift with test footwear sole modules. Our field engineering team handles site RF gateway mapping, SCADA integration, and EHS staff training.
              </p>
            </div>

            {/* 4-Stage Rollout Roadmap */}
            <div className="space-y-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Evaluation Deployment Roadmap</div>
              
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-brand-600 text-white flex items-center justify-center font-mono font-bold text-[11px] shrink-0 mt-0.5">1</div>
                  <div>
                    <span className="font-bold text-slate-900">RF Gateway &amp; Dead-Zone Survey (Day 1)</span>
                    <p className="text-slate-500 mt-0.5">Sub-GHz spectrum analysis and wireless repeater placement across high-risk sectors.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-brand-600 text-white flex items-center justify-center font-mono font-bold text-[11px] shrink-0 mt-0.5">2</div>
                  <div>
                    <span className="font-bold text-slate-900">Shift Sizing &amp; Sole Insertion (Day 3)</span>
                    <p className="text-slate-500 mt-0.5">Compatible with all major ANSI-certified footwear brands (Red Wing, Timberland PRO, Caterpillar).</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-brand-600 text-white flex items-center justify-center font-mono font-bold text-[11px] shrink-0 mt-0.5">3</div>
                  <div>
                    <span className="font-bold text-slate-900">EHS &amp; SCADA Cloud Console Pairing (Day 5)</span>
                    <p className="text-slate-500 mt-0.5">Live floor plan ingestion, alert escalation tree, and push notification paging.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-emerald-600 text-white flex items-center justify-center font-mono font-bold text-[11px] shrink-0 mt-0.5">✓</div>
                  <div>
                    <span className="font-bold text-slate-900">30-Day Field Evaluation Review</span>
                    <p className="text-slate-500 mt-0.5">Comprehensive incident reduction audit, battery metrics, and shift ergonomics summary.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testing Facilities & Relations */}
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400 text-[20px]">domain</span>
                <span className="font-medium">Testing Facilities: Houston, TX • Frankfurt, Germany • Singapore</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400 text-[20px]">mail</span>
                <span className="font-medium">Enterprise Relations: enterprise@apex-soletech.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400 text-[20px]">verified_user</span>
                <span className="font-medium">Mutual NDA executed prior to industrial facility blueprints review</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Pilot Application Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Full Name</label>
                  <input className="w-full rounded-lg border-slate-300 bg-white text-slate-900 text-sm focus:border-brand-500 focus:ring-brand-500 py-2.5 px-3.5" placeholder="Sarah Jenkins" required type="text" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Corporate Email</label>
                  <input className="w-full rounded-lg border-slate-300 bg-white text-slate-900 text-sm focus:border-brand-500 focus:ring-brand-500 py-2.5 px-3.5" placeholder="s.jenkins@enterprise-corp.com" required type="email" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Company / Organization</label>
                  <input className="w-full rounded-lg border-slate-300 bg-white text-slate-900 text-sm focus:border-brand-500 focus:ring-brand-500 py-2.5 px-3.5" placeholder="Atlantic Energy Systems" required type="text" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Workforce Cohort Size</label>
                  <select
                    value={cohortSize}
                    onChange={(e) => setCohortSize(e.target.value)}
                    className="w-full rounded-lg border-slate-300 bg-white text-slate-900 text-sm focus:border-brand-500 focus:ring-brand-500 py-2.5 px-3.5"
                  >
                    <option value="pilot">Evaluation Trial (10 – 50 boots)</option>
                    <option value="facility">Site Rollout (50 – 250 boots)</option>
                    <option value="enterprise">Full Fleet (250+ boots)</option>
                  </select>
                </div>
              </div>

              {/* Dynamic Hardware Configurator Summary */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-brand-200/80 text-xs space-y-1.5">
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span className="text-brand-600">Hardware Allocation Estimate:</span>
                  <span className="font-mono text-slate-700">30-Day Dedicated Trial</span>
                </div>
                <div className="text-slate-600 text-[11px] leading-relaxed">
                  {cohortDetailsMap[cohortSize]}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Industry Vertical</label>
                <select className="w-full rounded-lg border-slate-300 bg-white text-slate-900 text-sm focus:border-brand-500 focus:ring-brand-500 py-2.5 px-3.5">
                  <option value="construction">Civil Construction &amp; Infrastructure</option>
                  <option value="manufacturing">Heavy Manufacturing &amp; Assembly</option>
                  <option value="oil_gas">Petrochemical, Mining &amp; Offshore Energy</option>
                  <option value="logistics">Warehouse &amp; Distribution Hubs</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Critical Risk Priorities (Select applicable)</label>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 pt-1">
                  <label className="flex items-center gap-2 p-2 rounded bg-slate-50 border border-slate-200">
                    <input type="checkbox" defaultChecked className="rounded text-brand-600 focus:ring-brand-500" />
                    <span>Man-Down Detection</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 rounded bg-slate-50 border border-slate-200">
                    <input type="checkbox" defaultChecked className="rounded text-brand-600 focus:ring-brand-500" />
                    <span>Fatigue &amp; Ergonomics</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 rounded bg-slate-50 border border-slate-200">
                    <input type="checkbox" defaultChecked className="rounded text-brand-600 focus:ring-brand-500" />
                    <span>Sub-GHz Lone Worker Mesh</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 rounded bg-slate-50 border border-slate-200">
                    <input type="checkbox" className="rounded text-brand-600 focus:ring-brand-500" />
                    <span>Slip &amp; Skid Telemetry</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Facility Operating Conditions</label>
                <textarea
                  className="w-full rounded-lg border-slate-300 bg-white text-slate-900 text-sm focus:border-brand-500 focus:ring-brand-500 py-2.5 px-3.5"
                  placeholder="Describe facility conditions, subterranean levels, communication dead zones, or compliance milestones..."
                  rows={3}
                />
              </div>

              <div className="pt-2">
                <button
                  className="w-full py-3.5 px-6 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 flex items-center justify-center gap-2"
                  type="submit"
                >
                  <span>Submit Field Pilot Application</span>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
