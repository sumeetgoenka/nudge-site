import { notFound } from "next/navigation";
import { isLocale, type Locale } from "../i18n/locales";
import { t } from "../i18n/translations";
import { Nav } from "../components/i18n/Nav";
import { Hero } from "../components/i18n/Hero";
import { Features } from "../components/i18n/Features";
import { HowItWorks } from "../components/i18n/HowItWorks";
import { FAQ } from "../components/i18n/FAQ";
import { CTA } from "../components/i18n/CTA";
import { Footer } from "../components/i18n/Footer";

const SOFTWARE_JSONLD = (locale: Locale, name: string, desc: string) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Nudge",
  operatingSystem: "macOS 12+",
  applicationCategory: "ProductivityApplication",
  url: `https://nudge.focusdragon.app/${locale}`,
  downloadUrl: "https://nudge.focusdragon.app/Nudge.dmg",
  softwareVersion: "1.3.0",
  description: desc,
  inLanguage: locale,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5", ratingCount: "1" },
  publisher: { "@type": "Organization", name: "Nudge" },
});

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = t(locale as Locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SOFTWARE_JSONLD(locale as Locale, d.meta.homeTitle, d.meta.homeDescription)),
        }}
      />
      <Nav d={d} locale={locale as Locale} />
      <main>
        <Hero d={d} />
        <Features d={d} />
        <HowItWorks d={d} />
        <FAQ d={d} />
        <CTA d={d} />
      </main>
      <Footer d={d} locale={locale as Locale} />
    </>
  );
}
