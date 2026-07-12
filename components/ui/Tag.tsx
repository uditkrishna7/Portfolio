import { ReactNode } from 'react';

type TagProps = {
  children: ReactNode;
};

export function Tag({ children }: TagProps) {
  return <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200 transition hover:border-sky-400/30 hover:bg-sky-500/10 hover:text-slate-100">{children}</span>;
}
