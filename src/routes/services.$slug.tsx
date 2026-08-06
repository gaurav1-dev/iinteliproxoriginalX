import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter, FloatingWhatsApp } from "@/components/site-footer";
import { SectionCTA } from "@/components/section-cta";
import { serviceBySlug, SERVICES_DATA, type Service } from "@/lib/services-data";
import { BLOGS } from "@/lib/blogs";
import { SITE, whatsappLink, absoluteUrl } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, MessageCircle, Check, ArrowUpRight, ShieldCheck, Clock, Zap, Target, Layers, Layers3, Sparkles } from "lucide-react";
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
          { title: "Service not found — iinteliproX AI" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const s = loaderData.service;
    return {
      meta: [
        { title: s.seoTitle },
        { name: "description", content: s.seoDescription },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
        { name: "keywords", content: s.keywords.join(", ") },
        { property: "og:title", content: s.seoTitle },
        { property: "og:description", content: s.seoDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: absoluteUrl(`/services/${s.slug}`) },
        { property: "og:image", content: absoluteUrl(SITE.ogImage) },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:type", content: "image/png" },
        { property: "og:image:alt", content: `${s.name} Services — iinteliproX AI` },
        { property: "og:locale", content: "en_IN" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: SITE.twitterHandle },
        { name: "twitter:title", content: s.seoTitle },
        { name: "twitter:description", content: s.seoDescription },
        { name: "twitter:image", content: absoluteUrl(SITE.ogImage) },
        { name: "twitter:image:alt", content: `${s.name} Services — iinteliproX AI` },
        ...s.keywords.map((kw) => ({ property: "article:tag", content: kw })),
      ],
      links: [{ rel: "canonical", href: absoluteUrl(`/services/${s.slug}`) }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": `${absoluteUrl(`/services/${s.slug}`)}#webpage`,
                url: absoluteUrl(`/services/${s.slug}`),
                name: s.seoTitle,
                description: s.seoDescription,
                inLanguage: "en-IN",
                isPartOf: { "@id": `${SITE.url}/#website` },
                breadcrumb: { "@id": `${absoluteUrl(`/services/${s.slug}`)}#breadcrumb` },
              },
              {
                "@type": "Service",
                name: s.name,
                serviceType: s.name,
                description: s.seoDescription,
                url: absoluteUrl(`/services/${s.slug}`),
                provider: {
                  "@type": "Organization",
                  name: "iinteliproX AI",
                  url: SITE.url,
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Lucknow",
                    addressRegion: "Uttar Pradesh",
                    addressCountry: "IN",
                  },
                },
                areaServed: ["Lucknow", "Uttar Pradesh", "India", "Worldwide"],
                offers: s.pricing.map((p) => ({
                  "@type": "Offer",
                  name: p.title,
                  price: p.price.replace(/[^0-9]/g, "") || "20000",
                  priceCurrency: "INR",
                  availability: "https://schema.org/InStock",
                  seller: { "@type": "Organization", name: "iinteliproX AI", url: SITE.url },
                })),
              },
              {
                "@type": "BreadcrumbList",
                "@id": `${absoluteUrl(`/services/${s.slug}`)}#breadcrumb`,
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
                  { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
                  { "@type": "ListItem", position: 3, name: s.name, item: absoluteUrl(`/services/${s.slug}`) },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: s.faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: { "@type": "Answer", text: faq.a },
                })),
              },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-[#050505] text-[#f8fafc]">
      <SiteNav />
      <main className="pt-40 pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h1 className="font-display text-4xl sm:text-5xl">Service not found</h1>
          <p className="mt-4 text-[#94a3b8]">
            The service you're looking for doesn't exist or has moved.
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

  const prefill = `Hello iinteliproX AI, I'm interested in your ${s.name} service and would like to request a quote.`;

  return (
    <div className="min-h-screen bg-[#050505] text-[#f8fafc]">
      <SiteNav />
      <main className="animate-fade-in">
        {/* 1. Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-[rgba(255,255,255,0.08)] bg-[#050505]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(22,163,74,0.06),transparent_32rem)] pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-center gap-2 eyebrow">
              <Link to="/services" className="hover:text-foreground">Services</Link>
              <span>/</span>
              <span className="text-foreground">{s.name}</span>
            </div>
            <h1 className="font-display mt-6 text-4xl sm:text-6xl md:text-7xl leading-[1.02] tracking-tight max-w-4xl text-[#f8fafc]">
              {s.hero.split(" ").map((word, i, arr) => {
                if (i === Math.floor(arr.length / 2)) {
                  return <span key={i} className="text-[#16a34a]"> {word} </span>;
                }
                return word + " ";
              })}
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-[#94a3b8] leading-relaxed">
              {s.short}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href={SITE.calendly} target="_blank" rel="noreferrer" className="btn-primary">
                <Calendar className="h-4 w-4" />
                Book Consultation
              </a>
              <a
                href={whatsappLink(prefill)}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                <MessageCircle className="h-4 w-4 text-[#16a34a]" />
                Request Custom Quote
              </a>
            </div>

            {/* Metric pill bar */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#111827]/60">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-[#16a34a] shrink-0" />
                <div>
                  <div className="text-xs text-[#94a3b8]">Guarantee</div>
                  <div className="text-sm font-semibold text-[#f8fafc]">Enterprise SLA</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-[#16a34a] shrink-0" />
                <div>
                  <div className="text-xs text-[#94a3b8]">Execution</div>
                  <div className="text-sm font-semibold text-[#f8fafc]">Fast Agile Sprints</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-[#16a34a] shrink-0" />
                <div>
                  <div className="text-xs text-[#94a3b8]">Performance</div>
                  <div className="text-sm font-semibold text-[#f8fafc]">Lighthouse 90+</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-[#16a34a] shrink-0" />
                <div>
                  <div className="text-xs text-[#94a3b8]">Code Ownership</div>
                  <div className="text-sm font-semibold text-[#f8fafc]">100% IP Transfer</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Service Overview */}
        <section className="py-20 sm:py-24 border-b border-[rgba(255,255,255,0.08)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="eyebrow">Service Overview</div>
              <h2 className="font-display text-3xl sm:text-4xl mt-4 tracking-tight text-[#f8fafc]">
                Engineered for <span className="text-[#16a34a]">scale</span>
              </h2>
            </div>
            <div className="md:col-span-8 space-y-8">
              <div>
                <h3 className="font-mono text-xs tracking-[0.24em] uppercase text-[#16a34a]">What It Is</h3>
                <p className="mt-3 text-[#94a3b8] text-base leading-relaxed">{s.what}</p>
              </div>
              <div>
                <h3 className="font-mono text-xs tracking-[0.24em] uppercase text-[#16a34a]">Why Businesses Need It</h3>
                <p className="mt-3 text-[#94a3b8] text-base leading-relaxed">{s.why}</p>
              </div>
              <div>
                <h3 className="font-mono text-xs tracking-[0.24em] uppercase text-[#16a34a]">Who It's For</h3>
                <p className="mt-3 text-[#94a3b8] text-base leading-relaxed">{s.who}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Sub-Services Breakdown */}
        <section className="py-20 sm:py-24 border-b border-[rgba(255,255,255,0.08)] bg-[#0b0f0c]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">Detailed Capabilities</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight text-[#f8fafc] max-w-3xl">
              Solutions included in <span className="text-[#16a34a]">{s.name}</span>
            </h2>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {s.subServices.map((sub, i) => (
                <Link key={sub.slug} to="/services/$slug/$subSlug" params={{ slug: s.slug, subSlug: sub.slug }} aria-label={`Explore ${sub.name}`} className="card-surface p-6 flex flex-col justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a34a] hover:border-[#16a34a]/60 transition-colors">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#16a34a]">{(i + 1).toString().padStart(2, "0")}</span>
                      <span className="text-xs px-2.5 py-1 rounded-full border border-[rgba(255,255,255,0.08)] bg-[#050505] text-[#94a3b8] font-mono">
                        {sub.timeline}
                      </span>
                    </div>
                    <h3 className="font-display text-xl mt-4 text-[#f8fafc] group-hover:text-[#16a34a] transition-colors">
                      {sub.name}
                    </h3>
                    <p className="mt-3 text-sm text-[#94a3b8] leading-relaxed">
                      {sub.desc}
                    </p>
                    <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.08)]">
                      <div className="text-xs font-mono text-[#16a34a] uppercase tracking-wider">Target Audience</div>
                      <div className="text-xs text-[#94a3b8] mt-1">{sub.who}</div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.08)] flex flex-wrap gap-1.5">
                    {sub.tech.map((t) => (
                      <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#050505] text-[#94a3b8] border border-[rgba(255,255,255,0.05)]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#16a34a]">Explore service <ArrowUpRight className="h-4 w-4" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Benefits */}
        <section className="py-20 sm:py-24 border-b border-[rgba(255,255,255,0.08)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">Key Advantages</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight text-[#f8fafc] max-w-3xl">
              Tangible ROI &amp; <span className="text-[#16a34a]">business benefits</span>
            </h2>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {s.benefits.map((b, i) => (
                <div key={i} className="card-surface p-6">
                  <div className="h-10 w-10 rounded-xl bg-[#16a34a]/10 border border-[#16a34a]/20 flex items-center justify-center text-[#16a34a]">
                    <Target className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-sm text-[#f8fafc] font-medium leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Features Grid */}
        <section className="py-20 sm:py-24 border-b border-[rgba(255,255,255,0.08)] bg-[#0b0f0c]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">Technical Features</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight text-[#f8fafc] max-w-3xl">
              Built with <span className="text-[#16a34a]">precision</span>
            </h2>
            <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {s.features.map((f) => (
                <li key={f} className="card-surface p-5 flex items-center gap-3.5">
                  <div className="h-6 w-6 rounded-full bg-[#16a34a]/20 flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5 text-[#16a34a]" />
                  </div>
                  <span className="text-sm font-medium text-[#f8fafc]">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6. Pricing & Investment Plans */}
        <section className="py-20 sm:py-24 border-b border-[rgba(255,255,255,0.08)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">Pricing Plans</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight text-[#f8fafc] max-w-3xl">
              Transparent <span className="text-[#16a34a]">investment</span> model
            </h2>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {s.pricing.map((p) => (
                <div key={p.title} className="card-surface p-8 flex flex-col justify-between relative border border-[rgba(255,255,255,0.08)] hover:border-[#16a34a] transition-all">
                  {p.badge ? (
                    <span className="absolute -top-3 right-6 bg-[#16a34a] text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full font-bold">
                      {p.badge}
                    </span>
                  ) : null}
                  <div>
                    <h3 className="font-display text-2xl text-[#f8fafc]">{p.title}</h3>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#16a34a]">{p.price}</span>
                      {p.period ? <span className="text-sm text-[#94a3b8] font-mono">{p.period}</span> : null}
                    </div>
                    {p.note ? <p className="mt-3 text-xs text-[#94a3b8] italic">{p.note}</p> : null}

                    {p.features && p.features.length > 0 ? (
                      <ul className="mt-6 space-y-3 pt-6 border-t border-[rgba(255,255,255,0.08)]">
                        {p.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2.5 text-xs text-[#94a3b8]">
                            <Check className="h-4 w-4 text-[#16a34a] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>

                  <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.08)]">
                    <a href={SITE.calendly} target="_blank" rel="noreferrer" className="btn-primary w-full text-center justify-center">
                      Choose Package
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Technologies Used */}
        <section className="py-20 sm:py-24 border-b border-[rgba(255,255,255,0.08)] bg-[#0b0f0c]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">Technology Stack</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight text-[#f8fafc] max-w-3xl">
              Engineered with <span className="text-[#16a34a]">modern tools</span>
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              {s.technologies.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#111827] px-5 py-2.5 text-sm text-[#f8fafc] font-medium"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#16a34a] mr-2.5" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Industries Served */}
        <section className="py-20 sm:py-24 border-b border-[rgba(255,255,255,0.08)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">Industries Served</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight text-[#f8fafc] max-w-3xl">
              Specialized domain <span className="text-[#16a34a]">expertise</span>
            </h2>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {s.industries.map((ind) => (
                <div key={ind} className="card-surface p-4 text-center text-xs font-mono tracking-wider uppercase text-[#f8fafc] border border-[rgba(255,255,255,0.08)]">
                  {ind}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Process */}
        <section className="py-20 sm:py-24 border-b border-[rgba(255,255,255,0.08)] bg-[#0b0f0c]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">Execution Pipeline</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight text-[#f8fafc] max-w-3xl">
              How we <span className="text-[#16a34a]">deliver</span>
            </h2>
            <ol className="mt-14 relative border-l border-[rgba(255,255,255,0.08)] ml-3 sm:ml-6 space-y-8">
              {s.process.map((step, i) => (
                <li key={step} className="pl-8 relative">
                  <span className="absolute left-0 -translate-x-1/2 top-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#16a34a] text-white font-mono text-[10px]">
                    {i + 1}
                  </span>
                  <div className="font-display text-2xl text-[#f8fafc]">{step}</div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 10. Why Choose iinteliproX AI */}
        <section className="py-20 sm:py-24 border-b border-[rgba(255,255,255,0.08)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">Why iinteliproX AI</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight text-[#f8fafc] max-w-3xl">
              The enterprise <span className="text-[#16a34a]">advantage</span>
            </h2>
            <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {s.whyUs.map((w) => (
                <li key={w.title} className="card-surface p-6">
                  <Check className="h-5 w-5 text-[#16a34a]" />
                  <h3 className="font-display text-xl mt-4 text-[#f8fafc]">{w.title}</h3>
                  <p className="mt-2 text-sm text-[#94a3b8] leading-relaxed">{w.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 11. FAQ */}
        <section className="py-20 sm:py-24 border-b border-[rgba(255,255,255,0.08)] bg-[#0b0f0c]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="eyebrow">Frequently Asked Questions</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight text-[#f8fafc]">
              Got <span className="text-[#16a34a]">questions?</span>
            </h2>
            <Accordion type="single" collapsible className="mt-10">
              {s.faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-[rgba(255,255,255,0.08)]">
                  <AccordionTrigger className="text-left text-base sm:text-lg text-[#f8fafc] hover:text-[#16a34a]">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#94a3b8] leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 12. Related Services & Insights */}
        <section className="py-20 sm:py-24 border-b border-[rgba(255,255,255,0.08)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">Related Services</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight text-[#f8fafc]">
              Explore <span className="text-[#16a34a]">complementary</span> practice areas
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES_DATA.filter((x) => x.slug !== s.slug).slice(0, 6).map((r) => (
                <li key={r.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: r.slug }}
                    className="group flex items-center justify-between card-surface p-5 hover:border-[#16a34a] transition-colors"
                  >
                    <span className="font-medium text-[#f8fafc] group-hover:text-[#16a34a] transition-colors">{r.name}</span>
                    <ArrowUpRight className="h-4 w-4 text-[#94a3b8] group-hover:text-[#16a34a] transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 13. Book Consultation CTA */}
        <SectionCTA
          title={`Ready to scale your ${s.name.toLowerCase()}?`}
          description="Book a 30-minute consultation with our senior engineers and growth strategists to outline your exact roadmap."
        />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
      <Toaster theme="light" position="top-center" />
    </div>
  );
}
