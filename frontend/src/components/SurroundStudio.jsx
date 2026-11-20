import React, { useState } from 'react';
import { Disc, Volume2, Download, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function SurroundStudio({
  activeFile,
  tracks = []
}) {
  const [layout, setLayout] = useState('5.1');
  const [puckPos, setPuckPos] = useState({ x: 0.0, y: 0.4 });
  const [crossoverHz, setCrossoverHz] = useState(80);
  const [processing, setProcessing] = useState(false);
  const [surroundResult, setSurroundResult] = useState(null);

  const speakerLayouts = {
    '2.0': [
      { id: 'L', name: 'Left', x: 25, y: 25 },
      { id: 'R', name: 'Right', x: 75, y: 25 },
    ],
    '2.1': [
      { id: 'L', name: 'Left', x: 25, y: 25 },
      { id: 'R', name: 'Right', x: 75, y: 25 },
      { id: 'LFE', name: 'Subwoofer', x: 50, y: 50, isLfe: true },
    ],
    '5.1': [
      { id: 'L', name: 'Front Left', x: 20, y: 20 },
      { id: 'C', name: 'Center', x: 50, y: 15 },
      { id: 'R', name: 'Front Right', x: 80, y: 20 },
      { id: 'LFE', name: 'LFE Sub', x: 50, y: 50, isLfe: true },
      { id: 'Ls', name: 'Surround L', x: 15, y: 80 },
      { id: 'Rs', name: 'Surround R', x: 85, y: 80 },
    ],
    '7.1': [
      { id: 'L', name: 'Front Left', x: 20, y: 20 },
      { id: 'C', name: 'Center', x: 50, y: 15 },
      { id: 'R', name: 'Front Right', x: 80, y: 20 },
      { id: 'LFE', name: 'LFE Sub', x: 50, y: 50, isLfe: true },
      { id: 'Ls', name: 'Side Surr L', x: 10, y: 50 },
      { id: 'Rs', name: 'Side Surr R', x: 90, y: 50 },
      { id: 'Rls', name: 'Rear Surr L', x: 25, y: 85 },
      { id: 'Rrs', name: 'Rear Surr R', x: 75, y: 85 },
    ]
  };

  const speakers = speakerLayouts[layout] || speakerLayouts['5.1'];

  const handleRenderSurround = async () => {
    const fileToUse = activeFile?.file_path || (tracks[0] ? tracks[0].file_path : null);
    if (!fileToUse) {
      alert("Please load a demo project or upload an audio file first.");
      return;
    }

    setProcessing(true);
    try {
      const resp = await fetch('/api/v1/audio/surround', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          file_path: fileToUse,
          layout,
          x: puckPos.x,
          y: puckPos.y,
          crossover_hz: crossoverHz
        })
      });
      const data = await resp.json();
      setSurroundResult(data);
    } catch (e) {
      alert(`Surround render error: ${e.message}`);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="flex-1 p-6 space-y-6 overflow-y-auto max-w-[1700px] mx-auto">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div>
          <h1 className="text-base font-bold text-white font-mono flex items-center space-x-2">
            <Disc className="w-5 h-5 text-cyan-400" />
            <span>SURROUND SOUND CONTROL ROOM (ITU-R BS.775)</span>
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            Interactive visual speaker positioning, Vector Base Amplitude Panning (VBAP), discrete LFE crossover, and multichannel WAV export.
          </p>
        </div>

        {/* Layout Switcher */}
        <div className="flex items-center space-x-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
          {['2.0', '2.1', '5.1', '7.1'].map(l => (
            <button
              key={l}
              onClick={() => setLayout(l)}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                layout === l ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20' : 'text-slate-400 hover:text-white'
              }`}
            >
              {l} SURROUND
            </button>
          ))}
        </div>
      </div>

      {/* Main Room Canvas & Panning */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Visual Speaker Room (2D Spatial Arena) */}
        <div className="lg:col-span-2 bg-[#0a0d15] p-6 rounded-2xl border border-slate-800 shadow-2xl relative flex flex-col items-center justify-center min-h-[460px]">
          <div className="absolute top-4 left-4 text-xs font-mono text-slate-400">
            Acoustic Listening Position (Sweet Spot)
          </div>

          {/* Listening Arena Circle */}
          <div className="w-[380px] h-[380px] rounded-full border border-dashed border-slate-700/80 relative flex items-center justify-center bg-black/40">
            
            {/* Center Listener Head */}
            <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-cyan-400 flex items-center justify-center z-10 shadow-lg shadow-cyan-500/30">
              <span className="text-[10px] font-mono font-bold text-cyan-300">ENG</span>
            </div>

            {/* Draggable Audio Puck */}
            <div
              className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-violet-500 border-2 border-white absolute shadow-lg shadow-violet-500/40 flex items-center justify-center cursor-move transition-transform"
              style={{
                left: `${((puckPos.x + 1) / 2) * 85 + 7.5}%`,
                top: `${((1 - puckPos.y) / 2) * 85 + 7.5}%`
              }}
              title="Draggable Audio Source Object"
            >
              <div className="w-2 h-2 rounded-full bg-black animate-ping" />
            </div>

            {/* Speakers on Perimeter */}
            {speakers.map(spk => (
              <div
                key={spk.id}
                className={`absolute px-2.5 py-1 rounded-lg border text-xs font-mono font-bold shadow-lg flex flex-col items-center ${
                  spk.isLfe
                    ? 'bg-amber-950/80 text-amber-300 border-amber-600'
                    : 'bg-slate-900 text-cyan-300 border-slate-700'
                }`}
                style={{
                  left: `${spk.x}%`,
                  top: `${spk.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <span>{spk.id}</span>
                <span className="text-[8px] text-slate-400 font-normal">{spk.name}</span>
              </div>
            ))}
          </div>

          {/* Puck Position Coordinates */}
          <div className="mt-4 flex items-center space-x-4 text-xs font-mono text-slate-400">
            <span>X: {puckPos.x.toFixed(2)} (Pan L/R)</span>
            <span>Y: {puckPos.y.toFixed(2)} (Front/Rear)</span>
          </div>
        </div>

        {/* Spatial Panning Controls & Bass Management */}
        <div className="space-y-4">
          <div className="bg-[#0c101a] p-5 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
            <h3 className="font-mono text-xs font-bold text-cyan-300 uppercase">
              Surround Spatial Panning Controls
            </h3>

            <div>
              <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                <span>Left / Right Azimuth (X)</span>
                <span>{puckPos.x.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="-1.0"
                max="1.0"
                step="0.05"
                value={puckPos.x}
                onChange={(e) => setPuckPos({ ...puckPos, x: parseFloat(e.target.value) })}
                className="w-full h-1.5 bg-slate-800 rounded cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono text-slate-400 mb-1">
                <span>Front / Rear Distance (Y)</span>
                <span>{puckPos.y.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="-1.0"
                max="1.0"
                step="0.05"
                value={puckPos.y}
                onChange={(e) => setPuckPos({ ...puckPos, y: parseFloat(e.target.value) })}
                className="w-full h-1.5 bg-slate-800 rounded cursor-pointer"
              />
            </div>

            {/* LFE Crossover */}
            <div className="pt-2 border-t border-slate-800 space-y-2">
              <div className="flex justify-between text-xs font-mono text-amber-300">
                <span>LFE Crossover (Subwoofer)</span>
                <span>{crossoverHz} Hz</span>
              </div>
              <input
                type="range"
                min="40"
                max="160"
                step="5"
                value={crossoverHz}
                onChange={(e) => setCrossoverHz(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded cursor-pointer accent-amber-500"
              />
              <p className="text-[10px] font-mono text-slate-500">
                4th-order Linkwitz-Riley low-pass to LFE; high-pass to satellites.
              </p>
            </div>

            <button
              onClick={handleRenderSurround}
              disabled={processing}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-black font-extrabold text-xs shadow-lg shadow-cyan-500/20 disabled:opacity-50 transition-all font-mono"
            >
              {processing ? 'Engineering Surround Channels...' : `Render & Export ${layout} Surround WAV`}
            </button>
          </div>

          {/* Statutory Disclaimer Alert */}
          <div className="bg-amber-950/20 p-3.5 rounded-xl border border-amber-800/60 text-amber-200 text-xs font-mono flex items-start space-x-2">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-[11px] leading-relaxed">
              <strong>Statutory Audio Compliance Notice:</strong> AI-assisted upmixing produces an estimated spatial reconstruction conforming to ITU-R BS.775, not an authentic original discrete multitrack recording.
            </p>
          </div>
        </div>

      </div>

      {/* Render Result */}
      {surroundResult && (
        <div className="bg-black/80 p-4 rounded-xl border border-cyan-500/40 flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-xs font-bold text-cyan-300 font-mono">
              Multichannel {surroundResult.channel_layout} Audio Bounced Successfully ({surroundResult.channel_count} Channels)
            </div>
            <div className="text-[10px] text-slate-400 font-mono">
              SMPTE Discrete Layout • {surroundResult.bass_management?.crossover_hz}Hz Subwoofer Alignment
            </div>
          </div>
          <a
            href={surroundResult.download_url}
            download
            className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-mono text-xs font-bold transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Multichannel WAV</span>
          </a>
        </div>
      )}

    </div>
  );
}
