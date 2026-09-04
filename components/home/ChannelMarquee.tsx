import { SocialIcon } from "@/components/layout/SocialIcon";
import { cn } from "@/lib/utils";

/**
 * Marketing, messaging and workflow tools the work spans. Deliberately
 * framed as "channels I work across" (kept as an accessible label on the
 * list even though it's no longer shown visually — see ChannelSet) rather
 * than anything implying a partnership, certification or official
 * integration.
 */
const CHANNELS = [
  { icon: "facebook", label: "Facebook" },
  { icon: "instagram", label: "Instagram" },
  { icon: "tiktok", label: "TikTok" },
  { icon: "youtube", label: "YouTube" },
  { icon: "email", label: "Email" },
  { icon: "calendly", label: "Calendly" },
  { icon: "spreadsheet", label: "Spreadsheet" },
  { icon: "n8n", label: "n8n" },
  { icon: "messenger", label: "Messenger" },
] as const;

/**
 * How many times the pill set repeats within each half of the track.
 *
 * The seamless-loop technique (see the `marquee` keyframe in globals.css)
 * requires each half to be at least as wide as the widest viewport it needs
 * to cover — if a half is narrower than the browser window, the exact
 * instant the animation loops exposes a gap of blank space before the
 * repeat catches up. Nine pills only measure roughly 1250px, well under a
 * 1920px+ desktop window, so each half repeats the set four times
 * (~5000px) to comfortably outrun even an ultrawide monitor. Repeating the
 * content doesn't slow the perceived motion — only the animation's px/s
 * speed reads as "fast" or "slow" for a continuous linear scroll, not how
 * long one full cycle takes, since the loop point itself is invisible.
 * (Re-measure and rescale `--animate-marquee`'s duration in globals.css
 * whenever CHANNELS or REPEATS_PER_HALF changes — see the comment there.)
 */
const REPEATS_PER_HALF = 4;

function ChannelSet({ hidden }: { hidden: boolean }) {
  return (
    <ul
      // Each copy carries its own trailing gap rather than the copies being
      // separated by a flex `gap` — a shared gap would leave every copy a
      // few pixels wider than its neighbour's share, and the loop would
      // stutter once per cycle instead of running seamlessly.
      className="flex shrink-0 items-center gap-3 pr-3"
      aria-hidden={hidden || undefined}
      aria-label={hidden ? undefined : "Channels I work across"}
    >
      {CHANNELS.map((channel, index) => (
        <li key={channel.label}>
          <span
            className={cn(
              "flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] py-2.5 pr-5 pl-4",
              "shadow-[0_8px_24px_-18px_rgba(0,0,0,0.9)]",
              "transition-colors duration-300 hover:border-purple-500/35 hover:bg-purple-500/[0.07]",
            )}
          >
            <SocialIcon
              name={channel.icon}
              className={cn(
                "size-4 shrink-0",
                // Alternate the two brand hues so the row reads as one
                // palette rather than a wall of mismatched logo colours.
                index % 2 === 0 ? "text-purple-300" : "text-blue-300",
              )}
            />
            <span className="text-sm font-medium whitespace-nowrap text-fg-muted">
              {channel.label}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Full-bleed right-to-left marquee of channel pills, closing out the hero.
 *
 * Pure CSS — one transform-animated track, so it runs on the compositor and
 * needs no JavaScript to start (consistent with the rest of the site's
 * animation approach). Hovering pauses it, and `prefers-reduced-motion`
 * freezes it via the global media query, leaving a readable static row.
 */
export function ChannelMarquee({ className }: { className?: string }) {
  const totalCopies = REPEATS_PER_HALF * 2;

  return (
    <div className={cn("group/marquee relative", className)}>
      <div className="mask-fade-edges relative overflow-hidden">
        <div
          className={cn(
            "flex w-max will-change-transform",
            "motion-safe:animate-marquee",
            "group-hover/marquee:[animation-play-state:paused]",
          )}
        >
          {Array.from({ length: totalCopies }, (_, index) => (
            // Only the very first copy is real content for assistive tech —
            // every repeat after it (visual filler for the loop, plus the
            // whole second half) is hidden so a screen reader doesn't
            // announce the same channel list several times over.
            <ChannelSet key={index} hidden={index > 0} />
          ))}
        </div>
      </div>
    </div>
  );
}
