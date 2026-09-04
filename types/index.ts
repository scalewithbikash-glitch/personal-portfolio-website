import type { LucideIcon } from "lucide-react";

/* --------------------------------- Services -------------------------------- */

export interface ServiceProcessStep {
  /** Zero-padded display number, e.g. "01" */
  step: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  /** One-line summary used on cards and in navigation. */
  shortDescription: string;
  /** Two to three sentences used on the detail page hero. */
  description: string;
  icon: LucideIcon;
  /** Short label shown above the title on cards. */
  category: string;
  benefits: string[];
  /** The situation a client is usually in before this engagement. */
  problem: {
    heading: string;
    body: string;
    points: string[];
  };
  /** How the engagement addresses it. */
  solution: {
    heading: string;
    body: string;
  };
  helpsWith: string[];
  deliverables: string[];
  process: ServiceProcessStep[];
  outcomes: { label: string; description: string }[];
  audience: string[];
  faq: FaqItem[];
  /** Typical engagement length, shown as a fact in the hero. */
  timeline: string;
}

/* ---------------------------------- Blog ----------------------------------- */

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "callout"; title: string; text: string }
  | { type: "code"; language?: string; code: string };

export interface Author {
  name: string;
  role: string;
  initials: string;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  tags: string[];
  /** ISO date, YYYY-MM-DD */
  date: string;
  author: Author;
  readingTime: number;
  featured?: boolean;
  /** Gradient key used to render the article's abstract cover art. */
  cover: CoverVariant;
  content: ContentBlock[];
  seo?: {
    title?: string;
    description?: string;
  };
}

/** Everything needed to render a card or list item, without the article body. */
export type PostSummary = Omit<Post, "content" | "seo">;

export const BLOG_CATEGORIES = [
  "AI Marketing",
  "Automation",
  "SEO & Content",
  "Strategy",
  "Analytics",
  "Growth",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type CoverVariant = "aurora" | "mesh" | "grid" | "orbit" | "pulse" | "wave";

/* --------------------------------- Contact --------------------------------- */

export interface ContactSubmissionResult {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string[]>;
}
