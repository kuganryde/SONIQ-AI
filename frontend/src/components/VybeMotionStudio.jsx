import React, { useState } from 'react';
import { 
  Sparkles, 
  Palette, 
  Type, 
  Layers, 
  Plus, 
  Sliders, 
  Check, 
  Film,
  Zap,
  Cpu,
  Eye
} from 'lucide-react';

export default function VybeMotionStudio({
  activeColorGrade = 'kodak_2383',
  onSelectColorGrade,
  activeFrei0rEffects = [],
  onToggleFrei0rEffect,
  onAddTitleOverlay
}) {
  const [customTitle, setCustomTitle] = useState('RYDETECH VYBE AI');
  const [activeTab, setActiveTab] = useState('luts'); // 'luts', 'vfx', 'titles'

  const luts = [
    { id: 'kodak_2383', name: 'Kodak 2383 Film Print', desc: 'Hollywood standard print stock emulation with deep teal shadows & amber highlight roll-off.', tag: 'Hollywood 3D LUT' },
    { id: 'fuji_3513', name: 'Fuji 3513 Cinema Stock', desc: 'Cool emerald greens, soft highlights, and gentle skin tone contrast.', tag: '35mm Film' },
    { id: 'teal_orange', name: 'Blockbuster Teal & Orange', desc: 'Hollywood action blockbuster contrast with cyan shadows and saturated skin.', tag: 'Blockbuster' },
    { id: 'cyberpunk_neon', name: 'Cyberpunk Neon Matrix', desc: 'High saturation electric blues, magentas, and crushed deep blacks.', tag: 'Sci-Fi' },
    { id: 'noir_silver', name: 'Noir Silver Halide B&W', desc: 'High-contrast monochrome film grain response curve.', tag: 'Monochrome' },
    { id: 'vintage_warm', name: 'Vintage Warm 35mm', desc: 'Warm nostalgic sepia highlights and analog emulsion toe compression.', tag: 'Vintage' },
    { id: 'clean', name: 'Clean Rec.709 Natural', desc: 'Accurate studio broadcast color without artistic tint.', tag: 'Natural' }
  ];

  const frei0rPlugins = [
    { id: 'glow:0.4', name: 'Diffusion Bloom (Glow)', desc: 'Cinematic optical bloom diffusion around bright specular highlights.', icon: '✨' },
    { id: 'rgbsplit0r:0.04', name: 'RGB Chromatic Aberration', desc: 'High-impact color fringing lens split for action & beat transitions.', icon: '⚡' },
    { id: 'glitch0r', name: 'Digital Glitch & Noise', desc: 'Cyberpunk signal corruption and digital scanline artifacts.', icon: '👾' },
    { id: 'sobel', name: 'Cyberpunk Neon Edge Tracer', desc: 'Mathematical contour detection transforming footage into glowing wireframe edges.', icon: '🔮' },
    { id: 'pixeliz0r:0.02', name: 'Retro 8-Bit Pixelation', desc: 'Retro gaming resolution mosaic reduction.', icon: '🕹️' },
    { id: 'vignette0r', name: 'Anamorphic Vignette Falloff', desc: 'Gentle optical edge darkening focusing viewer attention on the subject.', icon: '🎬' }
  ];

  const titlePresets = [
    { title: 'RYDETECH GLOBAL ENTERPRISE', subtitle: 'Sovereign AI & Automation Architecture' },
    { title: 'VYBE AI SHOWCASE', subtitle: 'Autonomous Media Studio v1.0' },
    { title: 'BREAKING ANNOUNCEMENT', subtitle: 'Autonomous Media Generation' },
    { title: 'SONIQ AUDIO MASTERED', subtitle: '64-bit IEEE 754 Double Precision' }
  ];

  return (
    <div className="flex flex-col h-full space-y-3">
      {/* Sub-navigation */}
      <div className="flex items-center space-x-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-mono">
        <button
          onClick={() => setActiveTab('luts')}
          className={`flex-1 py-1.5 rounded-lg flex items-center justify-center space-x-1.5 transition ${
            activeTab === 'luts' ? 'bg-cyan-500 text-black font-bold shadow' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Palette className="w-3.5 h-3.5" />
          <span>3D LUTs ({luts.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('vfx')}
          className={`flex-1 py-1.5 rounded-lg flex items-center justify-center space-x-1.5 transition ${
            activeTab === 'vfx' ? 'bg-violet-600 text-white font-bold shadow' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Zap className="w-3.5 h-3.5" />
          <span>Frei0r VFX (136)</span>
          {activeFrei0rEffects.length > 0 && (
            <span className="ml-1 px-1 rounded-full bg-cyan-400 text-black text-[9px]">
              {activeFrei0rEffects.length}
            </span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('titles')}
          className={`flex-1 py-1.5 rounded-lg flex items-center justify-center space-x-1.5 transition ${
            activeTab === 'titles' ? 'bg-indigo-600 text-white font-bold shadow' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Type className="w-3.5 h-3.5" />
          <span>Titles & Lower Thirds</span>
        </button>
      </div>

      {/* Tab 1: 3D LUT Hollywood Cinema Stocks */}
      {activeTab === 'luts' && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 space-y-2.5 overflow-y-auto max-h-[360px]">
          <div className="flex items-center justify-between pb-1 border-b border-slate-800">
            <span className="text-xs font-mono font-bold text-slate-200 uppercase">
              Hollywood Film Stocks & 3D .CUBE LUTs
            </span>
            <span className="px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800 text-[10px] font-mono text-cyan-300">
              FFmpeg lut3d
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {luts.map((lut) => (
              <button
                key={lut.id}
                onClick={() => onSelectColorGrade && onSelectColorGrade(lut.id)}
                className={`p-2.5 rounded-xl border text-left transition flex flex-col justify-between ${
                  activeColorGrade === lut.id
                    ? 'bg-cyan-950/80 border-cyan-400 ring-2 ring-cyan-400/50 shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-slate-200">{lut.name}</span>
                    {activeColorGrade === lut.id ? (
                      <Check className="w-4 h-4 text-cyan-400" />
                    ) : (
                      <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-slate-800 text-slate-400">
                        {lut.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">{lut.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Frei0r Open-Source VFX Suite */}
      {activeTab === 'vfx' && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 space-y-2.5 overflow-y-auto max-h-[360px]">
          <div className="flex items-center justify-between pb-1 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono font-bold text-slate-200 uppercase">
                Frei0r Open-Source VFX Plugins
              </span>
              <span className="px-1.5 py-0.2 rounded bg-violet-950 border border-violet-700 text-[9px] font-mono text-violet-300 font-bold">
                136 Installed
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">Multi-FX Stackable</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {frei0rPlugins.map((fx) => {
              const isActive = activeFrei0rEffects.includes(fx.id);
              return (
                <button
                  key={fx.id}
                  onClick={() => onToggleFrei0rEffect && onToggleFrei0rEffect(fx.id)}
                  className={`p-2.5 rounded-xl border text-left transition flex flex-col justify-between ${
                    isActive
                      ? 'bg-violet-950/90 border-violet-400 ring-2 ring-violet-500/50 shadow-lg shadow-violet-500/20'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1.5">
                        <span className="text-sm">{fx.icon}</span>
                        <span className="font-mono text-xs font-bold text-slate-200">{fx.name}</span>
                      </div>
                      <span className={`px-1.5 py-0.2 rounded text-[9px] font-mono font-bold ${
                        isActive ? 'bg-violet-500 text-white' : 'bg-slate-800 text-slate-500'
                      }`}>
                        {isActive ? 'ACTIVE' : 'OFF'}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">{fx.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 3: Kinetic Titles & Overlays */}
      {activeTab === 'titles' && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 space-y-2.5 overflow-y-auto max-h-[360px]">
          <div className="flex items-center space-x-2 pb-1 border-b border-slate-800">
            <Type className="w-4 h-4 text-violet-400" />
            <span className="text-xs font-bold text-slate-200 uppercase font-mono">
              Kinetic Typography & Lower Thirds
            </span>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
            {titlePresets.map((tp, idx) => (
              <button
                key={idx}
                onClick={() => onAddTitleOverlay && onAddTitleOverlay(tp.title)}
                className="p-2 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-violet-500/60 text-left text-xs transition group"
              >
                <div className="font-mono text-[11px] font-bold text-slate-300 group-hover:text-violet-300 truncate">
                  {tp.title}
                </div>
                <div className="text-[9px] text-slate-500 truncate">{tp.subtitle}</div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
