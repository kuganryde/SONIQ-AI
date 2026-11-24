import React, { useState } from 'react';
import { 
  Smartphone, 
  Tv, 
  Square, 
  ShieldAlert, 
  Subtitles, 
  Target, 
  Sparkles,
  Check
} from 'lucide-react';

export default function VybeSocialStudio({
  currentAspectRatio = '16:9',
  onSelectAspectRatio,
  showSafeZones = false,
  onToggleSafeZones
}) {
  const [subtitleStyle, setSubtitleStyle] = useState('kinetic_cyan');
  const [autoTracking, setAutoTracking] = useState(true);

  const formats = [
    {
      id: '9:16',
      name: '9:16 Vertical Video',
      platform: 'TikTok, IG Reels, YT Shorts',
      resolution: '1080 x 1920',
      icon: Smartphone
    },
    {
      id: '16:9',
      name: '16:9 Cinema Widescreen',
      platform: 'YouTube, Web, TV Broadcast',
      resolution: '1920 x 1080',
      icon: Tv
    },
    {
      id: '1:1',
      name: '1:1 Square Feed',
      platform: 'Instagram, LinkedIn Feed',
      resolution: '1080 x 1080',
      icon: Square
    },
    {
      id: '4:5',
      name: '4:5 Social Portrait',
      platform: 'Instagram Feed, Facebook',
      resolution: '1080 x 1350',
      icon: Smartphone
    }
  ];

  return (
    <div className="flex flex-col h-full space-y-4">
      {/* 1. Multi-Platform Aspect Ratio Selector */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 space-y-2.5">
        <div className="flex items-center space-x-2 pb-1 border-b border-slate-800">
          <Smartphone className="w-4 h-4 text-cyan-400" />
          <h4 className="text-xs font-bold text-slate-200 uppercase font-mono">
            Social Platform Canvas Reframing
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {formats.map((fmt) => {
            const Icon = fmt.icon;
            const isSelected = currentAspectRatio === fmt.id;
            return (
              <button
                key={fmt.id}
                onClick={() => onSelectAspectRatio && onSelectAspectRatio(fmt.id)}
                className={`p-2.5 rounded-lg border text-left transition flex items-start space-x-2.5 ${
                  isSelected
                    ? 'bg-cyan-950/80 border-cyan-400 ring-1 ring-cyan-400'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-cyan-500 text-black' : 'bg-slate-800 text-slate-400'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 truncate">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-slate-200">{fmt.id}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-300">{fmt.name}</div>
                  <div className="text-[9px] text-slate-500 font-mono mt-0.5">{fmt.platform} • {fmt.resolution}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Intelligent Subject Centering & Safe Zones */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 space-y-3">
        <div className="flex items-center space-x-2 pb-1 border-b border-slate-800">
          <Target className="w-4 h-4 text-violet-400" />
          <h4 className="text-xs font-bold text-slate-200 uppercase font-mono">
            Smart Crop & Platform Overlay Safe Zones
          </h4>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={onToggleSafeZones}
            className={`flex-1 p-2 rounded-lg border text-xs font-mono flex items-center justify-between transition ${
              showSafeZones 
                ? 'bg-red-950/80 border-red-600 text-red-300' 
                : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center space-x-2">
              <ShieldAlert className="w-4 h-4 text-red-400" />
              <span>TikTok / Reels Safe-Zone Mask</span>
            </div>
            <span className="font-bold">{showSafeZones ? 'ACTIVE' : 'OFF'}</span>
          </button>

          <button
            onClick={() => setAutoTracking(!autoTracking)}
            className={`flex-1 p-2 rounded-lg border text-xs font-mono flex items-center justify-between transition ${
              autoTracking 
                ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300' 
                : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Centroid Subject Tracking</span>
            </div>
            <span className="font-bold">{autoTracking ? 'ENABLED' : 'OFF'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
