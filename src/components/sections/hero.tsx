import { SITE, whatsappLink } from "@/lib/site";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";

export function Hero() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 bg-surface">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center gap-2 eyebrow">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
          AI Automation · Web Development · Digital Marketing
        </div>

        <h1 className="font-display mt-6 text-4xl sm:text-6xl md:text-7xl lg:text-[92px] leading-[1.02] sm:leading-[0.95] tracking-tight max-w-5xl text-foreground">
          Intelligence,
          <br />
          <span className="text-brand italic">in motion.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          {SITE.description}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href={SITE.calendly} target="_blank" rel="noreferrer" className="btn-primary">
            <Calendar className="h-4 w-4" />
            Book Appointment
          </a>
          <a href="#contact" onClick={scrollToContact} className="btn-ghost">
            Get a Quote
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#portfolio" onClick={scrollToPortfolio} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2">
            View Portfolio
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
          >
            <MessageCircle className="h-4 w-4" />
            or WhatsApp
          </a>
        </div>

        <dl className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px hairline-t hairline-b bg-hairline">
          {[
            { v: "450+", l: "Automations Deployed" },
            { v: "99.9%", l: "System Operational Rate" },
            { v: "10x+", l: "Growth Velocity Factor" },
            { v: "83+", l: "Enterprise Projects" },
          ].map((m) => (
            <div key={m.l} className="bg-background px-4 sm:px-6 py-6 sm:py-8">
              <dt className="eyebrow text-[10px]">{m.l}</dt>
              <dd className="font-display text-3xl sm:text-4xl md:text-5xl mt-3">{m.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
