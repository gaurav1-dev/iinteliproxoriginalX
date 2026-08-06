import { SERVICES_DATA } from "@/lib/services-data";

export const SERVICES = SERVICES_DATA.map((service) => ({ name: service.name, desc: service.short }));

export const PROCESS = [
  { phase: "01", title: "Discovery & Infrastructure Audit", desc: "We analyze your existing workflows, database bottlenecks, and marketing tech stacks to find high-yield automation areas." },
  { phase: "02", title: "System Architecture & Strategy", desc: "Our architects map out your custom data schemas, automation flow charts, API integration nodes, and client conversion tracks." },
  { phase: "03", title: "Bespoke System Development", desc: "We build your custom web interfaces, spin up vector stores, train localized AI models, and write API bridge layers." },
  { phase: "04", title: "Integration & Automation Wiring", desc: "We stitch the workflows together: connecting webhooks, writing CRM trigger routines, and launching autonomous bot agents." },
  { phase: "05", title: "Stress Testing & Live Deployment", desc: "We trigger edge-case scenarios, run sandboxed tests on data pipelines, check latency, and deploy your live system." },
  { phase: "06", title: "Continuous Machine Learning Loop", desc: "We monitor database metrics, optimize prompt parameters, deploy updates, and adjust campaigns for maximum ROI." },
] as const;

export const METRICS = [
  { value: "83+", label: "Enterprise Projects" },
  { value: "1.7M+", label: "Leads Generated" },
  { value: "312+", label: "Automations Deployed" },
  { value: "$12M+", label: "Influenced Revenue" },
] as const;

export const TESTIMONIALS = [
  { quote: "Working with iinteliprox was a game-changer. They built a custom LLM that resolved 80% of our support tickets, giving our engineering team their time back.", name: "Elena Rostova", role: "VP of Operations, Apex Fintech", initials: "ER" },
  { quote: "Our marketing systems were completely siloed from our inventory APIs. iinteliprox rebuilt the data bridge, boosting our Meta ads conversion rates by 48%.", name: "Marcus Vance", role: "Director of Growth, NexGen Retail", initials: "MV" },
  { quote: "Their WhatsApp bot alone saves our sales reps 18 hours per week. It qualifies leads and pushes them straight into Salesforce. Highly recommended.", name: "Tariq Mahmood", role: "Founder & CEO, PropTech Solutions", initials: "TM" },
  { quote: "They don't just build sites; they construct growth engines. Our platform runs incredibly fast, ranking #1 for all our target keywords in 90 days.", name: "Sarah Jenkins", role: "Head of Marketing, Synthetix AI", initials: "SJ" },
  { quote: "The programmatic lead capture pipeline they built has driven over 14,000 qualified enterprise booking calls. Our CAC dropped by 34%.", name: "David Chen", role: "Chief Revenue Officer, SecureNet Systems", initials: "DC" },
] as const;
