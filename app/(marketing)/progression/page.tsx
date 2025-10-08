import type { Metadata } from 'next';
import SiteLayout from '../../../components/SiteLayout';
import { getDictionary } from '../../../lib/i18n/dictionaries';
import { resolveRequestLocale } from '../../../lib/i18n/server-locale';
import { createStaticPageMetadata } from '../../../lib/seo';
import { locales } from '../../../lib/i18n/config';
import { getProgressionContent } from '../../../lib/content/progression';

export function generateStaticParams(): Record<string, never>[] {
  return locales.map(() => ({}));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveRequestLocale();
  const dictionary = getDictionary(locale);
  return createStaticPageMetadata(locale, dictionary, '/progression', 'progression');
}

export default async function ProgressionPage() {
  const locale = await resolveRequestLocale();
  const dictionary = getDictionary(locale);
  const { title, body } = dictionary.progression;
  const progressionContent = await getProgressionContent(locale);

  return (
    <SiteLayout locale={locale} dictionary={dictionary}>
      <div className="mx-auto max-w-4xl px-4 py-16 space-y-10">
        <header className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
          <p className="text-base md:text-lg opacity-90">{body}</p>
        </header>
        <article
          className="space-y-6 text-sm leading-relaxed text-white/80 md:text-base"
          dangerouslySetInnerHTML={{ __html: progressionContent }}
        />
      </div>
    </SiteLayout>
  );
}
