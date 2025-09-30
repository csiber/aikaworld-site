import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <div className="text-sm uppercase tracking-[0.3em] text-accentB">404</div>
      <h1 className="mt-3 text-3xl md:text-4xl font-bold">Ez a rezgés nem létezik</h1>
      <p className="mt-4 opacity-80">
        Úgy tűnik, egy olyan oldalra tévedtél, ami még nincs behangolva az AIKA World univerzumában. Nézz vissza a főoldalra vagy
        fedezd fel a Rezonátorokat.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
        <Link href="/" className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10">
          Vissza a főoldalra
        </Link>
        <Link href="/characters" className="rounded-lg bg-accentB px-4 py-2 font-semibold hover:opacity-90">
          Rezonátorok felfedezése
        </Link>
      </div>
    </div>
  );
}
