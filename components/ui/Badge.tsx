import { cn } from "@/lib/utils";

interface BadgeProps extends React.ComponentPropsWithoutRef<"span"> {
  variant?: "default" | "brand" | "outline";
  /** Renders a small pulsing dot before the label. */
  dot?: boolean;
}

const variants = {
  default:
    "border-white/10 bg-white/[0.04] text-fg-muted",
  brand:
    "border-purple-500/30 bg-purple-500/10 text-purple-100",
  outline: "border-white/15 bg-transparent text-fg-subtle",
} as const;

export function Badge({
  variant = "default",
  dot = false,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-wide backdrop-blur-sm",
        variants[variant],
        className,
      )}
      {...props}
    >
      {dot ? (
        <span className="relative flex size-1.5" aria-hidden="true">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-blue-400 opacity-70" />
          <span className="relative inline-flex size-1.5 rounded-full bg-blue-400" />
        </span>
      ) : null}
      {children}
    </span>
  );
}
