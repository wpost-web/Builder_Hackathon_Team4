import { TrendingUp } from 'lucide-react';

export function EarnRedeemTab() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
      <TrendingUp size={48} strokeWidth={1.5} style={{ color: '#C9921A' }} className="mb-4" />
      <h3 className="text-gray-900 text-lg font-bold mb-2">Earn & Redeem</h3>
      <p className="text-gray-400 text-sm">Learn how to earn and redeem your Rewards Credits. Coming soon.</p>
    </div>
  );
}
