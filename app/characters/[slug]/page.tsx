import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteLayout from '../../../components/SiteLayout';
import { getCharacter, characterSlugs } from '../../../lib/content/characters';
import { getDictionary } from '../../../lib/i18n/dictionaries';
import { resolveRequestLocale } from '../../../lib/i18n/server-locale';
import { createCharacterMetadata, createStaticPageMetadata } from '../../../lib/seo';

type CharacterPageParams = {
  slug: string;
};

type CharacterPageProps = {
  params: Promise<CharacterPageParams>;
};

export function generateStaticParams() {
  return characterSlugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: CharacterPageProps): Promise<Metadata> {
  const { slug } = await params;
  const locale = await resolveRequestLocale();
  const dictionary = getDictionary(locale);
  const character = getCharacter(locale, slug);

  if (!character) {
    return createStaticPageMetadata(locale, dictionary, `/characters/${slug}`, 'notFound');
  }

  return createCharacterMetadata(locale, dictionary, `/characters/${slug}`, character);
}

export default async function CharacterPage({ params }: CharacterPageProps) {
  const { slug } = await params;
  const locale = await resolveRequestLocale();
  const dictionary = getDictionary(locale);
  const character = getCharacter(locale, slug);

  if (!character) {
    notFound();
  }

  const basePath = locale === 'en' ? '/en' : '';

  return (
    <SiteLayout locale={locale} dictionary={dictionary}>
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <img
            src={character.heroImage}
            alt={character.heroImageAlt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-24">
          <nav aria-label="breadcrumb" className="text-sm text-white/80">
            <ol className="flex items-center gap-2">
              <li>
                <Link href={`${basePath}/characters`} className="hover:opacity-80">
                  {dictionary.characterPage.breadcrumbRoot}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="font-medium text-white">{character.name}</li>
            </ol>
          </nav>
          <div className="mt-6 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-accentB">{character.element}</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold">{character.name}</h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-base leading-relaxed text-white/85">{character.description}</p>
          </article>

          <aside className="rounded-2xl border border-accentE/40 bg-accentE/10 p-6">
            <h2 className="text-lg font-semibold">{dictionary.characterPage.quoteTitle}</h2>
            <blockquote className="mt-4 border-l-4 border-accentE/80 pl-4 text-base italic text-white/90">
              <p>{character.quote}</p>
            </blockquote>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
