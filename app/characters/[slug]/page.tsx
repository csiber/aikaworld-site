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

  const basePath = locale === 'hu' ? '/hu' : '';

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

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">{dictionary.characterPage.loreTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/90">{character.lore}</p>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-accentB">
                  {dictionary.characterPage.mentalityTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{character.mentality}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-accentA/40 bg-accentA/10 p-4">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accentA">
                    {dictionary.characterPage.likesTitle}
                  </h3>
                  <p className="mt-2 text-sm text-white/85">{character.likes}</p>
                </div>
                <div className="rounded-xl border border-accentD/40 bg-accentD/10 p-4">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accentD">
                    {dictionary.characterPage.dislikesTitle}
                  </h3>
                  <p className="mt-2 text-sm text-white/85">{character.dislikes}</p>
                </div>
              </div>
            </div>
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
