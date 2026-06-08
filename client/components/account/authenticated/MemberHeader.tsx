import type { MemberProfile } from '../../../context/AuthContext';

interface MemberHeaderProps {
  member: MemberProfile;
}

export function MemberHeader({ member }: MemberHeaderProps) {
  return (
    <div className="px-5 pt-5 pb-2 flex items-start justify-between">
      <div>
        <p className="text-gray-400 text-lg font-medium leading-tight">You're a</p>
        <h1 className="text-gray-900 text-[28px] font-bold leading-tight tracking-tight">
          {member.tier} member
        </h1>
      </div>
      <div className="flex items-center gap-1.5 border border-gray-300 rounded-lg px-3 py-1.5 mt-1">
        {/* Credit card icon from design */}
        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="13" height="10" rx="1.5" stroke="#6B7280" strokeWidth="1"/>
          <rect x="0" y="3" width="14" height="2.5" fill="#6B7280"/>
        </svg>
        <span className="text-gray-700 text-sm font-semibold">{member.rewardsCredits.toLocaleString()}</span>
      </div>
    </div>
  );
}
