import type { Dict } from "../../i18n/dictionary";

export function HowItWorks({ d }: { d: Dict }) {
  return (
    <section id="how" className="relative py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.2em] text-violet-400 mb-3">{d.howItWorks.section}</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">{d.howItWorks.title}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {d.howItWorks.steps.map((s, i) => (
            <div key={i} className="relative">
              <div className="text-6xl font-extrabold bg-gradient-to-br from-violet-400/30 to-fuchsia-500/10 bg-clip-text text-transparent mb-4">
                {String(i + 1).padStart(2, "0")}
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
