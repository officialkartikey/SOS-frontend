import React from 'react';
import { SoleLayer } from '../../types';

interface LayerInspectorProps {
  activeLayer: SoleLayer;
}

export const LayerInspector: React.FC<LayerInspectorProps> = ({ activeLayer }) => {
  return (
    <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all">
      <div className="flex items-center gap-3.5">
        <div
          className="w-10 h-10 rounded-lg border flex items-center justify-center font-bold font-mono text-sm"
          style={{
            backgroundColor: `${activeLayer.accentColor}12`,
            borderColor: `${activeLayer.accentColor}40`,
            color: activeLayer.accentColor,
          }}
        >
          {activeLayer.layerNum}
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900">
            Active Layer: {activeLayer.name}
          </h4>
          <p className="text-xs text-slate-600">
            {activeLayer.spec} • {activeLayer.standard}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs font-semibold shrink-0">
        <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
          Click any layer to inspect
        </span>
      </div>
    </div>
  );
};
