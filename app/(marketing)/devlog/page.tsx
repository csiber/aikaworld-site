import type { Metadata } from 'next';
import Link from 'next/link';
import SiteLayout from '../../../components/SiteLayout';
import { getDictionary } from '../../../lib/i18n/dictionaries';
import { resolveRequestLocale } from '../../../lib/i18n/server-locale';
import { locales } from '../../../lib/i18n/config';
import { createStaticPageMetadata } from '../../../lib/seo';
import { getDevlogSummaries } from '../../../lib/devlog';

export const runtime = 'nodejs';

export function generateStaticParams(): Record<string, never>[] {
  return locales.map(() => ({}));
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await resolveRequestLocale();
  const dictionary = getDictionary(locale);
  return createStaticPageMetadata(locale, dictionary, '/devlog', 'devlog');
}

export default async function DevlogPage() {
  const locale = await resolveRequestLocale();
  const dictionary = getDictionary(locale);
  const posts = await getDevlogSummaries();
  const basePath = locale === 'hu' ? '/hu' : '';

  return (
    <SiteLayout locale={locale} dictionary={dictionary}>
      <div className="mx-auto max-w-4xl px-4 py-16">
        <header className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">{dictionary.devlog.heading}</h1>
          <p className="max-w-2xl text-base md:text-lg opacity-90">{dictionary.devlog.intro}</p>
        </header>

        <section className="mt-12">
          {posts.length === 0 ? (
            <p className="rounded-xl border border-dashed border-white/20 bg-white/5 p-8 text-center text-sm opacity-70">
              {dictionary.devlog.list.empty}
            </p>
          ) : (
            <ol
              className="relative space-y-12 before:absolute before:left-2 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent"
              aria-label={dictionary.devlog.list.timelineLabel}
            >
              {posts.map(post => (
                <li key={post.slug} className="relative ml-6">
                  <span className="absolute -left-6 mt-1 flex h-4 w-4 items-center justify-center rounded-full border border-white/40 bg-bg">
                    <span className="h-2 w-2 rounded-full bg-accentB" aria-hidden />
                  </span>
                  <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-white/60">
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                    <h2 className="mt-3 text-2xl font-semibold">{post.title}</h2>
                    <p className="mt-3 text-sm md:text-base opacity-80">{post.summary}</p>
                    <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-semibold text-accentB">
                      <Link href={`${basePath}/devlog/${post.slug}`} className="hover:opacity-80">
                        {dictionary.devlog.list.readMore}
                      </Link>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          )}
        </section>
      </div>
    </SiteLayout>
  );
}
