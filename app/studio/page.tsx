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
  return createStaticPageMetadata(locale, dictionary, '/studio', 'studio', {
    ogAlt: dictionary.seo.pages.studio.ogAlt
  });
}

export default async function StudioPage() {
  const locale = await resolveRequestLocale();
  const dictionary = getDictionary(locale);
  const studio = dictionary.studio;

  return (
    <SiteLayout locale={locale} dictionary={dictionary}>
      <div className="mx-auto max-w-5xl px-4 py-16 space-y-10">
        <header className="space-y-4">
          <h1 className="text-3xl font-semibold md:text-4xl">{studio.title}</h1>
          <p className="text-base text-muted-foreground md:text-lg">{studio.lead}</p>
        </header>

        <section className="prose max-w-none text-foreground/90 dark:prose-invert">
          <p>{studio.body}</p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">{studio.project.title}</h2>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">{studio.project.summary}</p>
        </section>
      </div>
    </SiteLayout>
  );
}
