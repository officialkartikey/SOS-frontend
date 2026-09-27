import React from 'react';

interface SuccessModalProps {
  isOpen: boolean;
  referenceNumber: string;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  referenceNumber,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-navy-900 rounded-3xl border border-purple-500/50 p-6 sm:p-8 max-w-lg w-full shadow-2xl text-center space-y-5 relative overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-purple-600/20 blur-3xl pointer-events-none" />

        {/* Brand Logo & Success Icon */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2.5 p-1.5 px-3.5 rounded-xl bg-purple-950/80 border border-purple-500/30 mb-3 shadow-md">
            <img
              src="/nirvana-logo.png"
              alt="NIRVANA Logo"
              className="h-8 w-8 object-contain rounded-lg"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm font-black text-white leading-none">NIRVANA</span>
              <span className="text-[9px] font-mono text-purple-300 font-semibold uppercase mt-0.5">Universal Safety</span>
            </div>
          </div>

          <div className="w-14 h-14 rounded-2xl bg-emerald-950 border border-emerald-500/50 text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-950/80">
            <span className="material-symbols-outlined text-[32px]">task_alt</span>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-black text-white">Demo Request Received</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
            Thank you for connecting with NIRVANA. A product and safety specialist has received your inquiry. Your reference identifier is:
          </p>
          <div className="mt-2 font-mono font-bold text-lg text-cyan-300 bg-navy-950 px-4 py-2 rounded-xl border border-purple-500/40 inline-block shadow-inner">
            {referenceNumber}
          </div>
        </div>

        <div className="p-4 bg-navy-950 rounded-2xl border border-slate-800 text-xs text-slate-400 text-left font-mono space-y-1.5">
          <div className="text-purple-300 font-bold">&bull; Status: Queued for NIRVANA Safety Specialist Review</div>
          <div>&bull; Response SLA: Within 24 Business Hours</div>
          <div>&bull; Deliverables: Prototype Walkthrough &amp; Telemetry Demo</div>
          <div>&bull; Platform: NIRVANA Universal Personal Safety Technology</div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-sm shadow-lg transition-all"
        >
          Return to NIRVANA
        </button>
      </div>
    </div>
  );
};
