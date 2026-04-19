export default function App() {
  return (
    <div className="relative p-12 bg-[#0d0f12] text-white min-h-screen flex flex-col items-center justify-center font-sans overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#61afef 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <main className="relative z-10 flex flex-col items-center">
        <div className="mb-4 flex items-center gap-2 px-3 py-1 bg-[#1a1d23] border border-[#2c313a] rounded-full text-xs font-mono text-[#61afef] animate-pulse">
          <span className="w-2 h-2 bg-[#61afef] rounded-full"></span>
          SYSTEM ONLINE: NEXUS_CORE_V2
        </div>
        
        <h1 className="text-7xl font-black italic tracking-tighter uppercase mb-4 drop-shadow-[0_0_30px_rgba(97,175,239,0.5)] bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
          Hello anjay!
        </h1>
        
        <p className="text-slate-400 text-xl font-light tracking-wide max-w-md text-center">
          Neural link synchronized. <span className="text-[#61afef]">Vibe AI</span> is ready to process your request.
        </p>

        <div className="mt-12 grid grid-cols-3 gap-6 w-full max-w-2xl">
          {['LATENCY: 12ms', 'UPLINK: ACTIVE', 'VIBE: PEAK'].map((stat, i) => (
            <div key={i} className="p-4 bg-[#1a1d23]/50 border border-[#2c313a] rounded-lg flex flex-col items-center">
              <span className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Status</span>
              <span className="text-sm font-mono text-slate-200">{stat}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}