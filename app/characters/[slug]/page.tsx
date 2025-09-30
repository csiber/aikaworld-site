import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { characters, getCharacter } from '../data';

type CharacterPageProps = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: CharacterPageProps): Metadata {
  const character = getCharacter(params.slug);

  if (!character) {
    return {
      title: 'Ismeretlen rezonátor – AIKA World'
    };
  }

  return {
    title: `${character.name} – ${character.title} | AIKA World`,
    description: `${character.name} részletes profilja: ${character.role}, ${character.element} elem, játékmenet – tippek raidhez.`,
    openGraph: {
      title: `${character.name} – ${character.title}`,
      description: `${character.role} ${character.element} rezonátor a csapatban.`,
      images: [
        {
          url: character.heroImage,
          width: 1280,
          height: 720,
          alt: `${character.name} hero bannere`
        }
      ]
    }
  };
}

export function generateStaticParams() {
  return characters.map(character => ({ slug: character.slug }));
}

export default function CharacterPage({ params }: CharacterPageProps) {
  const character = getCharacter(params.slug);

  if (!character) {
    notFound();
  }

  return (
    <div>
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
                <Link href="/characters" className="hover:opacity-80">
                  Characters
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
            <h2 className="text-lg font-semibold">Archetípus</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="opacity-60">Szerep</dt>
                <dd className="font-medium">{character.role}</dd>
              </div>
              <div>
                <dt className="opacity-60">Elem</dt>
                <dd className="font-medium">{character.element}</dd>
              </div>
              <div>
                <dt className="opacity-60">Játékmód</dt>
                <dd className="font-medium">{character.playstyle}</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-accentB/30 bg-accentB/10 p-6">
            <h2 className="text-lg font-semibold">Tippgyűjtemény</h2>
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
    </div>
  );
}
