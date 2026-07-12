import { profile } from '@/content/profile';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';

export function About() {
  return (
    <section id="about" className="border-b border-slate-200 py-24">
      <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <Heading as="h2" className="text-3xl sm:text-4xl">
            About
          </Heading>
        </div>
        <Card className="space-y-4">
          <p className="text-lg leading-8 text-slate-700">
            {profile.tagline}
          </p>
          <p className="leading-8 text-slate-600">
            I am driven by curiosity, discipline, and a commitment to continuous learning. I enjoy working with systems, solving problems carefully, and building a strong technical foundation that can grow over time.
          </p>
        </Card>
      </Container>
    </section>
  );
}
