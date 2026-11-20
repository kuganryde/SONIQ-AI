import React, { useState, useEffect, useRef } from 'react';
import { Activity, ShieldCheck, AlertCircle, BarChart3 } from 'lucide-react';
import { audioEngine } from '../audio/WebAudioEngine';

export default function AudioAnalyzer({
  activeFile,
  tracks = []
}) {
  const [analysisData, setAnalysisData] = useState(null);
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef(null);

  const handleRunAnalysis = async () => {
    const fileToUse = activeFile?.file_path || (tracks[0] ? tracks[0].file_path : null);
    if (!fileToUse) {
      alert("Please load a demo project or upload an audio file first.");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file_path', fileToUse);
      const resp = await fetch('/api/v1/audio/analyze', {
        method: 'POST',
        body: formData
      });
      const data = await resp.json();
      setAnalysisData(data);
    } catch (e) {
      alert(`Analysis error: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Real-time animation loop for FFT spectrum on canvas
  useEffect(() => {
    let animId;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const renderRta = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const tele = audioEngine.getTelemetry();
      const bins = tele.fftData || new Uint8Array(64);

      const barWidth = w / bins.length;
      for (let i = 0; i < bins.length; i++) {
        const val = bins[i] / 255.0;
        const barH = val * h;
        const x = i * barWidth;
        const y = h - barH;

        // Gradient from cyan to violet
        const grad = ctx.createLinearGradient(0, y, 0, h);
        grad.addColorStop(0, '#00f2fe');
        grad.addColorStop(1, '#7928ca');

        ctx.fillStyle = grad;
        ctx.fillRect(x, y, barWidth - 1.5, barH);
      }

      animId = requestAnimationFrame(renderRta);
    };

    renderRta();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="flex-1 p-6 space-y-6 overflow-y-auto max-w-[1700px] mx-auto">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div>
          <h1 className="text-base font-bold text-white font-mono flex items-center space-x-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            <span>PROFESSIONAL ACOUSTIC ANALYSIS & RTA VECTOR LAB</span>
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            Conforming to ITU-R BS.1770-4, EBU R128, FFT spectral distribution, phase correlation, and crest factor.
          </p>
        </div>

        <button
          onClick={handleRunAnalysis}
          disabled={loading}
          className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-black font-extrabold text-xs shadow-lg shadow-cyan-500/20 disabled:opacity-50 transition-all font-mono"
        >
          {loading ? 'Measuring Acoustics...' : 'Run Deep Acoustic Audit'}
        </button>
      </div>

      {/* Real-time RTA Spectrum Canvas */}
      <div className="bg-[#0b0e17] p-5 rounded-2xl border border-slate-800 shadow-xl space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-cyan-300">
            Real-Time FFT Spectrum Analyzer (RTA 64-Band Octave)
          </span>
          <span className="text-[10px] font-mono text-emerald-400">LIVE AUDIO MONITOR</span>
        </div>

        <canvas
          ref={canvasRef}
          width={800}
          height={180}
          className="w-full h-44 bg-black/60 rounded-xl border border-slate-800"
        />
      </div>

      {/* Acoustic Audit Metrics */}
      {analysisData && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 text-xs font-mono">
            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400">Integrated Loudness</div>
              <div className="text-base font-bold text-cyan-400 mt-1">
                {analysisData.acoustic_analysis?.integrated_lufs} LUFS
              </div>
            </div>

            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400">True Peak</div>
              <div className="text-base font-bold text-emerald-400 mt-1">
                {analysisData.acoustic_analysis?.true_peak_dbtp} dBTP
              </div>
            </div>

            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400">Phase Correlation</div>
              <div className="text-base font-bold text-violet-400 mt-1">
                {analysisData.acoustic_analysis?.phase_correlation}
              </div>
            </div>

            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400">Dynamic Range (DR)</div>
              <div className="text-base font-bold text-amber-400 mt-1">
                DR {analysisData.acoustic_analysis?.dynamic_range_dr}
              </div>
            </div>

            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400">Crest Factor</div>
              <div className="text-base font-bold text-white mt-1">
                {analysisData.acoustic_analysis?.crest_factor_db} dB
              </div>
            </div>

            <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400">Clipping Status</div>
              <div className={`text-base font-bold mt-1 ${analysisData.acoustic_analysis?.clipping?.has_clipping ? 'text-rose-400' : 'text-emerald-400'}`}>
                {analysisData.acoustic_analysis?.clipping?.has_clipping ? 'CLIPPING' : 'CLEAN'}
              </div>
            </div>
          </div>

          {/* AI Engineer Evaluation Notes */}
          {analysisData.ai_engineer_notes && (
            <div className="bg-black/80 p-4 rounded-xl border border-cyan-800/80 text-xs font-mono space-y-1">
              <div className="font-bold text-cyan-400 uppercase">Agent 01 Evaluation:</div>
              <p className="text-slate-300 leading-relaxed">{analysisData.ai_engineer_notes}</p>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
