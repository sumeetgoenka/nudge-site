import { NextResponse, type NextRequest } from "next/server";
import { LOCALES, DEFAULT_LOCALE } from "./app/i18n/locales";

const LOCALE_COOKIE = "NEXT_LOCALE";
const LOCALE_SET = new Set<string>(LOCALES);

/**
 * Routing middleware.
 *
 * - Bare URL "/" or any path missing a known locale prefix → detect
 *   the user's preferred locale (cookie > Accept-Language > default
 *   English) and 302 to "/<locale>/<rest>".
 * - URLs already prefixed with a locale pass through untouched.
 * - /api, /admin, /_next, static files: skipped entirely. /admin
 *   stays English-only because it's a private dashboard.
 */
export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Bypass internal Next paths and asset requests.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/admin") ||
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt" ||
    pathname === "/opengraph-image" ||
    pathname.startsWith("/icon.") ||
    pathname.startsWith("/apple-icon.") ||
    pathname === "/favicon.ico" ||
    pathname === "/Nudge.dmg" ||
    pathname === "/appcast.xml" ||
    pathname.includes(".") // any other static-ish file (svg, png, txt…)
  ) {
    return NextResponse.next();
  }

  // Already prefixed with a known locale? Pass through.
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  if (first && LOCALE_SET.has(first)) {
    return NextResponse.next();
  }

  const locale = pickLocale(req);
  const target = new URL(`/${locale}${pathname === "/" ? "" : pathname}${search}`, req.url);
  return NextResponse.redirect(target);
}

function pickLocale(req: NextRequest): string {
  // 1. Saved cookie wins (so users who manually picked English stay English).
  const cookie = req.cookies.get(LOCALE_COOKIE)?.value;
  if (cookie && LOCALE_SET.has(cookie)) return cookie;

  // 2. Accept-Language header — first acceptable match.
  const accept = req.headers.get("accept-language") ?? "";
  for (const part of accept.split(",")) {
    const tag = part.split(";")[0]?.trim().toLowerCase() ?? "";
    if (!tag) continue;
    // Try exact, then primary subtag (e.g. "en-GB" → "en", "pt-BR" → "pt").
    if (LOCALE_SET.has(tag)) return tag;
    const primary = tag.split("-")[0];
    if (primary && LOCALE_SET.has(primary)) return primary;
  }

  return DEFAULT_LOCALE;
}

export const config = {
  // Match every path except internal/API/admin/static. Mirrors the
  // bypass list inside `middleware()` so the matcher does most of
  // the filtering at the edge.
  matcher: ["/((?!_next|api|admin|.*\\..*).*)"],
};
