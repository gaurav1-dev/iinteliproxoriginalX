import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SubServiceDetailPage } from "@/components/services/sub-service-detail-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { serviceBySlug, subServiceBySlug } from "@/lib/services-data";
import { createSeoHead } from "@/lib/seo";
import { SITE, absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/services/$slug/$subSlug")({
  loader: ({ params }) => {
    const service = serviceBySlug(params.slug);
    const subService = subServiceBySlug(params.slug, params.subSlug);
    if (!service || !subService) throw notFound();
    return { service, subService };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Service not found | iinteliproX AI" }, { name: "robots", content: "noindex, nofollow" }] };
    const { service, subService } = loaderData;
    const path = `/services/${service.slug}/${subService.slug}`;
    const url = absoluteUrl(path);
    return createSeoHead({
      title: subService.seoTitle,
      description: subService.seoDescription,
      path,
      keywords: subService.keywords,
      imageAlt: `${subService.name} services from iinteliproX AI`,
      schema: {
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "WebPage", "@id": `${url}#webpage`, url, name: subService.seoTitle, description: subService.seoDescription, inLanguage: "en-IN", isPartOf: { "@id": `${SITE.url}/#website` } },
          { "@type": "Service", "@id": `${url}#service`, name: subService.name, serviceType: subService.name, category: service.name, description: subService.overview, url, provider: { "@id": `${SITE.url}/#organization` }, areaServed: ["India", "Worldwide"], audience: { "@type": "Audience", audienceType: subService.who } },
          { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE.url }, { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") }, { "@type": "ListItem", position: 3, name: service.name, item: absoluteUrl(`/services/${service.slug}`) }, { "@type": "ListItem", position: 4, name: subService.name, item: url }] },
          { "@type": "FAQPage", mainEntity: subService.faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) },
        ],
      },
    });
  },
  notFoundComponent: () => <div className="min-h-screen bg-[#050505] text-white"><SiteNav /><main className="mx-auto max-w-3xl px-4 pb-24 pt-40 text-center"><h1 className="font-display text-5xl">Service page not found</h1><p className="mt-4 text-[#94a3b8]">This specialised service does not exist or has moved.</p><Link to="/services" className="btn-primary mt-8">Explore all services</Link></main><SiteFooter /></div>,
  component: () => <SubServiceDetailPage {...Route.useLoaderData()} />,
});
