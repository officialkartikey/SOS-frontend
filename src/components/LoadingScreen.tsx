import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [bootStep, setBootStep] = useState(0);

  const steps = [
    'Initializing NIRVANA Safety Architecture...',
    'Calibrating IMU & Multi-Vector Sensors...',
    'Locking Secure GNSS & Cellular Mesh...',
    'NIRVANA Safety Intelligence Ready.'
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => setBootStep(1), 350);
    const timer2 = setTimeout(() => setBootStep(2), 700);
    const timer3 = setTimeout(() => setBootStep(3), 1050);
    const timer4 = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      onClick={() => setIsVisible(false)}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-950 text-white transition-opacity duration-500 cursor-pointer select-none"
    >
      {/* Background ambient radial glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/15 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
        {/* Official Uploaded Logo */}
        <div className="relative p-2 rounded-2xl bg-white/5 border border-purple-500/20 backdrop-blur-md shadow-2xl mb-8 group hover:border-purple-500/40 transition-all">
          <img
            src="/nirvana-logo.png"
            alt="NIRVANA Logo"
            className="h-14 sm:h-16 w-auto object-contain rounded-xl"
          />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-purple-600/90 text-[10px] font-mono font-bold tracking-widest uppercase border border-purple-400/50 shadow-sm">
            Safety Platform
          </div>
        </div>

        {/* Brand Tagline */}
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
          Universal Personal Safety Technology
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 font-mono mb-8">
          "Safety shouldn't depend on having your phone in your hand."
        </p>

        {/* Progress bar */}
        <div className="w-64 h-1.5 bg-slate-800 rounded-full overflow-hidden mb-4 relative">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-full transition-all duration-300"
            style={{ width: `${((bootStep + 1) / steps.length) * 100}%` }}
          />
        </div>

        {/* Micro step text */}
        <div className="flex items-center gap-2 text-xs font-mono text-purple-300/90 h-5">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>{steps[bootStep]}</span>
        </div>

        <span className="mt-8 text-[11px] text-slate-500">
          Click anywhere to skip
        </span>
      </div>
    </div>
  );
};
