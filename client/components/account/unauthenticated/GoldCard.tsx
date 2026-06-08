export function GoldCard() {
  return (
    <div
      className="relative w-64 h-40 rounded-2xl shadow-2xl"
      style={{
        background: 'linear-gradient(135deg, #D4AC2C 0%, #F5D060 30%, #C9921A 55%, #E8C040 75%, #B8861A 100%)',
        transform: 'rotate(-8deg)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.3)',
      }}
    >
      {/* Card shine */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)',
        }}
      />
      {/* Embossed circles */}
      <div
        className="absolute bottom-4 right-6 flex -space-x-4 opacity-30"
      >
        <div className="w-16 h-16 rounded-full border-4 border-yellow-700" />
        <div className="w-16 h-16 rounded-full border-4 border-yellow-700" />
      </div>
      {/* Card text */}
      <div className="absolute top-4 left-5">
        <p className="text-yellow-900 text-xs font-semibold opacity-80">Julius Caesar</p>
        <p className="text-yellow-900 text-xs opacity-70">Gold Member</p>
      </div>
      <div className="absolute bottom-4 left-5">
        <p
          className="text-yellow-900 font-bold text-3xl opacity-70"
          style={{ fontFamily: 'serif', letterSpacing: '0.05em' }}
        >
          5000
        </p>
      </div>
    </div>
  );
}
