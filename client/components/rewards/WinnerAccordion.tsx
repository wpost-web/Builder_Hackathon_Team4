import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useAnalytics } from '../../analytics/useAnalytics';
import type { Sweepstakes } from '../../data/mockWinners';

interface WinnerAccordionProps {
  sweepstakes: Sweepstakes;
}

export function WinnerAccordion({ sweepstakes }: WinnerAccordionProps) {
  const [expanded, setExpanded] = useState(sweepstakes.defaultExpanded);
  const { winnerAccordionExpanded } = useAnalytics();

  const toggle = () => {
    if (!expanded) winnerAccordionExpanded(sweepstakes.title);
    setExpanded(!expanded);
  };

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-4 px-4 hover:bg-gray-50 transition-colors"
      >
        <span className="text-gray-900 text-sm font-semibold text-left pr-4">{sweepstakes.title}</span>
        {expanded ? (
          <ChevronUp size={18} className="text-gray-400 flex-shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />
        )}
      </button>
      {expanded && sweepstakes.winners.length > 0 && (
        <div className="px-4 pb-4">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left text-[11px] text-gray-400 font-medium pb-2 uppercase tracking-wide">First Name</th>
                <th className="text-left text-[11px] text-gray-400 font-medium pb-2 uppercase tracking-wide">Last Initial</th>
                <th className="text-left text-[11px] text-gray-400 font-medium pb-2 uppercase tracking-wide">State</th>
              </tr>
            </thead>
            <tbody>
              {sweepstakes.winners.map((winner, i) => (
                <tr key={i} className="border-t border-gray-50">
                  <td className="py-2 text-sm text-gray-700 font-medium">{winner.firstName}</td>
                  <td className="py-2 text-sm text-gray-700">{winner.lastInitial}</td>
                  <td className="py-2 text-sm text-gray-700">{winner.state}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {expanded && sweepstakes.winners.length === 0 && (
        <p className="px-4 pb-4 text-sm text-gray-400">No winners announced yet.</p>
      )}
    </div>
  );
}
