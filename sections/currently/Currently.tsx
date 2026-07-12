import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { ArrowRight, BrainCircuit, LaptopMinimal, BookMarked } from 'lucide-react';

const items = [
  {
    title: 'Learning Adobe Experience Manager',
    detail: 'Deepening my understanding of content systems and structured digital experiences.',
    icon: LaptopMinimal
  },
  {
    title: 'Building automation projects',
    detail: 'Exploring practical automation ideas that improve daily operations and workflows.',
    icon: BrainCircuit
  },
  {
    title: 'Improving my Python foundation',
    detail: 'Strengthening my core programming skills for automation and technical growth.',
    icon: BookMarked
  }
];

export function Currently() {
  return (
    <AnimatedSection className="border-b border-white/10 py-24">
      <Container>
        <Heading as="h2" className="mb-10 text-3xl sm:text-4xl">
          Currently
        </Heading>
        <Card className="overflow-hidden border-sky-400/20 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-sky-950/60 p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">What I’m focusing on now</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-50">Building depth while staying curious.</h3>
              <p className="mt-4 leading-8 text-slate-400">
                My current focus is a mix of professional depth, systems thinking, and steady technical growth through content operations, automation, and AI exploration.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              Always building <ArrowRight className="h-4 w-4" />
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {items.map(({ title, detail, icon: Icon }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/20 bg-sky-500/10 text-sky-300">
                  <Icon className="h-4 w-4" />
                </div>
                <h4 className="text-base font-semibold text-slate-100">{title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p>
              </div>
            ))}
          </div>
        </Card>
      </Container>
    </AnimatedSection>
  );
}
