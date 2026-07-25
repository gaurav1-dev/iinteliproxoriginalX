import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Calendar, Clock3 } from "lucide-react";
import { SiteFooter, FloatingWhatsApp } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { BLOGS, blogBySlug, type BlogArticle } from "@/lib/blogs";
import { SERVICES_DATA } from "@/lib/services-data";
import { SITE, absoluteUrl } from "@/lib/site";

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${value}T00:00:00Z`),
  );

const headingId = (heading: string) =>
  heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = blogBySlug(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const article = loaderData?.article;
    if (!article) return { meta: [{ title: "Article not found | iinteliprox" }, { name: "robots", content: "noindex" }] };

    const url = absoluteUrl(`/blog/${article.slug}`);
    const articleSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BlogPosting",
          "@id": `${url}#article`,
          headline: article.title,
          description: article.description,
          datePublished: article.publishedAt,
          dateModified: article.updatedAt,
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          author: { "@type": "Organization", name: "iinteliprox", url: SITE.url },
          publisher: {
            "@type": "Organization",
            name: "iinteliprox",
            url: SITE.url,
            logo: { "@type": "ImageObject", url: absoluteUrl("/ip-logo.png") },
          },
          keywords: article.keywords.join(", "),
          articleSection: article.category,
          inLanguage: "en-IN",
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
            { "@type": "ListItem", position: 2, name: "Insights", item: absoluteUrl("/blog") },
            { "@type": "ListItem", position: 3, name: article.title, item: url },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: article.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        },
      ],
    };

    return {
      meta: [
        { title: `${article.title} | iinteliprox Insights` },
        { name: "description", content: article.description },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "article:published_time", content: article.publishedAt },
        { property: "article:modified_time", content: article.updatedAt },
        { property: "article:section", content: article.category },
        { property: "og:image", content: absoluteUrl("/og-image.svg") },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: article.title },
        { name: "twitter:description", content: article.description },
        { name: "twitter:image", content: absoluteUrl("/og-image.svg") },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify(articleSchema) }],
    };
  },
  notFoundComponent: BlogNotFound,
  component: BlogArticlePage,
});

function BlogNotFound() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-40 text-center">
        <h1 className="font-display text-5xl">Article not found</h1>
        <p className="mt-4 text-muted-foreground">This guide is no longer available.</p>
        <Link to="/blog" className="btn-primary mt-8 inline-flex">Browse insights</Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function BlogArticlePage() {
  const { article } = Route.useLoaderData() as { article: BlogArticle };
  const services = article.relatedServices
    .map((slug) => SERVICES_DATA.find((service) => service.slug === slug))
    .filter((service): service is (typeof SERVICES_DATA)[number] => Boolean(service));

  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="pb-24 pt-28 sm:pb-32 sm:pt-36">
        <article>
          <header className="mx-auto max-w-4xl px-4 sm:px-6">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <ArrowLeft className="h-4 w-4" /> All insights
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-brand">
              <span>{article.category}</span>
              <span className="text-muted-foreground">•</span>
              <time dateTime={article.publishedAt} className="text-muted-foreground">{formatDate(article.publishedAt)}</time>
            </div>
            <h1 className="mt-5 font-display text-4xl leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">{article.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">{article.description}</p>
            <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <span>By <span className="font-medium text-foreground">iinteliprox Editorial Team</span></span>
              <span className="inline-flex items-center gap-1.5"><Clock3 className="h-4 w-4" />{article.readTime}</span>
            </div>
          </header>

          <div
            role="img"
            aria-label={`Featured illustration placeholder for ${article.title}`}
            className="mx-auto mt-12 flex aspect-[2/1] max-w-6xl items-end rounded-2xl border border-hairline bg-[radial-gradient(circle_at_70%_25%,rgba(20,186,63,.36),transparent_32%),linear-gradient(135deg,#0c1710,#07100a)] p-8 sm:mt-16 sm:p-12"
          >
            <span className="font-mono text-xs uppercase tracking-[0.28em] text-white/70">iinteliprox insights</span>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[15rem_minmax(0,1fr)]">
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-xl border border-hairline bg-surface p-5">
                <div className="eyebrow">In this guide</div>
                <nav aria-label="Table of contents" className="mt-4">
                  <ol className="space-y-2.5 text-sm text-muted-foreground">
                    {article.sections.map((section, index) => (
                      <li key={section.heading}>
                        <a href={`#${headingId(section.heading)}`} className="transition-colors hover:text-foreground">{index + 1}. {section.heading}</a>
                      </li>
                    ))}
                    <li><a href="#frequently-asked-questions" className="transition-colors hover:text-foreground">FAQ</a></li>
                  </ol>
                </nav>
              </div>
            </aside>

            <div className="min-w-0">
              <p className="text-lg leading-8 text-foreground/90">{article.intro}</p>
              <div className="mt-12 space-y-12">
                {article.sections.map((section) => (
                  <section key={section.heading} id={headingId(section.heading)} className="scroll-mt-28">
                    <h2 className="font-display text-3xl tracking-tight sm:text-4xl">{section.heading}</h2>
                    <div className="mt-5 space-y-5 leading-8 text-muted-foreground">
                      {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                  </section>
                ))}
              </div>

              <section id="frequently-asked-questions" className="mt-14 scroll-mt-28 border-t border-hairline pt-12">
                <div className="eyebrow">FAQ</div>
                <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">Frequently asked questions</h2>
                <dl className="mt-8 space-y-6">
                  {article.faqs.map((faq) => (
                    <div key={faq.question} className="rounded-xl border border-hairline bg-surface p-6">
                      <dt className="font-medium text-foreground">{faq.question}</dt>
                      <dd className="mt-3 leading-7 text-muted-foreground">{faq.answer}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section className="mt-14 border-t border-hairline pt-12">
                <div className="eyebrow">Conclusion</div>
                <p className="mt-4 text-lg leading-8 text-foreground/90">{article.conclusion}</p>
              </section>
            </div>
          </div>

          <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
            <div className="grid gap-6 rounded-2xl border border-hairline bg-surface p-8 md:grid-cols-[1fr_auto] md:items-end sm:p-10">
              <div>
                <div className="eyebrow">Put the guide into practice</div>
                <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">Ready to improve a real workflow?</h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">Talk with our team about a focused, measurable project for your website, app, AI workflow or growth system.</p>
              </div>
              <Link to="/contact" className="btn-primary"><Calendar className="h-4 w-4" />Book a consultation</Link>
            </div>
          </section>

          <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
            <div className="eyebrow">Related services</div>
            <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">Continue exploring</h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to="/services/$slug" params={{ slug: service.slug }} className="group flex h-full items-center justify-between rounded-xl border border-hairline bg-background p-5 transition-colors hover:border-brand/40">
                    <span className="font-medium">{service.name}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-brand" />
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/team" className="group flex h-full items-center justify-between rounded-xl border border-hairline bg-background p-5 transition-colors hover:border-brand/40">
                  <span className="font-medium">Meet the team</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-brand" />
                </Link>
              </li>
            </ul>
          </section>
        </article>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
