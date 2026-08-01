import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/hero";
import { Services, Process, Metrics, About, Testimonials, InsightsPreview } from "@/components/sections/content-sections";
import { Portfolio } from "@/components/sections/portfolio";
import { Contact } from "@/components/sections/contact";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter, FloatingWhatsApp } from "@/components/site-footer";
import { Toaster } from "sonner";
import { absoluteUrl, SITE } from "@/lib/site";

const HOME_TITLE =
  "AI Automation Agency India | n8n Automation, AI Agents & Web Development | iinteliprox";
const HOME_DESC =
  "iinteliprox is India's leading AI automation agency — building AI agents, n8n automation workflows, custom websites, mobile apps and digital marketing systems for businesses worldwide. Based in Lucknow.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESC },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      {
        name: "keywords",
        content:
          "AI Automation Agency India, AI Agents, n8n Automation, Workflow Automation, AI Agency Lucknow, Web Development Company India, Custom Website Development, Mobile App Development Company, Digital Marketing Agency, SEO Services India, Business Automation, Voice AI, OpenAI Integration, Claude AI, Gemini AI, AI Consulting, CRM Development, Lead Generation, Software Development Company, AI Company Lucknow",
      },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl() },
      { property: "og:image", content: absoluteUrl(SITE.ogImage) },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:alt", content: "iinteliprox — AI Automation & Digital Growth Agency" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: SITE.twitterHandle },
      { name: "twitter:creator", content: SITE.twitterHandle },
      { name: "twitter:title", content: HOME_TITLE },
      { name: "twitter:description", content: HOME_DESC },
      { name: "twitter:image", content: absoluteUrl(SITE.ogImage) },
      { name: "twitter:image:alt", content: "iinteliprox — AI Automation & Digital Growth Agency" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl() }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${SITE.url}/#webpage`,
              url: absoluteUrl(),
              name: HOME_TITLE,
              description: HOME_DESC,
              inLanguage: "en-IN",
              isPartOf: { "@id": `${SITE.url}/#website` },
              about: { "@id": `${SITE.url}/#organization` },
              breadcrumb: { "@id": `${SITE.url}/#breadcrumb` },
              datePublished: "2024-01-01",
              dateModified: new Date().toISOString().slice(0, 10),
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${SITE.url}/#breadcrumb`,
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Process />
        <Metrics />
        <Testimonials />
        <InsightsPreview />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
      <Toaster theme="light" position="top-center" />
    </div>
  );
}
