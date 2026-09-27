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
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border border-slate-200 p-8 max-w-lg w-full shadow-2xl text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
          <span className="material-symbols-outlined text-[32px]">task_alt</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Application Received</h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Thank you. An Apex SoleTech field engineer has been assigned to your evaluation application. A confirmation has been dispatched with reference{' '}
          <span className="font-mono font-bold text-slate-900">{referenceNumber}</span>.
        </p>
        <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-500 text-left font-mono space-y-1">
          <div>• Assigned Hub: Houston Energy &amp; Field Operations Hub</div>
          <div>• Response Timeline: Within 24 Business Hours</div>
          <div>• Mutual NDA Draft: Sent to provided corporate email</div>
        </div>
        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors"
        >
          Close Window
        </button>
      </div>
    </div>
  );
};
