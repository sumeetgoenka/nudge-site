import { NextResponse } from "next/server";
import { adminDb } from "../../../lib/firebaseAdmin";

export const runtime = "nodejs";

/**
 * Public, cacheable read of the Nudge download counter. Mirrors the
 * FocusDragon `/api/downloads/count` shape so the same client code can
 * hit either site. Counter is maintained by `/api/download` which
 * atomically increments `nudge_stats/totals.total` on each redirect.
 *
 * Response: { count: number, byVersion: Record<string, number> }
 */
export async function GET() {
  try {
    const db = adminDb();
    const snap = await db.collection("nudge_stats").doc("totals").get();
    const data = snap.data() ?? {};
    const count = (data.total as number | undefined) ?? 0;
    const byVersion = (data.byVersion as Record<string, number> | undefined) ?? {};
    return NextResponse.json(
      { count, byVersion },
      { headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" } },
    );
  } catch (err) {
    console.error("[/api/downloads/count] read failed:", err);
    return NextResponse.json({ error: "unavailable" }, { status: 500 });
  }
}
