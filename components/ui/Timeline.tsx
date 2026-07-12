import { ReactNode } from 'react';

type TimelineProps = {
  children: ReactNode;
};

export function Timeline({ children }: TimelineProps) {
  return <div className="relative space-y-8 before:absolute before:left-3 before:top-0 before:h-full before:w-px before:bg-white/10">{children}</div>;
}
