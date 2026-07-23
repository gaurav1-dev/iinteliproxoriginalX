// Business constants — single source of truth for contact info, CTAs and links.
export const SITE = {
  name: "iinteliprox",
  url: "https://iinteliprox.com",
  fullName: "iinteliprox — AI Automation & Digital Growth",
  tagline: "Intelligence, in motion.",
  description:
    "iinteliprox helps businesses grow with AI automation, custom website development, mobile app development, digital marketing, SEO and business software. Based in Lucknow, India — serving clients across India and worldwide.",
  phone: {
    primary: "+91 78304 34069",
    primaryHref: "tel:+917830434069",
    secondary: "+91 78304 34069",
    secondaryHref: "tel:+917830434069",
  },
  whatsapp: {
    number: "917830434069",
    display: "+91 78304 34069",
  },
  email: {
    business: "vsrivastava315@gmail.com",
    backup: "vsrivastava315@gmail.com",
    team: "gauravdev11@outlook.com",
  },
  address: {
    line1: "Hazratganj, Lucknow",
    line2: "Uttar Pradesh, India",
    full: "Hazratganj, Lucknow, Uttar Pradesh, India",
  },
  calendly: "https://calendly.com/gauravwork/",
  social: {
    linkedin: "#",
    twitter: "#",
    github: "#",
    instagram: "https://instagram.com/iinteliprox",
  },
} as const;

export const absoluteUrl = (path = "/") => new URL(path, SITE.url).toString();

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hello iinteliprox, I visited your website and I'm interested in your services. Can we discuss my project?";

export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${SITE.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
