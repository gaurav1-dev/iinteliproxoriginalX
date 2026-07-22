import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter, FloatingWhatsApp } from "@/components/site-footer";
import { SectionCTA } from "@/components/section-cta";
import { SERVICES_DATA } from "@/lib/services-data";
import { ArrowUpRight } from "lucide-react";
import { Toaster } from "sonner";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | AI Automation, Web Development, Digital Marketing — iinteliprox" },
      {
        name: "description",
        content:
          "Explore iinteliprox services — AI automation, custom website development, mobile app development, digital marketing, SEO, UI/UX design, branding and business automation. Lucknow, India — serving worldwide.",
      },
      { property: "og:title", content: "Services — iinteliprox" },
      {
        property: "og:description",
        content:
          "AI automation, web development, mobile apps, digital marketing, SEO, UI/UX, branding and business automation services from iinteliprox.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/services") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/services") }],
  }),
  component: ServicesIndexPage,
});

function ServicesIndexPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="pt-32 pb-24 sm:pt-40 sm:pb-32 animate-fade-in">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand mr-2 align-middle" />
            Our Capabilities
          </div>
          <h1 className="font-display mt-6 text-4xl sm:text-6xl md:text-7xl leading-[1.02] tracking-tight max-w-4xl">
            Services engineered for
            <br />
            <span className="text-brand italic">growth.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            AI automation, web development, mobile apps, digital marketing, SEO,
            UI/UX design, branding and business automation — each service is a
            production-grade capability, not a checkbox on a portfolio.
          </p>

          <ul className="mt-16 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden border border-hairline">
            {SERVICES_DATA.map((s, i) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative block bg-background p-8 transition-colors hover:bg-surface h-full"
                >
                  <div className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2 className="font-display text-2xl mt-4">{s.name}</h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {s.short}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase text-brand">
                    Explore
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SectionCTA />
      <SiteFooter />
      <FloatingWhatsApp />
      <Toaster theme="light" position="top-center" />
    </div>
  );
}
