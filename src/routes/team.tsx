import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Mail, MessageCircle } from "lucide-react";
import { SiteFooter, FloatingWhatsApp } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SITE, absoluteUrl, whatsappLink } from "@/lib/site";
import { Toaster } from "sonner";

const VISHAL_PHOTO = "/vishal-srivastava.jpg";
const GAURAV_PHOTO = "/gaurav-tiwari.jpg";

const VISHAL_EXPERTISE = [
  {
    title: "Data Analytics",
    desc: "Turning raw operational data into decisions that move business metrics.",
  },
  {
    title: "Business Intelligence",
    desc: "Executive dashboards, KPI systems and reporting infrastructures.",
  },
  {
    title: "Dashboard Development",
    desc: "Interactive dashboards in Power BI, Metabase and custom-built stacks.",
  },
  {
    title: "Data Visualization",
    desc: "Clear, honest charts that tell the story hidden inside the data.",
  },
  { title: "SQL & Modeling", desc: "Data warehousing, transformations and analytical modeling." },
  {
    title: "Market Analysis",
    desc: "Competitive intelligence and market sizing for strategic decisions.",
  },
];

const GAURAV_EXPERTISE = [
  {
    title: "Full-Stack Web Development",
    desc: "React, Next.js, Node.js, TypeScript and modern web architectures.",
  },
  {
    title: "AI Automation",
    desc: "OpenAI, LangChain, RAG systems and production-grade AI agents.",
  },
  {
    title: "Modern UI/UX Design",
    desc: "Product interfaces, design systems and motion-rich experiences.",
  },
  {
    title: "API Integration",
    desc: "Payment gateways, CRMs, WhatsApp Business API and third-party platforms.",
  },
  {
    title: "Business Automation",
    desc: "Workflow automation across sales, marketing and operations.",
  },
  {
    title: "Digital Transformation",
    desc: "End-to-end technology strategy and roadmapping for scaling businesses.",
  },
];

const GAURAV_SKILL_GROUPS = [
  {
    label: "AI & Automation",
    skills: [
      "AI Workflow Automation",
      "AI Agent Development",
      "n8n Automation",
      "WhatsApp Business Automation",
      "CRM Automation",
      "Business Process Automation",
      "Prompt Engineering",
      "OpenAI API Integration",
      "Conversational AI",
    ],
  },
  {
    label: "Web Development",
    skills: [
      "Full-Stack Development",
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Node.js",
      "Express.js",
      "REST API Development",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    label: "Databases & Backend",
    skills: ["Supabase", "Firebase", "SQL", "Database Design"],
  },
  {
    label: "Cloud & Deployment",
    skills: [
      "Git",
      "GitHub",
      "Netlify",
      "Vercel",
      "Cloudflare",
      "CI/CD",
      "Domain & DNS Management",
    ],
  },
  {
    label: "UI/UX",
    skills: [
      "Responsive Web Design",
      "Modern UI/UX Design",
      "Framer Motion",
      "GSAP Animations",
      "Glassmorphism UI",
      "SaaS Dashboard Design",
    ],
  },
  {
    label: "Performance & SEO",
    skills: [
      "Technical SEO",
      "Website Performance Optimization",
      "Core Web Vitals",
      "Accessibility (WCAG)",
      "Analytics & Conversion Optimization",
    ],
  },
  {
    label: "Leadership & Business",
    skills: [
      "Technical Leadership",
      "Product Strategy",
      "Startup Operations",
      "Business Development",
      "Technical Consulting",
      "Project Management",
      "Client Communication",
      "Solution Architecture",
      "Presentation",
    ],
  },
] as const;

const GAURAV_STATS = [
  { v: "80+", l: "Projects Completed" },
  { v: "25+", l: "Technologies" },
  { v: "60+", l: "Happy Clients" },
  { v: "24/7", l: "Support" },
  { v: "6+", l: "Years Building" },
];

const GAURAV_JOURNEY = [
  { t: "Started Learning", d: "Fell in love with the web â€” HTML, CSS, JavaScript, then React." },
  {
    t: "Freelancing",
    d: "Delivered dozens of client websites and apps while sharpening the craft.",
  },
  {
    t: "Agency Launch",
    d: "Founded iinteliprox to bring engineering, design and marketing under one roof.",
  },
  { t: "Business Automation", d: "Doubled down on AI-first workflows for real business outcomes." },
  {
    t: "Scaling iinteliprox",
    d: "Serving clients across India and worldwide with a modern, senior team.",
  },
];

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team | iinteliprox" },
      {
        name: "description",
        content:
          "Meet Vishal Srivastava, Founder & CEO, and Gaurav Tiwari, Co-Founder, of iinteliprox.",
      },
      { property: "og:title", content: "Team | iinteliprox" },
      { property: "og:description", content: "Meet the leadership team behind iinteliprox." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/team") },
      { property: "og:image", content: absoluteUrl(VISHAL_PHOTO) },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: absoluteUrl(VISHAL_PHOTO) },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/team") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "iinteliprox Team",
          itemListElement: [
            {
              "@type": "Person",
              position: 1,
              name: "Vishal Srivastava",
              jobTitle: "Founder & CEO",
              email: "vsrivastava315@gmail.com",
              image: absoluteUrl(VISHAL_PHOTO),
              alumniOf: [
                "University of Petroleum and Energy Studies (UPES)",
                "Woolf University, Malta",
              ],
              worksFor: { "@type": "Organization", name: "iinteliprox" },
            },
            {
              "@type": "Person",
              position: 2,
              name: "Gaurav Tiwari",
              jobTitle: "Co-Founder",
              email: "gauravdev11@outlook.com",
              image: absoluteUrl(GAURAV_PHOTO),
              worksFor: { "@type": "Organization", name: "iinteliprox" },
            },
          ],
        }),
      },
    ],
  }),
  component: TeamPage,
});

function Expertise({ items }: { items: typeof VISHAL_EXPERTISE }) {
  return (
    <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.title} className="card-surface p-6">
          <h3 className="font-display text-xl">{item.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
        </li>
      ))}
    </ul>
  );
}

function GauravSkillGroups() {
  return (
    <section
      className="mt-20 border-t border-hairline pt-16"
      aria-labelledby="gaurav-skills-heading"
    >
      <div className="eyebrow">Technical toolkit</div>
      <h3 id="gaurav-skills-heading" className="mt-4 font-display text-3xl sm:text-5xl">
        Skills &amp; capabilities
      </h3>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {GAURAV_SKILL_GROUPS.map((group) => (
          <section key={group.label} className="card-surface p-6">
            <h4 className="font-display text-xl">{group.label}</h4>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${group.label} skills`}>
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1.5 text-xs font-mono tracking-wide text-foreground/85 transition-colors hover:border-brand/50 hover:bg-brand/10"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}

function TeamPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="animate-fade-in pt-20">
        <section className="bg-surface py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">Our team</div>
            <h1 className="mt-4 font-display text-4xl sm:text-6xl tracking-tight">Leadership</h1>
          </div>
        </section>

        <article className="border-t border-hairline py-20 sm:py-24" aria-labelledby="vishal-name">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="order-2 lg:col-span-6 lg:order-1">
                <div className="eyebrow">Founder &amp; CEO</div>
                <h2
                  id="vishal-name"
                  className="mt-6 font-display text-4xl sm:text-6xl tracking-tight"
                >
                  Vishal <span className="text-brand italic">Srivastava.</span>
                </h2>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Data Analytics",
                    "Business Intelligence",
                    "Power BI",
                    "SQL",
                    "Dashboards",
                    "Market Analysis",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-hairline bg-background px-3 py-1 text-xs font-mono tracking-wide text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  I lead data analytics at iinteliprox â€” designing dashboards, reporting systems
                  and business intelligence infrastructures that turn scattered operational data
                  into confident decisions. From SQL warehouses to Power BI, my job is making the
                  numbers make sense.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a href={`mailto:${SITE.email.business}`} className="btn-primary">
                    <Mail className="h-4 w-4" />
                    vsrivastava315@gmail.com
                  </a>
                  <a
                    href={whatsappLink(
                      "Hi iinteliprox, I'd like to discuss data analytics and BI.",
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
              <div className="order-1 lg:col-span-6 lg:order-2">
                <div className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-3xl border border-hairline bg-surface-2 shadow-[0_20px_60px_-20px_oklch(0.18_0.015_275/25%)]">
                  <img
                    src={VISHAL_PHOTO}
                    alt="Vishal Srivastava, Founder & CEO of iinteliprox"
                    className="h-full w-full object-cover"
                    width={800}
                    height={1000}
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
            <section className="mt-20 border-t border-hairline pt-16">
              <div className="eyebrow">Expertise</div>
              <h3 className="mt-4 font-display text-3xl sm:text-5xl">Areas of focus</h3>
              <Expertise items={VISHAL_EXPERTISE} />
            </section>
            <section className="mt-20 border-t border-hairline pt-16">
              <div className="eyebrow">Education</div>
              <h3 className="mt-4 font-display text-3xl sm:text-5xl">Academic background</h3>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="card-surface p-7">
                  <h4 className="font-display text-2xl">B.Tech in Computer Science Engineering</h4>
                  <p className="mt-3 text-muted-foreground">
                    University of Petroleum and Energy Studies (UPES)
                    <br />
                    Dehradun, India
                  </p>
                </div>
                <div className="card-surface p-7">
                  <h4 className="font-display text-2xl">
                    M.S. in Data Science and Machine Learning
                  </h4>
                  <p className="mt-3 text-muted-foreground">Woolf University, Malta</p>
                </div>
              </div>
            </section>
          </div>
        </article>

        <article
          className="border-t border-hairline bg-surface py-20 sm:py-24"
          aria-labelledby="gaurav-name"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-6">
                <div className="eyebrow">Co-Founder &amp; CTO</div>
                <h2
                  id="gaurav-name"
                  className="mt-6 font-display text-4xl sm:text-6xl tracking-tight"
                >
                  Gaurav <span className="text-brand italic">Tiwari.</span>
                </h2>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Full-Stack Developer",
                    "AI Automation Expert",
                    "UI/UX Designer",
                    "React & Next.js",
                    "Digital Transformation",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-hairline bg-background px-3 py-1 text-xs font-mono tracking-wide text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  I build custom websites, mobile apps and AI automations for businesses that want
                  to grow. As co-founder of iinteliprox I lead engineering, design and strategy â€”
                  pairing modern React and Node.js with production-grade AI to ship systems that
                  compound.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a href={`mailto:${SITE.email.team}`} className="btn-primary">
                    <Mail className="h-4 w-4" />
                    gauravdev11@outlook.com
                  </a>
                  <a href={SITE.calendly} target="_blank" rel="noreferrer" className="btn-ghost">
                    <Calendar className="h-4 w-4" />
                    Book a Meeting
                  </a>
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-3xl border border-hairline bg-surface-2 shadow-[0_20px_60px_-20px_oklch(0.18_0.015_275/25%)]">
                  <img
                    src={GAURAV_PHOTO}
                    alt="Gaurav Tiwari, Co-Founder & CTO of iinteliprox"
                    className="h-full w-full object-cover"
                    width={800}
                    height={1000}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <section className="mt-20 border-t border-hairline pt-16">
              <div className="eyebrow">Expertise</div>
              <h3 className="mt-4 font-display text-3xl sm:text-5xl">
                What I lead across iinteliprox
              </h3>
              <Expertise items={GAURAV_EXPERTISE} />
            </section>
            <GauravSkillGroups />
            <section className="mt-20 border-t border-hairline pt-16">
              <div className="eyebrow">By the numbers</div>
              <h3 className="mt-4 font-display text-3xl sm:text-5xl">
                A track record you can measure
              </h3>
              <dl className="mt-10 grid overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-5">
                {GAURAV_STATS.map((item) => (
                  <div key={item.l} className="bg-background p-6">
                    <dd className="font-display text-4xl text-brand">{item.v}</dd>
                    <dt className="mt-3 text-xs font-mono uppercase tracking-wide text-muted-foreground">
                      {item.l}
                    </dt>
                  </div>
                ))}
              </dl>
            </section>
            <section className="mt-20 border-t border-hairline pt-16">
              <div className="eyebrow">Journey</div>
              <h3 className="mt-4 font-display text-3xl sm:text-5xl">
                From first line of code to agency
              </h3>
              <ol className="mt-10 space-y-7 border-l border-hairline pl-8">
                {GAURAV_JOURNEY.map((item, index) => (
                  <li key={item.t} className="relative">
                    <span className="absolute -left-[45px] top-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[10px] text-brand-foreground">
                      {index + 1}
                    </span>
                    <h4 className="font-display text-2xl">{item.t}</h4>
                    <p className="mt-2 text-muted-foreground">{item.d}</p>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </article>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
      <Toaster theme="light" position="top-center" />
    </div>
  );
}
