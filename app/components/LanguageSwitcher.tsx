"use client";

import { useRouter, usePathname } from "next/navigation";
import { LOCALES, type Locale } from "../i18n/locales";

/**
 * "EN" pill. Only rendered when the current locale isn't English.
 * Clicking sets the persisted cookie and rewrites the URL so the
 * server-side middleware doesn't immediately bounce the user back to
 * their detected locale.
 */
export function LanguageSwitcher({
  locale,
  switchLabel,
}: {
  locale: Locale;
  switchLabel: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  if (locale === "en") return null;

  function switchToEnglish() {
    // 1y cookie so the choice persists through the auto-detect middleware.
    document.cookie = `NEXT_LOCALE=en; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] && (LOCALES as readonly string[]).includes(segments[0])) {
      segments[0] = "en";
    } else {
      segments.unshift("en");
    }
    router.push("/" + segments.join("/"));
    router.refresh();
  }

  return (
    <button
      onClick={switchToEnglish}
      className="px-2.5 py-1 text-xs font-semibold rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition"
      aria-label={switchLabel}
    >
      EN
    </button>
  );
}
