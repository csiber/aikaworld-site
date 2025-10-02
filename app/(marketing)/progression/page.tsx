import type { Metadata } from 'next';
import SiteLayout from '../../../components/SiteLayout';
import { getDictionary } from '../../../lib/i18n/dictionaries';
import { resolveRequestLocale } from '../../../lib/i18n/server-locale';
import { createStaticPageMetadata } from '../../../lib/seo';
import { locales } from '../../../lib/i18n/config';

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
  const sections = dictionary.progression.sections;

  return (
    <SiteLayout locale={locale} dictionary={dictionary}>
      <div className="mx-auto max-w-5xl px-4 py-16 space-y-16">
        <header>
          <h1 className="text-3xl md:text-4xl font-bold">{dictionary.progression.title}</h1>
          <p className="mt-4 max-w-3xl text-base md:text-lg opacity-90">{dictionary.progression.intro}</p>
        </header>

        <div className="space-y-12">
          {sections.map(section => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-24">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-lg shadow-black/20">
                <div className="md:max-w-xl">
                  <h2 id={`${section.id}-title`} className="text-2xl md:text-3xl font-semibold">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm md:text-base opacity-80">{section.summary}</p>
                </div>
                <ul className="mt-6 space-y-3 text-sm md:text-base opacity-90">
                  {section.bullets.map(point => (
                    <li key={point} className="flex items-start gap-3">
                      <span aria-hidden className="mt-1 inline-block h-2 w-2 rounded-full bg-accentB" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
