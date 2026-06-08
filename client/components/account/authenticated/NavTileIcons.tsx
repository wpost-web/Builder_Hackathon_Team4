// 3D gold SVG icons for the nav tiles matching the design

const goldGrad = (id: string) => (
  <defs>
    <linearGradient id={`gg1-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#F5D060" />
      <stop offset="35%" stopColor="#D4AC2C" />
      <stop offset="70%" stopColor="#C9921A" />
      <stop offset="100%" stopColor="#E8C040" />
    </linearGradient>
    <linearGradient id={`gg2-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#F5D060" />
      <stop offset="50%" stopColor="#D4AC2C" />
      <stop offset="100%" stopColor="#A07818" />
    </linearGradient>
    <linearGradient id={`gg3-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#A07818" />
      <stop offset="50%" stopColor="#F5D060" />
      <stop offset="100%" stopColor="#A07818" />
    </linearGradient>
    <filter id={`gshadow-${id}`}>
      <feDropShadow dx="1" dy="3" stdDeviation="3" floodColor="#7A5800" floodOpacity="0.35" />
    </filter>
  </defs>
);

// Bookings: 3D gold desk calendar with "14" on it
export function BookingsIcon({ size = 52 }: { size?: number }) {
  const id = 'bk';
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {goldGrad(id)}
      <g filter={`url(#gshadow-${id})`}>
        {/* Calendar body */}
        <rect x="12" y="24" width="56" height="44" rx="6" fill={`url(#gg1-${id})`} />
        {/* Calendar top header bar */}
        <rect x="12" y="24" width="56" height="16" rx="6" fill={`url(#gg2-${id})`} />
        {/* Clip header bottom corners */}
        <rect x="12" y="32" width="56" height="8" fill={`url(#gg2-${id})`} />
        {/* Ring binding left */}
        <rect x="24" y="16" width="6" height="16" rx="3" fill={`url(#gg2-${id})`} />
        {/* Ring binding right */}
        <rect x="50" y="16" width="6" height="16" rx="3" fill={`url(#gg2-${id})`} />
        {/* Day number "14" */}
        <text x="40" y="57" textAnchor="middle" fill="rgba(120,80,5,0.8)" fontSize="20" fontWeight="bold" fontFamily="sans-serif">14</text>
        {/* Grid lines (date grid suggestion) */}
        <line x1="20" y1="48" x2="60" y2="48" stroke="rgba(150,100,10,0.2)" strokeWidth="1" />
        <line x1="20" y1="56" x2="60" y2="56" stroke="rgba(150,100,10,0.2)" strokeWidth="1" />
        {/* Top highlight */}
        <rect x="14" y="25" width="52" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
      </g>
    </svg>
  );
}

// Offers: 3D gold ticket with % discount badge
export function OffersNavIcon({ size = 52 }: { size?: number }) {
  const id = 'of';
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {goldGrad(id)}
      <g filter={`url(#gshadow-${id})`}>
        {/* Ticket body — rotated slightly */}
        <g transform="rotate(-12 40 40)">
          <rect x="8" y="26" width="64" height="28" rx="6" fill={`url(#gg1-${id})`} />
          {/* Left notch */}
          <circle cx="8" cy="40" r="7" fill="white" />
          {/* Right notch */}
          <circle cx="72" cy="40" r="7" fill="white" />
          {/* Dashed center line */}
          <line x1="15" y1="40" x2="65" y2="40" stroke="rgba(150,100,10,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
          {/* % symbol */}
          <text x="40" y="45" textAnchor="middle" fill="rgba(120,80,5,0.75)" fontSize="18" fontWeight="bold" fontFamily="sans-serif">%</text>
          {/* Highlight */}
          <rect x="10" y="27" width="60" height="7" rx="3" fill="rgba(255,255,255,0.2)" />
        </g>
      </g>
    </svg>
  );
}

// Wallet: 3D gold stacked cards / wallet
export function WalletIcon({ size = 52 }: { size?: number }) {
  const id = 'wt';
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {goldGrad(id)}
      <g filter={`url(#gshadow-${id})`}>
        {/* Back card */}
        <rect x="10" y="20" width="56" height="36" rx="6" fill={`url(#gg2-${id})`} transform="rotate(-8 38 38)" />
        {/* Middle card */}
        <rect x="12" y="24" width="56" height="36" rx="6" fill={`url(#gg3-${id})`} transform="rotate(-3 40 42)" />
        {/* Front card */}
        <rect x="14" y="28" width="56" height="36" rx="6" fill={`url(#gg1-${id})`} />
        {/* Chip on front card */}
        <rect x="22" y="36" width="14" height="10" rx="2" fill={`url(#gg2-${id})`} stroke="rgba(150,100,10,0.4)" strokeWidth="1" />
        {/* Chip lines */}
        <line x1="22" y1="40" x2="36" y2="40" stroke="rgba(150,100,10,0.3)" strokeWidth="0.8" />
        <line x1="29" y1="36" x2="29" y2="46" stroke="rgba(150,100,10,0.3)" strokeWidth="0.8" />
        {/* Highlight on front card */}
        <rect x="15" y="29" width="54" height="7" rx="3" fill="rgba(255,255,255,0.22)" />
      </g>
    </svg>
  );
}

// Favorites: 3D gold heart
export function FavoritesIcon({ size = 52 }: { size?: number }) {
  const id = 'fv';
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      {goldGrad(id)}
      <g filter={`url(#gshadow-${id})`}>
        {/* Heart shape */}
        <path
          d="M40 62 C40 62 12 46 12 28 C12 20 18 14 26 14 C31 14 36 17 40 22 C44 17 49 14 54 14 C62 14 68 20 68 28 C68 46 40 62 40 62Z"
          fill={`url(#gg1-${id})`}
        />
        {/* Inner highlight */}
        <path
          d="M26 18 C22 20 18 24 17 29 C19 24 23 20 28 18 Z"
          fill="rgba(255,255,255,0.3)"
        />
        {/* Shine blob */}
        <ellipse cx="30" cy="25" rx="7" ry="9" fill="rgba(255,255,255,0.18)" transform="rotate(-20 30 25)" />
        {/* Edge shadow */}
        <path
          d="M40 62 C40 62 12 46 12 28 C12 20 18 14 26 14 C31 14 36 17 40 22 C44 17 49 14 54 14 C62 14 68 20 68 28 C68 46 40 62 40 62Z"
          fill="none"
          stroke="rgba(150,100,10,0.2)"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
}
