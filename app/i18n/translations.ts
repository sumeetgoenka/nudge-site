import type { Dict } from "./dictionary";
import type { Locale } from "./locales";
import { en } from "./locales/en";
import { de } from "./locales/de";
import { es } from "./locales/es";
import { fr } from "./locales/fr";
import { pt } from "./locales/pt";
import { it } from "./locales/it";
import { nl } from "./locales/nl";
import { pl } from "./locales/pl";
import { tr } from "./locales/tr";
import { ru } from "./locales/ru";
import { zh } from "./locales/zh";
import { ja } from "./locales/ja";
import { ko } from "./locales/ko";
import { hi } from "./locales/hi";
import { ar } from "./locales/ar";
import { fa } from "./locales/fa";
import { vi } from "./locales/vi";
import { id } from "./locales/id";
import { th } from "./locales/th";
import { bn } from "./locales/bn";

/// Locale → translation dictionary. Adding a new entry here is the
/// fanout point that wires routing + sitemap + switcher to a new
/// language.
const TRANSLATIONS: Record<Locale, Dict> = {
  en, de, es, fr, pt, it, nl, pl, tr, ru,
  zh, ja, ko, hi, ar, fa, vi, id, th, bn,
};

export function t(locale: Locale): Dict {
  return TRANSLATIONS[locale] ?? TRANSLATIONS.en;
}

/// Format a string template with `{token}` placeholders. Used for
/// `footer.copyright` ("© {year} Nudge…") and similar.
export function tpl(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}
