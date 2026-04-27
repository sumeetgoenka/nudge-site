import { NextResponse, type NextRequest } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { adminDb } from "../../lib/firebaseAdmin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Proxies the user to /Nudge.dmg while atomically incrementing the
 * download counter and appending a `nudge_events` row.
 *
 * Counter doc: `nudge_stats/totals` { total: number, byVersion: { [v]: n } }
 * Event doc:   `nudge_events/<auto-id>` { ts, version, ua, referer, country }
 *
 * Errors writing to Firestore must NOT block the download — silently
 * log and serve the file anyway.
 */
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const version = url.searchParams.get("v") ?? "latest";
  const ua = req.headers.get("user-agent") ?? "";
  const referer = req.headers.get("referer") ?? "";
  const country = req.headers.get("x-vercel-ip-country") ?? "";

  try {
    const db = adminDb();
    const totalsRef = db.collection("nudge_stats").doc("totals");
    await totalsRef.set(
      {
        total: FieldValue.increment(1),
        byVersion: { [version]: FieldValue.increment(1) },
        lastDownloadAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    await db.collection("nudge_events").add({
      kind: "download",
      ts: FieldValue.serverTimestamp(),
      version,
      ua,
      referer,
      country,
    });
  } catch (err) {
    // Never block a download on a logging failure.
    console.error("[/api/download] tracking failed:", err);
  }

  // 302 to the static asset. Caching disabled so every hit re-runs the
  // tracker; the DMG itself is served by Vercel's CDN.
  const target = new URL("/Nudge.dmg", req.url);
  return NextResponse.redirect(target, 302);
}
