import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const metadata = {
  title: "Privacy",
  description: "Nudge stores nothing in the cloud. Read the full privacy policy.",
};

export default function Privacy() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 py-20 prose prose-invert">
        <h1 className="text-4xl font-extrabold tracking-tight mb-6">Privacy</h1>
        <p className="text-white/60 leading-relaxed">
          Nudge does not collect personal data. Your schedule, todos, completion
          state, and progress stats live entirely on your Mac in
          <code className="mx-1 px-1.5 py-0.5 bg-white/10 rounded text-xs">~/Library/Application Support/Nudge/</code>.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-3">Network requests</h2>
        <p className="text-white/60 leading-relaxed">
          The only outbound network call Nudge makes is a periodic Sparkle
          update check against
          <code className="mx-1 px-1.5 py-0.5 bg-white/10 rounded text-xs">https://nudge.focusdragon.app/appcast.xml</code>
          to learn whether a newer version is available. The DMG, when you
          download it, is fetched through
          <code className="mx-1 px-1.5 py-0.5 bg-white/10 rounded text-xs">/api/download</code>
          which logs anonymous request metadata (timestamp, version, country,
          referrer) for download counts on the admin dashboard. No identifier
          is attached.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-3">Analytics</h2>
        <p className="text-white/60 leading-relaxed">
          The marketing site uses Vercel Analytics for aggregate page-view
          counts. No cookies, no fingerprinting, no individual tracking.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-3">Contact</h2>
        <p className="text-white/60 leading-relaxed">
          Questions: <a href="mailto:hello@nudgeapp.dev" className="text-violet-400 hover:underline">hello@nudgeapp.dev</a>
        </p>
      </main>
      <Footer />
    </>
  );
}
