import { Link } from "@tanstack/react-router";
import { SITE, whatsappLink } from "@/lib/site";
import { SERVICES_DATA } from "@/lib/services-data";
import { Calendar, MessageCircle } from "lucide-react";
import { BrandLogo } from "./brand-logo";

export function SiteFooter() {
  return (
    <footer className="hairline-t bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-16 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <BrandLogo size={32} />
          <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
            AI automation, custom website development, mobile apps, digital
            marketing and business software — engineered as one growth system.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href={SITE.calendly}
              target="_blank"
              rel="noreferrer"
              className="btn-primary !py-2 !px-4 !text-xs"
            >
              <Calendar className="h-3.5 w-3.5" />
              Book Appointment
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost !py-2 !px-4 !text-xs"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="eyebrow mb-4">Company</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
            <li><Link to="/team" className="text-muted-foreground hover:text-foreground">Team</Link></li>
            <li><Link to="/portfolio" className="text-muted-foreground hover:text-foreground">Portfolio</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="eyebrow mb-4">Services</div>
          <ul className="space-y-2 text-sm">
            {SERVICES_DATA.slice(0, 9).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="eyebrow mb-4">Headquarters</div>
          <p className="text-sm text-muted-foreground">
            {SITE.address.line1},<br />
            {SITE.address.line2}
          </p>
          <p className="mt-4 text-sm">
            <a className="hover:text-foreground text-muted-foreground" href={`mailto:${SITE.email.business}`}>
              {SITE.email.business}
            </a>
          </p>
          <p className="mt-1 text-sm">
            <a className="hover:text-foreground text-muted-foreground" href={`mailto:${SITE.email.team}`}>
              {SITE.email.team}
            </a>
          </p>
          <p className="mt-1 text-sm">
            <a className="hover:text-foreground text-muted-foreground" href={SITE.phone.primaryHref}>
              {SITE.phone.primary}
            </a>
          </p>
        </div>
      </div>

      <div className="hairline-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} iinteliprox. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with iinteliprox on WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-[0_8px_24px_-8px_oklch(0.72_0.14_355/40%)] hover:bg-[var(--brand-strong)] transition-colors"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
