import type { Metadata } from 'next';
import { defaultLocale, type Locale } from './i18n/config';
import type { Dictionary, Character } from './i18n/types';
import { serverEnv } from './server-config';

function normalizePath(path: string): string {
  if (!path || path === '/') {
    return '/';
  }

  return path.startsWith('/') ? path : `/${path}`;
}

function baseUrl() {
  return serverEnv.siteUrl.replace(/\/$/, '');
}

export function buildLocalizedUrl(locale: Locale, path: string): string {
  const normalized = normalizePath(path);
  const prefix = locale === defaultLocale ? '' : '/hu';
  if (normalized === '/') {
    return `${baseUrl()}${prefix}`;
  }
  return `${baseUrl()}${prefix}${normalized}`;
}

export function buildAlternates(path: string, currentLocale: Locale) {
  const normalized = normalizePath(path);
  const canonical = buildLocalizedUrl(currentLocale, normalized);
  const hu = buildLocalizedUrl('hu', normalized);
  const en = buildLocalizedUrl(defaultLocale, normalized);

  return {
    canonical,
    languages: {
      en,
      hu,
      'x-default': en
    } as Record<string, string>
  };
}

type StaticSeoPage = Exclude<keyof Dictionary['seo']['pages'], 'character'>;

export function createStaticPageMetadata(
  locale: Locale,
  dictionary: Dictionary,
  path: string,
  page: StaticSeoPage,
  options: { ogImage?: string; ogAlt?: string } = {}
): Metadata {
  const pageSeo = dictionary.seo.pages[page];
  const alternates = buildAlternates(path, locale);
  const canonical = alternates.canonical;
  const openGraphAlt = options.ogAlt ?? ('ogAlt' in pageSeo ? (pageSeo as any).ogAlt : dictionary.seo.defaultOgAlt);
  const ogImage = options.ogImage ?? 'https://media.aikaworld.com/og-default.png';

  return {
    title: pageSeo.title,
    description: pageSeo.description,
    alternates,
    openGraph: {
      title: pageSeo.title,
      description: pageSeo.description,
      url: canonical,
      siteName: 'AIKA World',
      locale: dictionary.seo.defaultLocale,
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: openGraphAlt
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: pageSeo.title,
      description: pageSeo.description,
      images: [ogImage]
    }
  } satisfies Metadata;
}

export function createCharacterMetadata(
  locale: Locale,
  dictionary: Dictionary,
  path: string,
  character: Character
): Metadata {
  const alternates = buildAlternates(path, locale);
  const canonical = alternates.canonical;
  const pageSeo = dictionary.seo.pages.character;
  const description = pageSeo.description(character);
  const ogDescription = pageSeo.ogDescription(character);
  const ogAlt = pageSeo.ogAlt(character);

  return {
    title: `${character.name} – ${character.title} | AIKA World`,
    description,
    alternates,
    openGraph: {
      title: `${character.name} – ${character.title}`,
      description: ogDescription,
      url: canonical,
      siteName: 'AIKA World',
      locale: dictionary.seo.defaultLocale,
      type: 'article',
      images: [
        {
          url: character.heroImage,
          width: 1280,
          height: 720,
          alt: ogAlt
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${character.name} – ${character.title}`,
      description,
      images: [character.heroImage]
    }
  } satisfies Metadata;
}
