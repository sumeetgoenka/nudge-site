import Link from "next/link";
import type { Dict } from "../../i18n/dictionary";
import type { Locale } from "../../i18n/locales";
import { LanguageSwitcher } from "../LanguageSwitcher";

export function Nav({ d, locale }: { d: Dict; locale: Locale }) {
  const home = `/${locale}`;
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0a0a]/70 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        <Link href={home} className="flex items-center gap-2 group flex-shrink-0">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-shadow" />
          <span className="font-bold tracking-tight text-base">Nudge</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-white/60">
          <a href={`${home}#features`} className="hover:text-white transition">{d.nav.features}</a>
          <a href={`${home}#how`} className="hover:text-white transition">{d.nav.howItWorks}</a>
          <a href={`${home}#faq`} className="hover:text-white transition">{d.nav.faq}</a>
          <Link href={`${home}/changelog`} className="hover:text-white transition">{d.nav.changelog}</Link>
        </nav>
        <div className="flex items-center gap-2.5">
          <LanguageSwitcher locale={locale} switchLabel={d.switcher.switchToEnglish} />
          <a
            href="/api/download?v=1.3.0"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition"
          >
            {d.nav.download}
          </a>
        </div>
      </div>
    </header>
  );
}
