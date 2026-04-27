import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "Terms",
  description: "Terms of use for the Nudge macOS app and nudge.focusdragon.app website.",
};

export default function Terms() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-extrabold tracking-tight mb-6">Terms</h1>
        <p className="text-white/60 leading-relaxed mb-4">
          Nudge is provided as-is, free of charge, with no warranty of any kind.
          By downloading and using Nudge you agree that the developer is not
          liable for any data loss, missed deadlines, or productivity outcomes —
          good or bad — that result from using the app.
        </p>
        <p className="text-white/60 leading-relaxed mb-4">
          The app's source is closed for now. Redistributing the binary, the
          DMG, or modified copies of either is not permitted without written
          consent.
        </p>
        <p className="text-white/60 leading-relaxed">
          Reasonable use of the website (downloading the app, reading docs) is
          welcome. Automated scraping or bulk download abuse may be rate-limited.
        </p>
      </main>
      <Footer />
    </>
  );
}
