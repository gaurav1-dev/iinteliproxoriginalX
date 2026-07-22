import { useEffect, useState } from "react";

type Consent = "accepted" | "rejected";
const KEY = "iinteliprox-cookie-consent";

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [preferences, setPreferences] = useState(false);
  useEffect(() => setOpen(!localStorage.getItem(KEY)), []);
  const decide = (value: Consent) => { localStorage.setItem(KEY, value); setOpen(false); };
  if (!open) return null;
  return <aside aria-label="Cookie consent" className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-xl rounded-2xl border border-hairline bg-background p-5 shadow-xl sm:inset-x-auto sm:right-6">
    <h2 className="font-display text-2xl">Your privacy matters</h2>
    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">We use essential storage to remember this choice. Optional analytics and advertising tools remain off unless you accept them.</p>
    {preferences && <p className="mt-3 rounded-lg bg-surface p-3 text-xs text-muted-foreground">Essential cookies are always enabled. No optional cookies are currently active on this site.</p>}
    <div className="mt-4 flex flex-wrap gap-2"><button type="button" onClick={() => decide("accepted")} className="btn-primary !px-4 !py-2 !text-xs">Accept</button><button type="button" onClick={() => decide("rejected")} className="btn-ghost !px-4 !py-2 !text-xs">Reject</button><button type="button" onClick={() => setPreferences((value) => !value)} aria-expanded={preferences} className="rounded-full px-3 py-2 text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground">Preferences</button></div>
  </aside>;
}
