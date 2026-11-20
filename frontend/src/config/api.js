// Centralized API configuration supporting Vercel, Docker, and Local environments

export const getApiBase = () => {
  if (typeof window !== 'undefined') {
    // 1. User manual override stored in localStorage
    const saved = localStorage.getItem('SONIQ_API_BASE');
    if (saved) return saved.replace(/\/+$/, '');

    // 2. Vite environment variable (set in Vercel project settings)
    if (import.meta.env.VITE_API_BASE) {
      return import.meta.env.VITE_API_BASE.replace(/\/+$/, '');
    }

    // 3. Auto-detect Vercel or external domain
    const host = window.location.hostname;
    if (host !== 'localhost' && host !== '127.0.0.1' && !host.startsWith('192.168.')) {
      // Default to sovereign enclave HTTPS proxy
      return 'https://n8n.rydetechglobal.com/soniq-api';
    }
  }
  return '';
};

export const setApiBaseOverride = (url) => {
  if (typeof window !== 'undefined') {
    if (!url) {
      localStorage.removeItem('SONIQ_API_BASE');
    } else {
      localStorage.setItem('SONIQ_API_BASE', url.trim().replace(/\/+$/, ''));
    }
  }
};

export const apiUrl = (endpoint) => {
  const base = getApiBase();
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  if (!base) return cleanEndpoint;
  return `${base}${cleanEndpoint}`;
};

export const resolveAudioUrl = (url) => {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('blob:')) {
    return url;
  }
  return apiUrl(url);
};

// Safe fetch wrapper that handles HTML error pages gracefully
export const safeFetchJson = async (url, options = {}) => {
  const res = await fetch(url, options);
  const text = await res.text();
  
  try {
    const data = JSON.parse(text);
    if (!res.ok) {
      throw new Error(data.detail || `Server error (${res.status})`);
    }
    return data;
  } catch (err) {
    if (!res.ok) {
      throw new Error(`API error (${res.status}): The backend returned HTML instead of JSON. Ensure the backend is reachable at ${getApiBase() || 'localhost'}.`);
    }
    throw err;
  }
};
