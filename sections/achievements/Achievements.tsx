import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Card } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { AssetImage } from '@/components/ui/AssetImage';
import { achievementImages } from '@/config/assets';
import { Trophy, Sparkles, BookOpen, Medal } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'National-Level Football Player',
    body: 'Football strengthened my discipline, leadership, teamwork, consistency, and mental toughness — qualities that now shape how I approach professional work and long-term growth.',
    accent: 'from-amber-500/20 to-orange-500/10',
    imageSrc: achievementImages.football
  },
  {
    icon: Medal,
    title: 'Professional Recognition',
    body: 'Recognition from leadership, appreciation from managers, and milestone moments have reinforced the importance of reliability, ownership, and thoughtful execution.',
    accent: 'from-sky-500/20 to-cyan-500/10',
    imageSrc: achievementImages.genpact
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    body: 'My path continues through AI, automation, Adobe Experience Manager, and emerging digital tools — always building toward more depth and impact.',
    accent: 'from-violet-500/20 to-fuchsia-500/10',
    imageSrc: achievementImages.leadership
  }
];

export function Achievements() {
  return (
    <AnimatedSection className="border-b border-white/10 py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mb-10 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Heading as="h2" className="text-3xl sm:text-4xl">
              Achievements
            </Heading>
            <p className="mt-3 max-w-2xl text-slate-400">
              The experiences that shaped my character and continue to influence the way I work.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-3 py-2 text-sm text-sky-200">
            <Sparkles className="h-4 w-4" />
            Built through persistence and growth
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {achievements.map(({ icon: Icon, title, body, accent, imageSrc }) => (
            <Card key={title} className={`relative overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-[0_20px_80px_rgba(96,165,250,0.12)]`}>
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`} />
              {imageSrc ? (
                <div className="mb-5 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80">
                  <AssetImage
                    src={imageSrc}
                    alt={`${title} illustration`}
                    className="aspect-[16/10]"
                    fallbackClassName="aspect-[16/10]"
                    fallbackLabel="Achievement"
                  />
                </div>
              ) : null}
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sky-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-slate-50">{title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
