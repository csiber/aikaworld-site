'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import type { Locale } from '../lib/i18n/config';
import type { HeaderDictionary } from '../lib/i18n/types';

const SCROLL_THRESHOLD = 60;
const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

type HeaderProps = {
  steamUrl: string | null;
  discordUrl: string | null;
  locale: Locale;
  dictionary: HeaderDictionary;
};

export default function Header({ steamUrl, discordUrl, locale, dictionary }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const basePath = locale === 'hu' ? '/hu' : '';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLocaleChange = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      return;
    }

    const normalizedPath = pathname.replace(/^\/hu(?=\/|$)/, '') || '/';
    const targetPath =
      nextLocale === 'hu'
        ? normalizedPath === '/' ? '/hu' : `/hu${normalizedPath}`
        : normalizedPath;
    const search = searchParams.toString();
    const destination = search ? `${targetPath}?${search}` : targetPath;

    document.cookie = `aika_locale=${nextLocale}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}`;
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}`;

    router.push(destination);
  };

  const localeOptions = useMemo(
    () =>
      (Object.entries(dictionary.locales) as [Locale, string][]).map(([value, label]) => ({
        value,
        label
      })),
    [dictionary.locales]
  );

  const navItems = useMemo(
    () =>
      [
        dictionary.nav.world,
        dictionary.nav.modes,
        dictionary.nav.progression,
        dictionary.nav.devlog,
        dictionary.nav.faq
      ],
    [dictionary.nav]
  );

  const resolveHref = (href: string) => {
    if (href.startsWith('#')) {
      return `${basePath}${href}`;
    }

    if (href.startsWith('http://') || href.startsWith('https://')) {
      return href;
    }

    if (basePath && href.startsWith(basePath)) {
      return href;
    }

    return `${basePath}${href}`;
  };

  const normalizePath = (value: string) => {
    if (!value) {
      return '/';
    }

    const withoutQuery = value.replace(/[?#].*$/, '');
    if (!withoutQuery || withoutQuery === '') {
      return '/';
    }

    if (withoutQuery === '/') {
      return '/';
    }

    return withoutQuery.endsWith('/') ? withoutQuery.slice(0, -1) : withoutQuery;
  };

  const normalizedPathname = normalizePath(pathname);
  const homePath = normalizePath(basePath || '/');

  const isNavItemActive = (href: string) => {
    if (href.startsWith('http://') || href.startsWith('https://')) {
      return false;
    }

    if (href.startsWith('#')) {
      return normalizedPathname === homePath;
    }

    const resolved = resolveHref(href);
    return normalizePath(resolved) === normalizedPathname;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur transition-colors ${
        isScrolled ? 'bg-black/60' : 'bg-black/20'
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <a
          href={basePath || '/'}
          className="font-semibold tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-accentB focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          {dictionary.brand}
        </a>
        <nav className="hidden items-center gap-4 text-sm md:flex" aria-label={dictionary.navLabel}>
          {navItems.map(item => {
            const href = resolveHref(item.href);
            const isActive = isNavItemActive(item.href);

            return (
              <a
                key={item.label}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-md px-2 py-1 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accentB focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                  isActive ? 'bg-white/10 text-white' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <label className="sr-only" htmlFor="locale-switcher">
            {dictionary.localeSwitcherLabel}
          </label>
          <select
            id="locale-switcher"
            className="rounded-md border border-white/20 bg-black/40 px-2 py-1 text-xs uppercase tracking-wide hover:border-white/40 focus:border-accentB focus:outline-none focus-visible:ring-2 focus-visible:ring-accentB focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            value={locale}
            onChange={event => handleLocaleChange(event.target.value as Locale)}
          >
            {localeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="hidden gap-2 sm:flex">
            {steamUrl && (
              <a
                className="rounded-md bg-accentA px-3 py-1.5 text-sm font-semibold hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                href={steamUrl}
              >
                {dictionary.wishlistCta}
              </a>
            )}
            {discordUrl && (
              <a
                className="rounded-md bg-white/10 px-3 py-1.5 text-sm transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accentB focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                href={discordUrl}
              >
                {dictionary.discordCta}
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
