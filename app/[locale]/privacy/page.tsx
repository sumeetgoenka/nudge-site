import { notFound } from "next/navigation";
import { isLocale, type Locale } from "../../i18n/locales";
import { t } from "../../i18n/translations";
import { Nav } from "../../components/i18n/Nav";
import { Footer } from "../../components/i18n/Footer";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = t(locale);
  return { title: d.meta.privacyTitle, description: d.meta.privacyDescription };
}

export default async function Privacy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = t(locale as Locale);
  return (
    <>
      <Nav d={d} locale={locale as Locale} />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-extrabold tracking-tight mb-6">{d.privacy.title}</h1>
        <p className="text-white/60 leading-relaxed mb-6">{d.privacy.intro}</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">{d.privacy.networkTitle}</h2>
        <p className="text-white/60 leading-relaxed">{d.privacy.networkBody}</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">{d.privacy.analyticsTitle}</h2>
        <p className="text-white/60 leading-relaxed">{d.privacy.analyticsBody}</p>
        <h2 className="text-xl font-semibold mt-8 mb-3">{d.privacy.contactTitle}</h2>
        <p className="text-white/60 leading-relaxed">
          {d.privacy.contactBody}
          <a href="mailto:anay.goenka@icloud.com" className="text-violet-400 hover:underline">anay.goenka@icloud.com</a>
        </p>
      </main>
      <Footer d={d} locale={locale as Locale} />
    </>
  );
}
