import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { BrandLogo } from "./brand-logo";
import { SITE } from "@/lib/site";

const NAV = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services" as const },
  { label: "Team", to: "/team" as const },
  { label: "About", to: "/about" as const },
  { label: "Portfolio", to: "/portfolio" as const },
  { label: "Blog", to: "/blog" as const },
  { label: "Contact", to: "/contact" as const },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    if (open) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "backdrop-blur-xl bg-background/90 border-b border-hairline"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center shrink-0 min-h-[44px] min-w-[44px]" aria-label="iinteliprox — home">
          <BrandLogo size={32} />
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors data-[status=active]:text-foreground data-[status=active]:font-medium relative"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.calendly}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex btn-primary !py-2 !px-4 !text-xs"
          >
            <Calendar className="h-3.5 w-3.5" />
            Book Appointment
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-surface/80 text-foreground transition-colors hover:bg-surface-2 active:scale-95"
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="flex flex-col gap-1.5 items-center justify-center">
              <span className={`block h-0.5 w-4 bg-foreground transition-transform duration-200 ${open ? "rotate-45 translate-y-1" : ""}`} />
              <span className={`block h-0.5 w-4 bg-foreground transition-transform duration-200 ${open ? "-rotate-45 -translate-y-1" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {open ? (
        <div className="lg:hidden border-t border-hairline bg-background/95 backdrop-blur-xl transition-all duration-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex flex-col gap-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {NAV.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                onClick={() => setOpen(false)}
                className="flex items-center min-h-[44px] px-3 rounded-lg text-base text-muted-foreground hover:text-foreground hover:bg-surface-2 transition-all data-[status=active]:text-brand data-[status=active]:font-semibold data-[status=active]:bg-surface-2/60"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={SITE.calendly}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 w-full !min-h-[48px] !text-sm"
            >
              <Calendar className="h-4 w-4" />
              Book Appointment
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

