import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { GradientText } from "@/components/ui/GradientText";
import { Badge } from "@/components/ui/Badge";
import { PageHero } from "@/components/layout/PageHero";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { Reveal } from "@/components/animations/Reveal";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getAllPosts,
  getFeaturedPost,
  getUsedCategories,
  getAllTags,
} from "@/lib/content/blog";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import type { PostSummary } from "@/types";

export const metadata: Metadata = buildMetadata({
  title: "Insights on AI Marketing & Growth",
  description:
    "Practical writing on AI marketing, automation, SEO, analytics and growth strategy from consultant Bikash Gurung.",
  path: "/blog",
});

/** Strip article bodies before the list reaches the client bundle. */
function toSummary(post: Awaited<ReturnType<typeof getAllPosts>>[number]): PostSummary {
  const { content: _content, seo: _seo, ...summary } = post;
  return summary;
}

export default async function BlogPage() {
  const [posts, featured, categories, tags] = await Promise.all([
    getAllPosts(),
    getFeaturedPost(),
    getUsedCategories(),
    getAllTags(),
  ]);

  const rest = posts.filter((post) => post.slug !== featured.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `${siteConfig.name} Insights`,
          url: `${siteConfig.url}/blog`,
          description:
            "Practical writing on AI marketing, automation, SEO, analytics and growth strategy.",
          author: { "@type": "Person", name: siteConfig.person },
          blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            datePublished: post.date,
            url: `${siteConfig.url}/blog/${post.slug}`,
          })),
        }}
      />

      <PageHero
        eyebrow="Insights"
        title={
          <>
            Notes on AI, marketing and <GradientText animated>growth</GradientText>
          </>
        }
        description="What I learn from client work — what worked, what did not, and the reasoning behind both. No trend pieces."
      />

      {/* Featured article */}
      <Section spacing="tight">
        <Container size="wide">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <Badge variant="brand" dot>
                Featured
              </Badge>
              <span className="text-sm text-fg-subtle">Most recent pick</span>
            </div>
            <BlogCard post={toSummary(featured)} variant="featured" />
          </Reveal>
        </Container>
      </Section>

      {/* All articles */}
      <Section spacing="tight" className="pb-24 sm:pb-28">
        <Container size="wide">
          <h2 className="text-2xl font-semibold text-fg">All articles</h2>
          <div className="mt-8">
            <BlogGrid
              posts={rest.map(toSummary)}
              categories={categories}
              tags={tags}
            />
          </div>
        </Container>
      </Section>

      <ConsultationCTA
        eyebrow="Work together"
        title={
          <>
            Want this applied to <GradientText>your business</GradientText>?
          </>
        }
        description="These articles describe how I work. If a problem here looks like yours, a short call is the fastest way to find out whether it is worth solving together."
      />
    </>
  );
}
