import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { EXECUTIVE_PROFILES, type TeamMemberProfile } from "@/lib/team-data";
import { SITE, absoluteUrl, whatsappLink } from "@/lib/site";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter, FloatingWhatsApp } from "@/components/site-footer";
import { SectionCTA } from "@/components/section-cta";
import { Toaster } from "sonner";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Sparkles,
  Layers,
  ShieldCheck,
  ExternalLink,
  Code2,
  Cpu,
  Database,
  Cloud,
  Palette,
  Zap,
  Award,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/team/$slug")({
  loader: ({ params }) => {
    const profile = EXECUTIVE_PROFILES[params.slug];
    if (!profile) throw notFound();
    return { profile };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.profile;
    if (!p) return { meta: [{ title: "Executive Profile — iinteliproX AI" }] };
    return {
      meta: [
        { title: `${p.name} — ${p.shortRole} | iinteliproX AI` },
        { name: "description", content: p.summary[0] },
        { property: "og:title", content: `${p.name} — ${p.role}` },
        { property: "og:description", content: p.summary[0] },
        { property: "og:type", content: "profile" },
        { property: "og:url", content: absoluteUrl(`/team/${p.slug}`) },
        { property: "og:image", content: absoluteUrl(p.photo) },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `${p.name} — ${p.shortRole}` },
        { name: "twitter:description", content: p.summary[0] },
      ],
      links: [{ rel: "canonical", href: absoluteUrl(`/team/${p.slug}`) }],
    };
  },
  notFoundComponent: NotFound,
  errorComponent: ErrorView,
  component: ProfilePage,
});

function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f8fafc] flex flex-col justify-between">
      <SiteNav />
      <main className="flex-1 flex items-center justify-center px-6 pt-32 pb-24">
        <div className="text-center max-w-lg card-surface p-12 border border-[#16a34a]/30 rounded-3xl">
          <ShieldCheck className="h-16 w-16 text-[#16a34a] mx-auto mb-4" />
          <h1 className="font-display text-4xl text-[#f8fafc]">Profile Not Found</h1>
          <p className="text-[#94a3b8] mt-3 text-sm">
            The executive profile you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/team"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#16a34a] text-white font-medium hover:bg-[#15803d] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Team
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function ErrorView({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f8fafc] flex items-center justify-center px-6">
      <div className="text-center card-surface p-8 border border-red-500/30 rounded-2xl">
        <h1 className="font-display text-2xl text-red-400">Something went wrong</h1>
        <button
          className="mt-4 px-6 py-2 rounded-full bg-[#16a34a] text-white font-medium text-sm"
          onClick={reset}
        >
          Try again
        </button>
      </div>
    </div>
  );
}

const CATEGORY_ICONS: Record<string, any> = {
  "AI & Automation": Cpu,
  "Software Engineering": Code2,
  "Backend & Database": Database,
  "Cloud & DevOps": Cloud,
  "UI/UX & Frontend Architecture": Palette,
  "Performance & SEO": Zap,
  "Business Leadership": Award,
  "Analytics & Business Intelligence": Zap,
  "Tools & Analytics Platforms": Code2,
  "Strategy & Operations": Briefcase,
  "Growth & Brand Engineering": Sparkles,
};

function ProfilePage() {
  const { profile } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-[#050505] text-[#f8fafc] selection:bg-[#16a34a]/30 selection:text-[#16a34a]">
      <SiteNav />

      <main className="pt-28 sm:pt-36 pb-24 animate-fade-in">
        {/* Navigation Bar Header */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between py-4 border-b border-[rgba(255,255,255,0.08)] mb-10">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 text-sm font-mono text-[#94a3b8] hover:text-[#16a34a] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Team Directory
            </Link>

            <div className="flex items-center gap-3">
              {profile.meetingLink && (
                <a
                  href={profile.meetingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-full bg-[#16a34a]/15 text-[#16a34a] border border-[#16a34a]/30 hover:bg-[#16a34a] hover:text-white transition-all"
                >
                  <Calendar className="h-3.5 w-3.5" /> Book Meeting
                </a>
              )}
              {profile.portfolioLink && (
                <Link
                  to={profile.portfolioLink}
                  className="hidden sm:inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-full border border-[rgba(255,255,255,0.15)] text-[#f8fafc] hover:border-[#16a34a] transition-all"
                >
                  <Briefcase className="h-3.5 w-3.5 text-[#16a34a]" /> Portfolio
                </Link>
              )}
            </div>
          </div>

          {/* Hero Section */}
          <div className="relative card-surface p-8 sm:p-12 lg:p-14 border border-[#16a34a]/30 bg-gradient-to-br from-[#0e1611] via-[#09110d] to-[#050505] rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 text-[#16a34a]/5 pointer-events-none">
              <ShieldCheck className="h-72 w-72" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Executive Portrait Container */}
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-center">
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#16a34a] to-[#22c55e] opacity-40 blur-lg group-hover:opacity-75 transition duration-500" />
                  <div className="relative h-64 w-64 sm:h-72 sm:w-72 lg:h-80 lg:w-80 rounded-3xl overflow-hidden border-2 border-[#16a34a] shadow-2xl bg-[#111827]">
                    {profile.photo ? (
                      <img
                        src={profile.photo}
                        alt={profile.name}
                        className="h-full w-full object-cover object-top filter contrast-[1.03]"
                      />
                    ) : (
                      <div className="h-full w-full bg-[#16a34a] text-white flex items-center justify-center font-display text-6xl font-black">
                        {profile.initials}
                      </div>
                    )}
                  </div>
                </div>

                {/* Social Bar */}
                <div className="mt-6 flex items-center gap-3">
                  {profile.social.linkedin && (
                    <a
                      href={profile.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full border border-[#16a34a]/30 bg-[#050505] flex items-center justify-center text-[#94a3b8] hover:text-[#16a34a] hover:border-[#16a34a] transition-colors"
                      title="LinkedIn"
                    >
                      <span className="font-bold text-xs">in</span>
                    </a>
                  )}
                  {profile.social.github && (
                    <a
                      href={profile.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full border border-[#16a34a]/30 bg-[#050505] flex items-center justify-center text-[#94a3b8] hover:text-[#16a34a] hover:border-[#16a34a] transition-colors"
                      title="GitHub"
                    >
                      <Code2 className="h-4 w-4" />
                    </a>
                  )}
                  {profile.social.twitter && (
                    <a
                      href={profile.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full border border-[#16a34a]/30 bg-[#050505] flex items-center justify-center text-[#94a3b8] hover:text-[#16a34a] hover:border-[#16a34a] transition-colors"
                      title="Twitter / X"
                    >
                      <span className="font-bold text-xs">X</span>
                    </a>
                  )}
                  {profile.social.instagram && (
                    <a
                      href={profile.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full border border-[#16a34a]/30 bg-[#050505] flex items-center justify-center text-[#94a3b8] hover:text-[#16a34a] hover:border-[#16a34a] transition-colors"
                      title="Instagram"
                    >
                      <span className="font-bold text-xs">IG</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Executive Hero Text */}
              <div className="lg:col-span-8 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#16a34a]/15 text-[#16a34a] border border-[#16a34a]/30 w-max mb-4 font-semibold">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {profile.shortRole}
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#f8fafc] tracking-tight">
                  {profile.name}
                </h1>

                <p className="text-lg sm:text-xl font-mono text-[#16a34a] mt-2 font-medium">
                  {profile.role}
                </p>

                <p className="mt-4 text-[#94a3b8] text-base leading-relaxed max-w-2xl">
                  {profile.tagline}
                </p>

                {/* Quick Contact Specs */}
                <div className="mt-6 pt-6 border-t border-[#16a34a]/20 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-[#94a3b8]">
                  <div className="flex items-center gap-2.5">
                    <Mail className="h-4 w-4 text-[#16a34a] shrink-0" />
                    <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors truncate">
                      {profile.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 text-[#16a34a] shrink-0" />
                    <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">
                      {profile.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5 sm:col-span-2">
                    <MapPin className="h-4 w-4 text-[#16a34a] shrink-0" />
                    <span>{profile.location}</span>
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <a
                    href={whatsappLink(`Hello ${profile.name}, I would like to schedule a consultation regarding a project.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#16a34a] text-white font-medium text-sm hover:bg-[#15803d] shadow-lg shadow-[#16a34a]/20 transition-all cursor-pointer"
                  >
                    <MessageCircle className="h-4 w-4" /> Book Consultation
                  </a>

                  {profile.meetingLink && (
                    <a
                      href={profile.meetingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#16a34a]/40 bg-[#050505] text-[#f8fafc] font-medium text-sm hover:border-[#16a34a] hover:bg-[#16a34a]/10 transition-all cursor-pointer"
                    >
                      <Calendar className="h-4 w-4 text-[#16a34a]" /> Schedule Meeting
                    </a>
                  )}

                  {profile.portfolioLink && (
                    <Link
                      to={profile.portfolioLink}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[rgba(255,255,255,0.15)] text-[#f8fafc] font-medium text-sm hover:border-[#16a34a] transition-all"
                    >
                      <Briefcase className="h-4 w-4 text-[#16a34a]" /> Explore Portfolio
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Main Profile Grid Section */}
          <div className="mt-16 grid lg:grid-cols-12 gap-12">
            {/* Left Content Area (Summary, Philosophy, Expertise, Timeline, Projects) */}
            <div className="lg:col-span-8 space-y-16">
              {/* Professional Summary */}
              <section className="card-surface p-8 sm:p-10 border border-[rgba(255,255,255,0.08)] rounded-3xl">
                <div className="eyebrow text-[#16a34a] mb-3">Executive Profile</div>
                <h2 className="font-display text-2xl sm:text-3xl text-[#f8fafc]">
                  Professional Summary
                </h2>
                <div className="mt-6 space-y-4 text-[#94a3b8] leading-relaxed text-base">
                  {profile.summary.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </section>

              {/* Leadership Philosophy */}
              <section className="card-surface p-8 sm:p-10 border border-[#16a34a]/30 bg-gradient-to-r from-[#0d1611] via-[#09110d] to-[#050505] rounded-3xl relative overflow-hidden">
                <div className="absolute top-4 right-4 text-[#16a34a]/10">
                  <Award className="h-24 w-24" />
                </div>
                <div className="relative z-10">
                  <div className="eyebrow text-[#16a34a] mb-2">Core Vision</div>
                  <h2 className="font-display text-2xl sm:text-3xl text-[#f8fafc] mb-4">
                    Leadership Philosophy
                  </h2>
                  <blockquote className="text-[#f8fafc] text-lg italic leading-relaxed border-l-4 border-[#16a34a] pl-6 py-2 bg-[#050505]/40 rounded-r-2xl">
                    "{profile.leadershipPhilosophy}"
                  </blockquote>
                </div>
              </section>

              {/* Categorized Areas of Expertise */}
              <section className="card-surface p-8 sm:p-10 border border-[rgba(255,255,255,0.08)] rounded-3xl">
                <div className="eyebrow text-[#16a34a] mb-3">Core Competencies</div>
                <h2 className="font-display text-2xl sm:text-3xl text-[#f8fafc] mb-8">
                  Areas of Expertise
                </h2>

                <div className="grid gap-6 sm:grid-cols-2">
                  {profile.expertiseCategories.map((cat) => {
                    const IconComponent = CATEGORY_ICONS[cat.title] || Sparkles;
                    return (
                      <div
                        key={cat.title}
                        className="p-6 rounded-2xl border border-[#16a34a]/20 bg-[#090d0b] hover:border-[#16a34a]/50 transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-8 w-8 rounded-lg bg-[#16a34a]/15 border border-[#16a34a]/30 flex items-center justify-center text-[#16a34a]">
                            <IconComponent className="h-4 w-4" />
                          </div>
                          <h3 className="font-display text-lg text-[#f8fafc]">{cat.title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {cat.items.map((item) => (
                            <span
                              key={item}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#050505] text-[#94a3b8] border border-[rgba(255,255,255,0.08)] hover:text-[#16a34a] hover:border-[#16a34a]/40 transition-colors"
                            >
                              <CheckCircle2 className="h-3 w-3 text-[#16a34a]" />
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Professional Timeline */}
              <section className="card-surface p-8 sm:p-10 border border-[rgba(255,255,255,0.08)] rounded-3xl">
                <div className="eyebrow text-[#16a34a] mb-3">Track Record</div>
                <h2 className="font-display text-2xl sm:text-3xl text-[#f8fafc] mb-8">
                  Professional Timeline
                </h2>

                <div className="relative border-l-2 border-[#16a34a]/30 pl-6 sm:pl-8 space-y-8 ml-2">
                  {profile.timeline.map((item, index) => (
                    <div key={index} className="relative group">
                      <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-4 w-4 rounded-full bg-[#16a34a] border-4 border-[#050505] shadow-md group-hover:scale-125 transition-transform" />
                      <div className="inline-block px-3 py-0.5 rounded-full text-xs font-mono bg-[#16a34a]/15 text-[#16a34a] border border-[#16a34a]/30 mb-2 font-semibold">
                        {item.period}
                      </div>
                      <h3 className="font-display text-xl text-[#f8fafc]">{item.title}</h3>
                      <p className="mt-2 text-sm text-[#94a3b8] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Featured Projects */}
              <section className="card-surface p-8 sm:p-10 border border-[rgba(255,255,255,0.08)] rounded-3xl">
                <div className="eyebrow text-[#16a34a] mb-3">Case Studies &amp; Delivery</div>
                <h2 className="font-display text-2xl sm:text-3xl text-[#f8fafc] mb-8">
                  Featured Projects
                </h2>

                <div className="grid gap-6 sm:grid-cols-1">
                  {profile.featuredProjects.map((proj, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl border border-[#16a34a]/20 bg-[#090d0b] hover:border-[#16a34a] transition-all"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display text-xl text-[#f8fafc]">{proj.title}</h3>
                        {proj.metrics && (
                          <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#16a34a]/15 text-[#16a34a] border border-[#16a34a]/30 shrink-0 font-medium">
                            {proj.metrics}
                          </span>
                        )}
                      </div>
                      <p className="mt-3 text-sm text-[#94a3b8] leading-relaxed">
                        {proj.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Sidebar (Education, Tech Stack, Direct Contact Card) */}
            <div className="lg:col-span-4 space-y-8">
              {/* Education Card */}
              {profile.education && profile.education.length > 0 && (
                <div className="card-surface p-6 sm:p-8 border border-[rgba(255,255,255,0.08)] rounded-3xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-xl bg-[#16a34a]/15 border border-[#16a34a]/30 flex items-center justify-center text-[#16a34a]">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <h2 className="font-display text-xl text-[#f8fafc]">Education</h2>
                  </div>

                  <div className="space-y-6">
                    {profile.education.map((edu, i) => (
                      <div key={i} className="border-l-2 border-[#16a34a]/30 pl-4 py-1">
                        <h3 className="font-display text-base text-[#f8fafc]">{edu.degree}</h3>
                        {edu.field && (
                          <p className="text-xs font-mono text-[#16a34a] mt-0.5">{edu.field}</p>
                        )}
                        <p className="text-xs text-[#94a3b8] mt-1">{edu.institution}</p>
                        {edu.location && (
                          <p className="text-[11px] font-mono text-[#94a3b8]/70 mt-0.5">
                            {edu.location}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technology Stack */}
              <div className="card-surface p-6 sm:p-8 border border-[rgba(255,255,255,0.08)] rounded-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-[#16a34a]/15 border border-[#16a34a]/30 flex items-center justify-center text-[#16a34a]">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-xl text-[#f8fafc]">Technology Stack</h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  {profile.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full text-xs font-mono bg-[#090d0b] text-[#f8fafc] border border-[#16a34a]/25 hover:border-[#16a34a] hover:bg-[#16a34a]/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Contact Card */}
              <div className="card-surface p-6 sm:p-8 border border-[#16a34a]/40 bg-gradient-to-b from-[#0d1611] to-[#050505] rounded-3xl text-center">
                <ShieldCheck className="h-12 w-12 text-[#16a34a] mx-auto mb-3" />
                <h3 className="font-display text-xl text-[#f8fafc]">Work With {profile.name.split(" ")[0]}</h3>
                <p className="mt-2 text-xs text-[#94a3b8] leading-relaxed">
                  Have a high-stakes AI, data analytics, or software engineering project? Connect directly with our executive leadership.
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href={whatsappLink(`Hello ${profile.name}, I would like to schedule a consultation.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#16a34a] text-white font-medium text-sm hover:bg-[#15803d] transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" /> Message on WhatsApp
                  </a>

                  <a
                    href={`mailto:${profile.email}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full border border-[rgba(255,255,255,0.15)] text-[#f8fafc] font-medium text-sm hover:border-[#16a34a] transition-colors"
                  >
                    <Mail className="h-4 w-4 text-[#16a34a]" /> Direct Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Back Button */}
          <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.08)] flex justify-between items-center">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[rgba(255,255,255,0.15)] text-sm font-mono text-[#f8fafc] hover:border-[#16a34a] hover:text-[#16a34a] transition-all"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Team Directory
            </Link>

            <a
              href="#top"
              className="text-xs font-mono text-[#94a3b8] hover:text-[#16a34a] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              ↑ Back to top
            </a>
          </div>
        </div>
      </main>

      <SectionCTA
        title={`Book a Strategy Call with ${profile.name}`}
        description="Schedule a 30-minute technical consultation to analyze your infrastructure, data pipelines, or software roadmap."
      />
      <SiteFooter />
      <FloatingWhatsApp />
      <Toaster theme="light" position="top-center" />
    </div>
  );
}
