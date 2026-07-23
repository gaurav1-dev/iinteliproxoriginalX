import { SITE, whatsappLink } from "@/lib/site";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";

export function Hero() {
  const scrollToContact = (e: React.MouseEvent) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" }); };
  const scrollToPortfolio = (e: React.MouseEvent) => { e.preventDefault(); document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth", block: "start" }); };

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 bg-grid">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(20,186,63,.24),transparent_24rem)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-4 lg:grid-cols-2">
          <div className="relative z-10 py-10 lg:py-16">
            <div className="flex items-center gap-2 eyebrow"><span className="h-px w-6 bg-brand" /> AI Automation &amp; Digital Growth</div>
            <h1 className="font-display mt-7 text-[3.25rem] sm:text-6xl lg:text-[4.8rem] xl:text-[5.6rem] leading-[.94] max-w-3xl">Intelligence.<br />Automate <span className="text-brand">Smarter.</span><br />Grow Bigger.</h1>
            <p className="mt-7 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">{SITE.description}</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href={SITE.calendly} target="_blank" rel="noreferrer" className="btn-primary"><Calendar className="h-4 w-4" />Book Appointment</a>
              <a href="#contact" onClick={scrollToContact} className="btn-ghost">Get a Quote <ArrowRight className="h-4 w-4" /></a>
              <a href="#portfolio" onClick={scrollToPortfolio} className="inline-flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">View Portfolio</a>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"><MessageCircle className="h-4 w-4" />or WhatsApp</a>
            </div>
          </div>
          <div className="rocket-stage" aria-hidden="true">
            <div className="hero-orbit" />
            <div className="stat-float left"><span className="text-xs text-muted-foreground">Growth impact</span><strong className="mt-1 block text-2xl">+320%</strong><div className="stat-bars"><i/><i/><i/><i/><i/><i/></div></div>
            <div className="hero-rocket-shell"><img src="/hero/growthpilotx-rocket.webp" alt="" className="hero-rocket-image" /></div>
            <div className="stat-float right"><span className="text-xs text-muted-foreground">Systems deployed</span><strong className="mt-1 block text-2xl">450+</strong><div className="stat-bars"><i/><i/><i/><i/><i/><i/></div></div>
          </div>
        </div>
        <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-4">
          {[{ v: "450+", l: "Automations Deployed" }, { v: "99.9%", l: "System Operational Rate" }, { v: "10x+", l: "Growth Velocity Factor" }, { v: "83+", l: "Enterprise Projects" }].map((m) => <div key={m.l} className="bg-[#07100a]/90 px-4 py-6 sm:px-6 sm:py-8"><dt className="eyebrow text-[10px]">{m.l}</dt><dd className="font-display mt-3 text-3xl sm:text-4xl md:text-5xl">{m.v}</dd></div>)}
        </dl>
      </div>
    </section>
  );
}
