import Link from "next/link";
import { Clock } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { CoverArt } from "./CoverArt";
import { formatDate } from "@/lib/utils";
import type { PostSummary } from "@/types";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: PostSummary;
  className?: string;
  /** `featured` renders a wide two-column layout for the lead article. */
  variant?: "default" | "featured";
}

export function BlogCard({
  post,
  className,
  variant = "default",
}: BlogCardProps) {
  const featured = variant === "featured";

  return (
    <Card
      interactive
      padding="none"
      className={cn("group h-full", className)}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={cn(
          "flex h-full flex-col focus-visible:outline-none",
          featured && "md:flex-row",
        )}
      >
        <div
          className={cn(
            "relative shrink-0 overflow-hidden",
            featured
              ? "aspect-16/9 md:aspect-auto md:w-[46%]"
              : "aspect-16/9",
          )}
        >
          <CoverArt
            variant={post.cover}
            size={featured ? "feature" : "card"}
            className="transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
          />
          <span className="absolute top-4 left-4 rounded-full border border-white/15 bg-ink/60 px-3 py-1 text-[0.7rem] font-medium text-fg backdrop-blur-md">
            {post.category}
          </span>
        </div>

        <div
          className={cn(
            "flex flex-1 flex-col p-6",
            featured && "justify-center p-7 sm:p-9",
          )}
        >
          <div className="flex items-center gap-3 text-xs text-fg-subtle">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5" aria-hidden="true" />
              {post.readingTime} min read
            </span>
          </div>

          <h3
            className={cn(
              "mt-3 font-semibold text-fg transition-colors duration-300 group-hover:text-purple-100",
              featured ? "text-xl sm:text-2xl" : "text-lg",
            )}
          >
            {post.title}
          </h3>

          <p
            className={cn(
              "mt-3 text-sm leading-relaxed text-fg-muted",
              featured ? "line-clamp-4" : "line-clamp-3",
            )}
          >
            {post.excerpt}
          </p>

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
            {post.tags.slice(0, featured ? 3 : 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[0.7rem] text-fg-subtle"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </Card>
  );
}
