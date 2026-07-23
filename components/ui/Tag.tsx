import { ReactNode } from 'react';

type TagProps = {
  children: ReactNode;
};

export function Tag({ children }: TagProps) {
  return <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200 transition duration-200 will-change-transform hover:border-sky-400/30 hover:bg-sky-500/10 hover:text-slate-100 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 motion-reduce:transition-none motion-reduce:hover:transform-none">{children}</span>;
}
