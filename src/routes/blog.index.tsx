import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { SiteFooter, FloatingWhatsApp } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { BLOGS } from "@/lib/blogs";
import { absoluteUrl, SITE } from "@/lib/site";

const TITLE = "AI Automation & Business Growth Blog | Insights & Guides | iinteliprox";
const DESCRIPTION =
  "Practical insights on AI automation, AI agents, n8n workflows, business automation, professional website development, mobile apps, lead generation and digital transformation from iinteliprox.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      {
        name: "keywords",
        content:
          "AI Automation Blog, n8n Tutorials, AI Agents Guide, Business Automation Tips, Web Development Blog, Digital Marketing Insights, SEO Guide India, Workflow Automation, Lead Generation Strategies, AI Consulting Blog",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/blog") },
      { property: "og:image", content: absoluteUrl(SITE.ogImage) },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:alt", content: "iinteliprox Insights — AI Automation & Business Growth Blog" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: SITE.twitterHandle },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: absoluteUrl(SITE.ogImage) },
      { name: "twitter:image:alt", content: "iinteliprox Insights — AI Automation & Business Growth Blog" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/blog") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": `${SITE.url}/blog#webpage`,
              url: absoluteUrl("/blog"),
              name: TITLE,
              description: DESCRIPTION,
              inLanguage: "en-IN",
              isPartOf: { "@id": `${SITE.url}/#website` },
              breadcrumb: { "@id": `${SITE.url}/blog#breadcrumb` },
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${SITE.url}/blog#breadcrumb`,
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
                { "@type": "ListItem", position: 2, name: "Insights", item: absoluteUrl("/blog") },
              ],
            },
            {
              "@type": "ItemList",
              name: "iinteliprox Insights",
              description: DESCRIPTION,
              url: absoluteUrl("/blog"),
              itemListElement: BLOGS.map((article, position) => ({
                "@type": "ListItem",
                position: position + 1,
                url: absoluteUrl(`/blog/${article.slug}`),
                name: article.title,
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="animate-fade-in pb-24 pt-32 sm:pb-32 sm:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="eyebrow">Insights &amp; Guides</div>
          <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
            Practical thinking for <span className="text-brand italic">durable growth.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Clear, useful guides on AI automation, professional websites, mobile
            applications and digital transformation for ambitious teams in Lucknow,
            across India and worldwide.
          </p>

          <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BLOGS.map((article) => (
              <li key={article.slug}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-background transition-colors hover:border-brand/40">
                  <div className="aspect-[16/9] overflow-hidden bg-[radial-gradient(circle_at_75%_20%,rgba(20,186,63,.32),transparent_34%),linear-gradient(135deg,#0b160e,#07100a)]">
                    {article.featuredImage ? (
                      <img
                        src={article.featuredImage.src}
                        srcSet={article.featuredImage.srcSet}
                        sizes="(min-width: 1024px) 32vw, (min-width: 768px) 50vw, 100vw"
                        alt={article.featuredImage.alt}
                        width={960}
                        height={540}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div role="img" aria-label={`Featured illustration placeholder for ${article.title}`} className="flex h-full items-end p-6">
                        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/70">{article.category}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <time dateTime={article.publishedAt}>
                        {new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${article.publishedAt}T00:00:00Z`))}
                      </time>
                      <span aria-hidden="true">·</span>
                      <span className="inline-flex items-center gap-1"><Clock3 className="h-3 w-3" />{article.readTime}</span>
                    </div>
                    <h2 className="mt-4 font-display text-2xl leading-tight">{article.title}</h2>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{article.description}</p>
                    <Link to="/blog/$slug" params={{ slug: article.slug }} className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                      Read guide <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
