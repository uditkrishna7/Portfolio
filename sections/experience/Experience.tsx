import { experience } from '@/content/experience';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import { Timeline } from '@/components/ui/Timeline';
import { AnimatedSection } from '@/components/motion/AnimatedSection';

export function Experience() {
  return (
    <AnimatedSection id="experience" className="border-b border-white/10 py-24">
      <Container>
        <Heading as="h2" className="mb-10 text-3xl sm:text-4xl">
          Experience
        </Heading>
        <Timeline>
          {experience.map((item) => (
            <div key={item.company} className="relative pl-8">
              <div className="absolute left-0 top-2 h-3 w-3 rounded-full border-2 border-sky-400 bg-[#0A0A0A]" />
              <Card className="space-y-3 transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-[0_20px_80px_rgba(96,165,250,0.12)]">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-50">{item.role}</h3>
                    <p className="text-slate-400">{item.company}</p>
                  </div>
                  <span className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">{item.period}</span>
                </div>
                <ul className="list-disc space-y-2 pl-5 text-slate-400">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </Timeline>
      </Container>
    </AnimatedSection>
  );
}
