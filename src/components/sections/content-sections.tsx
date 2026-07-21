import { SERVICES_DATA } from "@/lib/services-data";
import { PROCESS, METRICS, TESTIMONIALS } from "@/lib/services";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 hairline-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-12 items-end">
          <div className="md:col-span-8">
            <div className="eyebrow">Our Capabilities</div>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight max-w-3xl">
              The intelligent service ecosystem
            </h2>
          </div>
          <p className="md:col-span-4 text-muted-foreground leading-relaxed">
            Nine deeply-integrated practice areas — from AI automation and
            custom software to digital marketing — orchestrated as one growth
            system. Click any service to explore.
          </p>
        </div>

        <ul className="mt-14 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden border border-hairline">
          {SERVICES_DATA.map((s, i) => (
            <li key={s.slug}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group relative block bg-background p-8 transition-colors hover:bg-surface h-full"
              >
                <div className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-2xl mt-4">{s.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {s.short}
                </p>
                <ArrowUpRight className="absolute right-6 top-6 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link to="/services" className="btn-ghost">
            View all services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="py-24 sm:py-32 hairline-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="eyebrow">How We Execute</div>
        <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight max-w-3xl">
          Our automated delivery pipeline
        </h2>

        <ol className="mt-14 grid gap-8 md:grid-cols-2">
          {PROCESS.map((p) => (
            <li key={p.phase} className="card-surface p-8">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs tracking-[0.28em] text-brand">
                  PHASE {p.phase}
                </span>
                <span className="h-px flex-1 mx-4 bg-hairline" />
              </div>
              <h3 className="font-display text-2xl mt-4">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Metrics() {
  return (
    <section id="results" className="py-24 sm:py-32 hairline-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="eyebrow">Our Metrics</div>
        <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight max-w-3xl">
          Engineered for massive value
        </h2>
        <dl className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-4 bg-hairline border border-hairline rounded-2xl overflow-hidden">
          {METRICS.map((m) => (
            <div key={m.label} className="bg-background p-10">
              <dd className="font-display text-5xl md:text-6xl text-brand">
                {m.value}
              </dd>
              <dt className="eyebrow mt-4">{m.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 hairline-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="eyebrow">Who We Are</div>
          <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight">
            Fusing cognitive code with exponential growth
          </h2>
        </div>
        <div className="md:col-span-7 space-y-6 text-muted-foreground leading-relaxed">
          <p>
            iinteliprox was born out of a critical market imbalance: software
            houses build complex architectures that marketers cannot navigate,
            while marketing agencies launch campaigns backed by fragile manual
            workflows.
          </p>
          <p>
            We bridge this divide. By welding Artificial Intelligence,
            Operational Automation and Growth Engineering into a single cohesive
            framework, we build self-sustaining business growth systems.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 pt-6">
            {[
              { t: "Operational Autonomy", d: "We replace manual, error-prone workflows with automated systems that operate instantly." },
              { t: "Compound Scalability", d: "System architectures that yield higher output without linear head-count expansion." },
            ].map((b) => (
              <div key={b.t} className="card-surface p-6">
                <h3 className="font-medium text-foreground">{b.t}</h3>
                <p className="text-sm text-muted-foreground mt-2">{b.d}</p>
              </div>
            ))}
          </div>
          <div className="pt-4">
            <Link to="/about" className="btn-ghost">
              Read our full story
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32 hairline-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="eyebrow">Client Reviews</div>
        <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight max-w-3xl">
          Validated trust in action
        </h2>
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <li key={t.name} className="card-surface p-8">
              <p className="text-foreground/90 leading-relaxed">
                <span className="font-display text-3xl text-brand leading-none">"</span>
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-2 font-mono text-xs">
                  {t.initials}
                </span>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
