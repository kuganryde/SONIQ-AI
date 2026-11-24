import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  Video, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Sliders, 
  Layers,
  Wand2
} from 'lucide-react';
import { apiUrl, safeFetchJson } from '../config/api';

export default function VybeAIDirector({
  onApplyStoryboard,
  currentAspectRatio = '16:9'
}) {
  const [prompt, setPrompt] = useState('High-velocity 30s TikTok tech review highlighting sovereign AI studio features with fast jump-cuts and 808 sub drops');
  const [duration, setDuration] = useState(30);
  const [aspectRatio, setAspectRatio] = useState(currentAspectRatio);
  const [stylePreset, setStylePreset] = useState('cyberpunk');
  const [isGenerating, setIsGenerating] = useState(false);
  const [storyboard, setStoryboard] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const quickPrompts = [
    { label: 'TikTok Tech Review', text: 'Fast-paced 15s TikTok product showcase with snappy zooms, dynamic kinetic subtitles, and energetic bass hits.' },
    { label: 'Cinematic Teaser', text: 'Moody 30s cinematic trailer with slow push-ins, high-contrast anamorphic lighting, and hybrid orchestral swells.' },
    { label: 'Sovereign Brand Stinger', text: '10s high-impact brand logo reveal highlighting RYDETECH sovereign speed, precision, and sonic ident.' },
    { label: 'YouTube Vlog Intro', text: '20s engaging YouTube opening hook with upbeat tempo, lower thirds, and instant cut-to-action.' }
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setErrorMsg('');

    try {
      const data = await safeFetchJson(apiUrl('/api/v1/director/plan'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          aspect_ratio: aspectRatio,
          target_duration_sec: duration,
          style_preset: stylePreset
        })
      });
      setStoryboard(data);
    } catch (err) {
      console.error('Director generation failed:', err);
      setErrorMsg(`Director Error: ${err.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col h-full space-y-3">
      {/* Prompt Bar & Generation Controls */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="p-1 rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
              <Bot className="w-4 h-4" />
            </span>
            <div>
              <h4 className="text-xs font-bold text-slate-200 uppercase font-mono">
                Agent 11: AI Director & Storyboard Architect
              </h4>
              <p className="text-[10px] text-slate-400">Powered by sovereign Ollama (Qwen 2.5)</p>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            {['cyberpunk', 'cinematic', 'minimal'].map((s) => (
              <button
                key={s}
                onClick={() => setStylePreset(s)}
                className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase ${
                  stylePreset === s ? 'bg-violet-600 text-white font-bold' : 'bg-slate-800 text-slate-400'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Quick prompt badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {quickPrompts.map((qp, idx) => (
            <button
              key={idx}
              onClick={() => setPrompt(qp.text)}
              className="px-2 py-0.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-[10px] border border-slate-700/60 transition"
            >
              {qp.label}
            </button>
          ))}
        </div>

        {/* Text Area */}
        <textarea
          rows={2}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your creative vision, pacing, music vibe, and target audience..."
          className="w-full bg-[#080b11] border border-slate-800 rounded-lg p-2 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 font-mono"
        />

        {/* Generate Button & Duration Slider */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Duration: {duration}s</span>
            <input
              type="range"
              min="10"
              max="60"
              step="5"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-20 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className={`px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-mono text-xs font-bold flex items-center space-x-1.5 shadow-md shadow-violet-600/30 transition ${
              isGenerating ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <Wand2 className="w-3.5 h-3.5" />
            <span>{isGenerating ? 'DIRECTING STORYBOARD...' : 'GENERATE STORYBOARD'}</span>
          </button>
        </div>
      </div>

      {errorMsg && (
        <div className="p-2 rounded bg-red-950/60 border border-red-700/80 text-red-300 text-xs">
          {errorMsg}
        </div>
      )}

      {/* Generated Storyboard Breakdown View */}
      {storyboard && (
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 space-y-3 overflow-y-auto max-h-[300px]">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div>
              <div className="text-xs font-bold text-slate-200">{storyboard.title}</div>
              <div className="text-[10px] text-cyan-400 font-mono">
                {storyboard.aspect_ratio} • {storyboard.pacing} • {storyboard.soundtrack_bpm} BPM ({storyboard.soundtrack_mood})
              </div>
            </div>

            <button
              onClick={() => onApplyStoryboard && onApplyStoryboard(storyboard)}
              className="px-3 py-1 rounded bg-cyan-500 hover:bg-cyan-400 text-black font-mono text-xs font-bold flex items-center space-x-1 shadow-sm transition"
            >
              <span>APPLY TO TIMELINE</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Scene Cards */}
          <div className="space-y-2">
            {(storyboard.scenes || []).map((sc, idx) => (
              <div
                key={idx}
                className="bg-[#0b0e17] border border-slate-800/90 rounded-lg p-2 text-xs space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-violet-400 text-[11px]">
                    SCENE {sc.scene_number}: {sc.shot_type}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">{sc.duration_sec}s</span>
                </div>
                <p className="text-slate-300 text-[11px]">{sc.visual_description}</p>
                <div className="flex flex-wrap items-center gap-2 pt-1 text-[10px] font-mono text-slate-500">
                  <span>🎥 {sc.camera_motion}</span>
                  <span>✂️ {sc.transition}</span>
                  <span className="text-emerald-400">🎵 {sc.audio_cue}</span>
                  {sc.overlay_text && <span className="text-cyan-300 font-bold">💬 "{sc.overlay_text}"</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
