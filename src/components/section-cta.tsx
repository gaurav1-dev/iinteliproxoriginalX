import { SITE, whatsappLink } from "@/lib/site";
import { Calendar, MessageCircle } from "lucide-react";

type Props = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function SectionCTA({
  eyebrow = "Let's build",
  title = "Ready to build your project?",
  description = "Book a free strategy call with our founder — we'll map your project scope, timeline and price in 30 minutes.",
}: Props) {
  return (
    <section className="py-24 sm:py-32 hairline-t">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <div className="eyebrow justify-center inline-flex">{eyebrow}</div>
        <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight">
          {title}
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={SITE.calendly} target="_blank" rel="noreferrer" className="btn-primary">
            <Calendar className="h-4 w-4" />
            Book Appointment
          </a>
          <a
            href={whatsappLink("Hi iinteliprox, I'd like to get a quote for a project.")}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            <MessageCircle className="h-4 w-4" />
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
