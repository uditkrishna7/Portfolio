"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      animate={{ x: position.x - 180, y: position.y - 180 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, mass: 0.3 }}
      aria-hidden="true"
    >
      <div className="h-36 w-36 rounded-full bg-sky-500/15 blur-3xl" />
    </motion.div>
  );
}
