import React, { useState } from 'react';

interface NetworkNode {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  protocol: string;
  latency: string;
  icon: string;
  security: string;
}

export const SafetyEcosystem: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('backend');

  const nodes: NetworkNode[] = [
    {
      id: 'device',
      name: 'NIRVANA DEVICE',
      tagline: 'Autonomous Physical Hardware Node',
      desc: 'The compact, multi-form wearable node monitoring user safety continuously in the real world.',
      protocol: 'Embedded Firmware Micro-Kernel',
      latency: 'T+0 ms',
      icon: 'developer_board',
      security: 'Hardware Root of Trust & Secure Element'
    },
    {
      id: 'sensors',
      name: 'SENSORS',
      tagline: 'Multi-Vector Kinetic & Biomechanical Array',
      desc: 'Captures 100 Hz motion vectors, ground reaction forces, sudden acceleration dips, and violent impact thresholds.',
      protocol: 'SPI / I2C Bus Telemetry',
      latency: '< 10 ms',
      icon: 'sensors',
      security: 'Calibrated On-Die Signal Processing'
    },
    {
      id: 'connectivity',
      name: 'CONNECTIVITY',
      tagline: 'Dual-Channel Autonomous Wireless Uplink',
      desc: 'Combines low-power Bluetooth 5.3 for companion smartphone sync with an autonomous cellular IoT fallback.',
      protocol: 'BLE 5.3 + LTE-M / NB-IoT',
      latency: '< 350 ms',
      icon: 'wifi_tethering',
      security: 'AES-256 GCM Session Encryption'
    },
    {
      id: 'backend',
      name: 'BACKEND CLOUD',
      tagline: 'High-Availability Safety Processing Infrastructure',
      desc: 'Cloud intelligence engine handling event ingestion, geofence boundary verification, coordinate resolution, and alert escalation.',
      protocol: 'Distributed MQTT / WebSocket Brokers',
      latency: '< 650 ms',
      icon: 'cloud_sync',
      security: 'Zero-Trust TLS 1.3 & Encrypted Database'
    },
    {
      id: 'mobile-app',
      name: 'MOBILE APP',
      tagline: 'Guardian & User Telemetry Application',
      desc: 'Native iOS & Android apps providing live location mapping, battery diagnostics, safe zone controls, and alert management.',
      protocol: 'APNs & FCM High-Priority Push',
      latency: '< 850 ms',
      icon: 'phone_iphone',
      security: 'Biometric App Authentication'
    },
    {
      id: 'contacts',
      name: 'AUTHORIZED CONTACTS',
      tagline: 'Emergency Circle & First Responders',
      desc: 'Family members, supervisors, campus safety officers, or emergency dispatchers receiving coordinates and critical notifications.',
      protocol: 'Voice, SMS, Interactive Web Map',
      latency: '< 1.2s Total',
      icon: 'support_agent',
      security: 'Authenticated Guardian Sharing Token'
    }
  ];

  const active = nodes.find((n) => n.id === selectedNode) || nodes[3];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200 text-slate-800 relative overflow-hidden" id="ecosystem">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
            Unified IoT Mesh Infrastructure
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14]">
            The Connected Safety Ecosystem
          </h2>
          
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            NIRVANA connects physical sensing, intelligent hardware, wireless telemetry, secure cloud processing, and guardian interfaces into one resilient safety network.
          </p>
        </div>

        {/* Network Architecture Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 6-Tier Architecture Flow Stack (7 Cols) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-bold mb-2">
              Connected Safety Pipeline (Click any tier to inspect)
            </div>

            {nodes.map((node, idx) => {
              const isSelected = selectedNode === node.id;

              return (
                <div key={node.id} className="relative">
                  <button
                    onClick={() => setSelectedNode(node.id)}
                    className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-purple-50/70 border-purple-500 shadow-sm ring-1 ring-purple-300'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100/60 text-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                          isSelected
                            ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                            : 'bg-white text-slate-500 border-slate-200'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[22px]">
                          {node.icon}
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-mono text-xs sm:text-sm font-bold uppercase tracking-wider ${
                              isSelected ? 'text-slate-900' : 'text-slate-700'
                            }`}
                          >
                            {node.name}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            Tier 0{idx + 1}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                          {node.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0 font-mono text-xs">
                      <span className="text-purple-700 font-bold block">{node.latency}</span>
                      <span className="text-[10px] text-slate-400 hidden sm:block">LATENCY</span>
                    </div>
                  </button>

                  {idx < nodes.length - 1 && (
                    <div className="flex justify-center py-1">
                      <span className="material-symbols-outlined text-slate-300 text-[18px]">
                        arrow_downward
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Node Detailed Telemetry & Security Inspector (5 Cols) */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs relative">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <span className="font-mono text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Network Node Inspector
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold">
                  99.98% SLA
                </span>
              </div>

              {/* Node Title & Tagline */}
              <div>
                <span className="text-xs font-mono text-purple-700 font-bold uppercase tracking-wider">
                  Architecture Tier
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-0.5">
                  {active.name}
                </h3>
                <p className="text-sm font-semibold text-slate-700 mt-0.5">
                  {active.tagline}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mt-2.5 font-normal">
                  {active.desc}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 font-mono text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">COMM_PROTOCOL:</span>
                  <span className="text-purple-700 font-bold">{active.protocol}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">STAGE_LATENCY:</span>
                  <span className="text-emerald-700 font-bold">{active.latency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">SECURITY_SPEC:</span>
                  <span className="text-slate-900 font-bold">{active.security}</span>
                </div>
              </div>

              {/* Global Ecosystem Pillars */}
              <div className="space-y-2 pt-1">
                <div className="text-xs font-mono text-slate-500 font-bold uppercase tracking-wider">
                  Ecosystem Assurances:
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
                  <span className="material-symbols-outlined text-purple-700 text-[18px]">lock</span>
                  <span>AES-256 GCM end-to-end telemetry encryption</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
                  <span className="material-symbols-outlined text-purple-700 text-[18px]">offline_bolt</span>
                  <span>Dual-path wireless redundancy (BLE + Standalone Cellular)</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
