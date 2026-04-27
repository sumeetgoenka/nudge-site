"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";
import { clientAuth, googleProvider } from "../../lib/firebaseClient";

export default function AdminLogin() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function signIn() {
    setError(null);
    setLoading(true);
    try {
      const cred = await signInWithPopup(clientAuth(), googleProvider);
      const idToken = await cred.user.getIdToken(true);
      const res = await fetch("/api/admin/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        setError(body.error ?? "Sign in failed");
        return;
      }
      router.push("/admin");
      router.refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Sign in failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">
            Nudge Admin
          </h1>
          <p className="text-white/50 text-sm">
            Sign in with an authorised Google account.
          </p>
        </div>
        <button
          onClick={signIn}
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all disabled:opacity-50"
        >
          {loading ? "Signing in…" : "Continue with Google"}
        </button>
        {error && (
          <p className="mt-4 text-center text-sm text-red-400">{error}</p>
        )}
      </div>
    </main>
  );
}
