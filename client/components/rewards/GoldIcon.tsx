import type { LucideIcon } from 'lucide-react';
import {
  Star, Zap, Wind, TrendingUp, Building2, Sparkles, UtensilsCrossed, Music,
  Tag, Ticket, Gem, Gift, Trophy, Crown, Dice1
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Star,
  Zap,
  Wind,
  TrendingUp,
  Building2,
  Sparkles,
  UtensilsCrossed,
  Music,
  Tag,
  Ticket,
  Gem,
  Gift,
  Trophy,
  Crown,
  Dice1,
};

interface GoldIconProps {
  name: string;
  size?: number;
  className?: string;
}

export function GoldIcon({ name, size = 48, className = '' }: GoldIconProps) {
  const Icon = iconMap[name] ?? Star;
  return (
    <Icon
      size={size}
      strokeWidth={1.5}
      style={{ color: '#C9921A' }}
      className={className}
    />
  );
}
