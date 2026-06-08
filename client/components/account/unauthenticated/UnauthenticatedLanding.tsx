import { useEffect } from 'react';
import { GoldCard } from './GoldCard';
import { FloatingElements } from './FloatingElements';
import { useAuth, mockMemberFull, mockMemberEmpty } from '../../../context/AuthContext';
import { useAnalytics } from '../../../analytics/useAnalytics';
import { PAGE_NAMES } from '../../../analytics/pageNames';

export function UnauthenticatedLanding() {
  const { login } = useAuth();
  const { pageView, signInClicked, joinNowClicked } = useAnalytics();

  useEffect(() => {
    pageView(PAGE_NAMES.accountUnauthenticated);
  }, []);

  const handleSignIn = () => {
    signInClicked();
    login(mockMemberFull);
  };

  const handleJoinNow = () => {
    joinNowClicked();
    login(mockMemberEmpty);
  };

  return (
    <div
      className="flex-1 flex flex-col relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, #8B1A1A 0%, #6B1010 40%, #3A0808 100%)',
        minHeight: 0,
      }}
    >
      {/* iOS status bar area */}
      <div className="px-5 pt-3 pb-1 flex items-center justify-between">
        <span className="text-white text-sm font-semibold">9:41</span>
        <div className="flex items-center gap-1">
          <svg width="17" height="12" viewBox="0 0 17 12" fill="white">
            <rect x="0" y="4" width="3" height="8" rx="0.5" opacity="0.4" />
            <rect x="4.5" y="2.5" width="3" height="9.5" rx="0.5" opacity="0.6" />
            <rect x="9" y="0.5" width="3" height="11.5" rx="0.5" opacity="0.8" />
            <rect x="13.5" y="0" width="3" height="12" rx="0.5" />
          </svg>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="white">
            <path d="M8 2.5C10.5 2.5 12.7 3.6 14.2 5.3L15.5 4C13.7 2 11 0.8 8 0.8C5 0.8 2.3 2 0.5 4L1.8 5.3C3.3 3.6 5.5 2.5 8 2.5Z" />
            <path d="M8 5.5C9.8 5.5 11.4 6.3 12.5 7.5L13.8 6.2C12.4 4.7 10.3 3.8 8 3.8C5.7 3.8 3.6 4.7 2.2 6.2L3.5 7.5C4.6 6.3 6.2 5.5 8 5.5Z" />
            <circle cx="8" cy="10.5" r="1.5" />
          </svg>
          <div className="flex items-center gap-0.5">
            <div className="w-6 h-3 border border-white rounded-sm relative">
              <div className="absolute inset-0.5 right-1 bg-white rounded-sm" />
              <div className="absolute right-0 top-0.5 w-0.5 h-2 bg-white rounded-r-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Headline */}
      <div className="px-8 pt-4 pb-2 text-center z-10">
        <h1 className="text-white text-3xl font-bold leading-tight">
          It pays to play with<br />Caesars Rewards
        </h1>
        <p className="text-white/75 text-sm mt-3 leading-relaxed">
          Join us and earn credits toward stays, dining,<br />entertainment, and more
        </p>
      </div>

      {/* Hero area */}
      <div className="flex-1 relative flex items-center justify-center">
        <FloatingElements />

        {/* Gold Card centered + tilted */}
        <div className="absolute" style={{ top: '10%', left: '50%', transform: 'translateX(-55%)' }}>
          <GoldCard />
        </div>

        {/* White hand SVG at bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center">
          <svg
            viewBox="0 0 200 160"
            className="w-72 opacity-90"
            fill="none"
          >
            {/* Simplified hand shape */}
            <ellipse cx="100" cy="140" rx="55" ry="18" fill="rgba(255,255,255,0.15)" />
            <path
              d="M70 160 C70 130 60 110 65 90 C68 78 75 72 82 76 C85 63 90 55 98 58 C101 45 110 42 116 50 C120 40 130 40 133 52 C140 47 147 53 144 68 L140 100 C148 100 150 108 145 115 C140 122 130 140 120 155 L70 160Z"
              fill="white"
              opacity="0.85"
            />
          </svg>
        </div>
      </div>

      {/* CTA Row */}
      <div className="px-5 pb-6 pt-4 z-20 bg-gradient-to-t from-black/30 to-transparent">
        <div className="flex gap-3">
          <button
            onClick={handleSignIn}
            className="flex-1 py-4 bg-white text-gray-900 text-base font-semibold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Sign in
          </button>
          <button
            onClick={handleJoinNow}
            className="flex-1 py-4 text-white text-base font-semibold rounded-xl border border-white/30 transition-colors"
            style={{ background: 'rgba(100,20,20,0.8)' }}
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}
