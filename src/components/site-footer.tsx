import { Link } from "@tanstack/react-router";
import { SITE, whatsappLink } from "@/lib/site";
import { SERVICES_DATA } from "@/lib/services-data";
import { Calendar, MessageCircle } from "lucide-react";
import { BrandLogo } from "./brand-logo";

export function SiteFooter() {
  return (
    <footer className="hairline-t bg-surface pb-20 sm:pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16 grid gap-8 sm:gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <BrandLogo size={32} />
          <p className="mt-3 sm:mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
            AI automation, custom website development, mobile apps, digital
            marketing and business software — engineered as one growth system.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <a
              href={SITE.calendly}
              target="_blank"
              rel="noreferrer"
              className="btn-primary !py-2 !px-4 !text-xs !min-h-[40px]"
            >
              <Calendar className="h-3.5 w-3.5" />
              Book Appointment
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost !py-2 !px-4 !text-xs !min-h-[40px]"
            >
              <MessageCircle className="h-3.5 w-3.5 text-brand" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="eyebrow mb-3 sm:mb-4">Company</div>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="inline-block py-1 text-muted-foreground hover:text-foreground transition-colors min-h-[36px]">Home</Link></li>
            <li><Link to="/about" className="inline-block py-1 text-muted-foreground hover:text-foreground transition-colors min-h-[36px]">About</Link></li>
            <li><Link to="/team" className="inline-block py-1 text-muted-foreground hover:text-foreground transition-colors min-h-[36px]">Team</Link></li>
            <li><Link to="/portfolio" className="inline-block py-1 text-muted-foreground hover:text-foreground transition-colors min-h-[36px]">Portfolio</Link></li>
            <li><Link to="/blog" className="inline-block py-1 text-muted-foreground hover:text-foreground transition-colors min-h-[36px]">Insights</Link></li>
            <li><Link to="/contact" className="inline-block py-1 text-muted-foreground hover:text-foreground transition-colors min-h-[36px]">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="eyebrow mb-3 sm:mb-4">Services</div>
          <ul className="space-y-2.5 text-sm">
            {SERVICES_DATA.slice(0, 9).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="inline-block py-1 text-muted-foreground hover:text-foreground transition-colors min-h-[36px]"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="eyebrow mb-3 sm:mb-4">Headquarters</div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {SITE.address.line1},<br />
            {SITE.address.line2}
          </p>
          <p className="mt-3 text-sm">
            <a className="inline-block py-1 text-muted-foreground hover:text-foreground transition-colors" href={`mailto:${SITE.email.business}`}>
              {SITE.email.business}
            </a>
          </p>
          <p className="mt-1 text-sm">
            <a className="inline-block py-1 text-muted-foreground hover:text-foreground transition-colors" href={SITE.phone.primaryHref}>
              {SITE.phone.primary}
            </a>
          </p>
        </div>
      </div>

      <div className="hairline-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} iinteliProX. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="py-1 hover:text-foreground">Privacy Policy</Link>
            <Link to="/terms" className="py-1 hover:text-foreground">Terms of Service</Link>
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
      className="fixed z-40 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-[0_8px_24px_-8px_rgba(53,241,106,0.5)] hover:bg-[var(--brand-strong)] transition-transform duration-200 hover:scale-105 active:scale-95"
      style={{
        bottom: "max(1.25rem, calc(1rem + env(safe-area-inset-bottom, 0px)))",
        left: "max(1.25rem, calc(1rem + env(safe-area-inset-left, 0px)))",
      }}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

