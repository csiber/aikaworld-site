'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import type { Locale } from '../lib/i18n/config';
import type { HeaderDictionary } from '../lib/i18n/types';

const SCROLL_THRESHOLD = 60;
const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

type HeaderProps = {
  steamUrl: string;
  discordUrl: string;
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur transition-colors ${
        isScrolled ? 'bg-black/60' : 'bg-black/20'
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <a href={basePath || '/'} className="font-semibold tracking-wide">
          {dictionary.brand}
        </a>
        <nav className="hidden items-center gap-4 text-sm md:flex" aria-label={dictionary.navLabel}>
          <a href={`${basePath}#modes`} className="hover:opacity-80">
            {dictionary.nav.modes}
          </a>
          <a href={`${basePath}/characters`} className="hover:opacity-80">
            {dictionary.nav.characters}
          </a>
          <a href={`${basePath}#media`} className="hover:opacity-80">
            {dictionary.nav.media}
          </a>
          <a href={`${basePath}#roadmap`} className="hover:opacity-80">
            {dictionary.nav.roadmap}
          </a>
          <a href={`${basePath}#community`} className="hover:opacity-80">
            {dictionary.nav.community}
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <label className="sr-only" htmlFor="locale-switcher">
            {dictionary.localeSwitcherLabel}
          </label>
          <select
            id="locale-switcher"
            className="rounded-md border border-white/20 bg-black/40 px-2 py-1 text-xs uppercase tracking-wide hover:border-white/40 focus:border-accentB focus:outline-none"
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
            <a
              className="rounded-md bg-accentA px-3 py-1.5 text-sm font-semibold hover:opacity-90"
              href={steamUrl}
            >
              {dictionary.wishlistCta}
            </a>
            <a className="rounded-md bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20" href={discordUrl}>
              {dictionary.discordCta}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
