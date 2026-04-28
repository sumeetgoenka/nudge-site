import type { Dict } from "../../i18n/dictionary";
import { HUDMockup } from "../HUDMockup";

export function Hero({ d }: { d: Dict }) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-violet-600/20 blur-[140px]" />
        <div className="absolute top-[20%] left-[15%] w-[420px] h-[420px] rounded-full bg-fuchsia-500/15 blur-[100px]" />
        <div className="absolute top-[10%] right-[10%] w-[360px] h-[360px] rounded-full bg-cyan-400/10 blur-[100px]" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-32 lg:pt-32 lg:pb-40">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
          <div className="text-center lg:text-start">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/60 backdrop-blur">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {d.hero.badge}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6">
              {d.hero.titlePart1}{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                {d.hero.titlePart2}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-xl lg:mx-0 mx-auto mb-10 leading-relaxed">
              {d.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 items-center lg:justify-start justify-center">
              <a
                href="/api/download?v=1.3.0"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-base hover:bg-white/90 transition-all shadow-xl shadow-white/10"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 21.99C7.78997 22.03 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                </svg>
                {d.hero.cta}
                <span className="text-xs font-medium text-black/50 ml-1">{d.hero.size}</span>
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition-all text-sm"
              >
                {d.hero.seeFeatures}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 lg:justify-start justify-center text-xs text-white/40">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                {d.hero.notarized}
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                {d.hero.localFirst}
              </span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <HUDMockup className="animate-float" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
