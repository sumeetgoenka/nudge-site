import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "Changelog",
  description: "Every Nudge release, what shipped, and when.",
};

const releases = [
  {
    version: "1.3.0",
    date: "April 27, 2026",
    tag: "latest",
    summary: "Slim minimised view, Clear-all backlog, eye-break sizing fix, branded site.",
    items: [
      "Slim minimised HUD shows only the current task and what's next",
      "20-20-20 eye-break and water-reminder overlays now fit the slim panel",
      "Backlog: 'Clear all' pill (with confirm) wipes loose ends in one tap",
      "Removed the daily-intention auto-prompt that fired on every first expand",
      "Empty default schedule — set up your week from More → Edit schedule",
      "Auto-update feed migrated to nudge.focusdragon.app",
    ],
  },
  {
    version: "1.2.1",
    date: "April 14, 2026",
    tag: "previous",
    summary: "Apple traffic lights on minimized HUD, faster Sparkle checks.",
    items: [
      "Apple traffic lights built into the minimized HUD",
      "Expand chevron moved to bottom-right",
      "Sparkle update check tightened to every 5 minutes",
    ],
  },
];

export default function Changelog() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">Changelog</h1>
        <p className="text-white/50 mb-12">Every Nudge release, ordered newest first.</p>
        <div className="space-y-12">
          {releases.map((r) => (
            <article key={r.version} className="border-t border-white/10 pt-8">
              <div className="flex items-baseline gap-3 mb-2">
                <h2 className="text-2xl font-bold tracking-tight">v{r.version}</h2>
                {r.tag === "latest" && (
                  <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                    latest
                  </span>
                )}
                <span className="ml-auto text-sm text-white/40">{r.date}</span>
              </div>
              <p className="text-white/60 mb-4">{r.summary}</p>
              <ul className="space-y-1.5 text-sm text-white/55">
                {r.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="text-violet-400 mt-1">·</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
