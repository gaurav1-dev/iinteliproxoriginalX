// Service catalog powering /services and /services/$slug pages.
// One entry per slug. Kept as plain data so it renders on the server for SEO.

export type SubService = {
  name: string;
  desc: string;
  who: string;
  tech: string[];
  timeline: string;
};

export type PricingTier = {
  title: string;
  price: string;
  period?: string;
  note?: string;
  features?: string[];
  badge?: string;
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  hero: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  what: string;
  why: string;
  who: string;
  subServices: SubService[];
  benefits: string[];
  features: string[];
  technologies: string[];
  pricing: PricingTier[];
  industries: string[];
  process: string[];
  whyUs: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
};

const SHARED_WHY_US = [
  { title: "Fast Sprint Delivery", desc: "Structured agile execution with weekly demo milestones and absolute code transparency." },
  { title: "In-House Tech Experts", desc: "Senior full-stack architects, designers, and AI researchers working directly on your project." },
  { title: "Scalable Architecture", desc: "Enterprise systems engineered to handle high traffic and data volume from day one." },
  { title: "Modern UI/UX Excellence", desc: "Fluid, high-retention interfaces built with modern design principles and micro-animations." },
  { title: "Transparent Pricing", desc: "Clear, predictable scope with zero hidden charges or surprise maintenance fees." },
  { title: "24/7 Dedicated Support", desc: "Continuous SLA monitoring, bug fixes, and feature iteration post-launch." },
];

const SHARED_FAQS = [
  { q: "How is project pricing calculated?", a: "We provide transparent, fixed-scope proposals based on your required features, timeline, and tech complexity with zero hidden fees." },
  { q: "What is the typical project timeline?", a: "Timelines range from 2 weeks for fast landing pages to 8-12 weeks for complex enterprise applications and custom AI platforms." },
  { q: "Will our business own the source code & assets?", a: "Yes, upon project completion and final sign-off, 100% ownership of source code, credentials, and intellectual property transfers to you." },
  { q: "Do you offer post-launch support & maintenance?", a: "Yes, we provide flexible monthly maintenance retainers covering security updates, server monitoring, performance tuning, and feature iterations." },
];

export const SERVICES_DATA: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    short: "High-performance web applications, e-commerce platforms, custom CMS, and enterprise SaaS.",
    hero: "Custom Web Development & Digital Engineering",
    seoTitle: "Web Development Company | Custom Web Apps, E-Commerce & CMS | iinteliproX AI",
    seoDescription: "Custom website development by iinteliproX AI. Enterprise web applications, Next.js, React, custom CMS, Shopify, and progressive web apps engineered for conversion and speed.",
    keywords: ["Web Development Company", "Custom Website Development", "React Development", "Next.js Web Applications", "Shopify Development", "WordPress Development", "Headless CMS", "Enterprise Web Apps"],
    what: "We engineer production-grade websites, custom dashboards, e-commerce engines, and enterprise web applications that load in milliseconds and convert visitors into buyers.",
    why: "Your digital web platform is your core growth engine. A slow or outdated interface destroys trust and burns acquisition capital. High-performance engineering converts cold traffic into compounding revenue.",
    who: "Founders, e-commerce brands, SMBs, and scaling enterprise tech teams seeking high-conversion digital infrastructure.",
    subServices: [
      { name: "Business Websites", desc: "Sleek, high-converting brand sites built to present services with clarity and trust.", who: "Local businesses, service providers, SMBs", tech: ["React", "Next.js", "Tailwind CSS"], timeline: "1–2 Weeks" },
      { name: "Landing Pages", desc: "Conversion-optimized single page websites designed specifically for paid ads campaigns.", who: "Marketing campaigns, direct response brands", tech: ["Next.js", "Framer Motion", "Tailwind"], timeline: "3–5 Days" },
      { name: "Corporate Websites", desc: "Enterprise-grade digital experiences built for brand authority, compliance, and global reach.", who: "Mid-market & enterprise organizations", tech: ["Next.js", "TypeScript", "Payload CMS"], timeline: "3–4 Weeks" },
      { name: "Portfolio Websites", desc: "Visual interactive showcases designed for agencies, architects, executives, and creators.", who: "Creatives, agencies, consultants", tech: ["React", "Three.js", "Tailwind CSS"], timeline: "1–2 Weeks" },
      { name: "Shopify Stores", desc: "Custom custom Shopify theme builds, app integrations, and conversion funnel optimization.", who: "E-commerce brands & DTC sellers", tech: ["Shopify Liquid", "Hydrogen", "GraphQL"], timeline: "2–3 Weeks" },
      { name: "WordPress Websites", desc: "Bespoke WordPress theme architectures built for fast load times and effortless client editing.", who: "Content publishers, SMBs, agencies", tech: ["WordPress", "PHP", "MySQL"], timeline: "1–2 Weeks" },
      { name: "Custom CMS Development", desc: "Bespoke content management systems built tailored strictly around your team's publishing workflow.", who: "Content teams & media companies", tech: ["Node.js", "React", "PostgreSQL"], timeline: "3–5 Weeks" },
      { name: "Headless CMS", desc: "Decoupled frontend connected to Strapi, Sanity, or Contentful via GraphQL APIs.", who: "Omnichannel brands & multi-platform apps", tech: ["Next.js", "Sanity", "GraphQL"], timeline: "2–4 Weeks" },
      { name: "Custom Dashboards", desc: "Real-time analytical and operational dashboards built with complex data visualization.", who: "SaaS companies & internal ops teams", tech: ["React", "Recharts", "Node.js"], timeline: "3–6 Weeks" },
      { name: "E-commerce Websites", desc: "Custom multi-vendor marketplaces and custom cart platforms built for high volume transactions.", who: "Retail chains & multi-brand stores", tech: ["Next.js", "Node.js", "Stripe API"], timeline: "4–8 Weeks" },
      { name: "Enterprise Web Applications", desc: "Scalable SaaS cloud applications with role-based auth, microservices, and high concurrency support.", who: "Enterprise SaaS & B2B Tech Platforms", tech: ["React", "TypeScript", "Node.js", "PostgreSQL"], timeline: "6–12 Weeks" },
      { name: "Progressive Web Apps (PWA)", desc: "Web applications that work offline with app-like speed, push notifications, and home screen installability.", who: "Mobile-first web platforms", tech: ["React PWA", "Service Workers", "Workbox"], timeline: "3–5 Weeks" }
    ],
    benefits: [
      "Sub-second page load times maximizing Lighthouse 90+ scores",
      "Modular design systems guaranteeing visual consistency across screen sizes",
      "Seamless integration with CRMs, payment gateways, and analytics tools",
      "Enterprise security compliance and automated backup routines"
    ],
    features: [
      "Responsive Fluid Layouts", "Next.js SSR & SSG Speed", "Clean Component Architecture",
      "Custom Admin Portals", "Payment Gateway Integration", "High Security Standard",
      "Automated Database Backups", "SEO-Optimized DOM Structure"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS", "Shopify", "WordPress", "GraphQL"],
    pricing: [
      { title: "Business Website / Landing Page", price: "₹20,000", period: "one-time", note: "Starting price", features: ["Custom Responsive Layout", "SEO Structure", "Fast Loading Speed", "Contact Form Setup"] },
      { title: "WordPress Website", price: "₹25,000", period: "one-time", note: "Starting price", features: ["Bespoke Theme Design", "CMS Admin Access", "Blog / News Setup", "Security Hardening"] },
      { title: "Shopify Store", price: "₹35,000", period: "one-time", note: "Starting price", features: ["Complete Store Design", "Product Import & Collections", "Payment & Courier Integration", "Mobile Optimization"] },
      { title: "Custom E-Commerce Platform", price: "₹90,000", period: "one-time", note: "Starting price", features: ["Custom Cart & Checkout", "Custom CMS Portal", "Inventory Management", "Analytics & Tax Wiring"] },
      { title: "Enterprise Web Applications", price: "₹2,00,000+", period: "project-based", badge: "Enterprise Grade", features: ["Full SaaS Architecture", "Role-Based Security", "Custom API Integrations", "Dedicated SLA & Support"] }
    ],
    industries: ["Fintech & Banking", "E-Commerce & Retail", "Healthcare & Telemedicine", "SaaS & Tech Startups", "Real Estate", "Education & EdTech"],
    process: ["Requirements Scoping", "Wireframing & UI Prototype", "Frontend & Backend Development", "API Wiring & Integration", "QA & Load Stress Testing", "Production Launch"],
    whyUs: SHARED_WHY_US,
    faqs: SHARED_FAQS
  },

  {
    slug: "app-development",
    name: "Mobile App Development",
    short: "Native iOS, Android, and cross-platform mobile apps engineered for fluid performance.",
    hero: "Native & Cross-Platform Mobile App Engineering",
    seoTitle: "Mobile App Development Company | iOS, Android & Flutter | iinteliproX AI",
    seoDescription: "Mobile app development services by iinteliproX AI. High-performance iOS, Android, React Native, and Flutter app engineering for startups and enterprise platforms.",
    keywords: ["Mobile App Development", "Android App Development", "iOS App Development", "React Native Apps", "Flutter Development", "Enterprise Mobile Apps"],
    what: "We engineer pixel-perfect mobile applications with native speeds, offline synchronization, secure payment processing, and high user retention.",
    why: "Mobile apps create direct, habit-forming touchpoints with customers. A fluid app unlocks continuous customer engagement, push notification pipelines, and recurring revenue.",
    who: "Consumer brands, SaaS products, logistics fleets, and enterprise teams needing custom iOS and Android solutions.",
    subServices: [
      { name: "Android Apps", desc: "Native Kotlin Android applications optimized for diverse device form factors and tablet interfaces.", who: "Consumer Android platforms & hardware integrations", tech: ["Kotlin", "Jetpack Compose", "Android SDK"], timeline: "4–8 Weeks" },
      { name: "iOS Apps", desc: "Bespoke Swift iOS applications built specifically for Apple ecosystem fluid standards.", who: "High-tier consumer apps & iOS-first SaaS", tech: ["Swift", "SwiftUI", "CoreData"], timeline: "4–8 Weeks" },
      { name: "Cross-Platform Apps", desc: "Single codebase React Native or Flutter builds delivering 60fps performance across iOS and Android.", who: "Startups & scaling multi-platform products", tech: ["React Native", "Flutter", "TypeScript"], timeline: "4–6 Weeks" },
      { name: "Internal Business Apps", desc: "Custom operational mobile software for field workers, delivery tracking, warehouse, and team approvals.", who: "Operations teams & enterprise logistics", tech: ["React Native", "Node.js", "PostgreSQL"], timeline: "3–6 Weeks" },
      { name: "Customer Applications", desc: "High-retention loyalty, booking, purchasing, and community mobile apps built for end-users.", who: "Retail brands, fitness, services", tech: ["Flutter", "Firebase", "Stripe SDK"], timeline: "4–8 Weeks" },
      { name: "Enterprise Apps", desc: "High-security corporate mobile applications with single sign-on (SSO), data encryption, and custom APIs.", who: "Enterprises & corporate operations", tech: ["Swift", "Kotlin", "Enterprise SSO"], timeline: "8–12 Weeks" }
    ],
    benefits: [
      "Smooth 60fps animations and instant screen transitions",
      "Robust offline data storage and background sync",
      "App Store & Google Play Store submission management",
      "Integrated push notification messaging and analytics"
    ],
    features: [
      "Biometric Authentication", "In-App Purchases & Stripe", "Push Notification Pipelines",
      "Real-time GPS Location", "Offline Data Sync", "Cross-Platform Codebase",
      "App Store Optimization", "Crash Analytics Monitoring"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Supabase", "Node.js", "PostgreSQL", "OneSignal", "GraphQL"],
    pricing: [
      { title: "Mobile App Development Package", price: "Starting from ₹2,00,000", period: "project-based", badge: "Custom Scoped", note: "Final quotation depends on features, integrations, complexity, and deployment requirements.", features: ["iOS & Android Build", "Custom UX/UI Layout", "Backend API Integration", "App Store Submission", "Push Notification Engine", "30-Day Launch Support"] }
    ],
    industries: ["On-Demand Services", "Healthcare & Fitness", "Logistics & Supply Chain", "Fintech & Payments", "E-Commerce & Retail"],
    process: ["Product Scoping", "Interactive UX Prototypes", "Native Code Architecture", "API & Database Wiring", "Quality Assurance & Device Testing", "Store Publishing"],
    whyUs: SHARED_WHY_US,
    faqs: SHARED_FAQS
  },

  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    short: "Performance marketing, paid ads scaling, and conversion funnel optimization.",
    hero: "Performance Marketing & Customer Acquisition",
    seoTitle: "Performance Digital Marketing Agency | Meta Ads, Google Ads & CRO | iinteliproX AI",
    seoDescription: "Data-driven digital marketing agency delivering Meta Ads, Google Ads, LinkedIn Ads, remarketing, and conversion optimization to scale qualified revenue.",
    keywords: ["Digital Marketing Agency", "Performance Marketing", "Google Ads Campaigns", "Meta Ads Scaling", "LinkedIn Ads Agency", "Conversion Optimization", "Paid Acquisition"],
    what: "We run data-driven performance marketing campaigns across Meta, Google, and LinkedIn engineered strictly around CAC, ROAS, and qualified lead volume.",
    why: "Unoptimized advertising burns capital on un-qualified clicks. We build creative matrix funnels and attribution models that multiply every dollar spent into high-value clients.",
    who: "Founders, e-commerce store owners, SaaS growth leads, and B2B services scaling revenue.",
    subServices: [
      { name: "Performance Marketing", desc: "Omnichannel paid customer acquisition strategies engineered around strict CAC/LTV benchmarks.", who: "DTC brands, SaaS & scaling platforms", tech: ["GA4", "Mixpanel", "Meta Pixel"], timeline: "Ongoing" },
      { name: "Meta Ads", desc: "High-scaling Facebook and Instagram ad campaigns powered by dynamic creative testing and custom lookalikes.", who: "E-commerce, consumer brands, B2C lead gen", tech: ["Meta Ads Manager", "Creative Matrix"], timeline: "Ongoing" },
      { name: "Google Ads", desc: "High-intent Search, Performance Max, and YouTube ad funnels intercepting active buyer searches.", who: "B2B services, high-ticket products, local leads", tech: ["Google Ads Manager", "GTM"], timeline: "Ongoing" },
      { name: "LinkedIn Ads", desc: "Account-based marketing (ABM) targeting decision-makers, executives, and enterprise buyers.", who: "B2B SaaS, enterprise consulting, corporate sales", tech: ["LinkedIn Campaign Manager"], timeline: "Ongoing" },
      { name: "Conversion Optimization (CRO)", desc: "Landing page heatmapping, copy adjustments, and user funnel tweaks to maximize click-to-lead rates.", who: "Websites with high traffic & low conversion", tech: ["Hotjar", "VWO", "Google Optimize"], timeline: "Ongoing" },
      { name: "Campaign Management", desc: "End-to-end bid management, creative asset production, budget reallocation, and scaling operations.", who: "Growth stage businesses without in-house marketing", tech: ["Ads Manager", "Custom Dashboards"], timeline: "Ongoing" },
      { name: "Analytics & Attribution", desc: "Server-side tracking, multi-touch attribution setup, and real-time executive ROAS dashboards.", who: "Marketing teams needing clear ROI measurement", tech: ["GA4", "Google Tag Manager", "Looker"], timeline: "Setup + Retainer" },
      { name: "Remarketing Funnels", desc: "Custom retargeting sequences re-engaging abandoned cart visitors and past lead prospects.", who: "E-commerce & high-ticket sales pipelines", tech: ["Meta Pixel", "Google Tag Manager"], timeline: "Ongoing" }
    ],
    benefits: [
      "Immediate acquisition of active, high-intent buyer traffic",
      "Transparent attribution showing exact cost-per-lead and ROAS",
      "Relentless creative A/B testing preventing ad fatigue",
      "Custom funnel architecture capturing warm traffic drop-offs"
    ],
    features: [
      "Server-side Conversion API Setup", "Custom Audience Segmentation", "A/B Copy & Visual Testing",
      "Dynamic Keyword Insertion", "Funnel Drop-off Tracking", "Weekly KPI & ROAS Reports"
    ],
    technologies: ["Google Ads", "Meta Business Suite", "LinkedIn Ads Manager", "GA4", "Google Tag Manager", "Hotjar", "HubSpot"],
    pricing: [
      { title: "Campaign Management", price: "Starting from ₹30,000", period: "per campaign / month", note: "Advertising budget is separate and paid directly to ad platforms.", features: ["Omnichannel Ad Strategy", "Creative Asset Production", "Bid & Audience Tuning", "Landing Page CRO Guidance", "Weekly Optimization Sprints", "Dedicated Marketing Lead"] }
    ],
    industries: ["E-Commerce & DTC", "B2B SaaS & Tech", "Real Estate & Housing", "Professional Services", "Healthcare & Clinics"],
    process: ["Account & Pixel Audit", "Target Audience Matrix", "Creative Asset Production", "Campaign Launch Sprints", "Daily Optimization & Scaling", "Attribution Reporting"],
    whyUs: SHARED_WHY_US,
    faqs: SHARED_FAQS
  },

  {
    slug: "ui-ux-design",
    name: "UI/UX Redesign & Product Experience",
    short: "High-retention product interfaces, design systems, and web dashboard redesigns.",
    hero: "UI/UX Redesign & Product Experience Design",
    seoTitle: "UI UX Redesign & Product Experience Agency | Figma & Design Systems | iinteliproX AI",
    seoDescription: "UI/UX redesign & product experience agency crafting SaaS dashboards, mobile app interfaces, design systems, and conversion-focused wireframes.",
    keywords: ["UI UX Redesign", "Product Experience Design", "SaaS Dashboard Redesign", "Mobile App UI Design", "Figma Design Agency", "Design Systems"],
    what: "We transform clunky, outdated interfaces into sleek, modern SaaS dashboards, web apps, and mobile designs engineered for high user engagement.",
    why: "Poor UI creates friction, increases churn, and devalues your technology. World-class visual design instills immediate trust and makes your product effortless to use.",
    who: "SaaS founders, mobile app platforms, enterprise web applications, and outdated sites needing complete visual modernization.",
    subServices: [
      { name: "Website Redesign", desc: "Transforming dated website designs into modern, high-converting visual experiences.", who: "Businesses with low lead conversion rates", tech: ["Figma", "Framer", "Tailwind CSS"], timeline: "2–3 Weeks" },
      { name: "SaaS Dashboard Redesign", desc: "Simplifying complex data interfaces into intuitive, beautiful SaaS product dashboards.", who: "SaaS platforms & cloud software products", tech: ["Figma", "Design Systems"], timeline: "3–5 Weeks" },
      { name: "Mobile App Redesign", desc: "Modernizing native iOS and Android interface components for seamless mobile navigation.", who: "Mobile apps suffering from user churn", tech: ["Figma", "iOS / Android Guidelines"], timeline: "2–4 Weeks" },
      { name: "Conversion Optimization", desc: "UI updates engineered specifically to remove user friction points and increase form fills.", who: "E-commerce & direct-to-consumer funnels", tech: ["Figma", "UX Audits"], timeline: "1–2 Weeks" },
      { name: "User Research", desc: "User journey mapping, interview analysis, and heuristic evaluations guiding product decisions.", who: "Product leads validating new features", tech: ["User Testing", "Hotjar Analysis"], timeline: "1–2 Weeks" },
      { name: "Wireframes", desc: "Low and mid-fidelity layout blueprints defining structural hierarchy before visual styling.", who: "New products & feature launches", tech: ["Figma", "Balsamiq"], timeline: "1 Week" },
      { name: "High-Fidelity Designs", desc: "Pixel-perfect visual screens complete with modern typography, colors, and micro-interactions.", who: "Development teams ready to code", tech: ["Figma", "Adobe CC"], timeline: "2–4 Weeks" },
      { name: "Prototypes", desc: "Clickable, interactive user prototypes for investor pitches and user testing validation.", who: "Founders seeking funding or user feedback", tech: ["Figma Interactive Components"], timeline: "1–2 Weeks" }
    ],
    benefits: [
      "Drastic reduction in user onboarding friction and support tickets",
      "Cohesive design system reusable across future product features",
      "Enhanced visual authority commanding premium pricing",
      "Developer-ready Figma handoffs with clean CSS tokens"
    ],
    features: [
      "Comprehensive Figma Design System", "Dark & Light Mode Themes", "Interactive Clickable Prototypes",
      "Developer Tokens & Handoff Specs", "WCAG Accessibility Compliance", "Micro-Animation Guidelines"
    ],
    technologies: ["Figma", "Framer", "Adobe XD", "Principle", "Rive", "Storybook", "Tailwind CSS"],
    pricing: [
      { title: "UI/UX Redesign & UX Package", price: "Starting from ₹20,000", period: "project-based", badge: "High Impact", features: ["Full Visual UX Audit", "User Journey Mapping", "Hi-Fi Figma Design Screens", "Mobile Responsive Views", "Interactive Clickable Prototype", "Developer Handoff Package"] }
    ],
    industries: ["Fintech & SaaS", "HealthTech", "E-Commerce", "Enterprise Internal Software", "EdTech"],
    process: ["UX Audit & Research", "Information Architecture", "Wireframing", "Visual UI Design", "Interactive Prototyping", "Developer Handoff"],
    whyUs: SHARED_WHY_US,
    faqs: SHARED_FAQS
  },

  {
    slug: "seo",
    name: "Search Engine Optimization",
    short: "Technical SEO, local SEO, content optimization, and programmatic rank climbing.",
    hero: "Technical, Content & Local SEO Services",
    seoTitle: "SEO Services Company | Technical SEO, Local SEO & Ranking | iinteliproX AI",
    seoDescription: "Result-driven SEO services by iinteliproX AI. Technical SEO, local SEO, on-page content optimization, performance tuning, and Google Search Console mastery.",
    keywords: ["SEO Services Company", "Technical SEO Audit", "Local SEO Services", "On-Page SEO Optimization", "Off-Page SEO", "Google Search Console", "Keyword Strategy"],
    what: "We execute comprehensive technical, on-page, and local SEO strategies designed to secure top organic rankings on Google for high-intent business search keywords.",
    why: "Paid ads stop working the second budget stops. Organic SEO builds compounding search equity, capturing qualified leads every single day without ongoing click costs.",
    who: "Local businesses, e-commerce stores, B2B service providers, and brands aiming to dominate organic search.",
    subServices: [
      { name: "Technical SEO", desc: "Core Web Vitals acceleration, site crawlability repair, schema markup, and sitemap optimization.", who: "Websites facing indexing or speed penalties", tech: ["Screaming Frog", "Lighthouse", "Schema.org"], timeline: "2–4 Weeks" },
      { name: "On-page SEO", desc: "Intent-based keyword placement, title tags, header structures, and internal linking strategies.", who: "Websites with unoptimized content pages", tech: ["SurferSEO", "Ahrefs"], timeline: "Ongoing" },
      { name: "Off-page SEO", desc: "High-authority backlink acquisition, digital PR, and brand mention building.", who: "Competitive niches requiring Domain Authority boosts", tech: ["Outreach Engines", "Ahrefs"], timeline: "Ongoing" },
      { name: "Keyword Research", desc: "Mapping commercial buyer intent keywords with volume analysis and competitor gap analysis.", who: "Businesses starting new SEO campaigns", tech: ["SEMrush", "Google Keyword Planner"], timeline: "1 Week" },
      { name: "Local SEO", desc: "Google Business Profile optimization, local citation building, and map pack rank climbing.", who: "Physical businesses, clinics, regional services", tech: ["Google Business Profile", "BrightLocal"], timeline: "Ongoing" },
      { name: "Content Optimization", desc: "Updating existing copy for semantic relevancy, featured snippets, and search intent alignment.", who: "Blogs & landing pages with stalled rankings", tech: ["Clearscope", "Frase"], timeline: "Ongoing" },
      { name: "Performance Optimization", desc: "Speed optimization, image compression, script deferred execution, and TTFB reduction.", who: "Slow websites failing Core Web Vitals", tech: ["Vite", "Next.js", "WebPageTest"], timeline: "1–2 Weeks" },
      { name: "Google Search Console & Analytics", desc: "Monitoring indexation health, impression trends, query mapping, and traffic reporting.", who: "All growth-focused websites", tech: ["GSC", "GA4", "Looker Studio"], timeline: "Continuous" }
    ],
    benefits: [
      "Consistent inflow of organic, zero-acquisition-cost buyer traffic",
      "First-page visibility for commercial intent keywords in your industry",
      "Improved Google Map Pack rankings for regional business searches",
      "Lighthouse 90+ site speed and Core Web Vitals compliance"
    ],
    features: [
      "Core Web Vitals Speed Tuning", "Structured JSON-LD Schema Integration", "Commercial Keyword Mapping",
      "Google Business Profile Management", "Monthly Ranking & Impression Reports", "Competitor Backlink Audits"
    ],
    technologies: ["Google Search Console", "Ahrefs", "SEMrush", "Screaming Frog", "GA4", "Schema.org", "Lighthouse"],
    pricing: [
      { title: "SEO Growth Package", price: "₹60,000", period: "starting package", badge: "3 Months Min. Engagement", note: "SEO requires sustained momentum to compound rankings.", features: ["Technical SEO Audit & Fixes", "On-Page Content Optimization", "Local GMB & Citation Wiring", "Keyword Strategy & Rank Tracking", "Monthly Backlink Building", "Monthly Executive Traffic Report"] }
    ],
    industries: ["Local Regional Services", "E-Commerce Stores", "Legal & Financial Consulting", "Healthcare & Dental", "B2B Manufacturers"],
    process: ["Technical Site Audit", "Competitor & Keyword Strategy", "On-Page & Speed Fixes", "Local & Content Execution", "Authority Link Building", "Monthly Analytics Review"],
    whyUs: SHARED_WHY_US,
    faqs: SHARED_FAQS
  },

  {
    slug: "branding",
    name: "Branding",
    short: "Brand identity, positioning, visual guidelines, logo design, and marketing assets.",
    hero: "Brand Strategy, Visual Identity & Brand Engineering",
    seoTitle: "Branding Agency | Logo Design, Visual Identity & Guidelines | iinteliproX AI",
    seoDescription: "Enterprise branding agency by iinteliproX AI. Crafting logo designs, brand identities, typography systems, color palettes, guidelines, and marketing collateral.",
    keywords: ["Branding Agency", "Logo Design", "Brand Identity Systems", "Visual Identity Guidelines", "Corporate Rebranding", "Business Cards & Assets"],
    what: "We build unforgettable brand identity systems — combining strategy, naming, visual style guides, typography, and marketing assets that position your business as an industry leader.",
    why: "A generic or weak brand identity forces you to compete purely on price. A strong, cohesive brand system commands immediate trust and premium pricing power.",
    who: "Startups launching new platforms, scaling SMBs, and established corporations seeking a modern brand refresh.",
    subServices: [
      { name: "Logo Design", desc: "Distinctive, scalable vector logo marks and logotypes designed for digital and physical touchpoints.", who: "New startups & rebranding companies", tech: ["Adobe Illustrator", "Figma"], timeline: "1–2 Weeks" },
      { name: "Brand Identity", desc: "Cohesive visual systems encompassing logo variations, patterns, iconography, and image styles.", who: "Companies standardizing their brand", tech: ["Figma", "Illustrator"], timeline: "2–3 Weeks" },
      { name: "Visual Identity", desc: "Designing visual touchpoints across digital software, social media, and physical collateral.", who: "Brands growing across channels", tech: ["Figma", "Photoshop"], timeline: "2–4 Weeks" },
      { name: "Brand Positioning", desc: "Crafting core messaging, value propositions, mission statements, and tone-of-voice frameworks.", who: "Companies entering competitive markets", tech: ["Brand Workshops"], timeline: "1–2 Weeks" },
      { name: "Typography", desc: "Selecting and licensing custom font hierarchies engineered for legibility and aesthetic authority.", who: "Digital products & corporate identity", tech: ["Google Fonts", "Custom Type"], timeline: "1 Week" },
      { name: "Brand Colors", desc: "Curating accessible, psychological color palettes optimized for dark and light modes.", who: "Websites & app product design", tech: ["Color Systems"], timeline: "1 Week" },
      { name: "Brand Guidelines", desc: "Comprehensive brand manuals documenting exact rules for usage, spacing, colors, and fonts.", who: "Teams scaling marketing operations", tech: ["Figma", "PDF Manuals"], timeline: "2–3 Weeks" },
      { name: "Business Cards & Marketing Assets", desc: "Designing print collateral, business cards, letterheads, email signatures, and pitch decks.", who: "Executive sales & corporate networking", tech: ["InDesign", "Illustrator"], timeline: "1 Week" }
    ],
    benefits: [
      "Instant market recognition and visual distinction from competitors",
      "Complete guidelines ensuring visual alignment across all channels",
      "Higher perceived brand value enabling increased sales margins",
      "Print and digital ready asset library for immediate use"
    ],
    features: [
      "Vector Logo Formats (SVG, AI, EPS, PNG)", "Complete Brand Style Manual", "Typography & Color Matrix",
      "Social Media Avatar Kits", "Print Collateral Templates", "Dark/Light UI Theme Assets"
    ],
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "After Effects", "InDesign"],
    pricing: [
      { title: "Branding Subscription Model", price: "Starting from ₹18,000", period: "/ month", badge: "Retainer Option", features: ["Logo & Vector Identity", "Complete Brand Guidelines", "Typography & Color Palette", "Business Cards & Letterhead", "Social Media Asset Templates", "Continuous Asset Iterations"] }
    ],
    industries: ["Luxury & Consumer Goods", "Tech & AI Platforms", "Corporate & Professional Services", "Real Estate", "Hospitality"],
    process: ["Discovery & Strategy Workshop", "Logo & Concept Exploration", "Visual Identity Refinement", "Guidelines & Collateral Build", "Final Asset Handoff"],
    whyUs: SHARED_WHY_US,
    faqs: SHARED_FAQS
  },

  {
    slug: "automation",
    name: "Business Automation",
    short: "Workflow automation, CRM synchronization, HR processes, and operational efficiency.",
    hero: "Enterprise Workflow & Business Automation Systems",
    seoTitle: "Business Automation Agency | Workflow, CRM & Sales Automation | iinteliproX AI",
    seoDescription: "Business process automation services by iinteliproX AI. Workflow automation, n8n, CRM routing, email triggers, approval systems, and operations automation.",
    keywords: ["Business Automation Agency", "Workflow Automation", "CRM Automation", "n8n Automation", "Operations Automation", "Sales Automation", "Approval Workflows"],
    what: "We engineer autonomous workflow pipelines that connect your software stack — eliminating manual data entry, streamlining CRM updates, and speeding up business operations.",
    why: "Manual copy-pasting and manual approvals waste hundreds of high-value employee hours. Automation cuts operational drag and executes tasks instantly with zero error.",
    who: "Operations directors, sales teams, HR departments, and growing businesses bogged down in manual admin work.",
    subServices: [
      { name: "Workflow Automation", desc: "Connecting webhooks, n8n, Zapier, and APIs to execute multi-step workflows automatically.", who: "Operations teams with disconnected tools", tech: ["n8n", "Zapier", "Make"], timeline: "1–2 Weeks" },
      { name: "CRM Automation", desc: "Automated lead routing, stage triggers, activity logging, and instant notification alerts.", who: "Sales teams using HubSpot, Salesforce, or Zoho", tech: ["HubSpot", "Salesforce", "n8n"], timeline: "1–3 Weeks" },
      { name: "HR Automation", desc: "Streamlining employee onboarding, document generation, leave requests, and exit workflows.", who: "HR managers & corporate teams", tech: ["n8n", "Google Workspace", "Slack API"], timeline: "2–3 Weeks" },
      { name: "Operations Automation", desc: "Automating reporting aggregation, task creation, database syncing, and alert pipelines.", who: "Operations leads managing high volume data", tech: ["PostgreSQL", "n8n", "Airtable"], timeline: "2–4 Weeks" },
      { name: "Email Automation", desc: "Dynamic transactional email triggers, onboarding sequences, and automated follow-ups.", who: "Sales & customer support teams", tech: ["SendGrid", "Klaviyo", "Instantly"], timeline: "1–2 Weeks" },
      { name: "Sales Automation", desc: "Instant lead qualification, meeting booking sync, and quote generation routines.", who: "B2B sales teams scaling outbound", tech: ["HubSpot", "Calendly", "n8n"], timeline: "1–3 Weeks" },
      { name: "Approval Workflows", desc: "Multi-tiered manager approval routines via Slack/Email for purchase orders and leave.", who: "Mid-market & enterprise management", tech: ["n8n", "Slack Webhooks"], timeline: "1–2 Weeks" },
      { name: "Inventory Automation", desc: "Syncing stock counts automatically across web stores, ERPs, and marketplace channels.", who: "E-commerce retailers & distributors", tech: ["Shopify API", "Custom Node.js"], timeline: "2–4 Weeks" }
    ],
    benefits: [
      "Reduction of manual administrative labor by over 70%",
      "Instant zero-delay response times for incoming client leads",
      "Complete elimination of manual data entry errors across CRMs",
      "Seamless integration across your existing software stack"
    ],
    features: [
      "Custom n8n Workflow Pipelines", "Webhook & REST API Bridges", "Automated Error Handling & Retries",
      "Slack / Teams Real-time Alerts", "Multi-CRM Lead Synchronization", "Operational Audit Logs"
    ],
    technologies: ["n8n", "Zapier", "Make.com", "HubSpot", "Salesforce", "Airtable", "PostgreSQL", "Node.js", "Slack API"],
    pricing: [
      { title: "Automation Setup & Maintenance", price: "Setup: ₹40,000–₹50,000", period: "one-time setup", note: "Maintenance retainer: ₹8,000/month for active monitoring, error handling & flow updates.", features: ["Complete Workflow Architecture", "n8n / API Webhook Wiring", "CRM & Email Integration", "Testing & Error Retries", "Team Training & Documentation", "Continuous SLA Monitoring"] }
    ],
    industries: ["Professional Services", "E-Commerce & Retail", "Logistics & Transport", "Financial Services", "Real Estate"],
    process: ["Operational Workflow Audit", "Integration Architecture Design", "n8n Pipeline Development", "Sandboxed End-to-End Testing", "Production Deployment", "Ongoing SLA Maintenance"],
    whyUs: SHARED_WHY_US,
    faqs: SHARED_FAQS
  },

  {
    slug: "ai-solutions",
    name: "AI Solutions",
    short: "Custom AI agents, voice callers, AI chatbots, knowledge base RAG, and AI sales engines.",
    hero: "Custom AI Solutions & Autonomous AI Agents",
    seoTitle: "AI Solutions & Custom AI Agents Agency | Chatbots & Voice AI | iinteliproX AI",
    seoDescription: "Enterprise AI solutions by iinteliproX AI. AI Chatbots, AI Voice Calling Agents, Knowledge Base RAG Assistants, HR AI Agents, and custom LLM integrations.",
    keywords: ["AI Solutions Agency", "AI Chatbots Development", "AI Voice Agents", "AI Calling Agents", "RAG Knowledge Base", "Custom AI Assistants", "OpenAI Integration"],
    what: "We engineer autonomous custom AI agents, voice calling systems, support chatbots, and retrieval-augmented (RAG) knowledge assistants tailored to your business data.",
    why: "Human customer support and manual sales outreach are expensive and hard to scale 24/7. AI agents respond instantly, qualify leads, and handle support requests in seconds.",
    who: "Companies aiming to automate customer support, lead qualification, appointment booking, and internal knowledge search with production AI.",
    subServices: [
      { name: "AI Chatbots", desc: "High-intelligence conversational bots trained on your custom website and support documentation.", who: "Customer service teams & e-commerce sites", tech: ["OpenAI", "LangChain", "Pinecone"], timeline: "1–3 Weeks" },
      { name: "AI Voice Agents", desc: "Natural-sounding voice agents capable of conducting human-like telephone conversations.", who: "Call centers & sales outreach operations", tech: ["Vapi", "Retell AI", "Twilio"], timeline: "2–4 Weeks" },
      { name: "AI Calling Agents", desc: "Automated inbound and outbound phone agents for lead qualification and support triage.", who: "High-volume sales & service desks", tech: ["Bland AI", "Twilio API"], timeline: "2–4 Weeks" },
      { name: "AI Sales Agents", desc: "Autonomous sales bots that answer prospect questions, handle objections, and close bookings.", who: "B2B SaaS & high-ticket agencies", tech: ["OpenAI", "HubSpot API"], timeline: "2–4 Weeks" },
      { name: "AI Customer Support", desc: "24/7 autonomous support triage resolving up to 80% of routine tickets instantly.", who: "E-commerce stores & SaaS products", tech: ["Zendesk API", "Custom LLM"], timeline: "2–3 Weeks" },
      { name: "HR Agents", desc: "Internal AI assistants answering employee questions regarding policies, benefits, and IT help.", who: "Corporate HR departments", tech: ["Pinecone", "OpenAI", "Slack Bot"], timeline: "2–3 Weeks" },
      { name: "Product Management Agents", desc: "AI bots analyzing customer feedback and auto-generating feature specs and user stories.", who: "Product managers & dev leads", tech: ["Claude 3.5", "Jira API"], timeline: "2–3 Weeks" },
      { name: "Appointment Booking Agents", desc: "Conversational bots that schedule appointments directly into Calendly or Google Calendar.", who: "Clinics, salons, consultants, real estate", tech: ["Google Calendar API", "n8n"], timeline: "1–2 Weeks" },
      { name: "Knowledge Base Agents (RAG)", desc: "Retrieval Augmented Generation search engines trained on internal PDFs, Notion, and docs.", who: "Legal firms, research, enterprise ops", tech: ["Vector DB", "LlamaIndex"], timeline: "2–4 Weeks" },
      { name: "Custom AI Assistants", desc: "Bespoke LLM application workflows engineered for specialized industry cognitive tasks.", who: "Specialized enterprise domain applications", tech: ["Python", "FastAPI", "OpenAI"], timeline: "3–6 Weeks" }
    ],
    benefits: [
      "Instant 24/7 customer support coverage with zero queue waiting times",
      "Automatic handling and resolution of up to 80% of repetitive inquiries",
      "Strict data privacy, prompt guardrails, and enterprise security",
      "Seamless synchronization with CRMs and booking calendars"
    ],
    features: [
      "Custom RAG Vector Embeddings", "Multi-Lingual Conversation Support", "Voice Telephony Integrations (Twilio)",
      "Strict Prompt Guardrails & Safety", "Human Fallback Triage Routing", "Real-Time Conversation Dashboards"
    ],
    technologies: ["OpenAI API", "Claude 3.5", "Gemini", "LangChain", "LlamaIndex", "Pinecone", "Supabase Vector", "Twilio", "Vapi"],
    pricing: [
      { title: "AI Solutions Package", price: "Setup: Starting from ₹50,000", period: "one-time setup", note: "Maintenance: ₹25,000/month for LLM fine-tuning, prompt updates, and vector maintenance.", features: ["Custom AI Agent Architecture", "Knowledge Base RAG Training", "WhatsApp / Web Chat Integration", "Twilio Voice / Calling Setup", "Safety Guardrails & Testing", "Monthly Prompt Optimization"] }
    ],
    industries: ["Fintech & Banking", "Healthcare & Clinics", "E-Commerce", "Real Estate", "Customer Support Centers"],
    process: ["Data & Use-Case Audit", "Vector Embedding & RAG Wiring", "LLM Prompt Architecture", "Integration & Guardrail Testing", "Live Deployment", "Continuous Model Tuning"],
    whyUs: SHARED_WHY_US,
    faqs: SHARED_FAQS
  },

  {
    slug: "graphic-design",
    name: "Graphic Design",
    short: "Social media creatives, pitch decks, brochures, packaging, and marketing collateral.",
    hero: "High-Impact Graphic Design & Marketing Collateral",
    seoTitle: "Graphic Design Services | Social Creatives, Decks & Assets | iinteliproX AI",
    seoDescription: "Professional graphic design services by iinteliproX AI. Social media graphics, investor pitch decks, brochures, product packaging, and marketing material.",
    keywords: ["Graphic Design Services", "Social Media Creatives", "Pitch Deck Design", "Brochure Design", "Packaging Design", "Marketing Banners"],
    what: "We design high-converting visual marketing creatives — from social media campaign graphics to investor pitch decks, print packaging, and event banners.",
    why: "Design is the primary visual signal of product quality. Striking graphics capture attention in busy feeds and communicate professionalism in executive boardrooms.",
    who: "Marketing teams needing constant creative output, founders raising capital, and brands launching products.",
    subServices: [
      { name: "Social Media Creatives", desc: "High-engaging post designs, story kits, and carousel sets formatted for Instagram, LinkedIn, and Facebook.", who: "Brands building social presence", tech: ["Figma", "Photoshop"], timeline: "2–4 Days" },
      { name: "Brochures", desc: "Elegant multi-page PDF and print product catalogs and corporate sales brochures.", who: "B2B sales teams & real estate", tech: ["InDesign", "Illustrator"], timeline: "3–6 Days" },
      { name: "Pitch Decks", desc: "Investor-ready presentation slides crafted for high visual impact and clear storytelling.", who: "Startups raising seed or Series A", tech: ["Figma", "PowerPoint"], timeline: "4–7 Days" },
      { name: "Packaging", desc: "Die-line product packaging design and label layouts for DTC consumer retail items.", who: "E-commerce & retail brands", tech: ["Illustrator", "3D Mockups"], timeline: "1–2 Weeks" },
      { name: "Banners", desc: "High-resolution digital display ad banners and large format print event trade show banners.", who: "Event organizers & ad campaigns", tech: ["Photoshop", "Illustrator"], timeline: "2–4 Days" },
      { name: "Marketing Material", desc: "Flyers, posters, email headers, infographics, and promotional print collateral.", who: "Marketing teams launching promos", tech: ["Figma", "Illustrator"], timeline: "2–5 Days" },
      { name: "Brand Assets", desc: "Icon packs, custom illustrations, badges, and visual marketing elements.", who: "Design teams standardizing assets", tech: ["Illustrator", "Figma"], timeline: "3–6 Days" }
    ],
    benefits: [
      "Consistent, visual brand presentation across all digital and print mediums",
      "Rapid turnaround times for high-volume marketing campaign demands",
      "Investor-grade pitch deck layouts engineered to raise capital",
      "Print-ready vectors with correct CMYK color profiles and bleed lines"
    ],
    features: [
      "Pixel-Perfect Formats (PNG, JPG, PDF, SVG)", "Editable Source Files (Figma / Illustrator)",
      "Print CMYK & Digital RGB Versions", "Social Carousel & Template Kits", "3D Packaging Renderings"
    ],
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "InDesign", "After Effects"],
    pricing: [
      { title: "Graphic Design Package", price: "Starting from ₹15,000", period: "project-based", features: ["Custom Marketing Creatives", "Editable Figma/AI Source Files", "Multiple Design Revisions", "Print & Digital Exports", "Rapid Turnaround Sprints"] }
    ],
    industries: ["DTC Consumer Brands", "Tech Startups", "Real Estate", "Events & Entertainment", "Corporate Consulting"],
    process: ["Creative Brief Review", "Concept & Moodboard", "Design Draft Production", "Client Feedback Sprints", "Final Asset Handoff"],
    whyUs: SHARED_WHY_US,
    faqs: SHARED_FAQS
  },

  {
    slug: "lead-generation",
    name: "Lead Generation",
    short: "B2B prospect list building, automated cold email outreach, and qualified sales pipelines.",
    hero: "B2B Lead Generation & Outbound Sales Automation",
    seoTitle: "B2B Lead Generation Agency | Outbound Sales & Prospecting | iinteliproX AI",
    seoDescription: "Data-driven B2B lead generation by iinteliproX AI. Prospect list building, cold email outreach campaigns, LinkedIn automation, and sales funnel routing.",
    keywords: ["B2B Lead Generation Agency", "Qualified Prospect Lists", "Cold Email Outreach", "LinkedIn Automation", "Sales Funnel Creation", "Outbound Sales"],
    what: "We build outbound lead generation engines that discover verified decision-makers, execute cold email/LinkedIn outreach, and deliver qualified sales calls directly to your calendar.",
    why: "Waiting passively for inbound leads creates unpredictable revenue spikes. Outbound lead engines systematically generate sales meetings with ideal decision-makers every week.",
    who: "B2B SaaS companies, IT consultancies, high-ticket agencies, and corporate service providers.",
    subServices: [
      { name: "B2B Lead Generation", desc: "Data-driven outbound prospecting campaigns targeting decision-makers matching your ideal client profile (ICP).", who: "B2B service providers & SaaS", tech: ["Apollo.io", "Sales Navigator"], timeline: "Ongoing" },
      { name: "Qualified Prospect Lists", desc: "Extracting and manually verifying clean email addresses, phone numbers, and LinkedIn profiles.", who: "Sales teams needing fresh lead lists", tech: ["Clay", "NeverBounce"], timeline: "1 Week" },
      { name: "Email Outreach", desc: "Automated multi-domain cold email sequences written for high deliverability and response rates.", who: "B2B outbound sales teams", tech: ["Instantly", "Smartlead"], timeline: "Ongoing" },
      { name: "LinkedIn Outreach", desc: "Automated connection requests, personal messages, and content touchpoints targeting decision-makers.", who: "Executives & enterprise sales leads", tech: ["LinkedIn Sales Navigator"], timeline: "Ongoing" },
      { name: "CRM Integration", desc: "Automatic routing of interested prospects straight into your CRM with meeting booking alerts.", who: "Sales reps managing pipelines", tech: ["HubSpot", "n8n"], timeline: "1 Week" },
      { name: "Sales Funnel Creation", desc: "High-converting outbound landing pages and calendar booking funnels optimized for sales calls.", who: "Outbound campaigns needing booking pages", tech: ["Next.js", "Calendly"], timeline: "1–2 Weeks" }
    ],
    benefits: [
      "Consistent weekly delivery of qualified B2B sales discovery calls",
      "High domain deliverability with warm-up domain infrastructure",
      "Clean, 98%+ verified decision-maker prospect contact data",
      "Direct integration with your existing CRM sales pipeline"
    ],
    features: [
      "Verified Ideal Client Prospect Lists", "Secondary Outreach Domain Infrastructure", "Spam-Free Cold Email Copywriting",
      "LinkedIn Connection Sequences", "Automated Calendar Booking Wiring", "Weekly Response & Booking Reports"
    ],
    technologies: ["Apollo.io", "LinkedIn Sales Navigator", "Instantly.ai", "Smartlead", "Clay", "HubSpot"],
    pricing: [
      { title: "Campaign-Based Outbound Package", price: "Starting from ₹30,000", period: "per campaign / month", note: "Advertising and secondary domain costs are separate.", features: ["ICP Definition & List Building", "Secondary Domain Setup & Warmup", "Persuasive Cold Email Sequences", "LinkedIn Prospecting Automation", "CRM & Calendar Sync", "Weekly Sales Pipeline Reviews"] }
    ],
    industries: ["B2B SaaS & Tech", "IT Consulting", "Commercial Real Estate", "Financial & Legal Services", "Manufacturing"],
    process: ["ICP & Data Scoping", "Domain Setup & Inbox Warmup", "List Building & Verification", "Copywriting & Campaign Launch", "Positive Response Qualification", "Calendar Booking"],
    whyUs: SHARED_WHY_US,
    faqs: SHARED_FAQS
  },

  {
    slug: "social-media-management",
    name: "Social Media Management",
    short: "Complete social growth, platform management, content planning, and analytics.",
    hero: "Complete Social Media Management & Organic Growth",
    seoTitle: "Social Media Management Agency | Facebook, Instagram, LinkedIn & X | iinteliproX AI",
    seoDescription: "Social media management agency by iinteliproX AI. End-to-end content planning, posting, community engagement, and analytics for Instagram, LinkedIn, Facebook, and YouTube.",
    keywords: ["Social Media Management Agency", "Instagram Growth", "LinkedIn Management", "Facebook Content Strategy", "Community Management", "Social Analytics"],
    what: "We handle your end-to-end social media operations across Facebook, Instagram, LinkedIn, X, Pinterest, Threads, and YouTube — driving brand authority and organic audience growth.",
    why: "An inactive social media presence destroys brand credibility. Consistent, strategic content builds market authority, nurtures warm prospects, and drives organic traffic.",
    who: "Founders, consumer brands, corporate enterprises, and SMBs wanting a high-caliber social presence without spending internal hours.",
    subServices: [
      { name: "Facebook Management", desc: "Engaging page posts, video reels, group management, and audience growth strategies.", who: "Consumer brands & local SMBs", tech: ["Meta Suite", "Canva Pro"], timeline: "Ongoing" },
      { name: "Instagram Growth", desc: "Aesthetic grid layouts, trending Reels creation, carousel graphics, and story campaigns.", who: "DTC brands, lifestyle, creators", tech: ["CapCut", "Figma"], timeline: "Ongoing" },
      { name: "LinkedIn Leadership", desc: "Executive thought leadership posts, company page updates, and B2B engagement strategies.", who: "B2B founders & corporate brands", tech: ["Figma", "Taplio"], timeline: "Ongoing" },
      { name: "X (Twitter) Strategy", desc: "High-impact thread creation, industry commentary, and community engagement.", who: "Tech startups, web3, AI platforms", tech: ["Typefully"], timeline: "Ongoing" },
      { name: "Pinterest & Threads", desc: "Visual pin boards and conversational thread posts driving backlink traffic.", who: "Visual brands & e-commerce", tech: ["Pinterest Ads API"], timeline: "Ongoing" },
      { name: "YouTube Operations", desc: "Shorts creation, video SEO title/description tags, and custom thumbnail designs.", who: "Brands creating video content", tech: ["Adobe Premiere", "Photoshop"], timeline: "Ongoing" },
      { name: "Content Planning & Strategy", desc: "Monthly content calendars, topic pillars, scriptwriting, and visual asset scheduling.", who: "All social accounts", tech: ["Notion", "Buffer"], timeline: "Monthly" },
      { name: "Community & Analytics", desc: "Daily comment monitoring, inbox reply management, and comprehensive monthly growth reports.", who: "All social accounts", tech: ["GA4", "Metrcs"], timeline: "Monthly" }
    ],
    benefits: [
      "Consistent, active posting schedule across all major social networks",
      "High-production visual graphics, carousels, and engaging short videos",
      "Proactive community management turning comments into warm leads",
      "Clear monthly analytics reporting growth metrics and top content"
    ],
    features: [
      "Custom Monthly Content Calendar", "Graphic Design & Reel Editing", "Platform-Optimized Copywriting",
      "Hashtag & Keyword Tagging", "Inbox & Comment Moderation", "Monthly Growth Analytics Report"
    ],
    technologies: ["Figma", "Adobe Premiere", "Meta Business Suite", "Taplio", "CapCut", "Buffer", "Hootsuite"],
    pricing: [
      { title: "Social Media Growth Retainer", price: "Starting from ₹25,000", period: "/ month", badge: "Full Operations", features: ["Platforms: FB, IG, LinkedIn, X", "12-16 Custom Posts / Month", "Reels & Carousel Graphics", "Content Strategy & Copywriting", "Community Comment Moderation", "Monthly Growth Analytics Report"] }
    ],
    industries: ["E-Commerce & DTC", "Corporate & B2B", "Real Estate", "Hospitality & Dining", "Personal Brands"],
    process: ["Social Audit & Strategy", "Monthly Content Calendar Approval", "Asset Design & Reel Production", "Scheduled Publishing", "Community Moderation", "Monthly Analytics Review"],
    whyUs: SHARED_WHY_US,
    faqs: SHARED_FAQS
  },

  {
    slug: "manufacturer-global-marketplace",
    name: "Manufacturer Support & Global Marketplace Management",
    short: "Amazon Global, Alibaba, IndiaMART, export consultation, catalog optimization, and global scale.",
    hero: "Global Marketplace Expansion & Manufacturer Growth",
    seoTitle: "Global Marketplace Management & Manufacturer Export Agency | iinteliproX AI",
    seoDescription: "Global marketplace management for manufacturers by iinteliproX AI. Scale on Amazon Global, Alibaba, IndiaMART, eBay, Etsy, export consultation, and international brand building.",
    keywords: ["Manufacturer Export Growth", "Amazon Global Selling", "Alibaba Supplier Management", "IndiaMART Optimization", "Global Marketplace Agency", "Export Consultation"],
    what: "We partner with Indian and global manufacturers to expand international sales channels across Amazon Global, Alibaba, IndiaMART, ThomasNet, eBay, Etsy, Flipkart, and DTC stores.",
    why: "Manufacturers make world-class products but often struggle with international e-commerce listings, export compliance, and digital marketing. We build the entire global sales bridge.",
    who: "Manufacturers, exporters, industrial brands, and OEM suppliers aiming to export products worldwide.",
    subServices: [
      { name: "Amazon Global Selling", desc: "Setting up Amazon US, UK, EU, and UAE seller accounts, FBA logistics, and international PPC campaigns.", who: "Exporters selling consumer products globally", tech: ["Amazon Seller Central", "Helium10"], timeline: "3–6 Weeks" },
      { name: "Alibaba & IndiaMART", desc: "B2B seller storefront creation, verified supplier badge setup, catalog ranking, and RFQ response systems.", who: "Industrial manufacturers seeking B2B export buyers", tech: ["Alibaba Supplier Portal"], timeline: "2–4 Weeks" },
      { name: "ThomasNet & Global B2B Portals", desc: "Industrial directory setup, technical specification catalogs, and OEM inquiry capture.", who: "Precision machinery & component makers", tech: ["ThomasNet"], timeline: "2–3 Weeks" },
      { name: "Amazon India & Flipkart", desc: "Domestic e-commerce expansion on India's top marketplaces with catalog optimization and brand registry.", who: "Indian brands scaling domestically", tech: ["Flipkart Seller Hub"], timeline: "2–3 Weeks" },
      { name: "WooCommerce & Shopify Stores", desc: "Direct-to-consumer (DTC) international e-commerce web stores with multi-currency and global shipping wiring.", who: "Brands creating owned export sales channels", tech: ["Shopify", "WooCommerce"], timeline: "3–5 Weeks" },
      { name: "Export Consultation & Readiness", desc: "Guidance on international shipping, HS codes, customs documentation, and regional compliance.", who: "First-time exporting manufacturers", tech: ["Export Documentation"], timeline: "2–3 Weeks" },
      { name: "Catalog & Product Listing Optimization", desc: "A+ content design, technical spec formatting, SEO keywords, and multi-lingual translations.", who: "Brands with low marketplace sales", tech: ["Figma", "Helium10"], timeline: "2–4 Weeks" },
      { name: "Product Photography Guidance", desc: "Directing white-background studio shots, 3D renders, and infographic lifestyle images.", who: "Manufacturers launching new SKUs", tech: ["Studio Guidelines"], timeline: "1–2 Weeks" }
    ],
    benefits: [
      "Direct international export sales channels established across top global portals",
      "Higher B2B catalog rankings on Alibaba, IndiaMART, and Amazon Global",
      "End-to-end management covering listings, PPC ads, and customer inquiries",
      "Includes complete Social Media Management to build global brand trust"
    ],
    features: [
      "Multi-Marketplace Storefront Builds", "Amazon A+ Content & Storefront Design", "B2B Inquiry Routing Automation",
      "Global Payment & Currency Integration", "International SEO & PPC Ad Campaigns", "Full Social Media Management Included"
    ],
    technologies: ["Amazon Seller Central", "Alibaba", "IndiaMART", "Helium10", "Shopify", "WooCommerce", "GA4"],
    pricing: [
      { title: "Complete Global Setup", price: "Starting from ₹3,00,000", period: "one-time setup", badge: "Enterprise Package", note: "Includes store setup, cataloging, A+ content & export strategy.", features: ["Marketplace Account Setup (Amazon, Alibaba, IndiaMART)", "Complete Catalog Optimization & A+ Content", "Export Readiness & Shipping Consultation", "Custom Shopify Export Website Build", "PPC Advertising Architecture"] },
      { title: "Monthly Growth & Management", price: "₹50,000", period: "/ month", badge: "All-Inclusive", note: "★ Includes full Social Media Management package at zero extra cost!", features: ["Marketplace Listing Maintenance & PPC Ads", "Daily Inquiry & Order Monitoring", "Catalog Updates & SEO Tuning", "Social Media Management Included (FB, IG, LinkedIn, X)", "Monthly Global Sales & Export Reports"] }
    ],
    industries: ["Industrial Machinery", "Textiles & Garments", "Handicrafts & Decor", "Automotive Parts", "Chemicals & Consumer Goods"],
    process: ["Export Audit & Product Evaluation", "Marketplace Account & Store Setup", "Cataloging, A+ Content & Photography", "Website & Payment Integration", "Global PPC & Social Media Launch", "Continuous Management & Scale"],
    whyUs: SHARED_WHY_US,
    faqs: SHARED_FAQS
  }
];

export const serviceBySlug = (slug: string): Service | undefined => {
  // Support both ui-ux-design and ui-ux-redesign
  if (slug === "ui-ux-redesign") {
    return SERVICES_DATA.find((s) => s.slug === "ui-ux-design");
  }
  return SERVICES_DATA.find((s) => s.slug === slug);
};
