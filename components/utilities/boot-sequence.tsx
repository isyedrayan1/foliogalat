"use client";

import { useState, useEffect } from 'react';

interface BootSequenceProps {
  onComplete: () => void;
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  
  useEffect(() => {
    const sysLogs = [
      "INITIALIZING_CORE...",
      "LOADING_MODULES...",
      "CONNECTING_NEURAL_NET...",
      "RENDERING_INTERFACE...",
      "ACCESS_GRANTED"
    ];

    let currentLog = 0;
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 4;
      });
      
      if (Math.random() > 0.8 && currentLog < sysLogs.length) {
        setLogs(prev => [...prev.slice(-3), sysLogs[currentLog]]);
        currentLog++;
      }
    }, 30);
    
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-[999] flex flex-col items-center justify-center font-mono text-neutral-200">
      <div className="w-64 mb-4">
        <div className="flex justify-between text-xs mb-1">
          <span>SYSTEM_BOOT</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full h-1 bg-black rounded-full overflow-hidden">
          <div 
            className="h-full bg-neutral-200 transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <div className="h-20 flex flex-col items-start justify-end text-xs text-neutral-500 gap-1 min-w-[250px]">
        {logs.map((log, i) => (
          <div key={i} className="animate-pulse">{`> ${log}`}</div>
        ))}
      </div>
    </div>
  );
};
