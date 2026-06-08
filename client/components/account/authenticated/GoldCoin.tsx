export function GoldCoin() {
  return (
    <div className="flex justify-center py-4">
      <div
        className="relative w-36 h-36 rounded-full flex items-center justify-center"
        style={{
          background: 'linear-gradient(145deg, #F5D060 0%, #D4AC2C 30%, #C9921A 60%, #E8C040 80%, #B8861A 100%)',
          boxShadow: '0 12px 40px rgba(180,130,20,0.5), inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -3px 6px rgba(0,0,0,0.2)',
        }}
      >
        {/* Inner ring */}
        <div
          className="absolute w-28 h-28 rounded-full border-4"
          style={{ borderColor: 'rgba(180,130,20,0.5)' }}
        />
        {/* Content */}
        <div className="flex flex-col items-center z-10">
          {/* Laurel top */}
          <svg width="60" height="18" viewBox="0 0 60 18" fill="none">
            <path d="M5 14 C5 8 12 4 20 6 C14 8 12 12 14 14" fill="rgba(150,100,10,0.6)" />
            <path d="M55 14 C55 8 48 4 40 6 C46 8 48 12 46 14" fill="rgba(150,100,10,0.6)" />
            <path d="M8 13 C10 8 18 5 24 7" stroke="rgba(150,100,10,0.7)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M52 13 C50 8 42 5 36 7" stroke="rgba(150,100,10,0.7)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <circle cx="30" cy="4" r="2.5" fill="rgba(150,100,10,0.6)" />
          </svg>
          <div className="text-center -mt-1">
            <p className="text-yellow-900 text-[9px] font-bold tracking-widest opacity-70 uppercase">Caesars Rewards</p>
            <p className="text-yellow-900 text-2xl font-black tracking-widest opacity-80 uppercase">GOLD</p>
          </div>
          {/* Laurel bottom */}
          <svg width="60" height="18" viewBox="0 0 60 18" fill="none" style={{ transform: 'scaleY(-1)' }}>
            <path d="M5 14 C5 8 12 4 20 6 C14 8 12 12 14 14" fill="rgba(150,100,10,0.6)" />
            <path d="M55 14 C55 8 48 4 40 6 C46 8 48 12 46 14" fill="rgba(150,100,10,0.6)" />
            <path d="M8 13 C10 8 18 5 24 7" stroke="rgba(150,100,10,0.7)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M52 13 C50 8 42 5 36 7" stroke="rgba(150,100,10,0.7)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
        </div>
        {/* Shine */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 60%)',
          }}
        />
      </div>
    </div>
  );
}
