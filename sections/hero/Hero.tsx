import { profile } from '@/content/profile';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { getResumeHref } from '@/utils/resume';

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 py-24 sm:py-32">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-8">
          <Badge>Digital Headquarters</Badge>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
              Building a thoughtful future in operations, automation, and AI.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              {profile.summary}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={getResumeHref()} target="_blank" rel="noreferrer" className="inline-flex">
              <Button>Download Resume</Button>
            </a>
            <Button variant="secondary">Contact</Button>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#111827]/90 p-8 shadow-[0_20px_80px_rgba(2,6,23,0.45)]">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">Current focus</p>
          <ul className="mt-6 space-y-3 text-slate-300">
            <li>• Content Management</li>
            <li>• HTML, CSS, and JavaScript</li>
            <li>• Adobe Experience Manager and WordPress</li>
            <li>• Python, automation, and AI curiosity</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
