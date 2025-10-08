'use client';

import { useEffect, useRef, useState } from 'react';

const STAR_COUNT = 140;
const MAX_STAR_SIZE = 2.2;
const STAR_SPEED = 0.04;

const createStar = (width: number, height: number) => ({
  x: Math.random() * width,
  y: Math.random() * height,
  radius: Math.random() * MAX_STAR_SIZE + 0.2,
  velocity: Math.random() * STAR_SPEED + STAR_SPEED * 0.6
});

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!canvas || !context) {
      return;
    }

    const resetCanvas = () => {
      context.setTransform(1, 0, 0, 1, 0, 0);
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    resetCanvas();

    if (prefersReducedMotion) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = 'rgba(255,255,255,0.06)';
      for (let index = 0; index < STAR_COUNT / 4; index += 1) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * MAX_STAR_SIZE * 0.8 + 0.2;
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
      }
      return;
    }

    let animationFrameId = 0;
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;

    const resizeCanvas = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(dpr, dpr);
    };

    resizeCanvas();

    let stars = Array.from({ length: STAR_COUNT }, () => createStar(width, height));

    const render = () => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = 'rgba(255,255,255,0.8)';

      for (const star of stars) {
        star.y += star.velocity;
        if (star.y > height) {
          star.x = Math.random() * width;
          star.y = -star.radius;
          star.velocity = Math.random() * STAR_SPEED + STAR_SPEED * 0.6;
        }

        context.globalAlpha = 0.35 + Math.random() * 0.4;
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fill();
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    const handleResize = () => {
      context.setTransform(1, 0, 0, 1, 0, 0);
      resizeCanvas();
      stars = Array.from({ length: STAR_COUNT }, () => createStar(width, height));
    };

    animationFrameId = window.requestAnimationFrame(render);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      aria-hidden
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-50 h-full w-full bg-[radial-gradient(circle_at_center,rgba(74,41,115,0.25)_0%,rgba(5,6,10,0.95)_55%,rgba(0,0,0,1)_100%)]"
    />
  );
}
