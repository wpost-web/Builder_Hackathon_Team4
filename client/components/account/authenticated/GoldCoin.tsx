export function GoldCoin() {
  return (
    <div className="flex justify-center py-6">
      <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
        <defs>
          {/* Main gold radial gradient — lighter center, darker edges */}
          <radialGradient id="coin-main" cx="38%" cy="35%" r="65%">
            <stop offset="0%"   stopColor="#F8E068" />
            <stop offset="30%"  stopColor="#E8C840" />
            <stop offset="60%"  stopColor="#C9921A" />
            <stop offset="100%" stopColor="#9A7010" />
          </radialGradient>
          {/* Edge / rim gradient (darker) */}
          <radialGradient id="coin-rim" cx="50%" cy="50%" r="50%">
            <stop offset="75%"  stopColor="transparent" />
            <stop offset="88%"  stopColor="rgba(100,68,5,0.25)" />
            <stop offset="100%" stopColor="rgba(80,50,5,0.55)" />
          </radialGradient>
          {/* Shine overlay */}
          <radialGradient id="coin-shine" cx="32%" cy="28%" r="55%">
            <stop offset="0%"   stopColor="rgba(255,255,255,0.38)" />
            <stop offset="60%"  stopColor="rgba(255,255,255,0.05)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <filter id="coin-drop">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#6A4A00" floodOpacity="0.55" />
          </filter>
        </defs>

        <g filter="url(#coin-drop)">
          {/* Coin base */}
          <circle cx="80" cy="80" r="72" fill="url(#coin-main)" />
          {/* Rim darkening */}
          <circle cx="80" cy="80" r="72" fill="url(#coin-rim)" />
          {/* Shine */}
          <circle cx="80" cy="80" r="72" fill="url(#coin-shine)" />

          {/* ── LAUREL WREATH — left branch ── */}
          {/* Each leaf: small ellipse rotated around the left arc */}
          {[-70,-55,-40,-25,-10,5,20,35].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const r = 54;
            const cx = 80 + r * Math.cos(rad + Math.PI);
            const cy = 80 + r * Math.sin(rad + Math.PI);
            return (
              <ellipse
                key={`l${i}`}
                cx={cx} cy={cy}
                rx="7" ry="4"
                transform={`rotate(${deg + 90} ${cx} ${cy})`}
                fill="rgba(100,68,5,0.55)"
              />
            );
          })}

          {/* ── LAUREL WREATH — right branch ── */}
          {[-70,-55,-40,-25,-10,5,20,35].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const r = 54;
            const cx = 80 + r * Math.cos(rad);
            const cy = 80 + r * Math.sin(rad);
            return (
              <ellipse
                key={`r${i}`}
                cx={cx} cy={cy}
                rx="7" ry="4"
                transform={`rotate(${-(deg + 90)} ${cx} ${cy})`}
                fill="rgba(100,68,5,0.55)"
              />
            );
          })}

          {/* Inner ring */}
          <circle cx="80" cy="80" r="48" fill="none" stroke="rgba(100,68,5,0.3)" strokeWidth="1.5" />

          {/* ── TEXT ── */}
          {/* "CAESARS REWARDS" arc text — approximated with straight text */}
          <text
            x="80" y="50"
            textAnchor="middle"
            fill="rgba(80,50,5,0.7)"
            fontSize="8.5"
            fontWeight="700"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            letterSpacing="3"
          >
            CAESARS REWARDS
          </text>

          {/* "GOLD" — large center */}
          <text
            x="80" y="96"
            textAnchor="middle"
            fill="rgba(80,50,5,0.75)"
            fontSize="28"
            fontWeight="900"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            letterSpacing="4"
          >
            GOLD
          </text>

          {/* Outer edge groove */}
          <circle cx="80" cy="80" r="69" fill="none" stroke="rgba(100,68,5,0.2)" strokeWidth="2" />
        </g>

        {/* Ground shadow */}
        <ellipse cx="80" cy="156" rx="54" ry="8" fill="rgba(0,0,0,0.18)" />
      </svg>
    </div>
  );
}
