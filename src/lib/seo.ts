import { SITE, absoluteUrl } from "@/lib/site";

export type SeoOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  imageAlt?: string;
  robots?: string;
  keywords?: readonly string[];
  alternates?: readonly { hrefLang: string; href: string }[];
  schema?: object | readonly object[];
  extraMeta?: readonly Record<string, string>[];
};

/** Centralized, absolute and SSR-safe metadata for every public page. */
export function createSeoHead({
  title,
  description,
  path,
  type = "website",
  image = SITE.ogImage,
  imageAlt = `${title} — iinteliProX AI`,
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  keywords,
  alternates = [{ hrefLang: "en-IN", href: path }, { hrefLang: "x-default", href: path }],
  schema,
  extraMeta = [],
}: SeoOptions) {
  const url = absoluteUrl(path);
  const socialImage = absoluteUrl(image);
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: robots },
      ...(keywords?.length ? [{ name: "keywords", content: keywords.join(", ") }] : []),
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:site_name", content: SITE.name },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: socialImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: imageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: SITE.twitterHandle },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: socialImage },
      { name: "twitter:image:alt", content: imageAlt },
      ...extraMeta,
    ],
    links: [
      { rel: "canonical", href: url },
      ...alternates.map((alternate) => ({
        rel: "alternate",
        hrefLang: alternate.hrefLang,
        href: absoluteUrl(alternate.href),
      })),
    ],
    scripts: schemas.map((item) => ({
      type: "application/ld+json",
      children: JSON.stringify(item),
    })),
  };
}

export function breadcrumbSchema(items: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
