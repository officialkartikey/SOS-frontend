import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  focus: string;
  badge: string;
  avatarIcon: string;
}

export const Team: React.FC = () => {
  const teamRoles: TeamMember[] = [
    {
      name: 'Hardware & Systems Architecture',
      role: 'Embedded IoT & RF Telemetry',
      specialty: 'Dual-Channel BLE 5.3 + Cellular IoT',
      focus: 'Architecting power-optimized micro-controllers, multi-constellation GNSS receivers, and low-latency distress communication pipelines.',
      badge: 'Hardware Core',
      avatarIcon: 'developer_board',
    },
    {
      name: 'Biomechanics & Industrial Design',
      role: 'Ergonomics & Form-Factor Adaptation',
      specialty: 'Plantar Sensors & Wearable Enclosures',
      focus: 'Designing hermetically sealed IP67 enclosures for footbed insole integration, clip-on accessories, and blind-touch tactile SOS actuators.',
      badge: 'Ergonomics & IP67',
      avatarIcon: 'accessibility_new',
    },
    {
      name: 'Safety Intelligence & Firmware',
      role: 'Kinetic Sensor Fusion & Fall State Machines',
      specialty: '100 Hz IMU Real-Time Inference',
      focus: 'Developing multi-axis impact algorithms, zero-gravity freefall detection, and post-fall immobility verification safeguards.',
      badge: 'Algorithm & AI',
      avatarIcon: 'insights',
    },
    {
      name: 'Cloud & Guardian Applications',
      role: 'Encrypted Telemetry & Mobile Systems',
      specialty: 'AES-256 GCM Dispatch & Geofencing',
      focus: 'Engineering sub-second alert relays, live GPS tracking web dashboards, and high-reliability iOS & Android companion applications.',
      badge: 'Cloud & App',
      avatarIcon: 'security',
    },
  ];

  return (
    <section id="team" className="py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Background subtle technical accents */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
              Engineering &amp; Innovation
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14]">
              The Team Behind NIRVANA
            </h2>

            <div className="mt-2.5 flex items-center gap-2.5 text-sm font-semibold text-purple-700">
              <span>Universal Personal Safety Technology</span>
              <span className="text-slate-300">&bull;</span>
              <span className="text-slate-600 font-normal">Deep-Tech Safety Hardware &amp; Connected Telematics</span>
            </div>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              A multidisciplinary engineering collective uniting embedded systems hardware, biomechanics, kinetic algorithms, and secure cloud telemetry to deliver phone-independent personal safety.
            </p>
          </div>

          {/* Team Credentials Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 flex items-center gap-4 shrink-0 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0">
              <img src="/nirvana-logo.png" alt="NIRVANA" className="h-9 w-9 object-contain rounded-lg" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wide">
                STPI OCP 2.0 Incubated
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                Innovation Patent Published &bull; RASTA Magazine Featured
              </div>
            </div>
          </div>
        </div>

        {/* Team Competency Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {teamRoles.map((member, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 group-hover:bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 transition-colors">
                    <span className="material-symbols-outlined text-[24px]">{member.avatarIcon}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 group-hover:bg-purple-50 text-[10px] font-mono font-bold text-slate-600 group-hover:text-purple-700 border border-slate-200 transition-colors uppercase">
                    {member.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-900 transition-colors">
                  {member.name}
                </h3>
                <div className="text-xs font-semibold text-purple-700 mt-0.5">
                  {member.role}
                </div>
                <div className="text-[11px] font-mono text-slate-500 mt-1 mb-3">
                  {member.specialty}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {member.focus}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active R&amp;D
                </span>
                <span>NIRVANA Team</span>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-navy-950 via-slate-900 to-navy-950 text-white border border-purple-500/20 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/nirvana-logo.png"
              alt="NIRVANA Logo"
              className="h-14 w-14 object-contain rounded-2xl bg-white/5 border border-purple-400/30 p-1 shrink-0"
            />
            <div>
              <div className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">
                Engineering Commitment
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                "Safety, Wherever You Go."
              </h4>
              <p className="text-xs text-slate-300 max-w-2xl mt-1 leading-relaxed">
                NIRVANA's hardware and software engineering teams build every line of code and schematic with a singular objective: ensuring immediate, deterministic assistance when seconds matter.
              </p>
            </div>
          </div>

          <a
            href="#demo-form"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-lg shadow-purple-950 transition-all shrink-0 whitespace-nowrap"
          >
            <span>Connect with Engineering</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>

      </div>
    </section>
  );
};
