export const runtime = 'edge';

import type { MetadataRoute } from 'next';
import { characterSlugs } from '../lib/content/characters';
import { defaultLocale } from '../lib/i18n/config';
import { buildAlternates } from '../lib/seo';

const staticPaths = ['/', '/lore/elyndra', '/modes', '/characters', '/presskit', '/privacy', '/terms'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = staticPaths.map(path => {
    const alternates = buildAlternates(path, defaultLocale);

    return {
      url: alternates.canonical,
      lastModified: now,
      alternates: {
        languages: alternates.languages
      }
    };
  });

  characterSlugs.forEach(slug => {
    const path = `/characters/${slug}`;
    const alternates = buildAlternates(path, defaultLocale);
    entries.push({
      url: alternates.canonical,
      lastModified: now,
      alternates: {
        languages: alternates.languages
      }
    });
  });

  return entries;
}
