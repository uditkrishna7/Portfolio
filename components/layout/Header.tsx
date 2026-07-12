import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-900">
          Udit Krishna
        </Link>
        <nav className="flex items-center gap-6 text-sm text-slate-600">
          <Link href="#about">About</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </Container>
    </header>
  );
}
