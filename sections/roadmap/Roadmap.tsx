import { roadmap } from '@/content/roadmap';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/motion/AnimatedSection';

export function Roadmap() {
  return (
    <AnimatedSection className="border-b border-white/10 py-24">
      <Container>
        <Heading as="h2" className="mb-10 text-3xl sm:text-4xl">
          Roadmap
        </Heading>
        <div className="grid gap-4 md:grid-cols-5">
          {roadmap.map((item) => (
            <Card key={item.stage} className="text-center transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-[0_20px_80px_rgba(96,165,250,0.12)]">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-50">{item.stage}</h3>
            </Card>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
