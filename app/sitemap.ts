import type { MetadataRoute } from "next";
import { getPostSlugs } from "@/lib/content/blog";
import { getServiceSlugs } from "@/lib/content/services";
import { siteConfig } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [postSlugs, serviceSlugs] = await Promise.all([
    getPostSlugs(),
    getServiceSlugs(),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/about`, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${siteConfig.url}/services`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    { url: `${siteConfig.url}/blog`, changeFrequency: "daily", priority: 0.8 },
    {
      url: `${siteConfig.url}/contact`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${siteConfig.url}/services/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const postRoutes: MetadataRoute.Sitemap = postSlugs.map((slug) => ({
    url: `${siteConfig.url}/blog/${slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...postRoutes];
}
