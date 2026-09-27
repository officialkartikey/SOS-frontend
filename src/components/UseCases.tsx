import React, { useState } from 'react';

interface UseCaseItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  badge: string;
  situation: string;
  risk: string;
  nirvanaResponse: string;
  technicalMechanism: string;
}

export const UseCases: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<string>('women');

  const cases: UseCaseItem[] = [
    {
      id: 'women',
      title: 'Women Safety',
      subtitle: 'Discreet Panic Lifeline During Solo Transit',
      icon: 'shield_person',
      badge: 'Urban & Solo Transit',
      situation:
        'Walking alone at night, commuting via public transit, or returning home through poorly lit corridors where taking out or unlocking a smartphone would draw unwanted attention or is impossible.',
      risk:
        'High vulnerability during sudden confrontations, stalking, or harassment where accessing a mobile device is physically prevented or dangerous.',
      nirvanaResponse:
        'A covert tactile press of the NIRVANA actuator immediately dispatches a high-priority distress signal with live coordinates to designated guardians, without screen glare or audio giveaways.',
      technicalMechanism:
        'Blind positive-click trigger &bull; Silent cellular IoT packet transmission &bull; Live guardian tracking link'
    },
    {
      id: 'elderly',
      title: 'Elderly Safety',
      subtitle: 'Unobtrusive Fall & Assistive Living Protection',
      icon: 'elderly',
      badge: 'Independent Living',
      situation:
        'Seniors living independently or in assisted care facilities carrying out daily routines around the house, garden, or neighborhood.',
      risk:
        'Unassisted slip-and-fall incidents leading to prolonged immobility on the floor, shock, or inability to reach a landline or wall-mounted pull cord.',
      nirvanaResponse:
        'Embedded sensor arrays detect high-impact deceleration followed by stillness, initiate a 15-second safety verification window, and automatically notify family members and caregivers if no dismissal is received.',
      technicalMechanism:
        'Plantar ground contact & 6-axis IMU sensing &bull; Automated pre-dispatch buffer &bull; Caregiver escalation chain'
    },
    {
      id: 'student',
      title: 'Student Safety',
      subtitle: 'Campus Safe Zone & Late Study Commutes',
      icon: 'school',
      badge: 'Campus Life',
      situation:
        'Students navigating university campuses, walking to distant transit stops late at night, or traveling between dormitories and academic libraries.',
      risk:
        'Getting disoriented, departing safe campus corridors into isolated areas, or facing emergencies where quick contact with campus security or parents is needed.',
      nirvanaResponse:
        'Automated geofencing confirms safe arrival inside designated campus borders. If an emergency occurs, the SOS button provides an immediate connection to trusted contacts.',
      technicalMechanism:
        'Autonomous polygon geofencing &bull; Low-power boundary triggers &bull; Multi-guardian notification sharing'
    },
    {
      id: 'worker',
      title: 'Worker Safety',
      subtitle: 'Lone Worker & High-Risk Industrial Protection',
      icon: 'engineering',
      badge: 'Industrial & Field',
      situation:
        'Utility technicians, civil infrastructure engineers, warehouse operators, and night-shift lone workers stationed in remote or hazardous areas.',
      risk:
        'Slips, high-elevation falls, equipment impact, or sudden incapacitation in subterranean or remote sectors where shifts are unmonitored for hours.',
      nirvanaResponse:
        'Continuous 100 Hz kinetic monitoring identifies abnormal impact and zero-gravity free-fall, dispatching location telemetry to site safety dispatchers within 1.2 seconds.',
      technicalMechanism:
        'Heavy-duty housing &bull; Fast man-down detection &bull; Sub-meter floor plan coordinate pairing'
    },
    {
      id: 'outdoor',
      title: 'Outdoor Activities',
      subtitle: 'Trail Running, Hiking & Cycling Lifeline',
      icon: 'hiking',
      badge: 'Sports & Adventure',
      situation:
        'Athletes, trail runners, cyclists, and outdoor enthusiasts exploring backcountry routes, isolated trails, or unfamiliar parks where cell reception may be variable.',
      risk:
        'Sprains, tumble accidents, sudden dehydration, or crashes where mobile phones are dropped, broken, or out of reach.',
      nirvanaResponse:
        'Ruggedized weather-sealed NIRVANA pod tracks breadcrumbs and enables one-touch SOS distress signaling, relaying satellite coordinates to emergency contacts.',
      technicalMechanism:
        'IP67 hermetic ingress seal &bull; A-GNSS satellite acquisition &bull; Compact wearable clip-on form factor'
    },
    {
      id: 'assistance',
      title: 'Personal Emergency Assistance',
      subtitle: 'Accessible Support for Mobility & Medical Needs',
      icon: 'health_and_safety',
      badge: 'Accessible Lifeline',
      situation:
        'Individuals with chronic health conditions, limited mobility, or periodic disorientation needing dependable access to assistance without complex tech.',
      risk:
        'Experiencing acute distress, weakness, or medical urgency without the manual dexterity to operate multi-step smartphone screens or dial numbers.',
      nirvanaResponse:
        'Deterministic, physical trigger operation ensures that help is accessible under any physical condition, providing peace of mind to both the user and their support network.',
      technicalMechanism:
        'Tactile positive-click dome switch &bull; Standalone telemetry engine &bull; Direct guardian phone alerting'
    }
  ];

  const active = cases.find((c) => c.id === selectedCase) || cases[0];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200 text-slate-800 relative overflow-hidden" id="use-cases">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
            Real-World Impact
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14]">
            Universal Protection Across Scenarios
          </h2>
          
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            From urban evening commutes to hazardous worksites and assistive elder care, NIRVANA adapts to provide dedicated, standalone life-safety support.
          </p>
        </div>

        {/* Use Cases Grid & Detailed Inspection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 6 Scenario Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-bold mb-1">
              Select Use Case Scenario
            </div>

            {cases.map((cs) => {
              const isSelected = cs.id === selectedCase;
              return (
                <button
                  key={cs.id}
                  onClick={() => setSelectedCase(cs.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-white border-purple-500 shadow-md ring-1 ring-purple-300'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white text-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                        isSelected
                          ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                          : 'bg-slate-100 text-slate-500 border-slate-200'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[22px]">
                        {cs.icon}
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-bold text-sm sm:text-base ${
                            isSelected ? 'text-slate-900' : 'text-slate-700'
                          }`}
                        >
                          {cs.title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                        {cs.subtitle}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`font-mono text-[10px] px-2 py-0.5 rounded-full border shrink-0 ${
                      isSelected
                        ? 'bg-purple-50 text-purple-700 border-purple-200'
                        : 'bg-slate-100 text-slate-500 border-slate-200'
                    }`}
                  >
                    {cs.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Scenario Card (Situation, Risk, NIRVANA Response) (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xs relative">
            <div className="space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="font-mono text-xs font-bold text-purple-700 uppercase tracking-wider">
                  Scenario Analysis
                </span>
                <span className="font-mono text-xs text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  {active.badge}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {active.title}
                </h3>
                <p className="text-sm font-semibold text-purple-700 mt-0.5">
                  {active.subtitle}
                </p>
              </div>

              {/* 3 Core Blocks: Situation, Risk, NIRVANA Response */}
              <div className="space-y-3.5">
                
                {/* Block 1: Situation */}
                <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700 uppercase tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span>1. Situation</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1 font-normal">
                    {active.situation}
                  </p>
                </div>

                {/* Block 2: Risk */}
                <div className="p-4 sm:p-5 rounded-xl bg-red-50/50 border border-red-200 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-emergency-700 uppercase tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-emergency-600"></span>
                    <span>2. Identified Life-Safety Risk</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1 font-normal">
                    {active.risk}
                  </p>
                </div>

                {/* Block 3: NIRVANA Response */}
                <div className="p-4 sm:p-5 rounded-xl bg-purple-50/70 border border-purple-200 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-800 uppercase tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
                    <span>3. NIRVANA Response</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed pt-1">
                    {active.nirvanaResponse}
                  </p>
                </div>

              </div>

              {/* Underlying Technical Mechanism */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600">
                <span className="font-bold text-slate-800 block mb-1">Underlying Mechanism:</span>
                <span dangerouslySetInnerHTML={{ __html: active.technicalMechanism }} />
              </div>

              {/* Responsible Disclaimer */}
              <div className="pt-2 text-[11px] text-slate-500 leading-relaxed italic">
                * Note: NIRVANA is an autonomous personal safety and telemetry platform designed to expedite assistance and communication. It does not provide medical diagnoses or guarantee absolute rescue outcomes.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
