from typing import Any, Dict, List
from app.agents.base_agent import BaseAudioAgent


class MixingEngineerAgent(BaseAudioAgent):
    """AGENT 04: Mixing Engineer Agent - Formulates editable multitrack mix proposals."""

    def __init__(self):
        super().__init__(
            agent_id="AGENT_04_MIXING",
            agent_name="Mixing Engineer Agent",
            role="Analyze track masking, establish balance, propose fader gains, pans, EQ, and dynamics"
        )

    def get_deterministic_fallback(self, prompt: str) -> str:
        return "Proposing balanced gain staging with -18 dBFS nominal headroom, mid-side separation, and side-chain ducking on bass."

    async def propose_mix(self, tracks: List[Dict[str, Any]]) -> Dict[str, Any]:
        """
        Creates an editable mix recommendation for all active tracks in the session.
        Does NOT destructively apply changes; returns a structured proposal for engineer approval.
        """
        recommendations = []
        for trk in tracks:
            name = trk.get("name", "Track").lower()
            t_type = trk.get("type", "audio").lower()

            rec = {
                "track_id": trk.get("id"),
                "track_name": trk.get("name"),
                "fader_gain_db": 0.0,
                "pan": 0.0,
                "mute": False,
                "solo": False,
                "eq_recommendations": [],
                "compression_recommendations": {},
                "reverb_send_pct": 10.0,
                "delay_send_pct": 5.0,
                "rationale": ""
            }

            if "vocal" in name:
                rec["fader_gain_db"] = 0.0 # Anchor lead vocal at 0dB
                rec["pan"] = 0.0
                rec["eq_recommendations"] = [
                    {"type": "highpass", "freq": 90.0, "gain_db": 0.0, "q": 0.707},
                    {"type": "peaking", "freq": 350.0, "gain_db": -2.0, "q": 1.2},
                    {"type": "peaking", "freq": 3500.0, "gain_db": 2.5, "q": 1.0},
                    {"type": "highshelf", "freq": 10000.0, "gain_db": 2.0, "q": 0.707}
                ]
                rec["compression_recommendations"] = {
                    "threshold_db": -18.0, "ratio": 3.5, "attack_ms": 15.0, "release_ms": 120.0, "makeup_gain_db": 3.0
                }
                rec["reverb_send_pct"] = 22.0
                rec["delay_send_pct"] = 14.0
                rec["rationale"] = "Centered lead vocal with low-end rumble cut, boxiness dip at 350Hz, and airy presence."

            elif "drum" in name or "kick" in name or "snare" in name:
                rec["fader_gain_db"] = -2.5
                rec["pan"] = 0.0
                rec["eq_recommendations"] = [
                    {"type": "peaking", "freq": 60.0, "gain_db": 2.0, "q": 1.4},
                    {"type": "peaking", "freq": 300.0, "gain_db": -3.5, "q": 1.5},
                    {"type": "peaking", "freq": 4500.0, "gain_db": 2.0, "q": 1.0}
                ]
                rec["compression_recommendations"] = {
                    "threshold_db": -16.0, "ratio": 4.0, "attack_ms": 30.0, "release_ms": 80.0, "makeup_gain_db": 2.0
                }
                rec["reverb_send_pct"] = 8.0
                rec["delay_send_pct"] = 0.0
                rec["rationale"] = "Punchy low-end anchor with slow attack compressor to preserve initial transients."

            elif "bass" in name:
                rec["fader_gain_db"] = -3.0
                rec["pan"] = 0.0
                rec["eq_recommendations"] = [
                    {"type": "highpass", "freq": 35.0, "gain_db": 0.0, "q": 0.707},
                    {"type": "peaking", "freq": 80.0, "gain_db": 1.5, "q": 1.2},
                    {"type": "peaking", "freq": 600.0, "gain_db": -2.0, "q": 1.4}
                ]
                rec["compression_recommendations"] = {
                    "threshold_db": -14.0, "ratio": 4.5, "attack_ms": 10.0, "release_ms": 100.0, "makeup_gain_db": 2.5
                }
                rec["reverb_send_pct"] = 0.0
                rec["delay_send_pct"] = 0.0
                rec["rationale"] = "Solid mono sub-bass foundation with 600Hz scoop to make space for guitars/keys."

            elif "guitar" in name or "keys" in name or "synth" in name:
                rec["fader_gain_db"] = -4.5
                # Spread stereo
                rec["pan"] = -35.0 if "guitar" in name else 35.0
                rec["eq_recommendations"] = [
                    {"type": "highpass", "freq": 120.0, "gain_db": 0.0, "q": 0.707},
                    {"type": "peaking", "freq": 2500.0, "gain_db": -1.5, "q": 1.0}
                ]
                rec["compression_recommendations"] = {
                    "threshold_db": -15.0, "ratio": 2.5, "attack_ms": 25.0, "release_ms": 150.0, "makeup_gain_db": 1.5
                }
                rec["reverb_send_pct"] = 18.0
                rec["delay_send_pct"] = 10.0
                rec["rationale"] = "Widened side placement with 120Hz highpass to prevent low-end mud."

            else:
                rec["fader_gain_db"] = -6.0
                rec["pan"] = 0.0
                rec["rationale"] = "General background track positioned with headroom."

            recommendations.append(rec)

        result = {
            "agent_id": self.agent_id,
            "status": "PROPOSED",
            "tracks_analyzed": len(tracks),
            "mix_proposal": recommendations,
            "engineer_action_required": "Review and approve/modify recommendations before session commit."
        }
        self.log_execution("PROPOSE_MIX", {"tracks_count": len(tracks)}, {"status": "PROPOSED"})
        return result
