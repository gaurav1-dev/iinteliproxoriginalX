import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/hero";
import { Services, Process, Metrics, About, Testimonials } from "@/components/sections/content-sections";
import { Portfolio } from "@/components/sections/portfolio";
import { Contact } from "@/components/sections/contact";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter, FloatingWhatsApp } from "@/components/site-footer";
import { LoadingSplash } from "@/components/loading-splash";
import { Toaster } from "sonner";
import { absoluteUrl } from "@/lib/site";

const HOME_TITLE =
  "AI Automation, Web Development & Digital Marketing Agency | iinteliprox";
const HOME_DESC =
  "iinteliprox helps businesses grow with AI automation, custom website development, mobile app development, digital marketing, SEO and business software. Based in Lucknow, serving clients across India and worldwide.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESC },
      {
        name: "keywords",
        content:
          "AI Automation Agency, Web Development Company, Website Development Services, Custom Website Development, Mobile App Development Company, Digital Marketing Agency, SEO Services, Social Media Marketing Agency, Custom Software Development, Business Automation Services, AI Solutions Company, UI UX Design Agency, Web Development Company in Lucknow, Digital Marketing Agency in Lucknow, AI Company Lucknow",
      },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl() },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: HOME_TITLE },
      { name: "twitter:description", content: HOME_DESC },
    ],
    links: [{ rel: "canonical", href: absoluteUrl() }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen">
      <LoadingSplash />
      <SiteNav />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Process />
        <Metrics />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
      <Toaster theme="light" position="top-center" />
    </div>
  );
}
