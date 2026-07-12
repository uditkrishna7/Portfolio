import { ReactNode } from 'react';

type TooltipProps = {
  children: ReactNode;
  label: string;
};

export function Tooltip({ children, label }: TooltipProps) {
  return (
    <div className="group relative inline-flex">
      {children}
      <span className="pointer-events-none absolute -top-10 left-1/2 z-10 -translate-x-1/2 rounded-full bg-slate-900 px-3 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
        {label}
      </span>
    </div>
  );
}
