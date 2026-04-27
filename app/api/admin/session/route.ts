import { NextResponse, type NextRequest } from "next/server";
import { adminAuth } from "../../../lib/firebaseAdmin";
import { ADMIN_SESSION_COOKIE, isAllowedEmail } from "../../../lib/adminGuard";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SESSION_DAYS = 14;

/**
 * Exchange a freshly-minted Firebase ID token for an HttpOnly session
 * cookie. Rejects the trade if the email isn't on `ADMIN_EMAILS`.
 */
export async function POST(req: NextRequest) {
  const { idToken } = (await req.json().catch(() => ({}))) as {
    idToken?: string;
  };
  if (!idToken) {
    return NextResponse.json({ error: "missing idToken" }, { status: 400 });
  }

  let decoded;
  try {
    decoded = await adminAuth().verifyIdToken(idToken, true);
  } catch {
    return NextResponse.json({ error: "invalid token" }, { status: 401 });
  }
  if (!isAllowedEmail(decoded.email)) {
    return NextResponse.json({ error: "not authorised" }, { status: 403 });
  }

  const expiresInMs = SESSION_DAYS * 24 * 60 * 60 * 1000;
  const sessionCookie = await adminAuth().createSessionCookie(idToken, {
    expiresIn: expiresInMs,
  });

  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_SESSION_COOKIE, sessionCookie, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: expiresInMs / 1000,
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_SESSION_COOKIE, "", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return res;
}
