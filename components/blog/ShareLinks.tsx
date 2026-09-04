"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";
import { SocialIcon } from "@/components/layout/SocialIcon";
import { cn } from "@/lib/utils";

interface ShareLinksProps {
  url: string;
  title: string;
  className?: string;
}

/** Share controls for an article. Copy falls back gracefully without clipboard access. */
export function ShareLinks({ url, title, className }: ShareLinksProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const targets = [
    {
      name: "x",
      label: "Share on X",
      href: `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      name: "linkedin",
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      name: "facebook",
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
  ];

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard is unavailable (insecure context or denied permission).
      // The share links above still work, so fail quietly.
    }
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="mr-1 text-xs font-medium tracking-widest text-fg-subtle uppercase">
        Share
      </span>

      {targets.map((target) => (
        <a
          key={target.name}
          href={target.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={target.label}
          className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-fg-subtle transition-colors duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-fg"
        >
          <SocialIcon name={target.name} className="size-4" />
        </a>
      ))}

      <button
        type="button"
        onClick={copyLink}
        className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-fg-subtle transition-colors duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-fg"
      >
        {copied ? (
          <Check className="size-4 text-green-300" aria-hidden="true" />
        ) : (
          <Link2 className="size-4" aria-hidden="true" />
        )}
        <span className="sr-only">
          {copied ? "Link copied" : "Copy link to this article"}
        </span>
      </button>

      <span role="status" aria-live="polite" className="sr-only">
        {copied ? "Link copied to clipboard" : ""}
      </span>
    </div>
  );
}
