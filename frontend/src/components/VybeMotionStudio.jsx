import React, { useState } from 'react';
import { 
  Sparkles, 
  Palette, 
  Type, 
  Layers, 
  Plus, 
  Sliders, 
  Check, 
  Film
} from 'lucide-react';

export default function VybeMotionStudio({
  activeColorGrade = 'clean',
  onSelectColorGrade,
  onAddTitleOverlay
}) {
  const [customTitle, setCustomTitle] = useState('RYDETECH VYBE AI');
  const [titleStyle, setTitleStyle] = useState('cyberpunk');

  const luts = [
    { id: 'clean', name: 'Clean Rec.709', desc: 'Neutral, accurate natural studio color balance.' },
    { id: 'teal_orange', name: 'Teal & Orange', desc: 'Hollywood contrast with deep cyan shadows and warm skin tones.' },
    { id: 'cyberpunk', name: 'Cyberpunk Neon', desc: 'High saturation electric cyan, violet, and deep black levels.' },
    { id: 'moody', name: 'Moody Dark Cinema', desc: 'Film noir shadow crushing and desaturated midtones.' },
    { id: 'vintage', name: 'Vintage 35mm Film', desc: 'Warm sepia highlights and analog emulsion curve.' }
  ];

  const titlePresets = [
    { title: 'RYDETECH GLOBAL ENTERPRISE', subtitle: 'Sovereign AI & Automation Architecture' },
    { title: 'VYBE AI SHOWCASE', subtitle: 'Autonomous Multimedia Studio v1.0' },
    { title: 'BREAKING ANNOUNCEMENT', subtitle: 'Autonomous Media Generation' },
    { title: 'SONIQ AUDIO MASTERED', subtitle: '64-bit IEEE 754 Double Precision' }
  ];

  return (
    <div className="flex flex-col h-full space-y-4">
      {/* 1. Color Grading & LUT Suite */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 space-y-2.5">
        <div className="flex items-center space-x-2 pb-1 border-b border-slate-800">
          <Palette className="w-4 h-4 text-cyan-400" />
          <h4 className="text-xs font-bold text-slate-200 uppercase font-mono">
            Color Grading LUTs & Tone Presets
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {luts.map((lut) => (
            <button
              key={lut.id}
              onClick={() => onSelectColorGrade && onSelectColorGrade(lut.id)}
              className={`p-2 rounded-lg border text-left transition flex flex-col justify-between ${
                activeColorGrade === lut.id
                  ? 'bg-cyan-950/80 border-cyan-400 ring-1 ring-cyan-400'
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-slate-200">{lut.name}</span>
                {activeColorGrade === lut.id && <Check className="w-3.5 h-3.5 text-cyan-400" />}
              </div>
              <p className="text-[10px] text-slate-400 mt-1">{lut.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* 2. Motion Titles & Lower Thirds Generator */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 space-y-2.5">
        <div className="flex items-center space-x-2 pb-1 border-b border-slate-800">
          <Type className="w-4 h-4 text-violet-400" />
          <h4 className="text-xs font-bold text-slate-200 uppercase font-mono">
            Kinetic Typography & Lower Thirds
          </h4>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={customTitle}
            onChange={(e) => setCustomTitle(e.target.value)}
            placeholder="Enter overlay title..."
            className="flex-1 bg-[#080b11] border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 font-mono focus:outline-none focus:border-violet-500"
          />
          <button
            onClick={() => onAddTitleOverlay && onAddTitleOverlay(customTitle)}
            className="px-3 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-mono text-xs font-bold flex items-center space-x-1 shadow transition"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>ADD TO V2</span>
          </button>
        </div>

        {/* Quick title presets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
          {titlePresets.map((tp, idx) => (
            <button
              key={idx}
              onClick={() => onAddTitleOverlay && onAddTitleOverlay(tp.title)}
              className="p-1.5 rounded bg-slate-950/60 border border-slate-800/80 hover:border-violet-500/60 text-left text-xs transition group"
            >
              <div className="font-mono text-[11px] font-bold text-slate-300 group-hover:text-violet-300 truncate">
                {tp.title}
              </div>
              <div className="text-[9px] text-slate-500 truncate">{tp.subtitle}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
