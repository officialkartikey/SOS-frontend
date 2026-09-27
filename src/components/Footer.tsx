import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1840px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 xl:gap-12 mb-12">
          
          {/* Col 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[20px]">health_and_safety</span>
              </div>
              <span className="font-bold text-white text-lg">Apex SoleTech</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Enterprise cyber-physical safety solutions delivering autonomous man-down telemetry and biomechanical risk protection across high-risk global industries.
            </p>
            <div className="text-xs text-slate-400 font-medium">
              ISO 9001:2015 &amp; ISO 20345 Certified
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Technology</h4>
            <ul className="space-y-2 text-xs">
              <li><a className="hover:text-white transition-colors" href="#architecture">5-Tier Sole Stack</a></li>
              <li><a className="hover:text-white transition-colors" href="#architecture">Tactile Force Sensors</a></li>
              <li><a className="hover:text-white transition-colors" href="#architecture">Edge MCU Inference</a></li>
              <li><a className="hover:text-white transition-colors" href="#architecture">Sub-GHz Mesh Pipeline</a></li>
              <li><a className="hover:text-white transition-colors" href="#biomechanics">Plantar Gait Heatmap</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a className="hover:text-white transition-colors" href="#overview">Overview &amp; Problem</a></li>
              <li><a className="hover:text-white transition-colors" href="#architecture">Architecture</a></li>
              <li><a className="hover:text-white transition-colors" href="#biomechanics">Biomechanics</a></li>
              <li><a className="hover:text-white transition-colors" href="#applications">Applications</a></li>
              <li><a className="hover:text-white transition-colors" href="#achievements">Achievements</a></li>
              <li><a className="hover:text-white transition-colors" href="#contact">Contact &amp; Pilot</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Compliance &amp; Security</h4>
            <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Data Encryption:</span>
                <span className="font-mono font-semibold text-white">AES-256 GCM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Service Uptime:</span>
                <span className="font-mono font-semibold text-emerald-400">99.98% SLA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Mesh Security:</span>
                <span className="font-mono font-semibold text-white">Zero-Trust Key</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Hazard Rating:</span>
                <span className="font-mono font-semibold text-white">ATEX Zone 0</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Apex SoleTech Inc. All rights reserved. Industrial Life-Safety Solutions.
          </div>
          <div className="flex items-center gap-6">
            <a className="hover:text-slate-300 transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-slate-300 transition-colors" href="#">Telemetry Security</a>
            <a className="hover:text-slate-300 transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
