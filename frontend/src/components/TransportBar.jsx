import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Square, 
  Repeat, 
  Circle, 
  Volume2, 
  RotateCcw,
  Sparkles,
  Clock
} from 'lucide-react';
import { audioEngine } from '../audio/WebAudioEngine';

export default function TransportBar({
  isPlaying,
  onPlay,
  onPause,
  onStop,
  bpm = 120,
  setBpm,
  onLoadDemo,
  loadingDemo
}) {
  const [playTime, setPlayTime] = useState(0);
  const [masterVolume, setMasterVolume] = useState(0.85);
  const [meters, setMeters] = useState({ peak: -60, rms: -60 });

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setPlayTime(prev => prev + 0.1);
        const tele = audioEngine.getTelemetry();
        setMeters(tele);
      }, 100);
    } else {
      setMeters({ peak: -60, rms: -60 });
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleStop = () => {
    setPlayTime(0);
    onStop();
  };

  const handleMasterChange = (e) => {
    const val = parseFloat(e.target.value);
    setMasterVolume(val);
    audioEngine.setMasterVolume(val);
  };

  const formatTimecode = (sec) => {
    const mins = Math.floor(sec / 60);
    const secs = Math.floor(sec % 60);
    const millis = Math.floor((sec % 1) * 100);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}.${String(millis).padStart(2, '0')}`;
  };

  const formatBarsBeats = (sec) => {
    const beatsPerSec = bpm / 60;
    const totalBeats = Math.floor(sec * beatsPerSec);
    const bars = Math.floor(totalBeats / 4) + 1;
    const beats = (totalBeats % 4) + 1;
    return `${bars}.${beats}.1`;
  };

  return (
    <div className="bg-[#0e111a] border-t border-slate-800 px-4 py-2 flex flex-wrap items-center justify-between gap-4 sticky bottom-0 z-50">
      
      {/* Transport Controls */}
      <div className="flex items-center space-x-2">
        <button
          onClick={handleStop}
          className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors"
          title="Stop (Return to zero)"
        >
          <Square className="w-4 h-4" />
        </button>

        {isPlaying ? (
          <button
            onClick={onPause}
            className="p-2.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/50 hover:bg-amber-500/30 transition-colors"
            title="Pause"
          >
            <Pause className="w-5 h-5 fill-current" />
          </button>
        ) : (
          <button
            onClick={onPlay}
            className="p-2.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/30 transition-colors"
            title="Play"
          >
            <Play className="w-5 h-5 fill-current" />
          </button>
        )}

        <button
          onClick={() => {}}
          className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors"
          title="Loop Playback"
        >
          <Repeat className="w-4 h-4" />
        </button>

        <button
          onClick={() => {}}
          className="p-2 rounded-lg bg-slate-800/80 hover:bg-rose-950 text-slate-400 hover:text-rose-400 transition-colors"
          title="Record Arm"
        >
          <Circle className="w-4 h-4 fill-rose-600/60" />
        </button>
      </div>

      {/* Timecode & Bars/Beats Counters */}
      <div className="flex items-center space-x-3 bg-black/60 px-4 py-1.5 rounded-lg border border-slate-800 font-mono text-center">
        <div>
          <div className="text-[10px] text-slate-500 uppercase tracking-wider">Timecode</div>
          <div className="text-sm font-bold text-cyan-400 tracking-wider">{formatTimecode(playTime)}</div>
        </div>
        <div className="w-px h-6 bg-slate-800" />
        <div>
          <div className="text-[10px] text-slate-500 uppercase tracking-wider">Bar.Beat</div>
          <div className="text-sm font-bold text-violet-400 tracking-wider">{formatBarsBeats(playTime)}</div>
        </div>
        <div className="w-px h-6 bg-slate-800" />
        <div>
          <div className="text-[10px] text-slate-500 uppercase tracking-wider">Tempo</div>
          <div className="text-sm font-bold text-slate-200">{bpm} BPM</div>
        </div>
      </div>

      {/* Demo Project Quick Loader */}
      <div className="flex items-center space-x-2">
        <button
          onClick={onLoadDemo}
          disabled={loadingDemo}
          className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white text-xs font-semibold shadow-md shadow-violet-900/30 transition-all disabled:opacity-50"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>{loadingDemo ? 'Generating Demo...' : 'Load Studio Demo Project'}</span>
        </button>
      </div>

      {/* Master Volume & Meter */}
      <div className="flex items-center space-x-3">
        <Volume2 className="w-4 h-4 text-slate-400" />
        <input
          type="range"
          min="0.0"
          max="1.2"
          step="0.01"
          value={masterVolume}
          onChange={handleMasterChange}
          className="w-24 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
        />
        
        {/* Peak LED Bar */}
        <div className="flex flex-col space-y-0.5">
          <div className="w-16 h-2 bg-slate-900 rounded-sm overflow-hidden flex">
            <div 
              className={`h-full transition-all duration-75 ${
                meters.peak > -3 ? 'bg-rose-500' : (meters.peak > -12 ? 'bg-amber-400' : 'bg-emerald-400')
              }`}
              style={{ width: `${Math.max(0, Math.min(100, (meters.peak + 60) * 1.66))}%` }}
            />
          </div>
          <span className="text-[9px] font-mono text-slate-500 text-right">
            {meters.peak > -59 ? `${meters.peak} dB` : '-inf'}
          </span>
        </div>
      </div>

    </div>
  );
}
