import { CreditCard } from 'lucide-react';
import type { MemberProfile } from '../../../context/AuthContext';

interface MemberHeaderProps {
  member: MemberProfile;
}

export function MemberHeader({ member }: MemberHeaderProps) {
  return (
    <div className="px-5 pt-6 pb-2 flex items-start justify-between">
      <div>
        <p className="text-gray-500 text-lg font-medium">You're a</p>
        <h1 className="text-gray-900 text-3xl font-bold leading-tight">{member.tier} member</h1>
      </div>
      <div className="flex items-center gap-1.5 border border-gray-300 rounded-lg px-3 py-1.5 mt-1">
        <CreditCard size={14} className="text-gray-600" />
        <span className="text-gray-700 text-sm font-semibold">{member.rewardsCredits.toLocaleString()}</span>
      </div>
    </div>
  );
}
