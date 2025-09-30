import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Felhasználási feltételek – AIKA World',
  description:
    'Tudd meg, milyen szabályok mellett vehetsz részt az AIKA World közösségében. A részletes feltételek hamarosan elérhetők.',
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Felhasználási feltételek</h1>
      <p className="mt-6 text-lg opacity-80">
        Ez egy ideiglenes szöveg, amely a végleges felhasználási feltételek kiadásáig szolgál
        helykitöltőként.
      </p>
      <p className="mt-4 opacity-80">
        Dolgozunk azon, hogy minden részlet pontosan és érthetően megfogalmazva jelenjen meg
        ezen az oldalon. Köszönjük a türelmed!
      </p>
    </div>
  );
}
