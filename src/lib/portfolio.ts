export type Project = {
  slug: string;
  name: string;
  title: string;
  year: string;
  tags: string[];
  category: string;
  image: string;
  liveUrl: string;
  summary: string;
  description: string;
  screenshots: string[];
  stack: string[];
  challenges: string[];
  solutions: string[];
  outcomes: string[];
};

const shot = (slug: string) => `/portfolio/${slug}.jpg`;

export const PROJECTS: Project[] = [
  {
    slug: "kawakenichi",
    name: "Kawakenichi",
    title: "AI Kawakenichi",
    year: "2024",
    tags: ["AI Integration", "Web Design", "Brand Experience"],
    category: "AI Brand Platform",
    image: shot("kawakenichi"),
    liveUrl: "https://aikawakenichi.com/",
    summary:
      "A cutting-edge AI-powered brand platform integrating intelligent content generation, dynamic visual storytelling, and seamless user journeys.",
    description:
      "Kawakenichi needed a digital home that could keep up with a brand pushing the frontier of generative AI. We designed and built a platform where dynamic visuals, AI-driven content and cinematic motion converge into a single, coherent brand experience.",
    screenshots: [shot("kawakenichi")],
    stack: ["Next.js", "GSAP", "OpenAI API", "Framer Motion", "Vercel"],
    challenges: [
      "Communicate a highly technical AI product to a non-technical audience",
      "Blend generative content with a controlled, on-brand visual system",
      "Deliver cinematic motion without compromising Core Web Vitals",
    ],
    solutions: [
      "Modular content system where AI-generated assets slot into curated art direction",
      "Scroll-orchestrated storytelling with reduced-motion fallbacks",
      "Edge rendering and asset streaming for sub-second interactions",
    ],
    outcomes: [
      "Positioned Kawakenichi as a frontier AI brand",
      "Doubled qualified inbound demos in the first quarter",
    ],
  },
  {
    slug: "house-of-honey",
    name: "House of Honey",
    title: "House of Honey",
    year: "2024",
    tags: ["E-Commerce", "Luxury Design", "Brand Identity"],
    category: "Luxury E-Commerce",
    image: shot("house-of-honey"),
    liveUrl: "https://www.houseofhoney.com/",
    summary:
      "A premium e-commerce and lifestyle experience celebrating artisanal honey products, wrapped in an editorial design language.",
    description:
      "We transformed an artisanal honey line into a luxury lifestyle brand. Editorial typography, tactile product photography and a considered checkout flow turn browsing into a curated retail moment.",
    screenshots: [shot("house-of-honey")],
    stack: ["Shopify", "Liquid", "GSAP", "Klaviyo", "Algolia"],
    challenges: [
      "Elevate a commodity category into a premium lifestyle brand",
      "Balance editorial storytelling with fast, frictionless checkout",
    ],
    solutions: [
      "Editorial-grade art direction paired with a lean, focused PDP",
      "Server-side personalisation and abandoned-cart automation",
    ],
    outcomes: [
      "Higher average order value through curated bundling",
      "Consistent lift in return-customer rate month over month",
    ],
  },
  {
    slug: "db-longbow",
    name: "DB Longbow",
    title: "DB Longbow",
    year: "2024",
    tags: ["Webflow", "Motion Design", "Product Showcase"],
    category: "Product Storytelling",
    image: shot("db-longbow"),
    liveUrl: "https://db-longbow.webflow.io/",
    summary:
      "A high-impact Webflow build for an archery brand — rugged craftsmanship meets refined digital aesthetics.",
    description:
      "DB Longbow needed a site as considered as their bows. We built a cinematic Webflow experience with bold typography, layered motion and product moments that feel hand-crafted.",
    screenshots: [shot("db-longbow")],
    stack: ["Webflow", "GSAP", "Lottie", "Custom CMS"],
    challenges: [
      "Convey handcraft heritage in a digital-first medium",
      "Ship a fully client-editable Webflow CMS without losing polish",
    ],
    solutions: [
      "Scroll-linked product reveals with cinematic pacing",
      "Locked-down CMS collections and reusable symbol library",
    ],
    outcomes: [
      "Dramatic increase in average session duration",
      "Direct-to-consumer inquiries from three new continents",
    ],
  },
  {
    slug: "vectrfl",
    name: "Vectrfl",
    title: "Vectrfl",
    year: "2024",
    tags: ["SaaS", "UI/UX Design", "Conversion Optimization"],
    category: "SaaS Product Site",
    image: shot("vectrfl"),
    liveUrl: "https://www.vectrfl.com/",
    summary:
      "A sleek SaaS product site for a modern data intelligence platform, engineered for conversion.",
    description:
      "Vectrfl asked for a product site that could explain a complex data platform to executives while converting engineers. Crisp information architecture, dense product visuals and a focused funnel do both.",
    screenshots: [shot("vectrfl")],
    stack: ["Next.js", "Tailwind", "Framer Motion", "Segment", "HubSpot"],
    challenges: [
      "Explain a technical platform to two very different personas",
      "Keep visual density high without sacrificing performance",
    ],
    solutions: [
      "Persona-aware landing paths and progressive disclosure of technical depth",
      "Component-driven design system with strict token discipline",
    ],
    outcomes: [
      "Substantial lift in trial-to-demo conversion",
      "Reduced bounce on primary product pages",
    ],
  },
  {
    slug: "units",
    name: "Units.gr",
    title: "Units.gr",
    year: "2024",
    tags: ["Real Estate", "Multi-Language", "Web Platform"],
    category: "Real Estate Platform",
    image: shot("units"),
    liveUrl: "https://units.gr/en/homepage/",
    summary:
      "A comprehensive real estate and property management portal for the Greek market with multi-language support.",
    description:
      "Units.gr needed a scalable listings platform that could serve buyers, sellers and property managers in multiple languages. We designed a search-first UX and a resilient backend that grows with their inventory.",
    screenshots: [shot("units")],
    stack: ["Next.js", "PostgreSQL", "Elastic Search", "i18n", "Mapbox"],
    challenges: [
      "Multi-language search over thousands of listings",
      "Complex filter combinations without sluggish results",
    ],
    solutions: [
      "Faceted search with server-side rendering for SEO",
      "Cached map tiles and virtualised results grid",
    ],
    outcomes: [
      "Thousands of listings served with sub-second search",
      "Organic traffic growth across every language variant",
    ],
  },
  {
    slug: "wembi",
    name: "Wembi AI",
    title: "Wembi AI",
    year: "2024",
    tags: ["AI Platform", "Product Marketing", "Animations"],
    category: "AI Product Site",
    image: shot("wembi"),
    liveUrl: "https://www.wembi.ai/",
    summary:
      "A flagship AI product site built to inspire confidence and drive adoption at scale.",
    description:
      "Wembi is a serious AI platform. Our job was to make that seriousness feel inevitable. Futuristic visual language, animated feature reveals and a clear information hierarchy communicate deep capability with total clarity.",
    screenshots: [shot("wembi")],
    stack: ["Next.js", "Three.js", "Framer Motion", "MDX"],
    challenges: [
      "Communicate deep technical capability without alienating buyers",
      "Deliver GPU-heavy visuals on modest hardware",
    ],
    solutions: [
      "Layered narrative from executive summary to technical deep dives",
      "Adaptive rendering with graceful fallbacks",
    ],
    outcomes: [
      "Enterprise pipeline growth quarter over quarter",
      "Featured in multiple AI industry roundups",
    ],
  },
  {
    slug: "pacome-pertant",
    name: "Pacome Pertant",
    title: "Pacome Pertant",
    year: "2024",
    tags: ["Personal Brand", "Portfolio", "Editorial Design"],
    category: "Personal Brand",
    image: shot("pacome"),
    liveUrl: "https://pacomepertant.com/about",
    summary:
      "A distinguished personal brand and portfolio for a creative professional with a narrative-driven approach.",
    description:
      "For Pacome we built an editorial portfolio that reads like a considered magazine. Typography does the heavy lifting; imagery is curated with restraint; every page feels like a chapter in a longer story.",
    screenshots: [shot("pacome")],
    stack: ["Next.js", "MDX", "Sanity", "Framer Motion"],
    challenges: [
      "Balance personal voice with a professional-grade brand",
      "Support long-form editorial content without visual fatigue",
    ],
    solutions: [
      "Custom typographic system tuned for long reads",
      "Sanity-powered editorial workflow for weekly updates",
    ],
    outcomes: [
      "Positioned Pacome as a thought leader in his practice",
      "Direct inbound from tier-one editorial outlets",
    ],
  },
  {
    slug: "noomo",
    name: "Noomo Agency",
    title: "Noomo Agency — Storytelling",
    year: "2024",
    tags: ["Storytelling", "Scroll Experience", "Award-Level"],
    category: "Interactive Storytelling",
    image: shot("noomo"),
    liveUrl: "https://storytelling.noomoagency.com/",
    summary:
      "An award-worthy interactive storytelling experience with scroll-driven narrative and GPU-accelerated visuals.",
    description:
      "Noomo asked for an award-eligible storytelling experience. We collaborated on a scroll-driven narrative with cinematic transitions and GPU-accelerated visuals that push what a web story can be.",
    screenshots: [shot("noomo")],
    stack: ["Three.js", "GSAP ScrollTrigger", "WebGL Shaders", "Next.js"],
    challenges: [
      "Ship a WebGL-heavy narrative that still runs on mid-range laptops",
      "Coordinate audio, motion and copy into a single scroll timeline",
    ],
    solutions: [
      "Custom shader pipeline with quality tiers per device",
      "Master timeline synchronising every layer of the story",
    ],
    outcomes: [
      "Award-shortlist recognition in the season it shipped",
      "Widely referenced case study across the agency world",
    ],
  },
  {
    slug: "aircenter",
    name: "AirCenter Space",
    title: "AirCenter Space",
    year: "2024",
    tags: ["Aerospace", "Dark Theme", "Immersive Design"],
    category: "Aerospace Platform",
    image: shot("aircenter"),
    liveUrl: "https://aircenter.space/",
    summary:
      "A visually dramatic platform for an aerospace and aviation hub — dark, cinematic and technically precise.",
    description:
      "AirCenter operates at the intersection of aerospace and enterprise. We designed a dark, cinematic platform whose typography and motion mirror the gravity of the industry it serves.",
    screenshots: [shot("aircenter")],
    stack: ["Next.js", "Three.js", "GSAP", "Sanity", "Vercel"],
    challenges: [
      "Convey aerospace credibility to institutional buyers",
      "Handle rich media without compromising loading performance",
    ],
    solutions: [
      "Cinematic hero moments paired with dense, technical documentation views",
      "Streaming media and prioritised critical CSS",
    ],
    outcomes: [
      "Positioned AirCenter as a category-defining aerospace hub",
      "Increased engagement from institutional partners",
    ],
  },
];

export const projectBySlug = (slug: string) =>
  PROJECTS.find((p) => p.slug === slug);
