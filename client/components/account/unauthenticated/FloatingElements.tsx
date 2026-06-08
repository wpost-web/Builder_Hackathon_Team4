export function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top-left coin */}
      <div
        className="absolute top-24 left-4 w-10 h-10 rounded-full"
        style={{
          background: 'linear-gradient(135deg, #D4AC2C, #F5D060, #C9921A)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
          transform: 'rotate(-20deg)',
        }}
      />
      {/* Top-right cylinder (slot machine reel) */}
      <div
        className="absolute top-20 right-8 w-12 h-12 rounded-lg"
        style={{
          background: 'linear-gradient(135deg, #D4AC2C, #F5D060, #C9921A)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
          transform: 'rotate(15deg)',
        }}
      >
        <div className="absolute inset-1 rounded flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-yellow-900 rounded opacity-50" />
        </div>
      </div>
      {/* Right ring */}
      <div
        className="absolute top-52 right-4 w-14 h-14 rounded-full border-4"
        style={{
          borderColor: '#D4AC2C',
          background: 'linear-gradient(135deg, rgba(212,172,44,0.3), rgba(245,208,96,0.1))',
          boxShadow: '0 4px 12px rgba(0,0,0,0.4), inset 0 0 8px rgba(212,172,44,0.5)',
          transform: 'rotate(10deg)',
        }}
      />
      {/* Bottom-left key */}
      <div
        className="absolute bottom-48 left-3"
        style={{ transform: 'rotate(30deg)' }}
      >
        <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
          <circle cx="8" cy="12" r="7" stroke="#D4AC2C" strokeWidth="2.5" fill="rgba(212,172,44,0.2)" />
          <circle cx="8" cy="12" r="3.5" stroke="#D4AC2C" strokeWidth="1.5" fill="none" />
          <rect x="15" y="10.5" width="22" height="3" rx="1.5" fill="#D4AC2C" />
          <rect x="30" y="10.5" width="3" height="6" rx="1" fill="#D4AC2C" />
          <rect x="36" y="10.5" width="3" height="5" rx="1" fill="#D4AC2C" />
        </svg>
      </div>
      {/* Bottom-right coin stack */}
      <div
        className="absolute bottom-52 right-5 w-8 h-8 rounded-full"
        style={{
          background: 'linear-gradient(135deg, #D4AC2C, #E8C040)',
          boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
        }}
      />
    </div>
  );
}
