import { ReactNode } from 'react';

type ModalProps = {
  children: ReactNode;
  open?: boolean;
};

export function Modal({ children, open = false }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A]/80 p-6">
      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#111827] p-6 shadow-xl">{children}</div>
    </div>
  );
}
