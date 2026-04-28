import type { Dict } from "../../i18n/dictionary";

export function FAQ({ d }: { d: Dict }) {
  return (
    <section id="faq" className="relative py-32 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-violet-400 mb-3">{d.faq.section}</div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">{d.faq.title}</h2>
        </div>
        <div className="space-y-3">
          {d.faq.items.map((f, i) => (
            <details
              key={i}
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
