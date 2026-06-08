import { useAuth } from '../../context/AuthContext';

export function TierMiniCard() {
  const { member } = useAuth();
  const tierCredits = member?.tierCredits ?? 999;
  const tierCreditsToNext = member?.tierCreditsToNext ?? 1001;
  const nextTier = member?.nextTier ?? 'Platinum';
  const tier = member?.tier ?? 'Gold';

  const total = tierCredits + tierCreditsToNext;
  const progress = total > 0 ? (tierCredits / total) * 100 : 0;

  return (
    <div className="mx-4 my-3 bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm border border-gray-100">
      <div className="flex-1 min-w-0">
        <p className="text-gray-700 text-sm font-semibold">
          You're a {tier} member
        </p>
        <p className="text-gray-400 text-xs mt-0.5">
          {tierCredits.toLocaleString()} Tier credits · to {nextTier}
        </p>
        <div className="h-1 bg-gray-200 rounded-full mt-2 overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: `${Math.max(progress, 2)}%`,
              background: 'linear-gradient(90deg, #C9921A, #F5D060)',
            }}
          />
        </div>
      </div>
      {/* Mini gold card */}
      <div
        className="w-12 h-8 rounded-lg flex-shrink-0"
        style={{
          background: 'linear-gradient(135deg, #D4AC2C, #F5D060, #C9921A)',
        }}
      />
    </div>
  );
}
