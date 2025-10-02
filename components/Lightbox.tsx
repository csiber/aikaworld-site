'use client';

import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import type { LightboxDictionary } from '../lib/i18n/types';

type LightboxImage = {
  src: string;
  alt: string;
};

type LightboxProps = {
  images: LightboxImage[];
  isOpen: boolean;
  initialIndex?: number;
  onClose: () => void;
  dictionary: LightboxDictionary;
};

const clampIndex = (index: number, length: number) => {
  if (length <= 0) {
    return 0;
  }

  return (index + length) % length;
};

export default function Lightbox({ images, isOpen, initialIndex = 0, onClose, dictionary }: LightboxProps) {
  const sanitizedInitialIndex = useMemo(() => clampIndex(initialIndex, images.length), [initialIndex, images.length]);
  const [currentIndex, setCurrentIndex] = useState(sanitizedInitialIndex);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);
  const firstFocusableRef = useRef<HTMLElement | null>(null);
  const lastFocusableRef = useRef<HTMLElement | null>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(sanitizedInitialIndex);
    }
  }, [isOpen, sanitizedInitialIndex]);

  const showNext = useCallback(() => {
    if (images.length <= 1) return;
    setCurrentIndex(prev => clampIndex(prev + 1, images.length));
  }, [images.length]);

  const showPrev = useCallback(() => {
    if (images.length <= 1) return;
    setCurrentIndex(prev => clampIndex(prev - 1, images.length));
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        showNext();
        return;
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        showPrev();
        return;
      }

      if (event.key === 'Tab') {
        const container = containerRef.current;
        const firstFocusable = firstFocusableRef.current;
        const lastFocusable = lastFocusableRef.current ?? firstFocusable;

        if (!container || !firstFocusable || !lastFocusable) {
          return;
        }

        const isFocusWithinDialog = container.contains(document.activeElement);

        if (event.shiftKey) {
          if (!isFocusWithinDialog || document.activeElement === firstFocusable) {
            event.preventDefault();
            lastFocusable.focus();
          }
          return;
        }

        if (!isFocusWithinDialog || document.activeElement === lastFocusable) {
          event.preventDefault();
          firstFocusable.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, showNext, showPrev]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    previouslyFocusedElementRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const focusableElements = [
      closeButtonRef.current,
      prevButtonRef.current,
      nextButtonRef.current,
    ].filter((element): element is HTMLButtonElement => element !== null);

    firstFocusableRef.current = focusableElements[0] ?? null;
    lastFocusableRef.current = focusableElements[focusableElements.length - 1] ?? firstFocusableRef.current;

    const focusTarget = firstFocusableRef.current ?? containerRef.current;

    if (focusTarget) {
      requestAnimationFrame(() => {
        focusTarget.focus();
      });
    }

    return () => {
      const previouslyFocusedElement = previouslyFocusedElementRef.current;
      firstFocusableRef.current = null;
      lastFocusableRef.current = null;
      previouslyFocusedElementRef.current = null;

      if (previouslyFocusedElement) {
        requestAnimationFrame(() => {
          previouslyFocusedElement.focus();
        });
      }
    };
  }, [isOpen]);

  if (!isOpen || images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];
  const totalImages = images.length;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur"
      role="dialog"
      aria-modal
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      tabIndex={-1}
      onClick={onClose}
    >
      <div className="flex items-center justify-between gap-4 p-4 text-white">
        <div className="flex flex-col gap-1">
          <h2 id={titleId} className="text-base font-semibold md:text-lg">
            {dictionary.ariaLabel}
          </h2>
          <span id={descriptionId} className="text-sm opacity-80 md:text-base">
            {currentIndex + 1} / {totalImages}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          ref={closeButtonRef}
          className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label={dictionary.close}
        >
          {dictionary.closeHint}
        </button>
      </div>

      <div className="relative flex-1" onClick={event => event.stopPropagation()}>
        <button
          type="button"
          onClick={showPrev}
          ref={prevButtonRef}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-white hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label={dictionary.previous}
        >
          ←
        </button>

        <div className="flex h-full w-full items-center justify-center p-6">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-h-full max-w-full rounded-xl border border-white/20 object-contain shadow-lg"
            loading="lazy"
          />
        </div>

        <button
          type="button"
          onClick={showNext}
          ref={nextButtonRef}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-white hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label={dictionary.next}
        >
          →
        </button>
      </div>
    </div>
  );
}
