import { cert, getApps, initializeApp, type App } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

/**
 * Firebase Admin SDK singleton. Reads service account credentials from
 * `FIREBASE_SERVICE_ACCOUNT` (raw JSON or base64-encoded JSON). Used by
 * download counter, admin session verification, and admin dashboard
 * data fetches.
 */
function ensureApp(): App {
  const apps = getApps();
  if (apps.length) return apps[0]!;
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!raw) {
    throw new Error(
      "FIREBASE_SERVICE_ACCOUNT env var missing — set it via `vercel env add FIREBASE_SERVICE_ACCOUNT`"
    );
  }
  const decoded = raw.trim().startsWith("{")
    ? raw
    : Buffer.from(raw, "base64").toString("utf-8");
  const credentials = JSON.parse(decoded);
  return initializeApp({ credential: cert(credentials) });
}

export const adminDb = () => getFirestore(ensureApp());
export const adminAuth = () => getAuth(ensureApp());
