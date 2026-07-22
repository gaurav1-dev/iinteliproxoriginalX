import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SITE, whatsappLink } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { BrandLogo } from "@/components/brand-logo";

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email").max(200),
  phone: z.string().trim().min(5, "Please enter your phone number").max(30),
  country: z.string().trim().min(2, "Please enter your country").max(80),
  service: z.string().min(1, "Please pick a service"),
  budget: z.string().min(1, "Please pick a budget range"),
  details: z.string().trim().min(10, "Please share a few details").max(2000),
  website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

const BUDGETS = [
  "< $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "", company: "", email: "", phone: "",
      country: "", service: "", budget: "", details: "",
      website: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    if (data.website) return;
    setSubmitting(true);
    const message = [
      "New project inquiry via iinteliprox.com",
      "",
      `Name: ${data.fullName}`,
      `Company: ${data.company || "—"}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Country: ${data.country}`,
      `Interested Service: ${data.service}`,
      `Budget: ${data.budget}`,
      "",
      "Project Details:",
      data.details,
    ].join("\n");

    toast.success("Redirecting you to WhatsApp…", {
      description: "Just press send in WhatsApp to reach us instantly.",
    });
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSubmitting(false);
  };

  const inputCls =
    "w-full bg-background border border-hairline rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition";
  const labelCls =
    "block font-mono text-[10px] tracking-[0.24em] uppercase text-muted-foreground mb-2";

  return (
    <section id="contact" className="py-24 sm:py-32 hairline-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <BrandLogo size={30} className="mb-6" />
          <div className="eyebrow">Get in touch</div>
          <h2 className="font-display text-3xl sm:text-5xl mt-4 tracking-tight">
            Let&apos;s build something intelligent
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            iinteliprox is headquartered in Lucknow, India. Fill out the form or
            reach us directly — every submission arrives on our team WhatsApp
            instantly.
          </p>

          <ul className="mt-10 space-y-6">
            <li className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-2">
                <Phone className="h-4 w-4 text-brand" />
              </span>
              <div>
                <div className="eyebrow">Call us</div>
                <a href={SITE.phone.primaryHref} className="block mt-1 hover:text-brand">
                  {SITE.phone.primary}
                </a>
                <a href={`https://wa.me/${SITE.whatsapp.number}`} target="_blank" rel="noreferrer" className="block text-sm text-muted-foreground hover:text-foreground">
                  WhatsApp {SITE.whatsapp.display}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-2">
                <Mail className="h-4 w-4 text-brand" />
              </span>
              <div>
                <div className="eyebrow">Email us</div>
                <a href={`mailto:${SITE.email.business}`} className="block mt-1 hover:text-brand">
                  {SITE.email.business}
                </a>
                <a href={`mailto:${SITE.email.team}`} className="block text-sm text-muted-foreground hover:text-foreground">
                  {SITE.email.team}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface-2">
                <MapPin className="h-4 w-4 text-brand" />
              </span>
              <div>
                <div className="eyebrow">Location</div>
                <div className="mt-1">{SITE.address.full}</div>
              </div>
            </li>
          </ul>

          <a
            href={whatsappLink("Hi iinteliprox, I'd like to discuss a project.")}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-10"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:col-span-7 card-surface p-8 md:p-10"
          noValidate
        >
          <div className="sr-only" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
          </div>
          <h3 className="font-display text-2xl">Inquire about a project</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Submitting delivers your inquiry to our team on WhatsApp with every
            field pre-filled — press send and we&apos;ll reply within one business day.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className={labelCls} htmlFor="fullName">Full Name *</label>
              <input id="fullName" autoComplete="name" aria-invalid={!!errors.fullName} aria-describedby={errors.fullName ? "fullName-error" : undefined} className={inputCls} {...register("fullName")} />
              {errors.fullName && <p id="fullName-error" role="alert" className="text-xs text-destructive mt-1">{errors.fullName.message}</p>}
            </div>
            <div className="sm:col-span-1">
              <label className={labelCls} htmlFor="company">Company Name</label>
              <input id="company" autoComplete="organization" className={inputCls} {...register("company")} />
            </div>
            <div className="sm:col-span-1">
              <label className={labelCls} htmlFor="email">Email Address *</label>
              <input id="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} className={inputCls} {...register("email")} />
              {errors.email && <p id="email-error" role="alert" className="text-xs text-destructive mt-1">{errors.email.message}</p>}
            </div>
            <div className="sm:col-span-1">
              <label className={labelCls} htmlFor="phone">Phone Number *</label>
              <input id="phone" type="tel" autoComplete="tel" className={inputCls} {...register("phone")} />
              {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}
            </div>
            <div className="sm:col-span-1">
              <label className={labelCls} htmlFor="country">Country *</label>
              <input id="country" autoComplete="country-name" className={inputCls} {...register("country")} />
              {errors.country && <p className="text-xs text-destructive mt-1">{errors.country.message}</p>}
            </div>
            <div className="sm:col-span-1">
              <label className={labelCls} htmlFor="service">Service Required *</label>
              <select id="service" className={inputCls} {...register("service")}>
                <option value="">Select a service…</option>
                {SERVICES.map((s) => (
                  <option key={s.name} value={s.name}>{s.name}</option>
                ))}
              </select>
              {errors.service && <p className="text-xs text-destructive mt-1">{errors.service.message}</p>}
            </div>
            <div className="sm:col-span-2">
              <label className={labelCls} htmlFor="budget">Budget *</label>
              <select id="budget" className={inputCls} {...register("budget")}>
                <option value="">Select a budget range…</option>
                {BUDGETS.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
              {errors.budget && <p className="text-xs text-destructive mt-1">{errors.budget.message}</p>}
            </div>
            <div className="sm:col-span-2">
              <label className={labelCls} htmlFor="details">Project Description *</label>
              <textarea id="details" rows={5} className={inputCls} {...register("details")} />
              {errors.details && <p className="text-xs text-destructive mt-1">{errors.details.message}</p>}
            </div>
          </div>

          <button type="submit" disabled={submitting} className="btn-primary mt-8 w-full sm:w-auto">
            <MessageCircle className="h-4 w-4" />
            Send via WhatsApp
          </button>
          <p className="text-xs text-muted-foreground mt-3">
            By submitting, you&apos;ll be redirected to WhatsApp with your inquiry
            pre-filled to {SITE.whatsapp.display}. See our <a href="/privacy" className="underline underline-offset-2 hover:text-foreground">Privacy Policy</a>.
          </p>
        </form>
      </div>
    </section>
  );
}
