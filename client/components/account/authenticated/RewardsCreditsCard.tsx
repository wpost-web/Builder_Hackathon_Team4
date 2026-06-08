import { useAnalytics } from '../../../analytics/useAnalytics';
import type { MemberProfile } from '../../../context/AuthContext';

interface RewardsCreditsCardProps {
  member: MemberProfile;
}

export function RewardsCreditsCard({ member }: RewardsCreditsCardProps) {
  const { shopNowClicked, bookNowClicked } = useAnalytics();
  const isEmpty = member.rewardsCredits === 0;

  return (
    <div className="mx-4 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm font-medium">Rewards credits</p>
        {isEmpty ? (
          <p className="text-gray-400 text-sm mt-0.5">Start earning rewards</p>
        ) : (
          <p className="text-gray-900 text-2xl font-bold mt-0.5">
            {member.rewardsCredits.toLocaleString()}
          </p>
        )}
      </div>
      {isEmpty ? (
        <button
          onClick={bookNowClicked}
          className="bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-800 transition-colors"
        >
          Book Now
        </button>
      ) : (
        <button
          onClick={shopNowClicked}
          className="bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-800 transition-colors"
        >
          Shop Now
        </button>
      )}
    </div>
  );
}
