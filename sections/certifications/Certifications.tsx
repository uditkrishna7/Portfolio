import { certifications } from '@/content/certifications';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { AssetImage } from '@/components/ui/AssetImage';

export function Certifications() {
  return (
    <AnimatedSection className="border-b border-white/10 py-24">
      <Container>
        <Heading as="h2" className="mb-10 text-3xl sm:text-4xl">
          Certifications
        </Heading>
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((item) => (
            <Card key={item.title} className="space-y-3 transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-[0_20px_80px_rgba(96,165,250,0.12)]">
              {item.imageSrc ? (
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80">
                  <AssetImage
                    src={item.imageSrc}
                    alt={`${item.title} certificate preview`}
                    className="aspect-[16/10]"
                    fallbackClassName="aspect-[16/10]"
                    fallbackLabel="Certificate preview"
                  />
                </div>
              ) : null}
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">{item.year}</p>
              <h3 className="text-xl font-semibold text-slate-50">{item.title}</h3>
              <p className="text-slate-400">{item.issuer}</p>
            </Card>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
