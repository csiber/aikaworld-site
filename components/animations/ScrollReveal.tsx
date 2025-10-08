'use client';

import { motion, useReducedMotion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
};

export default function ScrollReveal({ children, delay = 0, className, once = true }: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: '0px 0px -15% 0px', once });
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasBeenInView(true);
    }
  }, [isInView]);

  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ transformOrigin: 'top center' }}
      initial={{ opacity: 0, y: 40, rotateX: 6 }}
      animate={isInView || hasBeenInView ? { opacity: 1, y: 0, rotateX: 0 } : undefined}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
