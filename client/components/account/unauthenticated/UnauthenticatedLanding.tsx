import { useEffect } from 'react';
import { useAuth, mockMemberFull, mockMemberEmpty } from '../../../context/AuthContext';
import { useAnalytics } from '../../../analytics/useAnalytics';
import { PAGE_NAMES } from '../../../analytics/pageNames';

// Gold card matching Figma — uses the texture images from the design
function GoldMemberCard() {
  return (
    <div
      className="absolute z-10"
      style={{
        width: 252,
        height: 168,
        top: '14%',
        left: '50%',
        marginLeft: -170,
        transform: 'rotate(-8deg)',
        borderRadius: 13.4,
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 4px 20px rgba(0,0,0,0.4)',
      }}
    >
      {/* Gold shimmer background blur layer */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/75a212ab82b6175c9862b125e0e23db8d369a58a"
        alt=""
        style={{
          position: 'absolute',
          width: 485,
          height: 271,
          left: -156,
          top: -131,
          filter: 'blur(5.59px)',
          border: '0.559px solid rgba(0,0,0,0.6)',
        }}
      />
      {/* Gold texture overlay */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/8b0143b7f690e80d18ae5a60c335a2e4f9a98f35?width=1111"
        alt="Gold Texture"
        style={{
          position: 'absolute',
          width: 555,
          height: 473,
          left: -156,
          top: -131,
          filter: 'blur(5.59px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Card text content — positioned over the texture */}
      <div style={{ position: 'absolute', inset: 0, padding: '14px 16px' }}>
        {/* Member name & tier */}
        <p style={{ color: '#844E31', fontWeight: 600, fontSize: 11, lineHeight: '14.5px', letterSpacing: -0.112, margin: 0 }}>
          Julius Caesar
        </p>
        <p style={{ color: '#844E31', fontWeight: 400, fontSize: 11, lineHeight: '14.5px', letterSpacing: -0.112, margin: 0 }}>
          Gold Member
        </p>

        {/* CAESARS REWARDS — top right */}
        <div style={{ position: 'absolute', top: 14, right: 14, textAlign: 'right' }}>
          <p style={{ color: '#844E31', fontWeight: 700, fontSize: 8, letterSpacing: 1.5, margin: 0, opacity: 0.7 }}>CAESARS</p>
          <p style={{ color: '#844E31', fontWeight: 700, fontSize: 8, letterSpacing: 1.5, margin: 0, opacity: 0.7 }}>REWARDS</p>
        </div>

        {/* Two overlapping circle watermark */}
        <svg
          style={{ position: 'absolute', bottom: 12, right: 14, opacity: 0.25 }}
          width="80" height="56" viewBox="0 0 80 56"
        >
          <circle cx="24" cy="28" r="22" fill="none" stroke="#844E31" strokeWidth="2" />
          <circle cx="44" cy="28" r="22" fill="none" stroke="#844E31" strokeWidth="2" />
        </svg>

        {/* 5000 number image */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/b44bf52095d141f604e0aeb3b0a13ebb8880e42d?width=232"
          alt=""
          style={{ position: 'absolute', bottom: 14, left: 14, width: 108, height: 38 }}
        />
      </div>
    </div>
  );
}

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
      style={{ background: 'linear-gradient(0deg, #3D0406 0%, #6B0609 74%, #86080B 100%)' }}
    >
      {/* ── HERO AREA ── */}
      <div className="absolute inset-0">
        {/* The hand image from Figma — positioned in lower section of screen */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/ec0aefd6444d43e8802ec665e783a132fc48a856?width=1128"
          alt=""
          style={{
            position: 'absolute',
            width: '145%',
            maxWidth: 564,
            aspectRatio: '282/193',
            transform: 'rotate(2.498deg)',
            left: '-8%',
            top: '43%',
          }}
        />

        {/* The tilted gold card */}
        <GoldMemberCard />

        {/* Sparkle dots (from Figma design circles) */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {[
            { top: '18%', left: '72%', r: 2.9, opacity: 0.4 },
            { top: '14%', left: '66%', r: 1.3, opacity: 0.3 },
            { top: '22%', left: '78%', r: 1.3, opacity: 0.4 },
            { top: '28%', left: '9%',  r: 1.3, opacity: 0.4 },
            { top: '12%', left: '56%', r: 1.7, opacity: 0.4 },
            { top: '9%',  left: '52%', r: 1.3, opacity: 0.4 },
            { top: '7%',  left: '65%', r: 1.3, opacity: 0.4 },
            { top: '35%', left: '12%', r: 1.7, opacity: 0.2 },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: s.top, left: s.left,
                width: s.r * 2, height: s.r * 2,
                borderRadius: '50%',
                background: 'white',
                opacity: s.opacity,
              }}
            />
          ))}
        </div>

        {/* Bottom gradient fade into CTA section */}
        <div
          style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: '38%',
            background: 'linear-gradient(to top, #3D0406 30%, rgba(61,4,6,0.7) 70%, transparent 100%)',
          }}
        />
      </div>

      {/* ── STATUS BAR ── */}
      <div className="relative z-20 flex items-center justify-between px-6 pt-4 pb-2 flex-shrink-0">
        <span style={{ color: '#FFF', fontSize: 17, fontWeight: 600, letterSpacing: -0.408, fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>
          9:41
        </span>
        {/* Dynamic island */}
        <div style={{ position: 'absolute', left: '50%', top: 12, transform: 'translateX(-50%)', width: 122, height: 36, background: '#121212', borderRadius: 20 }} />
        {/* Status icons */}
        <div className="flex items-center gap-1.5">
          {/* Signal */}
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
            <path d="M10 3C10 2.44772 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V11C13 11.5523 12.5523 12 12 12H11C10.4477 12 10 11.5523 10 11V3Z" fill="white"/>
            <path d="M15 1C15 0.447715 15.4477 0 16 0H17C17.5523 0 18 0.447715 18 1V11C18 11.5523 17.5523 12 17 12H16C15.4477 12 15 11.5523 15 11V1Z" fill="white"/>
            <path d="M5 6.5C5 5.94772 5.44772 5.5 6 5.5H7C7.55228 5.5 8 5.94772 8 6.5V11C8 11.5523 7.55228 12 7 12H6C5.44772 12 5 11.5523 5 11V6.5Z" fill="white"/>
            <path d="M0 9C0 8.44772 0.447715 8 1 8H2C2.55228 8 3 8.44772 3 9V11C3 11.5523 2.55228 12 2 12H1C0.447715 12 0 11.5523 0 11V9Z" fill="white"/>
          </svg>
          {/* Wifi */}
          <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
            <path d="M6.11524 8.91875C7.53496 7.69319 9.61439 7.69332 11.0342 8.91875C11.1056 8.98468 11.1475 9.07827 11.1494 9.17656C11.1514 9.2748 11.1136 9.36943 11.0449 9.43828L8.82129 11.7283C8.75619 11.7956 8.66781 11.8337 8.5752 11.8338C8.48249 11.8338 8.3933 11.7956 8.32813 11.7283L6.1045 9.43828C6.03589 9.3694 5.998 9.27476 6 9.17656C6.00204 9.07827 6.04375 8.98463 6.11524 8.91875ZM3.10938 6.17851C6.16846 3.27392 10.9058 3.27392 13.9648 6.17851C14.0339 6.24662 14.0732 6.34029 14.0742 6.43828C14.0751 6.53616 14.0373 6.63055 13.9697 6.7L12.6846 8.02519C12.5521 8.16047 12.338 8.16378 12.2022 8.03203C11.1977 7.10361 9.89123 6.58961 8.53614 6.58964C7.18182 6.59022 5.87597 7.10412 4.87208 8.03203C4.7362 8.16378 4.52209 8.16054 4.38965 8.02519L3.1045 6.7C3.03674 6.63064 2.99918 6.53621 3.00001 6.43828C3.00091 6.34031 3.04039 6.24661 3.10938 6.17851ZM0.107427 3.44218C4.79928 -1.14743 12.2007 -1.14736 16.8926 3.44218C16.9605 3.51037 16.9994 3.60373 17 3.70097C17.0005 3.79806 16.9625 3.89184 16.8955 3.96074L15.6094 5.28593C15.4769 5.42191 15.2616 5.42362 15.127 5.28984C13.3393 3.55507 10.9666 2.5878 8.5 2.58769C6.03337 2.58781 3.66078 3.55507 1.87305 5.28984C1.73851 5.42373 1.52304 5.42208 1.39063 5.28593L0.103521 3.96074C0.036551 3.89181 -0.000494227 3.79803 4.98051e-06 3.70097C0.0006317 3.60373 0.0394613 3.51032 0.107427 3.44218Z" fill="white"/>
          </svg>
          {/* Battery */}
          <svg width="28" height="13" viewBox="0 0 28 13" fill="none">
            <path opacity="0.35" d="M4 0.5H21C22.933 0.5 24.5 2.067 24.5 4V9C24.5 10.933 22.933 12.5 21 12.5H4C2.067 12.5 0.5 10.933 0.5 9V4C0.5 2.067 2.067 0.5 4 0.5Z" stroke="white"/>
            <path opacity="0.4" d="M26 5V9.22034C26.8491 8.86291 27.4012 8.0314 27.4012 7.11017C27.4012 6.18894 26.8491 5.35744 26 5Z" fill="white"/>
            <path d="M2 4C2 2.89543 2.89543 2 4 2H21C22.1046 2 23 2.89543 23 4V9C23 10.1046 22.1046 11 21 11H4C2.89543 11 2 10.1046 2 9V4Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* ── TITLE TEXT ── */}
      <div className="relative z-20 flex flex-col items-center gap-2 px-6 pt-2 flex-shrink-0">
        <h1
          className="text-white text-center"
          style={{ fontSize: 32, fontWeight: 600, lineHeight: '36px', letterSpacing: -1, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          It pays to play with Caesars Rewards
        </h1>
        <p
          className="text-white text-center"
          style={{ fontSize: 14, fontWeight: 600, lineHeight: '20px', letterSpacing: 0.1, opacity: 0.7, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Join us and earn credits toward stays, dining, entertainment, and more
        </p>
      </div>

      {/* ── SPACER (hero takes up middle space) ── */}
      <div className="flex-1" />

      {/* ── CTA BUTTONS ── */}
      <div className="relative z-20 flex gap-2 px-6 pb-4 flex-shrink-0">
        <button
          onClick={handleSignIn}
          className="flex-1 flex items-center justify-center"
          style={{
            height: 48, borderRadius: 12,
            background: '#FFF', color: '#121212',
            fontSize: 16, fontWeight: 600,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Sign in
        </button>
        <button
          onClick={handleJoinNow}
          className="flex-1 flex items-center justify-center"
          style={{
            height: 48, borderRadius: 12,
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(20px)',
            color: '#FFF',
            fontSize: 16, fontWeight: 600,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Join Now
        </button>
      </div>
    </div>
  );
}
