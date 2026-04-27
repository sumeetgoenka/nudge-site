import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0a0a]/70 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30 group-hover:shadow-violet-500/50 transition-shadow" />
          <span className="font-bold tracking-tight text-base">Nudge</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#how" className="hover:text-white transition">How it works</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
          <Link href="/changelog" className="hover:text-white transition">Changelog</Link>
        </nav>
        <a
          href="/api/download?v=1.3.0"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition"
        >
          Download
        </a>
      </div>
    </header>
  );
}
