import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SITE, absoluteUrl } from "@/lib/site";
import { CookieConsent } from "@/components/cookie-consent";
import { ChatBot } from "@/components/ChatBot";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <img
          src="/ip-logo.png"
          alt="iinteliprox"
          className="mx-auto h-14 w-14"
        />
        <h1 className="mt-8 text-6xl font-semibold tracking-tight text-foreground">404</h1>
        <h2 className="mt-3 text-lg font-medium text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" },
      { "http-equiv": "x-ua-compatible", content: "IE=edge" },
      { title: "iinteliProX — AI Automation, Web Development & Digital Marketing" },
      {
        name: "description",
        content:
          "iinteliProX helps businesses grow with AI automation, custom website development, mobile app development, digital marketing, SEO and business software. Lucknow, India — serving worldwide.",
      },
      { name: "author", content: "iinteliProX" },
      { name: "application-name", content: "iinteliProX" },
      { name: "generator", content: "TanStack Start, React, Vite" },
      { name: "referrer", content: "origin-when-cross-origin" },
      {
        name: "google-site-verification",
        content: "dpeZSdprhqXw8WrEj85NmFBIxeQjTOIPGmtcHy_coIc",
      },
      // Open Graph — site-wide defaults (pages override with their own)
      { property: "og:site_name", content: "iinteliProX" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE.url },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: absoluteUrl(SITE.ogImage) },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "iinteliProX — Intelligence, in motion." },
      { property: "og:title", content: "iinteliProX — AI Automation, Web Development & Digital Marketing" },
      { property: "og:description", content: "iinteliProX helps businesses grow with AI automation, custom website development, mobile app development, digital marketing, SEO and business software. Lucknow, India — serving worldwide." },
      // Twitter / X
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: SITE.twitterHandle },
      { name: "twitter:creator", content: SITE.twitterHandle },
      { name: "twitter:title", content: "iinteliProX — AI Automation, Web Development & Digital Marketing" },
      { name: "twitter:description", content: "iinteliProX helps businesses grow with AI automation, custom website development, mobile app development, digital marketing, SEO and business software. Lucknow, India — serving worldwide." },
      { name: "twitter:image", content: absoluteUrl(SITE.ogImage) },
      { name: "twitter:image:alt", content: "iinteliProX — Intelligence, in motion." },
      // Theme / PWA
      { name: "theme-color", content: "#0b0f0c" },
      { name: "color-scheme", content: "dark light" },
      // Apple
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "apple-mobile-web-app-title", content: "iinteliProX" },
      { name: "format-detection", content: "telephone=no" },
      // Microsoft
      { name: "msapplication-TileColor", content: "#0b0f0c" },
      { name: "msapplication-TileImage", content: "/ip-logo.png" },
      { name: "msapplication-config", content: "none" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/ip-logo.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/favicon.svg", color: "#e88aab" },
      // Performance: preconnect critical third-party origins
      { rel: "preconnect", href: "https://www.googletagmanager.com" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      // DNS prefetch for non-critical third parties
      { rel: "dns-prefetch", href: "https://www.google-analytics.com" },
      { rel: "dns-prefetch", href: "https://calendly.com" },
      { rel: "dns-prefetch", href: "https://wa.me" },
      { rel: "dns-prefetch", href: "https://cdn.jsdelivr.net" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE.url}/#organization`,
              name: "iinteliProX",
              alternateName: "iinteliprox",
              description:
                "AI automation, web development, mobile app development and digital marketing agency based in Lucknow, India. Serving startups and enterprises across India and worldwide.",
              url: SITE.url,
              logo: {
                "@type": "ImageObject",
                url: absoluteUrl("/ip-logo.png"),
                width: 512,
                height: 512,
              },
              image: absoluteUrl(SITE.ogImage),
              foundingDate: "2023",
              numberOfEmployees: { "@type": "QuantitativeValue", minValue: 2, maxValue: 10 },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Lucknow",
                addressLocality: "Lucknow",
                addressRegion: "Uttar Pradesh",
                postalCode: "226001",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: SITE.geo.latitude,
                longitude: SITE.geo.longitude,
              },
              email: SITE.email.business,
              telephone: SITE.phone.primary,
              areaServed: ["India", "United States", "United Kingdom", "Canada", "Australia", "Worldwide"],
              knowsAbout: [
                "AI Automation",
                "AI Agents",
                "n8n Automation",
                "Workflow Automation",
                "Web Development",
                "Mobile App Development",
                "Digital Marketing",
                "SEO",
                "Lead Generation",
                "CRM Development",
                "Voice AI",
                "OpenAI Integration",
                "Business Automation",
              ],
              serviceType: [
                "AI Automation",
                "Web Development",
                "Mobile App Development",
                "Digital Marketing",
                "SEO Services",
                "Business Automation",
                "UI/UX Design",
                "Lead Generation",
                "Branding",
              ],
              founder: {
                "@type": "Person",
                name: "Vishal Srivastava",
                jobTitle: "Founder & CEO",
                email: SITE.email.business,
                url: absoluteUrl("/team"),
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: SITE.phone.primary,
                  contactType: "customer support",
                  availableLanguage: ["English", "Hindi"],
                  areaServed: "IN",
                },
                {
                  "@type": "ContactPoint",
                  email: SITE.email.business,
                  contactType: "sales",
                  availableLanguage: ["English", "Hindi"],
                },
              ],
              sameAs: [
                "https://instagram.com/iinteliprox",
              ],
            },
            {
              "@type": "WebSite",
              "@id": `${SITE.url}/#website`,
              name: "iinteliProX",
              url: SITE.url,
              description: SITE.description,
              inLanguage: "en-IN",
              publisher: { "@id": `${SITE.url}/#organization` },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${SITE.url}/blog?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "LocalBusiness",
              "@id": `${SITE.url}/#localbusiness`,
              name: "iinteliProX",
              url: SITE.url,
              image: absoluteUrl(SITE.ogImage),
              logo: absoluteUrl("/ip-logo.png"),
              telephone: SITE.phone.primary,
              email: SITE.email.business,
              priceRange: "₹₹",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Lucknow",
                addressLocality: "Lucknow",
                addressRegion: "Uttar Pradesh",
                postalCode: "226001",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: SITE.geo.latitude,
                longitude: SITE.geo.longitude,
              },
              hasMap: `https://www.google.com/maps/search/iinteliprox+lucknow`,
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "10:00",
                  closes: "15:00",
                },
              ],
              areaServed: ["Lucknow", "Uttar Pradesh", "India", "Worldwide"],
              sameAs: [
                "https://instagram.com/iinteliprox",
              ],
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});


function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <CookieConsent />
        <ChatBot />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/*
        GoogleAnalytics lives here (inside RootComponent, not RootShell) so it
        only ever executes on the client after React hydration. Placing it in
        RootShell would run it during SSR where window/document don't exist,
        which caused the "Cannot convert object to primitive value" crash.
      */}
      <GoogleAnalytics />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
