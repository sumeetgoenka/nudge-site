import { redirect } from "next/navigation";
import { adminDb } from "../lib/firebaseAdmin";
import { requireAdmin } from "../lib/adminGuard";
import SignOutButton from "./SignOutButton";

export const dynamic = "force-dynamic";

type Totals = {
  total: number;
  byVersion: Record<string, number>;
  lastDownloadAt?: { _seconds: number } | null;
};

type Event = {
  ts: { _seconds: number; _nanoseconds: number } | null;
  version?: string;
  ua?: string;
  referer?: string;
  country?: string;
};

async function loadStats() {
  const db = adminDb();
  const totalsSnap = await db.collection("nudge_stats").doc("totals").get();
  const totals = (totalsSnap.data() as Totals | undefined) ?? {
    total: 0,
    byVersion: {},
  };

  const eventsSnap = await db
    .collection("nudge_events")
    .orderBy("ts", "desc")
    .limit(200)
    .get();
  const events = eventsSnap.docs.map((d) => d.data() as Event);

  // Per-day buckets for the last 30 days, oldest → newest.
  const now = Date.now();
  const dayMs = 24 * 60 * 60 * 1000;
  const buckets: { day: string; count: number }[] = [];
  for (let i = 29; i >= 0; i--) {
    const start = now - i * dayMs;
    const d = new Date(start);
    const key = d.toISOString().slice(0, 10);
    buckets.push({ day: key, count: 0 });
  }
  const indexByKey = new Map(buckets.map((b, i) => [b.day, i]));
  for (const ev of events) {
    if (!ev.ts) continue;
    const key = new Date(ev.ts._seconds * 1000).toISOString().slice(0, 10);
    const idx = indexByKey.get(key);
    if (idx !== undefined) buckets[idx]!.count++;
  }

  // Country tallies + referer tallies from the recent slice.
  const countryCounts = new Map<string, number>();
  const refererCounts = new Map<string, number>();
  for (const ev of events) {
    if (ev.country) {
      countryCounts.set(ev.country, (countryCounts.get(ev.country) ?? 0) + 1);
    }
    if (ev.referer) {
      try {
        const host = new URL(ev.referer).host;
        refererCounts.set(host, (refererCounts.get(host) ?? 0) + 1);
      } catch {
        /* ignore malformed referer */
      }
    }
  }

  return {
    totals,
    events: events.slice(0, 25),
    buckets,
    topCountries: [...countryCounts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6),
    topReferers: [...refererCounts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6),
  };
}

export default async function AdminPage() {
  const session = await requireAdmin();
  if (!session) redirect("/admin/login");

  const { totals, events, buckets, topCountries, topReferers } =
    await loadStats();

  const last24h = buckets.slice(-1)[0]?.count ?? 0;
  const last7d = buckets.slice(-7).reduce((s, b) => s + b.count, 0);
  const last30d = buckets.reduce((s, b) => s + b.count, 0);
  const peak = buckets.reduce((m, b) => Math.max(m, b.count), 1);

  const versions = Object.entries(totals.byVersion ?? {}).sort(
    (a, b) => b[1] - a[1]
  );

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <header className="flex items-start justify-between mb-10">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">
            Nudge Admin
          </h1>
          <p className="text-white/50 text-sm mt-1">
            Signed in as {session.email}
          </p>
        </div>
        <SignOutButton />
      </header>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <Stat label="All-time downloads" value={totals.total ?? 0} />
        <Stat label="Last 24 hours" value={last24h} />
        <Stat label="Last 7 days" value={last7d} />
        <Stat label="Last 30 days" value={last30d} />
      </section>

      <section className="mb-10">
        <h2 className="text-sm uppercase tracking-wider text-white/40 mb-4">
          Daily downloads (last 30 days)
        </h2>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="flex items-end gap-1 h-40">
            {buckets.map((b) => {
              const h = Math.max(2, Math.round((b.count / peak) * 100));
              return (
                <div
                  key={b.day}
                  className="flex-1 bg-gradient-to-t from-purple-500/40 to-purple-400 rounded-sm relative group"
                  style={{ height: `${h}%` }}
                  title={`${b.day} · ${b.count}`}
                >
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white/60 opacity-0 group-hover:opacity-100 transition">
                    {b.count}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between text-[10px] text-white/30 mt-2">
            <span>{buckets[0]?.day}</span>
            <span>{buckets[buckets.length - 1]?.day}</span>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mb-10">
        <Panel title="Downloads by version">
          {versions.length === 0 ? (
            <Empty>No downloads tracked yet.</Empty>
          ) : (
            <ul className="divide-y divide-white/5">
              {versions.map(([v, n]) => (
                <Row key={v} left={v} right={n.toLocaleString()} />
              ))}
            </ul>
          )}
        </Panel>
        <Panel title="Top countries (recent 200)">
          {topCountries.length === 0 ? (
            <Empty>No geo data yet.</Empty>
          ) : (
            <ul className="divide-y divide-white/5">
              {topCountries.map(([c, n]) => (
                <Row key={c} left={c} right={n.toLocaleString()} />
              ))}
            </ul>
          )}
        </Panel>
        <Panel title="Top referrers (recent 200)">
          {topReferers.length === 0 ? (
            <Empty>Direct downloads only so far.</Empty>
          ) : (
            <ul className="divide-y divide-white/5">
              {topReferers.map(([r, n]) => (
                <Row key={r} left={r} right={n.toLocaleString()} />
              ))}
            </ul>
          )}
        </Panel>
        <Panel title="Latest events">
          {events.length === 0 ? (
            <Empty>No events yet.</Empty>
          ) : (
            <ul className="divide-y divide-white/5">
              {events.map((e, i) => (
                <li
                  key={i}
                  className="py-2 flex items-center justify-between text-xs"
                >
                  <span className="text-white/70">
                    {e.ts
                      ? new Date(e.ts._seconds * 1000).toLocaleString()
                      : "—"}
                  </span>
                  <span className="text-white/50">
                    {e.version ?? "?"} · {e.country || "??"}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Panel>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="text-xs uppercase tracking-wider text-white/40">
        {label}
      </div>
      <div className="text-3xl font-extrabold mt-2 tabular-nums">
        {value.toLocaleString()}
      </div>
    </div>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <h3 className="text-sm uppercase tracking-wider text-white/40 mb-3">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Row({ left, right }: { left: string; right: string }) {
  return (
    <li className="py-2 flex items-center justify-between text-sm">
      <span className="text-white/80 truncate pr-3">{left}</span>
      <span className="text-white/60 tabular-nums">{right}</span>
    </li>
  );
}

function Empty({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-white/40">{children}</p>;
}
