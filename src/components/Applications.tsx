import React from 'react';
import { OPERATIONAL_VERTICALS } from '../data/operationalVerticals';

export const Applications: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200" id="applications">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        
        <div className="max-w-4xl mb-16">
          <div className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">domain</span>
            Operational Verticals
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.18]">
            Engineered for Severe Industrial Environments
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Tailored for mission-critical operations where lone-worker visibility and instant fall response directly safeguard human life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {OPERATIONAL_VERTICALS.map((vertical) => (
            <div
              key={vertical.id}
              className="p-7 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between space-y-6 hover:border-slate-300 hover:shadow-md transition-all"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600">
                  <span className="material-symbols-outlined text-[24px]">{vertical.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{vertical.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {vertical.description}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 space-y-1">
                <div className="text-xs font-semibold text-slate-800">
                  Key Benefit: {vertical.benefit}
                </div>
                <div className="text-[11px] text-slate-500">
                  Compliance: {vertical.compliance}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
