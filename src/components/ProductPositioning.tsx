import React, { useState } from 'react';

interface ConceptItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  formFactor: string;
  benefits: string[];
  icon: string;
  badge: string;
}

export const ProductPositioning: React.FC = () => {
  const [selectedConcept, setSelectedConcept] = useState<string>('footwear');

  const concepts: ConceptItem[] = [
    {
      id: 'footwear',
      title: 'Footwear Integration',
      tagline: 'Zero-Burden, Continuous Plantar Ground Contact',
      description:
        'Embedded into performance insoles or specialized footwear soles. Provides uninterrupted, zero-effort kinetic protection and high-fidelity gait sensing without having to remember to wear or carry an accessory.',
      formFactor: 'Ultra-thin hermetic pod embedded directly in the insole arch chamber',
      benefits: [
        'Always on: protects every time you put on your shoes',
        'Direct ground reaction force profiling for accurate step & fall vectors',
        'Invisible & tamper-resistant for high-risk or vulnerable users',
        'Kinetic harvesting assist extends operating longevity'
      ],
      icon: 'steps',
      badge: 'Signature Application',
    },
    {
      id: 'wearable',
      title: 'Wearable Attachment',
      tagline: 'Versatile Clip-On for Belts, Straps & Bags',
      description:
        'Encased in an impact-rated modular shell designed to snap securely onto apparel, waistbands, backpacks, or equipment harnesses. Adaptable to any clothing style or uniform.',
      formFactor: 'Ergonomic snap-clip casing with magnetic latch and lanyard loop',
      benefits: [
        'Rapidly swappable between work gear, everyday clothes, or bags',
        'Immediate tactile thumb access to emergency SOS button',
        'Ideal for outdoor runners, cyclists, and campus commuters',
        'IP67 weatherized seal against dust and water immersion'
      ],
      icon: 'watch',
      badge: 'Everyday Versatility',
    },
    {
      id: 'personal',
      title: 'Personal Safety',
      tagline: 'Discreet Palm & Pocket Emergency Lifeline',
      description:
        'Sleek, minimalist handheld or pocket companion built for women traveling alone, night-shift commuters, and solo urban transit. Triggers quiet alarms and live location streaming without attracting attention.',
      formFactor: 'Smooth pebble form factor optimized for blind, concealed tactile activation',
      benefits: [
        'Silent panic trigger: alert authorized contacts without drawing attention',
        'Autonomous cellular uplink requires zero smartphone unlocking',
        'Haptic confirmation pulse confirms emergency dispatch acknowledged',
        'Automated geofence tracking along commuting routes'
      ],
      icon: 'shield_person',
      badge: 'Independent Protection',
    },
    {
      id: 'worker',
      title: 'Worker Safety',
      tagline: 'Lone Worker & Industrial Compliance Telematics',
      description:
        'Engineered for hazardous worksites, civil infrastructure, manufacturing plants, and remote utility technicians. Detects sudden falls, prolonged immobility, and hazardous zone crossings.',
      formFactor: 'Ruggedized shock-resistant housing compatible with heavy-duty work boots & PPE',
      benefits: [
        'Rapid man-down detection with verified impact & zero-gravity vectors',
        'Subterranean-grade mesh relay for dead-zone penetration',
        'Central EHS dashboard integration with floor plan positioning',
        'Reduces critical trauma escalation time from hours to seconds'
      ],
      icon: 'engineering',
      badge: 'Industrial Grade',
    },
    {
      id: 'emergency',
      title: 'Emergency Assistance',
      tagline: 'Assistive Lifeline for Seniors & Vulnerable Users',
      description:
        'Non-intrusive personal safety system for elderly individuals and people requiring accessible emergency assistance. Automates fall detection and alerts designated family members and caregivers without complex smartphone interfaces.',
      formFactor: 'Ergonomic pendant, pocket slip, or orthopedic footwear insert',
      benefits: [
        'Eliminates the fear of falling alone with 24/7 autonomous monitoring',
        'Direct voice/data dispatch link to family emergency circle',
        'Safe zone geofencing provides reassurance for memory-care users',
        'No confusing touchscreen required — simple, deterministic operation'
      ],
      icon: 'elderly',
      badge: 'Assistive Care',
    },
  ];

  const active = concepts.find((c) => c.id === selectedConcept) || concepts[0];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200 text-slate-800 relative overflow-hidden" id="about">
      <span id="positioning" className="sr-only">About NIRVANA</span>
      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-14 lg:mb-18">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="flex items-center gap-3 p-1.5 pr-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
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
              Universal Safety Platform
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14]">
            One Safety Device. Multiple Possibilities.
          </h2>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm font-semibold">
            <span className="text-purple-700">NIRVANA &mdash; Safety, Wherever You Go.</span>
            <span className="text-slate-400">&bull;</span>
            <span className="text-blue-700">One Device. Multiple Ways to Stay Safe.</span>
          </div>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            NIRVANA is not restricted to one type of footwear or one physical form. Designed as a universal safety device platform, NIRVANA provides emergency assistance wherever and however the user needs it.
          </p>

          {/* Important Footwear Clarification Banner */}
          <div className="mt-6 p-4 rounded-xl bg-purple-50/80 border border-purple-200 flex items-center gap-3 text-xs sm:text-sm text-slate-700">
            <span className="material-symbols-outlined text-purple-700 text-[22px] shrink-0">info</span>
            <span>
              <strong className="text-slate-900 font-semibold">Important Distinction:</strong> Footwear integration is one vital, high-efficacy application of the NIRVANA system &mdash; not the entire identity of the platform.
            </span>
          </div>
        </div>

        {/* Interactive Usage Concepts Grid & Tab Switcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Concept Selectors (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-bold mb-1">
              Select Usage Concept
            </div>

            {concepts.map((item) => {
              const isSelected = item.id === selectedConcept;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedConcept(item.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-start gap-4 ${
                    isSelected
                      ? 'bg-white border-purple-500 shadow-md ring-1 ring-purple-400/40'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white text-slate-600'
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                      isSelected
                        ? 'bg-purple-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-500 border border-slate-200'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className={`text-base font-bold transition-colors ${
                          isSelected ? 'text-slate-900' : 'text-slate-700'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                          isSelected
                            ? 'bg-purple-50 text-purple-700 border-purple-200'
                            : 'bg-slate-100 text-slate-500 border-slate-200'
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                      {item.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Concept Deep-Dive Showcase (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xs relative overflow-hidden">
            <div className="space-y-6">
              
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="font-mono text-xs text-purple-700 font-bold uppercase tracking-wider">
                    {active.title} Architecture
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-mono text-xs">
                  Universal Firmware Compatibility
                </div>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {active.title}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-purple-700 mt-1">
                  {active.tagline}
                </p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {active.description}
                </p>
              </div>

              {/* Form Factor Callout Box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-start gap-3">
                <span className="material-symbols-outlined text-purple-700 text-[20px] shrink-0 mt-0.5">build_circle</span>
                <div>
                  <span className="font-mono font-bold text-slate-900 uppercase tracking-wide block">Physical Form Factor:</span>
                  <span className="text-slate-600 mt-0.5 block">{active.formFactor}</span>
                </div>
              </div>

              {/* Key Architectural Benefits */}
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Safety Capabilities in this Form Factor:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {active.benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/90 flex items-start gap-2.5"
                    >
                      <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 border border-purple-200 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        ✓
                      </span>
                      <span className="text-xs text-slate-700 font-medium leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Summary Bar */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Verified Hardware Specification
                </span>
                <span>Zero Dependent Hardware Required</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
