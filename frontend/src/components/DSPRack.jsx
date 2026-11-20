import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Sliders, Activity, Disc, Wand2, Check, Download } from 'lucide-react';

export default function DSPRack({
  activeFile,
  tracks = [],
  onApplyDSP
}) {
  const [eqBands, setEqBands] = useState([
    { type: 'highpass', freq: 30, gain_db: 0, q: 0.707 },
    { type: 'lowshelf', freq: 100, gain_db: 2.5, q: 0.707 },
    { type: 'peaking', freq: 350, gain_db: -1.5, q: 1.2 },
    { type: 'peaking', freq: 1000, gain_db: 1.0, q: 1.0 },
    { type: 'peaking', freq: 3500, gain_db: 2.0, q: 1.2 },
    { type: 'highshelf', freq: 10000, gain_db: 2.0, q: 0.707 }
  ]);

  const [compParams, setCompParams] = useState({
    threshold_db: -18.0,
    ratio: 3.5,
    attack_ms: 15.0,
    release_ms: 120.0,
    makeup_gain_db: 2.0
  });

  const [reverbParams, setReverbParams] = useState({
    room_size: 0.7,
    damping: 0.3,
    wet_level: 0.25
  });

  const [saturationParams, setSaturationParams] = useState({
    drive_db: 3.0,
    mode: 'tape'
  });

  const [widenerWidth, setWidenerWidth] = useState(115);
  const [processing, setProcessing] = useState(false);
  const [dspResult, setDspResult] = useState(null);

  const canvasRef = useRef(null);

  // Draw EQ curve on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    // Draw grid lines
    ctx.strokeStyle = '#1e2638';
    ctx.lineWidth = 1;
    for (let f of [50, 100, 250, 500, 1000, 2500, 5000, 10000, 20000]) {
      const x = (Math.log10(f / 20) / Math.log10(20000 / 20)) * w;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }

    // 0dB baseline
    ctx.strokeStyle = '#334155';
    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();

    // Frequency response curve
    ctx.strokeStyle = '#00f2fe';
    ctx.lineWidth = 2.5;
    ctx.beginPath();

    for (let x = 0; x < w; x++) {
      const f = 20 * Math.pow(1000, x / w);
      let totalGainDb = 0;
      eqBands.forEach(b => {
        const dist = Math.abs(Math.log10(f / b.freq));
        if (b.type === 'peaking') {
          totalGainDb += b.gain_db * Math.exp(-dist * dist * b.q * 3);
        } else if (b.type === 'lowshelf' && f < b.freq) {
          totalGainDb += b.gain_db;
        } else if (b.type === 'highshelf' && f > b.freq) {
          totalGainDb += b.gain_db;
        }
      });
      const y = (h / 2) - (totalGainDb * 4);
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }, [eqBands]);

  const handleApplyDSP = async () => {
    const fileToUse = activeFile?.file_path || (tracks[0] ? tracks[0].file_path : null);
    if (!fileToUse) {
      alert("Please load a demo project or upload an audio file first.");
      return;
    }

    setProcessing(true);
    try {
      const operations = [
        { type: 'eq', bands: eqBands },
        { type: 'compressor', ...compParams },
        { type: 'reverb', ...reverbParams },
        { type: 'saturation', ...saturationParams },
        { type: 'widener', width_pct: widenerWidth }
      ];

      const resp = await fetch('/api/v1/dsp/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ file_path: fileToUse, operations })
      });
      const data = await resp.json();
      setDspResult(data);
    } catch (e) {
      alert(`DSP error: ${e.message}`);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="flex-1 p-6 space-y-6 overflow-y-auto max-w-[1700px] mx-auto">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div>
          <h1 className="text-base font-bold text-white font-mono flex items-center space-x-2">
            <Cpu className="w-5 h-5 text-cyan-400" />
            <span>STUDIO DSP HARDWARE-EMULATION RACK</span>
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            64-bit float precision modules: Parametric EQ, Opto-Compressor, Tube/Tape Saturation, Algorithmic Reverb, Stereo Imager.
          </p>
        </div>

        <button
          onClick={handleApplyDSP}
          disabled={processing}
          className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-black font-extrabold text-xs shadow-lg shadow-cyan-500/20 disabled:opacity-50 transition-all font-mono"
        >
          {processing ? 'Processing 64-bit Audio...' : 'Apply DSP Rack to Track'}
        </button>
      </div>

      {/* Interactive 8-Band Parametric EQ */}
      <div className="bg-[#0b0e17] p-5 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-bold text-cyan-300">
            8-Band Studio Parametric Equalizer (RBJ Biquad Cookbook)
          </span>
          <span className="text-[10px] font-mono text-slate-500">20 Hz - 20 kHz Frequency Spectrum</span>
        </div>

        <canvas
          ref={canvasRef}
          width={800}
          height={160}
          className="w-full h-36 bg-black/60 rounded-xl border border-slate-800"
        />

        {/* EQ Bands Sliders */}
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
          {eqBands.map((band, idx) => (
            <div key={idx} className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 text-xs font-mono space-y-1">
              <div className="text-[10px] text-cyan-400 font-bold uppercase">{band.type}</div>
              <div className="text-[10px] text-slate-400">{band.freq} Hz</div>
              <input
                type="range"
                min="-12"
                max="12"
                step="0.5"
                value={band.gain_db}
                onChange={(e) => {
                  const updated = [...eqBands];
                  updated[idx].gain_db = parseFloat(e.target.value);
                  setEqBands(updated);
                }}
                className="w-full h-1 bg-slate-800 rounded cursor-pointer"
              />
              <div className="text-[9px] text-slate-500 text-right">{band.gain_db} dB</div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamics & Tonal Modules */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Studio Compressor */}
        <div className="bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-3">
          <div className="font-mono text-xs font-bold text-violet-300">
            Dynamic Optical Compressor
          </div>
          <div className="space-y-2 text-xs font-mono">
            <div>
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Threshold</span>
                <span>{compParams.threshold_db} dB</span>
              </div>
              <input
                type="range"
                min="-40"
                max="0"
                value={compParams.threshold_db}
                onChange={(e) => setCompParams({ ...compParams, threshold_db: parseFloat(e.target.value) })}
                className="w-full h-1 bg-slate-800 rounded cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Ratio</span>
                <span>{compParams.ratio}:1</span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                step="0.5"
                value={compParams.ratio}
                onChange={(e) => setCompParams({ ...compParams, ratio: parseFloat(e.target.value) })}
                className="w-full h-1 bg-slate-800 rounded cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Algorithmic Reverb */}
        <div className="bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-3">
          <div className="font-mono text-xs font-bold text-emerald-300">
            Moorer/Schroeder Reverb
          </div>
          <div className="space-y-2 text-xs font-mono">
            <div>
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Room Size</span>
                <span>{Math.round(reverbParams.room_size * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="0.95"
                step="0.05"
                value={reverbParams.room_size}
                onChange={(e) => setReverbParams({ ...reverbParams, room_size: parseFloat(e.target.value) })}
                className="w-full h-1 bg-slate-800 rounded cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Wet Mix</span>
                <span>{Math.round(reverbParams.wet_level * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="0.8"
                step="0.05"
                value={reverbParams.wet_level}
                onChange={(e) => setReverbParams({ ...reverbParams, wet_level: parseFloat(e.target.value) })}
                className="w-full h-1 bg-slate-800 rounded cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Harmonic Saturation & Imager */}
        <div className="bg-[#0c101a] p-4 rounded-xl border border-slate-800 space-y-3">
          <div className="font-mono text-xs font-bold text-amber-300">
            Harmonic Saturation & Stereo Imager
          </div>
          <div className="space-y-2 text-xs font-mono">
            <div>
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Drive ({saturationParams.mode.toUpperCase()})</span>
                <span>{saturationParams.drive_db} dB</span>
              </div>
              <input
                type="range"
                min="0"
                max="12"
                step="0.5"
                value={saturationParams.drive_db}
                onChange={(e) => setSaturationParams({ ...saturationParams, drive_db: parseFloat(e.target.value) })}
                className="w-full h-1 bg-slate-800 rounded cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Stereo Width</span>
                <span>{widenerWidth}%</span>
              </div>
              <input
                type="range"
                min="50"
                max="200"
                step="5"
                value={widenerWidth}
                onChange={(e) => setWidenerWidth(parseInt(e.target.value))}
                className="w-full h-1 bg-slate-800 rounded cursor-pointer"
              />
            </div>
          </div>
        </div>

      </div>

      {/* DSP Result Preview */}
      {dspResult && (
        <div className="bg-black/80 p-4 rounded-xl border border-emerald-500/40 flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-xs font-bold text-emerald-400 font-mono">DSP Rack Processed Successfully</div>
            <div className="text-[10px] text-slate-400 font-mono">
              Peak: {dspResult.metrics?.sample_peak_dbfs} dBFS • Integrated: {dspResult.metrics?.integrated_lufs} LUFS
            </div>
          </div>
          <a
            href={dspResult.download_url}
            download
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Processed WAV</span>
          </a>
        </div>
      )}

    </div>
  );
}
