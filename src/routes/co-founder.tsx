import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter, FloatingWhatsApp } from "@/components/site-footer";
import { SITE, whatsappLink, absoluteUrl } from "@/lib/site";
import { Calendar, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { Toaster } from "sonner";

const EXPERTISE = [
  { title: "Data Analytics", desc: "Turning raw operational data into decisions that move business metrics." },
  { title: "Business Intelligence", desc: "Executive dashboards, KPI systems and reporting infrastructures." },
  { title: "Dashboard Development", desc: "Interactive dashboards in Power BI, Metabase and custom-built stacks." },
  { title: "Data Visualization", desc: "Clear, honest charts that tell the story hidden inside the data." },
  { title: "SQL & Modeling", desc: "Data warehousing, transformations and analytical modeling." },
  { title: "Market Analysis", desc: "Competitive intelligence and market sizing for strategic decisions." },
];

export const Route = createFileRoute("/co-founder")({
  head: () => ({
    meta: [
      { title: "Vishal Shrivastava — Co-Founder & Data Analytics Lead | iinteliprox" },
      {
        name: "description",
        content:
          "Meet Vishal Shrivastava, Co-Founder of iinteliprox and Data Analytics Specialist. Business intelligence, dashboards, SQL, Power BI and market analysis for scaling businesses.",
      },
      { property: "og:title", content: "Vishal Shrivastava — Co-Founder, iinteliprox" },
      {
        property: "og:description",
        content:
          "Co-Founder & Data Analytics Specialist at iinteliprox. Business intelligence, dashboards and data visualization.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: absoluteUrl("/co-founder") },
      { property: "og:image", content: absoluteUrl("/images/cofounder.jpg") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: absoluteUrl("/images/cofounder.jpg") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/co-founder") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Vishal Shrivastava",
          jobTitle: "Co-Founder & Data Analytics Specialist",
          worksFor: { "@type": "Organization", name: "iinteliprox" },
          image: "/images/cofounder.jpg",
        }),
      },
    ],
  }),
  component: CoFounderPage,
});

function CoFounderPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="animate-fade-in">
        <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 bg-surface">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="eyebrow">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand mr-2 align-middle" />
                Co-Founder & Data Analytics Specialist
              </div>
              <h1 className="font-display mt-6 text-4xl sm:text-6xl md:text-7xl leading-[1.02] tracking-tight">
                Vishal
                <br />
                <span className="text-brand italic">Shrivastava.</span>
              </h1>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Data Analytics",
                  "Business Intelligence",
                  "Power BI",
                  "SQL",
                  "Dashboards",
                  "Market Analysis",
                ].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-hairline bg-background px-3 py-1 text-xs font-mono tracking-wide text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
                I lead data analytics at iinteliprox — designing dashboards,
                reporting systems and business intelligence infrastructures that
                turn scattered operational data into confident decisions. From
                SQL warehouses to Power BI, my job is making the numbers make
                sense.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href={SITE.calendly} target="_blank" rel="noreferrer" className="btn-primary">
                  <Calendar className="h-4 w-4" />
                  Book a Meeting
                </a>
                <a
                  href={`mailto:${SITE.email.team}`}
                  className="btn-ghost"
                >
                  <Mail className="h-4 w-4" />
                  Contact Co-Founder
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/5] w-full max-w-lg mx-auto overflow-hidden rounded-3xl border border-hairline bg-surface-2 shadow-[0_20px_60px_-20px_oklch(0.18_0.015_275/25%)]">
                <img
                  src="/images/cofounder.jpg"
                  alt="Vishal Shrivastava, Co-Founder & Data Analytics Specialist at iinteliprox"
                  className="h-full w-full object-cover"
                  width={800}
                  height={1000}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 hairline-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">Expertise</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight max-w-3xl">
              Areas of focus
            </h2>
            <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {EXPERTISE.map((e) => (
                <li key={e.title} className="card-surface p-6 hover:border-brand/40 transition-colors">
                  <h3 className="font-display text-xl">{e.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 sm:py-24 hairline-t">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <div className="eyebrow justify-center inline-flex">Reach out</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight">
              Let's decode your data
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={SITE.calendly} target="_blank" rel="noreferrer" className="btn-primary">
                <Calendar className="h-4 w-4" />
                Book a Meeting
              </a>
              <a href={whatsappLink("Hi iinteliprox, I'd like to discuss data analytics and BI.")}
                target="_blank" rel="noreferrer" className="btn-ghost">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <Link to="/founder" className="btn-ghost">
                Meet the Founder
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
      <Toaster theme="light" position="top-center" />
    </div>
  );
}
