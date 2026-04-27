import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500" />
            <span className="font-bold tracking-tight">Nudge</span>
          </div>
          <p className="text-white/40 text-xs leading-relaxed">
            A floating HUD for macOS. Built by one person, in public.
          </p>
        </div>
        <div>
          <div className="text-white/40 text-xs uppercase tracking-wider mb-3">Product</div>
          <ul className="space-y-2 text-white/60">
            <li><a href="/api/download?v=1.3.0" className="hover:text-white transition">Download</a></li>
            <li><a href="#features" className="hover:text-white transition">Features</a></li>
            <li><Link href="/changelog" className="hover:text-white transition">Changelog</Link></li>
            <li><a href="/appcast.xml" className="hover:text-white transition">Appcast</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white/40 text-xs uppercase tracking-wider mb-3">Resources</div>
          <ul className="space-y-2 text-white/60">
            <li><Link href="/privacy" className="hover:text-white transition">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition">Terms</Link></li>
            <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white/40 text-xs uppercase tracking-wider mb-3">Contact</div>
          <ul className="space-y-2 text-white/60">
            <li><a href="mailto:hello@nudgeapp.dev" className="hover:text-white transition">hello@nudgeapp.dev</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between text-xs text-white/40">
          <span>© {new Date().getFullYear()} Nudge. All rights reserved.</span>
          <span>Made with care · Notarized by Apple</span>
        </div>
      </div>
    </footer>
  );
}
