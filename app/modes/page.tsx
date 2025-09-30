import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Játékmódok – AIKA World',
  description:
    'Részletes áttekintés a Raid Boss Arena és az Infest Survival módokról: mechanikák, jutalmak, csapat szerepek az AIKA Worldben.',
  openGraph: {
    title: 'Játékmódok – AIKA World',
    description:
      'Raid Boss Arena és Infest Survival részletes leírása, tippek és jutalmak az AIKA World kooperatív akció RPG-ben.',
    type: 'article',
    url: 'https://aikaworld.com/modes',
    siteName: 'AIKA World',
    locale: 'hu_HU',
    images: [
      {
        url: 'https://media.aikaworld.com/og-modes.jpg',
        width: 1200,
        height: 630,
        alt: 'AIKA World játékmódok grafika'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Játékmódok – AIKA World',
    description:
      'Ismerd meg a Raid Boss Arena és Infest Survival módok működését, jutalmait és ideális csapatfelállásait.',
    images: ['https://media.aikaworld.com/og-modes.jpg']
  }
};

const sections = [
  {
    id: 'raid',
    title: 'Raid Boss Arena',
    tagline: 'Óriási bossok, többfázisú összecsapások és raid-szintű koordináció.',
    mechanics: [
      'Dinamikus boss fázisok időzített wipe-mekanikákkal és egyedi debuffokkal.',
      'Aréna modulátorok, amelyek minden héten extra környezeti veszélyt adnak hozzá.',
      'Party-size skálázás 3–5 játékos között, külön HP és sebzés görbével.'
    ],
    rewards: [
      'Legendary-tier loot tokenek, amelyekből craftolható a szezonális fegyver skin.',
      'Rank XP a Raid Ladderhez, heti resetekkel és kozmetikai rangkeretekkel.',
      'Egyedi emote-ok és banner effektusok a flawless (wipe nélküli) clearért.'
    ],
    roles: [
      'Vanguard (Tank): pajzscsere és boss pozicionálása a távolsági kondivókon kívül.',
      'Resonator (DPS): burst-ablakok kihasználása Resonance Chainnél, mechanika fókuszban.',
      'Harmonics (Support): cleanse időzítése, overheal pajzs fenntartása a raidwide sebzésre.'
    ]
  },
  {
    id: 'infest',
    title: 'Infest Survival',
    tagline: 'Fokozódó horda mód adaptív AI-val és checkpoint alapú fejlődéssel.',
    mechanics: [
      'Procedurálisan generált wave-minták, amelyek reagálnak a squad buildjére.',
      'Infest Alert szint, amely növeli a mutánsok sebességét és speciális affixeket hoz be.',
      'Kooperatív erőforrás-menedzsment: ammo kiosztás, drón hívások és erődítés építés.'
    ],
    rewards: [
      'Biomass cache-ek, amelyekből fejleszthető a tábor modul és új perk slotok nyílnak.',
      'Checkpoint kreditek, amelyek lehetővé teszik a köztes kilépést jutalomvesztés nélkül.',
      'Season pass XP boost és heti kihívások extra kozmetikai tokenekért.'
    ],
    roles: [
      'Crowd Control Specialist: AoE rezgésekkel ritkítja a swarmot és lassítja a sprintereket.',
      'Objective Runner: mozgékony karakter, aki aktiválja a relay pontokat és hozza a supply dropokat.',
      'Field Medic: gyors revive és stimul injekció, amely stackelő sebzéscsökkentést ad a csapatnak.'
    ]
  }
];

export default function ModesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <header className="mb-12">
        <nav aria-label="Szöveges horgonyok" className="text-sm opacity-80">
          <ul className="flex flex-wrap gap-3">
            {sections.map(section => (
              <li key={section.id}>
                <Link href={`#${section.id}`} className="hover:opacity-80">
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <h1 className="mt-6 text-3xl md:text-4xl font-bold">AIKA World játékmódok</h1>
        <p className="mt-4 max-w-2xl opacity-90">
          Merülj el a kooperatív kihívásokban: a Raid Boss Arena a precíz végrehajtást, míg az Infest Survival az adaptív
          túlélést jutalmazza. Az alábbi útmutatók segítenek a csapatnak felkészülni mindkét módra.
        </p>
      </header>

      <div className="space-y-16">
        {sections.map(section => (
          <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-24">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 shadow-lg shadow-black/20">
              <div className="md:flex md:items-start md:justify-between md:gap-8">
                <div className="md:max-w-2xl">
                  <h2 id={`${section.id}-title`} className="text-2xl md:text-3xl font-semibold">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-base md:text-lg opacity-90">{section.tagline}</p>
                </div>
                <Link
                  href="/"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accentB hover:opacity-80 md:mt-0"
                >
                  Vissza a főoldalra
                  <span aria-hidden>↩</span>
                </Link>
              </div>

              <div className="mt-8 grid gap-8 md:grid-cols-3">
                <article className="rounded-2xl border border-white/10 bg-black/20 p-6">
                  <h3 className="text-lg font-semibold">Kulcsmechanikák</h3>
                  <ul className="mt-4 space-y-3 text-sm opacity-80">
                    {section.mechanics.map(point => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
                <article className="rounded-2xl border border-white/10 bg-black/20 p-6">
                  <h3 className="text-lg font-semibold">Jutalmak</h3>
                  <ul className="mt-4 space-y-3 text-sm opacity-80">
                    {section.rewards.map(point => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
                <article className="rounded-2xl border border-white/10 bg-black/20 p-6">
                  <h3 className="text-lg font-semibold">Csapat szerepek</h3>
                  <ul className="mt-4 space-y-3 text-sm opacity-80">
                    {section.roles.map(point => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
