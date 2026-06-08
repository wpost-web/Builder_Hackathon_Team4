export function GoldCard() {
  return (
    <div
      className="relative rounded-2xl shadow-2xl overflow-hidden"
      style={{
        width: 260,
        height: 164,
        background: 'linear-gradient(135deg, #E8C840 0%, #F5D860 18%, #D4AC2C 35%, #C9921A 52%, #E2C03A 68%, #D4AC2C 80%, #B8861A 100%)',
        transform: 'rotate(-8deg)',
        boxShadow: '0 24px 64px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.35)',
      }}
    >
      {/* Top-left shine overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)',
        }}
      />

      {/* Embossed watermark circles (bottom-right) */}
      <div className="absolute bottom-3 right-4 flex -space-x-5 opacity-25">
        <div className="w-20 h-20 rounded-full border-4 border-yellow-800" />
        <div className="w-20 h-20 rounded-full border-4 border-yellow-800" />
      </div>

      {/* Card chip (top-left area) */}
      <div
        className="absolute top-5 left-5 w-8 h-6 rounded"
        style={{
          background: 'linear-gradient(135deg, rgba(180,130,20,0.6), rgba(120,90,10,0.5))',
          border: '1px solid rgba(150,100,10,0.4)',
        }}
      />

      {/* Member name + tier */}
      <div className="absolute top-4 left-16">
        <p className="text-yellow-950 text-[11px] font-semibold opacity-70 leading-tight">Julius Caesar</p>
        <p className="text-yellow-950 text-[10px] opacity-60 leading-tight">Gold Member</p>
      </div>

      {/* Card number "5000" */}
      <div className="absolute bottom-5 left-5">
        <p
          className="text-yellow-950 font-black opacity-55"
          style={{ fontSize: 36, letterSpacing: '0.04em', fontFamily: 'Georgia, serif' }}
        >
          5000
        </p>
      </div>

      {/* Caesars logo area (top-right) */}
      <div className="absolute top-4 right-5 text-right">
        <p className="text-yellow-950 text-[8px] font-bold opacity-50 tracking-widest uppercase">CAESARS</p>
        <p className="text-yellow-950 text-[8px] font-bold opacity-40 tracking-widest uppercase">REWARDS</p>
      </div>
    </div>
  );
}
