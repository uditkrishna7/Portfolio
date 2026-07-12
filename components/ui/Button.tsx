import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
};

export function Button({ children, variant = 'primary', className = '' }: ButtonProps) {
  const variants = {
    primary: 'border border-sky-400/30 bg-sky-500/90 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_12px_40px_rgba(96,165,250,0.25)] hover:bg-sky-400',
    secondary: 'border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10',
    ghost: 'border border-transparent bg-transparent text-slate-300 hover:text-slate-100 hover:bg-white/5'
  };

  return (
    <button className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
