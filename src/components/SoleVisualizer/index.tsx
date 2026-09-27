import React, { useState } from 'react';
import { ARCHITECTURE_LAYERS } from '../../data/architectureLayers';
import { ExplodedView } from './ExplodedView';
import { HeatmapView } from './HeatmapView';
import { TelemetryStream } from './TelemetryStream';
import { LayerInspector } from './LayerInspector';

type VisualizerTab = 'exploded' | 'heatmap' | 'telemetry';

export const SoleVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<VisualizerTab>('exploded');
  const [selectedLayerId, setSelectedLayerId] = useState<number>(3);

  const activeLayer =
    ARCHITECTURE_LAYERS.find((l) => l.id === selectedLayerId) ||
    ARCHITECTURE_LAYERS[2];

  return (
    <div className="rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden flex flex-col transition-all">
      {/* Visualizer Header with View Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-slate-50 border-b border-slate-200 gap-3">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-bold text-slate-800 text-sm tracking-tight">
            Interactive Sole Architecture Model
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200/80 text-slate-700 font-mono uppercase">
            Cad Engine
          </span>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center bg-white p-1 rounded-lg border border-slate-200 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('exploded')}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === 'exploded'
                ? 'bg-brand-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span className="material-symbols-outlined text-[15px]">layers</span>
            <span>Exploded 3D</span>
          </button>

          <button
            onClick={() => setActiveTab('heatmap')}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === 'heatmap'
                ? 'bg-brand-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span className="material-symbols-outlined text-[15px]">grid_4x4</span>
            <span>Pressure Grid</span>
          </button>

          <button
            onClick={() => setActiveTab('telemetry')}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              activeTab === 'telemetry'
                ? 'bg-brand-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span className="material-symbols-outlined text-[15px]">query_stats</span>
            <span>Live Telemetry</span>
          </button>
        </div>
      </div>

      {/* Tab Panels */}
      {activeTab === 'exploded' && (
        <div className="relative w-full bg-gradient-to-b from-slate-50/80 via-white to-slate-100/50 p-4 sm:p-6 overflow-hidden">
          <ExplodedView
            onSelectLayer={(id) => setSelectedLayerId(id)}
            selectedLayerId={selectedLayerId}
          />
          <LayerInspector activeLayer={activeLayer} />
        </div>
      )}

      {activeTab === 'heatmap' && <HeatmapView />}

      {activeTab === 'telemetry' && <TelemetryStream />}

      {/* Viewport Controls & Certification Footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 bg-white border-t border-slate-200 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
            5-Tier Micro-Assembly
          </span>
          <span className="px-2.5 py-1 rounded bg-brand-50 text-brand-700 text-xs font-semibold border border-brand-200">
            Solid-State Core
          </span>
          <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
            IP67 Hermetic
          </span>
        </div>
        <span className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
          <span className="material-symbols-outlined text-[16px] text-emerald-600">verified</span> ANSI Z41 / ISO 20345 / CE
        </span>
      </div>
    </div>
  );
};
