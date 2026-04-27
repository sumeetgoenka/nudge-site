/// Marketing mockup of the slim minimised HUD. Pure CSS — no canvas,
/// no images, so it scales crisply on Retina and weighs nothing.
export function HUDMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 -m-12 bg-gradient-to-tr from-violet-600/30 via-fuchsia-500/20 to-cyan-400/20 blur-3xl rounded-[40%] animate-glow-pulse pointer-events-none" />
      <div className="relative w-[260px] rounded-2xl bg-gradient-to-b from-[#1a1a2e]/95 to-[#16162a]/95 border border-white/10 shadow-2xl shadow-violet-900/40 backdrop-blur-xl overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500" />
        <div className="px-4 pt-3 pb-4">
          <div className="flex items-center justify-between mb-3 text-[10px] uppercase tracking-wider text-white/40">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-white/60 tabular-nums text-[11px]">Mon · 17:58</span>
          </div>
          <div className="space-y-1">
            <div className="text-[15px] font-semibold text-white">Physics (50)</div>
            <div className="text-[11px] text-white/60 tabular-nums">17:30–18:20 · 22 min left</div>
            <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[55%] bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full" />
            </div>
          </div>
          <div className="my-3 border-t border-white/5" />
          <div className="text-[12px] text-white/55">
            Next · Chemistry (30) at 18:30
          </div>
        </div>
      </div>
    </div>
  );
}
