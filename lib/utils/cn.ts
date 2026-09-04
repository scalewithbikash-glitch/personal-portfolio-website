import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge needs to know about the custom scales defined in
 * app/globals.css. Without this, `text-display-lg` is treated as a text colour
 * and silently dropped when it appears alongside `text-fg`.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["display-sm", "display-md", "display-lg"] }],
      rounded: [{ rounded: ["card", "card-lg"] }],
      shadow: [{ shadow: ["card", "lift", "glow-purple", "glow-blue"] }],
    },
  },
});

/** Merge conditional class names, resolving Tailwind conflicts predictably. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
