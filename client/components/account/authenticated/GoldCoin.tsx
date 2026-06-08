// Sparkle dot positions around the coin in the white background area
const sparkles = [
  { top: '8%',  left: '8%',  size: 10 },
  { top: '18%', right: '10%', size: 8 },
  { top: '42%', left: '5%',  size: 12 },
  { top: '55%', right: '8%', size: 9 },
  { top: '70%', left: '14%', size: 8 },
  { top: '12%', left: '35%', size: 7 },
  { top: '72%', right: '18%', size: 8 },
  { top: '30%', right: '5%', size: 10 },
];

function SparkleIcon({ size }: { size: number }) {
  const h = size / 2;
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="none">
      <path
        d="M5 0 C5 0 5.4 4.2 5 5 C4.6 5.8 0 5 0 5 C0 5 4.2 4.6 5 5 C5.8 5.4 5 10 5 10 C5 10 4.6 5.8 5 5 C5.4 4.2 10 5 10 5 C10 5 5.8 5.4 5 5 C4.2 4.6 5 0 5 0Z"
        fill="rgba(180,140,30,0.3)"
      />
    </svg>
  );
}

export function GoldCoin() {
  return (
    <div className="relative flex justify-center py-4">
      {/* Sparkle dots scattered in the white area */}
      {sparkles.map((s, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: s.top,
            left: 'left' in s ? s.left : undefined,
            right: 'right' in s ? s.right : undefined,
          }}
        >
          <SparkleIcon size={s.size} />
        </div>
      ))}

      <svg
        width="200"
        height="215"
        viewBox="0 0 200 215"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main coin face gradient — bright center, rich gold edges */}
          <radialGradient id="gc-face" cx="40%" cy="32%" r="68%" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="#F8EE80" />
            <stop offset="22%"  stopColor="#EDD040" />
            <stop offset="55%"  stopColor="#C99018" />
            <stop offset="85%"  stopColor="#AA7C14" />
            <stop offset="100%" stopColor="#8C6810" />
          </radialGradient>

          {/* 3D edge bottom gradient */}
          <linearGradient id="gc-edge" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#C89820" />
            <stop offset="40%"  stopColor="#906010" />
            <stop offset="100%" stopColor="#503800" />
          </linearGradient>

          {/* Top-left shine overlay */}
          <radialGradient id="gc-shine" cx="33%" cy="28%" r="60%" gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="rgba(255,255,255,0.45)" />
            <stop offset="55%"  stopColor="rgba(255,255,255,0.06)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>

          {/* Drop shadow filter */}
          <filter id="gc-drop" x="-25%" y="-20%" width="150%" height="155%">
            <feDropShadow dx="0" dy="10" stdDeviation="15" floodColor="#7A5800" floodOpacity="0.55" />
          </filter>

          {/* Arc path for "CAESARS REWARDS" curved text — radius 64, centred at (100,96) */}
          <path id="gc-arc" d="M 36,96 A 64,64 0 0,1 164,96" />
        </defs>

        {/* Soft ambient glow */}
        <ellipse cx="100" cy="96" rx="90" ry="88" fill="rgba(210,170,20,0.07)" />

        {/* 3D coin bottom edge — stacked ellipses for thickness illusion */}
        <ellipse cx="100" cy="174" rx="76" ry="11" fill="#5A3800" />
        <ellipse cx="100" cy="172" rx="76" ry="9"  fill="url(#gc-edge)" />
        <ellipse cx="100" cy="170" rx="76" ry="7"  fill="#A87C18" />

        <g filter="url(#gc-drop)">
          {/* Coin face */}
          <circle cx="100" cy="96" r="76" fill="url(#gc-face)" />

          {/* Outer milled edge rings */}
          <circle cx="100" cy="96" r="75" fill="none" stroke="rgba(170,120,8,0.75)" strokeWidth="2.5" />
          <circle cx="100" cy="96" r="73" fill="none" stroke="rgba(220,175,25,0.25)" strokeWidth="0.8" />

          {/* Inner design groove ring */}
          <circle cx="100" cy="96" r="65" fill="none" stroke="rgba(130,85,5,0.5)" strokeWidth="1.5" />

          {/* ── LEFT LAUREL BRANCH (leaves on the left arc of coin) ── */}
          {([-70, -55, -40, -25, -10, 5, 20, 35] as number[]).map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const r = 53;
            const lx = 100 + r * Math.cos(rad + Math.PI);
            const ly = 96  + r * Math.sin(rad + Math.PI);
            return (
              <ellipse
                key={`ll${i}`}
                cx={lx} cy={ly}
                rx="8" ry="3.5"
                fill="rgba(90,58,4,0.65)"
                transform={`rotate(${deg + 90} ${lx} ${ly})`}
              />
            );
          })}

          {/* ── RIGHT LAUREL BRANCH (mirror of left) ── */}
          {([-70, -55, -40, -25, -10, 5, 20, 35] as number[]).map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const r = 53;
            const lx = 100 + r * Math.cos(rad);
            const ly = 96  + r * Math.sin(rad);
            return (
              <ellipse
                key={`rl${i}`}
                cx={lx} cy={ly}
                rx="8" ry="3.5"
                fill="rgba(90,58,4,0.65)"
                transform={`rotate(${-(deg + 90)} ${lx} ${ly})`}
              />
            );
          })}

          {/* "GOLD" large centre text */}
          <text
            x="100" y="108"
            textAnchor="middle"
            fill="rgba(72,46,4,0.85)"
            fontSize="30"
            fontWeight="900"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            letterSpacing="5"
          >
            GOLD
          </text>

          {/* Shine overlay on top of everything */}
          <circle cx="100" cy="96" r="76" fill="url(#gc-shine)" />
        </g>

        {/* "CAESARS REWARDS" — follows the arc path at the top of the coin */}
        <text
          fill="rgba(78,50,4,0.72)"
          fontSize="9.5"
          fontWeight="700"
          letterSpacing="2.5"
          fontFamily="'Plus Jakarta Sans', sans-serif"
        >
          <textPath href="#gc-arc" startOffset="50%" textAnchor="middle">
            CAESARS REWARDS
          </textPath>
        </text>

        {/* Ground shadow ellipse */}
        <ellipse cx="100" cy="202" rx="52" ry="7" fill="rgba(0,0,0,0.1)" />
      </svg>
    </div>
  );
}
