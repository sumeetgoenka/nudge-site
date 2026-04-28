import Link from "next/link";
import type { Dict } from "../../i18n/dictionary";
import type { Locale } from "../../i18n/locales";
import { tpl } from "../../i18n/translations";

export function Footer({ d, locale }: { d: Dict; locale: Locale }) {
  const home = `/${locale}`;
  return (
    <footer className="border-t border-white/5 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500" />
            <span className="font-bold tracking-tight">Nudge</span>
          </div>
          <p className="text-white/40 text-xs leading-relaxed">{d.footer.tagline}</p>
        </div>
        <div>
          <div className="text-white/40 text-xs uppercase tracking-wider mb-3">{d.footer.product}</div>
          <ul className="space-y-2 text-white/60">
            <li><a href="/api/download?v=1.3.0" className="hover:text-white transition">{d.footer.download}</a></li>
            <li><a href={`${home}#features`} className="hover:text-white transition">{d.footer.features}</a></li>
            <li><Link href={`${home}/changelog`} className="hover:text-white transition">{d.footer.changelog}</Link></li>
            <li><a href="/appcast.xml" className="hover:text-white transition">{d.footer.appcast}</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white/40 text-xs uppercase tracking-wider mb-3">{d.footer.resources}</div>
          <ul className="space-y-2 text-white/60">
            <li><Link href={`${home}/privacy`} className="hover:text-white transition">{d.footer.privacy}</Link></li>
            <li><Link href={`${home}/terms`} className="hover:text-white transition">{d.footer.terms}</Link></li>
            <li><a href={`${home}#faq`} className="hover:text-white transition">{d.footer.faq}</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white/40 text-xs uppercase tracking-wider mb-3">{d.footer.contact}</div>
          <ul className="space-y-2 text-white/60">
            <li><a href="mailto:anay.goenka@icloud.com" className="hover:text-white transition">anay.goenka@icloud.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between text-xs text-white/40">
          <span>{tpl(d.footer.copyright, { year: new Date().getFullYear() })}</span>
          <span>{d.footer.notarized}</span>
        </div>
      </div>
    </footer>
  );
}
