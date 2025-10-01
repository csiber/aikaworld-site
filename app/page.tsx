import type { Metadata } from 'next';
import HomePage from '../components/HomePage';
import SiteLayout from '../components/SiteLayout';
import { getDictionary } from '../lib/i18n/dictionaries';
import type { Locale } from '../lib/i18n/config';
import { serverEnv } from '../lib/server-config';
import { createStaticPageMetadata } from '../lib/seo';
import { resolveRequestLocale } from '../lib/i18n/server-locale';

export function generateMetadata(): Metadata {
  const locale = resolveRequestLocale() as Locale;
  const dictionary = getDictionary(locale);
  return createStaticPageMetadata(locale, dictionary, '/', 'home', {
    ogImage: 'https://media.aikaworld.com/og-default.png',
    ogAlt: dictionary.seo.pages.home.ogAlt
  });
}

export default function Page() {
  const locale = resolveRequestLocale() as Locale;
  const dictionary = getDictionary(locale);

  return (
    <SiteLayout locale={locale} dictionary={dictionary}>
      <HomePage
        steamUrl={serverEnv.steamUrl}
        discordUrl={serverEnv.discordUrl}
        locale={locale}
        dictionary={dictionary.home}
        lightboxDictionary={dictionary.lightbox}
      />
    </SiteLayout>
  );
}
