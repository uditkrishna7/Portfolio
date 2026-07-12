import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0A0A0A]/85 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-100">
          Udit Krishna
        </Link>
        <nav className="flex items-center gap-6 text-sm text-slate-300">
          <Link className="transition hover:text-slate-100" href="#about">About</Link>
          <Link className="transition hover:text-slate-100" href="#experience">Experience</Link>
          <Link className="transition hover:text-slate-100" href="#projects">Projects</Link>
          <Link className="transition hover:text-slate-100" href="#contact">Contact</Link>
        </nav>
      </Container>
    </header>
  );
}
