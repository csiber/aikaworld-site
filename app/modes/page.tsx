import type { Metadata } from 'next';
import Link from 'next/link';
import SiteLayout from '../../components/SiteLayout';
import { getDictionary } from '../../lib/i18n/dictionaries';
import type { Locale } from '../../lib/i18n/config';
import { resolveRequestLocale } from '../../lib/i18n/server-locale';
import { createStaticPageMetadata } from '../../lib/seo';

export function generateMetadata(): Metadata {
  const locale = resolveRequestLocale() as Locale;
  const dictionary = getDictionary(locale);
  return createStaticPageMetadata(locale, dictionary, '/modes', 'modes', {
    ogImage: 'https://media.aikaworld.com/og-modes.jpg',
    ogAlt: dictionary.seo.pages.modes.ogAlt
  });
}

export default function ModesPage() {
  const locale = resolveRequestLocale() as Locale;
  const dictionary = getDictionary(locale);
  const sections = dictionary.modes.sections;
  const homeHref = locale === 'hu' ? '/hu' : '/';

  return (
    <SiteLayout locale={locale} dictionary={dictionary}>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-12">
          <nav aria-label={dictionary.modes.navLabel} className="text-sm opacity-80">
            <ul className="flex flex-wrap gap-3">
              {sections.map(section => (
                <li key={section.id}>
                  <Link href={`#${section.id}`} className="hover:opacity-80">
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <h1 className="mt-6 text-3xl md:text-4xl font-bold">{dictionary.modes.heading}</h1>
          <p className="mt-4 max-w-2xl opacity-90">{dictionary.modes.intro}</p>
        </header>

        <div className="space-y-16">
          {sections.map(section => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-24">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-lg shadow-black/20">
                <div className="md:flex md:items-start md:justify-between md:gap-8">
                  <div className="md:max-w-2xl">
                    <h2 id={`${section.id}-title`} className="text-2xl md:text-3xl font-semibold">
                      {section.title}
                    </h2>
                    <p className="mt-3 text-base md:text-lg opacity-90">{section.tagline}</p>
                  </div>
                  <Link
                    href={homeHref}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accentB hover:opacity-80 md:mt-0"
                  >
                    {dictionary.modes.backToHome}
                    <span aria-hidden>↩</span>
                  </Link>
                </div>

                <div className="mt-8 grid gap-8 md:grid-cols-3">
                  <article className="rounded-2xl border border-white/10 bg-black/20 p-6">
                    <h3 className="text-lg font-semibold">{section.mechanicsTitle}</h3>
                    <ul className="mt-4 space-y-3 text-sm opacity-80">
                      {section.mechanics.map(point => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                  <article className="rounded-2xl border border-white/10 bg-black/20 p-6">
                    <h3 className="text-lg font-semibold">{section.rewardsTitle}</h3>
                    <ul className="mt-4 space-y-3 text-sm opacity-80">
                      {section.rewards.map(point => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                  <article className="rounded-2xl border border-white/10 bg-black/20 p-6">
                    <h3 className="text-lg font-semibold">{section.rolesTitle}</h3>
                    <ul className="mt-4 space-y-3 text-sm opacity-80">
                      {section.roles.map(point => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
