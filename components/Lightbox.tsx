'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

type LightboxImage = {
  src: string;
  alt: string;
};

type LightboxProps = {
  images: LightboxImage[];
  isOpen: boolean;
  initialIndex?: number;
  onClose: () => void;
};

const clampIndex = (index: number, length: number) => {
  if (length <= 0) {
    return 0;
  }

  return (index + length) % length;
};

export default function Lightbox({ images, isOpen, initialIndex = 0, onClose }: LightboxProps) {
  const sanitizedInitialIndex = useMemo(() => clampIndex(initialIndex, images.length), [initialIndex, images.length]);
  const [currentIndex, setCurrentIndex] = useState(sanitizedInitialIndex);

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
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        showNext();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        showPrev();
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

  if (!isOpen || images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];
  const totalImages = images.length;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur"
      role="dialog"
      aria-modal
      aria-label="Médiagaléria megnyitva"
      onClick={onClose}
    >
      <div className="flex items-center justify-between gap-4 p-4 text-white">
        <span className="text-sm md:text-base opacity-80">
          {currentIndex + 1} / {totalImages}
        </span>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Bezárás"
        >
          Bezárás (Esc)
        </button>
      </div>

      <div className="relative flex-1" onClick={event => event.stopPropagation()}>
        <button
          type="button"
          onClick={showPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-white hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Előző kép (bal nyíl)"
        >
          ←
        </button>

        <div className="flex h-full w-full items-center justify-center p-6">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-h-full max-w-full rounded-xl border border-white/20 object-contain shadow-lg"
          />
        </div>

        <button
          type="button"
          onClick={showNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-white hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Következő kép (jobb nyíl)"
        >
          →
        </button>
      </div>
    </div>
  );
}
