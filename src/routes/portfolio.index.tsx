import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter, FloatingWhatsApp } from "@/components/site-footer";
import { SectionCTA } from "@/components/section-cta";
import { Portfolio } from "@/components/sections/portfolio";
import { Toaster } from "sonner";
import { absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Portfolio | Web Development, AI & Design Case Studies — iinteliprox" },
      {
        name: "description",
        content:
          "Selected work by iinteliprox — websites, AI systems, automations and digital experiences designed and developed for clients worldwide.",
      },
      { property: "og:title", content: "Portfolio — iinteliprox" },
      {
        property: "og:description",
        content:
          "Case studies of web development, AI automation, e-commerce, SaaS and design work by iinteliprox.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/portfolio") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/portfolio") }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="pt-24 animate-fade-in">
        <Portfolio />
      </main>
      <SectionCTA />
      <SiteFooter />
      <FloatingWhatsApp />
      <Toaster theme="light" position="top-center" />
    </div>
  );
}
