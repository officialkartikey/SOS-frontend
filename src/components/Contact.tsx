import React, { useState } from 'react';

interface ContactProps {
  onSuccessSubmit: (refNum: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onSuccessSubmit }) => {
  const [interestArea, setInterestArea] = useState('personal');
  const [formFactor, setFormFactor] = useState('all');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randId = Math.floor(1000 + Math.random() * 9000);
    onSuccessSubmit(`#NRV-2026-${randId}`);
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200 text-slate-800 relative overflow-hidden" id="contact">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        
        {/* Final CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-900 text-white p-8 sm:p-12 lg:p-16 mb-16 shadow-xl relative overflow-hidden text-center max-w-5xl mx-auto">
          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-2.5 p-1.5 px-3.5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm shadow-xs">
                <img
                  src="/nirvana-logo.png"
                  alt="NIRVANA Logo"
                  className="h-9 w-9 object-contain rounded-xl"
                />
                <span className="text-base font-black text-white font-sans tracking-tight">NIRVANA</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-800/60 border border-purple-400/40 text-purple-200 text-xs font-mono font-bold tracking-widest uppercase shadow-xs">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                Universal Personal Safety Platform
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              NIRVANA &mdash; Safety, Wherever You Go.
            </h2>

            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal">
              NIRVANA is a small, connected safety device that can accompany you anywhere and provide real-time location detection, fall detection, geofencing, SOS alerts, and emergency assistance.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="#features"
                className="px-7 py-3.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm sm:text-base shadow-sm transition-all whitespace-nowrap"
              >
                Explore NIRVANA
              </a>
              <a
                href="#demo-form"
                className="px-7 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm sm:text-base transition-all whitespace-nowrap"
              >
                Request a Demo
              </a>
            </div>
          </div>
        </div>

        {/* Demo Request & Pilot Inquiry Form */}
        <div id="demo-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Info & Verified Trust Points (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-purple-700 uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-[16px]">contact_mail</span>
                Direct Engagement
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Request a Live Demonstration
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                Connect with the NIRVANA engineering and product team to experience our functional prototype, test live telemetry, or discuss pilot deployments.
              </p>
            </div>

            {/* Verified Achievements Micro-Summary */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 font-mono text-xs shadow-xs">
              <div className="text-[11px] text-purple-700 font-bold uppercase tracking-wider">
                NIRVANA Engineering Credentials
              </div>
              <div className="flex items-center gap-2.5 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Innovation Patent — Published</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Selected in STPI OCP 2.0</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span>Featured in RASTA Magazine</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                <span>Functional Hardware Prototype Ready</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1 font-mono shadow-2xs">
              <div>Brand / Platform: <strong className="text-slate-900">NIRVANA</strong></div>
              <div>Positioning: <span className="text-purple-700 font-semibold">Universal Personal Safety Technology</span></div>
            </div>
          </div>

          {/* Right Column: Interactive Application Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    className="w-full rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:border-purple-600 focus:ring-1 focus:ring-purple-600 py-2.5 px-3.5 placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    className="w-full rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:border-purple-600 focus:ring-1 focus:ring-purple-600 py-2.5 px-3.5 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Organization / Profile
                  </label>
                  <input
                    type="text"
                    placeholder="Enterprise, University, or Individual"
                    className="w-full rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:border-purple-600 focus:ring-1 focus:ring-purple-600 py-2.5 px-3.5 placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                    Area of Interest
                  </label>
                  <select
                    value={interestArea}
                    onChange={(e) => setInterestArea(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:border-purple-600 focus:ring-1 focus:ring-purple-600 py-2.5 px-3.5"
                  >
                    <option value="personal">Personal / Family Safety</option>
                    <option value="elderly">Elderly &amp; Assistive Care</option>
                    <option value="worker">Lone Worker &amp; Industrial Safety</option>
                    <option value="student">Campus &amp; Student Safety</option>
                    <option value="pilot">Enterprise Pilot Evaluation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  Form Factor Application Interest
                </label>
                <select
                  value={formFactor}
                  onChange={(e) => setFormFactor(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:border-purple-600 focus:ring-1 focus:ring-purple-600 py-2.5 px-3.5"
                >
                  <option value="all">Universal Platform (All Form Factors)</option>
                  <option value="footwear">Footwear Insole Integration</option>
                  <option value="clip">Wearable Clip / Bag Mount</option>
                  <option value="pocket">Discreet Palm / Pocket Pod</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  Operating Scenario or Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your specific safety requirements, cohort size, or evaluation timeline..."
                  className="w-full rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:border-purple-600 focus:ring-1 focus:ring-purple-600 py-2.5 px-3.5 placeholder:text-slate-400"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm shadow-xs transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Demo &amp; Pilot Request</span>
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
