import type { Metadata } from 'next';
import { defaultLocale, type Locale } from './i18n/config';
import type { Dictionary, Character } from './i18n/types';
import type { DevlogPost } from './devlog';
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

const OG_IMAGE_VARIANTS = {
  default: {
    en: '/og/aikaworld-default-en.svg',
    hu: '/og/aikaworld-default-hu.svg'
  },
  home: {
    en: '/og/aikaworld-home-en.svg',
    hu: '/og/aikaworld-home-hu.svg'
  },
  modes: {
    en: '/og/aikaworld-modes-en.svg',
    hu: '/og/aikaworld-modes-hu.svg'
  },
  progression: {
    en: '/og/aikaworld-progression-en.svg',
    hu: '/og/aikaworld-progression-hu.svg'
  },
  playtests: {
    en: '/og/aikaworld-playtests-en.svg',
    hu: '/og/aikaworld-playtests-hu.svg'
  },
  creator: {
    en: '/og/aikaworld-creator-en.svg',
    hu: '/og/aikaworld-creator-hu.svg'
  },
  characters: {
    en: '/og/aikaworld-characters-en.svg',
    hu: '/og/aikaworld-characters-hu.svg'
  },
  devlog: {
    en: '/og/aikaworld-devlog-en.svg',
    hu: '/og/aikaworld-devlog-hu.svg'
  },
  faq: {
    en: '/og/aikaworld-faq-en.svg',
    hu: '/og/aikaworld-faq-hu.svg'
  },
  presskit: {
    en: '/og/aikaworld-presskit-en.svg',
    hu: '/og/aikaworld-presskit-hu.svg'
  },
  privacy: {
    en: '/og/aikaworld-privacy-en.svg',
    hu: '/og/aikaworld-privacy-hu.svg'
  },
  terms: {
    en: '/og/aikaworld-terms-en.svg',
    hu: '/og/aikaworld-terms-hu.svg'
  },
  legal: {
    en: '/og/aikaworld-legal-en.svg',
    hu: '/og/aikaworld-legal-hu.svg'
  },
  changelog: {
    en: '/og/aikaworld-changelog-en.svg',
    hu: '/og/aikaworld-changelog-hu.svg'
  },
  notfound: {
    en: '/og/aikaworld-notfound-en.svg',
    hu: '/og/aikaworld-notfound-hu.svg'
  }
} as const;

type OgImageVariant = keyof typeof OG_IMAGE_VARIANTS;
type OgImageLocaleKey = keyof (typeof OG_IMAGE_VARIANTS)['default'];

const ogLocaleMap: Record<Locale, { locale: string; alternateLocales: string[]; imageKey: OgImageLocaleKey }> = {
  en: { locale: 'en_US', alternateLocales: ['hu_HU'], imageKey: 'en' },
  hu: { locale: 'hu_HU', alternateLocales: ['en_US'], imageKey: 'hu' }
};

function resolveOgImage(name: OgImageVariant = 'default', locale: Locale) {
  const { imageKey } = ogLocaleMap[locale] ?? ogLocaleMap[defaultLocale];
  return `${baseUrl()}${OG_IMAGE_VARIANTS[name][imageKey]}`;
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

type StaticSeoPage = Exclude<keyof Dictionary['seo']['pages'], 'character' | 'devlogPost'>;

const STATIC_PAGE_IMAGE_VARIANTS: Partial<Record<StaticSeoPage, OgImageVariant>> = {
  home: 'home',
  modes: 'modes',
  progression: 'progression',
  loreElyndra: 'default',
  playtests: 'playtests',
  creatorProgram: 'creator',
  characters: 'characters',
  devlog: 'devlog',
  faq: 'faq',
  presskit: 'presskit',
  privacy: 'privacy',
  terms: 'terms',
  legalCopyright: 'legal',
  legalFanContent: 'legal',
  legalTrademark: 'legal',
  legalChangelog: 'changelog',
  notFound: 'notfound'
};

function resolveDefaultOgImage(page: StaticSeoPage, locale: Locale) {
  const variant = STATIC_PAGE_IMAGE_VARIANTS[page] ?? 'default';
  return resolveOgImage(variant, locale);
}

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
  const ogImage = options.ogImage ?? resolveDefaultOgImage(page, locale);
  const { locale: openGraphLocale, alternateLocales } = ogLocaleMap[locale] ?? ogLocaleMap[defaultLocale];

  return {
    title: pageSeo.title,
    description: pageSeo.description,
    alternates,
    openGraph: {
      title: pageSeo.title,
      description: pageSeo.description,
      url: canonical,
      siteName: 'AIKA World',
      locale: openGraphLocale,
      alternateLocale: alternateLocales,
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
  const { locale: openGraphLocale, alternateLocales } = ogLocaleMap[locale] ?? ogLocaleMap[defaultLocale];

  return {
    title: `${character.name} – ${character.title} | AIKA World`,
    description,
    alternates,
    openGraph: {
      title: `${character.name} – ${character.title}`,
      description: ogDescription,
      url: canonical,
      siteName: 'AIKA World',
      locale: openGraphLocale,
      alternateLocale: alternateLocales,
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

export function createDevlogPostMetadata(
  locale: Locale,
  dictionary: Dictionary,
  path: string,
  post: DevlogPost
): Metadata {
  const alternates = buildAlternates(path, locale);
  const canonical = alternates.canonical;
  const pageSeo = dictionary.seo.pages.devlogPost;
  const title = pageSeo.title(post.title);
  const description = pageSeo.description(post.summary);
  const ogAlt = pageSeo.ogAlt(post.title);
  const { locale: openGraphLocale, alternateLocales } = ogLocaleMap[locale] ?? ogLocaleMap[defaultLocale];

  return {
    title,
    description,
    alternates,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'AIKA World',
      locale: openGraphLocale,
      alternateLocale: alternateLocales,
      type: 'article',
      publishedTime: post.date,
      images: [
        {
          url: post.cover,
          width: 1200,
          height: 630,
          alt: ogAlt
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [post.cover]
    }
  } satisfies Metadata;
}
