import { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export function Section({ children, id, className = '' }: SectionProps) {
  return (
    <section id={id} className={`mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </section>
  );
}
