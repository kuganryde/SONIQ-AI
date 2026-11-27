import React, { useEffect, useState } from 'react';
import {
  Check,
  CheckCircle2,
  Film,
  Gauge,
  Layers,
  Palette,
  RotateCcw,
  Scissors,
  Sliders,
  Sparkles,
  X,
} from 'lucide-react';
import { apiUrl, safeFetchJson } from '../config/api';

const FALLBACK_SUITES = [
  {
    id: 'capcut',
    name: 'CapCut',
    subtitle: 'Short-Form & Kinetic Creator Suite',
    luts: [
      { id: 'teal_orange', name: 'Creator Contrast', note: 'Balanced skin tones with cool shadows' },
      { id: 'cyberpunk_neon', name: 'Neon Pop', note: 'High-energy chroma lift for social hooks' },
      { id: 'clean', name: 'Natural Rec.709', note: 'Neutral broadcast baseline' },
    ],
    effects: [
      { id: 'rgbsplit0r:0.04', name: 'Chromatic Beat Split', category: 'Kinetic', note: 'RGB channel offset accent' },
      { id: 'glow:0.4', name: 'Soft Halation Bloom', category: 'Light', note: 'Clean highlight diffusion' },
      { id: 'glitch0r', name: 'Signal Glitch Pulse', category: 'Stylized', note: 'Digital distortion accent' },
      { id: 'pixeliz0r:0.02', name: 'Mosaic Cut', category: 'Stylized', note: 'Lightweight retro mosaic' },
    ],
    transitions: [
      { id: 'zoomin', name: 'Zoom Punch', duration: 0.35, note: 'Rapid forward focal push' },
      { id: 'hblur', name: 'Whip Pan Blur', duration: 0.3, note: 'Directional motion-streak cut' },
      { id: 'slideleft', name: 'Push Slide Left', duration: 0.4, note: 'Kinetic horizontal slide' },
      { id: 'pixelize', name: 'Mosaic Dissolve', duration: 0.35, note: 'Digital block transition' },
    ],
  },
  {
    id: 'davinci_resolve',
    name: 'DaVinci Resolve',
    subtitle: 'Cinema Color Science & Optical Finishing',
    luts: [
      { id: 'kodak_2383', name: 'Kodak 2383 Film Print', note: 'Amber highlights and deep teal shadows' },
      { id: 'fuji_3513', name: 'Fuji 3513 Cinema', note: 'Soft highlight roll-off and emerald toe' },
      { id: 'noir_silver', name: 'Silver Halide Monochrome', note: 'High-contrast theatrical monochrome' },
      { id: 'vintage_warm', name: '35mm Warm Emulsion', note: 'Warm analog print curve' },
    ],
    effects: [
      { id: 'glow:0.4', name: 'Film Halation Diffusion', category: 'Optical', note: 'Subtle specular highlight glow' },
      { id: 'vignette', name: 'Anamorphic Vignette', category: 'Lens', note: 'Optical corner falloff' },
      { id: 'sobel', name: 'Edge Contour Pass', category: 'Stylized', note: 'Analytical luminance edge trace' },
    ],
    transitions: [
      { id: 'dissolve', name: 'Optical Cross Dissolve', duration: 0.85, note: 'Smooth filmic blend' },
      { id: 'fadeblack', name: 'Dip to Black', duration: 0.9, note: 'Classic scene closure fade' },
      { id: 'wipeleft', name: 'Linear Cinema Wipe', duration: 0.65, note: 'Clean directional curtain wipe' },
      { id: 'wiperight', name: 'Reverse Cinema Wipe', duration: 0.65, note: 'Right-to-left boundary wipe' },
    ],
  },
  {
    id: 'final_cut_pro',
    name: 'Final Cut Pro',
    subtitle: 'Magnetic Precision & Broadcast Polish',
    luts: [
      { id: 'clean', name: 'Broadcast Rec.709', note: 'Color-accurate commercial standard' },
      { id: 'fuji_3513', name: 'Editorial Film Balance', note: 'Refined highlight control' },
      { id: 'kodak_2383', name: 'Commercial Print', note: 'Polished theatrical contrast' },
      { id: 'vintage_warm', name: 'Warm Documentary', note: 'Gentle warm tonal lift' },
    ],
    effects: [
      { id: 'vignette', name: 'Lens Vignette Falloff', category: 'Lens', note: 'Subtle framing vignette' },
      { id: 'glow:0.4', name: 'Broadcast Optical Bloom', category: 'Light', note: 'Controlled specular sheen' },
      { id: 'rgbsplit0r:0.04', name: 'Prism Edge Accent', category: 'Accent', note: 'Subtle chromatic separation' },
    ],
    transitions: [
      { id: 'dissolve', name: 'Flow Dissolve', duration: 0.6, note: 'Balanced editorial crossfade' },
      { id: 'slideright', name: 'Directional Flow Slide', duration: 0.5, note: 'Crisp broadcast slide' },
      { id: 'circlecrop', name: 'Iris Aperture Reveal', duration: 0.65, note: 'Clean circular focus reveal' },
      { id: 'radial', name: 'Clock Radial Sweep', duration: 0.7, note: 'Angular broadcast transition' },
    ],
  },
];

export default function VybeNLESuitePanel({
  activeAsset,
  activeColorGrade,
  onSelectColorGrade,
  activeFrei0rEffects = [],
  onToggleFrei0rEffect,
  onSetFrei0rEffects,
  selectedTransition,
  onSelectTransition,
  transitionDuration = 0.75,
  onChangeTransitionDuration,
  aspectRatio = '16:9',
  onSelectAspectRatio,
  playbackSpeed = 1.0,
  onChangePlaybackSpeed,
  onQuickSplit,
  onQuickTrimTail,
  onResetClean,
}) {
  const [suites, setSuites] = useState(FALLBACK_SUITES);
  const [activeSuiteId, setActiveSuiteId] = useState('davinci_resolve');
  const [activeCategory, setActiveCategory] = useState('effects'); // 'effects' | 'transitions' | 'luts'
  const [intensity, setIntensity] = useState('balanced');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const [hitlProposal, setHitlProposal] = useState(null);
  const [hitlDraft, setHitlDraft] = useState(null);
  const [statusNotice, setStatusNotice] = useState('');

  useEffect(() => {
    let mounted = true;
    safeFetchJson(apiUrl('/api/v1/video/nle-suites'))
      .then((res) => {
        if (mounted && res && Array.isArray(res.suites) && res.suites.length > 0) {
          setSuites(res.suites);
        }
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  const currentSuite = suites.find((s) => s.id === activeSuiteId) || suites[0];

  const handleAnalyzeVideo = async (autoSelectSuite = true) => {
    setIsAnalyzing(true);
    setStatusNotice('');
    try {
      const payload = {
        asset_id: activeAsset?.id || null,
        preferred_suite: autoSelectSuite ? null : activeSuiteId,
        intensity,
        fallback_duration: activeAsset?.duration_seconds || 10.0,
        fallback_aspect: aspectRatio,
      };
      const res = await safeFetchJson(apiUrl('/api/v1/video/nle-suites/analyze-hitl'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      setHitlProposal(res);
      if (res?.recommended_suite?.id) {
        setActiveSuiteId(res.recommended_suite.id);
      }
      setHitlDraft({
        applyColorGrade: true,
        colorGrade: res.proposal.color_grade,
        effects: (res.proposal.effects || []).map((e) => ({ ...e, enabled: true })),
        applyTransition: true,
        transitionId: res.proposal.transition.id,
        transitionName: res.proposal.transition.name,
        transitionDuration: res.proposal.transition.duration,
        applyQuickEdit: true,
        aspectRatio: res.proposal.quick_edit.aspect_ratio,
        playbackSpeed: res.proposal.quick_edit.playback_speed,
      });
    } catch (e) {
      setStatusNotice(`Analysis failed: ${e.message}`);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleApproveHitl = async () => {
    if (!hitlProposal || !hitlDraft) return;
    setIsApplying(true);
    const chosenEffects = hitlDraft.effects.filter((e) => e.enabled).map((e) => e.id);
    try {
      await safeFetchJson(apiUrl('/api/v1/video/nle-suites/apply-hitl'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          proposal_id: hitlProposal.proposal_id,
          suite_id: hitlProposal.recommended_suite.id,
          color_grade: hitlDraft.applyColorGrade ? hitlDraft.colorGrade : activeColorGrade,
          effects: chosenEffects,
          transition_id: hitlDraft.applyTransition ? hitlDraft.transitionId : selectedTransition,
          transition_duration: hitlDraft.applyTransition ? hitlDraft.transitionDuration : transitionDuration,
          aspect_ratio: hitlDraft.applyQuickEdit ? hitlDraft.aspectRatio : aspectRatio,
          playback_speed: hitlDraft.applyQuickEdit ? hitlDraft.playbackSpeed : playbackSpeed,
        }),
      });

      if (hitlDraft.applyColorGrade && onSelectColorGrade) {
        onSelectColorGrade(hitlDraft.colorGrade);
      }
      if (onSetFrei0rEffects) {
        onSetFrei0rEffects(chosenEffects);
      }
      if (hitlDraft.applyTransition) {
        onSelectTransition && onSelectTransition(hitlDraft.transitionId);
        onChangeTransitionDuration && onChangeTransitionDuration(hitlDraft.transitionDuration);
      }
      if (hitlDraft.applyQuickEdit) {
        onSelectAspectRatio && onSelectAspectRatio(hitlDraft.aspectRatio);
        onChangePlaybackSpeed && onChangePlaybackSpeed(hitlDraft.playbackSpeed);
      }

      setStatusNotice(
        `Applied ${hitlProposal.recommended_suite.name} preset (${chosenEffects.length} effect${chosenEffects.length === 1 ? '' : 's'}, ${hitlDraft.transitionName}).`
      );
      setHitlProposal(null);
      setHitlDraft(null);
    } catch (e) {
      setStatusNotice(`Apply failed: ${e.message}`);
    } finally {
      setIsApplying(false);
    }
  };

  const toggleDraftEffect = (id) => {
    setHitlDraft((prev) => ({
      ...prev,
      effects: prev.effects.map((e) => (e.id === id ? { ...e, enabled: !e.enabled } : e)),
    }));
  };

  return (
    <div className="flex flex-col h-full space-y-2.5 overflow-y-auto pr-0.5 max-h-[385px]">
      {/* 1. Dedicated NLE Suite Selector */}
      <div className="grid grid-cols-3 gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
        {suites.map((suite) => {
          const isSelected = suite.id === activeSuiteId;
          return (
            <button
              key={suite.id}
              onClick={() => setActiveSuiteId(suite.id)}
              className={`py-1.5 px-2 rounded-md text-xs font-medium transition text-center ${
                isSelected
                  ? 'bg-slate-800 text-white border border-slate-600 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 border border-transparent'
              }`}
            >
              {suite.name}
            </button>
          );
        })}
      </div>

      {/* 2. HITL Auto-Match Bar */}
      <div className="bg-slate-950/90 border border-slate-800 rounded-lg p-2.5 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="text-xs font-semibold text-slate-100">
                Auto-Match Video (HITL)
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                {activeAsset ? activeAsset.file_name : 'Active Timeline'}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Analyzes loaded clip specs and proposes matching effects &amp; transitions for review.
            </p>
          </div>

          <div className="flex items-center space-x-1.5">
            <select
              value={intensity}
              onChange={(e) => setIntensity(e.target.value)}
              aria-label="Edit intensity"
              className="bg-slate-900 border border-slate-700 rounded-md px-2 py-1 text-[11px] text-slate-200 focus:outline-none focus:border-cyan-500"
            >
              <option value="subtle">Subtle</option>
              <option value="balanced">Balanced</option>
              <option value="dynamic">Dynamic</option>
            </select>
            <button
              onClick={() => handleAnalyzeVideo(true)}
              disabled={isAnalyzing}
              className="px-2.5 py-1 rounded-md bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 text-[11px] font-semibold transition"
            >
              {isAnalyzing ? 'Analyzing...' : 'Auto-Match'}
            </button>
            <button
              onClick={() => handleAnalyzeVideo(false)}
              disabled={isAnalyzing}
              title={`Match using ${currentSuite.name}`}
              className="px-2 py-1 rounded-md bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-[11px] font-medium transition"
            >
              Match {currentSuite.name.split(' ')[0]}
            </button>
          </div>
        </div>

        {/* HITL Review Drawer */}
        {hitlProposal && hitlDraft && (
          <div className="mt-2 pt-2.5 border-t border-slate-800 space-y-2.5">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-[11px] font-semibold text-cyan-300 uppercase tracking-wide">
                    Review Proposal — {hitlProposal.recommended_suite.name}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950/70 border border-emerald-800/70 text-emerald-300">
                    {Math.round((hitlProposal.confidence || 0.9) * 100)}% Match
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">{hitlProposal.rationale}</p>
              </div>
              <button
                onClick={() => {
                  setHitlProposal(null);
                  setHitlDraft(null);
                }}
                className="text-slate-500 hover:text-slate-300 p-0.5"
                title="Dismiss proposal"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              {/* Color Grade toggle */}
              <label className="flex items-center justify-between bg-slate-900/90 border border-slate-800 rounded-md px-2.5 py-1.5 cursor-pointer">
                <span className="text-slate-300">
                  Color Grade: <strong className="text-slate-100 font-mono">{hitlDraft.colorGrade}</strong>
                </span>
                <input
                  type="checkbox"
                  checked={hitlDraft.applyColorGrade}
                  onChange={(e) => setHitlDraft({ ...hitlDraft, applyColorGrade: e.target.checked })}
                  className="accent-cyan-400"
                />
              </label>

              {/* Transition toggle */}
              <label className="flex items-center justify-between bg-slate-900/90 border border-slate-800 rounded-md px-2.5 py-1.5 cursor-pointer">
                <span className="text-slate-300">
                  Transition: <strong className="text-slate-100">{hitlDraft.transitionName}</strong> ({hitlDraft.transitionDuration}s)
                </span>
                <input
                  type="checkbox"
                  checked={hitlDraft.applyTransition}
                  onChange={(e) => setHitlDraft({ ...hitlDraft, applyTransition: e.target.checked })}
                  className="accent-cyan-400"
                />
              </label>

              {/* Effects toggles */}
              {hitlDraft.effects.map((eff) => (
                <label
                  key={eff.id}
                  className="flex items-center justify-between bg-slate-900/90 border border-slate-800 rounded-md px-2.5 py-1.5 cursor-pointer"
                >
                  <span className="text-slate-300">
                    Effect: <strong className="text-slate-100">{eff.name}</strong>
                  </span>
                  <input
                    type="checkbox"
                    checked={eff.enabled}
                    onChange={() => toggleDraftEffect(eff.id)}
                    className="accent-cyan-400"
                  />
                </label>
              ))}

              {/* Quick Edit toggle */}
              <label className="flex items-center justify-between bg-slate-900/90 border border-slate-800 rounded-md px-2.5 py-1.5 cursor-pointer">
                <span className="text-slate-300">
                  Framing &amp; Speed: <strong className="text-slate-100">{hitlDraft.aspectRatio} @ {hitlDraft.playbackSpeed}x</strong>
                </span>
                <input
                  type="checkbox"
                  checked={hitlDraft.applyQuickEdit}
                  onChange={(e) => setHitlDraft({ ...hitlDraft, applyQuickEdit: e.target.checked })}
                  className="accent-cyan-400"
                />
              </label>
            </div>

            <div className="flex items-center justify-end space-x-2 pt-1">
              <button
                onClick={() => {
                  setHitlProposal(null);
                  setHitlDraft(null);
                }}
                className="px-3 py-1 rounded-md bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-300 text-xs transition"
              >
                Discard
              </button>
              <button
                onClick={handleApproveHitl}
                disabled={isApplying}
                className="px-3 py-1 rounded-md bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 text-xs font-semibold flex items-center space-x-1.5 transition"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{isApplying ? 'Applying...' : 'Approve & Apply'}</span>
              </button>
            </div>
          </div>
        )}

        {statusNotice && (
          <div className="text-[11px] font-mono text-emerald-300 bg-emerald-950/40 border border-emerald-900/70 rounded px-2.5 py-1">
            {statusNotice}
          </div>
        )}
      </div>

      {/* 3. Lightweight Quick-Edit Bar */}
      <div className="bg-slate-950/90 border border-slate-800 rounded-lg p-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-1.5">
            <Sliders className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[11px] font-semibold text-slate-200 uppercase tracking-wider">Quick Edit</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={onQuickSplit}
              className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-[11px] text-slate-200 flex items-center space-x-1 transition"
            >
              <Scissors className="w-3 h-3 text-cyan-400" />
              <span>Split</span>
            </button>
            <button
              onClick={() => onQuickTrimTail && onQuickTrimTail(-0.5)}
              className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-[11px] font-mono text-slate-200 transition"
              title="Trim 0.5s from active clip tail"
            >
              Trim -0.5s
            </button>
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded p-0.5">
              <Gauge className="w-3 h-3 text-slate-400 mx-1" />
              {[0.75, 1.0, 1.25, 1.5].map((spd) => (
                <button
                  key={spd}
                  onClick={() => onChangePlaybackSpeed && onChangePlaybackSpeed(spd)}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-mono transition ${
                    playbackSpeed === spd ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {spd}x
                </button>
              ))}
            </div>
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded p-0.5">
              {['16:9', '9:16', '1:1'].map((ar) => (
                <button
                  key={ar}
                  onClick={() => onSelectAspectRatio && onSelectAspectRatio(ar)}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-mono transition ${
                    aspectRatio === ar ? 'bg-slate-700 text-white font-semibold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {ar}
                </button>
              ))}
            </div>
            <button
              onClick={onResetClean}
              title="Reset effects and grade to clean Rec.709"
              className="px-2 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[11px] text-slate-400 hover:text-slate-200 flex items-center space-x-1 transition"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4. Suite Presets (Effects / Transitions / Color Grades) */}
      <div className="bg-slate-950/90 border border-slate-800 rounded-lg p-2.5 space-y-2">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div>
            <span className="text-xs font-semibold text-slate-100">{currentSuite.name} Library</span>
            <span className="ml-2 text-[11px] text-slate-400">{currentSuite.subtitle}</span>
          </div>
          <div className="flex items-center space-x-1 text-[11px]">
            {[
              { id: 'effects', label: 'Effects', icon: Film },
              { id: 'transitions', label: 'Transitions', icon: Layers },
              { id: 'luts', label: 'Color', icon: Palette },
            ].map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-2 py-1 rounded flex items-center space-x-1 transition ${
                    activeCategory === cat.id
                      ? 'bg-slate-800 text-cyan-300 font-semibold border border-slate-700'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {activeCategory === 'effects' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {currentSuite.effects.map((eff) => {
              const isActive = activeFrei0rEffects.includes(eff.id);
              return (
                <button
                  key={eff.id}
                  onClick={() => onToggleFrei0rEffect && onToggleFrei0rEffect(eff.id)}
                  className={`p-2 rounded-md border text-left transition ${
                    isActive
                      ? 'bg-cyan-950/50 border-cyan-500/70 text-white'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold">{eff.name}</span>
                    {isActive ? (
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                    ) : (
                      <span className="text-[10px] font-mono text-slate-500">{eff.category}</span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">{eff.note}</p>
                </button>
              );
            })}
          </div>
        )}

        {activeCategory === 'transitions' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
              <span>Transition Duration</span>
              <div className="flex items-center space-x-2">
                <input
                  type="range"
                  min="0.25"
                  max="1.5"
                  step="0.05"
                  value={transitionDuration}
                  onChange={(e) => onChangeTransitionDuration && onChangeTransitionDuration(parseFloat(e.target.value))}
                  className="w-28 accent-cyan-400"
                />
                <span className="font-mono text-slate-200 w-10 text-right">{transitionDuration.toFixed(2)}s</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {currentSuite.transitions.map((tr) => {
                const isActive = selectedTransition === tr.id;
                return (
                  <button
                    key={tr.id}
                    onClick={() => {
                      onSelectTransition && onSelectTransition(tr.id);
                      if (tr.duration && onChangeTransitionDuration) {
                        onChangeTransitionDuration(tr.duration);
                      }
                    }}
                    className={`p-2 rounded-md border text-left transition ${
                      isActive
                        ? 'bg-cyan-950/50 border-cyan-500/70 text-white'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold">{tr.name}</span>
                      <span className="text-[10px] font-mono text-slate-400">{tr.duration}s</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">{tr.note}</p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {activeCategory === 'luts' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {currentSuite.luts.map((lut) => {
              const isActive = activeColorGrade === lut.id;
              return (
                <button
                  key={lut.id}
                  onClick={() => onSelectColorGrade && onSelectColorGrade(lut.id)}
                  className={`p-2 rounded-md border text-left transition ${
                    isActive
                      ? 'bg-cyan-950/50 border-cyan-500/70 text-white'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold">{lut.name}</span>
                    {isActive && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">{lut.note}</p>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
