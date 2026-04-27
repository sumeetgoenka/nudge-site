const faqs = [
  {
    q: "Is Nudge really free?",
    a: "Yes. Nudge is free for macOS 12 Monterey and later. No upsells, no premium tier. If we ever ship paid features, the free tier stays.",
  },
  {
    q: "Does Nudge send any data anywhere?",
    a: "No. Your schedule, todos, and progress live in JSON files on your Mac. No accounts, no analytics, no cloud sync. The app's only network call is to check for new versions via Sparkle.",
  },
  {
    q: "Will it slow down my Mac?",
    a: "Negligible. Nudge is a sub-15MB native app with no Electron / web view. CPU usage is essentially zero between the once-per-second clock tick.",
  },
  {
    q: "Why isn't this on the App Store?",
    a: "App Store sandboxing would block the always-on, click-through HUD behaviour that's the whole point of the product. Nudge is signed with a Developer ID and notarized by Apple — same security guarantees, just delivered direct.",
  },
  {
    q: "Can I sync between Macs?",
    a: "Not yet. The schedule files live in ~/Library/Application Support/Nudge/ — stick that folder in iCloud Drive or Dropbox and you've got DIY sync.",
  },
  {
    q: "How do I uninstall?",
    a: "Drag Nudge.app to the Trash, then delete ~/Library/Application Support/Nudge/. That's everything.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-32 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-violet-400 mb-3">FAQ</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Common questions.
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <summary className="cursor-pointer list-none p-5 flex items-center justify-between gap-4">
                <span className="font-medium text-white/90">{f.q}</span>
                <svg
                  className="w-4 h-4 text-white/40 transition-transform group-open:rotate-180 flex-shrink-0"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-white/60 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
