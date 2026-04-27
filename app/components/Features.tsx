type Feature = { title: string; body: string; icon: React.ReactNode };

const features: Feature[] = [
  {
    title: "Always-on HUD",
    body:
      "A floating, click-through panel that follows you across every Space and full-screen app — never steals focus, never blocks a click.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7zm5 3a2 2 0 100-4 2 2 0 000 4z" />
    ),
  },
  {
    title: "Today, at a glance",
    body:
      "The slim view shows only what matters: the block you're in, time remaining, and what's next. Everything else collapses out of the way.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: "Build your week",
    body:
      "A calendar editor for your weekly routine. Drag, snap, and tag blocks with emoji. One-off date overrides for exam days, sick days, weekends.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    ),
  },
  {
    title: "20-20-20 eye breaks",
    body:
      "Every 20 minutes of laptop-open time, a tiny prompt asks you to look out the window for 20 seconds. Snooze 5× before it gives up.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    ),
  },
  {
    title: "Hydration nudges",
    body:
      "A gentle reminder to drink water between focus blocks. No big modal — just a subtle blue pill that fades when you ack it.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
    ),
  },
  {
    title: "Backlog catcher",
    body:
      "Every block you don't tick rolls into a backlog. Knock it out later, or wipe the slate with one Clear-all tap.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    ),
  },
  {
    title: "Progress dashboard",
    body:
      "Daily completion rates, weekly streaks, hours per subject. Everything stays on your Mac — no analytics phone-home.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
    ),
  },
  {
    title: "Auto-updates",
    body:
      "Sparkle-powered, EdDSA-signed silent updates. New features land without you ever opening the App Store.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    ),
  },
  {
    title: "Local-first, private",
    body:
      "No accounts, no cloud, no telemetry. Your schedule lives in JSON files on disk — yours to back up, edit, or delete.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-violet-400 mb-3">Features</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Built for people who already know what to do.
          </h2>
          <p className="text-lg text-white/55">
            Nudge isn't a todo app. It's the layer on top of your todo app that quietly keeps you on track — without interrupting you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#0a0a0a] p-7 hover:bg-white/[0.02] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  {f.icon}
                </svg>
              </div>
              <h3 className="font-semibold text-base mb-1.5">{f.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
