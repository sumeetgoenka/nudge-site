export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        {/* Background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[120px] animate-glow-pulse pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-blue-500/15 blur-[100px] animate-glow-pulse pointer-events-none" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 text-center max-w-3xl animate-fade-in-up">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/60">
            Free for macOS 12+
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Your day,{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              visualized.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
            Nudge is a floating HUD for macOS that keeps your schedule, todos,
            and focus on track — without getting in the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="/Nudge.dmg"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-semibold text-base hover:bg-white/90 transition-all shadow-lg shadow-white/10"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 21.99C7.78997 22.03 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
              </svg>
              Download for Mac
              <span className="text-xs font-medium text-black/50 ml-1">v1.2.1</span>
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-1 px-6 py-3 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-all text-sm"
            >
              See features
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Floating widget mockup */}
        <div className="relative z-10 mt-16 animate-float">
          <div className="w-[220px] rounded-2xl bg-gradient-to-b from-[#1a1a2e]/95 to-[#16162a]/95 border border-white/10 shadow-2xl shadow-purple-900/20 backdrop-blur-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
              </div>
              <span className="text-[10px] text-white/30 font-mono">5:14 PM</span>
            </div>
            <p className="text-[11px] text-white/40 mb-1">Sun, 13 Apr</p>
            <p className="text-[13px] font-semibold text-white/90 mb-0.5">Deep Work</p>
            <p className="text-[10px] text-white/40 mb-3">17:00 - 18:30 &middot; 1 hr 16 min left</p>
            <div className="w-full h-[3px] rounded-full bg-white/10 mb-3">
              <div className="h-full w-[35%] rounded-full bg-gradient-to-r from-purple-400 to-blue-400" />
            </div>
            <p className="text-[10px] text-white/30">Next: Break (15 min)</p>
            <div className="flex gap-[3px] mt-3">
              {[1, 1, 1, 0.4, 0.15, 0.15, 0.15].map((a, i) => (
                <div key={i} className="h-[3px] flex-1 rounded-full" style={{ backgroundColor: `rgba(255,255,255,${a})` }} />
              ))}
            </div>
            <p className="text-[9px] text-white/25 mt-2">4 of 7 blocks done</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="w-full max-w-5xl mx-auto px-6 py-32">
        <h2 className="text-4xl font-bold text-center mb-4">
          Everything you need to stay on track
        </h2>
        <p className="text-center text-white/40 mb-20 max-w-lg mx-auto">
          Nudge floats above your windows, showing exactly what you should be
          doing — and what&rsquo;s coming next.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "🗓",
              title: "Schedule View",
              desc: "See your day as time blocks. Current task, countdown, progress — all at a glance.",
            },
            {
              icon: "✅",
              title: "Todo Mode",
              desc: "Switch to a checklist-focused widget with priorities, descriptions, and quick-add.",
            },
            {
              icon: "🎨",
              title: "Personalized",
              desc: "Set your name during onboarding. Nudge greets you and adapts its tone throughout the day.",
            },
            {
              icon: "👁",
              title: "20-20-20 Rule",
              desc: "Optional eye-break reminders that nudge you to look away every 20 minutes.",
            },
            {
              icon: "💧",
              title: "Water Reminders",
              desc: "Gentle hydration nudges anchored to wall-clock times throughout your day.",
            },
            {
              icon: "🔄",
              title: "Auto Updates",
              desc: "Built-in Sparkle integration means you always have the latest version — no re-downloading.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-white/10 transition-all"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-32 flex flex-col items-center px-6">
        <div className="relative">
          <div className="absolute inset-0 -m-20 rounded-full bg-purple-600/10 blur-[80px] pointer-events-none" />
          <div className="relative text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to stay focused?
            </h2>
            <p className="text-white/40 mb-8 max-w-md mx-auto">
              Download Nudge for free. No account needed, no tracking, no nonsense.
            </p>
            <a
              href="/Nudge.dmg"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all shadow-lg shadow-white/10"
            >
              Download Nudge
              <span className="text-xs font-medium text-black/50 ml-1">v1.2.1</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-white/[0.06] py-8 text-center text-sm text-white/25">
        <p>Nudge — Built with care. Free forever.</p>
      </footer>
    </main>
  );
}
