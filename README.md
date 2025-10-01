# AIKA World marketing oldal

Ez a repository az AIKA World marketing site Next.js alapú forráskódját tartalmazza.

## Fejlesztői környezet és telepítés

### Előfeltételek

- Node.js 18 vagy újabb (ajánlott a [Volta](https://volta.sh/) vagy az [nvm](https://github.com/nvm-sh/nvm) használata a verzió kezeléséhez)
- npm 9+

### Gyorsindítás

```bash
# függőségek telepítése
npm install

# fejlesztői szerver indítása http://localhost:3000 címen
npm run dev
```

Az első indítás után minden módosítás automatikusan újratölti az oldalt. A projekt teljesen statikus, ezért nincs szükség külön adatbázisra vagy háttérrendszerre a lokális fejlesztéshez.

## Build és exportálás

A Cloudflare Pages publikáláshoz statikus exportot készítünk:

```bash
# production build (automatikus build-időbélyeg generálással)
npm run build

# production szerver futtatása (SSR preview)
npm run start

# statikus fájlok exportja az ./out mappába
npx next export

# opcionális: előnézet lokálisan az export után
npx serve out
```

Az `out` mappa tartalmazza a publikálható állományokat. A parancsokat egyben is futtathatod: `npm run build && npx next export`.

## Cloudflare Pages beállítások

| Beállítás                | Érték                      |
|--------------------------|----------------------------|
| Framework preset         | *None* (egyedi konfiguráció)|
| Build parancs            | `npm run build && npx next export` |
| Build output directory   | `out`                       |
| Node.js verzió           | `18`                        |
| Environment variables    | nincs szükség kötelező változóra |

Publikáláskor a Cloudflare Pages automatikusan feltölti az `out` könyvtár tartalmát. Ha saját pipeline-t építesz, győződj meg róla, hogy a build során a fenti parancspárt futtatod le.

## Jogi védelem és archiválás

- **Új jogi oldalak:** elkészültek a kétnyelvű (EN/HU) Felhasználási feltételek, Adatkezelési tájékoztató, Copyright / DMCA, Fan Content Policy, Védjegyhasználati irányelvek és a változásnapló.
- **Lábléc frissítés:** minden oldal alján megjelenik a „© 2025 AIKA World. All rights reserved.” szöveg, a build dátuma (`Last build: YYYY-MM-DD`), valamint a jogi linkek és a `legal@aikaworld.com` elérhetőség postai címmel.
- **Open Graph képek:** a `public/og/` mappában található SVG-k vízjellel és beágyazott szerzői jogi metaadattal készülnek, a Meta/Twitter megosztások ezeket használják.
- **Wayback Machine archiválás:** a `npm run build` parancs után automatikusan fut a `scripts/wayback-save.mjs`. Aktiválásához állítsd be a `WAYBACK_SAVE_ON_DEPLOY=true` környezeti változót (és add meg a `SITE_URL` értéket).
- **Build-időbélyeg:** a `scripts/generate-build-info.mjs` minden build/fejlesztői indítás előtt létrehozza a `lib/generated/build-info.ts` fájlt. Gitből ignorált állomány, szükség esetén futtasd külön is: `npm run generate:build-info`.

## Cloudflare R2 média tárhely

A marketing oldal minden képi és videós tartalma a `https://media.aikaworld.com` aldomainről töltődik be, amely egy Cloudflare R2 bucketet fed le. A struktúra főbb mappái:

- `presskit/` – logók, key art és screenshotok sajtó számára
- `teaser/` – a főoldali videó posztere (`teaser-poster.jpg`) és a videófájlok (`teaser.webm`, `teaser.mp4`)
- `characters/` – karakterek hero képei
- `og/` – Open Graph megosztási képek
- `screenshots/` – általános játékképek

Új asset feltöltéséhez a fenti struktúrát kövesd, majd a Next.js komponensekben a teljes URL-t (`https://media.aikaworld.com/<útvonal>`) add meg. A domain egy CDN-ként működik, ezért a friss fájlok néhány perc cache-invalidation után jelennek meg.

## Teljesítmény audit

A 13. feladat során az alábbi optimalizációkat valósítottuk meg a Lighthouse pontszámok javítása érdekében:

- Minden tartalmi kép `loading="lazy"` attribútumot kapott a fölösleges betöltés elkerülésére.
- A hős videó `preload="none"` beállítást kapott, így csak felhasználói interakció esetén töltődik be.
- A jelenlegi verzió külső betűkészletet nem használ, ezért preconnect konfigurációra nincs szükség.

> **Megjegyzés:** A repository szabályai miatt Lighthouse screenshot nem kerülhet a verziókövetésbe. Kérlek futtasd le lokálisan a Lighthouse tesztet a `npm run build && npm run start` parancsok után, majd készíts saját képernyőfotót a riportból.

### Javasolt mérési lépések

1. `npm run build`
2. `npm run start`
3. Futtasd a Lighthouse auditot (Chrome DevTools vagy `npx lighthouse http://localhost:3000 --view`).
4. Ellenőrizd, hogy a Desktop pontszám 90+, a Mobile pontszám 85+ tartományban legyen.

