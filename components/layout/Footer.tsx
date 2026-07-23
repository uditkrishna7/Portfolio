import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 sm:py-10">
      <Container className="flex flex-col gap-3 text-sm leading-7 text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Udit Krishna. Crafted for a long-term digital presence.</p>
        <p>Built with Next.js, TypeScript, and thoughtful design.</p>
      </Container>
    </footer>
  );
}
