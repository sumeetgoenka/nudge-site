/// Shape of the translation dictionary. English is the source of truth;
/// every other locale must satisfy the same `Dict` interface so missing
/// keys become a TypeScript error rather than a runtime surprise.

export interface Dict {
  nav: {
    features: string;
    howItWorks: string;
    faq: string;
    changelog: string;
    download: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    cta: string;
    size: string;
    seeFeatures: string;
    notarized: string;
    localFirst: string;
  };
  features: {
    section: string;
    title: string;
    subtitle: string;
    items: { title: string; body: string }[]; // 9 entries
  };
  howItWorks: {
    section: string;
    title: string;
    steps: { title: string; body: string }[]; // 3 entries
  };
  faq: {
    section: string;
    title: string;
    items: { q: string; a: string }[]; // 6 entries
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
    requirement: string;
  };
  footer: {
    product: string;
    resources: string;
    contact: string;
    download: string;
    features: string;
    changelog: string;
    appcast: string;
    privacy: string;
    terms: string;
    faq: string;
    tagline: string;
    copyright: string; // "© {year} Nudge. All rights reserved."
    notarized: string;
  };
  privacy: {
    title: string;
    intro: string;
    networkTitle: string;
    networkBody: string;
    analyticsTitle: string;
    analyticsBody: string;
    contactTitle: string;
    contactBody: string;
  };
  terms: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  changelog: {
    title: string;
    subtitle: string;
    latest: string;
  };
  switcher: {
    switchToEnglish: string;
  };
  meta: {
    homeTitle: string;
    homeDescription: string;
    privacyTitle: string;
    privacyDescription: string;
    termsTitle: string;
    termsDescription: string;
    changelogTitle: string;
    changelogDescription: string;
  };
}
