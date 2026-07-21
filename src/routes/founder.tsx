import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter, FloatingWhatsApp } from "@/components/site-footer";
import { SITE, whatsappLink } from "@/lib/site";
import { Calendar, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { Toaster } from "sonner";

const FOUNDER_PHOTO = "/gaurav-tiwari.jpg";

const EXPERTISE = [
  { title: "Full-Stack Web Development", desc: "React, Next.js, Node.js, TypeScript and modern web architectures." },
  { title: "AI Automation", desc: "OpenAI, LangChain, RAG systems and production-grade AI agents." },
  { title: "Modern UI/UX Design", desc: "Product interfaces, design systems and motion-rich experiences." },
  { title: "API Integration", desc: "Payment gateways, CRMs, WhatsApp Business API and third-party platforms." },
  { title: "Business Automation", desc: "Workflow automation across sales, marketing and operations." },
  { title: "Digital Transformation", desc: "End-to-end technology strategy and roadmapping for scaling businesses." },
];

const STATS = [
  { v: "80+", l: "Projects Completed" },
  { v: "25+", l: "Technologies" },
  { v: "60+", l: "Happy Clients" },
  { v: "24/7", l: "Support" },
  { v: "6+", l: "Years Building" },
];

const JOURNEY = [
  { t: "Started Learning", d: "Fell in love with the web — HTML, CSS, JavaScript, then React." },
  { t: "Freelancing", d: "Delivered dozens of client websites and apps while sharpening the craft." },
  { t: "Agency Launch", d: "Founded iinteliprox to bring engineering, design and marketing under one roof." },
  { t: "Business Automation", d: "Doubled down on AI-first workflows for real business outcomes." },
  { t: "Scaling iinteliprox", d: "Serving clients across India and worldwide with a modern, senior team." },
];

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Gaurav Tiwari — Founder & CEO | iinteliprox" },
      {
        name: "description",
        content:
          "Meet Gaurav Tiwari, Founder & CEO of iinteliprox. Full-stack web developer, AI automation expert and modern UI/UX designer building custom software and growth systems for businesses worldwide.",
      },
      { property: "og:title", content: "Gaurav Tiwari — Founder & CEO of iinteliprox" },
      {
        property: "og:description",
        content:
          "Full-stack web developer and AI automation expert. Founder of iinteliprox — Lucknow, India.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/founder" },
      { property: "og:image", content: FOUNDER_PHOTO },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: FOUNDER_PHOTO },
    ],
    links: [{ rel: "canonical", href: "/founder" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Gaurav Tiwari",
          jobTitle: "Founder & CEO",
          worksFor: { "@type": "Organization", name: "iinteliprox" },
          image: FOUNDER_PHOTO,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Lucknow",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: FounderPage,
});

function FounderPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="animate-fade-in">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 bg-surface">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="eyebrow">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand mr-2 align-middle" />
                Founder & CEO
              </div>
              <h1 className="font-display mt-6 text-4xl sm:text-6xl md:text-7xl leading-[1.02] tracking-tight">
                Gaurav
                <br />
                <span className="text-brand italic">Tiwari.</span>
              </h1>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Full-Stack Developer",
                  "AI Automation Expert",
                  "UI/UX Designer",
                  "React & Next.js",
                  "Digital Transformation",
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
                I build custom websites, mobile apps and AI automations for
                businesses that want to grow. As founder of iinteliprox I lead
                engineering, design and strategy — pairing modern React and
                Node.js with production-grade AI to ship systems that compound.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a href={SITE.calendly} target="_blank" rel="noreferrer" className="btn-primary">
                  <Calendar className="h-4 w-4" />
                  Book a Meeting
                </a>
                <a
                  href={whatsappLink("Hi Gaurav, I visited iinteliprox.com and would love to talk about a project.")}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                >
                  <MessageCircle className="h-4 w-4" />
                  Contact Founder
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/5] w-full max-w-lg mx-auto overflow-hidden rounded-3xl border border-hairline bg-surface-2 shadow-[0_20px_60px_-20px_oklch(0.18_0.015_275/25%)]">
                <img
                  src={FOUNDER_PHOTO}
                  alt="Gaurav Tiwari, Founder & CEO of iinteliprox"
                  className="h-full w-full object-cover"
                  width={800}
                  height={1000}
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="py-20 sm:py-24 hairline-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">Expertise</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight max-w-3xl">
              What I lead across iinteliprox
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

        {/* Stats */}
        <section className="py-20 sm:py-24 hairline-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">By the numbers</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight max-w-3xl">
              A track record you can measure
            </h2>
            <dl className="mt-14 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-5 border border-hairline rounded-2xl overflow-hidden">
              {STATS.map((m) => (
                <div key={m.l} className="bg-background p-8">
                  <dd className="font-display text-5xl text-brand">{m.v}</dd>
                  <dt className="eyebrow mt-3">{m.l}</dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 sm:py-24 hairline-t">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="eyebrow">Journey</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight">
              From first line of code to agency
            </h2>
            <ol className="mt-14 relative border-l border-hairline ml-3 space-y-10">
              {JOURNEY.map((j, i) => (
                <li key={j.t} className="pl-8 relative">
                  <span className="absolute left-0 -translate-x-1/2 top-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand text-brand-foreground font-mono text-[10px]">
                    {i + 1}
                  </span>
                  <div className="font-display text-2xl">{j.t}</div>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{j.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-20 sm:py-24 hairline-t">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <div className="eyebrow justify-center inline-flex">Reach out</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight">
              Let's build something together
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={SITE.calendly} target="_blank" rel="noreferrer" className="btn-primary">
                <Calendar className="h-4 w-4" />
                Book a Meeting
              </a>
              <a href={`mailto:${SITE.email.business}`} className="btn-ghost">
                <Mail className="h-4 w-4" />
                Email me
              </a>
              <Link to="/co-founder" className="btn-ghost">
                Meet the Co-Founder
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
