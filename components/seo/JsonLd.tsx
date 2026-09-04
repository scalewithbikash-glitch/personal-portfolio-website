/**
 * Renders a JSON-LD block.
 *
 * The payload is produced on the server from typed objects we control, and the
 * serialised output escapes `<` so it can never terminate the script element.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
