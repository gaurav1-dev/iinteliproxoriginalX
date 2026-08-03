import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter, FloatingWhatsApp } from "@/components/site-footer";
import { SectionCTA } from "@/components/section-cta";
import { SERVICES_DATA } from "@/lib/services-data";
import { ArrowUpRight } from "lucide-react";
import { Toaster } from "sonner";
import { absoluteUrl, SITE } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "AI Automation, Web Development & Digital Marketing Services | iinteliprox" },
      {
        name: "description",
        content:
          "Explore all iinteliprox services — AI automation, AI agents, n8n workflow automation, custom website development, mobile app development, digital marketing, SEO, UI/UX design, branding and lead generation. Based in Lucknow, India — serving worldwide.",
      },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      {
        name: "keywords",
        content:
          "AI Automation Services, AI Agents Development, n8n Automation, Web Development Services, Mobile App Development, Digital Marketing Services, SEO Services, UI UX Design, Business Automation, Lead Generation Services, Branding Services, Graphic Design, Lucknow IT Company",
      },
      { property: "og:title", content: "Services — AI Automation, Web Development & Digital Marketing | iinteliprox" },
      {
        property: "og:description",
        content:
          "AI automation, web development, mobile apps, digital marketing, SEO, UI/UX, branding and business automation services from iinteliprox.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/services") },
      { property: "og:image", content: absoluteUrl(SITE.ogImage) },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:alt", content: "iinteliprox Services — AI Automation & Digital Growth" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: SITE.twitterHandle },
      { name: "twitter:title", content: "Services — AI Automation, Web Development & Digital Marketing | iinteliprox" },
      { name: "twitter:description", content: "AI automation, web development, mobile apps, digital marketing, SEO, UI/UX, branding and business automation services from iinteliprox." },
      { name: "twitter:image", content: absoluteUrl(SITE.ogImage) },
      { name: "twitter:image:alt", content: "iinteliprox Services — AI Automation & Digital Growth" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/services") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": `${SITE.url}/services#webpage`,
              url: absoluteUrl("/services"),
              name: "AI Automation, Web Development & Digital Marketing Services | iinteliprox",
              description: "Explore all iinteliprox services — AI automation, web development, mobile apps, digital marketing, SEO, UI/UX and business automation.",
              inLanguage: "en-IN",
              isPartOf: { "@id": `${SITE.url}/#website` },
              breadcrumb: { "@id": `${SITE.url}/services#breadcrumb` },
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${SITE.url}/services#breadcrumb`,
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
                { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
              ],
            },
            {
              "@type": "ItemList",
              name: "iinteliprox Services",
              itemListElement: SERVICES_DATA.map((s, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: s.name,
                url: absoluteUrl(`/services/${s.slug}`),
                description: s.short,
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: ServicesIndexPage,
});


function ServicesIndexPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f8fafc]">
      <SiteNav />
      <main className="pt-32 pb-24 sm:pt-40 sm:pb-32 animate-fade-in">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#16a34a] mr-2 align-middle" />
            Our Practice Areas
          </div>
          <h1 className="font-display mt-6 text-4xl sm:text-6xl md:text-7xl leading-[1.02] tracking-tight max-w-4xl text-[#f8fafc]">
            Enterprise solutions engineered for <span className="text-[#16a34a]">exponential growth.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-[#94a3b8] leading-relaxed">
            AI automation, web development, mobile apps, digital marketing, SEO, UI/UX redesign, branding, business automation, social media management, and global marketplace expansion.
          </p>

          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES_DATA.map((s, i) => (
              <li key={s.slug} className="h-full">
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group relative flex flex-col justify-between card-surface p-8 h-full border border-[rgba(255,255,255,0.08)] hover:border-[#16a34a] transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#16a34a]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-[#94a3b8] group-hover:text-[#16a34a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <h2 className="font-display text-2xl mt-4 text-[#f8fafc] group-hover:text-[#16a34a] transition-colors">
                      {s.name}
                    </h2>
                    <p className="mt-3 text-sm text-[#94a3b8] leading-relaxed">
                      {s.short}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between">
                    <span className="text-xs font-mono tracking-wider uppercase text-[#16a34a] group-hover:underline">
                      Explore Solution
                    </span>
                    <span className="text-xs text-[#94a3b8] font-mono">
                      {s.pricing[0]?.price.split(" ")[0]}
                    </span>
                  </div>
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
