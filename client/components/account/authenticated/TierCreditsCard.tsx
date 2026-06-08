import type { MemberProfile } from '../../../context/AuthContext';

interface TierCreditsCardProps {
  member: MemberProfile;
}

export function TierCreditsCard({ member }: TierCreditsCardProps) {
  const total = member.tierCredits + member.tierCreditsToNext;
  const progress = total > 0 ? (member.tierCredits / total) * 100 : 0;

  return (
    <div className="mx-4 bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
      <p className="text-gray-500 text-sm font-medium">Tier credits</p>
      <div className="flex items-center justify-between mt-1 mb-3">
        <span className="text-gray-900 text-3xl font-bold tracking-tight">
          {member.tierCredits.toLocaleString()}
        </span>
        <span className="text-gray-400 text-sm">
          {member.tierCreditsToNext.toLocaleString()} to {member.nextTier}
        </span>
      </div>
      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
        {progress > 0 && (
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #C9921A, #F5D060)',
            }}
          />
        )}
      </div>
    </div>
  );
}
