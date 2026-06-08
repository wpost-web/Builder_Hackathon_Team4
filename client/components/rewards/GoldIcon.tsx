interface GoldIconProps {
  name: string;
  size?: number;
  className?: string;
}

// Gold gradient defs shared by all icons
const GoldDefs = ({ id }: { id: string }) => (
  <defs>
    <linearGradient id={`g1-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#F5D060" />
      <stop offset="30%" stopColor="#D4AC2C" />
      <stop offset="65%" stopColor="#C9921A" />
      <stop offset="100%" stopColor="#E8C040" />
    </linearGradient>
    <linearGradient id={`g2-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#F5D060" />
      <stop offset="40%" stopColor="#D4AC2C" />
      <stop offset="100%" stopColor="#A07818" />
    </linearGradient>
    <linearGradient id={`g3-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#B8861A" />
      <stop offset="50%" stopColor="#F5D060" />
      <stop offset="100%" stopColor="#B8861A" />
    </linearGradient>
    <filter id={`shadow-${id}`}>
      <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#8B6000" floodOpacity="0.4" />
    </filter>
  </defs>
);

// Slot machine reel / cylinder
const CylinderIcon = ({ id, size }: { id: string; size: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <GoldDefs id={id} />
    <g filter={`url(#shadow-${id})`}>
      {/* Main cylinder body */}
      <rect x="12" y="22" width="56" height="38" rx="6" fill={`url(#g1-${id})`} />
      {/* Horizontal rings */}
      <rect x="12" y="30" width="56" height="3" fill={`url(#g3-${id})`} opacity="0.6" />
      <rect x="12" y="39" width="56" height="3" fill={`url(#g3-${id})`} opacity="0.6" />
      <rect x="12" y="48" width="56" height="3" fill={`url(#g3-${id})`} opacity="0.6" />
      {/* Left cap ellipse */}
      <ellipse cx="12" cy="41" rx="6" ry="19" fill={`url(#g2-${id})`} />
      {/* Right cap ellipse */}
      <ellipse cx="68" cy="41" rx="6" ry="19" fill={`url(#g2-${id})`} />
      {/* Top highlight */}
      <rect x="18" y="23" width="44" height="5" rx="2" fill="rgba(255,255,255,0.25)" />
    </g>
  </svg>
);

// Golden ticket with embossed star
const TicketIcon = ({ id, size }: { id: string; size: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <GoldDefs id={id} />
    <g filter={`url(#shadow-${id})`}>
      {/* Ticket body */}
      <rect x="6" y="18" width="68" height="44" rx="6" fill={`url(#g1-${id})`} />
      {/* Ticket notches */}
      <circle cx="6" cy="40" r="6" fill="white" />
      <circle cx="74" cy="40" r="6" fill="white" />
      {/* Perforated border */}
      <rect x="12" y="22" width="56" height="36" rx="3" fill="none" stroke="rgba(150,100,10,0.4)" strokeWidth="1" strokeDasharray="3 2" />
      {/* Star */}
      <polygon
        points="40,26 42.9,34.9 52.4,34.9 44.8,40.4 47.7,49.3 40,43.8 32.3,49.3 35.2,40.4 27.6,34.9 37.1,34.9"
        fill={`url(#g2-${id})`}
        stroke="rgba(150,100,10,0.5)"
        strokeWidth="0.5"
      />
      {/* Highlight */}
      <rect x="8" y="19" width="64" height="7" rx="3" fill="rgba(255,255,255,0.2)" />
    </g>
  </svg>
);

// Golden rocket
const RocketIcon = ({ id, size }: { id: string; size: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <GoldDefs id={id} />
    <g filter={`url(#shadow-${id})`} transform="rotate(-35, 40, 40)">
      {/* Rocket body */}
      <ellipse cx="40" cy="38" rx="12" ry="24" fill={`url(#g1-${id})`} />
      {/* Nose cone */}
      <path d="M28 22 Q40 6 52 22 Z" fill={`url(#g2-${id})`} />
      {/* Left fin */}
      <path d="M28 52 L18 64 L34 58 Z" fill={`url(#g2-${id})`} />
      {/* Right fin */}
      <path d="M52 52 L62 64 L46 58 Z" fill={`url(#g2-${id})`} />
      {/* Window */}
      <circle cx="40" cy="36" r="6" fill="rgba(150,100,10,0.3)" stroke="rgba(150,100,10,0.5)" strokeWidth="1.5" />
      <circle cx="40" cy="36" r="3" fill="rgba(255,255,200,0.2)" />
      {/* Flame */}
      <ellipse cx="40" cy="65" rx="6" ry="5" fill="#F5D060" opacity="0.7" />
      {/* Highlight */}
      <ellipse cx="35" cy="30" rx="4" ry="10" fill="rgba(255,255,255,0.2)" />
    </g>
  </svg>
);

// Golden key
const KeyIcon = ({ id, size }: { id: string; size: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <GoldDefs id={id} />
    <g filter={`url(#shadow-${id})`}>
      {/* Key head ring */}
      <circle cx="28" cy="36" r="16" fill={`url(#g1-${id})`} />
      <circle cx="28" cy="36" r="10" fill="rgba(150,100,10,0.3)" />
      <circle cx="28" cy="36" r="5" fill={`url(#g2-${id})`} opacity="0.6" />
      {/* Key shaft */}
      <rect x="38" y="33" width="30" height="6" rx="3" fill={`url(#g1-${id})`} />
      {/* Key teeth */}
      <rect x="56" y="39" width="4" height="6" rx="1" fill={`url(#g2-${id})`} />
      <rect x="64" y="39" width="4" height="8" rx="1" fill={`url(#g2-${id})`} />
      {/* Highlight on ring */}
      <ellipse cx="24" cy="30" rx="5" ry="7" fill="rgba(255,255,255,0.25)" />
    </g>
  </svg>
);

// Golden coin / medallion
const CoinIcon = ({ id, size }: { id: string; size: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <GoldDefs id={id} />
    <g filter={`url(#shadow-${id})`}>
      {/* Outer coin */}
      <circle cx="40" cy="40" r="30" fill={`url(#g1-${id})`} />
      {/* Inner ring */}
      <circle cx="40" cy="40" r="24" fill="none" stroke="rgba(150,100,10,0.5)" strokeWidth="2" />
      {/* Dollar sign or CR */}
      <text x="40" y="47" textAnchor="middle" fill="rgba(100,70,5,0.7)" fontSize="22" fontWeight="bold" fontFamily="serif">CR</text>
      {/* Highlight */}
      <ellipse cx="33" cy="30" rx="9" ry="14" fill="rgba(255,255,255,0.22)" />
      {/* Edge shadow */}
      <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(150,100,10,0.3)" strokeWidth="3" />
    </g>
  </svg>
);

// Golden building / hotel
const BuildingIcon = ({ id, size }: { id: string; size: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <GoldDefs id={id} />
    <g filter={`url(#shadow-${id})`}>
      {/* Main building */}
      <rect x="18" y="24" width="44" height="44" rx="3" fill={`url(#g1-${id})`} />
      {/* Tower */}
      <rect x="28" y="14" width="24" height="14" rx="2" fill={`url(#g2-${id})`} />
      {/* Windows row 1 */}
      {[24, 34, 44, 54].map((x) => (
        <rect key={x} x={x} y="32" width="6" height="8" rx="1" fill="rgba(150,100,10,0.35)" />
      ))}
      {/* Windows row 2 */}
      {[24, 34, 44, 54].map((x) => (
        <rect key={x} x={x} y="46" width="6" height="8" rx="1" fill="rgba(150,100,10,0.35)" />
      ))}
      {/* Door */}
      <rect x="35" y="56" width="10" height="12" rx="2" fill="rgba(150,100,10,0.4)" />
      {/* Highlight */}
      <rect x="19" y="25" width="42" height="8" rx="2" fill="rgba(255,255,255,0.2)" />
    </g>
  </svg>
);

// Golden fork/knife plate (dining)
const DiningIcon = ({ id, size }: { id: string; size: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <GoldDefs id={id} />
    <g filter={`url(#shadow-${id})`}>
      {/* Plate */}
      <circle cx="40" cy="42" r="26" fill={`url(#g1-${id})`} />
      <circle cx="40" cy="42" r="20" fill="rgba(180,130,20,0.25)" />
      {/* Fork */}
      <rect x="33" y="22" width="3" height="26" rx="1.5" fill={`url(#g2-${id})`} />
      <rect x="31" y="22" width="1.5" height="10" rx="0.75" fill={`url(#g2-${id})`} />
      <rect x="36" y="22" width="1.5" height="10" rx="0.75" fill={`url(#g2-${id})`} />
      {/* Knife */}
      <rect x="44" y="22" width="3" height="26" rx="1.5" fill={`url(#g2-${id})`} />
      <path d="M44 22 Q50 26 47 34 L44 34 Z" fill={`url(#g2-${id})`} />
      {/* Highlight */}
      <ellipse cx="33" cy="35" rx="9" ry="13" fill="rgba(255,255,255,0.15)" />
    </g>
  </svg>
);

// Golden sparkle/wellness flower
const WellnessIcon = ({ id, size }: { id: string; size: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <GoldDefs id={id} />
    <g filter={`url(#shadow-${id})`}>
      {/* Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <ellipse
          key={i}
          cx={40 + 16 * Math.cos((angle * Math.PI) / 180)}
          cy={40 + 16 * Math.sin((angle * Math.PI) / 180)}
          rx="7"
          ry="12"
          transform={`rotate(${angle} ${40 + 16 * Math.cos((angle * Math.PI) / 180)} ${40 + 16 * Math.sin((angle * Math.PI) / 180)})`}
          fill={`url(#g1-${id})`}
          opacity="0.85"
        />
      ))}
      {/* Center */}
      <circle cx="40" cy="40" r="12" fill={`url(#g2-${id})`} />
      {/* Center highlight */}
      <circle cx="36" cy="36" r="4" fill="rgba(255,255,255,0.25)" />
    </g>
  </svg>
);

// Golden music note / entertainment
const MusicIcon = ({ id, size }: { id: string; size: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <GoldDefs id={id} />
    <g filter={`url(#shadow-${id})`}>
      {/* Note stem */}
      <rect x="46" y="16" width="6" height="38" rx="3" fill={`url(#g1-${id})`} />
      {/* Note head */}
      <ellipse cx="36" cy="56" rx="12" ry="9" transform="rotate(-20 36 56)" fill={`url(#g1-${id})`} />
      {/* Flag */}
      <path d="M52 16 Q70 22 64 38 Q58 28 52 32 Z" fill={`url(#g2-${id})`} />
      {/* Highlight */}
      <ellipse cx="32" cy="52" rx="5" ry="4" fill="rgba(255,255,255,0.2)" transform="rotate(-20 32 52)" />
    </g>
  </svg>
);

// Golden trending up / multiplier
const TrendingIcon = ({ id, size }: { id: string; size: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <GoldDefs id={id} />
    <g filter={`url(#shadow-${id})`}>
      {/* Arrow path */}
      <path
        d="M10 58 L26 40 L38 50 L58 24 L70 24 L70 38 L58 24 L58 38"
        fill="none"
        stroke={`url(#g1-${id})`}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Arrow head */}
      <polygon points="58,16 74,22 62,32" fill={`url(#g1-${id})`} />
      {/* Shadow circle base */}
      <ellipse cx="40" cy="70" rx="26" ry="4" fill="rgba(180,130,20,0.2)" />
    </g>
  </svg>
);

// Entries ticket (serif Entries label style)
const EntriesIcon = ({ id, size }: { id: string; size: number }) => (
  <svg width={size} height={size * 0.7} viewBox="0 0 120 84" fill="none">
    <GoldDefs id={id} />
    <g filter={`url(#shadow-${id})`}>
      {/* Ticket body */}
      <rect x="4" y="4" width="112" height="76" rx="8" fill={`url(#g1-${id})`} />
      {/* Left notch */}
      <circle cx="4" cy="42" r="10" fill="white" />
      {/* Right notch */}
      <circle cx="116" cy="42" r="10" fill="white" />
      {/* Dashed line border */}
      <rect x="14" y="8" width="92" height="68" rx="4" fill="none"
        stroke="rgba(150,100,10,0.35)" strokeWidth="1.5" strokeDasharray="4 3" />
      {/* Star embossed */}
      <polygon
        points="60,20 63.5,32 76,32 66,39 69.5,51 60,44 50.5,51 54,39 44,32 56.5,32"
        fill={`url(#g2-${id})`}
        opacity="0.7"
      />
      {/* Highlight */}
      <rect x="6" y="5" width="108" height="12" rx="4" fill="rgba(255,255,255,0.2)" />
    </g>
  </svg>
);

const iconComponents: Record<string, React.FC<{ id: string; size: number }>> = {
  Star: TicketIcon,
  Zap: CylinderIcon,
  Wind: TicketIcon,
  TrendingUp: TrendingIcon,
  Building2: BuildingIcon,
  Sparkles: WellnessIcon,
  UtensilsCrossed: DiningIcon,
  Music: MusicIcon,
  Tag: TicketIcon,
  Ticket: TicketIcon,
  Gem: CoinIcon,
  Gift: CoinIcon,
  Trophy: CoinIcon,
  Crown: CoinIcon,
  Dice1: CylinderIcon,
  // semantic named overrides
  Gaming: CylinderIcon,
  Entries: EntriesIcon,
  Rocket: RocketIcon,
  Key: KeyIcon,
  Coin: CoinIcon,
  Dining: DiningIcon,
  Wellness: WellnessIcon,
  Entertainment: MusicIcon,
  Resorts: BuildingIcon,
};

let counter = 0;

export function GoldIcon({ name, size = 48, className = '' }: GoldIconProps) {
  const id = `gi-${name}-${size}-${counter++}`;
  const Component = iconComponents[name] ?? TicketIcon;
  return (
    <span className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <Component id={id} size={size} />
    </span>
  );
}
