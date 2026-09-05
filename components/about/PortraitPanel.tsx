import Image from "next/image";
import { MapPin, Sparkles } from "lucide-react";
import { GlowOrb } from "@/components/animations/GlowOrb";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

interface PortraitPanelProps {
  className?: string;
  /**
   * Path to a real photograph, e.g. "/images/bikash.jpg". When omitted the
   * panel renders a designed monogram treatment instead of an empty frame.
   */
  imageSrc?: string;
}

/**
 * Professional visual for the About sections.
 *
 * Doubles as a photo frame: pass `imageSrc` and it renders an optimised
 * next/image with the same framing and lighting.
 */
export function PortraitPanel({ className, imageSrc }: PortraitPanelProps) {
  return (
    <div
      className={cn(
        "gradient-border relative mx-auto w-full max-w-md overflow-hidden rounded-card-lg lg:max-w-none",
        className,
      )}
    >
      <div className="relative aspect-4/5 overflow-hidden rounded-card-lg bg-[linear-gradient(160deg,var(--color-surface-2),var(--color-ink)_60%)] sm:aspect-square lg:aspect-4/5">
        <GlowOrb
          color="mixed"
          size="lg"
          className="-top-1/4 left-1/2 -translate-x-1/2 opacity-70"
        />

        {/* Faint concentric rings */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="size-[70%] rounded-full border border-white/[0.06]" />
          <div className="absolute size-[52%] rounded-full border border-white/[0.05]" />
          <div className="absolute size-[34%] rounded-full border border-dashed border-white/[0.07] motion-safe:animate-[spin_54s_linear_infinite]" />
        </div>

        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`${siteConfig.person}, ${siteConfig.role}`}
            fill
            sizes="(min-width: 1024px) 40vw, (min-width: 640px) 60vw, 90vw"
            className="object-cover"
            priority={false}
          />
        ) : (
          <div className="relative flex h-full flex-col items-center justify-center px-8">
            <div className="relative flex size-32 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] backdrop-blur-sm sm:size-36">
              <span className="bg-[linear-gradient(120deg,var(--color-purple-200),var(--color-blue-300))] bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
                BG
              </span>
              <span
                aria-hidden="true"
                className="absolute -inset-3 rounded-full border border-purple-500/20"
              />
            </div>
            <p className="mt-7 text-xl font-semibold text-fg">
              {siteConfig.person}
            </p>
            <p className="mt-1.5 text-center text-sm text-fg-muted">
              {siteConfig.role}
            </p>
          </div>
        )}

        {/* Bottom overlay stack: name/role sits above the existing caption
            bar, both layered over the photo. Wrapping in one bottom-anchored
            flex column (rather than a hardcoded offset) is what lets the new
            block sit flush above the caption bar regardless of how its text
            wraps at different widths — the caption bar itself keeps its
            original classes and content unchanged. */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col">
          {/* Name & role, overlaid on the photo */}
          <div className="bg-gradient-to-t from-ink/90 via-ink/60 to-transparent px-5 pt-12 pb-3 text-center">
            <p className="text-lg font-semibold text-fg sm:text-xl">
              {siteConfig.person}
            </p>
            <p className="mt-0.5 text-xs text-fg-muted sm:text-sm">
              {siteConfig.role}
            </p>
          </div>

          {/* Caption bar */}
          <div className="border-t border-white/[0.07] bg-ink/70 px-5 py-4 backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="flex items-center gap-1.5 text-fg-muted">
                <MapPin className="size-3.5 text-purple-400" aria-hidden="true" />
                {siteConfig.location.full}
              </span>
              <span className="flex items-center gap-1.5 text-fg-subtle">
                <Sparkles className="size-3.5 text-blue-400" aria-hidden="true" />
                Available for consulting
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
