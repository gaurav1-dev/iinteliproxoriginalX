import { SERVICES_DATA } from "@/lib/services-data";

export type ServiceGuideTopic = {
  slug: string;
  title: string;
  description: string;
  parentServiceSlug: string;
  targetKeyword: string;
  searchIntent: "informational" | "commercial" | "transactional";
  relatedSubServiceSlugs: string[];
};

const topicSlug = (value: string) => value.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** Editorial roadmap only. These topics do not create indexable routes. */
export const SERVICE_GUIDE_TOPICS: ServiceGuideTopic[] = SERVICES_DATA.flatMap((service) => [
  {
    slug: `what-is-${topicSlug(service.name)}`,
    title: `What Is ${service.name}?`,
    description: `A practical introduction to ${service.name.toLowerCase()}, common business uses, implementation choices and planning considerations.`,
    parentServiceSlug: service.slug,
    targetKeyword: `what is ${service.name.toLowerCase()}`,
    searchIntent: "informational" as const,
    relatedSubServiceSlugs: service.subServices.slice(0, 5).map((sub) => sub.slug),
  },
  {
    slug: `${topicSlug(service.name)}-cost-and-timeline`,
    title: `${service.name} Cost and Timeline Guide`,
    description: `A commercial planning guide covering the factors that influence ${service.name.toLowerCase()} scope, cost, delivery and ongoing support.`,
    parentServiceSlug: service.slug,
    targetKeyword: `${service.name.toLowerCase()} cost`,
    searchIntent: "commercial" as const,
    relatedSubServiceSlugs: service.subServices.map((sub) => sub.slug),
  },
  {
    slug: `${topicSlug(service.name)}-implementation-process`,
    title: `${service.name} Implementation Process`,
    description: `A step-by-step roadmap for discovery, solution design, implementation, testing, rollout and maintenance.`,
    parentServiceSlug: service.slug,
    targetKeyword: `${service.name.toLowerCase()} process`,
    searchIntent: "informational" as const,
    relatedSubServiceSlugs: service.subServices.slice(-5).map((sub) => sub.slug),
  },
]);
