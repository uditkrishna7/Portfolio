import { ReactNode } from 'react';

type HeadingProps = {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
};

export function Heading({ children, as: Component = 'h2', className = '' }: HeadingProps) {
  return <Component className={`text-balance font-semibold tracking-tight text-slate-900 ${className}`}>{children}</Component>;
}
