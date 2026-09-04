import { Quote } from "lucide-react";
import { renderInline } from "@/lib/content/richText";
import { slugify } from "@/lib/utils";
import type { ContentBlock } from "@/types";

/**
 * Renders an article's structured content.
 *
 * Headings receive stable ids derived from their text so the table of contents
 * and in-page anchors stay in sync without a second pass over the content.
 */
export function ArticleContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-brand">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading": {
            const id = slugify(block.text);
            if (block.level === 2) {
              return (
                <h2
                  key={index}
                  id={id}
                  className="scroll-mt-28 pt-10 text-2xl font-semibold text-fg first:pt-0 sm:text-[1.75rem]"
                >
                  {block.text}
                </h2>
              );
            }
            return (
              <h3
                key={index}
                id={id}
                className="scroll-mt-28 pt-8 text-lg font-semibold text-fg sm:text-xl"
              >
                {block.text}
              </h3>
            );
          }

          case "paragraph":
            return (
              <p key={index} className="mt-5">
                {renderInline(block.text)}
              </p>
            );

          case "list":
            return block.ordered ? (
              <ol key={index} className="mt-6 space-y-3">
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex gap-4">
                    <span
                      className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-purple-500/25 bg-purple-500/10 font-mono text-xs text-purple-200"
                      aria-hidden="true"
                    >
                      {itemIndex + 1}
                    </span>
                    <span>{renderInline(item)}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <ul key={index} className="mt-6 space-y-3">
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex gap-4">
                    <span
                      className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"
                      aria-hidden="true"
                    />
                    <span>{renderInline(item)}</span>
                  </li>
                ))}
              </ul>
            );

          case "quote":
            return (
              <figure key={index} className="my-10">
                <blockquote className="relative rounded-card border-l-2 border-purple-500/50 bg-white/[0.025] py-6 pr-6 pl-7">
                  <Quote
                    className="absolute top-5 right-5 size-6 text-purple-500/25"
                    aria-hidden="true"
                  />
                  <p className="text-lg leading-relaxed font-medium text-balance text-fg">
                    {renderInline(block.text)}
                  </p>
                </blockquote>
                {block.attribution ? (
                  <figcaption className="mt-3 pl-7 text-sm text-fg-subtle">
                    — {block.attribution}
                  </figcaption>
                ) : null}
              </figure>
            );

          case "callout":
            return (
              <aside
                key={index}
                className="gradient-border my-10 rounded-card bg-[linear-gradient(140deg,rgba(112,48,239,0.1),rgba(30,144,255,0.06))] p-6 sm:p-7"
              >
                <p className="text-sm font-semibold tracking-wide text-purple-200">
                  {block.title}
                </p>
                <p className="mt-3 text-fg-muted">
                  {renderInline(block.text)}
                </p>
              </aside>
            );

          case "code":
            return (
              <pre
                key={index}
                className="my-8 overflow-x-auto rounded-card border border-white/[0.08] bg-ink-deep p-5 text-sm"
              >
                <code className="font-mono text-fg-muted">{block.code}</code>
              </pre>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
