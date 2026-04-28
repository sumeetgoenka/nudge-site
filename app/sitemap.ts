import type { MetadataRoute } from "next";
import { LOCALES } from "./i18n/locales";

const SITE = "https://nudge.focusdragon.app";

/**
 * Per-locale sitemap with hreflang alternates. Google uses
 * `alternates.languages` to wire the same URL set across locales,
 * which both prevents duplicate-content penalties AND lets it serve
 * the right locale to the right country in search results.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const subpaths = ["", "/changelog", "/privacy", "/terms"];

  const entries: MetadataRoute.Sitemap = [];
  for (const path of subpaths) {
    const languages: Record<string, string> = {};
    for (const l of LOCALES) {
      languages[l] = `${SITE}/${l}${path}`;
    }
    for (const l of LOCALES) {
      entries.push({
        url: `${SITE}/${l}${path}`,
        lastModified: now,
        changeFrequency: path === "" ? "weekly" : path === "/changelog" ? "weekly" : "yearly",
        priority: path === "" ? 1.0 : path === "/changelog" ? 0.7 : 0.4,
        alternates: { languages },
      });
    }
  }
  return entries;
}
