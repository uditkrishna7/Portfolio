import { profile } from '@/content/profile';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { AssetImage } from '@/components/ui/AssetImage';
import { profileImage } from '@/config/assets';
import { Sparkles, Workflow, BrainCircuit } from 'lucide-react';

export function About() {
  return (
    <AnimatedSection id="about" className="border-b border-white/10 py-24">
      <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="space-y-6">
          <Heading as="h2" className="text-3xl sm:text-4xl">
            About
          </Heading>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-3 shadow-[0_20px_80px_rgba(2,6,23,0.28)]">
            <AssetImage
              src={profileImage}
              alt="Profile portrait"
              className="aspect-[3/4] rounded-[1.1rem]"
              fallbackClassName="aspect-[3/4] rounded-[1.1rem]"
              fallbackLabel="Profile image"
            />
          </div>
        </div>
        <div className="space-y-4">
          <Card className="space-y-4 transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-[0_20px_80px_rgba(96,165,250,0.12)]">
            <p className="text-lg leading-8 text-slate-200">
              {profile.tagline}
            </p>
            <p className="leading-8 text-slate-400">
              I am driven by curiosity, discipline, and a commitment to continuous learning. I enjoy working with systems, solving problems carefully, and building a strong technical foundation that can grow over time.
            </p>
          </Card>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: Sparkles, label: 'Curiosity' },
              { icon: Workflow, label: 'Systems Thinking' },
              { icon: BrainCircuit, label: 'Automation' }
            ].map(({ icon: Icon, label }) => (
              <Card key={label} className="flex items-center gap-3 transition duration-300 hover:-translate-y-1 hover:border-sky-400/40">
                <div className="rounded-full border border-sky-400/20 bg-sky-500/10 p-2 text-sky-300">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-sm text-slate-300">{label}</span>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
