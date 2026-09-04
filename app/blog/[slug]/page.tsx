import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, CalendarDays } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GradientText } from "@/components/ui/GradientText";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CoverArt } from "@/components/blog/CoverArt";
import { ArticleContent } from "@/components/blog/ArticleContent";
import {
  TableOfContents,
  type TocItem,
} from "@/components/blog/TableOfContents";
import { ShareLinks } from "@/components/blog/ShareLinks";
import { BlogCard } from "@/components/blog/BlogCard";
import { Reveal, Stagger, RevealItem } from "@/components/animations/Reveal";
import { AnimatedMeshGradient } from "@/components/animations/AnimatedMeshGradient";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getPostBySlug,
  getPostSlugs,
  getRelatedPosts,
} from "@/lib/content/blog";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { formatDate, slugify } from "@/lib/utils";
import type { ContentBlock, Post, PostSummary } from "@/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: "Article not found",
      description: "The article you are looking for does not exist.",
      path: `/blog/${slug}`,
      index: false,
    });
  }

  return buildMetadata({
    title: post.seo?.title ?? post.title,
    description: post.seo?.description ?? post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    tags: post.tags,
  });
}

function buildToc(blocks: ContentBlock[]): TocItem[] {
  return blocks
    .filter(
      (block): block is Extract<ContentBlock, { type: "heading" }> =>
        block.type === "heading",
    )
    .map((block) => ({
      id: slugify(block.text),
      text: block.text,
      level: block.level,
    }));
}

function toSummary(post: Post): PostSummary {
  const { content: _content, seo: _seo, ...summary } = post;
  return summary;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const related = await getRelatedPosts(slug, 3);
  const toc = buildToc(post.content);
  const url = `${siteConfig.url}/blog/${post.slug}`;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          dateModified: post.date,
          articleSection: post.category,
          keywords: post.tags.join(", "),
          wordCount: post.content.reduce((total, block) => {
            if (block.type === "paragraph" || block.type === "quote") {
              return total + block.text.split(/\s+/).length;
            }
            if (block.type === "list") {
              return (
                total +
                block.items.reduce(
                  (sum, item) => sum + item.split(/\s+/).length,
                  0,
                )
              );
            }
            return total;
          }, 0),
          author: {
            "@type": "Person",
            name: post.author.name,
            jobTitle: post.author.role,
            url: `${siteConfig.url}/about`,
          },
          publisher: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          inLanguage: "en",
        }}
      />

      {/* Header */}
      <header className="relative isolate overflow-hidden pt-28 pb-10 sm:pt-36 sm:pb-12">
        <AnimatedMeshGradient intensity="subtle" />

        <Container>
          <Reveal>
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Blog", href: "/blog" },
                { name: post.title },
              ]}
            />
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8">
              <Badge variant="brand">{post.category}</Badge>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-display-sm font-semibold text-balance text-fg">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-muted">
              {post.excerpt}
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-white/[0.07] pt-7">
              <div className="flex items-center gap-3">
                <span
                  className="flex size-10 items-center justify-center rounded-full border border-white/12 bg-[linear-gradient(135deg,var(--color-purple-500),var(--color-blue-500))] text-sm font-semibold text-white"
                  aria-hidden="true"
                >
                  {post.author.initials}
                </span>
                <div>
                  <p className="text-sm font-medium text-fg">
                    {post.author.name}
                  </p>
                  <p className="text-xs text-fg-subtle">{post.author.role}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-fg-subtle">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="size-3.5" aria-hidden="true" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="size-3.5" aria-hidden="true" />
                  {post.readingTime} min read
                </span>
              </div>
            </div>
          </Reveal>
        </Container>
      </header>

      {/* Cover */}
      <Container>
        <Reveal delay={0.1}>
          <div className="relative aspect-21/9 overflow-hidden rounded-card border border-white/[0.07] sm:aspect-16/7">
            <CoverArt variant={post.cover} size="feature" />
          </div>
        </Reveal>
      </Container>

      {/* Body */}
      <Section spacing="tight">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16">
            <article className="min-w-0 max-w-2xl">
              <ArticleContent blocks={post.content} />

              {/* Tags + share */}
              <div className="mt-14 flex flex-col gap-6 border-t border-white/[0.07] pt-8">
                <ul className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-fg-subtle"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <ShareLinks url={url} title={post.title} />
              </div>

              {/* Author */}
              <Card padding="lg" className="mt-10">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <span
                    className="flex size-14 shrink-0 items-center justify-center rounded-full border border-white/12 bg-[linear-gradient(135deg,var(--color-purple-500),var(--color-blue-500))] text-lg font-semibold text-white"
                    aria-hidden="true"
                  >
                    {post.author.initials}
                  </span>
                  <div>
                    <p className="text-base font-semibold text-fg">
                      {post.author.name}
                    </p>
                    <p className="mt-1 text-sm text-fg-subtle">
                      {post.author.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                      I help businesses use AI, automation and modern marketing
                      systems to grow in ways they can measure and repeat. Based
                      in {siteConfig.location.city}, working worldwide.
                    </p>
                  </div>
                </div>
              </Card>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <TableOfContents items={toc} />
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Related */}
      {related.length > 0 ? (
        <Section spacing="tight" className="border-t border-white/[0.06]">
          <Container size="wide">
            <h2 className="text-2xl font-semibold text-fg">
              Related <GradientText>reading</GradientText>
            </h2>
            <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <RevealItem key={item.slug} className="h-full">
                  <BlogCard post={toSummary(item)} />
                </RevealItem>
              ))}
            </Stagger>
          </Container>
        </Section>
      ) : null}

      <ConsultationCTA
        eyebrow="Book a consultation"
        description="If this article described a problem you recognise, a 30-minute call is the fastest way to work out what to do about it in your specific situation."
      />
    </>
  );
}
