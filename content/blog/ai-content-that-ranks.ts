import type { Post } from "@/types";
import { bikash } from "./authors";

export const post: Post = {
  slug: "ai-content-that-ranks-what-actually-changed-in-search",
  title: "AI Content That Ranks: What Actually Changed in Search",
  excerpt:
    "Search did not stop rewarding content — it stopped rewarding content that anyone could have produced. A practical look at what still earns visibility.",
  category: "SEO & Content",
  tags: ["SEO", "Content", "AI writing"],
  date: "2026-07-21",
  author: bikash,
  readingTime: 10,
  cover: "grid",
  seo: {
    description:
      "How AI changed search visibility, why generic content stopped working, and a production system that keeps quality high as volume increases.",
  },
  content: [
    {
      type: "paragraph",
      text: "Two things happened at roughly the same time. Publishing became almost free, and search results started answering questions directly without sending a click. A lot of content strategies were built for a world where neither was true.",
    },
    {
      type: "paragraph",
      text: "The conclusion many teams drew — that SEO is finished — does not match what I see in client data. Traffic to generic informational pages has fallen sharply. Traffic to pages that solve a specific problem for a specific person has held up, and in several cases grown, because the field thinned out.",
    },
    {
      type: "heading",
      level: 2,
      text: "What stopped working",
    },
    {
      type: "paragraph",
      text: "Three formats have lost most of their value, and they happen to be the three that AI writing tools produce most readily.",
    },
    {
      type: "list",
      items: [
        "Definitional posts. \"What is marketing automation?\" is answered above the results now. There is no click left to win.",
        "Undifferentiated listicles assembled from the current top ten results. If your source was the results page, you have added nothing to it.",
        "Volume plays targeting long-tail variations of the same question, which now consolidate into one answer.",
      ],
    },
    {
      type: "paragraph",
      text: "What these share is that the information already existed elsewhere and the page added no judgement, no data and no experience.",
    },
    {
      type: "heading",
      level: 2,
      text: "What still works",
    },
    {
      type: "paragraph",
      text: "The pages performing well in the accounts I look after have at least one of four properties.",
    },
    {
      type: "heading",
      level: 3,
      text: "Original data",
    },
    {
      type: "paragraph",
      text: "Anything derived from your own operations cannot be generated. A benchmark from your client base, response times across an industry, pricing patterns you observe — these get cited, and citations are what a language model reads when it decides who to name.",
    },
    {
      type: "heading",
      level: 3,
      text: "Documented experience",
    },
    {
      type: "paragraph",
      text: "Specific accounts of what you did, what it cost and what happened — including what did not work. The detail that makes a piece credible is exactly the detail a model cannot invent, because it was never published anywhere.",
    },
    {
      type: "heading",
      level: 3,
      text: "Genuine synthesis",
    },
    {
      type: "paragraph",
      text: "Taking a contested question and forming a defensible position on it. Not a summary of both sides — an argument, with the reasoning shown, that a reader can disagree with.",
    },
    {
      type: "heading",
      level: 3,
      text: "Depth on narrow problems",
    },
    {
      type: "paragraph",
      text: "The very specific question with low search volume and high intent. Fifty visits a month from people with exactly your problem beats five thousand from people browsing.",
    },
    {
      type: "callout",
      title: "A useful reframe",
      text: "Stop asking what keyword to target. Ask what your team knows that would take a competitor a year of client work to learn — then write that down.",
    },
    {
      type: "heading",
      level: 2,
      text: "Where AI belongs in the process",
    },
    {
      type: "paragraph",
      text: "I use AI on every article I produce, and none of it in the place people assume. The division that has held up is simple: AI handles the mechanical stages, humans handle the stages that require having been there.",
    },
    {
      type: "list",
      items: [
        "Research synthesis — reading a large volume of source material and surfacing themes. Genuinely faster, and verifiable against the sources.",
        "Structural outlines — proposing an order of argument, which is easy to critique and cheap to reject.",
        "Editing passes — flagging unsupported claims, weak transitions, unexplained jargon.",
        "Repurposing — converting a finished piece into a newsletter, a social series, a sales one-pager.",
        "Metadata and schema — titles, descriptions and structured data at scale.",
      ],
    },
    {
      type: "paragraph",
      text: "What stays human: the argument, the examples, the numbers, and the decision about what the piece is for. Those are the parts a reader is actually paying attention for.",
    },
    {
      type: "heading",
      level: 2,
      text: "The technical work that still pays",
    },
    {
      type: "paragraph",
      text: "Technical SEO has become less glamorous and no less important. In audits, the same handful of issues account for most of the recoverable loss:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Multiple pages competing for the same intent, splitting authority. Consolidate and redirect.",
        "Thin pages from an earlier volume push, dragging on site-level quality. Improve substantially or remove.",
        "Internal linking that follows navigation rather than topic relationships.",
        "Slow mobile performance on the specific templates that receive organic entry traffic.",
        "Missing or incorrect structured data on pages where it changes how the result is displayed.",
      ],
    },
    {
      type: "paragraph",
      text: "None of this requires AI. All of it usually produces results faster than a new content push, because the demand already exists and is being lost.",
    },
    {
      type: "heading",
      level: 2,
      text: "Being cited, not just ranked",
    },
    {
      type: "paragraph",
      text: "As more answers are assembled rather than listed, the objective shifts from being the first link to being the source that gets named. Practically, that favours the same things good editorial has always favoured: clear claims, stated evidence, specific numbers, and a page structure that makes the answer easy to extract.",
    },
    {
      type: "quote",
      text: "Write so the useful part can be quoted accurately by someone who never sends you the click. Some of them will come looking for you later.",
    },
    {
      type: "heading",
      level: 2,
      text: "Where to start",
    },
    {
      type: "paragraph",
      text: "Take your ten highest-traffic pages from two years ago and check them today. The pattern in what fell versus what held will tell you more about your own audience than any general article about search — including this one.",
    },
  ],
};
