import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return <div className={`rounded-2xl border border-white/10 bg-[#111827]/90 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.45)] backdrop-blur transition duration-300 ${className}`}>{children}</div>;
}
