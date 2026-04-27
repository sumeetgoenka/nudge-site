const steps = [
  {
    n: "01",
    title: "Drop in your week",
    body: "Open the schedule editor, sketch your routine block by block. Tag with emoji, set start/end, mark which blocks count toward 'done'.",
  },
  {
    n: "02",
    title: "Forget about it",
    body: "Nudge floats in your corner. The current block, time remaining, what's next. That's it. No tabs, no notification spam.",
  },
  {
    n: "03",
    title: "Catch up at end-of-day",
    body: "Tick what got done. Anything you missed rolls into the backlog — pick up tomorrow, or wipe it clean. Weekly progress is right there in the Progress tab.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-violet-400 mb-3">How it works</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Five minutes to set up. Forever to forget.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="text-6xl font-extrabold bg-gradient-to-br from-violet-400/30 to-fuchsia-500/10 bg-clip-text text-transparent mb-4">
                {s.n}
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-white/55 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
