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
  return createStaticPageMetadata(locale, dictionary, '/faq', 'faq');
}

function AccordionItem({
  question,
  answer
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group rounded-2xl border border-white/10 bg-white/5">
      <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-4 text-left text-lg font-semibold md:text-xl [&::-webkit-details-marker]:hidden">
        <span>{question}</span>
        <span aria-hidden className="text-accentB transition-transform duration-200 group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="border-t border-white/10 px-6 py-4">
        <p className="text-sm opacity-80 md:text-base">{answer}</p>
      </div>
    </details>
  );
}

export default async function FaqPage() {
  const locale = await resolveRequestLocale();
  const dictionary = getDictionary(locale);
  const pageDictionary = dictionary.faq;

  return (
    <SiteLayout locale={locale} dictionary={dictionary}>
      <div className="mx-auto max-w-4xl px-4 py-16 space-y-12">
        <header className="space-y-4">
          <h1 className="text-3xl font-bold md:text-4xl">{pageDictionary.title}</h1>
          <p className="text-base opacity-90 md:text-lg">{pageDictionary.intro}</p>
        </header>

        <section aria-label={pageDictionary.title} className="space-y-4">
          {pageDictionary.items.map(item => (
            <AccordionItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </section>
      </div>
    </SiteLayout>
  );
}
