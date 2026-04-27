"use client";

import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { clientAuth } from "../lib/firebaseClient";

export default function SignOutButton() {
  const router = useRouter();
  async function logout() {
    await fetch("/api/admin/session", { method: "DELETE" });
    try {
      await signOut(clientAuth());
    } catch {
      /* ignore — session cookie is the source of truth */
    }
    router.push("/admin/login");
    router.refresh();
  }
  return (
    <button
      onClick={logout}
      className="px-4 py-2 text-sm rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/30 transition"
    >
      Sign out
    </button>
  );
}
