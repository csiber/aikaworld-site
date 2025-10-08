import type { Metadata } from 'next';
import { Fragment } from 'react';
import SiteLayout from '../../../components/SiteLayout';
import { getDictionary } from '../../../lib/i18n/dictionaries';
import { resolveRequestLocale } from '../../../lib/i18n/server-locale';
import { createStaticPageMetadata } from '../../../lib/seo';
import { locales } from '../../../lib/i18n/config';
import type { ProgressionParagraph, ProgressionSection } from '../../../lib/i18n/types';

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
  const { title, body, content } = dictionary.progression;
  const sectionsInOrder = [content.en, content.hu];

  const renderParagraph = (paragraph: ProgressionParagraph, className?: string) => (
    <p className={className}>
      {paragraph.segments.map((segment, index) => {
        if (segment.type === 'strong') {
          return (
            <strong key={`${segment.text}-${index}`} className="font-semibold">
              {segment.text}
            </strong>
          );
        }

        if (segment.type === 'em') {
          return (
            <em key={`${segment.text}-${index}`} className="italic">
              {segment.text}
            </em>
          );
        }

        return <Fragment key={`${segment.text}-${index}`}>{segment.text}</Fragment>;
      })}
    </p>
  );

  const renderSection = (section: ProgressionSection) => (
    <section key={section.title} className="space-y-4">
      <h3 className="text-xl md:text-2xl font-semibold text-white">{section.title}</h3>
      {section.paragraphs.map((paragraph, index) => (
        <Fragment key={`${section.title}-paragraph-${index}`}>
          {renderParagraph(paragraph, 'text-sm md:text-base leading-relaxed text-white/80')}
        </Fragment>
      ))}
      {section.list ? (
        <ul className="list-disc space-y-2 pl-5 text-sm md:text-base leading-relaxed text-white/80">
          {section.list.items.map((item, index) => (
            <li key={`${section.title}-item-${index}`} className="marker:text-white/50">
              {item.segments.map((segment, segmentIndex) => {
                if (segment.type === 'strong') {
                  return (
                    <strong key={`${segment.text}-${segmentIndex}`} className="font-semibold">
                      {segment.text}
                    </strong>
                  );
                }

                if (segment.type === 'em') {
                  return (
                    <em key={`${segment.text}-${segmentIndex}`} className="italic">
                      {segment.text}
                    </em>
                  );
                }

                return <Fragment key={`${segment.text}-${segmentIndex}`}>{segment.text}</Fragment>;
              })}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );

  return (
    <SiteLayout locale={locale} dictionary={dictionary}>
      <div className="mx-auto max-w-4xl px-4 py-16 space-y-10">
        <header className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
          <p className="text-base md:text-lg opacity-90">{body}</p>
        </header>
        <article className="space-y-12">
          {sectionsInOrder.map(languageContent => (
            <div key={languageContent.languageLabel} className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                {languageContent.languageLabel}
              </h2>
              {renderParagraph(
                languageContent.quote,
                'text-sm md:text-base leading-relaxed text-white/80 italic'
              )}
              <div className="space-y-8">
                {languageContent.sections.map(section => renderSection(section))}
              </div>
              {renderParagraph(
                languageContent.closing,
                'text-sm md:text-base leading-relaxed text-white/90 italic'
              )}
            </div>
          ))}
        </article>
      </div>
    </SiteLayout>
  );
}
