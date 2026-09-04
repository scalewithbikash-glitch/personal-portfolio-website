import type { Post } from "@/types";
import { bikash } from "./authors";

export const post: Post = {
  slug: "cutting-cost-per-lead-without-cutting-spend",
  title: "Cutting Cost Per Lead Without Cutting Spend",
  excerpt:
    "Cost per lead is a ratio, and most teams only ever attack the numerator. Six changes that improve the denominator instead — usually faster and more durably.",
  category: "Growth",
  tags: ["Paid media", "Conversion", "Growth"],
  date: "2026-04-08",
  author: bikash,
  readingTime: 7,
  cover: "wave",
  seo: {
    description:
      "Six practical ways to reduce cost per qualified lead by improving conversion and qualification rather than reducing advertising budget.",
  },
  content: [
    {
      type: "paragraph",
      text: "When cost per lead rises, the reflex is to cut spend or renegotiate rates. Both attack the numerator. The denominator — how many qualified leads a given amount of traffic produces — is usually where the larger and more durable gains sit, and it improves every channel at once rather than just the one you cut.",
    },
    {
      type: "paragraph",
      text: "Six changes, roughly in order of how often they pay off.",
    },
    {
      type: "heading",
      level: 2,
      text: "1. Fix the conversion signal before anything else",
    },
    {
      type: "paragraph",
      text: "If you report a form view or a click as your conversion, the platform optimises toward people who click. Send back qualified leads — ideally closed revenue — and the algorithm starts finding people who buy. I have seen cost per qualified lead drop by a third from this change alone, with identical budget and creative.",
    },
    {
      type: "heading",
      level: 2,
      text: "2. Match the landing page to the ad",
    },
    {
      type: "paragraph",
      text: "Sending every campaign to the homepage is still remarkably common. The visitor clicked a specific promise and arrived somewhere generic, and now has to work out whether they are in the right place. A page that repeats the promise in the first line converts substantially better than a page that is objectively nicer but does not.",
    },
    {
      type: "heading",
      level: 2,
      text: "3. Reduce the form to what you need",
    },
    {
      type: "paragraph",
      text: "Every field costs completions. The exception is a qualifying question that actively improves lead quality — that one is worth the friction, because a lower volume of better-fit enquiries lowers cost per qualified lead even as it raises cost per raw lead.",
    },
    {
      type: "callout",
      title: "Which number are you optimising?",
      text: "Cost per lead and cost per qualified lead frequently move in opposite directions. Decide which one the business is actually paying against before you judge a change.",
    },
    {
      type: "heading",
      level: 2,
      text: "4. Follow up faster",
    },
    {
      type: "paragraph",
      text: "A lead that never gets a reply cost you the same as one that converts. In most funnels, improving response time from hours to minutes lifts the qualified rate more than any targeting change — and it costs nothing per additional lead.",
    },
    {
      type: "heading",
      level: 2,
      text: "5. Reactivate what you already have",
    },
    {
      type: "paragraph",
      text: "Most businesses have a list of enquiries from the last two years that were never worked systematically. Some of those people were early rather than uninterested. A well-written reactivation sequence costs one afternoon and produces leads at effectively zero marginal cost.",
    },
    {
      type: "heading",
      level: 2,
      text: "6. Cut the bottom of the account, not the budget",
    },
    {
      type: "paragraph",
      text: "Within most ad accounts, a minority of placements, audiences and keywords consume a disproportionate share of spend while producing almost no qualified leads. Removing them lowers blended cost per lead without reducing what the working parts receive — which is not the same thing as reducing spend.",
    },
    {
      type: "quote",
      text: "Reducing spend lowers your bill. Improving conversion lowers your cost. Only one of them also increases volume.",
    },
    {
      type: "heading",
      level: 2,
      text: "The order matters",
    },
    {
      type: "paragraph",
      text: "Do these in sequence, not simultaneously. If you change tracking, landing pages, forms and follow-up in the same week, the numbers will improve and you will have no idea which change to apply elsewhere. One change per cycle, measured against a stable baseline, compounds into knowledge you can reuse.",
    },
  ],
};
