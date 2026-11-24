import React from 'react';
import { Sparkles, Wand2, ArrowRight, X, Cpu, Film, Sliders } from 'lucide-react';

export default function VybeUpliftBanner({
  assetName,
  onOpenUplift,
  onDismiss
}) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-950/80 via-slate-900 to-violet-950/80 border border-cyan-500/50 p-3 shadow-xl shadow-cyan-500/10 mb-2 animate-fade-in">
      {/* Background glow streak */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
      
      <div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center text-black shadow-lg shadow-cyan-400/30 flex-shrink-0">
            <Wand2 className="w-5 h-5 fill-black" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-mono text-xs font-black tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-violet-300">
                AI VIDEO UPLIFT & AUTO-CUT
              </span>
              <span className="px-1.5 py-0.2 rounded bg-cyan-400 text-black text-[9px] font-mono font-bold">
                HITL READY
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Ready to detect <span className="text-cyan-300 font-bold">{assetName || 'uploaded video'}</span>, auto-cut pacing beats, add kinetic captions, apply cinematic LUT filters, and review with Human-in-the-Loop.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenUplift}
            className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 hover:from-cyan-300 hover:to-violet-400 text-black font-mono text-xs font-bold flex items-center space-x-1.5 shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 fill-black" />
            <span>1-CLICK AUTO-UPLIFT (HITL)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          {onDismiss && (
            <button
              onClick={onDismiss}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
