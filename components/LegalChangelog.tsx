import type { LegalChangelogDictionary } from '../lib/i18n/types';

export default function LegalChangelog({ changelog }: { changelog: LegalChangelogDictionary }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-semibold">{changelog.heading}</h1>
      {changelog.intro ? <p className="mt-6 text-lg opacity-80">{changelog.intro}</p> : null}
      <div className="mt-10 space-y-10">
        {changelog.entries.map(entry => (
          <article key={`${entry.version}-${entry.date}`} className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur">
            <header>
              <p className="text-sm uppercase tracking-wide text-white/60">{entry.date}</p>
              <h2 className="mt-2 text-2xl font-semibold">{entry.version}</h2>
              <p className="mt-2 text-base opacity-80">{entry.summary}</p>
            </header>
            {entry.details?.length ? (
              <ul className="mt-4 list-disc space-y-2 pl-6 text-sm opacity-80">
                {entry.details.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
