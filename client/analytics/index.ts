declare global {
  interface Window {
    s?: Record<string, unknown> & { pageName?: string; t?: () => void; tl?: (a: boolean, b: string, c: string) => void };
    _satellite?: { track?: (event: string, data?: Record<string, unknown>) => void };
  }
}

export function track(eventName: string, data: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  try {
    if (window._satellite?.track) {
      window._satellite.track(eventName, data);
    } else if (window.s?.tl) {
      window.s.tl(true, 'o', eventName);
    } else {
      console.log('[Analytics]', eventName, data);
    }
  } catch {
    console.log('[Analytics]', eventName, data);
  }
}

export function pageView(pageName: string, data: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  try {
    if (window.s) {
      window.s.pageName = pageName;
      Object.assign(window.s, data);
      window.s.t?.();
    } else {
      console.log('[Analytics pageView]', pageName, data);
    }
  } catch {
    console.log('[Analytics pageView]', pageName, data);
  }
}
