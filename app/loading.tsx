/**
 * Route-level loading fallback. Kept intentionally minimal and fast — a
 * static, non-animated skeleton so navigation never feels like a spinner app.
 */
export default function Loading() {
  return (
    <div className="flex min-h-[60dvh] items-center justify-center">
      <div
        className="size-8 animate-spin rounded-full border-2 border-white/10 border-t-purple-400"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}
