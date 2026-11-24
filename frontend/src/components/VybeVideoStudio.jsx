import React, { useState, useEffect } from 'react';
import { 
  Film, 
  Bot, 
  Sparkles, 
  Sliders, 
  Smartphone, 
  DownloadCloud, 
  FolderOpen, 
  Plus, 
  RefreshCw, 
  Layers, 
  Scissors,
  CheckCircle2,
  Tv
} from 'lucide-react';
import VybePlayer from './VybePlayer';
import VybeTimeline from './VybeTimeline';
import VybeAssetBin from './VybeAssetBin';
import VybeAIDirector from './VybeAIDirector';
import VybeMotionStudio from './VybeMotionStudio';
import VybeSocialStudio from './VybeSocialStudio';
import VybeRenderQueue from './VybeRenderQueue';
import VybeUpliftBanner from './VybeUpliftBanner';
import VybeHITLModal from './VybeHITLModal';
import { apiUrl, safeFetchJson, resolveAudioUrl } from '../config/api';

export default function VybeVideoStudio({ onTransferAudioToSoniq }) {
  const [activePanel, setActivePanel] = useState('assets'); // 'assets', 'director', 'motion', 'social', 'render'
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [currentTime, setCurrentTime] = useState(0.0);
  const [duration, setDuration] = useState(30.0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [colorGrade, setColorGrade] = useState('clean');
  const [showSafeZones, setShowSafeZones] = useState(false);
  const [activeOverlayTitle, setActiveOverlayTitle] = useState('');
  const [activeVideoUrl, setActiveVideoUrl] = useState('');
  const [assets, setAssets] = useState([]);
  const [videoClips, setVideoClips] = useState([]);
  const [audioClips, setAudioClips] = useState([]);
  const [overlayClips, setOverlayClips] = useState([]);
  const [isLoadingDemo, setIsLoadingDemo] = useState(false);
  const [projectName, setProjectName] = useState('VYBE Cinematic Showreel');
  const [isHITLOpen, setIsHITLOpen] = useState(false);
  const [selectedAssetForUplift, setSelectedAssetForUplift] = useState(null);
  const [showUpliftBanner, setShowUpliftBanner] = useState(true);

  // Load initial demo project and assets
  const loadDemoShowreel = async () => {
    setIsLoadingDemo(true);
    try {
      const demoData = await safeFetchJson(apiUrl('/api/v1/projects/demo/vybe'));
      setProjectName(demoData.name || 'VYBE Cinematic Showreel');
      setAspectRatio(demoData.aspect_ratio || '16:9');
      const loadedAssets = demoData.assets || [];
      setAssets(loadedAssets);

      if (loadedAssets.length > 0) {
        // Set first asset as active video preview
        const first = loadedAssets[0];
        setActiveVideoUrl(first.proxy_stream_url || first.stream_url);

        // Populate initial timeline clips from demo assets
        const initialVideoClips = [];
        const initialAudioClips = [];
        let curTime = 0.0;

        loadedAssets.forEach((a, idx) => {
          const clipDur = a.duration_seconds || 4.0;
          initialVideoClips.push({
            id: `clip_v_${idx + 1}`,
            name: a.file_name,
            asset_id: a.id,
            start_time: curTime,
            duration: clipDur,
            file_path: a.file_path,
            stream_url: a.proxy_stream_url || a.stream_url
          });

          if (a.audio_codec) {
            initialAudioClips.push({
              id: `clip_a_${idx + 1}`,
              name: `Stem: ${a.file_name}`,
              asset_id: a.id,
              start_time: curTime,
              duration: clipDur
            });
          }
          curTime += clipDur;
        });

        setVideoClips(initialVideoClips);
        setAudioClips(initialAudioClips);
        setDuration(Math.max(20.0, curTime + 5.0));

        // Add default brand overlay
        setOverlayClips([
          { id: 'overlay_1', title: 'RYDETECH VYBE AI', start_time: 0.0, duration: 4.0 },
          { id: 'overlay_2', title: 'SOVEREIGN MEDIA SUITE', start_time: 5.0, duration: 4.0 }
        ]);
        setActiveOverlayTitle('RYDETECH VYBE AI');
      }
    } catch (e) {
      console.error('Failed to load VYBE demo project:', e);
    } finally {
      setIsLoadingDemo(false);
    }
  };

  useEffect(() => {
    loadDemoShowreel();
  }, []);

  // Update active video clip based on playhead position
  useEffect(() => {
    const currentVideo = videoClips.find(
      c => currentTime >= c.start_time && currentTime < c.start_time + c.duration
    );
    if (currentVideo && currentVideo.stream_url) {
      if (activeVideoUrl !== currentVideo.stream_url) {
        setActiveVideoUrl(currentVideo.stream_url);
      }
    }

    // Check overlay title active at current playhead
    const currentOverlay = overlayClips.find(
      c => currentTime >= c.start_time && currentTime < c.start_time + c.duration
    );
    if (currentOverlay) {
      setActiveOverlayTitle(currentOverlay.title);
    } else {
      setActiveOverlayTitle('');
    }
  }, [currentTime, videoClips, overlayClips]);

  // Playhead timer animation when playing
  useEffect(() => {
    let animFrame;
    let lastTime = performance.now();

    const loop = (now) => {
      if (isPlaying) {
        const delta = (now - lastTime) / 1000;
        setCurrentTime(prev => {
          const next = prev + delta;
          if (next >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return next;
        });
        lastTime = now;
        animFrame = requestAnimationFrame(loop);
      }
    };

    if (isPlaying) {
      lastTime = performance.now();
      animFrame = requestAnimationFrame(loop);
    }
    return () => cancelAnimationFrame(animFrame);
  }, [isPlaying, duration]);

  const handleAddAssetToTimeline = (asset) => {
    const newClipId = `clip_v_${Date.now()}`;
    const startTime = currentTime;
    const clipDur = asset.duration_seconds || 4.0;

    const newVideoClip = {
      id: newClipId,
      name: asset.file_name,
      asset_id: asset.id,
      start_time: startTime,
      duration: clipDur,
      file_path: asset.file_path,
      stream_url: asset.proxy_stream_url || asset.stream_url
    };

    setVideoClips(prev => [...prev, newVideoClip]);
    if (asset.audio_codec) {
      setAudioClips(prev => [
        ...prev,
        {
          id: `clip_a_${Date.now()}`,
          name: `Audio: ${asset.file_name}`,
          asset_id: asset.id,
          start_time: startTime,
          duration: clipDur
        }
      ]);
    }
    setActiveVideoUrl(asset.proxy_stream_url || asset.stream_url);
    if (startTime + clipDur > duration) {
      setDuration(startTime + clipDur + 5.0);
    }
  };

  const handleSplitClip = (splitTime) => {
    setVideoClips(prev => {
      const idx = prev.findIndex(c => splitTime > c.start_time && splitTime < c.start_time + c.duration);
      if (idx === -1) return prev;
      const target = prev[idx];
      const firstPartDur = splitTime - target.start_time;
      const secondPartDur = target.duration - firstPartDur;

      const firstPart = { ...target, duration: firstPartDur };
      const secondPart = {
        ...target,
        id: `clip_split_${Date.now()}`,
        start_time: splitTime,
        duration: secondPartDur
      };

      const copy = [...prev];
      copy.splice(idx, 1, firstPart, secondPart);
      return copy;
    });
  };

  const handleDeleteClip = (clipId) => {
    setVideoClips(prev => prev.filter(c => c.id !== clipId));
    setAudioClips(prev => prev.filter(c => c.id !== clipId));
    setOverlayClips(prev => prev.filter(c => c.id !== clipId));
  };

  const handleAddTitleOverlay = (titleText) => {
    const newOverlay = {
      id: `overlay_${Date.now()}`,
      title: titleText,
      start_time: currentTime,
      duration: 3.5
    };
    setOverlayClips(prev => [...prev, newOverlay]);
    setActiveOverlayTitle(titleText);
  };

  const handleApplyStoryboard = (sb) => {
    if (!sb || !sb.scenes) return;
    let timeCursor = 0.0;
    const newVideo = [];
    const newAudio = [];
    const newOverlay = [];

    sb.scenes.forEach((sc, idx) => {
      const scDur = sc.duration_sec || 3.0;
      newVideo.push({
        id: `clip_sb_v_${idx + 1}`,
        name: `Scene ${sc.scene_number}: ${sc.shot_type}`,
        start_time: timeCursor,
        duration: scDur,
        stream_url: assets[idx % (assets.length || 1)]?.proxy_stream_url || activeVideoUrl
      });

      newAudio.push({
        id: `clip_sb_a_${idx + 1}`,
        name: `Cue: ${sc.audio_cue}`,
        start_time: timeCursor,
        duration: scDur
      });

      if (sc.overlay_text) {
        newOverlay.push({
          id: `clip_sb_o_${idx + 1}`,
          title: sc.overlay_text,
          start_time: timeCursor,
          duration: Math.min(scDur, 2.5)
        });
      }
      timeCursor += scDur;
    });

    setVideoClips(newVideo);
    setAudioClips(newAudio);
    setOverlayClips(newOverlay);
    setDuration(timeCursor + 2.0);
    setAspectRatio(sb.aspect_ratio || '16:9');
    setActivePanel('assets');
  };

  const handleOpenUplift = (assetToUplift) => {
    const target = assetToUplift || assets.find(a => a.media_type === 'video') || assets[0];
    if (target) {
      setSelectedAssetForUplift(target);
      setIsHITLOpen(true);
    }
  };

  const handleApplyUplift = (upliftedData) => {
    if (!upliftedData) return;
    if (upliftedData.video_clips) setVideoClips(upliftedData.video_clips);
    if (upliftedData.audio_clips) setAudioClips(upliftedData.audio_clips);
    if (upliftedData.overlay_clips) setOverlayClips(upliftedData.overlay_clips);
    if (upliftedData.color_grade) setColorGrade(upliftedData.color_grade);
    if (upliftedData.aspect_ratio) setAspectRatio(upliftedData.aspect_ratio);
    if (upliftedData.hook_title) setActiveOverlayTitle(upliftedData.hook_title);
    if (upliftedData.total_duration) setDuration(upliftedData.total_duration);
    setCurrentTime(0.0);
    setIsPlaying(true);
  };

  const handleApplyAndRender = async (upliftedData) => {
    handleApplyUplift(upliftedData);
    setActivePanel('render');
    try {
      await safeFetchJson(apiUrl('/api/v1/render/video'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          project_id: 'proj_vybe_demo',
          profile_name: 'Web 1080p H.264',
          output_format: 'mp4',
          resolution: upliftedData.aspect_ratio === '9:16' ? '9:16' : '1080p',
          frame_rate: 30.0,
          clips: upliftedData.video_clips || []
        })
      });
    } catch (e) {
      console.error("Failed to auto-trigger render:", e);
    }
  };

  const tabs = [
    { id: 'assets', label: 'Media Bin', icon: FolderOpen, count: assets.length },
    { id: 'director', label: 'AI Director', icon: Bot, badge: 'Ollama' },
    { id: 'motion', label: 'Motion VFX', icon: Sparkles },
    { id: 'social', label: 'Social Studio', icon: Smartphone },
    { id: 'render', label: 'Export & Render', icon: DownloadCloud }
  ];

  return (
    <div className="flex flex-col space-y-3 p-3 max-w-[1920px] mx-auto animate-fade-in">
      {/* 1. Studio Header & Project Bar */}
      <div className="bg-[#0b0e17] border border-slate-800 rounded-xl px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center text-black font-black font-mono text-sm shadow-md shadow-cyan-500/20">
            VB
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-slate-100 font-mono text-sm tracking-wide">
                {projectName}
              </span>
              <span className="px-2 py-0.5 rounded bg-cyan-950 border border-cyan-700/60 text-cyan-300 font-mono text-[10px] font-bold">
                1080p @ 30fps
              </span>
              <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono text-[10px]">
                {aspectRatio}
              </span>
            </div>
            <div className="text-[10px] text-slate-400 font-mono">
              Sovereign Autonomous Media Production Studio • host: srv1302021
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleOpenUplift(assets[0])}
            className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 hover:from-cyan-300 hover:to-violet-400 text-black font-mono text-xs font-bold flex items-center space-x-1.5 shadow-md shadow-cyan-400/20 transition cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 fill-black" />
            <span>AI AUTO-UPLIFT (HITL)</span>
          </button>
          <button
            onClick={loadDemoShowreel}
            disabled={isLoadingDemo}
            className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-200 text-xs font-mono flex items-center space-x-1.5 transition shadow"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-cyan-400 ${isLoadingDemo ? 'animate-spin' : ''}`} />
            <span>RELOAD DEMO</span>
          </button>
        </div>
      </div>

      {/* Autonomous Video Uplift Quick Action Banner */}
      {showUpliftBanner && (
        <VybeUpliftBanner
          assetName={assets[0]?.file_name}
          onOpenUplift={() => handleOpenUplift(assets[0])}
          onDismiss={() => setShowUpliftBanner(false)}
        />
      )}
            <span>RELOAD DEMO SHOWREEL</span>
          </button>
        </div>
      </div>

      {/* 2. Main Studio Split Grid (Top Left: Inspector/Tools, Top Right: Monitor) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 min-h-[440px]">
        
        {/* Left Side: Modular Tool Panels (5 cols) */}
        <div className="lg:col-span-6 bg-[#0b0e17] border border-slate-800 rounded-xl p-3 flex flex-col shadow-xl">
          {/* Panel Selector Tabs */}
          <div className="flex flex-wrap items-center gap-1 pb-2.5 mb-3 border-b border-slate-800">
            {tabs.map((t) => {
              const Icon = t.icon;
              const isActive = activePanel === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActivePanel(t.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center space-x-1.5 transition ${
                    isActive 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/60 text-cyan-300 font-bold shadow-sm' 
                      : 'bg-slate-900/60 border border-slate-800/80 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{t.label}</span>
                  {t.count !== undefined && (
                    <span className="ml-1 px-1 py-0.2 rounded-full bg-slate-800 text-[9px] text-slate-300">
                      {t.count}
                    </span>
                  )}
                  {t.badge && (
                    <span className="px-1 py-0.2 rounded bg-violet-950 text-violet-300 text-[8px] font-bold">
                      {t.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Panel View */}
          <div className="flex-1 overflow-hidden">
            {activePanel === 'assets' && (
              <VybeAssetBin
                assets={assets}
                onUploadSuccess={(newAsset) => {
                  setAssets(prev => [newAsset, ...prev]);
                  handleAddAssetToTimeline(newAsset);
                }}
                onAddToTimeline={handleAddAssetToTimeline}
                onSelectForPreview={(asset) => {
                  setActiveVideoUrl(asset.proxy_stream_url || asset.stream_url);
                }}
                onOpenUplift={handleOpenUplift}
              />
            )}

            {activePanel === 'director' && (
              <VybeAIDirector
                currentAspectRatio={aspectRatio}
                onApplyStoryboard={handleApplyStoryboard}
              />
            )}

            {activePanel === 'motion' && (
              <VybeMotionStudio
                activeColorGrade={colorGrade}
                onSelectColorGrade={(g) => setColorGrade(g)}
                onAddTitleOverlay={handleAddTitleOverlay}
              />
            )}

            {activePanel === 'social' && (
              <VybeSocialStudio
                currentAspectRatio={aspectRatio}
                onSelectAspectRatio={(ar) => setAspectRatio(ar)}
                showSafeZones={showSafeZones}
                onToggleSafeZones={() => setShowSafeZones(!showSafeZones)}
              />
            )}

            {activePanel === 'render' && (
              <VybeRenderQueue
                currentResolution="1080p"
                currentAspectRatio={aspectRatio}
                timelineClips={videoClips}
              />
            )}
          </div>
        </div>

        {/* Right Side: Program Video Player (7 cols) */}
        <div className="lg:col-span-6 flex flex-col">
          <VybePlayer
            currentTime={currentTime}
            duration={duration}
            isPlaying={isPlaying}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onSeek={(t) => setCurrentTime(t)}
            aspectRatio={aspectRatio}
            onAspectRatioChange={(ar) => setAspectRatio(ar)}
            activeVideoUrl={activeVideoUrl}
            colorGrade={colorGrade}
            activeOverlayTitle={activeOverlayTitle}
            showSafeZones={showSafeZones}
            onToggleSafeZones={() => setShowSafeZones(!showSafeZones)}
          />
        </div>
      </div>

      {/* 3. Bottom Multitrack Timeline & Editing Workspace */}
      <VybeTimeline
        duration={duration}
        currentTime={currentTime}
        onSeek={(t) => setCurrentTime(t)}
        videoClips={videoClips}
        audioClips={audioClips}
        overlayClips={overlayClips}
        onSplitClip={handleSplitClip}
        onDeleteClip={handleDeleteClip}
        onSendToSoniq={onTransferAudioToSoniq}
      />
    </div>
  );
}
