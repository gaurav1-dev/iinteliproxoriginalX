import { useEffect, useRef } from "react";
import { useLocation } from "@tanstack/react-router";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------
const GA_ID = "G-HW5XVTNZWF";

// ---------------------------------------------------------------------------
// TypeScript declarations — proper types, no `any`
// ---------------------------------------------------------------------------
type GtagCommand = "config" | "event" | "js" | "set" | "consent" | "get";

interface GtagConfigParams {
  send_page_view?: boolean;
  anonymize_ip?: boolean;
  page_path?: string;
  page_title?: string;
  page_location?: string;
  [key: string]: string | boolean | number | undefined;
}

interface GtagEventParams {
  page_path?: string;
  page_title?: string;
  page_location?: string;
  [key: string]: string | boolean | number | undefined;
}

type GtagFunction = {
  (command: "js", target: Date): void;
  (command: "config", targetId: string, params?: GtagConfigParams): void;
  (command: "event", eventName: string, params?: GtagEventParams): void;
  (command: "set", params: Record<string, string | boolean | number>): void;
};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: GtagFunction;
  }
}

// ---------------------------------------------------------------------------
// GoogleAnalytics component
//
// Rules:
//  1. Renders null — zero DOM output (no SSR hydration mismatch).
//  2. ALL side-effects live in useEffect, which only runs on the client.
//  3. Script is injected via the DOM API (not JSX), once, guarded by a
//     document.querySelector check so it is never duplicated.
//  4. Initialised with send_page_view: false so we control every event.
//  5. Page views are tracked with gtag("event", "page_view", …) — not
//     gtag("config", …) — which is the correct GA4 SPA pattern.
//  6. All values passed to gtag are guaranteed string primitives.
// ---------------------------------------------------------------------------
export function GoogleAnalytics() {
  const location = useLocation();

  // Tracks whether the gtag script + init has already run this session.
  const initialized = useRef(false);

  // -------------------------------------------------------------------------
  // Effect 1: Inject the gtag.js script and bootstrap the tracker.
  // Runs exactly once after first client render (hydration complete).
  // -------------------------------------------------------------------------
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Set up the dataLayer queue before the script loads.
    window.dataLayer = window.dataLayer ?? [];

    // Define the gtag function using the arguments-queue pattern required
    // by Google Tag Manager. We use a named function expression so TypeScript
    // accepts it as our typed GtagFunction signature.
    const gtagImpl: GtagFunction = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    } as unknown as GtagFunction;

    window.gtag = gtagImpl;

    // Timestamp required by gtag before any config call.
    window.gtag("js", new Date());

    // Initialise with send_page_view: false — we fire page_view manually
    // so there is exactly one event per navigation, never two.
    window.gtag("config", GA_ID, {
      send_page_view: false,
      anonymize_ip: true,
    });

    // Inject the async gtag.js script only once, even in strict-mode double
    // invocations, by checking for an existing matching <script> tag.
    const scriptSelector = `script[src*="googletagmanager.com/gtag/js?id=${GA_ID}"]`;
    if (!document.querySelector(scriptSelector)) {
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      script.async = true;
      document.head.appendChild(script);
    }
  }, []); // Empty deps — runs once after mount, never again.

  // -------------------------------------------------------------------------
  // Effect 2: Send a page_view on every route change.
  // Depends on pathname and search (both strings), not the location object.
  // -------------------------------------------------------------------------
  useEffect(() => {
    // Bail out if gtag hasn't been initialised yet (e.g., during SSR or
    // before Effect 1 has run). typeof check avoids ReferenceError.
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      return;
    }

    // Extract string primitives explicitly — NEVER pass the ParsedLocation
    // object itself to gtag. This is what caused the original crash.
    const pathname: string = location.pathname;
    const search: string = window.location.search;

    const pagePath: string = pathname + search;
    // window.location.href gives the full canonical URL including origin.
    const pageLocation: string = window.location.href;
    // document.title is set by TanStack Router's <HeadContent /> before this
    // effect fires, so it reflects the current page title accurately.
    const pageTitle: string = document.title;

    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_location: pageLocation,
      page_title: pageTitle,
    });
  }, [location.pathname, location.search]);
  // Deps are primitives (strings), not the location object — this avoids
  // unnecessary re-runs and prevents object-to-primitive coercion errors.

  // Render nothing — this component is pure side-effect.
  return null;
}
