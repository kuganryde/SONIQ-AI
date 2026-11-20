import json
import logging
from abc import ABC, abstractmethod
from typing import Any, Dict, List, Optional
import httpx

from app.config import settings

logger = logging.getLogger("soniq.agents")


class BaseAudioAgent(ABC):
    """Abstract Base Class for Sovereign AI Audio Engineering Agents."""

    def __init__(self, agent_id: str, agent_name: str, role: str):
        self.agent_id = agent_id
        self.agent_name = agent_name
        self.role = role
        self.history: List[Dict[str, Any]] = []

    async def query_llm(self, prompt: str, system_prompt: Optional[str] = None) -> str:
        """Queries local sovereign Ollama instance (fallback to deterministic acoustic rules if offline)."""
        sys = system_prompt or (
            f"You are {self.agent_name}, a world-class professional audio engineering agent in SONIQ AI. "
            f"Role: {self.role}. Provide precise, technical, objective audio engineering decisions."
        )
        url = f"{settings.OLLAMA_BASE_URL}/api/generate"
        payload = {
            "model": settings.OLLAMA_MODEL,
            "prompt": f"{sys}\n\nTask:\n{prompt}",
            "stream": False,
            "options": {"temperature": 0.1, "num_predict": 512}
        }
        try:
            async with httpx.AsyncClient(timeout=15.0) as client:
                res = await client.post(url, json=payload)
                if res.status_code == 200:
                    data = res.json()
                    return data.get("response", "").strip()
        except Exception as e:
            logger.info(f"Local Ollama query fallback for {self.agent_name}: {e}")

        # Deterministic acoustic fallback response
        return self.get_deterministic_fallback(prompt)

    @abstractmethod
    def get_deterministic_fallback(self, prompt: str) -> str:
        """Rule-based statutory acoustic fallback when LLM is offline or busy."""
        pass

    def log_execution(self, action: str, input_summary: Dict[str, Any], output_summary: Dict[str, Any]):
        self.history.append({
            "action": action,
            "input": input_summary,
            "output": output_summary
        })
