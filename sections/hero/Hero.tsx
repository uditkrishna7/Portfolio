import { profile } from '@/content/profile';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 py-24 sm:py-32">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-8">
          <Badge>Digital Headquarters</Badge>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Building a thoughtful future in operations, automation, and AI.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              {profile.summary}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button>Download Resume</Button>
            <Button variant="secondary">Contact</Button>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">Current focus</p>
          <ul className="mt-6 space-y-3 text-slate-700">
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
