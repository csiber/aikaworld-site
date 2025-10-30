# Anime sorozatra szabott tartalom-újratervezési csomag

## 1. Kiindulási helyzet
- **Jelenlegi pozícionálás:** A teljes weboldal narratívája és cselekvésre ösztönzése az "AIKA Resonance" egyszemélyes akciójátékként hivatkozik a projektre (pl. hős szekció, közösségi blokkok, archivált programok).【F:lib/i18n/dictionaries/en.ts†L32-L197】
- **Navigációs elemek:** A főmenü és a lábléc játékos fókuszú oldalakra mutat (Story Mode, Progression, Dev Journal, Lore).【F:lib/i18n/dictionaries/en.ts†L8-L71】
- **Tartalmi modulok:** A HomePage komponens jelenleg játékmeneti videót, frakció bemutatót és játékmód kártyákat jelenít meg.【F:components/HomePage.tsx†L73-L171】
- **Média és CTA-k:** A "Wishlist on Steam" és "Join Discord" hívások játék launchhoz kötődnek, a videó trailer is gameplay orientált.【F:lib/i18n/dictionaries/en.ts†L8-L197】【F:components/HomePage.tsx†L126-L171】

## 2. Új célkitűzés
Az oldal minden tartalmát az AIKA Resonance anime sorozat bemutatására, epizód alapú narratívára és stúdió kommunikációra kell szabni. A hangsúly a sorozat világa, szereplői, évad-tervek, produkciós stáb és rajongói interakció legyen.

## 3. Stratégiai pillérek
1. **Episodikus történetmesélés:** A "Story Mode" / "Game Modes" blokkot epizód- és évad-áttekintéssé alakítani, teaser jelenetekkel, stream platform információkkal.
2. **Karakter fókuszú bemutatás:** A Resonator kártyákat hősök/ellenfelek profiljává bővíteni, kapcsolódó seiyuu/staff információkkal.
3. **Produkciós háttér:** Dev Journal → "Production Log"; Playtest / Creator program → "Közönségtalálkozók", "Rajongói pályázatok" archivuma.
4. **Rajongói csatornák:** CTA-kat a sorozat követésére (pl. hírlevél, streaming platform értesítések, közösségi kampányok) váltani.

> **Megjegyzés az epizódtervezésről:** A konkrét epizód- és évadstruktúra jelenleg még kialakítás alatt áll, ezért minden modulban (episode guide, teaser tartalmak, idővonalak) dinamikus, könnyen frissíthető helykitöltőket és szerkesztői jegyzeteket kell fenntartani a véglegesítésig.

## 4. Oldalszintű átírási követelmények
### 4.1 Kezdőoldal (`components/HomePage.tsx`, `lib/i18n/dictionaries/*`)
- Hero szekció: új tagline, monológ és összefoglaló az anime sorozatról; premier dátum/streaming platform CTA.
- Videó blokk: gameplay trailer helyett teaser/trailer animáció; poster és alt szöveg frissítése.
- World & Factions → "Világ és szervezetek" az anime kontextusában (épületek, story arcs). Bullet pontokat epizód jelenetekre cserélni.
- Game Modes kártya → "Évadok & különkiadások" strukturált táblázattal (E1, E2, OVA, stb.).
- Resonators szekció → karakter poszterek + szinkronhang, szerepkör, kulcs epizód.
- Media galéria → concept art, jelenet állóképek, promóciós plakátok; alt szöveg és CDN URL frissítése.
- Community blokk → "Fan Hub" (pl. hivatalos közösségi események, hírlevél, merch értesítő).

### 4.2 Navigáció és globális szöveg (`lib/i18n/dictionaries/*`)
- Menüpontok átnevezése: "World" → "Világ", "Story" → "Sorozat", "Progression" → "Együttműködések", stb.
- CTA-k cseréje: "Wishlist on Steam" → "Feliratkozás a premier értesítőre"; Discord → hivatalos fan közösség vagy streaming watch party.
- Lábléc jogi blokkok felülvizsgálata (stúdió neve, licencelés, sugárzási partnerek, anime gyártó).
- Többnyelvű szövegekhez HU fordítás frissítése.

### 4.3 Tartalmi oldalak
- **`app/modes` → Sorozat oldal:** új szekciók epizód guide, story arc leírás, lead stúdió kommentár.
- Az epizód guide komponensben külön blokkot kell fenntartani a "Végső csata" story arc számára, amely lehetővé teszi a részletek gyors frissítését a koncepció véglegesítésekor.
- **`app/progression` → Produkciós ütemterv:** pre-production, airing schedule, utómunkák.
- **`app/(marketing)/playtests` & `app/(marketing)/creator-program`:** archivált játék programok helyett "Rajongói események" / "Közösségi kampányok" idővonal.
- **`content/devlog` MDX fájlok:** tartalmakat átírni gyártási naplóra (concept art bemutató, storyboard update, stúdió interjúk).
- **`app/presskit` és `public` assetek:** sajtócsomag frissítése anime key arttal, karakterlapokkal.

### 4.4 Backend/Integráció
- Hírlevél űrlap szövegei, visszajelzései módosítandók (pl. "premier értesítő").
- API végpontok (pl. `/subscribe`) változatlanul használhatók, de adatkezelési tájékoztatót aktualizálni kell.
- Env változók (Steam/Discord URL) → streaming platform / közösségi média linkek.

## 5. Tartalomgyártási feladatlista
1. **Narratív újraírás:** teljes hero copy, world leírások, epizód összefoglalók, karakter profilok (HU + EN).
2. **Audiovizuális anyagok:** teaser videó, key art, jelenet állóképek, logók (SVG preferált, PNG kerülendő).
3. **Staff & casting információk:** rendező, producer, stúdió, szinkronszínészek listája; ezek megjelenítése dedikált modulban.
4. **Rajongói engagement:** hírlevél tartalomstratégia, közösségi média kampány, Q&A események.
5. **Jogi dokumentáció:** adatkezelési nyilatkozat, felhasználási feltételek módosítása a streaming terjesztésre.

## 6. Fejlesztési backlog (prioritás szerint)
1. **Alap UI tartalomcsere:** dictionary szövegek, CTA-k, fő komponens copy (MVP a relaunchhoz).
2. **Strukturális komponens módosítás:** új modulok (epizód rács, stáb szekció, produkciós ütemterv timeline).
3. **I18n frissítés:** magyar/angol fordítás, kulcsok konszolidálása, új fogalmak.
4. **Asset pipeline:** új média URL-ek, optimalizált preview képek (WebM, WebP, SVG), CDN frissítések.
5. **Meta és SEO:** `createStaticPageMetadata` hívások frissítése (title/description az anime brandre, OG képek).
6. **Devlog migráció:** régi bejegyzések archiválása (`content/_archived`), új template a produkciós logokhoz.
7. **Közösségi modulok:** Fan Hub komponensek, event naptár integráció.
8. **Story bible frissítések:** Kulcs story arc metadata (pl. végső csata) folyamatos karbantartása, hogy az epizódstruktúra véglegesítéséig is naprakészek maradjanak a tartalmi modulok.

## 7. Függőségek és kockázatok
- **Vizualis anyagok késése:** nélkülük nem lehet a hero/media szekciókat feltölteni.
- **Licenc/jogi jóváhagyások:** streaming partnerek és seiyuu szerződések publikálhatósága.
- **I18n teher:** sok új kulcs, gondoskodni kell a fordítási workflow-ról (pl. Crowdin export).
- **Technikai adósság:** sűrűn hivatkozott "game" stringek széles körben jelen vannak; refaktorálni kell, hogy a kód ne tartalmazzon félrevezető változóneveket (pl. `modes`, `playtests`).

## 8. Javasolt ütemezés
1. **Discovery sprint (1 hét):** stakeholder interjúk, sorozat bibliák, asset briefek összegyűjtése.
2. **Copy & dizájn sprint (2 hét):** új szövegek, layout prototípusok, nyelvi validálás.
3. **Fejlesztési sprint (2-3 hét):** komponens refaktor, asset integráció, i18n, SEO.
4. **QA & publikálás (1 hét):** tartalom ellenőrzés, böngésző tesztek, végső jogi review.

## 9. Mérőszámok és visszajelzés
- Hírlevél feliratkozások száma (anime premier értesítő).
- Sajtócsomag letöltések, watch party regisztrációk.
- Fan Hub aktivitási mutatók (event RSVPs, közösségi link kattintások).
- Devlog (Production Log) olvasottság és megosztások.

## 10. Következő lépések
- Stakeholder döntés a végleges tartalmi hierarchiáról.
- Copywriter brief jóváhagyása az új modulokhoz.
- Asset gyűjtés ütemezése (trailer, key art, karakter portrék).
- Fejlesztési ticketek felvétele a backlog sorrend szerint.

## 11. Story koncepció fókusz: Végső csata a Supercapital AIKA ellen
- **Alaphelyzet:** Aika, a kapitány és az öt lány (Akari, Hina, Komi, Miyu, Yui) egy lezuhant, öreg, atomreaktoros csatahajón (BS) próbálnak közel kerülni a Supercapital AIKA-hoz, hogy Aika bejuthasson az AI rendszerébe és leállítsa vagy átvegye az irányítást felette.
- **Hangulat & vizualitás:** Az EMP-álló, kézzel működtetett, recsegő-ropogó hajó retro-futurisztikus, feszült atmoszférát teremt; a staging során kaotikus, emberi, heroikus momentumokat kell kiemelni.
- **Karakter dinamika:** A kapitány stratégiai döntései, Aika mentális párbaja a hálózaton belül, valamint a lányok kézi vezérléssel életben tartott rendszerei adják a jelenet fő érzelmi ívét.
- **Narratív rugalmasság:** A végkimenetel jelenleg nincs rögzítve, ezért minden közlésben (landing hero copy, epizód guide, presskit) kerülni kell a spoiler-gyanús állításokat, és hangsúlyozni kell a tét nagyságát, illetve a döntés előtt álló szereplőket.
- **Marketing integráció:** A Fan Hub, CTA-k és média galéria dedikált teaser anyagokat és stáb-interjúkat kapjanak a csúcspont kiemelésére, készen arra, hogy a részleteket a végleges koncepció után gyorsan frissíteni lehessen.
