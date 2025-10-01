import type { Metadata } from 'next';
import SiteLayout from '../../components/SiteLayout';
import LegalDocument from '../../components/LegalDocument';
import { getDictionary } from '../../lib/i18n/dictionaries';
import type { Locale } from '../../lib/i18n/config';
import { resolveRequestLocale } from '../../lib/i18n/server-locale';
import { createStaticPageMetadata } from '../../lib/seo';
import { getLegalDocument } from '../../lib/legal/content';

export function generateMetadata(): Metadata {
  const locale = resolveRequestLocale() as Locale;
  const dictionary = getDictionary(locale);
  return createStaticPageMetadata(locale, dictionary, '/privacy', 'privacy');
}

export default function PrivacyPage() {
  const locale = resolveRequestLocale() as Locale;
  const dictionary = getDictionary(locale);
  const document = getLegalDocument(locale, 'privacy');

  return (
    <SiteLayout locale={locale} dictionary={dictionary}>
      <LegalDocument document={document} />
    </SiteLayout>
  );
}
