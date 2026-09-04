import type { Post } from "@/types";
import { bikash } from "./authors";

export const post: Post = {
  slug: "positioning-before-tactics",
  title: "Positioning Before Tactics: The Paragraph That Decides Everything",
  excerpt:
    "Most marketing problems presented to me as channel problems are positioning problems. A short exercise for writing the paragraph the rest of your marketing depends on.",
  category: "Strategy",
  tags: ["Positioning", "Strategy", "Messaging"],
  date: "2026-05-12",
  author: bikash,
  readingTime: 6,
  cover: "mesh",
  seo: {
    description:
      "How to write a positioning paragraph that makes every downstream marketing decision easier, with a practical test for whether yours is finished.",
  },
  content: [
    {
      type: "paragraph",
      text: "A client tells me their ads are underperforming. We look at the account and the targeting is reasonable, the budget is adequate, the landing page loads fine. Then I read the page as a stranger would and cannot tell who it is for or what makes this option different from the four others in the same search results.",
    },
    {
      type: "paragraph",
      text: "That is not an ads problem. No amount of bid optimisation fixes a message that gives a visitor no reason to choose you.",
    },
    {
      type: "heading",
      level: 2,
      text: "The paragraph",
    },
    {
      type: "paragraph",
      text: "The exercise is to write one paragraph containing four things: who you serve specifically, the problem they have, what you do about it, and why your approach differs from the obvious alternative. Four sentences is usually enough.",
    },
    {
      type: "paragraph",
      text: "The difficulty is not the writing. It is that each sentence forces a decision most businesses have been avoiding — particularly the first one, because naming a specific customer means accepting you are not for everyone.",
    },
    {
      type: "callout",
      title: "The substitution test",
      text: "Replace your company name with a competitor's. If the paragraph still reads as true, you have written a category description, not a position.",
    },
    {
      type: "heading",
      level: 2,
      text: "Three common failures",
    },
    {
      type: "heading",
      level: 3,
      text: "Naming an audience too broad to have a shared problem",
    },
    {
      type: "paragraph",
      text: "\"Small and medium businesses\" is not an audience. A dental practice with two locations and a B2B software company both fit, and they have nothing in common in how they buy, what they worry about, or where they look for help.",
    },
    {
      type: "heading",
      level: 3,
      text: "Describing the service instead of the outcome",
    },
    {
      type: "paragraph",
      text: "\"We provide digital marketing services\" tells a buyer what you invoice for, not what changes for them. The outcome is what they are trying to buy.",
    },
    {
      type: "heading",
      level: 3,
      text: "Claiming a difference nobody can verify",
    },
    {
      type: "paragraph",
      text: "\"Data-driven\" and \"results-focused\" are claims every competitor also makes, which means they carry no information. A real difference is something a prospect could check: a method, a constraint you accept, a guarantee, a specialisation.",
    },
    {
      type: "heading",
      level: 2,
      text: "Where to find the answer",
    },
    {
      type: "paragraph",
      text: "Positioning is discovered rather than invented. The material is already in your business:",
    },
    {
      type: "list",
      items: [
        "Your last ten closed deals — what did those customers have in common that the lost ones did not?",
        "Your best client relationships — why did they choose you, in their words rather than yours?",
        "Your losses — what did the winner offer that you did not?",
        "Your own preference — which projects do you want more of? Positioning that ignores this does not survive contact with a busy quarter.",
      ],
    },
    {
      type: "quote",
      text: "If your positioning does not lose you some enquiries, it is not doing its job.",
    },
    {
      type: "heading",
      level: 2,
      text: "What changes once it is written",
    },
    {
      type: "paragraph",
      text: "The paragraph makes downstream decisions faster because most of them stop being open questions. Which channel? The one where that specific buyer already is. What content? The problems that buyer has. Which enquiries to pursue? The ones matching the description. Which features to lead with? The ones that support the stated difference.",
    },
    {
      type: "paragraph",
      text: "Teams that skip this step spend the next year relitigating those decisions in every meeting. An afternoon spent on four sentences is a good trade.",
    },
  ],
};
