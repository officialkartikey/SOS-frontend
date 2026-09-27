import React, { useState } from 'react';
import {
  ENGINEERING_MILESTONES,
  HIGHLIGHT_METRICS,
  DEVELOPMENT_JOURNEY
} from '../data/engineeringMilestones';

export const Achievements: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // Helper for milestone status badge styling
  const getStatusBadge = (statusType?: string, statusText?: string) => {
    switch (statusType) {
      case 'prototype':
        return (
          <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/80 flex items-center gap-1.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            {statusText || 'PROTOTYPE READY'}
          </span>
        );
      case 'patent':
        return (
          <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200/80 flex items-center gap-1.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
            {statusText || 'IP MILESTONE'}
          </span>
        );
      case 'selected':
        return (
          <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/80 flex items-center gap-1.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            {statusText || 'SELECTED'}
          </span>
        );
      case 'media':
        return (
          <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200/80 flex items-center gap-1.5 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            {statusText || 'MEDIA FEATURE'}
          </span>
        );
      default:
        return (
          <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 flex items-center gap-1.5">
            {statusText}
          </span>
        );
    }
  };

  // Helper for milestone icons with refined engineering styling
  const renderMilestoneIcon = (statusType?: string) => {
    switch (statusType) {
      case 'prototype':
        return (
          <svg className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="9" y="9" width="6" height="6" />
            <path d="M9 1v3" />
            <path d="M15 1v3" />
            <path d="M9 20v3" />
            <path d="M15 20v3" />
            <path d="M20 9h3" />
            <path d="M20 14h3" />
            <path d="M1 9h3" />
            <path d="M1 14h3" />
          </svg>
        );
      case 'patent':
        return (
          <svg className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        );
      case 'selected':
        return (
          <svg className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
          </svg>
        );
      case 'media':
        return (
          <svg className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
            <path d="M18 14h-8" />
            <path d="M15 18h-5" />
            <path d="M10 6h8v4h-8V6Z" />
          </svg>
        );
      default:
        return (
          <span className="material-symbols-outlined text-[24px]">verified</span>
        );
    }
  };

  // Helper for bottom indicator status tag
  const renderBottomIndicator = (milestone: typeof ENGINEERING_MILESTONES[0]) => {
    switch (milestone.statusType) {
      case 'prototype':
        return (
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 group-hover:text-emerald-800 transition-colors">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100/90 text-emerald-700 group-hover:bg-emerald-200 transition-colors">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span className="tracking-wide font-medium">{milestone.indicator}</span>
          </div>
        );
      case 'patent':
        return (
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700 group-hover:text-indigo-800 transition-colors">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-100/90 text-indigo-700 group-hover:bg-indigo-200 transition-colors">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span className="tracking-wide font-medium">{milestone.indicator}</span>
          </div>
        );
      case 'selected':
        return (
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 group-hover:text-amber-800 transition-colors">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-100/90 text-amber-700 group-hover:bg-amber-200 transition-colors">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </span>
            <span className="tracking-wide font-medium">{milestone.indicator}</span>
          </div>
        );
      case 'media':
        return (
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 group-hover:text-sky-800 transition-colors">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-sky-100/90 text-sky-700 group-hover:bg-sky-200 transition-colors">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
            <span className="tracking-wide font-medium">{milestone.indicator}</span>
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <span className="material-symbols-outlined text-[16px] text-slate-500">check</span>
            <span>{milestone.indicator}</span>
          </div>
        );
    }
  };

  return (
    <section
      className="py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden"
      id="achievements"
    >
      {/* Background Engineering Grid Texture */}
      <div className="absolute inset-0 bg-engineering-grid opacity-35 pointer-events-none" />

      {/* Subtle Ambient Radial Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-gradient-to-b from-rose-50/40 via-slate-50/20 to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/90 text-rose-600 mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider">
              PROVEN PROGRESS
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Engineering Milestones &amp; Achievements
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-3xl">
            From concept to prototype, NIRVANA is progressing through hardware development, system integration, and external recognition.
          </p>

          <p className="mt-2 text-sm text-slate-500 leading-relaxed max-w-3xl">
            From concept to prototype and external recognition, NIRVANA continues to transform personal safety through connected footwear technology.
          </p>
        </div>

        {/* 4 Milestone Cards - Clean Premium Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 mb-16 lg:mb-20">
          {ENGINEERING_MILESTONES.map((milestone) => (
            <div
              key={milestone.id}
              className="group bg-white rounded-2xl border border-slate-200/90 p-7 flex flex-col justify-between shadow-[0_2px_8px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_32px_rgba(15,23,42,0.07)] hover:border-rose-300/80 transition-all duration-300 transform hover:-translate-y-1.5 relative overflow-hidden"
            >
              {/* Subtle top card accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="space-y-5">
                {/* Milestone Label + Status Tag */}
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200/70">
                    {milestone.milestoneNum}
                  </span>
                  {getStatusBadge(milestone.statusType, milestone.status)}
                </div>

                {/* Technical Hardware / Milestone Icon */}
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-rose-600 group-hover:border-rose-200 group-hover:bg-rose-50/60 group-hover:scale-105 transition-all duration-300 shadow-2xs">
                  {renderMilestoneIcon(milestone.statusType)}
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* Bottom Indicator */}
              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                {renderBottomIndicator(milestone)}
                <span className="text-[11px] font-mono text-slate-400 group-hover:text-slate-600 transition-colors">
                  verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Metrics Bar Below The Cards (Using Verified Milestones Only) */}
        <div className="mb-16 lg:mb-20">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_10px_rgba(15,23,42,0.03)] p-6 sm:p-8 lg:p-10 relative overflow-hidden">
            {/* Engineering Corner Accents */}
            <div className="absolute top-2 left-2 text-[10px] font-mono text-slate-300 select-none">+</div>
            <div className="absolute top-2 right-2 text-[10px] font-mono text-slate-300 select-none">+</div>
            <div className="absolute bottom-2 left-2 text-[10px] font-mono text-slate-300 select-none">+</div>
            <div className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-300 select-none">+</div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
              {HIGHLIGHT_METRICS.map((metric, index) => (
                <div
                  key={metric.id}
                  className={`pt-6 first:pt-0 sm:pt-0 ${
                    index > 0 ? 'lg:pl-8' : ''
                  } flex flex-col justify-between`}
                >
                  <div>
                    {/* Authentic Milestone Counter */}
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight">
                        {metric.value}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-rose-500 mb-1" />
                    </div>

                    {/* Exact Milestone Labels */}
                    <div className="mt-2 space-y-0.5">
                      <div className="font-extrabold text-xs sm:text-sm text-slate-900 uppercase tracking-wider">
                        {metric.line1}
                      </div>
                      <div className="font-extrabold text-xs sm:text-sm text-rose-600 uppercase tracking-wider">
                        {metric.line2}
                      </div>
                    </div>
                  </div>

                  {/* Micro Note */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span>{metric.note}</span>
                    <span className="font-mono text-[10px] text-slate-400 font-semibold">{metric.badge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Small Timeline: Our Development Journey with Glowing Animated Progress Line */}
        <div className="bg-slate-50/70 rounded-2xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-2xs relative overflow-hidden">
          {/* Subtle Ambient Flow Highlight */}
          <div className="absolute top-0 right-0 w-96 h-48 bg-gradient-to-bl from-rose-100/30 to-transparent pointer-events-none rounded-full blur-2xl" />

          {/* Timeline Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
            <div>
              <div className="text-xs font-mono font-bold text-rose-600 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">route</span>
                ENGINEERING PROGRESSION
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Our Development Journey
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-mono max-w-md">
              Concept &rarr; Architecture &rarr; Prototype &rarr; Testing &rarr; Integration &rarr; Prototype Ready
            </p>
          </div>

          {/* Desktop Timeline Layout (>= lg screens) */}
          <div className="hidden lg:block relative pb-4">
            {/* Static Base Line */}
            <div className="absolute top-7 left-8 right-8 h-1 bg-slate-200/90 rounded-full z-0" />

            {/* Glowing Gradient Active Line */}
            <div className="absolute top-7 left-8 right-8 h-1 bg-gradient-to-r from-rose-500 via-rose-400 to-emerald-500 rounded-full z-0 shadow-xs" />

            {/* Glowing Animated Progress Light Beam Traveling across line */}
            <div className="absolute top-[26px] left-8 right-8 h-1.5 overflow-hidden z-0 pointer-events-none">
              <div className="w-48 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-90 rounded-full blur-[1px] animate-progress-flow" />
            </div>

            {/* 6 Step Nodes */}
            <div className="grid grid-cols-6 gap-4 relative z-10">
              {DEVELOPMENT_JOURNEY.map((item, idx) => {
                const isCurrent = item.status === 'current';
                const isHovered = activeStep === idx;

                return (
                  <div
                    key={item.step}
                    onMouseEnter={() => setActiveStep(idx)}
                    onMouseLeave={() => setActiveStep(null)}
                    className="flex flex-col items-center text-center group cursor-pointer transition-transform duration-200 relative"
                  >
                    {/* Node Circle */}
                    <div className="relative mb-4">
                      {isCurrent && (
                        <span className="absolute -inset-1.5 rounded-full bg-emerald-400/30 animate-ping-slow pointer-events-none" />
                      )}
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 relative z-10 shadow-xs ${
                          isCurrent
                            ? 'bg-emerald-600 text-white border-2 border-emerald-400 ring-4 ring-emerald-500/20 shadow-emerald-500/20'
                            : isHovered
                            ? 'bg-rose-50 text-rose-600 border-2 border-rose-400 scale-105'
                            : 'bg-white text-slate-800 border-2 border-slate-300/90 hover:border-rose-400'
                        }`}
                      >
                        {isCurrent ? (
                          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        ) : (
                          item.step
                        )}
                      </div>

                      {/* Directional Connector Arrow between desktop nodes */}
                      {idx < DEVELOPMENT_JOURNEY.length - 1 && (
                        <div className="hidden lg:flex absolute top-1/2 -right-6 xl:-right-7 transform -translate-y-1/2 z-20 text-rose-400/90 select-none pointer-events-none">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Milestone Step & Title */}
                    <div className="space-y-1 max-w-[190px]">
                      <span className="font-mono text-[11px] font-bold text-rose-600 uppercase tracking-wider block">
                        STEP {item.step}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-rose-600 transition-colors">
                        {item.title}
                      </h4>
                      {item.detail && (
                        <p className="text-[11px] text-slate-500 leading-tight pt-1">
                          {item.detail}
                        </p>
                      )}
                      {isCurrent && (
                        <span className="inline-block mt-1 font-mono text-[9px] font-bold text-emerald-700 bg-emerald-100/90 px-2 py-0.5 rounded-full border border-emerald-300/80">
                          PROTOTYPE READY
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile & Tablet Timeline Layout (< lg screens) */}
          <div className="block lg:hidden relative pl-8 sm:pl-10 space-y-4">
            {/* Base Vertical Line */}
            <div className="absolute top-4 bottom-4 left-3.5 sm:left-4.5 w-1 bg-slate-200/90 rounded-full z-0" />
            
            {/* Glowing Gradient Vertical Line */}
            <div className="absolute top-4 bottom-4 left-3.5 sm:left-4.5 w-1 bg-gradient-to-b from-rose-500 via-rose-400 to-emerald-500 rounded-full z-0 shadow-xs" />

            {/* Glowing Animated Progress Light Beam */}
            <div className="absolute top-4 bottom-4 left-3 sm:left-4 w-2 overflow-hidden z-0 pointer-events-none">
              <div className="w-full h-32 bg-gradient-to-b from-transparent via-white to-transparent opacity-90 rounded-full blur-[1px] animate-progress-flow-vertical" />
            </div>

            {DEVELOPMENT_JOURNEY.map((item, idx) => {
              const isCurrent = item.status === 'current';

              return (
                <div key={item.step} className="space-y-3">
                  <div className="relative flex items-start gap-4">
                    {/* Node Circle */}
                    <div className="absolute -left-8 sm:-left-10 mt-0.5">
                      {isCurrent && (
                        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-ping-slow pointer-events-none" />
                      )}
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-xs transition-all relative z-10 shadow-xs ${
                          isCurrent
                            ? 'bg-emerald-600 text-white border-2 border-emerald-400 ring-2 ring-emerald-500/20'
                            : 'bg-white text-slate-800 border-2 border-slate-300'
                        }`}
                      >
                        {isCurrent ? (
                          <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        ) : (
                          item.step
                        )}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="bg-white rounded-xl border border-slate-200/90 p-4 w-full shadow-2xs">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[10px] font-bold text-rose-600 uppercase tracking-wider">
                          STEP {item.step}
                        </span>
                        {isCurrent ? (
                          <span className="font-mono text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            PROTOTYPE READY
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono text-slate-400">
                            COMPLETED
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mt-1">
                        {item.title}
                      </h4>
                      {item.detail && (
                        <p className="text-xs text-slate-500 mt-1">
                          {item.detail}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Downward Connector Arrow for mobile */}
                  {idx < DEVELOPMENT_JOURNEY.length - 1 && (
                    <div className="flex items-center justify-center py-0.5 text-rose-400/80">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <polyline points="19 12 12 19 5 12" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Summary Callout */}
          <div className="mt-10 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Current Status: <strong>Functional Prototype Ready</strong> (Hardware, Module &amp; Integration Verified)</span>
            </div>
            <div className="font-mono text-slate-400 text-[11px]">
              NIRVANA Engineering System Baseline &bull; 2026
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
