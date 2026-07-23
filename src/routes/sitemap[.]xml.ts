import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { PROJECTS } from "@/lib/portfolio";
import { SERVICES_DATA } from "@/lib/services-data";
import { absoluteUrl } from "@/lib/site";

type SitemapEntry = {
  path: string;
  changefreq: "weekly" | "monthly" | "yearly";
  priority: string;
};

// Vite maintains this list as routes are added or removed. Dynamic detail routes
// are expanded from their server-rendered data sources below.
const ROUTE_FILES = Object.keys(import.meta.glob("./**/*.tsx"));
const LAST_MODIFIED = new Date().toISOString().slice(0, 10);

function pathFromRouteFile(file: string): string | null {
  const route = file.replace(/^\.\//, "").replace(/\.tsx$/, "");
  if (route === "index") return "/";
  if (route === "__root" || route === "sitemap[.]xml") return null;

  const segments = route.split(/[/.]/).filter(Boolean);
  if (segments.some((segment) => segment.startsWith("$") || segment.startsWith("_"))) return null;

  const pathSegments = segments.filter((segment) => segment !== "index");
  return pathSegments.length ? `/${pathSegments.join("/")}` : "/";
}

function metadataFor(path: string): Omit<SitemapEntry, "path"> {
  if (path === "/") return { changefreq: "weekly", priority: "1.0" };
  if (path === "/services" || path === "/portfolio") return { changefreq: "monthly", priority: "0.9" };
  if (path.startsWith("/services/")) return { changefreq: "monthly", priority: "0.8" };
  if (["/about", "/team", "/contact"].includes(path)) return { changefreq: "monthly", priority: "0.7" };
  if (path.startsWith("/portfolio/")) return { changefreq: "monthly", priority: "0.6" };
  if (["/privacy", "/terms"].includes(path)) return { changefreq: "yearly", priority: "0.4" };
  return { changefreq: "monthly", priority: "0.7" };
}

function xmlEscape(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({
    "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;",
  })[character] ?? character);
}

function buildEntries(): SitemapEntry[] {
  const staticPaths = ROUTE_FILES.map(pathFromRouteFile).filter((path): path is string => Boolean(path));
  const dynamicPaths = [
    ...SERVICES_DATA.map((service) => `/services/${service.slug}`),
    ...PROJECTS.map((project) => `/portfolio/${project.slug}`),
  ];

  return [...new Set([...staticPaths, ...dynamicPaths])]
    .filter((path) => path !== "/sitemap.xml")
    .sort()
    .map((path) => ({ path, ...metadataFor(path) }));
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const urls = buildEntries().map((entry) => `  <url>
    <loc>${xmlEscape(absoluteUrl(entry.path))}</loc>
    <lastmod>${LAST_MODIFIED}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`);

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
          },
        });
      },
    },
  },
});
