import { useEffect } from 'react';
import { FloatingElements } from './FloatingElements';
import { useAuth, mockMemberFull, mockMemberEmpty } from '../../../context/AuthContext';
import { useAnalytics } from '../../../analytics/useAnalytics';
import { PAGE_NAMES } from '../../../analytics/pageNames';

/* ─── Gold card matching the design ─────────────────────────────────────── */
function GoldCardSVG() {
  return (
    <svg viewBox="0 0 340 214" fill="none" className="w-full drop-shadow-2xl">
      <defs>
        <linearGradient id="card-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#EDD146" />
          <stop offset="20%"  stopColor="#F5D860" />
          <stop offset="45%"  stopColor="#D4AC2C" />
          <stop offset="65%"  stopColor="#C9921A" />
          <stop offset="80%"  stopColor="#E2C03A" />
          <stop offset="100%" stopColor="#BF9020" />
        </linearGradient>
        <linearGradient id="card-shine" x1="0%" y1="0%" x2="60%" y2="100%">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.35)" />
          <stop offset="60%"  stopColor="rgba(255,255,255,0.04)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.08)" />
        </linearGradient>
        <filter id="card-shadow">
          <feDropShadow dx="0" dy="12" stdDeviation="20" floodColor="#000" floodOpacity="0.55" />
        </filter>
      </defs>

      <g filter="url(#card-shadow)">
        {/* Card body */}
        <rect x="0" y="0" width="340" height="214" rx="18" fill="url(#card-gold)" />
        {/* Shine overlay */}
        <rect x="0" y="0" width="340" height="214" rx="18" fill="url(#card-shine)" />

        {/* Two overlapping circle watermark — bottom-right, prominent */}
        <circle cx="220" cy="130" r="72" fill="none" stroke="rgba(180,130,10,0.28)" strokeWidth="3" />
        <circle cx="280" cy="130" r="72" fill="none" stroke="rgba(180,130,10,0.28)" strokeWidth="3" />

        {/* Small chip area top-left */}
        <rect x="24" y="58" width="38" height="30" rx="5" fill="rgba(160,110,10,0.4)" />
        <rect x="28" y="62" width="30" height="22" rx="3" fill="rgba(140,95,8,0.35)" />

        {/* Member name */}
        <text x="72" y="72" fill="rgba(100,65,5,0.75)" fontSize="13" fontWeight="600" fontFamily="'Plus Jakarta Sans', sans-serif">Julius Caesar</text>
        <text x="72" y="89" fill="rgba(100,65,5,0.6)" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif">Gold Member</text>

        {/* CAESARS REWARDS — top right */}
        <text x="316" y="24" textAnchor="end" fill="rgba(100,65,5,0.6)" fontSize="10" fontWeight="700" letterSpacing="2" fontFamily="'Plus Jakarta Sans', sans-serif">CAESARS</text>
        <text x="316" y="38" textAnchor="end" fill="rgba(100,65,5,0.5)" fontSize="10" fontWeight="700" letterSpacing="2" fontFamily="'Plus Jakarta Sans', sans-serif">REWARDS</text>

        {/* 5000 number — large, bottom left */}
        <text x="24" y="190" fill="rgba(100,65,5,0.65)" fontSize="56" fontWeight="900" fontFamily="Georgia, serif" letterSpacing="2">5000</text>
      </g>
    </svg>
  );
}

/* ─── Proper open-palm hand SVG ─────────────────────────────────────────── */
function HandSVG() {
  return (
    <svg viewBox="0 0 260 290" fill="none" className="w-72">
      <defs>
        <linearGradient id="hand-fill" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%"   stopColor="#F2EDE6" />
          <stop offset="40%"  stopColor="#E4DDD4" />
          <stop offset="100%" stopColor="#CAC2BA" />
        </linearGradient>
        <linearGradient id="hand-dark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#DDD6CE" />
          <stop offset="100%" stopColor="#B8B0A8" />
        </linearGradient>
        <filter id="hand-shadow">
          <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#000" floodOpacity="0.28" />
        </filter>
      </defs>

      <g filter="url(#hand-shadow)">
        {/* ── THUMB ── curves out to the left */}
        <path
          d="M62 195 C48 190 34 178 32 160 C30 142 40 128 56 126 C68 124 78 132 80 148 C82 160 78 175 72 185 Z"
          fill="url(#hand-fill)"
        />
        {/* Thumb knuckle crease */}
        <path d="M52 158 C56 152 66 150 74 155" fill="none" stroke="rgba(160,145,130,0.35)" strokeWidth="1.5" strokeLinecap="round" />

        {/* ── PALM ── wide base connecting fingers to wrist */}
        <path
          d="M78 235 C60 240 46 228 44 210 C42 192 52 175 68 168 L68 155 L88 145 L88 165
             L110 155 L110 168 L135 158 L135 170 L158 162 L158 174 L178 172
             C196 172 210 185 212 202 C214 220 202 238 184 242 Z"
          fill="url(#hand-fill)"
        />

        {/* ── INDEX FINGER ── slight left lean */}
        <path
          d="M75 165 C73 148 75 120 80 98 C82 88 88 80 96 80 C104 80 110 88 110 98 C112 120 110 148 108 165 Z"
          fill="url(#hand-fill)"
        />
        {/* Index knuckles */}
        <path d="M80 140 C87 136 103 136 108 140" fill="none" stroke="rgba(160,145,130,0.3)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M82 118 C88 114 102 114 107 118" fill="none" stroke="rgba(160,145,130,0.25)" strokeWidth="1.5" strokeLinecap="round" />

        {/* ── MIDDLE FINGER ── tallest, straight up */}
        <path
          d="M112 168 C110 150 112 118 115 92 C117 80 124 70 132 70 C140 70 147 80 148 92 C150 118 150 150 148 168 Z"
          fill="url(#hand-fill)"
        />
        {/* Middle knuckles */}
        <path d="M116 144 C122 139 142 139 147 144" fill="none" stroke="rgba(160,145,130,0.3)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M118 120 C124 115 140 115 145 120" fill="none" stroke="rgba(160,145,130,0.25)" strokeWidth="1.5" strokeLinecap="round" />

        {/* ── RING FINGER ── slightly shorter */}
        <path
          d="M150 170 C148 152 149 122 152 99 C154 88 160 80 168 80 C176 80 182 88 184 99 C186 122 185 152 182 170 Z"
          fill="url(#hand-fill)"
        />
        {/* Ring knuckles */}
        <path d="M153 146 C158 141 178 141 182 146" fill="none" stroke="rgba(160,145,130,0.3)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M154 124 C159 119 177 119 181 124" fill="none" stroke="rgba(160,145,130,0.25)" strokeWidth="1.5" strokeLinecap="round" />

        {/* ── PINKY ── shortest, slight right lean */}
        <path
          d="M185 173 C183 157 184 132 186 115 C188 104 193 98 200 98 C207 98 212 105 214 115 C216 132 215 157 212 173 Z"
          fill="url(#hand-fill)"
        />
        {/* Pinky knuckle */}
        <path d="M187 148 C191 143 209 143 212 148" fill="none" stroke="rgba(160,145,130,0.3)" strokeWidth="1.5" strokeLinecap="round" />

        {/* ── PALM HIGHLIGHTS for depth ── */}
        <ellipse cx="130" cy="210" rx="45" ry="22" fill="rgba(255,255,255,0.14)" />
        {/* Knuckle ridge across all fingers */}
        <path d="M82 167 C100 160 132 158 162 168 L182 172" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="3" strokeLinecap="round" />

        {/* ── SHADOW under hand ── */}
        <ellipse cx="135" cy="278" rx="88" ry="14" fill="rgba(0,0,0,0.22)" />
      </g>
    </svg>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */
export function UnauthenticatedLanding() {
  const { login } = useAuth();
  const { pageView, signInClicked, joinNowClicked } = useAnalytics();

  useEffect(() => {
    pageView(PAGE_NAMES.accountUnauthenticated);
  }, []);

  const handleSignIn  = () => { signInClicked();  login(mockMemberFull);  };
  const handleJoinNow = () => { joinNowClicked(); login(mockMemberEmpty); };

  return (
    <div
      className="flex-1 flex flex-col relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 25%, #9B2020 0%, #7A1414 35%, #3A0808 100%)',
      }}
    >
      {/* iOS status bar */}
      <div className="px-5 pt-3 pb-1 flex items-center justify-between flex-shrink-0 relative z-10">
        <span className="text-white text-sm font-semibold">9:41</span>
        {/* Dynamic island */}
        <div className="absolute left-1/2 -translate-x-1/2 top-3 w-28 h-6 bg-black rounded-full" />
        <div className="flex items-center gap-1.5">
          {/* Signal bars */}
          <svg width="18" height="12" viewBox="0 0 18 12" fill="white">
            <rect x="0"  y="5" width="3" height="7" rx="0.5" opacity="0.4" />
            <rect x="5"  y="3" width="3" height="9" rx="0.5" opacity="0.6" />
            <rect x="10" y="1" width="3" height="11" rx="0.5" opacity="0.8" />
            <rect x="15" y="0" width="3" height="12" rx="0.5" />
          </svg>
          {/* Wifi */}
          <svg width="16" height="12" viewBox="0 0 16 12" fill="white">
            <path d="M8 10 L8 10" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M5 8 Q8 5.5 11 8" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M2.5 5.5 Q8 1 13.5 5.5" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          {/* Battery */}
          <div className="flex items-center gap-0.5">
            <div className="w-7 h-3.5 border border-white/80 rounded-sm relative">
              <div className="absolute inset-0.5 bg-white rounded-[1px]" />
            </div>
            <div className="w-0.5 h-2 bg-white/50 rounded-r-sm" />
          </div>
        </div>
      </div>

      {/* Headline */}
      <div className="px-8 pt-6 pb-2 text-center z-10 relative flex-shrink-0">
        <h1 className="text-white font-bold leading-tight" style={{ fontSize: 28 }}>
          It pays to play with<br />Caesars Rewards
        </h1>
        <p className="text-white/70 text-sm mt-3 leading-relaxed">
          Join us and earn credits toward stays, dining,<br />entertainment, and more
        </p>
      </div>

      {/* Hero — floating elements + card + hand */}
      <div className="flex-1 relative overflow-hidden">
        <FloatingElements />

        {/* Gold card — center, tilted */}
        <div
          className="absolute z-10"
          style={{
            top: '4%',
            left: '50%',
            width: '72%',
            transform: 'translateX(-52%) rotate(-7deg)',
          }}
        >
          <GoldCardSVG />
        </div>

        {/* Hand — bottom center, upright */}
        <div
          className="absolute z-20"
          style={{ bottom: '-10px', left: '50%', transform: 'translateX(-50%)' }}
        >
          <HandSVG />
        </div>
      </div>

      {/* CTA buttons */}
      <div className="px-5 pb-6 pt-3 z-20 relative flex-shrink-0" style={{ background: 'linear-gradient(to top, rgba(30,4,4,0.7) 0%, transparent 100%)' }}>
        <div className="flex gap-3">
          <button
            onClick={handleSignIn}
            className="flex-1 py-4 bg-white text-gray-900 text-base font-semibold rounded-2xl hover:bg-gray-100 transition-colors"
          >
            Sign in
          </button>
          <button
            onClick={handleJoinNow}
            className="flex-1 py-4 text-white text-base font-semibold rounded-2xl transition-colors"
            style={{ background: 'rgba(90,16,16,0.85)', border: '1px solid rgba(255,255,255,0.15)' }}
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}
