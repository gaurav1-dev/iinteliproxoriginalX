import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PROJECTS, projectBySlug } from "@/lib/portfolio";
import { SITE, whatsappLink } from "@/lib/site";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter, FloatingWhatsApp } from "@/components/site-footer";
import { ArrowLeft, ArrowUpRight, ExternalLink, MessageCircle } from "lucide-react";
import { Toaster } from "sonner";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = projectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project — iinteliprox" }] };
    return {
      meta: [
        { title: `${p.title} — Case Study | iinteliprox` },
        { name: "description", content: p.summary },
        { property: "og:title", content: `${p.title} — iinteliprox Case Study` },
        { property: "og:description", content: p.summary },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: NotFound,
  errorComponent: ErrorView,
  component: ProjectPage,
});

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-display text-5xl">Project not found</h1>
          <p className="text-muted-foreground mt-3">
            The case study you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link to="/" className="btn-primary mt-8 inline-flex">
            <ArrowLeft className="h-4 w-4" /> Back home
          </Link>
        </div>
      </main>
    </div>
  );
}

function ErrorView({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-display text-3xl">Something went wrong</h1>
        <button className="btn-primary mt-6" onClick={reset}>Try again</button>
      </div>
    </div>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: (typeof PROJECTS)[number] };
  const currentIdx = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(currentIdx + 1) % PROJECTS.length];

  const waMessage = `Hi iinteliprox, I'd like to discuss a project similar to ${project.title}. Could we set up a quick call?`;

  return (
    <div className="min-h-screen">
      <SiteNav />
      <main>
        <article className="pt-32 pb-24">
          <div className="mx-auto max-w-5xl px-6">
            <Link
              to="/"
              hash="portfolio"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> All work
            </Link>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="text-[10px] tracking-wider uppercase font-mono text-muted-foreground border border-hairline rounded-full px-2.5 py-1"
                >
                  {t}
                </span>
              ))}
            </div>

            <h1 className="font-display text-5xl sm:text-7xl mt-6 tracking-tight">
              {project.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
              {project.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink(waMessage)}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                <ExternalLink className="h-4 w-4" />
                Visit Live Website
              </a>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 mt-16">
            <div className="card-surface overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} homepage screenshot`}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="mx-auto max-w-5xl px-6 mt-20 grid gap-12 md:grid-cols-3">
            <aside className="md:col-span-1 space-y-8 md:sticky md:top-24 self-start">
              <Meta label="Year" value={project.year} />
              <Meta label="Category" value={project.category} />
              <div>
                <div className="eyebrow mb-3">Technology Stack</div>
                <ul className="flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <li
                      key={s}
                      className="text-xs font-mono border border-hairline rounded-full px-2.5 py-1 text-muted-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <Meta label="Live URL" value={
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="hover:text-brand break-all">
                  {project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </a>
              } />
            </aside>

            <div className="md:col-span-2 space-y-12">
              <section>
                <div className="eyebrow">Overview</div>
                <p className="mt-4 text-foreground/90 leading-relaxed">
                  {project.description}
                </p>
              </section>

              <Block title="Challenges" items={project.challenges} />
              <Block title="Our Solutions" items={project.solutions} />
              {project.outcomes.length > 0 && (
                <Block title="Outcomes" items={project.outcomes} highlight />
              )}

              {project.screenshots.length > 1 && (
                <section>
                  <div className="eyebrow">Gallery</div>
                  <div className="mt-4 grid gap-4">
                    {project.screenshots.map((s, i) => (
                      <img key={i} src={s} alt={`${project.title} screenshot ${i + 1}`} className="rounded-xl border border-hairline" />
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>

          <div className="mx-auto max-w-5xl px-6 mt-24">
            <div className="card-surface p-10 text-center">
              <div className="eyebrow">Start a project</div>
              <h2 className="font-display text-3xl sm:text-4xl mt-3">
                Want an experience like this?
              </h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                Reach out on WhatsApp and we&apos;ll scope your idea into a working
                system within one business day.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href={whatsappLink(waMessage)} target="_blank" rel="noreferrer" className="btn-primary">
                  <MessageCircle className="h-4 w-4" />
                  Message {SITE.whatsapp.display}
                </a>
                <Link to="/" hash="contact" className="btn-ghost">
                  Fill out the form
                </Link>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-5xl px-6 mt-16">
            <Link
              to="/portfolio/$slug"
              params={{ slug: next.slug }}
              className="group flex items-center justify-between card-surface p-6 hover:border-brand/40 transition-colors"
            >
              <div>
                <div className="eyebrow">Next case study</div>
                <div className="font-display text-2xl mt-1">{next.title}</div>
              </div>
              <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-brand transition-colors" />
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
      <Toaster theme="dark" position="top-center" />
    </div>
  );
}

function Meta({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div className="eyebrow mb-2">{label}</div>
      <div className="text-sm">{value}</div>
    </div>
  );
}

function Block({ title, items, highlight = false }: { title: string; items: readonly string[]; highlight?: boolean }) {
  return (
    <section>
      <div className="eyebrow">{title}</div>
      <ul className="mt-4 space-y-3">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3">
            <span className={`mt-2 h-1.5 w-1.5 rounded-full shrink-0 ${highlight ? "bg-brand" : "bg-muted-foreground"}`} />
            <span className="text-foreground/90 leading-relaxed">{it}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
