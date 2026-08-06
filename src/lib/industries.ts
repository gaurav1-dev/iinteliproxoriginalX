import { SERVICES_DATA } from "@/lib/services-data";

export type Industry = {
  slug: string;
  name: string;
  short: string;
  description: string;
  serviceSlugs: string[];
  subServiceSlugs: string[];
};

const canonicalName = (name: string) => {
  const normalized = name.trim().toLowerCase();
  if (["e-commerce", "ecommerce", "e-commerce & retail"].includes(normalized)) return "E-commerce & Retail";
  return name.trim();
};
const slugify = (name: string) => name.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** Typed relationship data only; routes stay unpublished until unique industry content exists. */
export const INDUSTRIES: Industry[] = [...new Set(SERVICES_DATA.flatMap((service) => service.industries.map(canonicalName)))]
  .sort((a, b) => a.localeCompare(b))
  .map((name) => {
    const services = SERVICES_DATA.filter((service) => service.industries.map(canonicalName).includes(name));
    return {
      slug: slugify(name),
      name,
      short: `Relevant iinteliproX AI capabilities for organisations in ${name}.`,
      description: `A relationship map connecting ${name} operational needs to relevant services and specialised implementation capabilities.`,
      serviceSlugs: services.map((service) => service.slug),
      subServiceSlugs: services.flatMap((service) => service.subServices.filter((sub) => sub.industries.map(canonicalName).includes(name)).map((sub) => sub.slug)),
    };
  });
