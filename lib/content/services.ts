import { services } from "@/content/services";
import type { Service } from "@/types";

/**
 * Service content layer. Async by design so the source can move to a CMS
 * without changing any consumer.
 */

export async function getAllServices(): Promise<Service[]> {
  return services;
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  return services.find((service) => service.slug === slug) ?? null;
}

export async function getServiceSlugs(): Promise<string[]> {
  return services.map((service) => service.slug);
}

/** Other services, used for cross-linking at the bottom of a detail page. */
export async function getOtherServices(
  slug: string,
  limit = 3,
): Promise<Service[]> {
  const index = services.findIndex((service) => service.slug === slug);
  if (index === -1) return services.slice(0, limit);

  const rotated = [...services.slice(index + 1), ...services.slice(0, index)];
  return rotated.slice(0, limit);
}
