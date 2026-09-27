import React, { useState, useRef, useEffect } from 'react';

interface DeviceComponent {
  id: string;
  label: string;
  name: string;
  category: string;
  spec: string;
  description: string;
  details: string[];
  explodedOffset: number; // in px
  color: string;
}

export const Device3D: React.FC = () => {
  const [rotation, setRotation] = useState<number>(25);
  const [tilt, setTilt] = useState<number>(15);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number>(0);
  const [dragStartY, setDragStartY] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [activeMode, setActiveMode] = useState<'normal' | 'exploded' | 'sensor' | 'battery' | 'connectivity'>('normal');
  const [selectedCompId, setSelectedCompId] = useState<string>('sos');
  const [hoveredCompId, setHoveredCompId] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const components: DeviceComponent[] = [
    {
      id: 'gps',
      label: 'GPS',
      name: 'GNSS & Location Engine',
      category: 'Positioning Subsystem',
      spec: 'Multi-constellation GPS/GLONASS/Galileo receiver with A-GPS cellular assist',
      description: 'Acquires user positioning coordinates and transmits emergency breadcrumbs during SOS alerts or safe zone boundary crossings.',
      details: [
        'Multi-Constellation Satellite Acquisition',
        'Assisted-GNSS fast time-to-first-fix (< 15s cold start)',
        'Low-power periodic telemetry ping mode',
        'Dynamic duty-cycling for maximum operational battery life'
      ],
      explodedOffset: -90,
      color: '#0284c7'
    },
    {
      id: 'sensors',
      label: 'SENSORS',
      name: 'Multi-Axis IMU & Motion Array',
      category: 'Kinetic Sensing',
      spec: 'High-precision 6-axis accelerometer & gyroscope with micro-piezo ground reaction nodes',
      description: 'Continuously monitors motion vectors at 100 Hz to detect sudden high-G impacts, abnormal zero-gravity freefall, and prolonged immobility.',
      details: [
        '100 Hz continuous inertial sampling',
        'Multi-vector fall impact recognition algorithm',
        'Post-fall immobility verification state machine',
        'Calibrated sensitivity to reduce false-positive triggers'
      ],
      explodedOffset: -45,
      color: '#d97706'
    },
    {
      id: 'sos',
      label: 'SOS',
      name: 'Tactile Emergency Actuator',
      category: 'Emergency Dispatch',
      spec: 'Hermetically sealed positive-click tactile dome switch with haptic feedback engine',
      description: 'The primary physical lifeline. Easily triggered by blind touch or deliberate press to dispatch distress signals without touching a smartphone.',
      details: [
        'Deliberate press threshold prevents accidental pocket triggering',
        'Haptic vibration pulse confirms transmission acknowledged',
        'Emergency red status LED indicator ring',
        'Direct link to emergency dispatch priority queue'
      ],
      explodedOffset: 0,
      color: '#dc2626'
    },
    {
      id: 'connectivity',
      label: 'CONNECTIVITY',
      name: 'BLE & Cellular IoT Subsystem',
      category: 'Wireless Telemetry',
      spec: 'Bluetooth 5.3 Low Energy + LTE-M / NB-IoT autonomous cellular modem with integrated antenna',
      description: 'Ensures dual-channel redundancy. Pairs with the NIRVANA mobile app while maintaining an autonomous cellular fallback when no phone is present.',
      details: [
        'Bluetooth 5.3 Low Energy for low-power companion app sync',
        'Autonomous Cellular IoT uplink for true phone-independent safety',
        'AES-256 GCM encrypted data packets with TLS 1.3 payload',
        'Ultra-compact conformal micro-strip antenna'
      ],
      explodedOffset: 45,
      color: '#7c3aed'
    },
    {
      id: 'power',
      label: 'POWER',
      name: 'Rechargeable Energy Core',
      category: 'Power Management',
      spec: 'High-energy-density Lithium-Polymer cell with smart power management IC & kinetic assist',
      description: 'Powers the sensor arrays and wireless transceivers reliably with intelligent low-power standby and quick recharge capability.',
      details: [
        'Multi-day active standby autonomy with intelligent sleep cycles',
        'Kinetic charging assist integration for extended daily wear',
        'Sub-zero temperature discharge protection circuit',
        'Hermetic IP67 moisture and impact protective sealing'
      ],
      explodedOffset: 90,
      color: '#059669'
    }
  ];

  // Auto-rotation effect
  useEffect(() => {
    if (!autoRotate || isDragging) return;
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.6) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [autoRotate, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setAutoRotate(false);
    setDragStartX(e.clientX);
    setDragStartY(e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX;
    const deltaY = e.clientY - dragStartY;
    setRotation((prev) => (prev + deltaX * 0.5) % 360);
    setTilt((prev) => Math.max(-30, Math.min(45, prev - deltaY * 0.3)));
    setDragStartX(e.clientX);
    setDragStartY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const activeComp = components.find((c) => c.id === selectedCompId) || components[2];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200 text-slate-800 relative overflow-hidden" id="device">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
              Interactive Hardware Architecture
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.14]">
              Inside the NIRVANA Device
            </h2>
            
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Explore the five verified core subsystems powering NIRVANA's universal safety platform. Drag to rotate 360°, inspect individual components, or switch modes.
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-xl border border-slate-200 shadow-xs">
            <button
              onClick={() => setActiveMode('normal')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                activeMode === 'normal'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              360° Assembly
            </button>
            <button
              onClick={() => setActiveMode('exploded')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                activeMode === 'exploded'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Exploded View
            </button>
            <button
              onClick={() => setActiveMode('sensor')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                activeMode === 'sensor'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sensor Mode
            </button>
            <button
              onClick={() => setActiveMode('battery')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                activeMode === 'battery'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Power Mode
            </button>
            <button
              onClick={() => setActiveMode('connectivity')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                activeMode === 'connectivity'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Connectivity
            </button>
          </div>
        </div>

        {/* Main 3D Viewport & Inspection Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive 3D Canvas (7 Cols) */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className="relative w-full h-[520px] sm:h-[580px] rounded-3xl bg-slate-950 border border-slate-800 p-6 flex items-center justify-center shadow-xl select-none cursor-grab active:cursor-grabbing overflow-hidden"
            >
              {/* Grid backdrop */}
              <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

              {/* Mode-specific visual glows */}
              {activeMode === 'sensor' && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[450px] h-[450px] rounded-full border border-amber-400/20 animate-ping-slow" />
                  <div className="absolute font-mono text-[10px] text-amber-400 top-6 left-6 bg-slate-900/90 px-3 py-1 rounded-full border border-amber-500/30">
                    IMU 100 Hz Real-Time Vector Wave Active
                  </div>
                </div>
              )}

              {activeMode === 'connectivity' && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[350px] h-[350px] rounded-full border border-purple-400/30 animate-pulse-ring" />
                  <div className="w-[500px] h-[500px] rounded-full border border-cyan-400/20 animate-pulse" />
                  <div className="absolute font-mono text-[10px] text-purple-300 top-6 left-6 bg-slate-900/90 px-3 py-1 rounded-full border border-purple-500/30">
                    BLE 5.3 + Cellular IoT RF Wavefront Active
                  </div>
                </div>
              )}

              {activeMode === 'battery' && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[380px] h-[380px] rounded-full border border-emerald-400/25 animate-pulse" />
                  <div className="absolute font-mono text-[10px] text-emerald-400 top-6 left-6 bg-slate-900/90 px-3 py-1 rounded-full border border-emerald-500/30">
                    LiPo Core &bull; Power Management IC Monitored
                  </div>
                </div>
              )}

              {/* 3D Visual Assembly Container */}
              <div
                className="relative transition-transform duration-100 ease-out"
                style={{
                  transform: `perspective(1000px) rotateX(${tilt}deg) rotateY(${rotation}deg)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* 5 Hardware Layers */}
                {components.map((comp) => {
                  const isExploded = activeMode === 'exploded';
                  const offsetY = isExploded ? comp.explodedOffset * 1.3 : 0;
                  const isHovered = hoveredCompId === comp.id;
                  const isSelected = selectedCompId === comp.id;

                  return (
                    <div
                      key={comp.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCompId(comp.id);
                      }}
                      onMouseEnter={() => setHoveredCompId(comp.id)}
                      onMouseLeave={() => setHoveredCompId(null)}
                      style={{
                        transform: `translateY(${offsetY}px)`,
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                      className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                    >
                      {comp.id === 'gps' && (
                        <div
                          className={`w-44 h-44 rounded-full border-2 transition-all duration-300 flex items-center justify-center shadow-lg ${
                            isSelected || isHovered
                              ? 'border-blue-400 bg-blue-950/80 shadow-blue-500/40 scale-105'
                              : 'border-blue-500/40 bg-slate-900/70'
                          }`}
                        >
                          <div className="w-24 h-24 rounded-full border border-dashed border-blue-400/60 flex items-center justify-center font-mono text-[10px] text-blue-300">
                            GNSS / RF
                          </div>
                        </div>
                      )}

                      {comp.id === 'sensors' && (
                        <div
                          className={`w-52 h-52 rounded-full border-2 transition-all duration-300 flex items-center justify-center shadow-lg ${
                            isSelected || isHovered
                              ? 'border-amber-400 bg-amber-950/80 shadow-amber-500/40 scale-105'
                              : 'border-amber-500/40 bg-slate-900/70'
                          }`}
                        >
                          <div className="w-32 h-32 rounded-full border border-dashed border-amber-400/60 flex items-center justify-center font-mono text-[10px] text-amber-300">
                            IMU / 6-AXIS
                          </div>
                        </div>
                      )}

                      {comp.id === 'sos' && (
                        <div
                          className={`w-60 h-60 rounded-full border-2 transition-all duration-300 flex items-center justify-center shadow-xl ${
                            isSelected || isHovered
                              ? 'border-emergency-500 bg-slate-900/90 shadow-red-500/50 scale-105'
                              : 'border-purple-500/60 bg-slate-900/80'
                          }`}
                        >
                          <div className="w-16 h-16 rounded-full bg-emergency-600/90 border-2 border-emergency-400 flex items-center justify-center text-white font-mono font-bold text-xs shadow-lg shadow-red-950/90">
                            SOS
                          </div>
                        </div>
                      )}

                      {comp.id === 'connectivity' && (
                        <div
                          className={`w-48 h-48 rounded-full border-2 transition-all duration-300 flex items-center justify-center shadow-lg ${
                            isSelected || isHovered
                              ? 'border-purple-400 bg-purple-950/80 shadow-purple-500/40 scale-105'
                              : 'border-purple-500/40 bg-slate-900/70'
                          }`}
                        >
                          <div className="w-28 h-28 rounded-full border border-dashed border-purple-400/60 flex items-center justify-center font-mono text-[10px] text-purple-300">
                            BLE &bull; CELLULAR
                          </div>
                        </div>
                      )}

                      {comp.id === 'power' && (
                        <div
                          className={`w-40 h-40 rounded-full border-2 transition-all duration-300 flex items-center justify-center shadow-lg ${
                            isSelected || isHovered
                              ? 'border-emerald-400 bg-emerald-950/80 shadow-emerald-500/40 scale-105'
                              : 'border-emerald-500/40 bg-slate-900/70'
                          }`}
                        >
                          <div className="w-20 h-20 rounded-full border border-dashed border-emerald-400/60 flex items-center justify-center font-mono text-[10px] text-emerald-300">
                            LiPo CORE
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* 5 Floating Interactive Labels positioned in viewport */}
              <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center justify-center gap-2 z-20 pointer-events-auto">
                {components.map((comp) => {
                  const isSelected = selectedCompId === comp.id;
                  return (
                    <button
                      key={comp.id}
                      onClick={() => setSelectedCompId(comp.id)}
                      className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all border ${
                        isSelected
                          ? 'bg-purple-600 text-white border-purple-400 shadow-md scale-105'
                          : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:border-slate-500 hover:text-white'
                      }`}
                    >
                      {comp.label}
                    </button>
                  );
                })}
              </div>

              {/* Viewport Control Badges */}
              <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
                <button
                  onClick={() => setAutoRotate(!autoRotate)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-mono border transition-all ${
                    autoRotate
                      ? 'bg-purple-900/60 text-purple-300 border-purple-500/40'
                      : 'bg-slate-900/80 text-slate-400 border-slate-700'
                  }`}
                >
                  {autoRotate ? 'Auto-Spin: ON' : 'Auto-Spin: PAUSED'}
                </button>
                <button
                  onClick={() => {
                    setRotation(25);
                    setTilt(15);
                  }}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-900/80 text-slate-400 border border-slate-700 hover:text-white"
                >
                  Reset
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Component Detail Inspection Drawer (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs relative">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="font-mono text-xs text-purple-700 font-bold uppercase tracking-wider">
                  Component Inspector
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-mono text-[11px]">
                  Verified Hardware
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span
                    className="w-3.5 h-3.5 rounded-full"
                    style={{ backgroundColor: activeComp.color }}
                  />
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    {activeComp.name}
                  </h3>
                </div>
                <div className="text-xs font-mono text-purple-700 font-semibold">
                  {activeComp.category}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pt-1 font-normal">
                  {activeComp.description}
                </p>
              </div>

              {/* Hardware Specification Box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                <span className="font-mono font-bold text-slate-700 uppercase tracking-wide">Technical Specification:</span>
                <p className="text-slate-800 font-mono text-[12px] leading-relaxed">
                  {activeComp.spec}
                </p>
              </div>

              {/* Verified Functional Points */}
              <div className="space-y-2.5">
                <span className="font-mono text-xs font-bold text-slate-700 uppercase tracking-wide block">
                  Subsystem Characteristics:
                </span>
                {activeComp.details.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                    <span className="w-4 h-4 rounded-full bg-purple-100 text-purple-700 border border-purple-200 flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                      ✓
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Safety Protocol Note */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Direct Telemetry Link</span>
                <span className="text-emerald-700 font-semibold">STATUS: NOMINAL</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
