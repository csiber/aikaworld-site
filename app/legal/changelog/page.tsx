import type { Metadata } from 'next';
import SiteLayout from '../../../components/SiteLayout';
import LegalChangelog from '../../../components/LegalChangelog';
import { getDictionary } from '../../../lib/i18n/dictionaries';
import type { Locale } from '../../../lib/i18n/config';
import { resolveRequestLocale } from '../../../lib/i18n/server-locale';
import { createStaticPageMetadata } from '../../../lib/seo';
import { getLegalChangelog } from '../../../lib/legal/content';

export function generateMetadata(): Metadata {
  const locale = resolveRequestLocale() as Locale;
  const dictionary = getDictionary(locale);
  return createStaticPageMetadata(locale, dictionary, '/legal/changelog', 'legalChangelog');
}

export default function LegalChangelogPage() {
  const locale = resolveRequestLocale() as Locale;
  const dictionary = getDictionary(locale);
  const changelog = getLegalChangelog(locale);

  return (
    <SiteLayout locale={locale} dictionary={dictionary}>
      <LegalChangelog changelog={changelog} />
    </SiteLayout>
  );
}
