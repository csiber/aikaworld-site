'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Locale } from '../lib/i18n/config';
import { getDictionary } from '../lib/i18n/dictionaries';

const LOCALE_COOKIE = 'aika_locale';
const HU_PREFIX = '/hu';

function parseLocaleFromCookie(): Locale | null {
  if (typeof document === 'undefined') {
    return null;
  }

  const entries = document.cookie.split(';');
  for (const entry of entries) {
    const [rawKey, ...rawValue] = entry.trim().split('=');
    if (!rawKey) {
      continue;
    }

    if (rawKey === LOCALE_COOKIE) {
      const value = decodeURIComponent(rawValue.join('='));
      if (value === 'hu' || value === 'en') {
        return value;
      }
    }
  }

  return null;
}

function detectLocaleFromPath(pathname: string): Locale | null {
  if (pathname === HU_PREFIX || pathname.startsWith(`${HU_PREFIX}/`)) {
    return 'hu';
  }

  return null;
}

function detectLocaleFromNavigator(): Locale | null {
  if (typeof navigator === 'undefined') {
    return null;
  }

  const candidates = navigator.languages && navigator.languages.length > 0 ? navigator.languages : [navigator.language];

  for (const lang of candidates) {
    if (!lang) {
      continue;
    }

    const base = lang.toLowerCase().split('-')[0];
    if (base === 'hu') {
      return 'hu';
    }
    if (base === 'en') {
      return 'en';
    }
  }

  return null;
}

function detectLocale(): Locale {
  const cookieLocale = parseLocaleFromCookie();
  if (cookieLocale) {
    return cookieLocale;
  }

  if (typeof window !== 'undefined') {
    const pathLocale = detectLocaleFromPath(window.location.pathname);
    if (pathLocale) {
      return pathLocale;
    }
  }

  const navigatorLocale = detectLocaleFromNavigator();
  if (navigatorLocale) {
    return navigatorLocale;
  }

  return 'en';
}

export default function NotFoundContent() {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    setLocale(detectLocale());
  }, []);

  const dictionary = getDictionary(locale);
  const homeHref = locale === 'hu' ? '/hu' : '/';
  const charactersHref = locale === 'hu' ? '/hu/characters' : '/characters';

  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <div className="text-sm uppercase tracking-[0.3em] text-accentB">{dictionary.notFound.code}</div>
      <h1 className="mt-3 text-3xl md:text-4xl font-bold">{dictionary.notFound.heading}</h1>
      <p className="mt-4 opacity-80">{dictionary.notFound.description}</p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
        <Link href={homeHref} className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10">
          {dictionary.notFound.homeCta}
        </Link>
        <Link href={charactersHref} className="rounded-lg bg-accentB px-4 py-2 font-semibold hover:opacity-90">
          {dictionary.notFound.charactersCta}
        </Link>
      </div>
    </div>
  );
}
