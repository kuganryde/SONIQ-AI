import React, { useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  SkipBack, 
  SkipForward, 
  Maximize2, 
  Smartphone, 
  Tv, 
  Square,
  Sparkles,
  ShieldAlert,
  Volume2,
  VolumeX
} from 'lucide-react';
import { resolveAudioUrl } from '../config/api';

export default function VybePlayer({
  currentTime,
  duration,
  isPlaying,
  onPlay,
  onPause,
  onSeek,
  aspectRatio = '16:9',
  onAspectRatioChange,
  activeVideoUrl,
  colorGrade = 'clean',
  activeFrei0rEffects = [],
  activeOverlayTitle = '',
  showSafeZones = false,
  onToggleSafeZones
}) {
  const videoRef = useRef(null);

  // Synchronize HTML5 video element with parent currentTime state
  useEffect(() => {
    if (videoRef.current && Math.abs(videoRef.current.currentTime - currentTime) > 0.3) {
      videoRef.current.currentTime = currentTime;
    }
  }, [currentTime]);

  // Synchronize playback state
  useEffect(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  const formatTimecode = (sec) => {
    const s = Math.max(0, sec || 0);
    const m = Math.floor(s / 60);
    const remSec = Math.floor(s % 60);
    const frames = Math.floor((s - Math.floor(s)) * 30);
    return `${m.toString().padStart(2, '0')}:${remSec.toString().padStart(2, '0')}:${frames.toString().padStart(2, '0')}`;
  };

  const getColorFilter = () => {
    let base = 'none';
    switch (colorGrade) {
      case 'kodak_2383':
        base = 'contrast(1.22) saturate(1.25) sepia(0.08) hue-rotate(-8deg)';
        break;
      case 'fuji_3513':
        base = 'contrast(1.15) saturate(1.18) hue-rotate(6deg) brightness(0.98)';
        break;
      case 'teal_orange':
        base = 'contrast(1.28) saturate(1.35) hue-rotate(-14deg)';
        break;
      case 'cyberpunk':
      case 'cyberpunk_neon':
        base = 'contrast(1.35) saturate(1.7) hue-rotate(25deg)';
        break;
      case 'moody':
      case 'noir_silver':
        base = 'grayscale(1) contrast(1.4) brightness(0.92)';
        break;
      case 'vintage':
      case 'vintage_warm':
        base = 'sepia(0.45) contrast(1.12) brightness(0.96) saturate(1.1)';
        break;
      default:
        base = 'none';
    }

    const effects = [];
    if (activeFrei0rEffects.some(e => e.includes('glow'))) {
      effects.push('drop-shadow(0 0 14px rgba(255,255,255,0.65))');
    }
    if (activeFrei0rEffects.some(e => e.includes('rgbsplit0r'))) {
      effects.push('drop-shadow(2px 0 0 rgba(255,0,0,0.6)) drop-shadow(-2px 0 0 rgba(0,255,255,0.6))');
    }
    if (activeFrei0rEffects.some(e => e.includes('glitch0r'))) {
      effects.push('invert(0.08) contrast(1.2)');
    }
    if (activeFrei0rEffects.some(e => e.includes('sobel'))) {
      effects.push('invert(1) contrast(2)');
    }

    if (effects.length > 0) {
      return base === 'none' ? effects.join(' ') : `${base} ${effects.join(' ')}`;
    }
    return base;
  };

  const getAspectDimensions = () => {
    switch (aspectRatio) {
      case '9:16':
        return 'aspect-[9/16] max-h-[460px]';
      case '1:1':
        return 'aspect-square max-h-[460px]';
      case '4:5':
        return 'aspect-[4/5] max-h-[460px]';
      case '16:9':
      default:
        return 'aspect-video w-full max-h-[460px]';
    }
  };

  return (
    <div className="bg-[#0b0e17] border border-slate-800 rounded-xl p-3 flex flex-col items-center justify-between shadow-xl">
      {/* Top Telemetry Header */}
      <div className="w-full flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 text-xs text-slate-400">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono uppercase font-bold text-slate-300">Program Monitor</span>
          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-cyan-300">
            {aspectRatio}
          </span>
          {colorGrade !== 'clean' && (
            <span className="px-1.5 py-0.5 rounded bg-violet-950/80 border border-violet-700/60 text-[10px] text-violet-300 uppercase">
              LUT: {colorGrade}
            </span>
          )}
          {activeFrei0rEffects.length > 0 && (
            <span className="px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-700/60 text-[10px] text-cyan-300 uppercase">
              Frei0r VFX ({activeFrei0rEffects.length})
            </span>
          )}
        </div>

        <div className="flex items-center space-x-2 font-mono">
          <span className="text-cyan-400 font-bold">{formatTimecode(currentTime)}</span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400">{formatTimecode(duration)}</span>
        </div>
      </div>

      {/* Screen Viewport with Dynamic Framing */}
      <div className="relative w-full flex items-center justify-center bg-black/90 rounded-lg overflow-hidden border border-slate-900 min-h-[300px]">
        <div className={`relative ${getAspectDimensions()} flex items-center justify-center bg-slate-950 overflow-hidden shadow-2xl transition-all duration-300`}>
          
          {activeVideoUrl ? (
            <video
              ref={videoRef}
              src={resolveAudioUrl(activeVideoUrl)}
              className="w-full h-full object-contain"
              style={{ filter: getColorFilter() }}
              onTimeUpdate={(e) => onSeek && onSeek(e.target.currentTime)}
              playsInline
              loop
            />
          ) : (
            /* Visual Canvas Showreel Simulator */
            <div 
              className="w-full h-full flex flex-col items-center justify-center p-6 text-center select-none"
              style={{
                background: 'radial-gradient(circle at center, #111827 0%, #030712 100%)',
                filter: getColorFilter()
              }}
            >
              <div className="relative w-16 h-16 mb-4 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 border border-cyan-500/40 flex items-center justify-center shadow-lg shadow-cyan-500/10">
                <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500" />
                </span>
              </div>
              <h4 className="text-sm font-bold font-mono tracking-wider text-slate-200 uppercase">
                VYBE AI Visual Canvas
              </h4>
              <p className="text-xs text-slate-400 mt-1 max-w-[280px]">
                Import a video clip or load the demonstration showreel to begin timeline editing.
              </p>
            </div>
          )}

          {/* Dynamic Active Title Overlay */}
          {activeOverlayTitle && (
            <div className="absolute inset-x-4 bottom-12 flex justify-center pointer-events-none transition-all duration-300 animate-fade-in">
              <div className="px-4 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-cyan-500/50 shadow-lg text-center">
                <span className="font-extrabold text-sm md:text-base tracking-wider uppercase font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-violet-400">
                  {activeOverlayTitle}
                </span>
              </div>
            </div>
          )}

          {/* Social Safe Zones Overlay (for TikTok / Instagram Reels) */}
          {showSafeZones && (
            <div className="absolute inset-0 pointer-events-none border-2 border-red-500/40 flex flex-col justify-between p-3 select-none">
              <div className="text-[10px] text-red-400 font-mono flex items-center space-x-1 bg-red-950/60 px-1.5 py-0.5 rounded w-max">
                <ShieldAlert className="w-3 h-3" />
                <span>TOP SAFE ZONE (9:16)</span>
              </div>
              <div className="self-end text-[10px] text-red-400 font-mono bg-red-950/60 px-1.5 py-0.5 rounded">
                UI BUTTONS MARGIN
              </div>
              <div className="text-[10px] text-red-400 font-mono bg-red-950/60 px-1.5 py-0.5 rounded w-max">
                BOTTOM CAPTION ZONE
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Transport & Framing Controls */}
      <div className="w-full mt-3 pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
        {/* Aspect Ratio Presets */}
        <div className="flex items-center space-x-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => onAspectRatioChange && onAspectRatioChange('16:9')}
            title="16:9 Cinema / YouTube Widescreen"
            className={`px-2 py-1 rounded text-xs font-mono flex items-center space-x-1 transition-all ${
              aspectRatio === '16:9' ? 'bg-cyan-500 text-black font-bold shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Tv className="w-3.5 h-3.5" />
            <span>16:9</span>
          </button>
          <button
            onClick={() => onAspectRatioChange && onAspectRatioChange('9:16')}
            title="9:16 TikTok / Reels / Shorts"
            className={`px-2 py-1 rounded text-xs font-mono flex items-center space-x-1 transition-all ${
              aspectRatio === '9:16' ? 'bg-cyan-500 text-black font-bold shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>9:16</span>
          </button>
          <button
            onClick={() => onAspectRatioChange && onAspectRatioChange('1:1')}
            title="1:1 Instagram Square"
            className={`px-2 py-1 rounded text-xs font-mono flex items-center space-x-1 transition-all ${
              aspectRatio === '1:1' ? 'bg-cyan-500 text-black font-bold shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Square className="w-3.5 h-3.5" />
            <span>1:1</span>
          </button>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onSeek && onSeek(0)}
            title="Jump to Start"
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 transition"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={() => onSeek && onSeek(Math.max(0, currentTime - 1.0))}
            title="Step Back 1s"
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 transition"
          >
            <SkipBack className="w-4 h-4" />
          </button>
          <button
            onClick={isPlaying ? onPause : onPlay}
            title={isPlaying ? "Pause Video" : "Play Video"}
            className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-400 to-sky-500 text-black font-bold text-xs flex items-center space-x-1.5 shadow-md shadow-cyan-500/20 hover:scale-105 transition"
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black" />}
            <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
          </button>
          <button
            onClick={() => onSeek && onSeek(Math.min(duration, currentTime + 1.0))}
            title="Step Forward 1s"
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 transition"
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>

        {/* View Toggles */}
        <div className="flex items-center space-x-1.5">
          <button
            onClick={onToggleSafeZones}
            title="Toggle Social UI Safe Zones"
            className={`px-2 py-1 rounded text-xs font-mono border transition ${
              showSafeZones 
                ? 'bg-red-950/80 border-red-600 text-red-300' 
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            Safe Zones
          </button>
        </div>
      </div>
    </div>
  );
}
