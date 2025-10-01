import Link from 'next/link';
import { getDictionary } from '../lib/i18n/dictionaries';
import { resolveRequestLocale } from '../lib/i18n/server-locale';

export default async function NotFound() {
  const locale = await resolveRequestLocale();
  const dictionary = getDictionary(locale);
  const homeHref = locale === 'hu' ? '/hu' : '/';
  const charactersHref = locale === 'hu' ? '/hu/characters' : '/characters';

  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <div className="text-sm uppercase tracking-[0.3em] text-accentB">{dictionary.notFound.code}</div>
      <h1 className="mt-3 text-3xl md:text-4xl font-bold">{dictionary.notFound.heading}</h1>
      <p className="mt-4 opacity-80">{dictionary.notFound.description}</p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
        <Link href={homeHref} className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10">
          {dictionary.notFound.homeCta}
        </Link>
        <Link
          href={charactersHref}
          className="rounded-lg bg-accentB px-4 py-2 font-semibold hover:opacity-90"
        >
          {dictionary.notFound.charactersCta}
        </Link>
      </div>
    </div>
  );
}
