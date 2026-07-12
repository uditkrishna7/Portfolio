import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10">
      <Container className="flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Udit Krishna. Crafted for a long-term digital presence.</p>
        <p>Built with Next.js, TypeScript, and thoughtful design.</p>
      </Container>
    </footer>
  );
}
