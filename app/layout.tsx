import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://nudge.focusdragon.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nudge — Floating HUD for macOS that keeps you on track",
    template: "%s · Nudge",
  },
  description:
    "Nudge is a free macOS app that floats a tiny HUD on every screen showing your current task, time remaining, and what's next. No notifications, no cloud, no accounts.",
  keywords: [
    "macOS productivity app",
    "floating HUD Mac",
    "Pomodoro Mac",
    "schedule HUD",
    "always-on-top schedule",
    "menu bar productivity",
    "study schedule app Mac",
    "daily routine app macOS",
    "time blocking Mac",
    "free productivity Mac app",
  ],
  authors: [{ name: "Nudge" }],
  creator: "Nudge",
  publisher: "Nudge",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Nudge",
    title: "Nudge — Floating HUD for macOS",
    description:
      "A tiny always-on schedule HUD for macOS. Free, notarized, local-first.",
    url: SITE_URL,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Nudge" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nudge — Floating HUD for macOS",
    description:
      "A tiny always-on schedule HUD for macOS. Free, notarized, local-first.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
  applicationName: "Nudge",
  appleWebApp: { capable: true, title: "Nudge" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
