"use client";

import { useEffect, useState } from "react";
import { ListTree } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

/**
 * Sticky table of contents with scroll spy.
 *
 * Uses a single IntersectionObserver over the heading elements rather than a
 * scroll handler, so tracking the active section costs nothing per frame.
 */
export function TableOfContents({
  items,
  className,
}: {
  items: TocItem[];
  className?: string;
}) {
  const [activeId, setActiveId] = useState<string | null>(
    items[0]?.id ?? null,
  );

  useEffect(() => {
    if (items.length === 0) return;

    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-96px 0px -65% 0px", threshold: 0 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [items]);

  if (items.length < 3) return null;

  return (
    <nav aria-labelledby="toc-heading" className={className}>
      <p
        id="toc-heading"
        className="flex items-center gap-2 text-xs font-semibold tracking-widest text-fg-subtle uppercase"
      >
        <ListTree className="size-3.5" aria-hidden="true" />
        On this page
      </p>

      <ul className="mt-5 space-y-1 border-l border-white/[0.08]">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "-ml-px block border-l py-1.5 text-sm transition-colors duration-300",
                  item.level === 3 ? "pl-7" : "pl-4",
                  isActive
                    ? "border-purple-400 text-fg"
                    : "border-transparent text-fg-subtle hover:border-white/25 hover:text-fg-muted",
                )}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
