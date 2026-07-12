import { ReactNode } from 'react';

type TagProps = {
  children: ReactNode;
};

export function Tag({ children }: TagProps) {
  return <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">{children}</span>;
}
