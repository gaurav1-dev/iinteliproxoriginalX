import { Link } from "@tanstack/react-router";
import { PROJECTS } from "@/lib/portfolio";
import { ArrowUpRight } from "lucide-react";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 sm:py-32 hairline-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-12 items-end">
          <div className="md:col-span-8">
            <div className="eyebrow">Portfolio</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight max-w-3xl">
              Selected work
            </h2>
          </div>
          <p className="md:col-span-4 text-muted-foreground leading-relaxed">
            Websites, AI systems, automations and digital experiences designed
            and developed by iinteliprox. Click any project to explore the case
            study.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <li key={p.slug}>
              <Link
                to="/portfolio/$slug"
                params={{ slug: p.slug }}
                className="group block card-surface overflow-hidden hover:border-brand/40 transition-colors"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-2 border-b border-hairline">
                  <img
                    src={p.image}
                    alt={`Homepage screenshot of ${p.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.28em] uppercase text-foreground/80 bg-background/85 backdrop-blur-sm rounded-full px-2.5 py-1 border border-hairline">
                    {p.year} · {p.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl">{p.title}</h3>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-brand transition-colors shrink-0 mt-1" />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {p.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] tracking-wider uppercase font-mono text-muted-foreground border border-hairline rounded-full px-2 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
