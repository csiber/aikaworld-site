'use client';

import { useEffect, useState } from 'react';

const SCROLL_THRESHOLD = 60;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur transition-colors ${
        isScrolled ? 'bg-black/60' : 'bg-black/20'
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <a href="/" className="font-semibold tracking-wide">
          AIKA WORLD
        </a>
        <nav className="flex gap-4 text-sm">
          <a href="#modes" className="hover:opacity-80">
            Játékmódok
          </a>
          <a href="/characters" className="hover:opacity-80">
            Karakterek
          </a>
          <a href="#media" className="hover:opacity-80">
            Média
          </a>
          <a href="#roadmap" className="hover:opacity-80">
            Roadmap
          </a>
          <a href="#community" className="hover:opacity-80">
            Közösség
          </a>
        </nav>
        <div className="hidden gap-2 sm:flex">
          <a
            className="rounded-md bg-accentA px-3 py-1.5 text-sm font-semibold hover:opacity-90"
            href="https://store.steampowered.com/"
          >
            Wishlist on Steam
          </a>
          <a className="rounded-md bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20" href="https://discord.gg/">
            Join Discord
          </a>
        </div>
      </div>
    </header>
  );
}
