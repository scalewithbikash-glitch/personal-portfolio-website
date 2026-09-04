import type { Post } from "@/types";
import { bikash } from "./authors";

export const post: Post = {
  slug: "ai-personalization-without-being-creepy",
  title: "AI Personalisation Without Being Creepy",
  excerpt:
    "The line between helpful and unsettling is more predictable than it looks. A working rule for personalisation that improves response rates instead of damaging trust.",
  category: "AI Marketing",
  tags: ["Personalisation", "AI tools", "Email"],
  date: "2026-04-24",
  author: bikash,
  readingTime: 6,
  cover: "orbit",
  seo: {
    description:
      "A practical rule for AI personalisation in marketing: what data feels helpful to use, what feels invasive, and how to test the difference.",
  },
  content: [
    {
      type: "paragraph",
      text: "Personalisation has an uncomfortable property: the techniques that increase response rates in a test can also be the ones that make a recipient decide you are not to be trusted. Both effects are real, and they do not show up in the same metric.",
    },
    {
      type: "paragraph",
      text: "After running a lot of these tests, the boundary turns out to be reasonably predictable.",
    },
    {
      type: "heading",
      level: 2,
      text: "The working rule",
    },
    {
      type: "callout",
      title: "The rule",
      text: "Use what they told you, or what they did on your own property. Anything else needs a visible reason for how you know it.",
    },
    {
      type: "paragraph",
      text: "Referencing a page someone read on your site is fine — they were there, and it is obviously your data. Referencing something they did elsewhere, or an inference about their circumstances they never disclosed, reads as surveillance even when it is technically public.",
    },
    {
      type: "heading",
      level: 2,
      text: "What works",
    },
    {
      type: "list",
      items: [
        "Segment-level relevance — a message shaped for their industry or company size, without implying you have been watching them individually.",
        "Their own stated words — repeating back the problem they described in the form, which shows you read it.",
        "Behaviour on your own site — the pricing page they visited, the guide they downloaded.",
        "Timing based on their signals — following up shortly after they returned to a key page.",
        "Adapting the offer to the stage they are actually at, rather than pushing everyone toward a call.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "What backfires",
    },
    {
      type: "list",
      items: [
        "Fake familiarity — AI-generated \"personal\" openers about their recent post, at a scale that is obviously automated.",
        "Inferences about their situation they never shared, particularly about budget, headcount or difficulty.",
        "Aggregated third-party data used in a way that reveals you bought a profile of them.",
        "Personalisation applied to a message with nothing worth reading. It highlights the mismatch rather than hiding it.",
      ],
    },
    {
      type: "paragraph",
      text: "The last one deserves emphasis. Personalisation amplifies whatever the message already is. A relevant message becomes more relevant; an irrelevant one becomes intrusive as well as irrelevant.",
    },
    {
      type: "heading",
      level: 2,
      text: "How to test it honestly",
    },
    {
      type: "paragraph",
      text: "Open rate and reply rate will tell you the message worked. They will not tell you what it cost you with people who found it unsettling and simply moved on.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Track unsubscribes and spam complaints as primary metrics, not as footnotes.",
        "Read the negative replies rather than filtering them. The wording tells you which specific element crossed the line.",
        "Ask a handful of recent customers to read the sequence and say how it lands.",
        "Apply the disclosure test: if you had to explain in the message exactly how you knew each fact, would any line become awkward? Rewrite that line.",
      ],
    },
    {
      type: "quote",
      text: "Helpful personalisation makes someone feel understood. Creepy personalisation makes them feel observed. The data is often identical; the difference is whether they can see how you got it.",
    },
    {
      type: "heading",
      level: 2,
      text: "A note on scale",
    },
    {
      type: "paragraph",
      text: "AI makes it possible to personalise every message individually, which mostly means it is now possible to be unsettling at a scale that used to be impractical. The constraint that made old marketing tolerable was effort, and that constraint is gone.",
    },
    {
      type: "paragraph",
      text: "So the judgement has to be deliberate. Decide what you will not use before you build the system, and write it down, because in the moment the incremental data point always looks harmless.",
    },
  ],
};
