import React from 'react';
import { ARCHITECTURE_LAYERS } from '../data/architectureLayers';
import { SIGNAL_CHAIN_STEPS } from '../data/signalChainSteps';

export const Architecture: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200" id="architecture">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        
        <div className="max-w-4xl mb-16">
          <div className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">precision_manufacturing</span>
            Mechanical &amp; Hardware Integration
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.18]">
            Engineered 5-Layer Sole Stack
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Our patented five-tier composite assembly integrates sensitive industrial electronics directly between an anti-puncture Kevlar barrier and an ergonomic memory cushion.
          </p>
        </div>

        {/* 5-Layer Hardware Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {ARCHITECTURE_LAYERS.slice().reverse().map((layer) => (
            <div
              key={layer.id}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-slate-300 transition-all"
            >
              <div className="space-y-4">
                <div
                  className="w-11 h-11 rounded-lg border flex items-center justify-center font-bold text-sm font-mono"
                  style={{
                    backgroundColor: `${layer.accentColor}10`,
                    borderColor: `${layer.accentColor}30`,
                    color: layer.accentColor,
                  }}
                >
                  {layer.layerNum}
                </div>
                <h3 className="text-base font-bold text-slate-900">{layer.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {layer.shortDesc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 space-y-1">
                <div className="text-[11px] text-slate-500 font-medium">Material: {layer.material.split('&')[0]}</div>
                <div
                  className="text-[11px] font-semibold"
                  style={{ color: layer.accentColor === '#0f172a' ? '#10b981' : layer.accentColor }}
                >
                  {layer.standard}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* End-to-End Signal Pipeline to Cloud */}
        <div className="pt-10 border-t border-slate-200">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">sensors</span>
              Deterministic IoT Signal Chain
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">From Heel Strike to Emergency Dispatch</h3>
            <p className="text-sm text-slate-600 mt-1">Local edge inference to cloud correlation in less than 1.2 seconds.</p>
          </div>

          {/* 5-Step Pipeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 relative">
            {SIGNAL_CHAIN_STEPS.map((step) => (
              <div
                key={step.step}
                className={`bg-white rounded-xl border p-5 space-y-3.5 shadow-xs hover:border-slate-300 transition-all ${
                  step.isCritical ? 'border-2 border-brand-500/40 shadow-sm' : 'border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider font-mono ${
                      step.isCritical ? 'text-brand-600' : 'text-slate-400'
                    }`}
                  >
                    {step.step}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                      step.isCritical ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {step.latency}
                  </span>
                </div>

                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                    step.isCritical
                      ? 'bg-brand-600 text-white'
                      : 'bg-slate-100 border border-slate-200 text-slate-700'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">{step.icon}</span>
                </div>

                <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
