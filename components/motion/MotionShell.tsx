"use client";

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

type MotionShellProps = {
  children: ReactNode;
};

export function MotionShell({ children }: MotionShellProps) {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#0A0A0A]" />;
  }

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
