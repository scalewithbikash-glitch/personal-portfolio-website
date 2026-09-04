import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BlogCard } from "@/components/blog/BlogCard";
import { Stagger, RevealItem } from "@/components/animations/Reveal";
import { getRecentPosts } from "@/lib/content/blog";

export async function BlogPreview() {
  const posts = await getRecentPosts(3);

  return (
    <Section className="border-t border-white/[0.06]">
      <Container size="wide">
        <SectionHeading
          eyebrow="Insights"
          title="Notes on AI, marketing and growth"
          description="Practical writing from client work — what worked, what did not, and the reasoning behind both."
          action={
            <Button href="/blog" variant="secondary">
              Read the blog
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Button>
          }
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <RevealItem key={post.slug} className="h-full">
              <BlogCard post={post} />
            </RevealItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
