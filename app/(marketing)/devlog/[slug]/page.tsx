import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteLayout from '../../../../components/SiteLayout';
import { getDictionary } from '../../../../lib/i18n/dictionaries';
import { resolveRequestLocale } from '../../../../lib/i18n/server-locale';
import { createDevlogPostMetadata, createStaticPageMetadata } from '../../../../lib/seo';
import { getDevlogSummaries, getDevlogPost } from '../../../../lib/devlog';

export const runtime = 'nodejs';

type DevlogPostParams = { slug: string };
type DevlogMetadataProps = { params: Promise<DevlogPostParams> };

export async function generateStaticParams() {
  const posts = await getDevlogSummaries();
  return posts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: DevlogMetadataProps): Promise<Metadata> {
  const { slug } = await params;
  const locale = await resolveRequestLocale();
  const dictionary = getDictionary(locale);
  const post = await getDevlogPost(slug).catch(() => null);

  if (!post) {
    return createStaticPageMetadata(locale, dictionary, '/devlog', 'devlog');
  }

  return createDevlogPostMetadata(locale, dictionary, `/devlog/${post.slug}`, post);
}

export default async function DevlogPostPage({ params }: { params: Promise<DevlogPostParams> }) {
  const { slug } = await params;
  const locale = await resolveRequestLocale();
  const dictionary = getDictionary(locale);
  const post = await getDevlogPost(slug).catch(() => null);
  const basePath = locale === 'hu' ? '/hu' : '';

  if (!post) {
    notFound();
  }

  const resolvedPost = post;

  return (
    <SiteLayout locale={locale} dictionary={dictionary}>
      <article className="mx-auto max-w-3xl px-4 py-16">
        <div>
          <Link href={`${basePath}/devlog`} className="text-sm font-semibold text-accentB hover:opacity-80">
            ← {dictionary.devlog.post.backToList}
          </Link>
        </div>
        <header className="mt-8 space-y-4">
          <p className="text-xs uppercase tracking-wide text-white/60">
            {dictionary.devlog.post.publishedOn}{' '}
            <time dateTime={resolvedPost.date}>{resolvedPost.date}</time>
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">{resolvedPost.title}</h1>
          <p className="text-lg opacity-80">{resolvedPost.summary}</p>
        </header>
        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10">
          <img src={resolvedPost.cover} alt={resolvedPost.title} className="h-full w-full object-cover" />
        </div>
        <div className="devlog-content mt-10 space-y-6 text-base leading-relaxed">
          {resolvedPost.content}
        </div>
      </article>
    </SiteLayout>
  );
}
