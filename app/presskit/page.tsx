import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const factSheet: { label: string; value: ReactNode }[] = [
  { label: 'Műfaj', value: 'Anime co-op akció RPG' },
  { label: 'Játékmódok', value: 'Raid Boss Arena, Infest Survival' },
  { label: 'Platformok', value: 'PC (Steam), konzolok bejelentés alatt' },
  {
    label: 'Kapcsolat',
    value: (
      <a href="mailto:press@aikaworld.com" className="text-accentB hover:opacity-80">
        press@aikaworld.com
      </a>
    )
  }
];

const downloads = [
  {
    title: 'Logó & Wordmark',
    description: 'Elsődleges logó és wordmark több formátumban.',
    items: [
      {
        label: 'AIKA World logó (PNG)',
        href: 'https://media.aikaworld.com/presskit/logo/aikaworld-logo.png'
      },
      {
        label: 'AIKA World logó (SVG)',
        href: 'https://media.aikaworld.com/presskit/logo/aikaworld-logo.svg'
      },
      {
        label: 'Wordmark (PNG)',
        href: 'https://media.aikaworld.com/presskit/logo/aikaworld-wordmark.png'
      }
    ]
  },
  {
    title: 'Key art válogatás',
    description: 'Nagy felbontású kulcsvizuálok promócióhoz.',
    items: [
      {
        label: 'Key art #1',
        href: 'https://media.aikaworld.com/presskit/keyart/aikaworld-keyart-01.jpg'
      },
      {
        label: 'Key art #2',
        href: 'https://media.aikaworld.com/presskit/keyart/aikaworld-keyart-02.jpg'
      },
      {
        label: 'Key art #3',
        href: 'https://media.aikaworld.com/presskit/keyart/aikaworld-keyart-03.jpg'
      }
    ]
  },
  {
    title: 'Screenshotok',
    description: 'Gameplay képek a legújabb buildből.',
    items: [
      {
        label: 'Screenshot #1',
        href: 'https://media.aikaworld.com/presskit/screenshots/aikaworld-screenshot-01.jpg'
      },
      {
        label: 'Screenshot #2',
        href: 'https://media.aikaworld.com/presskit/screenshots/aikaworld-screenshot-02.jpg'
      },
      {
        label: 'Screenshot #3',
        href: 'https://media.aikaworld.com/presskit/screenshots/aikaworld-screenshot-03.jpg'
      }
    ]
  }
];

export const metadata: Metadata = {
  title: 'AIKA World – Presskit',
  description:
    'Letölthető logók, key artok, screenshotok és fontos információk az AIKA World sajtó számára.'
};

export default function PresskitPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 space-y-16">
      <section>
        <h1 className="text-3xl md:text-4xl font-bold">AIKA World Presskit</h1>
        <p className="mt-4 text-base md:text-lg opacity-90">
          Minden sajtó- és tartalomkészítői anyag egy helyen. Szabadon felhasználhatóak a lenti feltételek mellett.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:col-span-2">
          <h2 className="text-xl font-semibold">Fact sheet</h2>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            {factSheet.map(item => (
              <div key={item.label}>
                <dt className="text-sm uppercase tracking-wide opacity-60">{item.label}</dt>
                <dd className="mt-1 text-base font-medium text-white/90">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="space-y-10">
        <h2 className="text-2xl font-semibold">Letölthető anyagok</h2>
        {downloads.map(block => (
          <div key={block.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="md:flex md:items-start md:justify-between md:gap-8">
              <div>
                <h3 className="text-xl font-semibold">{block.title}</h3>
                <p className="mt-2 text-sm opacity-80">{block.description}</p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {block.items.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm font-semibold hover:border-accentB hover:text-accentB transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{item.label}</span>
                  <span aria-hidden>↓</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl font-semibold">Felhasználási feltételek</h2>
        <p className="mt-3 text-sm opacity-80">
          A letölthető anyagok promóciós és szerkesztőségi tartalmakban használhatók fel, a játék pontos megnevezésével és a
          forrás megjelölésével. Kereskedelmi továbbértékesítés nem engedélyezett. Egyedi kéréssel kapcsolatban írj a
          <a href="mailto:press@aikaworld.com" className="text-accentB hover:opacity-80"> press@aikaworld.com</a> címre.
        </p>
      </section>
    </div>
  );
}
