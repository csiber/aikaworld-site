export default function Page() {
  return (
    <div>
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,106,61,0.25),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Anime co-op action RPG – Raid. Survive. <span className="text-accentB">Resonance.</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl opacity-90">
            Öt Rezonátor. Óriási bossok. Végtelen hullámok.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a className="px-5 py-3 rounded-lg bg-accentA hover:opacity-90 font-semibold" href="https://store.steampowered.com/">
              Wishlist on Steam
            </a>
            <a className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20" href="https://discord.gg/">
              Join Discord
            </a>
            <a className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20" href="#newsletter">
              Subscribe
            </a>
          </div>
          <div className="mt-10 aspect-video w-full rounded-2xl overflow-hidden border border-white/10">
            {/* Ide mehet egy némított webm teaser posztbuild után */}
            <img src="https://media.aikaworld.com/hero-keyart.jpg" alt="AIKA World key art" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* MODES */}
      <section id="modes" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Játékmódok</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-xl font-semibold">Raid Boss Arena</h3>
            <p className="mt-2 opacity-90">Skálázódó aréna-csaták, óriási bossokkal. A szinergia dönt.</p>
            <ul className="mt-4 list-disc list-inside opacity-80 text-sm">
              <li>Party-size skálázás</li>
              <li>Mechanikák és fázisok</li>
              <li>Csapat szerepkörök</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 p-6 bg-white/5">
            <h3 className="text-xl font-semibold">Infest Survival</h3>
            <p className="mt-2 opacity-90">Végtelen hullámok, fokozódó tempó és checkpoint jutalmak.</p>
            <ul className="mt-4 list-disc list-inside opacity-80 text-sm">
              <li>Wave-based hentelés</li>
              <li>Checkpoint rewards</li>
              <li>Meta-progress: kozmetika/boost</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CHARACTERS */}
      <section id="characters" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Rezonátorok</h2>
        <p className="mt-2 opacity-90">Válaszd ki a rezonanciád. Mind az öt lány másban zseniális.</p>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { name: 'Akari', role: 'Tűz', color: 'accentA' },
            { name: 'Komi', role: 'Víz', color: 'accentB' },
            { name: 'Yui', role: 'Szél', color: 'accentC' },
            { name: 'Hina', role: 'Penge', color: 'accentD' },
            { name: 'Miyu', role: 'Gyógyítás', color: 'accentE' }
          ].map(c => (
            <a key={c.name} href={`/characters/${c.name.toLowerCase()}`} className="rounded-xl border border-white/10 p-4 bg-white/5 hover:bg-white/10 transition">
              <div className={`h-36 w-full rounded-lg bg-${c.color}`} />
              <div className="mt-3 font-semibold">{c.name}</div>
              <div className="text-sm opacity-80">{c.role}</div>
            </a>
          ))}
        </div>
      </section>

      {/* MEDIA */}
      <section id="media" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Média</h2>
        <p className="mt-2 opacity-90">Screenshotok, key artok, háttérképek.</p>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img className="rounded-lg border border-white/10" src="https://media.aikaworld.com/s1.jpg" alt="Screenshot" />
          <img className="rounded-lg border border-white/10" src="https://media.aikaworld.com/s2.jpg" alt="Screenshot" />
          <img className="rounded-lg border border-white/10" src="https://media.aikaworld.com/s3.jpg" alt="Screenshot" />
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Roadmap</h2>
        <ol className="mt-6 relative border-s border-white/10 ps-6">
          <li className="mb-6">
            <div className="absolute -start-[6px] mt-1.5 h-3 w-3 rounded-full bg-accentA" />
            <h3 className="font-semibold">v1 – Raid + Infest</h3>
            <p className="opacity-80 text-sm">Kooperatív PvE, kozmetikai progresszió.</p>
          </li>
          <li className="mb-6">
            <div className="absolute -start-[6px] mt-1.5 h-3 w-3 rounded-full bg-accentD" />
            <h3 className="font-semibold">v2 – Story Mode</h3>
            <p className="opacity-80 text-sm">Narratív ív, slice-of-life tónus, döntések.</p>
          </li>
          <li>
            <div className="absolute -start-[6px] mt-1.5 h-3 w-3 rounded-full bg-accentB" />
            <h3 className="font-semibold">v3 – MMO irány</h3>
            <p className="opacity-80 text-sm">HUB, frakciók, közösségi rendszer.</p>
          </li>
        </ol>
      </section>

      {/* COMMUNITY / NEWSLETTER */}
      <section id="community" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Közösség & Feliratkozás</h2>
        <p className="mt-2 opacity-90">Csatlakozz a Discordhoz, és iratkozz fel a playtest hírekre.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20" href="https://discord.gg/">Join Discord</a>
          <a className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20" href="https://store.steampowered.com/">Wishlist on Steam</a>
        </div>

        <form id="newsletter" className="mt-6 max-w-md">
          <label className="block text-sm mb-2">E-mail cím</label>
          <div className="flex gap-2">
            <input required type="email" placeholder="te@pelda.hu" className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/10 outline-none" />
            <button className="px-4 rounded-md bg-accentB hover:opacity-90">Feliratkozom</button>
          </div>
          <p className="mt-2 text-xs opacity-70">A feliratkozással elfogadod az Adatkezelési tájékoztatót.</p>
        </form>
      </section>
    </div>
  );
}
