"""
RYDETECH GLOBAL ENTERPRISE — VYBE AI
Tier 2: MLT (Media Lovin' Toolkit) & OpenShot Transition & Multi-Layer Alpha Compositing Engine

Enforces sovereign local media processing on srv1302021:
- Programmatic OpenShot/Kdenlive XML (.mlt) project generation.
- 16+ Hollywood Transition Styles: Dissolves, Directional Wipes, Push Slides, Iris Reveals, Zooms, Glitch Pixelation.
- Multi-Layer Alpha Compositing (Track V1 Video + Track V2 PIP/Overlay with transparency).
- Dual-Engine Render Execution: Native MLT ('melt') and FFmpeg FilterComplex ('xfade' + 'acrossfade' + 'overlay').
- Malaysian PDPA 2010 Sovereign Enclave Compliance.
"""

import os
import shutil
import logging
import asyncio
from pathlib import Path
from typing import List, Dict, Any, Optional, Tuple
import xml.etree.ElementTree as ET

logger = logging.getLogger("vybe.mlt")

class MLTTransitionService:
    """Manages transitions, multi-track alpha compositing, and MLT project generation."""

    TRANSITIONS = [
        {
            "id": "dissolve",
            "name": "Crossfade Dissolve",
            "category": "Dissolve",
            "ffmpeg_xfade": "dissolve",
            "mlt_service": "mix",
            "desc": "Smooth linear optical blend between outgoing and incoming clips."
        },
        {
            "id": "wipeleft",
            "name": "Horizontal Wipe (Left)",
            "category": "Wipe",
            "ffmpeg_xfade": "wipeleft",
            "mlt_service": "luma",
            "desc": "Classic cinema left-to-right progressive boundary wipe."
        },
        {
            "id": "wiperight",
            "name": "Horizontal Wipe (Right)",
            "category": "Wipe",
            "ffmpeg_xfade": "wiperight",
            "mlt_service": "luma",
            "desc": "Right-to-left progressive directional wipe."
        },
        {
            "id": "wipeup",
            "name": "Vertical Wipe (Up)",
            "category": "Wipe",
            "ffmpeg_xfade": "wipeup",
            "mlt_service": "luma",
            "desc": "Bottom-to-top progressive curtain wipe."
        },
        {
            "id": "wipedown",
            "name": "Vertical Wipe (Down)",
            "category": "Wipe",
            "ffmpeg_xfade": "wipedown",
            "mlt_service": "luma",
            "desc": "Top-to-bottom curtain wipe."
        },
        {
            "id": "slideleft",
            "name": "Push Slide (Left)",
            "category": "Slide",
            "ffmpeg_xfade": "slideleft",
            "mlt_service": "composite",
            "desc": "Incoming clip dynamically pushes the outgoing clip to the left."
        },
        {
            "id": "slideright",
            "name": "Push Slide (Right)",
            "category": "Slide",
            "ffmpeg_xfade": "slideright",
            "mlt_service": "composite",
            "desc": "Incoming clip pushes the outgoing clip to the right."
        },
        {
            "id": "circlecrop",
            "name": "Iris Circle Reveal",
            "category": "Iris",
            "ffmpeg_xfade": "circlecrop",
            "mlt_service": "luma",
            "desc": "Expanding circular aperture transition revealing incoming footage."
        },
        {
            "id": "radial",
            "name": "Radial Clock Wipe",
            "category": "Iris",
            "ffmpeg_xfade": "radial",
            "mlt_service": "luma",
            "desc": "360-degree rotational angular clock wipe."
        },
        {
            "id": "zoomin",
            "name": "High-Speed Zoom Punch",
            "category": "Zoom",
            "ffmpeg_xfade": "zoomin",
            "mlt_service": "affine",
            "desc": "Rapid forward camera push through the outgoing shot."
        },
        {
            "id": "pixelize",
            "name": "8-Bit Mosaic Dissolve",
            "category": "Retro",
            "ffmpeg_xfade": "pixelize",
            "mlt_service": "frei0r.xfade0r",
            "desc": "Digital mosaic resolution reduction crossfade."
        },
        {
            "id": "hblur",
            "name": "Horizontal Motion Streak",
            "category": "Blur",
            "ffmpeg_xfade": "hblur",
            "mlt_service": "mix",
            "desc": "High velocity horizontal blur streak simulating whip-pan."
        },
        {
            "id": "fadeblack",
            "name": "Dip to Black",
            "category": "Dip",
            "ffmpeg_xfade": "fadeblack",
            "mlt_service": "luma",
            "desc": "Fade down to complete blackness before rising into next scene."
        },
        {
            "id": "fadewhite",
            "name": "Flash to White",
            "category": "Dip",
            "ffmpeg_xfade": "fadewhite",
            "mlt_service": "luma",
            "desc": "High-impact specular flash to white transition."
        }
    ]

    COMPOSITING_MODES = [
        {
            "id": "single",
            "name": "Single Master Track",
            "desc": "Standard sequential cut without multi-layer overlay."
        },
        {
            "id": "pip_top_right",
            "name": "Picture-in-Picture (Top Right)",
            "desc": "Secondary video track scaled to corner with drop-shadow overlay.",
            "x": "W-w-24",
            "y": "24",
            "scale": 0.28
        },
        {
            "id": "pip_bottom_right",
            "name": "Picture-in-Picture (Bottom Right)",
            "desc": "Secondary video track anchored bottom-right.",
            "x": "W-w-24",
            "y": "H-h-24",
            "scale": 0.28
        },
        {
            "id": "split_horizontal",
            "name": "50/50 Dual Split Screen",
            "desc": "Side-by-side simultaneous playback of V1 and V2 tracks.",
            "scale": 0.5
        },
        {
            "id": "alpha_overlay",
            "name": "Full-Frame Alpha Matte",
            "desc": "Transparent ProRes / PNG alpha compositing directly over primary video."
        }
    ]

    @classmethod
    def get_catalog(cls) -> Dict[str, Any]:
        """Returns catalog of transitions, compositing modes, and engine status."""
        melt_path = shutil.which("melt")
        ffmpeg_path = shutil.which("ffmpeg")
        return {
            "transitions": cls.TRANSITIONS,
            "compositing_modes": cls.COMPOSITING_MODES,
            "engines_available": {
                "ffmpeg": bool(ffmpeg_path),
                "mlt_melt": bool(melt_path),
                "melt_path": melt_path,
                "ffmpeg_path": ffmpeg_path
            },
            "default_transition": "dissolve",
            "default_duration": 0.75
        }

    @classmethod
    def generate_mlt_xml(
        cls,
        project_name: str,
        clips: List[Dict[str, Any]],
        width: int = 1920,
        height: int = 1080,
        frame_rate: float = 30.0,
        transition_style: str = "dissolve",
        transition_duration: float = 0.75,
        overlay_clips: Optional[List[Dict[str, Any]]] = None
    ) -> str:
        """
        Generates standard OpenShot / Kdenlive compatible MLT XML project file.
        """
        root = ET.Element("mlt", {
            "version": "7.22.0",
            "title": project_name,
            "producer": "main_tractor"
        })

        # Profile
        ET.SubElement(root, "profile", {
            "id": f"prof_{width}x{height}",
            "width": str(width),
            "height": str(height),
            "progressive": "1",
            "frame_rate_num": str(int(frame_rate)),
            "frame_rate_den": "1",
            "display_aspect_num": "16" if width >= height else "9",
            "display_aspect_den": "9" if width >= height else "16"
        })

        fps = max(1.0, frame_rate)
        trans_frames = int(transition_duration * fps)

        # Build producers for primary V1 clips
        v1_entries = []
        for idx, clip in enumerate(clips):
            pid = f"prod_v1_{idx}"
            file_path = clip.get("file_path") or clip.get("stream_url") or ""
            dur_sec = float(clip.get("duration", 4.0))
            out_frame = max(1, int(dur_sec * fps) - 1)

            prod = ET.SubElement(root, "producer", {"id": pid, "in": "0", "out": str(out_frame)})
            ET.SubElement(prod, "property", {"name": "resource"}).text = file_path

            v1_entries.append({"producer_id": pid, "out_frame": out_frame})

        # Playlist V1
        playlist_v1 = ET.SubElement(root, "playlist", {"id": "playlist_v1"})
        for e in v1_entries:
            ET.SubElement(playlist_v1, "entry", {
                "producer": e["producer_id"],
                "in": "0",
                "out": str(e["out_frame"])
            })

        # Multitrack Tractor
        tractor = ET.SubElement(root, "tractor", {"id": "main_tractor"})
        multitrack = ET.SubElement(tractor, "multitrack")
        ET.SubElement(multitrack, "track", {"producer": "playlist_v1"})

        # If secondary overlay clips exist (V2 PIP / title track)
        if overlay_clips and len(overlay_clips) > 0:
            playlist_v2 = ET.SubElement(root, "playlist", {"id": "playlist_v2"})
            for idx, oclip in enumerate(overlay_clips):
                opid = f"prod_v2_{idx}"
                ofile = oclip.get("file_path") or ""
                odur = float(oclip.get("duration", 3.0))
                oout = max(1, int(odur * fps) - 1)

                oprod = ET.SubElement(root, "producer", {"id": opid, "in": "0", "out": str(oout)})
                ET.SubElement(oprod, "property", {"name": "resource"}).text = ofile
                ET.SubElement(playlist_v2, "entry", {"producer": opid, "in": "0", "out": str(oout)})

            ET.SubElement(multitrack, "track", {"producer": "playlist_v2"})

            # Composite transition for V1 + V2 overlay
            comp_trans = ET.SubElement(tractor, "transition", {"id": "comp_v1_v2"})
            ET.SubElement(comp_trans, "property", {"name": "mlt_service"}).text = "composite"
            ET.SubElement(comp_trans, "property", {"name": "a_track"}).text = "0"
            ET.SubElement(comp_trans, "property", {"name": "b_track"}).text = "1"
            ET.SubElement(comp_trans, "property", {"name": "geometry"}).text = "72%,4%:25%x25%:100"

        # Multi-clip transition between V1 clips
        t_meta = next((t for t in cls.TRANSITIONS if t["id"] == transition_style), cls.TRANSITIONS[0])
        mlt_serv = t_meta.get("mlt_service", "mix")

        trans = ET.SubElement(tractor, "transition", {"id": "trans_v1"})
        ET.SubElement(trans, "property", {"name": "mlt_service"}).text = mlt_serv
        ET.SubElement(trans, "property", {"name": "a_track"}).text = "0"
        ET.SubElement(trans, "property", {"name": "b_track"}).text = "0"

        xml_str = ET.tostring(root, encoding="utf-8", xml_declaration=True).decode("utf-8")
        return xml_str

    @classmethod
    async def render_with_mlt(
        cls,
        xml_path: Path,
        out_file: Path,
        width: int,
        height: int,
        frame_rate: float
    ) -> bool:
        """Renders an MLT project file using local 'melt' binary."""
        melt_bin = shutil.which("melt")
        if not melt_bin:
            logger.warning("MLT 'melt' binary not installed; falling back to FFmpeg engine.")
            return False

        profile_arg = f"width={width} height={height} frame_rate_num={int(frame_rate)} frame_rate_den=1 display_aspect_num=16 display_aspect_den=9 progressive=1"
        cmd = [
            melt_bin,
            "-profile", f"custom:{profile_arg}",
            str(xml_path),
            "-consumer", f"avformat:{out_file}",
            "vcodec=libx264",
            "acodec=aac",
            "crf=22",
            "preset=veryfast",
            "f=mp4",
            "terminate_on_pause=1"
        ]

        logger.info(f"Executing MLT melt render: {' '.join(cmd)}")
        proc = await asyncio.create_subprocess_exec(
            *cmd,
            stdin=asyncio.subprocess.DEVNULL,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE
        )
        stdout, stderr = await proc.communicate()

        if proc.returncode != 0:
            err_log = stderr.decode(errors="ignore")[-800:]
            logger.error(f"MLT render failed: {err_log}")
            return False

        return out_file.exists() and out_file.stat().st_size > 0

    @classmethod
    def build_ffmpeg_xfade_pipeline(
        cls,
        clips: List[Dict[str, Any]],
        width: int,
        height: int,
        frame_rate: float,
        transition_style: str = "dissolve",
        transition_duration: float = 0.75,
        lut_name: Optional[str] = None,
        frei0r_effects: Optional[List[str]] = None,
        pip_mode: Optional[str] = None,
        pip_scale: float = 0.28,
        luts_dir: Optional[Path] = None
    ) -> Tuple[List[str], str, str]:
        """
        Builds FFmpeg arguments and -filter_complex chain for multi-clip xfade transitions,
        audio acrossfade, 3D LUT, Frei0r VFX, and multi-track PIP compositing.
        """
        input_args = []
        clip_paths = []

        for c in clips:
            p = c.get("file_path") or c.get("path")
            if p and Path(p).exists():
                clip_paths.append(str(p))

        if not clip_paths:
            return [], "", ""

        # Build FFmpeg input flags
        for p in clip_paths:
            input_args.extend(["-i", p])

        filter_parts = []
        num_clips = len(clip_paths)
        fps = int(frame_rate)

        # 1. Standardize scale and framerate for all inputs
        for idx in range(num_clips):
            filter_parts.append(
                f"[{idx}:v]scale={width}:{height}:force_original_aspect_ratio=decrease,"
                f"pad={width}:{height}:(ow-iw)/2:(oh-ih)/2,"
                f"settb=AVTB,fps={fps},format=yuv420p[v_prep_{idx}]"
            )

        # 2. Sequential xfade transitions
        t_meta = next((t for t in cls.TRANSITIONS if t["id"] == transition_style), cls.TRANSITIONS[0])
        xfade_type = t_meta.get("ffmpeg_xfade", "dissolve")
        trans_dur = max(0.2, min(transition_duration, 2.0))

        if num_clips == 1:
            current_v = "[v_prep_0]"
        else:
            # Calculate cumulative offset for each xfade transition
            offset = 0.0
            last_v = "[v_prep_0]"

            for i in range(1, num_clips):
                # Duration of previous clip segment
                prev_dur = float(clips[i-1].get("duration", 4.0)) if i-1 < len(clips) else 4.0
                offset += max(0.5, prev_dur - trans_dur)
                out_v = f"[v_trans_{i}]" if i < num_clips - 1 else "[v_transitions_done]"

                filter_parts.append(
                    f"{last_v}[v_prep_{i}]xfade=transition={xfade_type}:duration={trans_dur}:offset={offset:.2f}{out_v}"
                )
                last_v = out_v

            current_v = last_v

        # 3. Apply Picture-In-Picture or Split-Screen if pip_mode configured and >= 2 clips
        if pip_mode and pip_mode != "single" and num_clips >= 2:
            pip_w = int(width * pip_scale)
            pip_h = int(height * pip_scale)
            if pip_mode == "pip_top_right":
                x_expr = f"{width} - {pip_w} - 24"
                y_expr = "24"
            elif pip_mode == "pip_bottom_right":
                x_expr = f"{width} - {pip_w} - 24"
                y_expr = f"{height} - {pip_h} - 24"
            else:
                x_expr = "24"
                y_expr = "24"

            filter_parts.append(
                f"[v_prep_1]scale={pip_w}:{pip_h}[pip_scaled];"
                f"{current_v}[pip_scaled]overlay=x={x_expr}:y={y_expr}:format=auto[v_pip_done]"
            )
            current_v = "[v_pip_done]"

        # 4. Color Grading 3D LUT (.cube)
        if lut_name and lut_name != "clean" and luts_dir:
            lut_file = luts_dir / f"{lut_name}.cube"
            if lut_file.exists():
                filter_parts.append(f"{current_v}lut3d=file='{lut_file}'[v_lut_done]")
                current_v = "[v_lut_done]"

        # 5. Frei0r Open-Source VFX Plugins
        if frei0r_effects:
            for fx_idx, fx in enumerate(frei0r_effects):
                parts = fx.split(":", 1)
                pname = parts[0].strip()
                if pname == "vignette0r":
                    pname = "vignette"
                if len(parts) > 1:
                    filter_parts.append(f"{current_v}frei0r=filter_name={pname}:filter_params={parts[1].strip()}[v_fx_{fx_idx}]")
                else:
                    filter_parts.append(f"{current_v}frei0r=filter_name={pname}[v_fx_{fx_idx}]")
                current_v = f"[v_fx_{fx_idx}]"

        filter_parts.append(f"{current_v}format=yuv420p[v_master_out]")
        filter_complex_str = ";".join(filter_parts)

        # 6. Audio Acrossfade / Mix
        audio_filter_str = ""
        if num_clips == 1:
            audio_filter_str = "[0:a]aformat=sample_rates=48000:channel_layouts=stereo[a_master_out]"
        else:
            a_parts = []
            last_a = "[0:a]"
            for i in range(1, num_clips):
                out_a = f"[a_trans_{i}]" if i < num_clips - 1 else "[a_master_out]"
                a_parts.append(f"{last_a}[{i}:a]acrossfade=d={trans_dur}:c1=tri:c2=tri{out_a}")
                last_a = out_a
            audio_filter_str = ";".join(a_parts)

        return input_args, filter_complex_str, audio_filter_str
