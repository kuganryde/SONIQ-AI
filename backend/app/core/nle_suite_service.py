"""
RYDETECH GLOBAL ENTERPRISE — VYBE AI
Dedicated NLE Suite Engine (CapCut, DaVinci Resolve, Final Cut Pro)
Lightweight professional effects, transitions, quick-edit presets, and HITL video auto-matching.
All presets map directly to native FFmpeg / Frei0r / MLT render primitives on srv1302021.
"""

import logging
import uuid
from datetime import datetime, timezone
from typing import Any, Dict, List, Optional

from app.core.project_service import ProjectService

logger = logging.getLogger("vybe.nle_suite")


class NLESuiteService:
    """
    Provides curated lightweight presets inspired by CapCut, DaVinci Resolve,
    and Final Cut Pro, plus video-aware Human-in-the-Loop (HITL) auto-matching.
    """

    SUITES: Dict[str, Dict[str, Any]] = {
        "capcut": {
            "id": "capcut",
            "name": "CapCut",
            "subtitle": "Short-Form & Kinetic Creator Suite",
            "description": "Fast-paced transitions, punchy kinetic effects, and social-ready framing.",
            "default_lut": "teal_orange",
            "default_transition": "zoomin",
            "default_transition_duration": 0.35,
            "default_speed": 1.10,
            "luts": [
                {"id": "teal_orange", "name": "Creator Contrast", "note": "Balanced punchy skin tones with cool shadows"},
                {"id": "cyberpunk_neon", "name": "Neon Pop", "note": "High-energy chroma lift for social hooks"},
                {"id": "clean", "name": "Natural Rec.709", "note": "Neutral broadcast baseline"},
            ],
            "effects": [
                {"id": "rgbsplit0r:0.04", "name": "Chromatic Beat Split", "category": "Kinetic", "note": "RGB channel offset accent for high-energy cuts"},
                {"id": "glow:0.4", "name": "Soft Halation Bloom", "category": "Light", "note": "Clean highlight diffusion"},
                {"id": "glitch0r", "name": "Signal Glitch Pulse", "category": "Stylized", "note": "Brief digital distortion accent"},
                {"id": "pixeliz0r:0.02", "name": "Mosaic Censored Cut", "category": "Stylized", "note": "Lightweight retro mosaic filter"},
            ],
            "transitions": [
                {"id": "zoomin", "name": "Zoom Punch", "duration": 0.35, "note": "Rapid forward focal push"},
                {"id": "hblur", "name": "Whip Pan Blur", "duration": 0.30, "note": "Directional motion-streak cut"},
                {"id": "slideleft", "name": "Push Slide Left", "duration": 0.40, "note": "Kinetic horizontal slide"},
                {"id": "pixelize", "name": "Mosaic Dissolve", "duration": 0.35, "note": "Digital block transition"},
            ],
        },
        "davinci_resolve": {
            "id": "davinci_resolve",
            "name": "DaVinci Resolve",
            "subtitle": "Cinema Color Science & Optical Finishing",
            "description": "Film print emulation LUTs, subtle optical halation, and theatrical dissolves.",
            "default_lut": "kodak_2383",
            "default_transition": "dissolve",
            "default_transition_duration": 0.85,
            "default_speed": 1.0,
            "luts": [
                {"id": "kodak_2383", "name": "Kodak 2383 Film Print", "note": "Industry print stock with amber highlights & teal toe"},
                {"id": "fuji_3513", "name": "Fuji 3513 Cinema", "note": "Soft highlight roll-off and emerald shadow depth"},
                {"id": "noir_silver", "name": "Silver Halide Monochrome", "note": "High-contrast theatrical black and white"},
                {"id": "vintage_warm", "name": "35mm Warm Emulsion", "note": "Warm analog print curve"},
            ],
            "effects": [
                {"id": "glow:0.4", "name": "Film Halation Diffusion", "category": "Optical", "note": "Subtle specular highlight glow"},
                {"id": "vignette", "name": "Anamorphic Vignette", "category": "Lens", "note": "Optical corner falloff for subject focus"},
                {"id": "sobel", "name": "Edge Contour Pass", "category": "Stylized", "note": "Analytical luminance edge trace"},
            ],
            "transitions": [
                {"id": "dissolve", "name": "Optical Cross Dissolve", "duration": 0.85, "note": "Smooth filmic blend"},
                {"id": "fadeblack", "name": "Dip to Black", "duration": 0.90, "note": "Classic scene closure fade"},
                {"id": "wipeleft", "name": "Linear Cinema Wipe", "duration": 0.65, "note": "Clean directional curtain wipe"},
                {"id": "wiperight", "name": "Reverse Cinema Wipe", "duration": 0.65, "note": "Right-to-left boundary wipe"},
            ],
        },
        "final_cut_pro": {
            "id": "final_cut_pro",
            "name": "Final Cut Pro",
            "subtitle": "Magnetic Precision & Broadcast Polish",
            "description": "Clean commercial pacing, smooth directional flows, and crisp broadcast optics.",
            "default_lut": "fuji_3513",
            "default_transition": "slideright",
            "default_transition_duration": 0.55,
            "default_speed": 1.0,
            "luts": [
                {"id": "clean", "name": "Broadcast Rec.709", "note": "Color-accurate commercial standard"},
                {"id": "fuji_3513", "name": "Editorial Film Balance", "note": "Refined highlight control for corporate & doc"},
                {"id": "kodak_2383", "name": "Commercial Print", "note": "Polished theatrical contrast"},
                {"id": "vintage_warm", "name": "Warm Documentary", "note": "Gentle warm tonal lift"},
            ],
            "effects": [
                {"id": "vignette", "name": "Lens Vignette Falloff", "category": "Lens", "note": "Subtle framing vignette"},
                {"id": "glow:0.4", "name": "Broadcast Optical Bloom", "category": "Light", "note": "Controlled specular sheen"},
                {"id": "rgbsplit0r:0.04", "name": "Prism Edge Accent", "category": "Accent", "note": "Subtle chromatic separation"},
            ],
            "transitions": [
                {"id": "dissolve", "name": "Flow Dissolve", "duration": 0.60, "note": "Balanced editorial crossfade"},
                {"id": "slideright", "name": "Directional Flow Slide", "duration": 0.50, "note": "Crisp broadcast slide"},
                {"id": "circlecrop", "name": "Iris Aperture Reveal", "duration": 0.65, "note": "Clean circular focus reveal"},
                {"id": "radial", "name": "Clock Radial Sweep", "duration": 0.70, "note": "Angular broadcast transition"},
            ],
        },
    }

    @classmethod
    def get_library(cls) -> Dict[str, Any]:
        return {
            "suites": list(cls.SUITES.values()),
            "supported_intensities": ["subtle", "balanced", "dynamic"],
            "quick_edit_speeds": [0.75, 1.0, 1.25, 1.5],
        }

    @classmethod
    def analyze_video_for_hitl(
        cls,
        asset_id: Optional[str] = None,
        preferred_suite: Optional[str] = None,
        intensity: str = "balanced",
        fallback_duration: float = 10.0,
        fallback_aspect: str = "16:9",
    ) -> Dict[str, Any]:
        """
        Inspects loaded video metadata and proposes a matching NLE suite,
        color grade, lightweight effects, transition, and quick-edit parameters
        for explicit Human-in-the-Loop (HITL) review before applying.
        """
        asset = ProjectService.get_asset(asset_id) if asset_id else None

        width = int((asset or {}).get("width") or (1080 if fallback_aspect == "9:16" else 1920))
        height = int((asset or {}).get("height") or (1920 if fallback_aspect == "9:16" else 1080))
        fps = float((asset or {}).get("frame_rate") or 30.0)
        duration = float((asset or {}).get("duration_seconds") or fallback_duration or 10.0)
        has_audio = bool((asset or {}).get("audio_codec"))
        asset_name = (asset or {}).get("file_name") or "Active Timeline Clip"

        # Determine aspect profile
        if height > width:
            detected_aspect = "9:16"
            orientation = "vertical"
        elif abs(width - height) < 40:
            detected_aspect = "1:1"
            orientation = "square"
        else:
            detected_aspect = "16:9"
            orientation = "widescreen"

        # Auto-select NLE suite based on video telemetry unless user pinned one
        if preferred_suite in cls.SUITES:
            suite_id = preferred_suite
            selection_reason = f"Matched using user-selected {cls.SUITES[suite_id]['name']} profile tuned to {width}x{height} @ {fps:.0f}fps ({duration:.1f}s)."
        elif orientation == "vertical" or duration <= 12.0:
            suite_id = "capcut"
            selection_reason = f"Detected {orientation} / short-form runtime ({width}x{height}, {duration:.1f}s @ {fps:.0f}fps) — auto-matched CapCut kinetic pacing."
        elif fps <= 25.5 or duration >= 25.0:
            suite_id = "davinci_resolve"
            selection_reason = f"Detected cinema-length widescreen footage ({width}x{height}, {duration:.1f}s @ {fps:.0f}fps) — auto-matched DaVinci Resolve film grading."
        else:
            suite_id = "final_cut_pro"
            selection_reason = f"Detected broadcast widescreen footage ({width}x{height}, {duration:.1f}s @ {fps:.0f}fps) — auto-matched Final Cut Pro editorial balance."

        suite = cls.SUITES[suite_id]
        intensity = intensity if intensity in ("subtle", "balanced", "dynamic") else "balanced"

        # Build lightweight effect recommendations scaled by intensity
        proposed_effects: List[Dict[str, Any]] = []
        if suite_id == "capcut":
            if intensity == "subtle":
                eff_ids = ["glow:0.4"]
            elif intensity == "dynamic":
                eff_ids = ["rgbsplit0r:0.04", "glow:0.4"]
            else:
                eff_ids = ["glow:0.4", "rgbsplit0r:0.04"]
            transition_id = "zoomin" if intensity != "subtle" else "slideleft"
            transition_dur = 0.30 if intensity == "dynamic" else 0.40
            speed = 1.15 if intensity == "dynamic" else (1.05 if intensity == "balanced" else 1.0)
        elif suite_id == "davinci_resolve":
            if intensity == "subtle":
                eff_ids = ["vignette"]
            elif intensity == "dynamic":
                eff_ids = ["glow:0.4", "vignette"]
            else:
                eff_ids = ["vignette", "glow:0.4"]
            transition_id = "dissolve" if intensity != "dynamic" else "fadeblack"
            transition_dur = 0.85 if intensity != "dynamic" else 0.70
            speed = 1.0
        else:  # final_cut_pro
            if intensity == "subtle":
                eff_ids = ["vignette"]
            elif intensity == "dynamic":
                eff_ids = ["glow:0.4", "vignette"]
            else:
                eff_ids = ["vignette"]
            transition_id = "dissolve" if intensity == "subtle" else "slideright"
            transition_dur = 0.60 if intensity == "subtle" else 0.50
            speed = 1.0

        effect_lookup = {e["id"]: e for e in suite["effects"]}
        for eid in eff_ids:
            if eid in effect_lookup:
                item = dict(effect_lookup[eid])
                item["enabled"] = True
                proposed_effects.append(item)

        trans_lookup = {t["id"]: t for t in suite["transitions"]}
        chosen_trans = trans_lookup.get(transition_id, suite["transitions"][0])

        proposal_id = f"nle_hitl_{uuid.uuid4().hex[:8]}"
        return {
            "proposal_id": proposal_id,
            "generated_at": datetime.now(timezone.utc).isoformat(),
            "requires_hitl_approval": True,
            "asset": {
                "id": asset_id,
                "name": asset_name,
                "resolution": f"{width}x{height}",
                "aspect_ratio": detected_aspect,
                "orientation": orientation,
                "fps": round(fps, 2),
                "duration_seconds": round(duration, 2),
                "has_audio": has_audio,
            },
            "recommended_suite": {
                "id": suite["id"],
                "name": suite["name"],
                "subtitle": suite["subtitle"],
            },
            "intensity": intensity,
            "confidence": 0.94 if asset else 0.88,
            "rationale": selection_reason,
            "proposal": {
                "color_grade": suite["default_lut"],
                "effects": proposed_effects,
                "transition": {
                    "id": chosen_trans["id"],
                    "name": chosen_trans["name"],
                    "duration": transition_dur,
                },
                "quick_edit": {
                    "aspect_ratio": detected_aspect,
                    "playback_speed": speed,
                    "trim_head_sec": 0.0,
                    "trim_tail_sec": 0.0,
                },
            },
        }
