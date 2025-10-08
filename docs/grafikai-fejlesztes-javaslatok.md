# Grafikai és animációs fejlesztési javaslatok

## Háttér és atmoszféra
- **Dinamikus csillagos égbolt:** Apró, lassan mozgó részecskék (Canvas vagy CSS animation) mélyítenék az űrhöz hasonló hangulatot.
- **Halvány fényudvarok a tartalmi blokkok mögött:** Box-shadow vagy pseudo-elemekkel létrehozott glow segít kiemelni a fő tartalmi részeket.
- **Szekciók közötti átvezető rétegek:** Finom, átlós maszkok vagy SVG shape-ek lépcsőzetes elhelyezése megtöri a monotonitást.

## Tipográfia és UI elemek
- **Animált címsorok:** `@keyframes` vagy `framer-motion` segítségével a betűk enyhe betűköz-növekedéssel/lágy beúszással jelenhetnének meg.
- **Interaktív gomb-reakciók:** Hoverkor enyhe skálázás + fénycsík animáció (`background-position` animációval) modern érzetet ad.
- **Tartalom-kártyák lebegtetése:** Scrollra felbukkanó kártyák 3D-s `transform` és árnyék animációval (scroll-trigger, pl. `framer-motion`, `ScrollTrigger`).

## Navigáció és átmenetek
- **Oldalszintű page transition:** `next` + `framer-motion` integrációval az oldalak közti váltás lehet fade + slide.
- **Sticky navigáció árnyék animációval:** Scroll kezdetekor aktiválódó áttetsző háttér + árnyék, amely erősíti a térbeliséget.
- **Anchor görgetések finomításával** (smooth scroll + enyhe overshoot) a felhasználói élmény folytonosabbá válik.

## Animációs technológiai stack ajánlások
- `framer-motion` komplex komponens animációkra.
- `GSAP` vagy `Motion One` a scroll-triggerelt timeline-okhoz.
- CSS `prefers-reduced-motion` media query használata az akadálymentesítés érdekében.

## Teljesítmény és hozzáférhetőség
- Ne animáljunk nagy felületű blur filtereket; helyette használjunk előre renderelt glow effekteket.
- SVG ikonoknál a stroke animációk legyenek rövidek és optimalizált path-okkal készüljenek.
- Mindig biztosítsunk statikus fallbacket (pl. disable animációk low-power módban).
