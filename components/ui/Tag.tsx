import { ReactNode } from 'react';

type TagProps = {
  children: ReactNode;
};

export function Tag({ children }: TagProps) {
  return <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">{children}</span>;
}
