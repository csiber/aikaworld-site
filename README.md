# AIKA World marketing oldal

Ez a repository az AIKA World marketing site Next.js alapú forráskódját tartalmazza.

## Fejlesztői környezet

```bash
npm install
npm run dev
```

A projekt a Next.js 14-es verziójára épül, ezért Node.js 18+ szükséges.

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

