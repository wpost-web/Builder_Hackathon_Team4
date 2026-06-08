// 3D gold floating decorative elements matching the unauthenticated design

function GoldCoinSVG({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <defs>
        <linearGradient id="coin-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D060" />
          <stop offset="40%" stopColor="#D4AC2C" />
          <stop offset="100%" stopColor="#C9921A" />
        </linearGradient>
        <filter id="coin-shadow">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#7A5800" floodOpacity="0.5" />
        </filter>
      </defs>
      <g filter="url(#coin-shadow)">
        <circle cx="40" cy="40" r="32" fill="url(#coin-g)" />
        <circle cx="40" cy="40" r="25" fill="none" stroke="rgba(150,100,10,0.4)" strokeWidth="2" />
        <ellipse cx="33" cy="32" rx="9" ry="13" fill="rgba(255,255,255,0.2)" />
      </g>
    </svg>
  );
}

function GoldKeySVG({ size = 56 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.55} viewBox="0 0 100 55" fill="none">
      <defs>
        <linearGradient id="key-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D060" />
          <stop offset="40%" stopColor="#D4AC2C" />
          <stop offset="100%" stopColor="#B8861A" />
        </linearGradient>
        <filter id="key-shadow">
          <feDropShadow dx="1" dy="3" stdDeviation="3" floodColor="#7A5800" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter="url(#key-shadow)">
        {/* Key head */}
        <circle cx="24" cy="28" r="20" fill="url(#key-g)" />
        <circle cx="24" cy="28" r="13" fill="rgba(120,80,5,0.25)" />
        <circle cx="24" cy="28" r="6" fill="url(#key-g)" opacity="0.6" />
        {/* Key shaft */}
        <rect x="40" y="24" width="52" height="8" rx="4" fill="url(#key-g)" />
        {/* Key teeth */}
        <rect x="70" y="32" width="5" height="9" rx="2" fill="url(#key-g)" />
        <rect x="82" y="32" width="5" height="11" rx="2" fill="url(#key-g)" />
        {/* Highlight on head */}
        <ellipse cx="19" cy="21" rx="6" ry="9" fill="rgba(255,255,255,0.22)" />
        {/* Shaft highlight */}
        <rect x="42" y="25" width="48" height="3" rx="1.5" fill="rgba(255,255,255,0.2)" />
      </g>
    </svg>
  );
}

function GoldRingSVG({ size = 56 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <defs>
        <linearGradient id="ring-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D060" />
          <stop offset="35%" stopColor="#D4AC2C" />
          <stop offset="70%" stopColor="#C9921A" />
          <stop offset="100%" stopColor="#E8C040" />
        </linearGradient>
        <filter id="ring-shadow">
          <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#7A5800" floodOpacity="0.5" />
        </filter>
      </defs>
      <g filter="url(#ring-shadow)">
        {/* Ring outer */}
        <circle cx="40" cy="40" r="30" fill="none" stroke="url(#ring-g)" strokeWidth="14" />
        {/* Ring highlight top */}
        <path d="M18 22 Q40 10 62 22" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="5" strokeLinecap="round" />
        {/* Band grooves */}
        <circle cx="40" cy="40" r="23" fill="none" stroke="rgba(150,100,10,0.25)" strokeWidth="1" />
        <circle cx="40" cy="40" r="37" fill="none" stroke="rgba(150,100,10,0.15)" strokeWidth="1" />
      </g>
    </svg>
  );
}

function GoldCylinderSVG({ size = 52 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.65} viewBox="0 0 80 52" fill="none">
      <defs>
        <linearGradient id="cyl-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D060" />
          <stop offset="40%" stopColor="#D4AC2C" />
          <stop offset="100%" stopColor="#C9921A" />
        </linearGradient>
        <linearGradient id="cyl-side" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5D060" />
          <stop offset="50%" stopColor="#D4AC2C" />
          <stop offset="100%" stopColor="#A07818" />
        </linearGradient>
        <filter id="cyl-shadow">
          <feDropShadow dx="1" dy="3" stdDeviation="3" floodColor="#7A5800" floodOpacity="0.45" />
        </filter>
      </defs>
      <g filter="url(#cyl-shadow)">
        {/* Body */}
        <rect x="10" y="6" width="60" height="40" rx="6" fill="url(#cyl-g)" />
        {/* Horizontal bands */}
        <rect x="10" y="14" width="60" height="4" fill="rgba(150,100,10,0.3)" />
        <rect x="10" y="22" width="60" height="4" fill="rgba(150,100,10,0.3)" />
        <rect x="10" y="30" width="60" height="4" fill="rgba(150,100,10,0.3)" />
        <rect x="10" y="38" width="60" height="4" fill="rgba(150,100,10,0.3)" />
        {/* Left end cap */}
        <ellipse cx="10" cy="26" rx="6" ry="20" fill="url(#cyl-side)" />
        {/* Right end cap */}
        <ellipse cx="70" cy="26" rx="6" ry="20" fill="url(#cyl-side)" />
        {/* Top highlight */}
        <rect x="14" y="7" width="52" height="5" rx="2" fill="rgba(255,255,255,0.25)" />
        {/* "777" text hint */}
        <text x="40" y="28" textAnchor="middle" fill="rgba(120,80,5,0.5)" fontSize="10" fontWeight="bold" fontFamily="sans-serif">777</text>
      </g>
    </svg>
  );
}

export function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top-left coin */}
      <div className="absolute top-16 left-2" style={{ transform: 'rotate(-15deg)' }}>
        <GoldCoinSVG size={46} />
      </div>

      {/* Top-right cylinder (slot machine reel) */}
      <div className="absolute top-14 right-2" style={{ transform: 'rotate(12deg)' }}>
        <GoldCylinderSVG size={60} />
      </div>

      {/* Right-side ring */}
      <div className="absolute top-52 right-0" style={{ transform: 'rotate(8deg)' }}>
        <GoldRingSVG size={62} />
      </div>

      {/* Bottom-left key */}
      <div className="absolute bottom-52 left-0" style={{ transform: 'rotate(25deg)' }}>
        <GoldKeySVG size={68} />
      </div>

      {/* Second small coin bottom-right area */}
      <div className="absolute bottom-56 right-4" style={{ transform: 'rotate(-10deg)' }}>
        <GoldCoinSVG size={32} />
      </div>
    </div>
  );
}
