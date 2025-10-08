import type { Metadata } from 'next';
import SiteLayout from '../../../../components/SiteLayout';
import { getDictionary } from '../../../../lib/i18n/dictionaries';
import { resolveRequestLocale } from '../../../../lib/i18n/server-locale';
import { createStaticPageMetadata } from '../../../../lib/seo';
import { locales } from '../../../../lib/i18n/config';
import { getElyndraLore } from '../../../../lib/content/lore';

export function generateStaticParams(): Record<string, never>[] {
  return locales.map(() => ({}));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveRequestLocale();
  const dictionary = getDictionary(locale);
  return createStaticPageMetadata(locale, dictionary, '/lore/elyndra', 'loreElyndra');
}

export default async function ElyndraLorePage() {
  const locale = await resolveRequestLocale();
  const dictionary = getDictionary(locale);
  const pageDictionary = dictionary.lore.elyndra;
  const loreContent = await getElyndraLore(locale);

  return (
    <SiteLayout locale={locale} dictionary={dictionary}>
      <div className="mx-auto max-w-4xl px-4 py-16 space-y-12">
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            {pageDictionary.breadcrumb}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">{pageDictionary.title}</h1>
          <p className="text-base md:text-lg italic text-white/80">{pageDictionary.subtitle}</p>
          {pageDictionary.intro ? (
            <p className="text-sm md:text-base leading-relaxed text-white/90">{pageDictionary.intro}</p>
          ) : null}
        </header>

        <article
          className="space-y-6 text-sm md:text-base leading-relaxed text-white/80"
          dangerouslySetInnerHTML={{ __html: loreContent }}
        />
      </div>
    </SiteLayout>
  );
}
