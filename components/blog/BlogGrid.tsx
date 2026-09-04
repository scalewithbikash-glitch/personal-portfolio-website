"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { BlogCard } from "./BlogCard";
import { Button } from "@/components/ui/Button";
import type { PostSummary } from "@/types";
import { cn } from "@/lib/utils";

interface BlogGridProps {
  posts: PostSummary[];
  categories: string[];
  tags: string[];
  /** How many articles to show before "Load more". */
  pageSize?: number;
}

const ALL = "All";

/**
 * Filterable article grid.
 *
 * Filtering happens client-side over a summary list (no article bodies are
 * shipped), which keeps the payload small while making search instant.
 */
export function BlogGrid({
  posts,
  categories,
  tags,
  pageSize = 6,
}: BlogGridProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>(ALL);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [visible, setVisible] = useState(pageSize);
  const prefersReducedMotion = useReducedMotion();

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return posts.filter((post) => {
      if (category !== ALL && post.category !== category) return false;
      if (activeTag && !post.tags.includes(activeTag)) return false;
      if (!needle) return true;

      return (
        post.title.toLowerCase().includes(needle) ||
        post.excerpt.toLowerCase().includes(needle) ||
        post.category.toLowerCase().includes(needle) ||
        post.tags.some((tag) => tag.toLowerCase().includes(needle))
      );
    });
  }, [posts, query, category, activeTag]);

  const shown = filtered.slice(0, visible);
  const hasFilters = query !== "" || category !== ALL || activeTag !== null;

  function resetFilters() {
    setQuery("");
    setCategory(ALL);
    setActiveTag(null);
    setVisible(pageSize);
  }

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-fg-subtle"
              aria-hidden="true"
            />
            <label htmlFor="blog-search" className="sr-only">
              Search articles
            </label>
            <input
              id="blog-search"
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setVisible(pageSize);
              }}
              placeholder="Search articles…"
              className="h-12 w-full rounded-full border border-white/[0.08] bg-white/[0.03] pr-4 pl-11 text-sm text-fg placeholder:text-fg-subtle transition-all duration-300 focus:border-purple-500/45 focus:bg-white/[0.05] focus:shadow-[0_0_0_4px_rgba(112,48,239,0.14)] focus:outline-none"
            />
          </div>

          {hasFilters ? (
            <button
              type="button"
              onClick={resetFilters}
              className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 text-sm text-fg-muted transition-colors hover:border-white/20 hover:text-fg"
            >
              <X className="size-4" aria-hidden="true" />
              Clear filters
            </button>
          ) : null}
        </div>

        {/* Categories */}
        <div>
          <h2 className="sr-only">Filter by category</h2>
          <div className="flex flex-wrap gap-2">
            {[ALL, ...categories].map((item) => {
              const isActive = category === item;
              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => {
                    setCategory(item);
                    setVisible(pageSize);
                  }}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                    isActive
                      ? "border-purple-500/45 bg-purple-500/12 text-fg"
                      : "border-white/[0.08] bg-white/[0.02] text-fg-muted hover:border-white/20 hover:text-fg",
                  )}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1.5 text-xs font-medium tracking-widest text-fg-subtle uppercase">
            <SlidersHorizontal className="size-3.5" aria-hidden="true" />
            Tags
          </span>
          {tags.map((tag) => {
            const isActive = activeTag === tag;
            return (
              <button
                key={tag}
                type="button"
                aria-pressed={isActive}
                onClick={() => {
                  setActiveTag(isActive ? null : tag);
                  setVisible(pageSize);
                }}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs transition-all duration-300",
                  isActive
                    ? "border-blue-500/45 bg-blue-500/12 text-fg"
                    : "border-white/[0.06] bg-transparent text-fg-subtle hover:border-white/20 hover:text-fg-muted",
                )}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results */}
      <p className="mt-8 text-sm text-fg-subtle" role="status" aria-live="polite">
        {filtered.length === 0
          ? "No articles match these filters."
          : `Showing ${shown.length} of ${filtered.length} article${
              filtered.length === 1 ? "" : "s"
            }`}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-card border border-dashed border-white/[0.12] bg-white/[0.02] px-6 py-16 text-center">
          <h3 className="text-lg font-semibold text-fg">Nothing here yet</h3>
          <p className="mx-auto mt-2 max-w-sm text-sm text-fg-muted">
            Try a different search term, or clear the filters to see every
            article.
          </p>
          <Button
            variant="secondary"
            onClick={resetFilters}
            className="mt-6"
          >
            Clear filters
          </Button>
        </div>
      ) : (
        <>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {shown.map((post, index) => (
                <motion.li
                  key={post.slug}
                  layout={!prefersReducedMotion}
                  initial={
                    prefersReducedMotion
                      ? { opacity: 1 }
                      : { opacity: 0, y: 14 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  exit={
                    prefersReducedMotion
                      ? { opacity: 0 }
                      : { opacity: 0, scale: 0.97 }
                  }
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.35,
                    delay: prefersReducedMotion ? 0 : (index % 3) * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="h-full"
                >
                  <BlogCard post={post} />
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>

          {visible < filtered.length ? (
            <div className="mt-12 flex justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setVisible((value) => value + pageSize)}
              >
                Load more articles
              </Button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
