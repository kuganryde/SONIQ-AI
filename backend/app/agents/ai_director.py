import json
import logging
import re
from typing import Any, Dict, List, Optional

from app.agents.base_agent import BaseAudioAgent

logger = logging.getLogger("vybe.ai_director")


class AIDirectorAgent(BaseAudioAgent):
    """
    Agent 11 — Sovereign AI Director & Storyboard Architect.
    Interprets natural language creative visions into structured video Edit Decision
    Lists (EDL), scene breakdowns, shot framing, transitions, and audio sync cues.
    """

    def __init__(self):
        super().__init__(
            agent_id="AGENT_11",
            agent_name="AI Director & Creative Architect",
            role="Script-to-Screen Storyboard Generator and Multi-Scene Editorial Director"
        )

    async def plan_video(
        self,
        user_prompt: str,
        target_aspect_ratio: str = "16:9",
        target_duration_sec: float = 30.0,
        style_preset: str = "cinematic"
    ) -> Dict[str, Any]:
        """
        Synthesizes an intelligent video production plan from a natural language prompt.
        Uses local Ollama qwen2.5 with automatic deterministic fallback.
        """
        system_prompt = (
            "You are the VYBE AI Director Agent (Agent 11) for sovereign media production. "
            "Your role is to translate creative visions into precise shot-by-shot storyboards "
            "and edit decision lists (EDL). Return ONLY valid JSON with keys: "
            "'title', 'logline', 'aspect_ratio', 'pacing', 'color_mood', 'soundtrack_bpm', "
            "'soundtrack_mood', 'scenes' (list of scene objects with 'scene_number', 'shot_type', "
            "'camera_motion', 'duration_sec', 'visual_description', 'transition', 'audio_cue', 'overlay_text')."
        )

        task_prompt = (
            f"Generate a professional video production plan for: \"{user_prompt}\"\n"
            f"Target Aspect Ratio: {target_aspect_ratio}\n"
            f"Target Duration: {target_duration_sec} seconds\n"
            f"Style Preset: {style_preset}\n"
            f"Ensure total duration of all scenes equals approximately {target_duration_sec}s."
        )

        raw_llm = await self.query_llm(task_prompt, system_prompt=system_prompt)
        parsed = self._parse_json_response(raw_llm)
        if parsed and "scenes" in parsed and len(parsed["scenes"]) > 0:
            parsed["aspect_ratio"] = target_aspect_ratio
            parsed["agent"] = self.agent_name
            self.log_execution("plan_video", {"prompt": user_prompt}, {"scenes_count": len(parsed["scenes"])})
            return parsed

        # Use robust deterministic fallback plan
        fallback = self._generate_fallback_plan(user_prompt, target_aspect_ratio, target_duration_sec, style_preset)
        self.log_execution("plan_video_fallback", {"prompt": user_prompt}, {"scenes_count": len(fallback["scenes"])})
        return fallback

    def get_deterministic_fallback(self, prompt: str) -> str:
        """Fallback response when Ollama is offline."""
        plan = self._generate_fallback_plan(prompt, "16:9", 30.0, "cinematic")
        return json.dumps(plan)

    def _parse_json_response(self, text: str) -> Optional[Dict[str, Any]]:
        """Extracts JSON object from LLM response text."""
        try:
            # Direct parse
            return json.loads(text)
        except Exception:
            pass

        # Search for markdown fenced json block
        match = re.search(r"```(?:json)?\s*(\{.*?\})\s*```", text, re.DOTALL)
        if match:
            try:
                return json.loads(match.group(1))
            except Exception:
                pass

        # Find first curly brace to last curly brace
        start = text.find("{")
        end = text.rfind("}")
        if start != -1 and end != -1 and end > start:
            try:
                return json.loads(text[start : end + 1])
            except Exception:
                pass
        return None

    def _generate_fallback_plan(
        self,
        prompt: str,
        aspect_ratio: str,
        target_duration: float,
        style: str
    ) -> Dict[str, Any]:
        """Deterministic editorial director rulebook."""
        is_vertical = aspect_ratio in ["9:16", "4:5"]
        duration = max(10.0, min(target_duration, 120.0))
        num_scenes = max(3, min(int(duration / 4.0), 8))
        scene_dur = round(duration / num_scenes, 1)

        shot_types = ["Extreme Wide Establishing", "Medium Tracking Shot", "Close-Up Punch", "Dynamic Low-Angle", "Hero Orbit Shot", "Macro Detail"]
        camera_moves = ["Slow Push-In", "Fast Whip Pan", "Smooth Steadicam Drift", "Dynamic Snap Zoom", "Static Locked-Off", "Aerial Pullback"]
        transitions = ["Hard Cut on Beat", "Cross Dissolve 0.3s", "Whip Pan Transition", "Glitch Impact", "Fade to Ambient Black"]
        audio_cues = ["Low Sub Bass Riser", "Impact Stinger & 808 Hit", "RYDETECH Sonic Ident", "Dialogue Voiceover Bed", "Upbeat Drum Claps"]

        scenes = []
        for i in range(num_scenes):
            scenes.append({
                "scene_number": i + 1,
                "shot_type": shot_types[i % len(shot_types)],
                "camera_motion": camera_moves[i % len(camera_moves)],
                "duration_sec": scene_dur,
                "visual_description": f"Scene {i + 1}: Dynamic visual visualising '{prompt[:35]}...' with high-contrast sovereign lighting.",
                "transition": transitions[i % len(transitions)],
                "audio_cue": audio_cues[i % len(audio_cues)],
                "overlay_text": f"CHAPTER {i + 1}" if i > 0 else "VYBE AI SHOWCASE"
            })

        return {
            "title": f"VYBE AI Storyboard: {prompt[:30].strip()}...",
            "logline": f"Autonomous high-impact video plan optimized for {aspect_ratio} formatted in {style} aesthetic.",
            "aspect_ratio": aspect_ratio,
            "target_duration_sec": duration,
            "pacing": "Fast & Kinetic" if is_vertical else "Cinematic Narrative",
            "color_mood": "Cyberpunk Neon & Deep Black" if style == "cyberpunk" else "Teal & Orange Hollywood Contrast",
            "soundtrack_bpm": 128 if is_vertical else 110,
            "soundtrack_mood": "High-Energy Electronic / Modern Bass" if is_vertical else "Orchestral Hybrid Cinema",
            "agent": self.agent_name,
            "scenes": scenes
        }
