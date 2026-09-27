import React, { useState } from 'react';

interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  badge: string;
  accent: string;
  borderAccent: string;
  isEmergency?: boolean;
  metric: string;
  metricLabel: string;
  telemetryNote: string;
}

export const CoreFeatures: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<string>('sos');

  const features: FeatureItem[] = [
    {
      id: 'location',
      title: 'REAL-TIME LOCATION',
      subtitle: 'Continuous Situational Visibility',
      description: 'Know where the device is and share location information with authorized contacts.',
      icon: 'location_on',
      badge: 'GNSS & Cellular',
      accent: 'text-blue-600',
      borderAccent: 'hover:border-blue-300',
      metric: '< 3s',
      metricLabel: 'Telemetry Refresh Interval',
      telemetryNote: 'Secure coordinate transmission to authorized guardian channels.'
    },
    {
      id: 'fall',
      title: 'FALL DETECTION',
      subtitle: 'Autonomous Kinetic Analysis',
      description: 'Detect potential falls automatically using sensor data.',
      icon: 'personal_injury',
      badge: 'IMU Fusion',
      accent: 'text-amber-600',
      borderAccent: 'hover:border-amber-300',
      metric: '100 Hz',
      metricLabel: 'Plantar Motion Sampling',
      telemetryNote: 'Impact threshold detection with automatic pre-dispatch cancellation buffer.'
    },
    {
      id: 'sos',
      title: 'SOS ALERT',
      subtitle: 'Critical Emergency Lifeline',
      description: 'Trigger an emergency alert when immediate assistance is required.',
      icon: 'e911_emergency',
      badge: 'Immediate Dispatch',
      accent: 'text-emergency-600',
      borderAccent: 'border-emergency-300 hover:border-emergency-400',
      isEmergency: true,
      metric: '< 1.2s',
      metricLabel: 'Emergency Signal Latency',
      telemetryNote: 'Direct distress broadcast with live location and contact escalation.'
    },
    {
      id: 'geofencing',
      title: 'GEOFENCING',
      subtitle: 'Automated Safe Zone Boundaries',
      description: 'Define safe zones and receive alerts when predefined boundaries are crossed.',
      icon: 'radar',
      badge: 'Boundary Engine',
      accent: 'text-purple-600',
      borderAccent: 'hover:border-purple-300',
      metric: '360°',
      metricLabel: 'Custom Safe Zone Perimeter',
      telemetryNote: 'Automated boundary enter/exit notifications without constant manual polling.'
    },
    {
      id: 'mobile-app',
      title: 'MOBILE APP',
      subtitle: 'Connected Control & Insight',
      description: 'Monitor safety status, location and alerts through the connected application.',
      icon: 'smartphone',
      badge: 'iOS & Android',
      accent: 'text-cyan-600',
      borderAccent: 'hover:border-cyan-300',
      metric: '6 Modules',
      metricLabel: 'Comprehensive App Suite',
      telemetryNote: 'Intuitive interface for device battery, geofences, contacts, and live maps.'
    },
    {
      id: 'connected-safety',
      title: 'CONNECTED SAFETY',
      subtitle: 'Unified Safety Ecosystem',
      description: 'Connect the device, mobile application and backend into one safety ecosystem.',
      icon: 'hub',
      badge: 'End-to-End Mesh',
      accent: 'text-emerald-600',
      borderAccent: 'hover:border-emerald-300',
      metric: '99.98%',
      metricLabel: 'Mesh & Cloud Uptime',
      telemetryNote: 'Synchronized telemetry across device, cloud backend, and authorized responders.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200 text-slate-800 relative overflow-hidden" id="product">
      <span id="features" className="sr-only">Core Features</span>
      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-14 lg:mb-18">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="flex items-center gap-3 p-1.5 pr-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
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
              Core Product Architecture
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14]">
            Engineered for Autonomous Protection
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Six essential pillars of the NIRVANA universal safety platform deliver uninterrupted situational awareness, automated fall reaction, and rapid emergency intervention.
          </p>
        </div>

        {/* 6 Premium Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {features.map((feat) => {
            const isSelected = selectedFeature === feat.id;
            return (
              <div
                key={feat.id}
                onClick={() => setSelectedFeature(feat.id)}
                className={`group rounded-2xl bg-white border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? feat.isEmergency
                      ? 'border-emergency-500 shadow-md ring-1 ring-emergency-400/40'
                      : 'border-purple-500 shadow-md ring-1 ring-purple-400/40'
                    : `border-slate-200/90 ${feat.borderAccent} shadow-xs hover:shadow-md`
                }`}
              >
                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 transition-opacity ${
                    isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  } ${
                    feat.isEmergency
                      ? 'bg-emergency-600'
                      : 'bg-purple-600'
                  }`}
                />

                <div className="space-y-4">
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center p-2.5 border transition-all ${
                        feat.isEmergency
                          ? 'bg-red-50 border-red-200 text-emergency-600'
                          : 'bg-slate-50 border-slate-200 text-purple-700 group-hover:border-purple-200 group-hover:bg-purple-50'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[26px]">{feat.icon}</span>
                    </div>

                    <span
                      className={`font-mono text-[10px] sm:text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-md border ${
                        feat.isEmergency
                          ? 'bg-red-50 text-emergency-700 border-red-200'
                          : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      {feat.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs font-mono text-purple-700 font-medium mt-0.5">
                      {feat.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mt-2.5 font-normal">
                      {feat.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Metric & Telemetry Detail */}
                <div className="mt-8 pt-4 border-t border-slate-100 space-y-1.5">
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-bold font-mono tracking-tight text-slate-900">
                      {feat.metric}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {feat.metricLabel}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-mono leading-tight">
                    &bull; {feat.telemetryNote}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
