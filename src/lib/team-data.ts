export interface TeamMemberProfile {
  slug: string;
  name: string;
  role: string;
  shortRole: string;
  photo: string;
  initials: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  meetingLink?: string;
  portfolioLink?: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    instagram?: string;
  };
  summary: string[];
  expertiseCategories: {
    title: string;
    items: string[];
  }[];
  allExpertise: string[];
  leadershipPhilosophy: string;
  education: {
    degree: string;
    field?: string;
    institution: string;
    location?: string;
  }[];
  techStack: string[];
  timeline: {
    period: string;
    title: string;
    description: string;
  }[];
  featuredProjects: {
    title: string;
    description: string;
    metrics?: string;
  }[];
}

export const EXECUTIVE_PROFILES: Record<string, TeamMemberProfile> = {
  "vishal-srivastava": {
    slug: "vishal-srivastava",
    name: "Vishal Srivastava",
    role: "Founder & Chief Executive Officer (CEO)",
    shortRole: "Founder & CEO",
    photo: "/vishal-srivastava.jpg",
    initials: "VS",
    tagline: "Converting complex enterprise data into actionable strategic business growth.",
    email: "vsrivastava315@gmail.com",
    phone: "+91 78304 34069",
    location: "Lucknow, UP, India / Worldwide",
    social: {
      linkedin: "https://www.linkedin.com/in/vishal-srivastava-iinteliprox",
      twitter: "https://twitter.com/iinteliprox",
      instagram: "https://instagram.com/iinteliprox",
    },
    summary: [
      "Vishal Srivastava is the Founder & CEO of iinteliproX AI and leads the company's vision for data-driven business transformation. With expertise in Data Analytics, Business Intelligence, Product Strategy, Lead Generation, and Brand Development, he helps organizations convert complex data into actionable business decisions.",
      "His focus is on designing executive dashboards, business intelligence systems, KPI frameworks, and reporting infrastructures that enable companies to scale through informed decision-making. By combining analytics with strategic thinking, he helps businesses improve operational efficiency, identify growth opportunities, and build sustainable digital ecosystems.",
      "He believes that every business decision should be backed by meaningful data rather than assumptions, making analytics a core pillar of business growth.",
    ],
    expertiseCategories: [
      {
        title: "Analytics & Business Intelligence",
        items: [
          "Data Analytics",
          "Business Intelligence",
          "Dashboard Development",
          "Data Visualization",
          "KPI Development",
          "Reporting Systems",
        ],
      },
      {
        title: "Tools & Analytics Platforms",
        items: [
          "Tableau",
          "Microsoft Power BI",
          "SQL",
          "Advanced Excel",
          "Google Colab",
          "Jupyter Notebook",
        ],
      },
      {
        title: "Strategy & Operations",
        items: [
          "Business Analysis",
          "Market Research",
          "Product Management",
          "Strategic Decision Making",
        ],
      },
      {
        title: "Growth & Brand Engineering",
        items: [
          "Lead Generation",
          "Brand Building",
        ],
      },
    ],
    allExpertise: [
      "Data Analytics",
      "Business Intelligence",
      "Dashboard Development",
      "Tableau",
      "Microsoft Power BI",
      "SQL",
      "Advanced Excel",
      "Google Colab",
      "Jupyter Notebook",
      "Data Visualization",
      "Business Analysis",
      "Market Research",
      "Lead Generation",
      "Product Management",
      "Brand Building",
      "KPI Development",
      "Reporting Systems",
      "Strategic Decision Making",
    ],
    leadershipPhilosophy:
      "Vishal leads with a relentless data-first approach, ensuring that technology, analytics, and business strategy work seamlessly together to generate measurable, compound results for clients. He firmly believes that guessing is obsolete in modern business — every executive decision, market expansion, and product optimization must be anchored in empirical data, real-time reporting infrastructures, and continuous validation.",
    education: [
      {
        degree: "Bachelor of Technology",
        field: "Computer Science Engineering",
        institution: "University of Petroleum & Energy Studies (UPES)",
        location: "Dehradun, India",
      },
      {
        degree: "Master of Science",
        field: "Data Science & Machine Learning",
        institution: "Woolf University",
        location: "Malta",
      },
    ],
    techStack: [
      "Tableau",
      "Power BI",
      "SQL",
      "Advanced Excel",
      "Python",
      "Google Colab",
      "Jupyter Notebook",
      "Data Visualization",
      "Metabase",
      "Google Analytics 4",
      "RAG Intelligence",
    ],
    timeline: [
      {
        period: "2023 – Present",
        title: "Founder & CEO — iinteliproX AI",
        description:
          "Steering enterprise vision, business intelligence frameworks, executive growth consulting, and client operations globally.",
      },
      {
        period: "2021 – 2023",
        title: "Lead Business Intelligence & Growth Strategist",
        description:
          "Designed executive dashboard suites, automated KPI monitoring tools, and market intelligence pipelines for enterprise scaling.",
      },
      {
        period: "2019 – 2021",
        title: "Senior Data Analytics & Performance Specialist",
        description:
          "Architected SQL reporting backends, custom visualization tools, and predictive lead generation models.",
      },
    ],
    featuredProjects: [
      {
        title: "Enterprise Real-Time BI Suite",
        description:
          "Unified multi-channel operational data streams into real-time Tableau & Power BI executive visualisations for high-growth SaaS firms.",
        metrics: "100% data visibility across 14 metrics",
      },
      {
        title: "Predictive Lead Generation Engine",
        description:
          "Architected automated lead scoring and intelligence pipeline connecting analytics with outbound marketing channels.",
        metrics: "42% increase in sales qualified leads",
      },
      {
        title: "Automated Executive KPI Infrastructure",
        description:
          "Built a central business reporting system providing automated weekly insights and bottleneck detection for leadership.",
        metrics: "Eliminated 15+ hours of weekly manual reporting",
      },
    ],
  },

  "gaurav-tiwari": {
    slug: "gaurav-tiwari",
    name: "Gaurav Tiwari",
    role: "Co-Founder & Chief Technology Officer (CTO)",
    shortRole: "Co-Founder & CTO",
    photo: "/gaurav-tiwari.jpg",
    initials: "GT",
    tagline: "Architecting high-performance enterprise AI software systems, cloud platforms, and autonomous workflows.",
    email: "gauravdev11@outlook.com",
    phone: "+91 63929 79131",
    location: "Lucknow, UP, India / Worldwide",
    meetingLink: "https://calendly.com/gauravwork/",
    portfolioLink: "/portfolio",
    social: {
      linkedin: "https://www.linkedin.com/in/gaurav-tiwari-iinteliprox",
      twitter: "https://twitter.com/iinteliprox",
      github: "https://github.com",
      instagram: "https://instagram.com/iinteliprox",
    },
    summary: [
      "Gaurav Tiwari is the Co-Founder and Chief Technology Officer of iinteliproX AI. He leads the company's engineering, software architecture, AI automation, and digital transformation initiatives.",
      "He specializes in designing scalable web applications, enterprise software, AI-powered business automation, and intelligent workflow systems that help organizations reduce manual work and improve operational efficiency.",
      "His expertise spans full-stack development, AI agents, workflow automation, modern UI/UX, cloud deployment, and enterprise integrations. Gaurav focuses on building technology that solves real business problems while delivering exceptional user experiences.",
      "He works closely with businesses to understand their operations, identify bottlenecks, and build custom AI-powered solutions that increase productivity, improve customer engagement, and support long-term growth.",
    ],
    expertiseCategories: [
      {
        title: "AI & Automation",
        items: [
          "AI Workflow Automation",
          "AI Agent Development",
          "OpenAI Integration",
          "Conversational AI",
          "AI Chatbots",
          "AI Voice Agents",
          "AI Sales Agents",
          "n8n Automation",
          "WhatsApp Automation",
          "CRM Automation",
          "Prompt Engineering",
        ],
      },
      {
        title: "Software Engineering",
        items: [
          "Full Stack Development",
          "React",
          "Next.js",
          "Node.js",
          "TypeScript",
          "JavaScript",
          "Express.js",
          "REST APIs",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
        ],
      },
      {
        title: "Backend & Database",
        items: [
          "SQL",
          "Supabase",
          "Firebase",
          "Database Architecture",
          "API Development",
        ],
      },
      {
        title: "Cloud & DevOps",
        items: [
          "Git",
          "GitHub",
          "Cloudflare",
          "Vercel",
          "Netlify",
          "CI/CD",
          "Domain Management",
        ],
      },
      {
        title: "UI/UX & Frontend Architecture",
        items: [
          "Product Design",
          "Design Systems",
          "Responsive Design",
          "Glassmorphism",
          "Framer Motion",
          "GSAP",
          "SaaS Dashboard Design",
        ],
      },
      {
        title: "Performance & SEO",
        items: [
          "Technical SEO",
          "Core Web Vitals",
          "Performance Optimization",
          "Accessibility",
          "Analytics",
        ],
      },
      {
        title: "Business Leadership",
        items: [
          "Product Strategy",
          "Technical Leadership",
          "Startup Operations",
          "Digital Transformation",
          "Solution Architecture",
          "Business Development",
          "Client Consulting",
          "Project Management",
        ],
      },
    ],
    allExpertise: [
      "AI Workflow Automation",
      "AI Agent Development",
      "OpenAI Integration",
      "Conversational AI",
      "AI Chatbots",
      "AI Voice Agents",
      "AI Sales Agents",
      "n8n Automation",
      "WhatsApp Automation",
      "CRM Automation",
      "Prompt Engineering",
      "Full Stack Development",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Express.js",
      "REST APIs",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "SQL",
      "Supabase",
      "Firebase",
      "Database Architecture",
      "API Development",
      "Git",
      "GitHub",
      "Cloudflare",
      "Vercel",
      "Netlify",
      "CI/CD",
      "Domain Management",
      "Product Design",
      "Design Systems",
      "Responsive Design",
      "Glassmorphism",
      "Framer Motion",
      "GSAP",
      "SaaS Dashboard Design",
      "Technical SEO",
      "Core Web Vitals",
      "Performance Optimization",
      "Accessibility",
      "Analytics",
      "Product Strategy",
      "Technical Leadership",
      "Startup Operations",
      "Digital Transformation",
      "Solution Architecture",
      "Business Development",
      "Client Consulting",
      "Project Management",
    ],
    leadershipPhilosophy:
      "Gaurav believes that technology should automate repetitive work, improve business efficiency, and empower companies to scale using AI, automation, and modern software engineering. He focuses on building robust, maintainable systems that strip away operational complexity so human talent can dedicate energy to high-value strategic growth.",
    education: [
      {
        degree: "Bachelor of Technology",
        field: "Computer Science & Engineering",
        institution: "Engineering & Technology Specialization",
        location: "India",
      },
    ],
    techStack: [
      "React",
      "Next.js",
      "TanStack Start",
      "TypeScript",
      "Node.js",
      "OpenAI",
      "n8n Automation",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Cloudflare",
      "REST APIs",
      "Git & GitHub",
    ],
    timeline: [
      {
        period: "2023 – Present",
        title: "Co-Founder & CTO — iinteliproX AI",
        description:
          "Directing software engineering, autonomous AI agent systems, serverless infrastructure, and digital transformation architectures for enterprise clients.",
      },
      {
        period: "2021 – 2023",
        title: "Principal Full-Stack & AI Systems Architect",
        description:
          "Designed sub-second web platforms, LLM vector pipelines, serverless backend microservices, and custom CRM automation engines.",
      },
      {
        period: "2019 – 2021",
        title: "Senior Software & UI/UX Engineer",
        description:
          "Engineered responsive SaaS design systems, modern web products, performance optimizations, and cloud deployment pipelines.",
      },
    ],
    featuredProjects: [
      {
        title: "Autonomous Multi-Agent Sales & Support System",
        description:
          "Engineered a custom OpenAI & n8n driven multi-agent framework integrated into WhatsApp and Web CRM handling 10,000+ monthly conversations.",
        metrics: "85% reduction in support response time",
      },
      {
        title: "High-Performance Sub-Second Web Platform",
        description:
          "Architected modern React/Next.js frontend infrastructure delivering sub-200ms page transitions and 99+ Core Web Vitals scores.",
        metrics: "99+ Lighthouse performance across all viewports",
      },
      {
        title: "Enterprise CRM & Workflow Automation Engine",
        description:
          "Built multi-channel automated workflows connecting web lead capture directly to CRM, email marketing, and real-time internal alerts.",
        metrics: "Eliminated 80% of repetitive operational tasks",
      },
    ],
  },
};
