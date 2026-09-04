import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Hides the wordmark, leaving only the mark. */
  markOnly?: boolean;
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8 shrink-0", className)}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="logo-mark-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8B53F3" />
          <stop offset="55%" stopColor="#7030EF" />
          <stop offset="100%" stopColor="#1E90FF" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#logo-mark-gradient)" />
      <path
        d="M8.5 21.5 L13.5 15 L18 18.5 L23.5 10.5"
        stroke="white"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="23.5" cy="10.5" r="2.6" fill="white" />
    </svg>
  );
}

/** Brand lockup. Links home unless rendered inside a heading context. */
export function Logo({ className, markOnly = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-lg transition-opacity hover:opacity-90",
        className,
      )}
      aria-label="Scalewithbikash — home"
    >
      <span className="relative">
        <LogoMark className="relative z-10" />
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-0 rounded-[9px] bg-purple-500/45 opacity-0 blur-md transition-opacity duration-400 group-hover:opacity-100"
        />
      </span>
      {!markOnly ? (
        <span className="text-[1.0625rem] font-semibold tracking-tight text-fg">
          Scale
          <span className="text-fg-subtle">with</span>
          <span className="gradient-text">bikash</span>
        </span>
      ) : null}
    </Link>
  );
}
