import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter, FloatingWhatsApp } from "@/components/site-footer";
import { SectionCTA } from "@/components/section-cta";
import { serviceBySlug, SERVICES_DATA, type Service } from "@/lib/services-data";
import { SITE, whatsappLink } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, MessageCircle, Check, ArrowUpRight } from "lucide-react";
import { Toaster } from "sonner";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = serviceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service not found — iinteliprox" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const s = loaderData.service;
    return {
      meta: [
        { title: s.seoTitle },
        { name: "description", content: s.seoDescription },
        { name: "keywords", content: s.keywords.join(", ") },
        { property: "og:title", content: s.seoTitle },
        { property: "og:description", content: s.seoDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/services/${s.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: s.seoTitle },
        { name: "twitter:description", content: s.seoDescription },
      ],
      links: [{ rel: "canonical", href: `/services/${s.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.name,
            serviceType: s.name,
            description: s.seoDescription,
            provider: {
              "@type": "Organization",
              name: "iinteliprox",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lucknow",
                addressRegion: "Uttar Pradesh",
                addressCountry: "IN",
              },
            },
            areaServed: ["India", "Worldwide"],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen">
      <SiteNav />
      <main className="pt-40 pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h1 className="font-display text-4xl sm:text-5xl">Service not found</h1>
          <p className="mt-4 text-muted-foreground">
            The service you're looking for doesn't exist.
          </p>
          <Link to="/services" className="btn-primary mt-8 inline-flex">
            View all services
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  ),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData() as { service: Service };
  const s = service;

  const prefill = `Hello iinteliprox, I'm interested in your ${s.name} service and would like to discuss a project.`;

  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="animate-fade-in">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24 bg-surface">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-center gap-2 eyebrow">
              <Link to="/services" className="hover:text-foreground">Services</Link>
              <span>/</span>
              <span className="text-foreground">{s.name}</span>
            </div>
            <h1 className="font-display mt-6 text-4xl sm:text-6xl md:text-7xl leading-[1.02] tracking-tight max-w-4xl">
              {s.hero}
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              {s.short}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href={SITE.calendly} target="_blank" rel="noreferrer" className="btn-primary">
                <Calendar className="h-4 w-4" />
                Book Free Consultation
              </a>
              <a
                href={whatsappLink(prefill)}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                <MessageCircle className="h-4 w-4" />
                Get a Quote
              </a>
            </div>
          </div>
        </section>

        {/* About this service */}
        <section className="py-20 sm:py-24 hairline-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="eyebrow">About this service</div>
              <h2 className="font-display text-3xl sm:text-4xl mt-4 tracking-tight">
                What we deliver
              </h2>
            </div>
            <div className="md:col-span-8 space-y-8">
              <div>
                <h3 className="font-mono text-xs tracking-[0.24em] uppercase text-brand">What it is</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.what}</p>
              </div>
              <div>
                <h3 className="font-mono text-xs tracking-[0.24em] uppercase text-brand">Why businesses need it</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.why}</p>
              </div>
              <div>
                <h3 className="font-mono text-xs tracking-[0.24em] uppercase text-brand">Who it's for</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.who}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 sm:py-24 hairline-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">Benefits & Features</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight max-w-3xl">
              Everything included
            </h2>
            <ul className="mt-14 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden border border-hairline">
              {s.features.map((f, i) => (
                <li key={f} className="bg-background p-6 flex items-start gap-4">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-2 font-mono text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="font-medium">{f}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process timeline */}
        <section className="py-20 sm:py-24 hairline-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">How we execute</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight max-w-3xl">
              A predictable process
            </h2>
            <ol className="mt-14 relative border-l border-hairline ml-3 sm:ml-6 space-y-8">
              {s.process.map((step, i) => (
                <li key={step} className="pl-8 relative">
                  <span className="absolute left-0 -translate-x-1/2 top-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand text-brand-foreground font-mono text-[10px]">
                    {i + 1}
                  </span>
                  <div className="font-display text-2xl">{step}</div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 sm:py-24 hairline-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">Technologies</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight max-w-3xl">
              Modern stack, chosen deliberately
            </h2>
            <div className="mt-10 flex flex-wrap gap-2">
              {s.technologies.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-hairline bg-surface px-4 py-2 text-sm text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="py-20 sm:py-24 hairline-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">Why iinteliprox</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight max-w-3xl">
              What makes us different
            </h2>
            <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {s.whyUs.map((w) => (
                <li key={w.title} className="card-surface p-6 hover:border-brand/40 transition-colors">
                  <Check className="h-5 w-5 text-brand" />
                  <h3 className="font-display text-xl mt-4">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 sm:py-24 hairline-t">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="eyebrow">FAQ</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight">
              Frequently asked questions
            </h2>
            <Accordion type="single" collapsible className="mt-10">
              {s.faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base sm:text-lg">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Related services */}
        <section className="py-20 sm:py-24 hairline-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">Related services</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight">
              Explore more
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES_DATA.filter((x) => x.slug !== s.slug).slice(0, 6).map((r) => (
                <li key={r.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: r.slug }}
                    className="group flex items-center justify-between card-surface p-5 hover:border-brand/40 transition-colors"
                  >
                    <span className="font-medium">{r.name}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-brand transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SectionCTA
        title={`Ready to start your ${s.name.toLowerCase()} project?`}
        description="Book a free strategy call — we'll map scope, timeline and pricing in 30 minutes."
      />
      <SiteFooter />
      <FloatingWhatsApp />
      <Toaster theme="light" position="top-center" />
    </div>
  );
}

