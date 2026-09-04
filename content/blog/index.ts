import type { Post } from "@/types";

import { post as aiMarketingTools } from "./ai-marketing-tools-problem";
import { post as leadFollowUp } from "./automating-lead-follow-up";
import { post as aiContentRanks } from "./ai-content-that-ranks";
import { post as measurementModel } from "./measurement-model-you-can-trust";
import { post as plan306090 } from "./30-60-90-marketing-plan";
import { post as aiLeadScoring } from "./ai-lead-scoring";
import { post as positioning } from "./positioning-before-tactics";
import { post as personalization } from "./personalization-without-being-creepy";
import { post as costPerLead } from "./cutting-cost-per-lead";

/** All articles. Order here is irrelevant — the content layer sorts by date. */
export const posts: Post[] = [
  aiMarketingTools,
  leadFollowUp,
  aiContentRanks,
  measurementModel,
  plan306090,
  aiLeadScoring,
  positioning,
  personalization,
  costPerLead,
];
