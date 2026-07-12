import { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return <span className="inline-flex rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.32em] text-sky-300">{children}</span>;
}
