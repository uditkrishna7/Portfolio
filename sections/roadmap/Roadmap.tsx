import { roadmap } from '@/content/roadmap';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';

export function Roadmap() {
  return (
    <section className="border-b border-slate-200 py-24">
      <Container>
        <Heading as="h2" className="mb-10 text-3xl sm:text-4xl">
          Roadmap
        </Heading>
        <div className="grid gap-4 md:grid-cols-5">
          {roadmap.map((item) => (
            <Card key={item.stage} className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.stage}</h3>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
