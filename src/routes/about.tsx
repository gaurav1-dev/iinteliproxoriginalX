import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter, FloatingWhatsApp } from "@/components/site-footer";
import { SectionCTA } from "@/components/section-cta";
import { SERVICES_DATA } from "@/lib/services-data";
import { ArrowUpRight } from "lucide-react";
import { Toaster } from "sonner";
import { absoluteUrl, SITE } from "@/lib/site";

const VALUES = [
  { t: "Client-first", d: "We win when you win. Every decision is filtered through the outcome for your business." },
  { t: "Craft", d: "We ship work we're proud to sign. Speed without craft is technical debt in disguise." },
  { t: "Ownership", d: "You own the code, the accounts, the assets — always. No lock-in, no hostage support." },
  { t: "Transparency", d: "Fixed scope, clear timelines, honest updates. No surprises at invoice time." },
];

const INDUSTRIES = [
  "SaaS", "E-commerce", "Real Estate", "Healthcare",
  "Education", "FinTech", "Manufacturing", "Logistics",
  "Hospitality", "Legal", "Marketing", "Consulting",
];

const STACK = [
  "React", "Next.js", "TanStack Start", "Node.js", "TypeScript",
  "Supabase", "PostgreSQL", "Tailwind", "Framer Motion", "OpenAI",
  "LangChain", "n8n", "Zapier", "HubSpot", "Google Cloud",
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About iinteliprox | AI-First Agency — Lucknow, India | Story, Mission & Team" },
      {
        name: "description",
        content:
          "iinteliprox is an AI-first automation and digital growth agency based in Lucknow, India. Learn about our story, mission, values, founding team, technology stack and industries we serve.",
      },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      {
        name: "keywords",
        content:
          "iinteliprox About, AI Agency India, AI Automation Company Lucknow, Web Development Agency Story, Digital Marketing Agency Mission, AI Consulting India, Technology Agency Lucknow, AI Company Founders, Vishal Srivastava, Gaurav Tiwari",
      },
      { property: "og:title", content: "About iinteliprox — AI-First Agency in Lucknow, India" },
      {
        property: "og:description",
        content:
          "Story, mission, values, team and technology behind iinteliprox — an AI-first agency based in Lucknow, India serving clients worldwide.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/about") },
      { property: "og:image", content: absoluteUrl(SITE.ogImage) },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:alt", content: "About iinteliprox — AI Agency in Lucknow" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: SITE.twitterHandle },
      { name: "twitter:title", content: "About iinteliprox — AI-First Agency in Lucknow, India" },
      { name: "twitter:description", content: "Story, mission, values, team and technology behind iinteliprox — an AI-first agency based in Lucknow, India serving clients worldwide." },
      { name: "twitter:image", content: absoluteUrl(SITE.ogImage) },
      { name: "twitter:image:alt", content: "About iinteliprox — AI Agency in Lucknow" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/about") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "AboutPage",
              "@id": `${SITE.url}/about#webpage`,
              url: absoluteUrl("/about"),
              name: "About iinteliprox | AI-First Agency — Lucknow, India",
              description: "Story, mission, values, team and technology behind iinteliprox — an AI-first agency based in Lucknow, India.",
              inLanguage: "en-IN",
              isPartOf: { "@id": `${SITE.url}/#website` },
              about: { "@id": `${SITE.url}/#organization` },
              breadcrumb: { "@id": `${SITE.url}/about#breadcrumb` },
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${SITE.url}/about#breadcrumb`,
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
                { "@type": "ListItem", position: 2, name: "About", item: absoluteUrl("/about") },
              ],
            },
            {
              "@type": "Organization",
              "@id": `${SITE.url}/#organization`,
              name: "iinteliProX",
              alternateName: "iinteliprox",
              url: SITE.url,
              logo: absoluteUrl("/ip-logo.png"),
              foundingDate: "2023",
              description: "AI automation, web development and digital marketing agency based in Lucknow, India. Helping businesses grow with AI agents, n8n automation, custom websites and performance marketing.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lucknow",
                addressRegion: "Uttar Pradesh",
                addressCountry: "IN",
              },
              founder: [
                {
                  "@type": "Person",
                  name: "Vishal Srivastava",
                  jobTitle: "Founder & CEO",
                  url: absoluteUrl("/team"),
                },
                {
                  "@type": "Person",
                  name: "Gaurav Tiwari",
                  jobTitle: "Co-Founder & CTO",
                  url: absoluteUrl("/team"),
                },
              ],
              mission: "To ship growth systems — not deliverables — that keep producing value long after engagement ends.",
              sameAs: ["https://instagram.com/iinteliprox"],
              areaServed: ["India", "Worldwide"],
            },
          ],
        }),
      },
    ],
  }),
  component: AboutPage,
});


function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="animate-fade-in">
        <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 bg-surface">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand mr-2 align-middle" />
              About iinteliprox
            </div>
            <h1 className="font-display mt-6 text-4xl sm:text-6xl md:text-7xl leading-[1.02] tracking-tight max-w-4xl">
              An AI-first agency
              <br />
              built in <span className="text-brand italic">Lucknow.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              We help businesses grow with AI automation, custom software,
              digital marketing and design — engineered together as one growth
              system, not a shopping list of disconnected services.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 sm:py-24 hairline-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="eyebrow">Our story</div>
              <h2 className="font-display text-3xl sm:text-4xl mt-4 tracking-tight">
                Why we exist
              </h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                iinteliprox was founded to solve one problem: software teams
                that don't understand marketing, and marketing teams that don't
                understand software. Businesses were being asked to bridge that
                gap themselves — usually by paying twice.
              </p>
              <p>
                We built the agency we wished existed: engineers, designers,
                marketers and data analysts working in one team, on one plan,
                measured against one number — your growth.
              </p>
              <p>
                Today we serve founders and enterprises across India and around
                the world, delivering AI automations, custom websites, mobile
                apps and marketing programs that compound.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 sm:py-24 hairline-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-6 md:grid-cols-2">
            <div className="card-surface p-8">
              <div className="eyebrow">Mission</div>
              <h3 className="font-display text-2xl mt-3">Ship growth systems, not deliverables.</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Every engagement leaves a system behind — one that keeps
                producing value long after we're done.
              </p>
            </div>
            <div className="card-surface p-8">
              <div className="eyebrow">Vision</div>
              <h3 className="font-display text-2xl mt-3">AI-native operations for every business.</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We believe the next decade of business will be won by teams that
                automate their operations with AI. Our job is to get you there.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 sm:py-24 hairline-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">Values</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight max-w-3xl">
              What we stand for
            </h2>
            <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((v) => (
                <li key={v.t} className="card-surface p-6">
                  <h3 className="font-display text-xl">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Meet the team */}
        <section className="py-20 sm:py-24 hairline-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">Meet the team</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight max-w-3xl">
              Leadership
            </h2>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              <Link to="/team/$slug" params={{ slug: "vishal-srivastava" }} className="group card-surface p-8 hover:border-brand/40 transition-colors flex items-center justify-between gap-6">
                <div>
                  <div className="eyebrow">Founder & CEO</div>
                  <h3 className="font-display text-3xl mt-2">Vishal Srivastava</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Enterprise AI strategy, data intelligence & growth vision.</p>
                </div>
                <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-brand transition-colors shrink-0" />
              </Link>
              <Link to="/team/$slug" params={{ slug: "gaurav-tiwari" }} className="group card-surface p-8 hover:border-brand/40 transition-colors flex items-center justify-between gap-6">
                <div>
                  <div className="eyebrow">Co-Founder & CTO</div>
                  <h3 className="font-display text-3xl mt-2">Gaurav Tiwari</h3>
                  <p className="mt-2 text-sm text-muted-foreground">AI software architecture, cloud platforms & engineering excellence.</p>
                </div>
                <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-brand transition-colors shrink-0" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services grid preview */}
        <section className="py-20 sm:py-24 hairline-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">Capabilities</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight max-w-3xl">
              What we deliver
            </h2>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES_DATA.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group flex items-center justify-between card-surface p-5 hover:border-brand/40 transition-colors"
                  >
                    <span className="font-medium">{s.name}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-brand transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Tech stack */}
        <section className="py-20 sm:py-24 hairline-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">Technology stack</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight max-w-3xl">
              Modern, chosen deliberately
            </h2>
            <div className="mt-10 flex flex-wrap gap-2">
              {STACK.map((t) => (
                <span key={t} className="inline-flex items-center rounded-full border border-hairline bg-surface px-4 py-2 text-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 sm:py-24 hairline-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">Industries served</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight max-w-3xl">
              Who we work with
            </h2>
            <ul className="mt-10 grid gap-px bg-hairline sm:grid-cols-3 lg:grid-cols-4 border border-hairline rounded-2xl overflow-hidden">
              {INDUSTRIES.map((i) => (
                <li key={i} className="bg-background p-5 text-sm">{i}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SectionCTA />
      <SiteFooter />
      <FloatingWhatsApp />
      <Toaster theme="light" position="top-center" />
    </div>
  );
}
