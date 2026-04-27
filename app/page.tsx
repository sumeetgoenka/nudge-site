import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

const SOFTWARE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Nudge",
  operatingSystem: "macOS 12+",
  applicationCategory: "ProductivityApplication",
  url: "https://nudge.focusdragon.app",
  downloadUrl: "https://nudge.focusdragon.app/Nudge.dmg",
  softwareVersion: "1.3.0",
  description:
    "A floating, always-on HUD for macOS that shows your current task and what's next — without notifications, accounts, or cloud sync.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "1",
  },
  publisher: { "@type": "Organization", name: "Nudge" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_JSONLD) }}
      />
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
