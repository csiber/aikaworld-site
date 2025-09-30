import Link from 'next/link';
import { characters } from './data';

export const metadata = {
  title: 'Rezonátorok – AIKA World',
  description: 'Akari, Komi, Yui, Hina és Miyu részletes karakterprofilja az AIKA World világából.'
};

export default function CharactersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-10">
        <nav aria-label="breadcrumb" className="text-sm opacity-70">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/characters" className="hover:opacity-80">
                Characters
              </Link>
            </li>
          </ol>
        </nav>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold">AIKA World Rezonátorok</h1>
        <p className="mt-3 max-w-2xl opacity-90">
          Ismerd meg mind az öt fő karakter képességeit, szerepeit és legjobb gyakorlati tippjeit, mielőtt belépsz a raid arénákba.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map(character => (
          <article
            key={character.slug}
            className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-lg shadow-black/20"
          >
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img
                src={character.heroImage}
                alt={`${character.name} hero art`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold">{character.name}</h2>
              <p className="text-sm uppercase tracking-wide opacity-70">{character.title}</p>
              <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="opacity-60">Szerep</dt>
                  <dd className="font-medium">{character.role}</dd>
                </div>
                <div>
                  <dt className="opacity-60">Elem</dt>
                  <dd className="font-medium">{character.element}</dd>
                </div>
              </dl>
              <p className="mt-4 text-sm opacity-80">{character.playstyle}</p>
              <Link
                href={`/characters/${character.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accentB hover:opacity-80"
              >
                Profil megnyitása
                <span aria-hidden>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
