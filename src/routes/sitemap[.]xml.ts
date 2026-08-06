import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { PROJECTS } from "@/lib/portfolio";
import { SERVICES_DATA } from "@/lib/services-data";
import { BLOGS } from "@/lib/blogs";
import { absoluteUrl } from "@/lib/site";

type SitemapEntry = {
  path: string;
  lastModified: string;
  changefreq: "weekly" | "monthly" | "yearly";
  priority: string;
};

// Vite maintains this list as routes are added or removed. Dynamic detail routes
// are expanded from their server-rendered data sources below.
const ROUTE_FILES = Object.keys(import.meta.glob("./**/*.tsx"));
// Content release dates are intentionally stable: sitemap lastmod must reflect
// real content changes rather than changing on every request or deployment.
const STATIC_LAST_MODIFIED = "2026-07-22";
const SERVICE_LAST_MODIFIED = "2026-08-06";
const PORTFOLIO_LAST_MODIFIED = "2026-07-22";

function pathFromRouteFile(file: string): string | null {
  const route = file.replace(/^\.\//, "").replace(/\.tsx$/, "");
  if (route === "index") return "/";
  if (route === "__root" || route === "sitemap[.]xml") return null;

  const segments = route.split(/[/.]/).filter(Boolean);
  if (segments.some((segment) => segment.startsWith("$") || segment.startsWith("_"))) return null;

  const pathSegments = segments.filter((segment) => segment !== "index");
  return pathSegments.length ? `/${pathSegments.join("/")}` : "/";
}

function metadataFor(path: string): Omit<SitemapEntry, "path" | "lastModified"> {
  if (path === "/") return { changefreq: "weekly", priority: "1.0" };
  if (path === "/services" || path === "/portfolio") return { changefreq: "monthly", priority: "0.9" };
  if (path.startsWith("/services/")) return { changefreq: "monthly", priority: "0.8" };
  if (["/about", "/team", "/contact"].includes(path)) return { changefreq: "monthly", priority: "0.7" };
  if (path.startsWith("/portfolio/")) return { changefreq: "monthly", priority: "0.6" };
  if (path === "/blog") return { changefreq: "weekly", priority: "0.8" };
  if (path.startsWith("/blog/")) return { changefreq: "monthly", priority: "0.7" };
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
  const paths = new Map<string, string>(staticPaths.map((path) => [path, STATIC_LAST_MODIFIED]));

  for (const service of SERVICES_DATA) paths.set(`/services/${service.slug}`, SERVICE_LAST_MODIFIED);
  for (const project of PROJECTS) paths.set(`/portfolio/${project.slug}`, PORTFOLIO_LAST_MODIFIED);
  for (const article of BLOGS) paths.set(`/blog/${article.slug}`, article.updatedAt);

  return [...paths]
    .map(([path, lastModified]) => ({ path, lastModified }))
    .filter(({ path }) => path !== "/sitemap.xml")
    .sort((a, b) => a.path.localeCompare(b.path))
    .map(({ path, lastModified }) => ({ path, lastModified, ...metadataFor(path) }));
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const urls = buildEntries().map((entry) => `  <url>
    <loc>${xmlEscape(absoluteUrl(entry.path))}</loc>
    <lastmod>${entry.lastModified}</lastmod>
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
