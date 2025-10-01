import type { Metadata } from 'next';
import SiteLayout from '../../components/SiteLayout';
import { getDictionary } from '../../lib/i18n/dictionaries';
import type { Locale } from '../../lib/i18n/config';
import { resolveRequestLocale } from '../../lib/i18n/server-locale';
import { createStaticPageMetadata } from '../../lib/seo';

export function generateMetadata(): Metadata {
  const locale = resolveRequestLocale() as Locale;
  const dictionary = getDictionary(locale);
  return createStaticPageMetadata(locale, dictionary, '/terms', 'terms');
}

export default function TermsPage() {
  const locale = resolveRequestLocale() as Locale;
  const dictionary = getDictionary(locale);

  return (
    <SiteLayout locale={locale} dictionary={dictionary}>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-semibold">{dictionary.terms.heading}</h1>
        {dictionary.terms.body.map(paragraph => (
          <p key={paragraph} className="mt-6 text-lg opacity-80">
            {paragraph}
          </p>
        ))}
      </div>
    </SiteLayout>
  );
}
