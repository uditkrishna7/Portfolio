import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
};

export function Button({ children, variant = 'primary', className = '' }: ButtonProps) {
  const variants = {
    primary: 'bg-slate-900 text-white hover:bg-slate-700',
    secondary: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50',
    ghost: 'bg-transparent text-slate-700 hover:bg-slate-100'
  };

  return (
    <button className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
