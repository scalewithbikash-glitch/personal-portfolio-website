import { posts } from "@/content/blog";
import type { BlogCategory, Post } from "@/types";

/**
 * Blog content layer.
 *
 * Every accessor is async so the underlying source can be swapped for a CMS,
 * a database or the filesystem without touching a single component.
 */

function byDateDesc(a: Post, b: Post) {
  return b.date.localeCompare(a.date);
}

export async function getAllPosts(): Promise<Post[]> {
  return [...posts].sort(byDateDesc);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return posts.find((post) => post.slug === slug) ?? null;
}

export async function getFeaturedPost(): Promise<Post> {
  const sorted = [...posts].sort(byDateDesc);
  return sorted.find((post) => post.featured) ?? sorted[0];
}

export async function getRecentPosts(limit = 3): Promise<Post[]> {
  const sorted = [...posts].sort(byDateDesc);
  return sorted.slice(0, limit);
}

/** Posts sharing a category or tag with the given post, most recent first. */
export async function getRelatedPosts(slug: string, limit = 3): Promise<Post[]> {
  const current = posts.find((post) => post.slug === slug);
  if (!current) return [];

  return [...posts]
    .filter((post) => post.slug !== slug)
    .map((post) => {
      const sharedTags = post.tags.filter((tag) =>
        current.tags.includes(tag),
      ).length;
      const score = (post.category === current.category ? 2 : 0) + sharedTags;
      return { post, score };
    })
    .sort((a, b) => b.score - a.score || byDateDesc(a.post, b.post))
    .slice(0, limit)
    .map((entry) => entry.post);
}

/** Categories that actually have at least one published article. */
export async function getUsedCategories(): Promise<BlogCategory[]> {
  const seen = new Set<BlogCategory>();
  for (const post of posts) seen.add(post.category);
  return [...seen].sort();
}

export async function getAllTags(): Promise<string[]> {
  const seen = new Set<string>();
  for (const post of posts) post.tags.forEach((tag) => seen.add(tag));
  return [...seen].sort();
}

export async function getPostSlugs(): Promise<string[]> {
  return posts.map((post) => post.slug);
}
