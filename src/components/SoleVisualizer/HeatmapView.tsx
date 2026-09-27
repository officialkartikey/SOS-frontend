import React, { useState } from 'react';
import { GaitPhase, GaitTelemetry } from '../../types';

export const HeatmapView: React.FC = () => {
  const [phase, setPhase] = useState<GaitPhase>('toe');

  const phaseData: Record<GaitPhase, GaitTelemetry> = {
    heel: {
      balanceText: 'Calcaneus Shock: 920 kPa (Normal Strike)',
      balanceClass: 'font-mono font-bold text-slate-900',
      peakForce: '920 kPa (Calcaneus Medial)',
      fatigueIndex: '8% Shift Load (Nominal)',
      copX: 85,
      copY: 260,
      nodeLoads: {
        n1: { label: '920kPa', bg: '#dc2626', scale: 'scale-110' },
        n2: { label: '840kPa', bg: '#dc2626', scale: 'scale-105' },
        n3: { label: '80kPa', bg: '#10b981', scale: 'scale-90' },
        n4: { label: '120kPa', bg: '#10b981', scale: 'scale-90' },
        n5: { label: '90kPa', bg: '#10b981', scale: 'scale-90' },
        n6: { label: '60kPa', bg: '#10b981', scale: 'scale-90' },
        n7: { label: '40kPa', bg: '#10b981', scale: 'scale-90' },
        n8: { label: '60kPa', bg: '#10b981', scale: 'scale-90' },
      }
    },
    mid: {
      balanceText: '50.1% L / 49.9% R (Midstance Equilibrium)',
      balanceClass: 'font-mono font-bold text-emerald-600',
      peakForce: '450 kPa (1st Metatarsal)',
      fatigueIndex: '10% Shift Load (Nominal)',
      copX: 80,
      copY: 160,
      nodeLoads: {
        n1: { label: '340kPa', bg: '#f59e0b', scale: 'scale-100' },
        n2: { label: '310kPa', bg: '#f59e0b', scale: 'scale-100' },
        n3: { label: '210kPa', bg: '#f59e0b', scale: 'scale-105' },
        n4: { label: '450kPa', bg: '#f59e0b', scale: 'scale-105' },
        n5: { label: '380kPa', bg: '#f59e0b', scale: 'scale-100' },
        n6: { label: '280kPa', bg: '#10b981', scale: 'scale-95' },
        n7: { label: '110kPa', bg: '#10b981', scale: 'scale-90' },
        n8: { label: '220kPa', bg: '#10b981', scale: 'scale-95' },
      }
    },
    toe: {
      balanceText: 'High Forefoot Propulsion Active',
      balanceClass: 'font-mono font-bold text-slate-900',
      peakForce: '1,120 kPa (Hallux Great Toe)',
      fatigueIndex: '12% Shift Load (Low)',
      copX: 110,
      copY: 65,
      nodeLoads: {
        n1: { label: '40kPa', bg: '#10b981', scale: 'scale-90' },
        n2: { label: '30kPa', bg: '#10b981', scale: 'scale-90' },
        n3: { label: '50kPa', bg: '#10b981', scale: 'scale-90' },
        n4: { label: '980kPa', bg: '#dc2626', scale: 'scale-110' },
        n5: { label: '710kPa', bg: '#dc2626', scale: 'scale-105' },
        n6: { label: '420kPa', bg: '#f59e0b', scale: 'scale-100' },
        n7: { label: '210kPa', bg: '#10b981', scale: 'scale-95' },
        n8: { label: '1,120kPa', bg: '#dc2626', scale: 'scale-125' },
      }
    },
    fall: {
      balanceText: 'CRITICAL: 0-G FREE FALL + IMMOBILITY DETECTED',
      balanceClass: 'font-mono font-bold text-brand-600 animate-pulse',
      peakForce: '0 kPa (Operator Unweighted / Inactive)',
      fatigueIndex: 'Alert State: Incident Logged',
      copX: 85,
      copY: 160,
      nodeLoads: {
        n1: { label: '0kPa', bg: '#64748b', scale: 'scale-75' },
        n2: { label: '0kPa', bg: '#64748b', scale: 'scale-75' },
        n3: { label: '0kPa', bg: '#64748b', scale: 'scale-75' },
        n4: { label: '0kPa', bg: '#64748b', scale: 'scale-75' },
        n5: { label: '0kPa', bg: '#64748b', scale: 'scale-75' },
        n6: { label: '0kPa', bg: '#64748b', scale: 'scale-75' },
        n7: { label: '0kPa', bg: '#64748b', scale: 'scale-75' },
        n8: { label: '0kPa', bg: '#64748b', scale: 'scale-75' },
      }
    }
  };

  const current = phaseData[phase];

  const handlePhaseChange = (newPhase: GaitPhase) => {
    setPhase(newPhase);
    if (newPhase === 'fall') {
      setTimeout(() => {
        alert('ALERT: Man-Down Threshold Triggered! Sub-GHz distress packet dispatched in <1.2s to on-site EHS console.');
      }, 50);
    }
  };

  return (
    <div className="relative w-full bg-slate-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        {/* Left: Interactive Foot Plantar Map with 8 Heatmap Nodes */}
        <div className="md:col-span-6 flex flex-col items-center justify-center p-5 bg-white rounded-xl border border-slate-200 shadow-xs relative">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            Right Foot Plantar Force Map (Calibrated 100 Hz)
          </div>

          <div className="relative w-64 h-96 flex items-center justify-center">
            {/* Anatomical Footprint SVG */}
            <svg className="w-full h-full" viewBox="0 0 200 320" fill="none">
              <path
                d="M 90,20 C 130,20 155,45 155,80 C 155,115 140,140 135,165 C 130,190 140,215 140,245 C 140,285 115,305 85,305 C 55,305 40,285 40,250 C 40,215 50,195 50,165 C 50,135 45,110 50,75 C 55,40 70,20 90,20 Z"
                fill="#f8fafc"
                stroke="#cbd5e1"
                strokeWidth="2.5"
              />
              <path
                d="M 85,260 Q 90,210 80,160 T 110,65"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray="3 3"
                opacity="0.8"
              />
              <circle
                cx={current.copX}
                cy={current.copY}
                r="5"
                fill="#ef4444"
                stroke="#ffffff"
                strokeWidth="2"
                className="transition-all duration-300"
              />
            </svg>

            {/* Dynamic Heatmap Nodes */}
            <div
              className={`absolute left-[38%] top-[80%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white font-mono text-[9px] font-bold shadow-md transition-all duration-300 ${current.nodeLoads.n1.scale}`}
              style={{ backgroundColor: current.nodeLoads.n1.bg }}
            >
              {current.nodeLoads.n1.label}
            </div>
            <div
              className={`absolute left-[54%] top-[80%] -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white font-mono text-[9px] font-bold shadow-md transition-all duration-300 ${current.nodeLoads.n2.scale}`}
              style={{ backgroundColor: current.nodeLoads.n2.bg }}
            >
              {current.nodeLoads.n2.label}
            </div>
            <div
              className={`absolute left-[55%] top-[55%] -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-white font-mono text-[8px] font-bold shadow-xs transition-all duration-300 ${current.nodeLoads.n3.scale}`}
              style={{ backgroundColor: current.nodeLoads.n3.bg }}
            >
              {current.nodeLoads.n3.label}
            </div>
            <div
              className={`absolute left-[32%] top-[34%] -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-white font-mono text-[9px] font-bold shadow-md transition-all duration-300 ${current.nodeLoads.n4.scale}`}
              style={{ backgroundColor: current.nodeLoads.n4.bg }}
            >
              {current.nodeLoads.n4.label}
            </div>
            <div
              className={`absolute left-[46%] top-[31%] -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white font-mono text-[8px] font-bold shadow-xs transition-all duration-300 ${current.nodeLoads.n5.scale}`}
              style={{ backgroundColor: current.nodeLoads.n5.bg }}
            >
              {current.nodeLoads.n5.label}
            </div>
            <div
              className={`absolute left-[64%] top-[36%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white font-mono text-[8px] font-bold shadow-xs transition-all duration-300 ${current.nodeLoads.n6.scale}`}
              style={{ backgroundColor: current.nodeLoads.n6.bg }}
            >
              {current.nodeLoads.n6.label}
            </div>
            <div
              className={`absolute left-[60%] top-[18%] -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-white font-mono text-[8px] font-bold shadow-xs transition-all duration-300 ${current.nodeLoads.n7.scale}`}
              style={{ backgroundColor: current.nodeLoads.n7.bg }}
            >
              {current.nodeLoads.n7.label}
            </div>
            <div
              className={`absolute left-[40%] top-[12%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white font-mono text-[9px] font-bold shadow-md transition-all duration-300 ${current.nodeLoads.n8.scale}`}
              style={{ backgroundColor: current.nodeLoads.n8.bg }}
            >
              {current.nodeLoads.n8.label}
            </div>
          </div>

          <div className="w-full mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>Low (0 kPa)</span>
            <div className="h-2 w-32 rounded-full bg-gradient-to-r from-emerald-400 via-amber-400 to-brand-600"></div>
            <span>High (1,500 kPa)</span>
          </div>
        </div>

        {/* Right: Simulation Phase Buttons & Telemetry Data */}
        <div className="md:col-span-6 space-y-4">
          <div>
            <div className="text-xs font-bold text-brand-600 uppercase tracking-wider">Dynamic Biomechanical Analysis</div>
            <h4 className="text-lg font-bold text-slate-900 mt-1">Real-Time Gait &amp; Plantar Distribution</h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Select a phase to simulate live pressure redistribution across the 8 embedded sensors during different industrial operator activities.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => handlePhaseChange('heel')}
              className={`p-3 text-left rounded-lg border transition-all ${
                phase === 'heel'
                  ? 'bg-brand-50 border-brand-500 shadow-xs'
                  : 'bg-white border-slate-200 hover:border-brand-500 hover:bg-brand-50/50'
              }`}
            >
              <div className="text-xs font-bold text-slate-900">1. Heel Strike</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Peak calcaneus shock load</div>
            </button>

            <button
              onClick={() => handlePhaseChange('mid')}
              className={`p-3 text-left rounded-lg border transition-all ${
                phase === 'mid'
                  ? 'bg-brand-50 border-brand-500 shadow-xs'
                  : 'bg-white border-slate-200 hover:border-brand-500 hover:bg-brand-50/50'
              }`}
            >
              <div className="text-xs font-bold text-slate-900">2. Midstance Phase</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Uniform arch weight dispersion</div>
            </button>

            <button
              onClick={() => handlePhaseChange('toe')}
              className={`p-3 text-left rounded-lg border transition-all ${
                phase === 'toe'
                  ? 'bg-brand-50 border-brand-500 shadow-xs'
                  : 'bg-white border-slate-200 hover:border-brand-500 hover:bg-brand-50/50'
              }`}
            >
              <div className="text-xs font-bold text-slate-900">3. Toe-Off Push</div>
              <div className="text-[11px] text-slate-500 mt-0.5">High forefoot propulsion force</div>
            </button>

            <button
              onClick={() => handlePhaseChange('fall')}
              className={`p-3 text-left rounded-lg border-2 transition-all ${
                phase === 'fall'
                  ? 'bg-brand-50 border-brand-600 shadow-xs'
                  : 'bg-white border-brand-500/40 hover:border-brand-600 bg-brand-50/30'
              }`}
            >
              <div className="text-xs font-bold text-brand-700 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">warning</span> 4. Fall / Slip Event
              </div>
              <div className="text-[11px] text-brand-600 mt-0.5">0-G Vector &amp; Rapid Decel</div>
            </button>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-slate-500">Gait Balance Symmetry:</span>
              <span className={current.balanceClass}>{current.balanceText}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500">Instantaneous Peak Force:</span>
              <span className="font-mono font-bold text-slate-900">{current.peakForce}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500">Fatigue Index (Cumulative):</span>
              <span className="font-mono font-bold text-slate-800">{current.fatigueIndex}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
