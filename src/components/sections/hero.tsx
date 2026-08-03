import { SITE, whatsappLink } from "@/lib/site";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";

export function Hero() {
  const scrollToContact = (e: React.MouseEvent) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" }); };
  const scrollToPortfolio = (e: React.MouseEvent) => { e.preventDefault(); document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth", block: "start" }); };

  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-14 sm:pt-36 sm:pb-28 bg-[#050505] bg-grid">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(22,163,74,0.06),transparent_28rem)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="relative z-10 py-4 sm:py-10 lg:py-16">
            <div className="inline-flex items-center gap-2 eyebrow px-3.5 py-1.5 rounded-full border border-[rgba(255,255,255,0.08)] bg-[#0b0f0c] text-[#16a34a]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#16a34a] shrink-0" />
              Enterprise AI &amp; Software Solutions
            </div>

            <h1 className="font-display mt-5 sm:mt-8 text-[2.6rem] xs:text-[3.4rem] sm:text-6xl lg:text-[4.6rem] xl:text-[5.4rem] leading-[1.08] sm:leading-[1.04] tracking-tight font-extrabold text-[#f8fafc] max-w-3xl">
              <span className="block text-[0.42em] uppercase tracking-[0.16em] text-[#94a3b8]">iinteliProX</span>
              Transform Businesses with <span className="text-[#16a34a]">AI</span>
            </h1>

            <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg text-[#94a3b8] leading-relaxed font-normal">
              {SITE.description}
            </p>
            
            {/* Primary & Secondary CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-3.5">
              <a href={SITE.calendly} target="_blank" rel="noreferrer" className="btn-primary w-full xs:w-auto min-h-[48px] sm:min-h-[52px]">
                <Calendar className="h-4 w-4 shrink-0" />Book Appointment
              </a>
              <a href="#contact" onClick={scrollToContact} className="btn-ghost w-full xs:w-auto min-h-[48px] sm:min-h-[52px]">
                Get a Quote <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
              <a href="#portfolio" onClick={scrollToPortfolio} className="inline-flex items-center gap-1.5 py-2.5 px-3 rounded-lg text-[#94a3b8] transition-colors hover:text-[#f8fafc] hover:bg-[#111827] min-h-[44px]">
                View Portfolio
              </a>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 py-2.5 px-3 rounded-lg text-[#94a3b8] transition-colors hover:text-[#f8fafc] hover:bg-[#111827] min-h-[44px]">
                <MessageCircle className="h-4 w-4 text-[#16a34a] shrink-0" /> WhatsApp Us
              </a>
            </div>
          </div>
          
          <div className="rocket-stage mt-4 sm:mt-0" aria-hidden="true">
            <div className="hero-orbit" />
            <div className="stat-float left"><span className="text-xs text-[#94a3b8]">Growth Impact</span><strong className="mt-1 block text-2xl font-bold text-[#f8fafc]">+320%</strong><div className="stat-bars"><i /><i /><i /><i /><i /><i /></div></div>
            <div className="hero-rocket-shell"><img src="/hero/growthpilotx-rocket.webp" alt="iinteliproX AI Rocket" className="hero-rocket-image" loading="eager" decoding="async" /></div>
            <div className="stat-float right"><span className="text-xs text-[#94a3b8]">Systems Deployed</span><strong className="mt-1 block text-2xl font-bold text-[#f8fafc]">450+</strong><div className="stat-bars"><i /><i /><i /><i /><i /><i /></div></div>
          </div>
        </div>
        
        <dl className="mt-12 sm:mt-16 grid grid-cols-2 overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#111827] md:grid-cols-4 shadow-sm">
          {[{ v: "450+", l: "Automations Deployed" }, { v: "99.9%", l: "System Operational Rate" }, { v: "10x+", l: "Growth Velocity Factor" }, { v: "83+", l: "Enterprise Projects" }].map((m) => (
            <div key={m.l} className="bg-[#111827] px-4 py-5 sm:px-6 sm:py-8 border-r border-[rgba(255,255,255,0.05)] last:border-0">
              <dt className="eyebrow text-[10px] text-[#16a34a]">{m.l}</dt>
              <dd className="font-display mt-2 sm:mt-3 text-2xl sm:text-4xl md:text-5xl font-bold text-[#f8fafc]">{m.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
