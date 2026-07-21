// Service catalog powering /services and /services/$slug pages.
// One entry per slug. Kept as plain data so it renders on the server for SEO.

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
  features: string[];
  process: string[];
  technologies: string[];
  whyUs: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
};

const SHARED_WHY_US = [
  { title: "Fast Delivery", desc: "Sprint-based execution with weekly milestones and transparent progress reports." },
  { title: "Experienced Team", desc: "Full-stack engineers, designers and AI specialists working on your project directly — no outsourcing." },
  { title: "Scalable Architecture", desc: "Systems engineered to grow with you — from first launch to enterprise scale." },
  { title: "Modern UI/UX", desc: "Interfaces built to industry benchmarks with accessibility, motion and clarity by default." },
  { title: "Affordable Pricing", desc: "Fair, transparent pricing calibrated for startups and enterprises alike." },
  { title: "Dedicated Support", desc: "Ongoing support and iteration after launch — never abandoned mid-flight." },
];

const SHARED_FAQS = [
  { q: "How much does it cost?", a: "Every engagement is scoped uniquely. After a free consultation we send a fixed-scope quote with clear milestones and no hidden fees." },
  { q: "How long does it take?", a: "Typical timelines range from 2 to 12 weeks depending on complexity. We share a detailed timeline before you commit." },
  { q: "Will I own the source code?", a: "Yes. On final delivery you receive 100% ownership of the source code, assets and hosting accounts." },
  { q: "Do you provide maintenance?", a: "Yes — we offer monthly retainers covering updates, monitoring, feature iteration and priority support." },
];

export const SERVICES_DATA: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    short: "Custom websites and web applications engineered for speed, SEO and conversion.",
    hero: "Custom Website Development Services",
    seoTitle: "Web Development Company in Lucknow | Custom Website Development | iinteliprox",
    seoDescription: "Custom website development services by iinteliprox. React, Next.js and Node.js websites engineered for speed, SEO and conversion. Web development company based in Lucknow, serving India and worldwide.",
    keywords: ["Web Development Company", "Website Development Services", "Custom Website Development", "React Development Company", "Next.js Development", "Website Designer in Lucknow", "Corporate Website Design", "Business Website Development"],
    what: "End-to-end website design and development — from landing pages and corporate websites to enterprise web applications. We build with modern React, Next.js, TanStack Start and Node.js on a stack tuned for Lighthouse 90+.",
    why: "Your website is your most valuable digital asset. A slow, dated site loses customers before they even see your offer. A fast, thoughtful website compounds every marketing rupee you spend.",
    who: "Startups, SMBs, enterprises and creators who want a website that actually performs — not just looks good in a portfolio.",
    features: ["Responsive Design", "Lightning-Fast Performance", "SEO Ready", "Secure Codebase", "Admin Dashboard", "CMS Integration", "Payment Gateway", "API Integration", "Analytics Setup", "Ongoing Support"],
    process: ["Discovery", "Planning", "UI Design", "Development", "Testing", "Launch", "Maintenance"],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Supabase", "Firebase", "MongoDB", "PostgreSQL", "Tailwind CSS", "Framer Motion", "GSAP", "Three.js"],
    whyUs: SHARED_WHY_US,
    faqs: SHARED_FAQS,
  },
  {
    slug: "app-development",
    name: "Mobile App Development",
    short: "Native-quality iOS and Android apps built with React Native and Flutter.",
    hero: "Mobile App Development Company",
    seoTitle: "Mobile App Development Company in Lucknow | iOS & Android Apps | iinteliprox",
    seoDescription: "Mobile app development company delivering native-quality iOS, Android, Flutter and React Native apps. Custom business app development from Lucknow — serving India and worldwide.",
    keywords: ["Mobile App Development", "Android App Development", "iOS App Development", "Flutter App Development", "React Native Development", "Cross Platform App Development", "Business App Development", "Custom Mobile Apps"],
    what: "Cross-platform and native mobile applications with pixel-perfect UI, native performance, offline support and secure API integrations.",
    why: "Mobile is where your customers already are. A polished app becomes a daily habit — a distribution channel you own and can iterate on faster than any social platform.",
    who: "Consumer brands, SaaS companies and enterprises needing customer-facing or internal mobile tooling.",
    features: ["Cross-Platform Codebase", "Native Performance", "Offline Support", "Push Notifications", "In-App Payments", "Deep Linking", "Analytics & Crash Reporting", "App Store Submission", "Backend Integration", "Post-Launch Support"],
    process: ["Discovery", "Wireframing", "UI Design", "Development", "QA & Testing", "Store Submission", "Maintenance"],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Supabase", "Node.js", "PostgreSQL", "Stripe", "OneSignal"],
    whyUs: SHARED_WHY_US,
    faqs: SHARED_FAQS,
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    short: "Performance marketing, paid ads and content engines that generate qualified pipeline.",
    hero: "Digital Marketing Agency",
    seoTitle: "Best Digital Marketing Agency in Lucknow | Performance Marketing | iinteliprox",
    seoDescription: "Digital marketing agency delivering performance marketing, Google Ads, Meta Ads, SEO and lead generation. Best digital marketing agency in Lucknow serving startups and enterprises across India.",
    keywords: ["Digital Marketing Agency", "Performance Marketing", "Google Ads Agency", "Facebook Ads Agency", "Lead Generation Agency", "Content Marketing", "Instagram Marketing", "Best Digital Marketing Agency in Lucknow"],
    what: "Full-funnel digital marketing: paid acquisition, organic content, email nurtures and lifecycle campaigns — measured on pipeline, not vanity metrics.",
    why: "Marketing without measurement is guesswork. We instrument every touchpoint so you know exactly which ₹1 becomes ₹10.",
    who: "Founders, marketing leaders and growth teams ready to scale predictable pipeline.",
    features: ["Google Ads Management", "Meta Ads Campaigns", "LinkedIn Advertising", "Email Marketing", "Content Marketing", "Marketing Analytics", "Landing Page Optimization", "A/B Testing", "Attribution Setup", "Monthly Reporting"],
    process: ["Audit", "Strategy", "Creative Production", "Campaign Launch", "Optimization", "Scaling", "Reporting"],
    technologies: ["Google Ads", "Meta Business Suite", "LinkedIn Ads", "HubSpot", "Klaviyo", "Mixpanel", "GA4", "Google Tag Manager", "Zapier", "Segment"],
    whyUs: SHARED_WHY_US,
    faqs: SHARED_FAQS,
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    short: "Design systems and product interfaces users actually love.",
    hero: "UI UX Design Agency",
    seoTitle: "UI UX Design Agency | Product Design & Design Systems | iinteliprox",
    seoDescription: "UI UX design agency crafting product interfaces, design systems and mobile app design. Modern, accessible design services from iinteliprox — Lucknow, India.",
    keywords: ["UI UX Design Agency", "Product Design", "Design Systems", "Mobile App Design", "Website Design Company", "Landing Page Design", "SaaS Design"],
    what: "Research-driven UI/UX for web, mobile and internal tools. We produce clickable prototypes, component libraries and design systems your engineers can build from directly.",
    why: "Great design is compounding. It reduces support cost, increases conversion and makes your engineers faster because ambiguity disappears from the pipeline.",
    who: "Product teams shipping software people rely on daily.",
    features: ["User Research", "Wireframing", "Hi-Fi UI Design", "Interactive Prototypes", "Design Systems", "Accessibility Audits", "Motion Design", "Handoff Documentation", "Design QA", "Iteration Sprints"],
    process: ["Discovery", "Research", "Wireframes", "UI Design", "Prototype", "Testing", "Handoff"],
    technologies: ["Figma", "Framer", "Principle", "Lottie", "Rive", "Storybook", "Tailwind", "shadcn/ui"],
    whyUs: SHARED_WHY_US,
    faqs: SHARED_FAQS,
  },
  {
    slug: "seo",
    name: "Search Engine Optimization",
    short: "Technical SEO, content SEO and local SEO that gets you ranked and found.",
    hero: "SEO Services",
    seoTitle: "SEO Services Company in Lucknow | Technical, Local & Ecommerce SEO | iinteliprox",
    seoDescription: "SEO services covering technical SEO, local SEO, ecommerce SEO and content strategy. SEO company in Lucknow delivering search rankings for businesses across India.",
    keywords: ["SEO Services", "SEO Agency", "Search Engine Optimization", "Technical SEO", "Local SEO Services", "Ecommerce SEO", "SEO Company Lucknow"],
    what: "Complete SEO programs combining technical audits, on-page optimization, content strategy and authority-building to climb rankings that actually convert.",
    why: "SEO compounds. Every well-optimized page keeps working long after it's shipped — the closest thing to a free lead channel that exists.",
    who: "Businesses tired of paying for every click and ready to build organic authority.",
    features: ["Technical SEO Audit", "Keyword Research", "On-Page Optimization", "Content Strategy", "Link Building", "Local SEO / GMB", "Schema Markup", "Core Web Vitals", "Analytics Setup", "Monthly Reporting"],
    process: ["Audit", "Keyword Strategy", "Technical Fixes", "Content Production", "Link Acquisition", "Monitoring", "Refinement"],
    technologies: ["Google Search Console", "Ahrefs", "SEMrush", "Screaming Frog", "GA4", "Schema.org", "Next.js SSR", "Lighthouse"],
    whyUs: SHARED_WHY_US,
    faqs: SHARED_FAQS,
  },
  {
    slug: "branding",
    name: "Branding",
    short: "Brand identity, positioning and visual systems that make companies unmistakable.",
    hero: "Branding & Identity Design",
    seoTitle: "Branding Agency | Logo Design, Identity & Brand Systems | iinteliprox",
    seoDescription: "Branding agency delivering logo design, brand identity, positioning and visual systems for startups and enterprises. iinteliprox — Lucknow, India.",
    keywords: ["Branding Agency", "Logo Design", "Brand Identity", "Startup Branding", "Brand Guidelines", "Rebranding Services"],
    what: "Complete brand systems: strategy, naming, logo design, typography, color, motion and voice — packaged in a guideline your entire team can execute against.",
    why: "Brand is what people remember when the ad stops running. Investing in a coherent identity turns every subsequent marketing rupee into compounding equity.",
    who: "Founders launching a new company, or companies ready to reposition for the next stage.",
    features: ["Brand Strategy", "Naming", "Logo Design", "Typography System", "Color System", "Motion Identity", "Voice & Tone", "Brand Guidelines", "Launch Assets", "Rollout Support"],
    process: ["Discovery", "Strategy", "Concept", "Design", "Refinement", "Guidelines", "Rollout"],
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "After Effects", "Lottie", "Framer"],
    whyUs: SHARED_WHY_US,
    faqs: SHARED_FAQS,
  },
  {
    slug: "automation",
    name: "Business Automation",
    short: "Workflow, CRM and operational automations that give your team back their time.",
    hero: "Business Process Automation Services",
    seoTitle: "Business Automation Services | Workflow & CRM Automation | iinteliprox",
    seoDescription: "Business automation services: workflow automation, CRM automation, marketing automation and operational integrations. Automation consulting from iinteliprox — Lucknow, India.",
    keywords: ["Business Automation Services", "Workflow Automation", "CRM Automation", "Marketing Automation", "Sales Automation", "Automation Consulting", "Business Process Automation"],
    what: "Custom automation blueprints that stitch your tools together — CRM, email, calendar, forms, spreadsheets, WhatsApp — so repetitive work disappears from your team's day.",
    why: "Every hour your team spends copy-pasting between tools is an hour you're paying for the same data twice. Automation converts that overhead into margin.",
    who: "Operations, sales and marketing leaders drowning in manual admin work.",
    features: ["Workflow Mapping", "CRM Automation", "Email & WhatsApp Sequences", "Data Sync Pipelines", "Form → CRM Routing", "Reporting Dashboards", "Slack / Email Alerts", "Error Monitoring", "Documentation", "Ongoing Iteration"],
    process: ["Audit", "Blueprint", "Build", "Test", "Deploy", "Monitor", "Iterate"],
    technologies: ["n8n", "Zapier", "Make", "HubSpot", "Salesforce", "Airtable", "Google Workspace", "Slack", "Twilio", "Supabase"],
    whyUs: SHARED_WHY_US,
    faqs: SHARED_FAQS,
  },
  {
    slug: "ai-solutions",
    name: "AI Solutions",
    short: "Custom AI agents, chatbots and OpenAI integrations built for your business.",
    hero: "AI Automation & Custom AI Solutions",
    seoTitle: "AI Automation Agency in Lucknow | AI Solutions & Chatbot Development | iinteliprox",
    seoDescription: "AI automation agency delivering AI agents, chatbots, OpenAI integrations and custom AI solutions. AI company in Lucknow serving businesses across India and worldwide.",
    keywords: ["AI Automation Agency", "AI Automation Services", "AI Chatbot Development", "WhatsApp Chatbot Development", "OpenAI Integration", "AI Agent Development", "Custom AI Solutions", "AI Business Solutions", "AI Consulting Services", "Generative AI Development", "AI Company Lucknow"],
    what: "Custom AI solutions: retrieval-augmented chatbots, autonomous agents, document intelligence, WhatsApp assistants and OpenAI-powered internal tools.",
    why: "Every routine cognitive task in your business — support, quoting, qualification, summarization — is now automatable. Companies deploying AI now compound faster than the ones still watching.",
    who: "Businesses ready to move beyond ChatGPT tabs into production AI systems.",
    features: ["Custom AI Agents", "RAG Chatbots", "WhatsApp AI Assistants", "OpenAI / Gemini Integration", "Document Intelligence", "Voice AI", "Prompt Engineering", "Vector Databases", "Evaluation & Guardrails", "Production Deployment"],
    process: ["Discovery", "Use-case Design", "Data Prep", "Prototype", "Evaluation", "Deployment", "Iteration"],
    technologies: ["OpenAI", "Gemini", "Claude", "LangChain", "LlamaIndex", "Pinecone", "Supabase Vector", "n8n", "Twilio", "WhatsApp Business API"],
    whyUs: SHARED_WHY_US,
    faqs: SHARED_FAQS,
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    short: "Marketing creatives, social graphics and print assets on brand and on time.",
    hero: "Graphic Design Services",
    seoTitle: "Graphic Design Services | Social, Print & Marketing Creatives | iinteliprox",
    seoDescription: "Graphic design services for social media, print, decks and marketing campaigns. iinteliprox — Lucknow, India, serving brands worldwide.",
    keywords: ["Graphic Design Services", "Social Media Design", "Print Design", "Pitch Deck Design", "Marketing Creatives", "Ad Creative Design"],
    what: "Marketing-grade graphic design for social, print, decks, ads and campaigns — produced against a repeatable creative system so you scale without losing consistency.",
    why: "Creative is the last remaining lever in paid ads. Better creative beats bigger budgets — and consistent design across channels compounds brand recall.",
    who: "Marketing teams and founders who need constant creative output without a full in-house design department.",
    features: ["Social Media Kits", "Ad Creatives", "Pitch Decks", "Print Collateral", "Packaging Design", "Motion Graphics", "Illustration", "Icon Systems", "Brand Templates", "Campaign Rollouts"],
    process: ["Brief", "Concept", "Design", "Review", "Refinement", "Delivery", "Iteration"],
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "After Effects", "Canva Pro", "Lottie"],
    whyUs: SHARED_WHY_US,
    faqs: SHARED_FAQS,
  },
];

export const serviceBySlug = (slug: string) =>
  SERVICES_DATA.find((s) => s.slug === slug);
