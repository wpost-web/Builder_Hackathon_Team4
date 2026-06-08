function GoldCoinSVG({ size = 42 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <defs>
        <radialGradient id="coin-rg" cx="35%" cy="35%" r="65%">
          <stop offset="0%"   stopColor="#F5D860" />
          <stop offset="50%"  stopColor="#D4AC2C" />
          <stop offset="100%" stopColor="#A07818" />
        </radialGradient>
        <filter id="coin-f"><feDropShadow dx="1" dy="3" stdDeviation="3" floodColor="#7A5800" floodOpacity="0.5"/></filter>
      </defs>
      <g filter="url(#coin-f)">
        <circle cx="40" cy="40" r="32" fill="url(#coin-rg)" />
        <circle cx="40" cy="40" r="25" fill="none" stroke="rgba(140,90,5,0.35)" strokeWidth="2" />
        {/* Highlight */}
        <ellipse cx="30" cy="28" rx="10" ry="13" fill="rgba(255,255,255,0.22)" transform="rotate(-20 30 28)" />
      </g>
    </svg>
  );
}

function GoldCylinderSVG({ size = 58 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.62} viewBox="0 0 90 56" fill="none">
      <defs>
        <linearGradient id="cyl-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#F5D060" />
          <stop offset="45%"  stopColor="#D4AC2C" />
          <stop offset="100%" stopColor="#C09018" />
        </linearGradient>
        <linearGradient id="cyl-cap" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#F0CA50" />
          <stop offset="100%" stopColor="#906A10" />
        </linearGradient>
        <filter id="cyl-f"><feDropShadow dx="1" dy="3" stdDeviation="3" floodColor="#7A5800" floodOpacity="0.45"/></filter>
      </defs>
      <g filter="url(#cyl-f)">
        <rect x="10" y="4" width="70" height="48" rx="6" fill="url(#cyl-g)" />
        {/* Bands */}
        <rect x="10" y="12" width="70" height="5" fill="rgba(130,85,5,0.28)" />
        <rect x="10" y="22" width="70" height="5" fill="rgba(130,85,5,0.28)" />
        <rect x="10" y="32" width="70" height="5" fill="rgba(130,85,5,0.28)" />
        <rect x="10" y="42" width="70" height="5" fill="rgba(130,85,5,0.28)" />
        {/* End caps */}
        <ellipse cx="10" cy="28" rx="7" ry="24" fill="url(#cyl-cap)" />
        <ellipse cx="80" cy="28" rx="7" ry="24" fill="url(#cyl-cap)" />
        {/* "777" label */}
        <text x="45" y="33" textAnchor="middle" fill="rgba(100,65,5,0.55)" fontSize="11" fontWeight="bold" fontFamily="sans-serif">777</text>
        {/* Top highlight */}
        <rect x="14" y="5" width="62" height="6" rx="2" fill="rgba(255,255,255,0.22)" />
      </g>
    </svg>
  );
}

function GoldRingSVG({ size = 58 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <defs>
        <linearGradient id="ring-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#F5D060" />
          <stop offset="30%"  stopColor="#D4AC2C" />
          <stop offset="70%"  stopColor="#C09018" />
          <stop offset="100%" stopColor="#E8C040" />
        </linearGradient>
        <filter id="ring-f"><feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#7A5800" floodOpacity="0.5"/></filter>
      </defs>
      <g filter="url(#ring-f)">
        {/* Outer ring */}
        <circle cx="40" cy="40" r="30" fill="none" stroke="url(#ring-g)" strokeWidth="16" />
        {/* Top highlight arc */}
        <path d="M16 26 Q40 12 64 26" fill="none" stroke="rgba(255,255,255,0.32)" strokeWidth="6" strokeLinecap="round" />
        {/* Inner edge groove */}
        <circle cx="40" cy="40" r="22" fill="none" stroke="rgba(130,85,5,0.3)" strokeWidth="1.5" />
        <circle cx="40" cy="40" r="38" fill="none" stroke="rgba(130,85,5,0.2)" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

function GoldKeySVG({ size = 62 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.52} viewBox="0 0 110 57" fill="none">
      <defs>
        <radialGradient id="key-rg" cx="30%" cy="30%" r="70%">
          <stop offset="0%"   stopColor="#F5D860" />
          <stop offset="50%"  stopColor="#D4AC2C" />
          <stop offset="100%" stopColor="#9E7014" />
        </radialGradient>
        <linearGradient id="key-shaft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#F0CA50" />
          <stop offset="50%"  stopColor="#D4AC2C" />
          <stop offset="100%" stopColor="#9E7014" />
        </linearGradient>
        <filter id="key-f"><feDropShadow dx="1" dy="3" stdDeviation="3" floodColor="#7A5800" floodOpacity="0.45"/></filter>
      </defs>
      <g filter="url(#key-f)">
        {/* Key head — ornate circle */}
        <circle cx="26" cy="28" r="22" fill="url(#key-rg)" />
        <circle cx="26" cy="28" r="14" fill="rgba(120,80,5,0.2)" />
        <circle cx="26" cy="28" r="7"  fill="url(#key-rg)" opacity="0.6" />
        <circle cx="26" cy="28" r="4"  fill="rgba(100,65,5,0.35)" />
        {/* Key shaft */}
        <rect x="44" y="24" width="58" height="8" rx="4" fill="url(#key-shaft)" />
        {/* Teeth */}
        <rect x="72" y="32" width="5" height="10" rx="2" fill="url(#key-shaft)" />
        <rect x="84" y="32" width="5" height="13" rx="2" fill="url(#key-shaft)" />
        <rect x="96" y="32" width="5" height="8"  rx="2" fill="url(#key-shaft)" />
        {/* Head highlight */}
        <ellipse cx="20" cy="20" rx="7" ry="10" fill="rgba(255,255,255,0.22)" transform="rotate(-20 20 20)" />
        {/* Shaft highlight */}
        <rect x="46" y="25" width="54" height="3" rx="1.5" fill="rgba(255,255,255,0.2)" />
      </g>
    </svg>
  );
}

export function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Top-left: gold coin */}
      <div className="absolute" style={{ top: '8%', left: '4%', transform: 'rotate(-10deg)' }}>
        <GoldCoinSVG size={46} />
      </div>

      {/* Top-right: cylinder / slot reel */}
      <div className="absolute" style={{ top: '6%', right: '2%', transform: 'rotate(12deg)' }}>
        <GoldCylinderSVG size={64} />
      </div>

      {/* Mid-right: ring */}
      <div className="absolute" style={{ top: '44%', right: '-2%', transform: 'rotate(5deg)' }}>
        <GoldRingSVG size={62} />
      </div>

      {/* Bottom-left: key */}
      <div className="absolute" style={{ top: '52%', left: '0%', transform: 'rotate(20deg)' }}>
        <GoldKeySVG size={68} />
      </div>
    </div>
  );
}
