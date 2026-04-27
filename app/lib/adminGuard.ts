import { cookies } from "next/headers";
import { adminAuth } from "./firebaseAdmin";

export const ADMIN_SESSION_COOKIE = "nudge_admin_session";

/**
 * Comma-separated allowlist of email addresses that may access /admin.
 * Configured via `ADMIN_EMAILS` env var on Vercel. Empty allowlist = no
 * one (fail closed).
 */
function allowedEmails(): Set<string> {
  return new Set(
    (process.env.ADMIN_EMAILS ?? "")
      .split(",")
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean)
  );
}

export function isAllowedEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  return allowedEmails().has(email.toLowerCase());
}

/**
 * Read the current admin session cookie and verify it. Returns the
 * decoded claims if valid AND the email is on the allowlist; otherwise
 * null.
 */
export async function requireAdmin(): Promise<{
  uid: string;
  email: string;
} | null> {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  if (!session) return null;
  try {
    const claims = await adminAuth().verifySessionCookie(session, true);
    if (!isAllowedEmail(claims.email)) return null;
    return { uid: claims.uid, email: claims.email! };
  } catch {
    return null;
  }
}
