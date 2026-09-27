import React, { useState } from 'react';

interface Milestone {
  id: string;
  milestoneNum: string;
  status: string;
  title: string;
  description: string;
  indicator: string;
  icon: string;
  statusType: 'prototype' | 'patent' | 'selected' | 'media';
}

interface Step {
  step: string;
  title: string;
  status: 'completed' | 'current';
  detail: string;
}

export const Achievements: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const milestones: Milestone[] = [
    {
      id: 'm1',
      milestoneNum: 'MILESTONE 01',
      status: 'PROTOTYPE READY',
      title: 'Functional Prototype Ready',
      description: 'NIRVANA has progressed through end-to-end hardware development, embedded module testing, and physical prototype assembly.',
      indicator: 'Verified Functional Build',
      icon: 'developer_board',
      statusType: 'prototype',
    },
    {
      id: 'm2',
      milestoneNum: 'MILESTONE 02',
      status: 'IP PUBLISHED',
      title: 'Innovation Patent',
      description: 'NIRVANA holds an innovation patent associated with the universal smart safety technology platform.',
      indicator: 'Innovation Patent — Published',
      icon: 'verified_user',
      statusType: 'patent',
    },
    {
      id: 'm3',
      milestoneNum: 'MILESTONE 03',
      status: 'SELECTED',
      title: 'Selected in STPI OCP 2.0',
      description: 'NIRVANA has been formally selected in the STPI OCP 2.0 incubation and acceleration initiative for deep-tech safety hardware.',
      indicator: 'Selected in STPI OCP 2.0',
      icon: 'military_tech',
      statusType: 'selected',
    },
    {
      id: 'm4',
      milestoneNum: 'MILESTONE 04',
      status: 'MEDIA FEATURE',
      title: 'Featured in RASTA Magazine',
      description: 'NIRVANA has been featured in RASTA Magazine, recognizing the innovation in personal safety and connected IoT protection.',
      indicator: 'Featured in RASTA Magazine',
      icon: 'newspaper',
      statusType: 'media',
    },
  ];

  const developmentSteps: Step[] = [
    {
      step: '01',
      title: 'Concept Finalized',
      status: 'completed',
      detail: 'Core problem definition, universal device requirements & multi-form adaptability'
    },
    {
      step: '02',
      title: 'Hardware Architecture',
      status: 'completed',
      detail: 'Schematic, power budget, multi-axis IMU & GNSS sensor specification'
    },
    {
      step: '03',
      title: 'Prototype Development',
      status: 'completed',
      detail: 'Physical enclosure prototyping & embedded PCB layout design'
    },
    {
      step: '04',
      title: 'Module Testing',
      status: 'completed',
      detail: 'Individual subsystem verification, telemetry bench tests & RF tuning'
    },
    {
      step: '05',
      title: 'System Integration',
      status: 'completed',
      detail: 'End-to-end firmware, hardware, cloud backend & mobile companion pairing'
    },
    {
      step: '06',
      title: 'Prototype Ready',
      status: 'current',
      detail: 'Full-scale verified functional prototype operating with live telemetry'
    }
  ];

  const getStatusBadge = (statusType: string, statusText: string) => {
    switch (statusType) {
      case 'prototype':
        return (
          <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 flex items-center gap-1.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            {statusText}
          </span>
        );
      case 'patent':
        return (
          <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider text-purple-800 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200 flex items-center gap-1.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
            {statusText}
          </span>
        );
      case 'selected':
        return (
          <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 flex items-center gap-1.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            {statusText}
          </span>
        );
      case 'media':
        return (
          <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider text-blue-800 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 flex items-center gap-1.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            {statusText}
          </span>
        );
      default:
        return (
          <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
            {statusText}
          </span>
        );
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200 text-slate-800 relative overflow-hidden" id="achievements">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
            Proven Progress &amp; Recognition
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14]">
            Product Journey &amp; Verified Achievements
          </h2>
          
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            From initial concept to functional prototype, patent publication, incubation selection, and national media coverage, NIRVANA continues its rapid engineering evolution.
          </p>
        </div>

        {/* 4 Verified Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:mb-20">
          {milestones.map((m) => (
            <div
              key={m.id}
              className="group bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-purple-300 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] font-bold text-slate-500">
                    {m.milestoneNum}
                  </span>
                  {getStatusBadge(m.statusType, m.status)}
                </div>

                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-purple-700 group-hover:bg-purple-50 group-hover:border-purple-200 transition-all shadow-2xs">
                  <span className="material-symbols-outlined text-[24px]">
                    {m.icon}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {m.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                <span className="text-purple-700 font-semibold">{m.indicator}</span>
                <span className="text-slate-400 text-[10px]">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Development Journey Pipeline */}
        <div className="bg-slate-50/80 rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xs relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
            <div>
              <div className="text-xs font-mono font-bold text-purple-700 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">route</span>
                VERIFIED DEVELOPMENT PROGRESSION
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Our Development Journey
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-mono">
              Concept &rarr; Architecture &rarr; Prototype &rarr; Testing &rarr; Integration &rarr; Prototype Ready
            </p>
          </div>

          {/* Desktop Timeline Flow */}
          <div className="hidden lg:block relative pb-4">
            <div className="absolute top-7 left-8 right-8 h-1 bg-slate-200 rounded-full z-0" />
            <div className="absolute top-7 left-8 right-8 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500 rounded-full z-0 shadow-xs" />
            
            <div className="absolute top-[26px] left-8 right-8 h-1.5 overflow-hidden z-0 pointer-events-none">
              <div className="w-48 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-90 rounded-full blur-[1px] animate-progress-flow" />
            </div>

            {/* 6 Step Nodes */}
            <div className="grid grid-cols-6 gap-4 relative z-10">
              {developmentSteps.map((step, idx) => {
                const isCurrent = step.status === 'current';
                const isHovered = activeStep === idx;

                return (
                  <div
                    key={step.step}
                    onMouseEnter={() => setActiveStep(idx)}
                    onMouseLeave={() => setActiveStep(null)}
                    className="flex flex-col items-center text-center group cursor-pointer transition-transform duration-200 relative"
                  >
                    <div className="relative mb-4">
                      {isCurrent && (
                        <span className="absolute -inset-1.5 rounded-full bg-emerald-400/30 animate-ping-slow pointer-events-none" />
                      )}
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 relative z-10 shadow-xs ${
                          isCurrent
                            ? 'bg-emerald-600 text-white border-2 border-emerald-400 ring-4 ring-emerald-100'
                            : isHovered
                            ? 'bg-purple-50 text-purple-700 border-2 border-purple-400 scale-105'
                            : 'bg-white text-slate-800 border-2 border-slate-300 hover:border-purple-400'
                        }`}
                      >
                        {isCurrent ? (
                          <span className="material-symbols-outlined text-[20px]">check</span>
                        ) : (
                          step.step
                        )}
                      </div>
                    </div>

                    <div className="space-y-1 max-w-[190px]">
                      <span className="font-mono text-[10px] font-bold text-purple-700 uppercase tracking-wider block">
                        STEP {step.step}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-purple-700 transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-tight pt-1">
                        {step.detail}
                      </p>
                      {isCurrent && (
                        <span className="inline-block mt-1 font-mono text-[9px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
                          PROTOTYPE READY
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile / Tablet Vertical Timeline */}
          <div className="block lg:hidden relative pl-8 space-y-4">
            <div className="absolute top-4 bottom-4 left-3 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-emerald-500 rounded-full z-0" />

            {developmentSteps.map((step) => {
              const isCurrent = step.status === 'current';

              return (
                <div key={step.step} className="relative flex items-start gap-4">
                  <div className="absolute -left-8 mt-1">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-mono font-bold text-xs ${
                        isCurrent
                          ? 'bg-emerald-600 text-white ring-2 ring-emerald-200'
                          : 'bg-white text-slate-800 border border-slate-300'
                      }`}
                    >
                      {step.step}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 w-full shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold text-purple-700">
                        STEP {step.step}
                      </span>
                      {isCurrent && (
                        <span className="font-mono text-[9px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                          PROTOTYPE READY
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mt-1">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      {step.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Verification Note */}
          <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Baseline State: <strong>Functional Prototype Ready &amp; Verified</strong></span>
            </div>
            <span className="text-slate-500">NIRVANA Safety Technology Platform &bull; 2026</span>
          </div>

        </div>

      </div>
    </section>
  );
};
