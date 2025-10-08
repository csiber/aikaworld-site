'use client';

import { useEffect } from 'react';

const HEADER_OFFSET = 72;

function easeOutBack(progress: number) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(progress - 1, 3) + c1 * Math.pow(progress - 1, 2);
}

export default function SmoothScrollProvider() {
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return;
    }

    let animationFrame = 0;

    const cancelAnimation = () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
    };

    const animateScroll = (targetY: number) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      const duration = Math.min(900, Math.max(450, Math.abs(distance) * 0.6));
      const startTime = performance.now();

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const eased = easeOutBack(progress);
        window.scrollTo({ top: startY + distance * eased });
        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(tick);
        }
      };

      animationFrame = window.requestAnimationFrame(tick);
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) {
        return;
      }

      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor || anchor.getAttribute('href') === '#') {
        return;
      }

      const url = new URL(anchor.href, window.location.href);
      if (url.pathname !== window.location.pathname) {
        return;
      }

      const id = decodeURIComponent(url.hash.replace(/^#/, ''));
      if (!id) {
        return;
      }

      const destination = document.getElementById(id);
      if (!destination) {
        return;
      }

      event.preventDefault();
      cancelAnimation();

      const rect = destination.getBoundingClientRect();
      const targetY = rect.top + window.scrollY - HEADER_OFFSET;
      animateScroll(targetY);

      window.history.pushState({}, '', `#${id}`);
      window.requestAnimationFrame(() => destination.focus({ preventScroll: true }));
    };

    document.addEventListener('click', handleClick, { passive: false });

    return () => {
      cancelAnimation();
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}
