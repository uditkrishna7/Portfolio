import { certifications } from '@/content/certifications';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';

export function Certifications() {
  return (
    <section className="border-b border-white/10 py-24">
      <Container>
        <Heading as="h2" className="mb-10 text-3xl sm:text-4xl">
          Certifications
        </Heading>
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((item) => (
            <Card key={item.title} className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">{item.year}</p>
              <h3 className="text-xl font-semibold text-slate-50">{item.title}</h3>
              <p className="text-slate-400">{item.issuer}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
