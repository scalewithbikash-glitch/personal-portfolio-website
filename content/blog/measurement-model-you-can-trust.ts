import type { Post } from "@/types";
import { bikash } from "./authors";

export const post: Post = {
  slug: "building-a-marketing-measurement-model-you-can-trust",
  title: "Building a Marketing Measurement Model You Can Trust",
  excerpt:
    "When three tools report three different numbers, decisions default to intuition. Here is how to establish measurement your whole team will actually rely on.",
  category: "Analytics",
  tags: ["Analytics", "Attribution", "Reporting"],
  date: "2026-07-07",
  author: bikash,
  readingTime: 9,
  cover: "pulse",
  seo: {
    description:
      "A practical guide to marketing measurement: agreeing definitions, fixing tracking, choosing an attribution model, and building reports people use.",
  },
  content: [
    {
      type: "paragraph",
      text: "The most common analytics problem is not missing data. It is that the data exists in four places, disagrees with itself, and nobody has the authority to declare which version is correct. So the monthly review becomes a debate about numbers instead of a discussion about decisions.",
    },
    {
      type: "paragraph",
      text: "Fixing this is less technical than it looks. Most of the work is agreeing on definitions, and most of the remaining work is making the tracking match them.",
    },
    {
      type: "heading",
      level: 2,
      text: "Step one: write the definitions down",
    },
    {
      type: "paragraph",
      text: "Before touching a tag manager, get the team in a room and define each term in writing. This conversation is uncomfortable and always worth it, because the disagreements it surfaces were already causing the conflicting reports.",
    },
    {
      type: "list",
      items: [
        "What is a lead? Does a newsletter signup count, or only an enquiry with stated intent?",
        "When does a lead become qualified — on a scoring threshold, or after a human confirms fit?",
        "What is a conversion, and at which moment is it recorded?",
        "When is revenue counted: at signature, at first payment, or across the contract?",
        "What is the attribution window, and does it differ by channel?",
      ],
    },
    {
      type: "callout",
      title: "A sign you skipped this step",
      text: "Two people in the same meeting quote different lead counts for the same month and both are technically correct.",
    },
    {
      type: "heading",
      level: 2,
      text: "Step two: audit against reality",
    },
    {
      type: "paragraph",
      text: "Do not trust the tracking documentation. Run through the real journeys yourself — the enquiry form, the phone number, the calendar booking link, on mobile and desktop — and compare what fires against what should fire.",
    },
    {
      type: "paragraph",
      text: "Every audit I run finds at least one of these:",
    },
    {
      type: "list",
      items: [
        "A conversion firing on page view rather than on submission, inflating counts.",
        "The same event recorded by two systems and counted twice in a blended report.",
        "A high-value action — a phone call, a reply to a quote — not tracked at all.",
        "Consent handling that silently drops a large share of sessions with no note in the reporting.",
        "Ad platform conversions counted on a different window than the analytics platform, guaranteeing mismatch.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Step three: choose an attribution model, and say what it hides",
    },
    {
      type: "paragraph",
      text: "There is no correct attribution model. Every model is a simplification that assigns credit according to an assumption, and the useful question is whether the assumption is reasonable for how your customers actually buy.",
    },
    {
      type: "list",
      items: [
        "Last non-direct click — simple and comparable over time, systematically undervalues awareness activity.",
        "First click — useful when the buying cycle is short and discovery matters most.",
        "Linear or time-decay — fairer across long cycles, harder to explain to stakeholders.",
        "Self-reported attribution — a \"how did you hear about us?\" field. Imprecise, and often closer to the truth than any model for word-of-mouth and offline channels.",
      ],
    },
    {
      type: "paragraph",
      text: "I generally recommend running a primary model consistently and adding a self-reported field as a sanity check. When the two disagree sharply, that gap is itself information — usually about a channel your tracking cannot see.",
    },
    {
      type: "quote",
      text: "A model that states its assumptions is more useful than a model that implies precision it does not have.",
    },
    {
      type: "heading",
      level: 2,
      text: "Step four: build reports for decisions, not for completeness",
    },
    {
      type: "paragraph",
      text: "Dashboards fail when they try to show everything. The fix is to build each report around a question someone actually asks, and to leave out anything that does not help answer it.",
    },
    {
      type: "list",
      items: [
        "Leadership: are we generating enough qualified pipeline for the revenue target, and what does it cost?",
        "Marketing: which channels and campaigns are producing qualified leads this month, and where is the funnel leaking?",
        "Sales: which leads should I contact first, and what do I already know about them?",
      ],
    },
    {
      type: "paragraph",
      text: "Three focused views get read. One comprehensive dashboard gets opened during onboarding and never again.",
    },
    {
      type: "heading",
      level: 2,
      text: "Step five: monitor the data itself",
    },
    {
      type: "paragraph",
      text: "Tracking breaks silently. A developer renames a form field, a consent banner updates, a platform deprecates an endpoint — and the report keeps rendering, just with wrong numbers. Automated checks catch this early.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Alert when a key event's volume moves outside its normal range for the day of week.",
        "Alert when a channel reports zero for a period where it never has before.",
        "Reconcile CRM lead counts against analytics conversions weekly and investigate any gap beyond a set tolerance.",
        "Re-run the manual journey test after any site deployment that touches a conversion path.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "The measurement plan",
    },
    {
      type: "paragraph",
      text: "All of this belongs in one document: every metric, its definition, where it is measured, who owns it, and what decision it informs. It is usually four or five pages, it takes a day to write, and it ends the recurring argument about whose number is right.",
    },
    {
      type: "paragraph",
      text: "If you do only one thing from this article, write that document. The technical work is much easier once everyone agrees what they are measuring.",
    },
  ],
};
