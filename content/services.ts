import {
  BrainCircuit,
  Workflow,
  PenLine,
  Target,
  Megaphone,
  BarChart3,
  MousePointerClick,
  Compass,
} from "lucide-react";
import type { Service } from "@/types";

/**
 * Service catalogue. This is the content layer for /services and
 * /services/[slug] — swapping it for a CMS only requires replacing the
 * accessors in lib/content/services.ts.
 */
export const services: Service[] = [
  {
    slug: "ai-digital-marketing-strategy",
    title: "AI Digital Marketing Strategy",
    category: "Strategy",
    icon: BrainCircuit,
    shortDescription:
      "A clear, prioritised plan for where AI belongs in your marketing — and where it does not.",
    description:
      "Most teams adopt AI tools before they have decided what problem those tools should solve. This engagement starts from your business goals and works backwards: what your customers actually need, where your funnel leaks, and which parts of your marketing are worth automating first.",
    timeline: "3–5 weeks",
    benefits: [
      "A prioritised roadmap instead of a tool list",
      "Clear view of which channels deserve budget",
      "Automation opportunities ranked by effort and impact",
      "KPIs your team can actually report on",
    ],
    problem: {
      heading: "Busy marketing, unclear direction",
      body: "Teams are publishing more, testing more tools, and spending more time in dashboards than ever — but the connection between that activity and revenue keeps getting harder to explain.",
      points: [
        "AI tools bought before the use case was defined",
        "Channels running in isolation with no shared measurement",
        "Content produced on a schedule rather than against demand",
        "No agreed definition of a qualified lead",
      ],
    },
    solution: {
      heading: "Strategy first, tooling second",
      body: "I audit what you already have, map how customers really move from first touch to signed deal, and identify the handful of changes that will move the numbers. AI and automation are applied where they compress time or improve decisions — not everywhere at once.",
    },
    helpsWith: [
      "Positioning and message clarity for a specific buyer",
      "Choosing the two or three channels worth committing to",
      "Deciding which workflows to automate and in what order",
      "Building a measurement model your team trusts",
      "Setting a realistic budget split across acquisition and retention",
      "Getting stakeholders aligned on one plan",
    ],
    deliverables: [
      "AI marketing audit of current channels, tools and workflows",
      "Customer journey analysis with mapped drop-off points",
      "Written marketing strategy with prioritised initiatives",
      "AI tool stack recommendation with cost estimates",
      "Automation opportunity map ranked by effort and impact",
      "Content strategy and topic architecture",
      "Lead generation strategy with qualification criteria",
      "KPI framework and reporting structure",
      "30/60/90-day action plan with owners",
    ],
    process: [
      {
        step: "01",
        title: "Discover",
        description:
          "Interviews with your team, access to analytics and CRM, and a review of current campaigns, content and tooling.",
      },
      {
        step: "02",
        title: "Diagnose",
        description:
          "I map the customer journey against your data to find where attention, conversion or retention is actually being lost.",
      },
      {
        step: "03",
        title: "Strategize",
        description:
          "A written plan: positioning, channel priorities, automation opportunities, budget guidance and a measurement model.",
      },
      {
        step: "04",
        title: "Align",
        description:
          "A working session with your team to pressure-test the plan, assign owners and agree on sequencing.",
      },
      {
        step: "05",
        title: "Hand over",
        description:
          "You receive the full strategy document, tool recommendations and a 30/60/90-day plan your team can execute without me.",
      },
    ],
    outcomes: [
      {
        label: "Fewer, better bets",
        description:
          "A shortlist of initiatives with expected impact instead of a backlog nobody prioritises.",
      },
      {
        label: "Defensible budget decisions",
        description:
          "Spend allocated against evidence from your own data, not channel fashion.",
      },
      {
        label: "A team that agrees",
        description:
          "One plan, shared definitions, and reporting everyone reads the same way.",
      },
    ],
    audience: [
      "Founders doing marketing themselves and hitting a ceiling",
      "Small marketing teams juggling too many channels",
      "Businesses that bought AI tools but saw no measurable change",
      "Companies preparing to increase marketing spend and wanting a plan first",
    ],
    faq: [
      {
        question: "Do I need to already be using AI tools?",
        answer:
          "No. Part of the work is deciding whether AI is the right answer for a given problem. Some of the highest-impact recommendations in a strategy engagement have nothing to do with AI at all.",
      },
      {
        question: "How much of my team's time does this take?",
        answer:
          "Expect two to three hours of interviews in the first week, read-only access to your analytics and CRM, and a two-hour alignment session near the end. Everything else happens on my side.",
      },
      {
        question: "Will you also implement the strategy?",
        answer:
          "That is a separate engagement. Many clients take the plan in-house; others continue with implementation support. I will be explicit about which parts your team can handle alone.",
      },
      {
        question: "What if my data is messy?",
        answer:
          "That is common and usually part of the diagnosis. If tracking is unreliable, fixing measurement becomes an early item in the 30-day plan rather than a reason to delay.",
      },
    ],
  },
  {
    slug: "ai-marketing-automation",
    title: "AI Marketing Automation",
    category: "Automation",
    icon: Workflow,
    shortDescription:
      "Automate the repetitive parts of marketing so your team spends its hours on judgement work.",
    description:
      "Marketing teams lose a surprising amount of the week to copying data between tools, chasing leads manually and rebuilding the same reports. This engagement identifies those tasks, automates them reliably, and puts monitoring in place so nothing fails quietly.",
    timeline: "4–8 weeks",
    benefits: [
      "Hours returned to the team every week",
      "Faster, more consistent lead follow-up",
      "Fewer leads lost between tools",
      "Workflows documented so they survive staff changes",
    ],
    problem: {
      heading: "Manual work disguised as marketing",
      body: "When lead routing, follow-up, reporting and content distribution are all done by hand, capacity becomes the constraint — and response times slip exactly when a lead is most interested.",
      points: [
        "Leads sitting untouched for hours or days",
        "Data re-keyed between forms, CRM and spreadsheets",
        "Reports rebuilt manually every month",
        "Follow-up quality varying by who happens to be available",
      ],
    },
    solution: {
      heading: "Workflows that run without supervision",
      body: "I map your current process end to end, remove the steps that shouldn't exist, then build the rest as monitored automations. AI handles classification, drafting and enrichment where it is genuinely more accurate than a rule — everything else stays deterministic on purpose.",
    },
    helpsWith: [
      "Lead capture, enrichment and routing",
      "Lifecycle and nurture email sequences",
      "CRM hygiene and deduplication",
      "AI-assisted lead scoring and qualification",
      "Automated reporting and alerting",
      "Handoffs between marketing and sales",
    ],
    deliverables: [
      "Current-state workflow map with time costs",
      "Automation opportunity register, ranked",
      "Built and tested automation workflows",
      "AI lead scoring or classification model where it fits",
      "CRM field structure and data hygiene rules",
      "Monitoring and failure alerts",
      "Written runbook for your team",
      "Handover and training session",
    ],
    process: [
      {
        step: "01",
        title: "Map",
        description:
          "Document how work actually flows today, including the informal steps that never made it into any process document.",
      },
      {
        step: "02",
        title: "Prioritise",
        description:
          "Rank candidates by hours saved, error rate and revenue risk. Not everything repetitive is worth automating.",
      },
      {
        step: "03",
        title: "Build",
        description:
          "Implement workflows in your existing stack where possible, with test data before anything touches live records.",
      },
      {
        step: "04",
        title: "Monitor",
        description:
          "Add alerting so failures surface immediately rather than being discovered in a quarterly review.",
      },
      {
        step: "05",
        title: "Hand over",
        description:
          "Runbook, training and a maintenance checklist so the system stays owned by your team.",
      },
    ],
    outcomes: [
      {
        label: "Faster response",
        description:
          "Enquiries acknowledged and routed in minutes rather than whenever someone checks the inbox.",
      },
      {
        label: "Reclaimed hours",
        description:
          "Repetitive admin removed from the week so the team can work on positioning, creative and analysis.",
      },
      {
        label: "Fewer silent failures",
        description:
          "Monitoring means a broken integration raises an alert instead of quietly losing leads.",
      },
    ],
    audience: [
      "Teams handling lead follow-up manually",
      "Businesses with data spread across disconnected tools",
      "Agencies wanting to serve more clients without more headcount",
      "Companies where one person is the single point of failure for reporting",
    ],
    faq: [
      {
        question: "Do I need to change my current tools?",
        answer:
          "Usually not. I build inside what you already pay for wherever it is capable. I will only recommend a replacement when the current tool genuinely blocks the outcome, and I will show the cost comparison.",
      },
      {
        question: "Is AI involved in every workflow?",
        answer:
          "No, and that is deliberate. AI is used for classification, drafting and enrichment. Routing, timing and compliance-sensitive logic stay deterministic so behaviour is predictable and auditable.",
      },
      {
        question: "What happens when something breaks?",
        answer:
          "Every workflow ships with monitoring and an alert path. The runbook covers the common failure modes and how to recover from each one.",
      },
      {
        question: "Will this replace people on my team?",
        answer:
          "The goal is to remove repetitive tasks, not roles. In practice teams use the recovered time for campaign work and analysis that had been permanently deferred.",
      },
    ],
  },
  {
    slug: "ai-content-and-seo",
    title: "AI Content & SEO",
    category: "Content",
    icon: PenLine,
    shortDescription:
      "Content systems that earn search visibility — with AI used for leverage, not volume.",
    description:
      "Publishing more has stopped working. This engagement builds a content operation around real search demand and genuine expertise, using AI to accelerate research, structure and repurposing while keeping a human responsible for accuracy and point of view.",
    timeline: "6–12 weeks",
    benefits: [
      "Topic coverage built around actual demand",
      "A repeatable production process, not one-off pushes",
      "Technical SEO issues found and fixed",
      "Every article repurposed across channels",
    ],
    problem: {
      heading: "More content, flat results",
      body: "Teams increase output, quality drifts, and search performance stays where it was. The problem is rarely writing speed — it is that the content isn't mapped to demand or differentiated by anything only you could say.",
      points: [
        "Articles written for keywords nobody searches with intent",
        "Generic AI drafts published with minimal editing",
        "Existing pages competing with each other",
        "No process for updating content that has decayed",
      ],
    },
    solution: {
      heading: "Demand first, then production",
      body: "I start with search and customer-question research to decide what deserves to exist. Then I build the production system — briefs, structure, review, internal linking and repurposing — so quality holds as volume increases.",
    },
    helpsWith: [
      "Keyword and search-intent research",
      "Topic clusters and internal link architecture",
      "AI-assisted briefs and outlines writers actually use",
      "Editorial standards and review checkpoints",
      "Technical SEO fixes and site structure",
      "Repurposing one article into channel-specific assets",
    ],
    deliverables: [
      "Search demand and competitor gap analysis",
      "Topic cluster map with priority order",
      "Content brief template and AI prompt library",
      "Editorial workflow with review gates",
      "Technical SEO audit with prioritised fixes",
      "Internal linking plan",
      "Repurposing playbook",
      "Performance dashboard for content",
    ],
    process: [
      {
        step: "01",
        title: "Research",
        description:
          "Search demand, competitor coverage and the questions your sales conversations keep repeating.",
      },
      {
        step: "02",
        title: "Architect",
        description:
          "Group demand into clusters, decide what each page must do, and plan how pages support each other.",
      },
      {
        step: "03",
        title: "Systematise",
        description:
          "Build briefs, prompts, editorial standards and review gates so output stays consistent.",
      },
      {
        step: "04",
        title: "Produce",
        description:
          "Run the system on a first batch of articles, refining the process against real output.",
      },
      {
        step: "05",
        title: "Compound",
        description:
          "Measure, refresh decaying pages and expand clusters that show traction.",
      },
    ],
    outcomes: [
      {
        label: "Visibility that compounds",
        description:
          "Clusters build authority over time rather than each post starting from zero.",
      },
      {
        label: "Consistent quality at speed",
        description:
          "AI accelerates research and structure while a human keeps the judgement and the point of view.",
      },
      {
        label: "More from every asset",
        description:
          "A single article becomes a newsletter, a social series and sales enablement material.",
      },
    ],
    audience: [
      "Businesses publishing regularly without seeing search growth",
      "Teams experimenting with AI writing and unhappy with the output",
      "Companies with strong expertise that isn't documented anywhere",
      "Founders who want a content process that doesn't depend on them",
    ],
    faq: [
      {
        question: "Will Google penalise AI-assisted content?",
        answer:
          "Search engines evaluate whether a page is helpful and demonstrates real expertise, not which software produced the first draft. The failure mode is unedited, undifferentiated output — which is exactly what the editorial gates in this system prevent.",
      },
      {
        question: "How long until results show?",
        answer:
          "Technical fixes and updates to existing pages can move within weeks. New clusters typically take three to six months to show meaningful search traction, depending on your domain and competition.",
      },
      {
        question: "Do you write the articles?",
        answer:
          "I build the system and produce a first batch to prove it works. Ongoing production is usually handled by your team or writers, following the briefs and standards from the engagement.",
      },
      {
        question: "Can this work in a niche industry?",
        answer:
          "Yes, and niches often perform better because competition for specific, high-intent queries is lower. The research phase adjusts to search volume that is small but qualified.",
      },
    ],
  },
  {
    slug: "lead-generation-systems",
    title: "Lead Generation Systems",
    category: "Acquisition",
    icon: Target,
    shortDescription:
      "A predictable pipeline built from qualified enquiries, not one-off campaign spikes.",
    description:
      "A campaign brings a burst of leads and then stops. A system produces qualified enquiries every week. This engagement builds the offer, the capture path, the qualification logic and the follow-up that turn interest into booked conversations.",
    timeline: "4–8 weeks",
    benefits: [
      "Consistent enquiry volume you can forecast",
      "Qualification that protects your calendar",
      "Follow-up that runs without manual chasing",
      "Clear cost per qualified lead",
    ],
    problem: {
      heading: "Leads that don't convert, or don't arrive",
      body: "Either the pipeline is empty, or it is full of enquiries that were never a fit. Both come from the same root cause: no defined qualification and no system carrying someone from first interest to a real conversation.",
      points: [
        "Traffic that never converts into an enquiry",
        "Enquiries with no budget, timeline or authority",
        "Follow-up depending on someone remembering",
        "No idea which source produces customers versus noise",
      ],
    },
    solution: {
      heading: "One path, deliberately built",
      body: "I define who you want to hear from, build the offer and landing path that attracts them, add qualification that filters early, and automate follow-up so momentum is never lost between the form and the first call.",
    },
    helpsWith: [
      "Offer definition and lead magnet design",
      "Landing pages and conversion paths",
      "Form design and progressive qualification",
      "Lead scoring and routing rules",
      "Nurture sequences for leads not ready yet",
      "Attribution from source to closed deal",
    ],
    deliverables: [
      "Ideal customer profile and disqualification criteria",
      "Lead magnet or offer concept",
      "Landing page structure and copy direction",
      "Qualification form and scoring logic",
      "Automated follow-up sequences",
      "Routing rules and CRM configuration",
      "Source-level attribution reporting",
      "Weekly pipeline dashboard",
    ],
    process: [
      {
        step: "01",
        title: "Define",
        description:
          "Agree on who is worth talking to — and just as importantly, who is not.",
      },
      {
        step: "02",
        title: "Build",
        description:
          "Create the offer, capture path and qualification logic that filter for fit early.",
      },
      {
        step: "03",
        title: "Automate",
        description:
          "Wire up routing, scoring and follow-up so no enquiry waits on a human to notice it.",
      },
      {
        step: "04",
        title: "Drive",
        description:
          "Point one or two channels at the system and measure cost per qualified lead honestly.",
      },
      {
        step: "05",
        title: "Tune",
        description:
          "Improve the weakest step each cycle — usually the form, the offer or the first follow-up message.",
      },
    ],
    outcomes: [
      {
        label: "Predictable enquiries",
        description:
          "A weekly rhythm you can plan capacity around instead of feast-and-famine cycles.",
      },
      {
        label: "Better-fit conversations",
        description:
          "Qualification filters early so your calendar holds calls worth taking.",
      },
      {
        label: "Honest unit economics",
        description:
          "Cost per qualified lead by source, so budget moves toward what actually works.",
      },
    ],
    audience: [
      "Service businesses relying on referrals alone",
      "Teams with traffic but few enquiries",
      "Companies whose sales calls are mostly poor fits",
      "Businesses ready to spend on ads but lacking a conversion path",
    ],
    faq: [
      {
        question: "Do I need a big ad budget?",
        answer:
          "No. The system is built to work on organic and referral traffic first. Paid spend is added only once the conversion path proves it can turn visits into qualified enquiries.",
      },
      {
        question: "What counts as a qualified lead?",
        answer:
          "We define that together in the first week — usually a combination of fit, budget range, timeline and a stated problem you actually solve. Writing it down is what makes the rest of the system possible.",
      },
      {
        question: "How quickly does this produce leads?",
        answer:
          "The system is typically live in four to six weeks. Meaningful volume depends on your traffic; most clients see the first qualified enquiries within the first month of going live.",
      },
      {
        question: "Will this work for a local business?",
        answer:
          "Yes. Local intent is often easier to capture because the buying window is shorter — the qualification and follow-up logic simply changes shape.",
      },
    ],
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    category: "Paid Media",
    icon: Megaphone,
    shortDescription:
      "Paid campaigns managed against pipeline and revenue, not platform vanity metrics.",
    description:
      "Ad platforms optimise for what you tell them to optimise for. If that signal is a click, you get clicks. This engagement fixes the measurement first, then builds and manages campaigns against the outcomes that actually matter to the business.",
    timeline: "Ongoing, 3-month minimum",
    benefits: [
      "Spend judged against pipeline, not impressions",
      "Structured testing instead of guesswork",
      "Creative built around proven messaging",
      "Reporting a non-marketer can read",
    ],
    problem: {
      heading: "Spend without a clear return",
      body: "Campaigns report strong platform numbers while the sales team sees no difference. Usually the conversion signal being sent back to the platform is wrong, so the algorithm is optimising toward the wrong person.",
      points: [
        "Conversions counted at click or form view",
        "Audiences overlapping and competing with each other",
        "Creative refreshed on instinct rather than results",
        "No connection between ad spend and closed revenue",
      ],
    },
    solution: {
      heading: "Fix the signal, then scale",
      body: "I audit tracking and conversion definitions before touching budget, feed qualified-lead and revenue signals back to the platforms, then run a disciplined test cycle on audience, offer and creative.",
    },
    helpsWith: [
      "Conversion tracking and server-side events",
      "Campaign structure and audience strategy",
      "Creative testing frameworks",
      "Landing page and offer alignment",
      "Budget allocation across channels",
      "Retargeting and retention campaigns",
    ],
    deliverables: [
      "Tracking and conversion audit with fixes",
      "Campaign architecture and naming conventions",
      "Audience and targeting plan",
      "Creative testing roadmap",
      "Landing page conversion recommendations",
      "Weekly performance reporting",
      "Monthly strategy review",
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        description:
          "Review tracking, conversion definitions, account structure and historical performance before changing spend.",
      },
      {
        step: "02",
        title: "Instrument",
        description:
          "Fix measurement so platforms optimise toward qualified leads and revenue rather than raw clicks.",
      },
      {
        step: "03",
        title: "Launch",
        description:
          "Rebuild campaigns with a clean structure and a deliberate first round of creative and audience tests.",
      },
      {
        step: "04",
        title: "Test",
        description:
          "Run one structured test cycle at a time so results stay attributable to a single change.",
      },
      {
        step: "05",
        title: "Scale",
        description:
          "Increase budget on what proves out and cut what doesn't, reviewing against pipeline monthly.",
      },
    ],
    outcomes: [
      {
        label: "Spend tied to pipeline",
        description:
          "Reporting connects budget to qualified leads and revenue instead of stopping at CTR.",
      },
      {
        label: "Faster learning",
        description:
          "A structured test cadence means every cycle produces a decision, not just data.",
      },
      {
        label: "Lower waste",
        description:
          "Overlapping audiences and underperforming placements removed early.",
      },
    ],
    audience: [
      "Businesses already spending on ads without clear return",
      "Teams that have never trusted their conversion tracking",
      "Companies preparing to increase paid budget",
      "Founders managing ads themselves alongside everything else",
    ],
    faq: [
      {
        question: "Which platforms do you work with?",
        answer:
          "Most commonly Meta and Google, with LinkedIn where the audience justifies the cost. Platform choice follows the audience research rather than preference.",
      },
      {
        question: "What is the minimum budget worth running?",
        answer:
          "Below roughly $500 per month the data is usually too thin to learn from. That budget is often better spent on conversion and content work until there is more to optimise.",
      },
      {
        question: "Why start with tracking rather than campaigns?",
        answer:
          "Because campaigns optimise toward whatever you report as a conversion. Scaling spend on a wrong signal buys more of the wrong audience faster.",
      },
      {
        question: "Do you handle creative production?",
        answer:
          "I provide creative direction, messaging and testing structure, and work with your designer or an AI-assisted production workflow for the assets themselves.",
      },
    ],
  },
  {
    slug: "marketing-analytics",
    title: "Marketing Analytics",
    category: "Measurement",
    icon: BarChart3,
    shortDescription:
      "Reporting your team trusts, connecting marketing activity to revenue.",
    description:
      "Analytics tends to fail in one of two ways: nobody looks at the dashboard, or two dashboards disagree. This engagement establishes shared definitions, fixes the tracking underneath them, and builds reporting that supports decisions rather than describing the past.",
    timeline: "3–6 weeks",
    benefits: [
      "One set of numbers everyone agrees on",
      "Tracking that survives platform changes",
      "Attribution honest about its own limits",
      "Reports that lead to decisions",
    ],
    problem: {
      heading: "Data everywhere, answers nowhere",
      body: "Each tool reports a different number, nobody is sure which is right, and marketing decisions get made on intuition because verifying them takes too long.",
      points: [
        "Analytics, ad platform and CRM figures disagreeing",
        "Key events untracked or double-counted",
        "Reporting that describes activity rather than outcomes",
        "Manual spreadsheet assembly every month",
      ],
    },
    solution: {
      heading: "Define, measure, then report",
      body: "I start with definitions — what a lead is, what a conversion is, when revenue is counted — then implement tracking to match, and build reporting that answers the specific questions your team keeps asking.",
    },
    helpsWith: [
      "Analytics implementation and event design",
      "Consent-aware and server-side tracking",
      "Attribution modelling with stated assumptions",
      "CRM and marketing data integration",
      "Dashboards for different audiences",
      "Data quality monitoring",
    ],
    deliverables: [
      "Measurement plan with agreed metric definitions",
      "Tracking implementation and validation",
      "Attribution model with documented limitations",
      "Executive and operational dashboards",
      "Automated reporting schedule",
      "Data quality alerts",
      "Training on reading and questioning the reports",
    ],
    process: [
      {
        step: "01",
        title: "Define",
        description:
          "Agree what each metric means and which decisions it is meant to inform.",
      },
      {
        step: "02",
        title: "Audit",
        description:
          "Test current tracking against real user journeys to find gaps and double counting.",
      },
      {
        step: "03",
        title: "Implement",
        description:
          "Fix the event layer, connect sources and validate against known-good data.",
      },
      {
        step: "04",
        title: "Visualise",
        description:
          "Build dashboards for the specific questions each audience asks, and nothing more.",
      },
      {
        step: "05",
        title: "Operationalise",
        description:
          "Set a review cadence and quality alerts so the reporting stays trustworthy.",
      },
    ],
    outcomes: [
      {
        label: "One version of the truth",
        description:
          "Shared definitions end the recurring argument about whose number is right.",
      },
      {
        label: "Faster decisions",
        description:
          "Questions answered in the dashboard rather than through a week of spreadsheet work.",
      },
      {
        label: "Honest attribution",
        description:
          "A model that states its assumptions instead of implying false precision.",
      },
    ],
    audience: [
      "Teams whose tools report conflicting numbers",
      "Businesses making budget decisions on instinct",
      "Companies with tracking broken by consent or platform changes",
      "Anyone rebuilding the same report manually every month",
    ],
    faq: [
      {
        question: "Which analytics stack do you work in?",
        answer:
          "Most often GA4 with a tag manager, connected to your CRM and ad platforms. If you already run a warehouse or a product analytics tool, I build on that rather than adding another layer.",
      },
      {
        question: "Can attribution ever be fully accurate?",
        answer:
          "No, and any model claiming otherwise is hiding assumptions. The goal is a model consistent enough to compare periods and channels, with its blind spots written down.",
      },
      {
        question: "How does privacy regulation affect this?",
        answer:
          "Tracking is implemented consent-aware by default. Where consent is declined, reporting relies on modelled and aggregate data, and the dashboards say so explicitly.",
      },
      {
        question: "Will my team be able to maintain it?",
        answer:
          "Yes. The measurement plan documents every event and definition, and the handover session covers how to add new tracking without breaking what exists.",
      },
    ],
  },
  {
    slug: "conversion-optimization",
    title: "Conversion Optimization",
    category: "Optimisation",
    icon: MousePointerClick,
    shortDescription:
      "Turn more of the traffic you already have into enquiries and customers.",
    description:
      "Buying more traffic is the expensive way to grow. This engagement studies how people actually use your site, finds the specific points where intent is lost, and tests changes in an order that produces evidence rather than opinions.",
    timeline: "6–10 weeks",
    benefits: [
      "More revenue from existing traffic",
      "Friction identified with evidence, not opinion",
      "A testing habit your team can continue",
      "Improvements that compound with every channel",
    ],
    problem: {
      heading: "Traffic arrives, then leaves",
      body: "Visitors reach the page, spend a moment, and go. Without behavioural data the team redesigns based on preference, and results stay flat because the actual blocker was never identified.",
      points: [
        "High traffic with low enquiry rates",
        "Forms abandoned partway through",
        "Mobile converting far below desktop",
        "Redesigns based on taste rather than evidence",
      ],
    },
    solution: {
      heading: "Evidence, then changes",
      body: "I combine analytics, session behaviour and qualitative input to locate real friction, then prioritise fixes by expected impact and effort. Big obvious problems get fixed directly; genuinely uncertain choices get tested.",
    },
    helpsWith: [
      "Conversion funnel analysis",
      "Landing page and form optimisation",
      "Mobile experience and page speed",
      "Message clarity and value proposition",
      "Trust signals and objection handling",
      "A/B test design and interpretation",
    ],
    deliverables: [
      "Funnel analysis with drop-off quantified",
      "Behavioural and heuristic UX review",
      "Prioritised optimisation backlog",
      "Rewritten copy and layout recommendations",
      "Test plan with sample size requirements",
      "Implementation support and QA",
      "Results readout with next-cycle recommendations",
    ],
    process: [
      {
        step: "01",
        title: "Measure",
        description:
          "Quantify where in the funnel people leave and how that differs by device and source.",
      },
      {
        step: "02",
        title: "Observe",
        description:
          "Session behaviour, form analytics and direct customer input to explain why they leave.",
      },
      {
        step: "03",
        title: "Prioritise",
        description:
          "Rank changes by expected impact against implementation effort.",
      },
      {
        step: "04",
        title: "Test",
        description:
          "Run properly sized experiments on the uncertain changes and ship the obvious fixes directly.",
      },
      {
        step: "05",
        title: "Roll out",
        description:
          "Apply what wins across comparable pages and document the reasoning for the next cycle.",
      },
    ],
    outcomes: [
      {
        label: "Higher conversion rate",
        description:
          "The same traffic produces more enquiries, improving the economics of every channel at once.",
      },
      {
        label: "Decisions with evidence",
        description:
          "Design debates resolved by test results rather than seniority.",
      },
      {
        label: "A repeatable practice",
        description:
          "Your team leaves with a prioritisation method and a test template they keep using.",
      },
    ],
    audience: [
      "Sites with steady traffic and weak conversion",
      "Businesses about to increase ad spend",
      "Teams planning a redesign who want evidence first",
      "Ecommerce and lead-gen sites with high drop-off",
    ],
    faq: [
      {
        question: "How much traffic do I need for A/B testing?",
        answer:
          "Statistically valid tests generally need a few thousand visitors per variant per month. Below that we use qualitative research and heuristic analysis, then ship changes directly and measure before-and-after carefully.",
      },
      {
        question: "Is this a redesign?",
        answer:
          "No. Most gains come from clarity, form design, page speed and trust signals. If a full redesign is genuinely warranted, the research from this engagement makes it far less risky.",
      },
      {
        question: "Who implements the changes?",
        answer:
          "Your developers usually implement, with specifications and QA from me. Where you have no development capacity, I can arrange implementation as part of the engagement.",
      },
      {
        question: "What if a test loses?",
        answer:
          "A losing test still eliminates a hypothesis, which is worth knowing. Roughly a third of well-designed tests win outright — the value is in the accumulated decisions, not any single result.",
      },
    ],
  },
  {
    slug: "ai-business-consulting",
    title: "AI Business Consulting",
    category: "Consulting",
    icon: Compass,
    shortDescription:
      "Practical guidance on where AI fits your operations — and where it genuinely doesn't.",
    description:
      "AI adoption fails most often for organisational reasons, not technical ones: no owner, no success criteria, no plan for the workflow around the tool. This engagement looks across your business, identifies where AI creates real leverage, and sequences adoption so it holds.",
    timeline: "4–8 weeks",
    benefits: [
      "A realistic view of where AI helps and where it doesn't",
      "Adoption sequenced by readiness, not hype",
      "Cost and risk assessed before commitment",
      "Team enablement so tools actually get used",
    ],
    problem: {
      heading: "Pressure to adopt, no clear starting point",
      body: "Leadership knows AI matters, tools are being trialled across departments, and nobody can say which experiments are worth continuing or what any of it has changed.",
      points: [
        "Tools adopted per department with no coordination",
        "Pilots that never reach production",
        "No policy on data handling or acceptable use",
        "Staff uncertainty about what AI means for their role",
      ],
    },
    solution: {
      heading: "Sequenced adoption with owners",
      body: "I assess where AI has genuine leverage across marketing, sales and operations, rank opportunities by value and readiness, and build a rollout plan with named owners, success criteria and guardrails.",
    },
    helpsWith: [
      "AI readiness and opportunity assessment",
      "Use case identification and prioritisation",
      "Tool evaluation and total cost analysis",
      "Data handling and acceptable use policy",
      "Team training and change management",
      "Pilot design with defined success criteria",
    ],
    deliverables: [
      "AI readiness assessment across functions",
      "Prioritised use case register with value estimates",
      "Tool recommendations with cost comparison",
      "Risk, privacy and data handling guidance",
      "Phased adoption roadmap with owners",
      "Pilot plans with measurable success criteria",
      "Team training session",
      "Executive summary for stakeholders",
    ],
    process: [
      {
        step: "01",
        title: "Assess",
        description:
          "Review workflows, data maturity and team capability across the functions in scope.",
      },
      {
        step: "02",
        title: "Identify",
        description:
          "Surface candidate use cases from the people doing the work, not from a vendor list.",
      },
      {
        step: "03",
        title: "Prioritise",
        description:
          "Score by business value, implementation effort and organisational readiness.",
      },
      {
        step: "04",
        title: "Pilot",
        description:
          "Design a small, measurable first implementation with a named owner and a stop condition.",
      },
      {
        step: "05",
        title: "Scale",
        description:
          "Expand what proves out, with training, guardrails and a review cadence.",
      },
    ],
    outcomes: [
      {
        label: "Clear priorities",
        description:
          "A ranked shortlist replaces scattered departmental experiments.",
      },
      {
        label: "Managed risk",
        description:
          "Data handling and acceptable use agreed before sensitive information reaches a vendor.",
      },
      {
        label: "Adoption that sticks",
        description:
          "Owners, training and success criteria so pilots reach production instead of stalling.",
      },
    ],
    audience: [
      "Leadership teams under pressure to adopt AI",
      "Businesses with stalled or scattered pilots",
      "Companies needing an acceptable use policy",
      "Organisations planning significant AI investment",
    ],
    faq: [
      {
        question: "Is this only about marketing?",
        answer:
          "Marketing and sales are where I go deepest, but the assessment covers operations and customer service too, since that is often where the clearest time savings sit.",
      },
      {
        question: "What if AI isn't the right answer?",
        answer:
          "Then I will say so. Several engagements have concluded that fixing a process or a data problem first would deliver more value than any tool — that finding is part of what you are paying for.",
      },
      {
        question: "Do you help with implementation?",
        answer:
          "Yes, either through the automation and marketing engagements or by working alongside your internal team during the pilot phase.",
      },
      {
        question: "How do you handle data privacy?",
        answer:
          "Data handling is assessed before any tool recommendation. Where customer or sensitive data is involved, the guidance covers processing location, retention and vendor terms explicitly.",
      },
    ],
  },
];
