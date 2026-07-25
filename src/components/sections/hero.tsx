import { SITE, whatsappLink } from "@/lib/site";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";

export function Hero() {
  const scrollToContact = (e: React.MouseEvent) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" }); };
  const scrollToPortfolio = (e: React.MouseEvent) => { e.preventDefault(); document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth", block: "start" }); };

  return (
    <section id="top" className="relative overflow-hidden pt-20 pb-12 sm:pt-36 sm:pb-24 bg-grid">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(20,186,63,.24),transparent_24rem)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div className="relative z-10 py-4 sm:py-10 lg:py-16">
            <div className="flex items-center gap-2 eyebrow"><span className="h-px w-6 bg-brand" /> AI Automation &amp; Digital Growth</div>
            <h1 className="font-display mt-4 sm:mt-7 text-[2.5rem] xs:text-[3.25rem] sm:text-6xl lg:text-[4.8rem] xl:text-[5.6rem] leading-[0.96] tracking-tight max-w-3xl">
              Intelligence.<br />Automate <span className="text-brand">Smarter.</span><br />Grow Bigger.
            </h1>
            <p className="mt-4 sm:mt-7 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              {SITE.description}
            </p>
            
            {/* Primary & Secondary CTAs */}
            <div className="mt-6 sm:mt-9 flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-3">
              <a href={SITE.calendly} target="_blank" rel="noreferrer" className="btn-primary w-full xs:w-auto min-h-[48px] sm:min-h-[52px]">
                <Calendar className="h-4 w-4 shrink-0" />Book Appointment
              </a>
              <a href="#contact" onClick={scrollToContact} className="btn-ghost w-full xs:w-auto min-h-[48px] sm:min-h-[52px]">
                Get a Quote <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
              <a href="#portfolio" onClick={scrollToPortfolio} className="inline-flex items-center gap-1.5 py-2.5 px-3 rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-surface-2 min-h-[44px]">
                View Portfolio
              </a>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 py-2.5 px-3 rounded-lg text-muted-foreground transition-colors hover:text-foreground hover:bg-surface-2 min-h-[44px]">
                <MessageCircle className="h-4 w-4 text-brand" /> WhatsApp Us
              </a>
            </div>
          </div>
          
          <div className="rocket-stage mt-2 sm:mt-0" aria-hidden="true">
            <div className="hero-orbit" />
            <div className="stat-float left"><span className="text-xs text-muted-foreground">Growth impact</span><strong className="mt-1 block text-2xl">+320%</strong><div className="stat-bars"><i /><i /><i /><i /><i /><i /></div></div>
            <div className="hero-rocket-shell"><img src="/hero/growthpilotx-rocket.webp" alt="GrowthPilot Rocket" className="hero-rocket-image" loading="eager" decoding="async" /></div>
            <div className="stat-float right"><span className="text-xs text-muted-foreground">Systems deployed</span><strong className="mt-1 block text-2xl">450+</strong><div className="stat-bars"><i /><i /><i /><i /><i /><i /></div></div>
          </div>
        </div>
        
        <dl className="mt-8 sm:mt-14 grid grid-cols-2 overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-4">
          {[{ v: "450+", l: "Automations Deployed" }, { v: "99.9%", l: "System Operational Rate" }, { v: "10x+", l: "Growth Velocity Factor" }, { v: "83+", l: "Enterprise Projects" }].map((m) => (
            <div key={m.l} className="bg-[#07100a]/90 px-4 py-5 sm:px-6 sm:py-8">
              <dt className="eyebrow text-[10px]">{m.l}</dt>
              <dd className="font-display mt-2 sm:mt-3 text-2xl sm:text-4xl md:text-5xl">{m.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

