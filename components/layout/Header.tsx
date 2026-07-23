import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0A0A0A]/85 backdrop-blur-xl">
      <Container className="flex flex-wrap items-center justify-between gap-3 py-3 sm:py-4">
        <Link href="/" className="min-h-[44px] text-sm font-semibold uppercase tracking-[0.35em] text-slate-100">
          Udit Krishna
        </Link>
        <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-300 sm:gap-6">
          <Link className="rounded-full px-2 py-2 transition duration-200 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 active:scale-[0.97]" href="#about">About</Link>
          <Link className="rounded-full px-2 py-2 transition duration-200 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 active:scale-[0.97]" href="#experience">Experience</Link>
          <Link className="rounded-full px-2 py-2 transition duration-200 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 active:scale-[0.97]" href="#projects">Projects</Link>
          <Link className="rounded-full px-2 py-2 transition duration-200 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 active:scale-[0.97]" href="#contact">Contact</Link>
        </nav>
      </Container>
    </header>
  );
}
