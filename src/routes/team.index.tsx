import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Code2, Sparkles, Layers, Briefcase, ArrowRight } from "lucide-react";
import { SiteFooter, FloatingWhatsApp } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { SectionCTA } from "@/components/section-cta";
import { SITE, absoluteUrl } from "@/lib/site";
import { EXECUTIVE_PROFILES } from "@/lib/team-data";
import { Toaster } from "sonner";

export const Route = createFileRoute("/team/")({
  head: () => ({
    meta: [
      { title: "Meet Our Team — Executive Leadership, Product & Engineering | iinteliproX AI" },
      {
        name: "description",
        content:
          "Meet the executive leadership, product managers, lead engineers, design strategists, and operations directors driving AI automation and digital growth at iinteliproX AI.",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Meet Our Team | iinteliproX AI" },
      { property: "og:description", content: "Meet the minds building world-class AI solutions, custom software, and global enterprise growth strategies." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/team") },
      { property: "og:image", content: absoluteUrl(SITE.ogImage) },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Meet Our Team | iinteliproX AI" },
      { name: "twitter:description", content: "Meet the executive team driving software & AI excellence." },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/team") }],
  }),
  component: TeamPage,
});

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

type TeamCategory = {
  categoryTitle: string;
  categoryIcon: any;
  responsibility: string;
  members: TeamMember[];
};

const TEAM_CATEGORIES: TeamCategory[] = [
  {
    categoryTitle: "Product Management",
    categoryIcon: Briefcase,
    responsibility: "Translating complex enterprise challenges into prioritized product roadmaps, agile sprint execution, and client success benchmarks.",
    members: [
      { name: "Karan Bajwa", role: "VP of Product Strategy", bio: "Architecting product growth roadmaps and enterprise client alignment strategies.", initials: "KB" },
      { name: "Tara Brady", role: "Chief Product Officer", bio: "Steering multi-platform product vision and customer-centric feature delivery.", initials: "TB" },
      { name: "Oliver Parker", role: "Senior Director of Product", bio: "Managing enterprise SaaS product roadmaps and agile delivery velocity.", initials: "OP" },
      { name: "Aparna Ramani", role: "Head of Enterprise SaaS Products", bio: "Leading scalable SaaS architecture scoping and client onboarding frameworks.", initials: "AR" },
      { name: "Matt Renner", role: "Director of Product Operations", bio: "Streamlining product lifecycle workflows, metrics, and deployment pipelines.", initials: "MR" },
      { name: "Carrie Tharp", role: "Product Experience Lead", bio: "Focusing on user retention metrics, product analytics, and customer conversion funnels.", initials: "CT" },
      { name: "Chandu Thota", role: "Principal AI Product Architect", bio: "Designing custom AI agent feature specs and RAG knowledge retrieval integrations.", initials: "CT" },
      { name: "Amin Vahdat", role: "Director of Infrastructure & Cloud Products", bio: "Overseeing cloud application performance, security compliance, and scalability.", initials: "AV" },
    ],
  },
  {
    categoryTitle: "Lead Engineers",
    categoryIcon: Code2,
    responsibility: "Building sub-second cloud web applications, custom LLM pipelines, mobile platforms, and high-concurrency microservices.",
    members: [
      { name: "Rafee Tarafdar", role: "Principal Cloud & AI Engineer", bio: "Specializing in high-throughput cloud infrastructure and LLM vector stores.", initials: "RT" },
      { name: "Dinesh Rao", role: "Senior Full-Stack Architect", bio: "Engineering scalable React, Next.js, and TypeScript frontend micro-frontends.", initials: "DR" },
      { name: "Satish H.C.", role: "Chief Systems Engineer", bio: "Optimizing database concurrency, API latency, and serverless backend architecture.", initials: "SH" },
      { name: "Abhishek Goyal", role: "Lead AI Agent & LLM Developer", bio: "Building autonomous AI agents, prompt guardrails, and RAG search backends.", initials: "AG" },
      { name: "Vikram Meghal", role: "Lead Backend & Database Architect", bio: "Architecting PostgreSQL, Supabase, and real-time WebSocket data pipelines.", initials: "VM" },
      { name: "Rohit P.", role: "Senior DevOps & Infrastructure Lead", bio: "Automating CI/CD pipelines, container orchestration, and server monitoring.", initials: "RP" },
      { name: "Chetan Gupta", role: "Lead Mobile App Engineer", bio: "Building native iOS and Android cross-platform mobile apps with React Native and Flutter.", initials: "CG" },
      { name: "Shreekanth Sampigethaya", role: "Lead Integration & Automation Engineer", bio: "Architecting enterprise n8n workflows, webhook bridges, and CRM integrations.", initials: "SS" },
      { name: "Vijay Sriniva", role: "Senior Security & Frontend Architect", bio: "Enforcing OWASP security standards, accessibility, and high-speed web rendering.", initials: "VS" },
    ],
  },
  {
    categoryTitle: "Design & Creative",
    categoryIcon: Sparkles,
    responsibility: "Crafting high-retention product interfaces, cohesive brand identity systems, and developer-ready Figma component libraries.",
    members: [
      { name: "Kautilya Katariya", role: "Head of Visual Design & Design Systems", bio: "Building enterprise Figma token libraries and modern visual design foundations.", initials: "KK" },
      { name: "Tanmay Bakshi", role: "Principal UI/UX Architect", bio: "Designing intuitive SaaS dashboard layouts and high-converting web flows.", initials: "TB" },
      { name: "Pranjali Awasthi", role: "Lead Product Designer", bio: "Crafting mobile-first UI components, micro-animations, and interactive prototypes.", initials: "PA" },
      { name: "Advait Thakur", role: "Creative Director & Brand Strategist", bio: "Unifying corporate identity, visual positioning, and digital marketing assets.", initials: "AT" },
    ],
  },
  {
    categoryTitle: "Operations & Delivery",
    categoryIcon: Layers,
    responsibility: "Ensuring daily execution, client SLA monitoring, quality assurance verification, and global project delivery.",
    members: [
      { name: "Rohit Sharma", role: "Head of Operations & Delivery Excellence", bio: "Overseeing cross-functional development operations, client SLA commitments, and technical quality standards across all projects.", initials: "RS" },
    ],
  },
];

function TeamPage() {
  const founders = [EXECUTIVE_PROFILES["vishal-srivastava"], EXECUTIVE_PROFILES["gaurav-tiwari"]];

  return (
    <div className="min-h-screen bg-[#050505] text-[#f8fafc]">
      <SiteNav />
      <main className="pt-32 pb-24 sm:pt-40 sm:pb-32 animate-fade-in">
        {/* Header */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="eyebrow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#16a34a] mr-2 align-middle" />
            Executive Leadership &amp; Engineering
          </div>
          <h1 className="font-display mt-6 text-4xl sm:text-6xl md:text-7xl leading-[1.02] tracking-tight max-w-4xl text-[#f8fafc]">
            Meet Our <span className="text-[#16a34a]">Team</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-[#94a3b8] leading-relaxed">
            Our multi-disciplinary team brings together senior product managers, AI engineers, full-stack architects, UI/UX designers, and operations leads dedicated to delivering exceptional client success.
          </p>

          {/* Interactive Executive Leadership Spotlight */}
          <div className="mt-16">
            <div className="eyebrow text-[#16a34a] mb-6 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              Executive Leadership — Select profile to view details
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {founders.map((member) => (
                <Link
                  key={member.slug}
                  to="/team/$slug"
                  params={{ slug: member.slug }}
                  className="card-surface p-8 sm:p-10 border border-[#16a34a]/30 bg-gradient-to-br from-[#0e1611] via-[#09110d] to-[#050505] relative overflow-hidden group hover:border-[#16a34a] hover:shadow-[0_0_35px_rgba(22,163,74,0.18)] transition-all duration-300 rounded-3xl cursor-pointer block"
                >
                  <div className="absolute top-0 right-0 p-6 text-[#16a34a]/10 pointer-events-none group-hover:text-[#16a34a]/20 group-hover:scale-110 transition-all duration-500">
                    <ShieldCheck className="h-40 w-40" />
                  </div>
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-start gap-6">
                        <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-2xl overflow-hidden border-2 border-[#16a34a]/40 shadow-xl shrink-0 group-hover:border-[#16a34a] group-hover:scale-105 transition-all duration-300 bg-[#111827]">
                          {member.photo ? (
                            <img
                              src={member.photo}
                              alt={member.name}
                              className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="h-full w-full bg-[#16a34a] text-white flex items-center justify-center font-display text-3xl font-extrabold">
                              {member.initials}
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-[#16a34a]/15 text-[#16a34a] border border-[#16a34a]/30 mb-2 font-medium">
                            {member.slug === "vishal-srivastava" ? "Founder & CEO" : "Co-Founder & CTO"}
                          </div>
                          <h2 className="font-display text-2xl sm:text-3xl text-[#f8fafc] group-hover:text-[#16a34a] transition-colors flex items-center gap-2">
                            {member.name}
                          </h2>
                          <p className="text-xs font-mono text-[#16a34a] mt-1 font-semibold">
                            {member.role}
                          </p>
                        </div>
                      </div>
                      <p className="mt-6 text-[#94a3b8] text-sm leading-relaxed line-clamp-3">
                        {member.summary[0]}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#16a34a]/15 flex items-center justify-between">
                      <div className="flex flex-wrap gap-2 text-xs font-mono text-[#94a3b8]">
                        {member.slug === "vishal-srivastava" ? (
                          <>
                            <span className="px-3 py-1 rounded-full border border-[#16a34a]/20 bg-[#050505]">
                              ✓ BI &amp; Analytics
                            </span>
                            <span className="px-3 py-1 rounded-full border border-[#16a34a]/20 bg-[#050505]">
                              ✓ Strategy &amp; Growth
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="px-3 py-1 rounded-full border border-[#16a34a]/20 bg-[#050505]">
                              ✓ AI Architecture
                            </span>
                            <span className="px-3 py-1 rounded-full border border-[#16a34a]/20 bg-[#050505]">
                              ✓ Full-Stack Engineering
                            </span>
                          </>
                        )}
                      </div>

                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#16a34a] group-hover:translate-x-1 transition-transform">
                        <span>View Profile</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Categories Grid */}
          <div className="mt-24 space-y-20">
            {TEAM_CATEGORIES.map((cat) => {
              const IconComp = cat.categoryIcon;
              return (
                <div key={cat.categoryTitle} className="border-t border-[rgba(255,255,255,0.08)] pt-12">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-[#16a34a]/10 border border-[#16a34a]/20 flex items-center justify-center text-[#16a34a]">
                      <IconComp className="h-4 w-4" />
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl text-[#f8fafc]">
                      {cat.categoryTitle}
                    </h2>
                  </div>
                  <p className="mt-3 text-sm text-[#94a3b8] max-w-3xl leading-relaxed">
                    {cat.responsibility}
                  </p>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {cat.members.map((m) => (
                      <div key={m.name} className="card-surface p-6 flex flex-col justify-between group border border-[rgba(255,255,255,0.08)] hover:border-[#16a34a] transition-all">
                        <div>
                          <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-xl bg-[#111827] border border-[rgba(255,255,255,0.1)] text-[#16a34a] flex items-center justify-center font-mono font-bold text-base group-hover:bg-[#16a34a] group-hover:text-white transition-colors">
                              {m.initials}
                            </div>
                            <div>
                              <h3 className="font-display text-lg text-[#f8fafc] group-hover:text-[#16a34a] transition-colors">
                                {m.name}
                              </h3>
                              <p className="text-xs font-mono text-[#94a3b8] mt-0.5">
                                {m.role}
                              </p>
                            </div>
                          </div>
                          <p className="mt-4 text-xs text-[#94a3b8] leading-relaxed">
                            {m.bio}
                          </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between text-[11px] font-mono text-[#16a34a]">
                          <span>Client Delivery Partner</span>
                          <span>Active Member</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <SectionCTA
        title="Ready to work with our executive team?"
        description="Schedule a consultation directly with our founders and principal architects to discuss your enterprise goals."
      />
      <SiteFooter />
      <FloatingWhatsApp />
      <Toaster theme="light" position="top-center" />
    </div>
  );
}
