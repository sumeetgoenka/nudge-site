"use client";

import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

/**
 * Client-side Firebase singleton — used only on /admin to drive the
 * Google sign-in flow. Public web SDK config; values are scoped to the
 * `nudge-site` web app on the existing `anay-84266` project.
 */
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

let cached: FirebaseApp | null = null;
export function getClientApp(): FirebaseApp {
  if (cached) return cached;
  cached = getApps().length ? getApps()[0]! : initializeApp(firebaseConfig);
  return cached;
}

export const clientAuth = () => getAuth(getClientApp());
export const googleProvider = new GoogleAuthProvider();
