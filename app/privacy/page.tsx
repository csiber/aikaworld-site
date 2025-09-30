import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adatvédelmi tájékoztató – AIKA World',
  description:
    'Ismerd meg, hogyan kezeljük az adataidat az AIKA World világában. A részletes tájékoztató hamarosan érkezik.',
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Adatvédelmi tájékoztató</h1>
      <p className="mt-6 text-lg opacity-80">
        Ez egy ideiglenes szöveg, amíg a végleges adatvédelmi tájékoztatón dolgozunk.
        A teljes dokumentum hamarosan elérhető lesz ezen az oldalon.
      </p>
      <p className="mt-4 opacity-80">
        Amennyiben sürgős kérdésed merül fel, kérjük, vedd fel velünk a kapcsolatot az
        info@aikaworld.com címen.
      </p>
    </div>
  );
}
