import { notFound } from "next/navigation";
import { isLocale, type Locale } from "../../i18n/locales";
import { t } from "../../i18n/translations";
import { Nav } from "../../components/i18n/Nav";
import { Footer } from "../../components/i18n/Footer";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = t(locale);
  return { title: d.meta.termsTitle, description: d.meta.termsDescription };
}

export default async function Terms({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = t(locale as Locale);
  return (
    <>
      <Nav d={d} locale={locale as Locale} />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-extrabold tracking-tight mb-6">{d.terms.title}</h1>
        <p className="text-white/60 leading-relaxed mb-4">{d.terms.paragraph1}</p>
        <p className="text-white/60 leading-relaxed mb-4">{d.terms.paragraph2}</p>
        <p className="text-white/60 leading-relaxed">{d.terms.paragraph3}</p>
      </main>
      <Footer d={d} locale={locale as Locale} />
    </>
  );
}
