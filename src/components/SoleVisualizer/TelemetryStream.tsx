import React, { useEffect, useRef } from 'react';

export const TelemetryStream: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let offset = 0;

    const render = () => {
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Grid lines
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let y = 20; y < canvas.height; y += 25) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();

      // Waveform Y-axis (1.0G gravity baseline)
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x++) {
        const val =
          55 +
          Math.sin((x + offset) * 0.04) * 14 +
          Math.sin((x + offset * 1.5) * 0.1) * 6;
        if (x === 0) ctx.moveTo(x, val);
        else ctx.lineTo(x, val);
      }
      ctx.stroke();

      // Waveform Z-axis (Forward stride impacts)
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x++) {
        const val = 55 + Math.cos((x + offset) * 0.05) * 22;
        if (x === 0) ctx.moveTo(x, val);
        else ctx.lineTo(x, val);
      }
      ctx.stroke();

      offset += 2;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="relative w-full bg-slate-900 text-white p-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-mono text-xs font-semibold text-emerald-400">
              EDGE_TELEMETRY_STREAM // FREQ: 100Hz
            </span>
          </div>
          <span className="font-mono text-[11px] text-slate-400">AES-256 ENCRYPTED PACKETS</span>
        </div>

        {/* Live Canvas Accelerometer Graph */}
        <div className="relative w-full h-44 bg-slate-950 rounded-lg border border-slate-800 p-2 overflow-hidden flex flex-col justify-between">
          <div className="flex justify-between text-[10px] font-mono text-slate-400 px-2">
            <span className="text-brand-400">X-Axis (Lateral Tilt)</span>
            <span className="text-emerald-400">Y-Axis (Gravitational Normal: 1.0G)</span>
            <span className="text-blue-400">Z-Axis (Forward Impact)</span>
          </div>
          <canvas ref={canvasRef} className="w-full h-28" width="600" height="110"></canvas>
          <div className="flex justify-between text-[9px] font-mono text-slate-500 px-2">
            <span>T-5.0s</span>
            <span>T-2.5s</span>
            <span>CURRENT (T-0s)</span>
          </div>
        </div>

        {/* Telemetry Metric Rows */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
            <div className="text-slate-400 text-[10px]">SUB-GHZ RSSI</div>
            <div className="text-emerald-400 text-base font-bold mt-0.5">-42 dBm</div>
            <div className="text-[10px] text-slate-400">Mesh Hop: Direct</div>
          </div>
          <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
            <div className="text-slate-400 text-[10px]">BATTERY VOLTAGE</div>
            <div className="text-white text-base font-bold mt-0.5">3.84 V</div>
            <div className="text-[10px] text-emerald-400">Kinetic Harvesting ON</div>
          </div>
          <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
            <div className="text-slate-400 text-[10px]">INTERNAL TEMP</div>
            <div className="text-white text-base font-bold mt-0.5">31.4 °C</div>
            <div className="text-[10px] text-slate-400">Hermetic Seal: 100%</div>
          </div>
          <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
            <div className="text-slate-400 text-[10px]">PACKET INTEGRITY</div>
            <div className="text-emerald-400 text-base font-bold mt-0.5">99.98%</div>
            <div className="text-[10px] text-slate-400">0 Packets Dropped</div>
          </div>
        </div>
      </div>
    </div>
  );
};
