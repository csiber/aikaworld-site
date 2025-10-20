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
  return createStaticPageMetadata(locale, dictionary, '/creator-program', 'creatorProgram');
}

export default async function CreatorProgramPage() {
  const locale = await resolveRequestLocale();
  const dictionary = getDictionary(locale);
  const pageDictionary = dictionary.creatorProgram;
  const basePath = locale === 'en' ? '/en' : '';
  const ctaHref = pageDictionary.cta.href.startsWith('/')
    ? `${basePath}${pageDictionary.cta.href}`
    : pageDictionary.cta.href;

  return (
    <SiteLayout locale={locale} dictionary={dictionary}>
      <div className="mx-auto max-w-5xl px-4 py-16 space-y-16">
        <p className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm italic text-white/80">
          This program is currently inactive. AIKA World is a single-player narrative project.
        </p>
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accentB">
            {pageDictionary.eyebrow}
          </p>
          <h1 className="text-3xl font-bold md:text-4xl">{pageDictionary.title}</h1>
          <p className="text-base opacity-90 md:text-lg">{pageDictionary.intro}</p>
          <div className="pt-2">
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-full bg-accentB px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accentB focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {pageDictionary.cta.label}
              <span aria-hidden>→</span>
            </a>
            <p className="mt-2 text-xs opacity-70 md:text-sm">{pageDictionary.cta.note}</p>
          </div>
        </header>

        <div className="space-y-12">
          {pageDictionary.sections.map(section => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-title`}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-lg shadow-black/20"
            >
              <div className="md:max-w-2xl">
                <h2 id={`${section.id}-title`} className="text-2xl font-semibold md:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm opacity-80 md:text-base">{section.description}</p>
              </div>
              {section.bullets?.length ? (
                <ul className="mt-6 space-y-3 text-sm opacity-90 md:text-base">
                  {section.bullets.map(point => (
                    <li key={point} className="flex items-start gap-3">
                      <span aria-hidden className="mt-1 inline-block h-2 w-2 rounded-full bg-accentB" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        <section aria-labelledby="faq-title" className="space-y-6">
          <div className="md:max-w-3xl">
            <h2 id="faq-title" className="text-2xl font-semibold md:text-3xl">
              {pageDictionary.faqTitle}
            </h2>
          </div>
          <div className="space-y-6">
            {pageDictionary.faqs.map((faq, index) => (
              <div
                key={`${faq.question}-${index}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold md:text-xl">{faq.question}</h3>
                <p className="mt-2 text-sm opacity-80 md:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
