import type { CoverVariant } from "@/types";
import { cn } from "@/lib/utils";

interface CoverArtProps {
  variant: CoverVariant;
  className?: string;
  /** Larger variants add a second motif layer for article headers. */
  size?: "card" | "feature";
}

const bases: Record<CoverVariant, string> = {
  aurora:
    "bg-[linear-gradient(135deg,#1a1140,#2a1668_38%,#10305f_78%,#0b1030)]",
  mesh: "bg-[linear-gradient(150deg,#150f38,#31166b_45%,#0d2b57)]",
  grid: "bg-[linear-gradient(160deg,#120f30,#1d1547_55%,#0a1c3c)]",
  orbit: "bg-[linear-gradient(140deg,#141033,#26155e_50%,#0c2350)]",
  pulse: "bg-[linear-gradient(145deg,#170f36,#2d1466_42%,#0d2247)]",
  wave: "bg-[linear-gradient(130deg,#110e2c,#221255_48%,#0b2a55)]",
};

/**
 * Abstract cover art for articles.
 *
 * Generated from the post's `cover` key rather than a bitmap, so every article
 * has distinctive, on-brand imagery with no image weight and no layout shift.
 */
export function CoverArt({
  variant,
  className,
  size = "card",
}: CoverArtProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative isolate size-full overflow-hidden",
        bases[variant],
        className,
      )}
    >
      {/* Ambient light */}
      <div className="absolute -top-1/3 -left-1/4 size-[130%] bg-[radial-gradient(circle_at_30%_30%,rgba(112,48,239,0.45),transparent_58%)]" />
      <div className="absolute -right-1/4 -bottom-1/3 size-[120%] bg-[radial-gradient(circle_at_70%_70%,rgba(30,144,255,0.32),transparent_58%)]" />

      <Motif variant={variant} size={size} />

      {/* Edge vignette keeps text legible when overlaid */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(9,8,32,0.65))]" />
    </div>
  );
}

function Motif({
  variant,
  size,
}: {
  variant: CoverVariant;
  size: "card" | "feature";
}) {
  const stroke = size === "feature" ? 1.2 : 1;

  switch (variant) {
    case "aurora":
      return (
        <svg
          viewBox="0 0 400 240"
          preserveAspectRatio="none"
          className="absolute inset-0 size-full opacity-70"
        >
          {[0, 1, 2, 3].map((index) => (
            <path
              key={index}
              d={`M -40 ${190 - index * 34} C 90 ${150 - index * 30}, 210 ${
                210 - index * 30
              }, 440 ${120 - index * 32}`}
              fill="none"
              stroke={index % 2 === 0 ? "#A97FF7" : "#6BB6FF"}
              strokeOpacity={0.35 - index * 0.05}
              strokeWidth={stroke * 1.6}
            />
          ))}
        </svg>
      );

    case "mesh":
      return (
        <div className="absolute inset-0">
          <div className="absolute top-[18%] left-[16%] size-32 rounded-full bg-purple-500/45 blur-2xl" />
          <div className="absolute right-[14%] bottom-[16%] size-36 rounded-full bg-blue-500/35 blur-2xl" />
          <div className="absolute top-[46%] left-[52%] size-24 rounded-full bg-purple-300/25 blur-xl" />
        </div>
      );

    case "grid":
      return (
        <div className="absolute inset-0 grid-lines opacity-60 [background-size:34px_34px] [mask-image:radial-gradient(ellipse_at_50%_40%,#000_20%,transparent_75%)]" />
      );

    case "orbit":
      return (
        <svg
          viewBox="0 0 400 240"
          className="absolute inset-0 size-full opacity-75"
        >
          {[38, 62, 88, 114].map((r, index) => (
            <circle
              key={r}
              cx="200"
              cy="128"
              r={r}
              fill="none"
              stroke={index % 2 === 0 ? "#A97FF7" : "#6BB6FF"}
              strokeOpacity={0.3}
              strokeWidth={stroke}
              strokeDasharray={index === 2 ? "4 6" : undefined}
            />
          ))}
          <circle cx="200" cy="128" r="9" fill="#C9ADFB" fillOpacity="0.85" />
          <circle cx="288" cy="128" r="4.5" fill="#6BB6FF" />
          <circle cx="200" cy="66" r="3.5" fill="#A97FF7" />
        </svg>
      );

    case "pulse":
      return (
        <svg
          viewBox="0 0 400 240"
          className="absolute inset-0 size-full opacity-70"
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
            const heights = [42, 68, 34, 96, 58, 120, 46, 82, 38];
            const height = heights[index];
            return (
              <rect
                key={index}
                x={54 + index * 34}
                y={182 - height}
                width="9"
                height={height}
                rx="4.5"
                fill={index % 2 === 0 ? "#7030EF" : "#1E90FF"}
                fillOpacity={0.45 + (index % 3) * 0.12}
              />
            );
          })}
        </svg>
      );

    case "wave":
      return (
        <svg
          viewBox="0 0 400 240"
          preserveAspectRatio="none"
          className="absolute inset-0 size-full opacity-70"
        >
          {[0, 1, 2].map((index) => (
            <path
              key={index}
              d={`M -20 ${140 + index * 22} Q 80 ${100 + index * 20}, 180 ${
                140 + index * 20
              } T 420 ${140 + index * 18}`}
              fill="none"
              stroke={index === 1 ? "#6BB6FF" : "#A97FF7"}
              strokeOpacity={0.4 - index * 0.08}
              strokeWidth={stroke * 1.8}
            />
          ))}
        </svg>
      );

    default:
      return null;
  }
}
