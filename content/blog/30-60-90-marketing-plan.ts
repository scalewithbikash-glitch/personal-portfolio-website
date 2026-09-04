import type { Post } from "@/types";
import { bikash } from "./authors";

export const post: Post = {
  slug: "a-30-60-90-day-marketing-plan-for-small-teams",
  title: "A 30/60/90-Day Marketing Plan for Small Teams",
  excerpt:
    "Small teams fail at marketing planning by trying to do everything at once. A sequenced plan that assumes limited time and produces compounding results.",
  category: "Strategy",
  tags: ["Strategy", "Planning", "Small business"],
  date: "2026-06-16",
  author: bikash,
  readingTime: 8,
  cover: "orbit",
  seo: {
    description:
      "A realistic 30/60/90-day marketing plan for teams of one to five people, sequenced so each phase makes the next one easier.",
  },
  content: [
    {
      type: "paragraph",
      text: "Marketing plans written for small teams usually assume a large one. They list twelve initiatives across six channels and quietly require a full-time person per channel. Two months in, three initiatives are half-finished and none has produced anything measurable.",
    },
    {
      type: "paragraph",
      text: "This plan assumes something closer to reality: one person with maybe ten hours a week, no dedicated budget, and a business that needs enquiries this quarter rather than next year. It is sequenced so each phase makes the next cheaper.",
    },
    {
      type: "heading",
      level: 2,
      text: "Days 1–30: See clearly and stop the leaks",
    },
    {
      type: "paragraph",
      text: "The first month produces no new campaigns. It fixes what is already broken, which is almost always faster than building something new.",
    },
    {
      type: "heading",
      level: 3,
      text: "Week 1 — Establish the baseline",
    },
    {
      type: "list",
      items: [
        "Where did your last twenty customers actually come from? Ask them if you do not know.",
        "How many enquiries did you receive last month, and how many were a real fit?",
        "What is your median time to first response?",
        "Which pages receive traffic, and which of them ever produce an enquiry?",
      ],
    },
    {
      type: "paragraph",
      text: "Write the answers down even where they are estimates. You are establishing a comparison point, and the act of collecting them usually reveals the first thing to fix.",
    },
    {
      type: "heading",
      level: 3,
      text: "Weeks 2–3 — Fix the conversion path",
    },
    {
      type: "list",
      items: [
        "Make the primary action obvious on every page that receives traffic.",
        "Cut form fields to the minimum needed to qualify and route.",
        "Add an instant acknowledgement with a stated response time.",
        "Test the whole path on a phone, on a normal connection, as a stranger would.",
        "Put proof near the point of decision — specific results, not adjectives.",
      ],
    },
    {
      type: "callout",
      title: "Why this comes first",
      text: "Every improvement to the conversion path multiplies the value of every channel you build afterwards. Doing it later means paying for traffic that leaks.",
    },
    {
      type: "heading",
      level: 3,
      text: "Week 4 — Define who you are for",
    },
    {
      type: "paragraph",
      text: "Write, in one paragraph, who you serve, what problem you solve, and what makes your approach different. If it could appear on a competitor's site unchanged, it is not finished. This paragraph will determine everything you write for the next two months, so it is worth a full week.",
    },
    {
      type: "heading",
      level: 2,
      text: "Days 31–60: Build one channel properly",
    },
    {
      type: "paragraph",
      text: "One. Not three. The temptation to hedge across channels is the single most reliable way for a small team to produce nothing of consequence in any of them.",
    },
    {
      type: "paragraph",
      text: "Choose based on where your customers already are and what you can sustain. If you cannot maintain it for six months, it is the wrong channel regardless of how well it works for someone else.",
    },
    {
      type: "list",
      items: [
        "Search — best when people actively look for what you do. Slow to start, compounds well.",
        "One social platform — best when the buying decision is trust-led. Requires consistent presence.",
        "Email — best when you already have a list or steady traffic. Highest return per hour of the three.",
        "Partnerships and referrals — best when your market is small and relationship-driven. Underrated by almost everyone.",
      ],
    },
    {
      type: "paragraph",
      text: "Then commit to a cadence you can hold on a bad week, not a good one. Weekly and sustained beats daily and abandoned.",
    },
    {
      type: "heading",
      level: 3,
      text: "Use AI for leverage, not volume",
    },
    {
      type: "paragraph",
      text: "In this phase, AI is most useful for research synthesis, first-draft structure and repurposing one asset into several. Use it to make one good thing go further, rather than to make more things.",
    },
    {
      type: "heading",
      level: 2,
      text: "Days 61–90: Systematise and measure",
    },
    {
      type: "paragraph",
      text: "By day sixty you have a working conversion path and one channel producing something. The final month makes both repeatable so they survive a busy quarter.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Document the channel workflow end to end, so it can run when you are unavailable.",
        "Automate the repetitive parts — publishing, follow-up, reporting.",
        "Build one dashboard answering: enquiries, source, qualified rate, cost per qualified lead.",
        "Compare against the week-one baseline honestly, including what did not move.",
        "Decide one thing to keep, one to change, one to stop.",
      ],
    },
    {
      type: "quote",
      text: "The plan is not the deliverable. The habit of reviewing it against real numbers is.",
    },
    {
      type: "heading",
      level: 2,
      text: "What to expect",
    },
    {
      type: "paragraph",
      text: "Realistically: conversion improvements show within weeks, because they act on traffic you already have. Channel results depend on the channel — email and partnerships can move within the ninety days, search rarely does. What you should have by day ninety is a working system and evidence about which direction to push, which is worth considerably more than a temporary spike.",
    },
    {
      type: "paragraph",
      text: "Then run it again. The second cycle is faster, because the measurement and the conversion path are already in place.",
    },
  ],
};
