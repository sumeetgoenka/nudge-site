import { notFound } from "next/navigation";
import { isLocale, type Locale } from "../../i18n/locales";
import { t } from "../../i18n/translations";
import { Nav } from "../../components/i18n/Nav";
import { Footer } from "../../components/i18n/Footer";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = t(locale);
  return { title: d.meta.changelogTitle, description: d.meta.changelogDescription };
}

// Changelog entries are intentionally not translated — they're release
// notes targeted at developers / power users, and keeping them in
// English avoids drift across 20 locales every time a new version
// ships. The rest of the page (heading, "latest" pill, etc.) does
// localize.
const releases = [
  {
    version: "1.3.0",
    date: "April 27, 2026",
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
    summary: "Apple traffic lights on minimized HUD, faster Sparkle checks.",
    items: [
      "Apple traffic lights built into the minimized HUD",
      "Expand chevron moved to bottom-right",
      "Sparkle update check tightened to every 5 minutes",
    ],
  },
];

export default async function Changelog({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = t(locale as Locale);
  return (
    <>
      <Nav d={d} locale={locale as Locale} />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">{d.changelog.title}</h1>
        <p className="text-white/50 mb-12">{d.changelog.subtitle}</p>
        <div className="space-y-12">
          {releases.map((r, i) => (
            <article key={r.version} className="border-t border-white/10 pt-8">
              <div className="flex items-baseline gap-3 mb-2">
                <h2 className="text-2xl font-bold tracking-tight">v{r.version}</h2>
                {i === 0 && (
                  <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                    {d.changelog.latest}
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
      <Footer d={d} locale={locale as Locale} />
    </>
  );
}
