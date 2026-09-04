import type { Post } from "@/types";
import { bikash } from "./authors";

export const post: Post = {
  slug: "ai-lead-scoring-where-it-helps-and-where-it-misleads",
  title: "AI Lead Scoring: Where It Helps and Where It Misleads",
  excerpt:
    "Lead scoring models are confident by design, which is exactly what makes them dangerous. How to build one that improves prioritisation without hiding good customers.",
  category: "Growth",
  tags: ["Lead generation", "AI tools", "Sales"],
  date: "2026-05-28",
  author: bikash,
  readingTime: 7,
  cover: "wave",
  seo: {
    description:
      "When AI lead scoring improves sales prioritisation, when it quietly suppresses good leads, and how to build a model your team can audit.",
  },
  content: [
    {
      type: "paragraph",
      text: "Lead scoring is an easy sell. Sales has more leads than time, a model ranks them, everyone works the top of the list. The mechanics are simple and the tooling is mature.",
    },
    {
      type: "paragraph",
      text: "The failure mode is subtler than a wrong score. A scoring model trained on who you have closed will confidently reproduce who you have closed — including the biases in how leads were worked in the first place. If a segment was historically neglected, it converted poorly, and the model learns to deprioritise it further. The feedback loop closes and nobody notices, because the metrics improve.",
    },
    {
      type: "heading",
      level: 2,
      text: "Where scoring genuinely helps",
    },
    {
      type: "list",
      items: [
        "High volume with limited sales capacity, where triage is already happening informally and inconsistently.",
        "Clear disqualification signals — wrong geography, wrong company size, a service you do not offer.",
        "Urgency detection from what the prospect wrote, which is a classification task models do well.",
        "Routing by topic, so an enquiry reaches the person who can answer it.",
      ],
    },
    {
      type: "paragraph",
      text: "Notice these are mostly about ordering and routing, not about deciding who is worth a conversation.",
    },
    {
      type: "heading",
      level: 2,
      text: "Where it misleads",
    },
    {
      type: "heading",
      level: 3,
      text: "Thin training data",
    },
    {
      type: "paragraph",
      text: "If you close forty deals a year, you do not have enough examples to learn a reliable pattern. A model fitted on that data will be confident and arbitrary. Below a few hundred outcomes, a simple written rule set is more honest and easier to correct.",
    },
    {
      type: "heading",
      level: 3,
      text: "Proxy variables",
    },
    {
      type: "paragraph",
      text: "Models find whatever correlates. I have seen scoring effectively keyed to time of submission, because leads that arrived during working hours were called quickly and therefore converted. The model learned the sales team's schedule, not lead quality.",
    },
    {
      type: "callout",
      title: "A check worth running",
      text: "Pull the twenty highest-scoring and twenty lowest-scoring leads from last quarter and read them. If you cannot articulate why each landed where it did, the model is not ready to drive prioritisation.",
    },
    {
      type: "heading",
      level: 3,
      text: "The unworked-lead blind spot",
    },
    {
      type: "paragraph",
      text: "Your data only records outcomes for leads someone contacted. Leads that were ignored have no outcome — and are usually treated as negatives. The model then learns to suppress exactly the segment it has never seen tested.",
    },
    {
      type: "paragraph",
      text: "The remedy is to work a random sample of low-scoring leads regularly. It costs a small amount of capacity and it is the only way to find out whether the model is wrong.",
    },
    {
      type: "heading",
      level: 2,
      text: "A structure that holds up",
    },
    {
      type: "paragraph",
      text: "The approach I recommend separates the score from the decision, which keeps behaviour explainable.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Start with explicit rules for hard disqualification. These are business decisions and should never be probabilistic.",
        "Use a model for classification and urgency, producing a label with a confidence value.",
        "Keep routing rules deterministic and readable, driven by the label rather than replacing it.",
        "Show the reasoning in the CRM — which signals raised or lowered the score — so a salesperson can override with judgement.",
        "Hold out a random sample of low scores for manual work, permanently.",
        "Review scoring accuracy quarterly against actual closed revenue, not against pipeline created.",
      ],
    },
    {
      type: "quote",
      text: "A score is a suggestion about order. It should never be a decision about whether someone deserves a reply.",
    },
    {
      type: "heading",
      level: 2,
      text: "What to measure",
    },
    {
      type: "paragraph",
      text: "The metric that matters is not model accuracy. It is whether total closed revenue improved after prioritisation changed — and whether the mix of customers stayed healthy. A model can improve conversion rate while narrowing your customer base into a segment that stops growing.",
    },
    {
      type: "paragraph",
      text: "Track both. If conversion is up and new-segment acquisition is down, the model is optimising you into a corner, and that is worth knowing before it takes a year of pipeline with it.",
    },
  ],
};
