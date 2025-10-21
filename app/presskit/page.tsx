import type { Metadata } from 'next';
import SiteLayout from '../../components/SiteLayout';
import { getDictionary } from '../../lib/i18n/dictionaries';
import { resolveRequestLocale } from '../../lib/i18n/server-locale';
import { createStaticPageMetadata } from '../../lib/seo';
import { serverEnv } from '../../lib/server-config';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveRequestLocale();
  const dictionary = getDictionary(locale);
  return createStaticPageMetadata(locale, dictionary, '/presskit', 'presskit');
}

export default async function PresskitPage() {
  const locale = await resolveRequestLocale();
  const dictionary = getDictionary(locale);
  const siteUrl = serverEnv.siteUrl.replace(/\/$/, '');
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AIKA Resonance',
    url: siteUrl,
    logo: 'https://media.aikaworld.com/presskit/logo/aikaworld-logo.svg'
  } as const;

  return (
    <SiteLayout locale={locale} dictionary={dictionary}>
      <div className="mx-auto max-w-5xl px-4 py-16 space-y-16">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <section>
          <h1 className="text-3xl md:text-4xl font-bold">{dictionary.presskit.heading}</h1>
          <p className="mt-4 text-base md:text-lg opacity-90">{dictionary.presskit.description}</p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-semibold">{dictionary.presskit.about.title}</h2>
          <p className="text-base md:text-lg opacity-90">{dictionary.presskit.about.intro}</p>
          <p className="text-base md:text-lg opacity-80">{dictionary.presskit.about.keyMessage}</p>
          <p className="text-sm md:text-base italic text-white/80">{dictionary.presskit.about.craft}</p>
          <p className="text-base md:text-lg font-semibold text-accentB">{dictionary.presskit.about.tagline}</p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:col-span-2">
            <h2 className="text-xl font-semibold">{dictionary.presskit.factSheetTitle}</h2>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              {dictionary.presskit.factSheet.map(item => (
                <div key={item.label}>
                  <dt className="text-sm uppercase tracking-wide opacity-60">{item.label}</dt>
                  <dd className="mt-1 text-base font-medium text-white/90">
                    {item.href ? (
                      <a href={item.href} className="text-accentB hover:opacity-80">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="space-y-10">
          <h2 className="text-2xl font-semibold">{dictionary.presskit.downloadsTitle}</h2>
          {dictionary.presskit.downloadBlocks.map(block => (
            <div key={block.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="md:flex md:items-start md:justify-between md:gap-8">
                <div>
                  <h3 className="text-xl font-semibold">{block.title}</h3>
                  <p className="mt-2 text-sm opacity-80">{block.description}</p>
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {block.items.map(item => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm font-semibold hover:border-accentB hover:text-accentB transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{item.label}</span>
                    <span aria-hidden>↓</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold">{dictionary.presskit.usageTitle}</h2>
          <p className="mt-3 text-sm opacity-80">{dictionary.presskit.usageDescription}</p>
        </section>
      </div>
    </SiteLayout>
  );
}
