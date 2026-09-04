import { cn } from "@/lib/utils";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
  className?: string;
}

/** Label + control + error message, wired together with matching ids. */
export function FormField({
  label,
  htmlFor,
  error,
  optional = false,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={htmlFor}
        className="flex items-baseline justify-between text-sm font-medium text-fg"
      >
        {label}
        {optional ? (
          <span className="text-xs font-normal text-fg-subtle">Optional</span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p
          id={`${htmlFor}-error`}
          role="alert"
          className="text-xs text-red-300"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}

const fieldBase =
  "w-full rounded-2xl border bg-white/[0.03] px-4 py-3 text-sm text-fg placeholder:text-fg-subtle transition-all duration-300 focus:bg-white/[0.05] focus:outline-none focus:shadow-[0_0_0_4px_rgba(112,48,239,0.14)]";

export function fieldClasses(hasError?: boolean) {
  return cn(
    fieldBase,
    hasError
      ? "border-red-500/40 focus:border-red-400/60"
      : "border-white/[0.08] focus:border-purple-500/45",
  );
}
