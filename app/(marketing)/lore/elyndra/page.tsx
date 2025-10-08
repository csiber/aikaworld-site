import type { Metadata } from 'next';
import SiteLayout from '../../../../components/SiteLayout';
import { getDictionary } from '../../../../lib/i18n/dictionaries';
import { resolveRequestLocale } from '../../../../lib/i18n/server-locale';
import { createStaticPageMetadata } from '../../../../lib/seo';
import { locales } from '../../../../lib/i18n/config';

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

  return (
    <SiteLayout locale={locale} dictionary={dictionary}>
      <div className="mx-auto max-w-4xl px-4 py-16 space-y-12">
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            {pageDictionary.breadcrumb}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">{pageDictionary.title}</h1>
          <p className="text-base md:text-lg italic text-white/80">{pageDictionary.subtitle}</p>
          <p className="text-sm md:text-base leading-relaxed text-white/90">{pageDictionary.intro}</p>
        </header>

        <div className="space-y-12">
          {pageDictionary.sections.map(section => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-title`}
              className="scroll-mt-24 space-y-4"
            >
              <h2 id={`${section.id}-title`} className="text-2xl md:text-3xl font-semibold">
                {section.title}
              </h2>
              {section.paragraphs.map(paragraph => (
                <p key={paragraph} className="text-sm md:text-base leading-relaxed text-white/80">
                  {paragraph}
                </p>
              ))}
              {section.entries ? (
                <div className="grid gap-4 md:grid-cols-2">
                  {section.entries.map(entry => (
                    <article
                      key={entry.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
                    >
                      <h3 className="text-lg font-semibold">{entry.title}</h3>
                      <p className="mt-3 text-sm md:text-base leading-relaxed text-white/80">{entry.body}</p>
                    </article>
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </div>

        <footer className="border-t border-white/10 pt-8">
          <p className="text-sm md:text-base italic text-white/70">{pageDictionary.closingQuote}</p>
        </footer>
      </div>
    </SiteLayout>
  );
}
