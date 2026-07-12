import { ReactNode } from 'react';

type HeadingProps = {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
};

export function Heading({ children, as: Component = 'h2', className = '' }: HeadingProps) {
  return <Component className={`text-balance font-semibold tracking-[-0.02em] text-slate-50 ${className}`}>{children}</Component>;
}
