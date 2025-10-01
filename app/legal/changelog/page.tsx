import type { Metadata } from 'next';
import SiteLayout from '../../../components/SiteLayout';
import LegalChangelog from '../../../components/LegalChangelog';
import { getDictionary } from '../../../lib/i18n/dictionaries';
import { resolveRequestLocale } from '../../../lib/i18n/server-locale';
import { createStaticPageMetadata } from '../../../lib/seo';
import { getLegalChangelog } from '../../../lib/legal/content';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveRequestLocale();
  const dictionary = getDictionary(locale);
  return createStaticPageMetadata(locale, dictionary, '/legal/changelog', 'legalChangelog');
}

export default async function LegalChangelogPage() {
  const locale = await resolveRequestLocale();
  const dictionary = getDictionary(locale);
  const changelog = getLegalChangelog(locale);

  return (
    <SiteLayout locale={locale} dictionary={dictionary}>
      <LegalChangelog changelog={changelog} />
    </SiteLayout>
  );
}
