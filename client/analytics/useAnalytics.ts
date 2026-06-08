import { useCallback } from 'react';
import { pageView, track } from './index';
import { analytics } from './events';

export function useAnalytics() {
  return {
    pageView: useCallback(pageView, []),
    track: useCallback(track, []),
    ...analytics,
  };
}
