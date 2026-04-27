import { ImageResponse } from "next/og";

// Auto-generated 1200×630 OG image for social sharing. Pure
// SVG-via-JSX — no external assets, so it renders fast and
// stays in sync with the brand colours.

export const runtime = "edge";
export const alt = "Nudge — Floating HUD for macOS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(circle at 25% 30%, #4c1d95 0%, transparent 60%), radial-gradient(circle at 75% 70%, #be185d 0%, transparent 55%), #0a0a0a",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
              boxShadow: "0 8px 32px rgba(139, 92, 246, 0.4)",
            }}
          />
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>Nudge</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            Your day, always in view.
          </div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.6)", maxWidth: 800, lineHeight: 1.4 }}>
            A floating HUD for macOS that quietly shows your current task and what's next.
          </div>
        </div>
        <div style={{ display: "flex", gap: 24, fontSize: 20, color: "rgba(255,255,255,0.5)" }}>
          <div>Free for macOS 12+</div>
          <div>·</div>
          <div>Notarized by Apple</div>
          <div>·</div>
          <div>nudge.focusdragon.app</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
