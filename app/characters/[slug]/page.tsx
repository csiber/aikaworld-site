import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteLayout from '../../../components/SiteLayout';
import { getCharacter, characterSlugs } from '../../../lib/content/characters';
import { getDictionary } from '../../../lib/i18n/dictionaries';
import type { Locale } from '../../../lib/i18n/config';
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
  const locale = resolveRequestLocale() as Locale;
  const dictionary = getDictionary(locale);
  const character = getCharacter(locale, slug);

  if (!character) {
    return createStaticPageMetadata(locale, dictionary, `/characters/${slug}`, 'notFound');
  }

  return createCharacterMetadata(locale, dictionary, `/characters/${slug}`, character);
}

export default async function CharacterPage({ params }: CharacterPageProps) {
  const { slug } = await params;
  const locale = resolveRequestLocale() as Locale;
  const dictionary = getDictionary(locale);
  const character = getCharacter(locale, slug);

  if (!character) {
    notFound();
  }

  const basePath = locale === 'hu' ? '/hu' : '';

  return (
    <SiteLayout locale={locale} dictionary={dictionary}>
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <img
            src={character.heroImage}
            alt={`${character.name} hero banner`}
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
            <p className="text-sm uppercase tracking-[0.3em] text-accentB">{character.title}</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold">{character.name}</h1>
            <p className="mt-4 text-lg text-white/90">{character.playstyle}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">{dictionary.characterPage.archetypeTitle}</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="opacity-60">{dictionary.characterPage.roleLabel}</dt>
                <dd className="font-medium">{character.role}</dd>
              </div>
              <div>
                <dt className="opacity-60">{dictionary.characterPage.elementLabel}</dt>
                <dd className="font-medium">{character.element}</dd>
              </div>
              <div>
                <dt className="opacity-60">{dictionary.characterPage.playstyleLabel}</dt>
                <dd className="font-medium">{character.playstyle}</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-accentB/30 bg-accentB/10 p-6">
            <h2 className="text-lg font-semibold">{dictionary.characterPage.tipsTitle}</h2>
            <ul className="mt-4 list-disc list-inside space-y-2 text-sm">
              {character.tips.map(tip => (
                <li key={tip} className="opacity-90">
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
