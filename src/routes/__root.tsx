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
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "iinteliprox — AI Automation, Web Development & Digital Marketing" },
      {
        name: "description",
        content:
          "iinteliprox helps businesses grow with AI automation, custom website development, mobile app development, digital marketing, SEO and business software. Lucknow, India — serving worldwide.",
      },
      { name: "author", content: "iinteliprox" },
      { property: "og:site_name", content: "iinteliprox" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#fefdfc" },
      { property: "og:title", content: "iinteliprox — AI Automation, Web Development & Digital Marketing" },
      { name: "twitter:title", content: "iinteliprox — AI Automation, Web Development & Digital Marketing" },
      { property: "og:description", content: "iinteliprox helps businesses grow with AI automation, custom website development, mobile app development, digital marketing, SEO and business software. Lucknow, India — serving worldwide." },
      { name: "twitter:description", content: "iinteliprox helps businesses grow with AI automation, custom website development, mobile app development, digital marketing, SEO and business software. Lucknow, India — serving worldwide." },
      { property: "og:image", content: absoluteUrl("/og-image.svg") },
      { property: "og:image:alt", content: "iinteliprox — Intelligence, in motion." },
      { name: "twitter:image", content: absoluteUrl("/og-image.svg") },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE.url },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/ip-logo.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "mask-icon", href: "/favicon.svg", color: "#e88aab" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
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
          "@graph": [{
          "@type": "Organization",
          name: "iinteliprox",
          description:
            "AI automation, web development, mobile app development and digital marketing agency based in Lucknow, India.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Hazratganj",
            addressLocality: "Lucknow",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN",
          },
          email: "vsrivastava315@gmail.com",
          telephone: "+91 78304 34069",
          areaServed: ["India", "Worldwide"],
          founder: { "@type": "Person", name: "Vishal Srivastava", jobTitle: "Founder & CEO", email: "vsrivastava315@gmail.com" },
          url: SITE.url,
          logo: absoluteUrl("/ip-logo.png"),
          sameAs: ["https://instagram.com/iinteliprox"],
        },
        { "@type": "WebSite", name: "iinteliprox", url: SITE.url, description: SITE.description },
        { "@type": "LocalBusiness", name: "iinteliprox", url: SITE.url, telephone: "+91 78304 34069", email: "vsrivastava315@gmail.com", sameAs: ["https://instagram.com/iinteliprox"], address: { "@type": "PostalAddress", addressLocality: "Lucknow", addressRegion: "Uttar Pradesh", addressCountry: "IN" }, areaServed: ["India", "Worldwide"] }],
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
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
