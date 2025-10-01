import type { MetadataRoute } from 'next';
import { defaultLocale } from '../lib/i18n/config';
import { buildLocalizedUrl } from '../lib/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: [
      buildLocalizedUrl(defaultLocale, '/sitemap.xml'),
      buildLocalizedUrl('hu', '/sitemap.xml')
    ]
  };
}
