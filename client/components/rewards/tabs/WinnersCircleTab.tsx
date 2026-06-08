import { WinnerAccordion } from '../WinnerAccordion';
import { mockWinners } from '../../../data/mockWinners';

export function WinnersCircleTab() {
  return (
    <div className="flex flex-col">
      <div className="px-4 pt-4 pb-3">
        <h2 className="text-gray-900 text-lg font-bold">Winners circle</h2>
        <p className="text-gray-500 text-sm mt-0.5">View all our current winners for 2025!</p>
      </div>

      {/* Hero image */}
      <div
        className="mx-4 rounded-2xl overflow-hidden h-48 flex items-center justify-center mb-4"
        style={{ background: 'linear-gradient(135deg, #8B1A1A 0%, #3A0808 100%)' }}
      >
        <div className="text-center">
          {/* Slot machine SVG */}
          <div className="flex flex-col items-center gap-1">
            <div
              className="w-24 h-20 rounded-lg flex flex-col items-center justify-center"
              style={{ background: 'linear-gradient(145deg, #D4AC2C, #F5D060, #C9921A)' }}
            >
              <div className="flex gap-1 mb-1">
                {['7', '7', '7'].map((n, i) => (
                  <div key={i} className="w-6 h-8 bg-white/20 rounded flex items-center justify-center">
                    <span className="text-yellow-900 font-black text-sm">{n}</span>
                  </div>
                ))}
              </div>
              <div className="w-16 h-1 bg-yellow-900/30 rounded" />
            </div>
            {/* Lever */}
            <div className="flex items-center gap-0">
              <div className="w-2 h-10 bg-gradient-to-b from-[#D4AC2C] to-[#C9921A] rounded-full -mt-2" />
              <div className="w-3 h-3 rounded-full bg-[#F5D060] -ml-0.5 mt-3" />
            </div>
            {/* Coins */}
            <div className="flex gap-2 -mt-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #D4AC2C, #F5D060)',
                    transform: `translateY(${i * 6}px)`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Winners accordions */}
      <div className="bg-white mx-4 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
        {mockWinners.map((sw) => (
          <WinnerAccordion key={sw.id} sweepstakes={sw} />
        ))}
      </div>
    </div>
  );
}
