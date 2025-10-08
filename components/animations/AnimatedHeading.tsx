'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { createElement } from 'react';
import type { ReactNode } from 'react';

const headingMap = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3
};

type HeadingTag = keyof typeof headingMap;

type AnimatedHeadingProps = {
  as?: HeadingTag;
  className?: string;
  children: ReactNode;
  delay?: number;
};

export default function AnimatedHeading({ as = 'h2', className, children, delay = 0 }: AnimatedHeadingProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = headingMap[as];

  if (shouldReduceMotion) {
    return createElement(as, { className }, children);
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, letterSpacing: '0.12em', y: 20 }}
      whileInView={{ opacity: 1, letterSpacing: 'normal', y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      viewport={{ once: true, amount: 0.6 }}
    >
      {children}
    </Component>
  );
}
