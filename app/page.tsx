import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustSection } from "@/components/home/TrustSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { Process } from "@/components/home/Process";
import { WhyWorkWithMe } from "@/components/home/WhyWorkWithMe";
import { Results } from "@/components/home/Results";
import { BlogPreview } from "@/components/home/BlogPreview";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.person} — ${siteConfig.role}`,
  description:
    "I help ambitious businesses leverage AI, automation, and digital marketing to build growth systems that keep working after the campaign ends.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <AboutPreview />
      <ServicesPreview />
      <Process />
      <WhyWorkWithMe />
      <Results />
      <BlogPreview />
      <ConsultationCTA />
    </>
  );
}
