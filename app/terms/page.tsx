import type { Metadata } from 'next';
import SiteLayout from '../../components/SiteLayout';
import LegalDocument from '../../components/LegalDocument';
import { getDictionary } from '../../lib/i18n/dictionaries';
import { resolveRequestLocale } from '../../lib/i18n/server-locale';
import { createStaticPageMetadata } from '../../lib/seo';
import { getLegalDocument } from '../../lib/legal/content';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveRequestLocale();
  const dictionary = getDictionary(locale);
  return createStaticPageMetadata(locale, dictionary, '/terms', 'terms');
}

export default async function TermsPage() {
  const locale = await resolveRequestLocale();
  const dictionary = getDictionary(locale);
  const document = getLegalDocument(locale, 'terms');

  return (
    <SiteLayout locale={locale} dictionary={dictionary}>
      <LegalDocument document={document} />
    </SiteLayout>
  );
}
