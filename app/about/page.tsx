import type { Metadata } from 'next';
import SiteLayout from '../../components/SiteLayout';
import { getDictionary } from '../../lib/i18n/dictionaries';
import { resolveRequestLocale } from '../../lib/i18n/server-locale';
import { createStaticPageMetadata } from '../../lib/seo';
import { locales } from '../../lib/i18n/config';

export function generateStaticParams(): Record<string, never>[] {
  return locales.map(() => ({}));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveRequestLocale();
  const dictionary = getDictionary(locale);
  return createStaticPageMetadata(locale, dictionary, '/about', 'about', {
    ogAlt: dictionary.seo.pages.about.ogAlt
  });
}

export default async function AboutPage() {
  const locale = await resolveRequestLocale();
  const dictionary = getDictionary(locale);
  const about = dictionary.aboutPage;

  return (
    <SiteLayout locale={locale} dictionary={dictionary}>
      <div className="mx-auto max-w-5xl px-4 py-16 space-y-8">
        <h1 className="text-3xl font-semibold md:text-4xl">{dictionary.header.nav.about.label}</h1>
        <section className="prose max-w-none text-foreground/90 dark:prose-invert">
          <p>{about.aikaLead}</p>
          <p>{about.aikaBody}</p>
        </section>
      </div>
    </SiteLayout>
  );
}
