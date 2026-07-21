import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter, FloatingWhatsApp } from "@/components/site-footer";
import { Contact } from "@/components/sections/contact";
import { SITE } from "@/lib/site";
import { Calendar, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { Toaster } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact iinteliprox | Book Appointment, WhatsApp & Email" },
      {
        name: "description",
        content:
          "Contact iinteliprox — book a free strategy call, chat on WhatsApp or send us a message. Based in Hazratganj, Lucknow, India. Serving clients worldwide.",
      },
      { property: "og:title", content: "Contact iinteliprox" },
      {
        property: "og:description",
        content:
          "Book an appointment, WhatsApp or email iinteliprox. AI automation, web development, digital marketing agency in Lucknow, India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact iinteliprox",
          mainEntity: {
            "@type": "Organization",
            name: "iinteliprox",
            email: SITE.email.business,
            telephone: SITE.phone.primary,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Hazratganj",
              addressLocality: "Lucknow",
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN",
            },
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="animate-fade-in">
        <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20 bg-surface">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="eyebrow">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand mr-2 align-middle" />
              Contact
            </div>
            <h1 className="font-display mt-6 text-4xl sm:text-6xl md:text-7xl leading-[1.02] tracking-tight max-w-4xl">
              Let's talk about
              <br />
              <span className="text-brand italic">your project.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Book a free strategy call, WhatsApp us directly, or fill out the
              form below — we reply within one business day.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={SITE.calendly} target="_blank" rel="noreferrer" className="btn-primary">
                <Calendar className="h-4 w-4" />
                Book Appointment
              </a>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-ghost">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
      <Toaster theme="light" position="top-center" />
    </div>
  );
}
