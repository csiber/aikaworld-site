import type { Locale } from '../i18n/config';
import type { Character } from '../i18n/types';

const charactersByLocale: Record<Locale, Character[]> = {
  en: [
    {
      slug: 'akari',
      name: 'Akari',
      title: 'Blazeblade Vanguard',
      heroImage: 'https://media.aikaworld.com/akari-banner.png',
      role: 'Frontline DPS',
      element: 'Fire',
      playstyle:
        'Akari charges the front line with a grin, priming every charge to bloom into fire and shrapnel. She syncs her heartbeat to the detonation and giggles when the screams harmonize. Anyone left standing is just tinder for the next blast.',
      tips: [
        'After filling the resonance gauge, always open with Forgestep dash to stack maximum burn charges.',
        'During boss phase swaps, activating the Pyreguard shield turns into party-wide protection—call everyone in.',
        'Drop the fire tornado ultimate after your team controls the arena so enemies stay inside the damage field.'
      ],
      lore:
        'Akari Sato is a 26-year-old ex-salvage engineer from the volcanic forge-city of Narukami. She rebuilt her family’s scrapyard into a mobile arsenal after corporate security razed the district, and joined AIKA to hunt the mercenaries who bankroll the raids.',
      mentality:
        'An adrenaline-chasing optimist who treats every battlefield like a workshop; she measures trust in the sparks people keep.',
      likes: 'Ringing det-cord, recalibrating overclocked blades, late-night ramen with squadmates.',
      dislikes: 'Corporate safety briefings, standing idle after a fight, recycled air with no heat.',
      quote: 'Keep your eyes open—the fireworks don’t come with safety rails.'
    },
    {
      slug: 'komi',
      name: 'Komi',
      title: 'Tideweaver Oracle',
      heroImage: 'https://media.aikaworld.com/komi-banner.png',
      role: 'Support control',
      element: 'Water',
      playstyle:
        'Komi’s small frame hides a glacier’s malice. She waits in absolute silence until the squad blinks, then carves through tendons with frost-tipped threads. The air never even warms enough to carry a warning.',
      tips: [
        'Keep the tide field underneath the squad; in motion, use wave dash so it flows with them.',
        'Purge Bubble removes most debuffs—time it with raid mechanics.',
        'Empower your lead DPS with Ebbflow before their ultimate starts to double their burst window.'
      ],
      lore:
        'Komi Ueno is a 28-year-old tide seer from the Shinkai archipelago. Raised in a monastery that mapped oceanic resonance, she left to decode corporate sonar blacksites and now anchors AIKA’s recon wing with predictive tide charts.',
      mentality:
        'Serene and calculating; she lets silence pressure opponents before pulling them into a riptide of commands.',
      likes: 'Ritual tea ceremonies at dawn, waveforms aligned in perfect symmetry, the hush before a storm.',
      dislikes: 'Static-laden chatter, reckless pyros near her equipment, people who break oaths.',
      quote: 'Listen carefully—the tide always warns those willing to be still.'
    },
    {
      slug: 'yui',
      name: 'Yui',
      title: 'Gale Dancer',
      heroImage: 'https://media.aikaworld.com/yui-banner.png',
      role: 'Mobility DPS',
      element: 'Wind',
      playstyle:
        'Yui melts into the shadow between heartbeats, reappearing only to rake her blades through soft arteries. The spray of blood paints the battlefield she dances across at impossible speed. She laughs hardest when prey thinks they’ve escaped the dark.',
      tips: [
        'Chain Skystring grapples to extend airtime and trigger the Cyclone perk bonus.',
        'Zephyr Mark stacks when you tag separate targets—rotate enemies during multi-add phases.',
        'Before ulting, always trigger Breeze Step so your next three hits are guaranteed crits.'
      ],
      lore:
        'Yui Kazama is a 24-year-old former sky courier from the suspended districts of Neo-Kyoto. She smuggled medicine across gang-controlled air rails until AIKA offered her a legal way to outrun the syndicates.',
      mentality: 'A playful thrill-hunter who refuses to land; she trusts momentum more than promises.',
      likes: 'Open rooftops, improvised choreography mid-battle, noodle shops that stay open past curfew.',
      dislikes: 'Tangled harnesses, waiting for elevators, people who dismiss the street clans.',
      quote: 'Catch me if you can—wind’s already two steps ahead.'
    },
    {
      slug: 'hina',
      name: 'Hina',
      title: 'Edge Serenade',
      heroImage: 'https://media.aikaworld.com/hina-banner.png',
      role: 'Assassin burst',
      element: 'Blade',
      playstyle:
        'Hina wears a saintly smile as she wipes her blade clean, whispering benedictions that curdle into threats. Each slice is punctuated by a coy, cynical aside about the sins she’s correcting. Mercy is just another note in her macabre hymn.',
      tips: [
        'After Shadow Veil the opening strike always duplicates—line it up with boss vulnerability windows.',
        'Echo Slash stacks fall off when you take a hit, so play aggressively around dash iframes.',
        'Cancel the finisher animation with Serenade Waltz dash to exit danger zones faster.'
      ],
      lore:
        'Hina Kisaragi is a 27-year-old former concerto violinist who moonlighted as an assassin for the plutocrats that sponsored her concerts. After they tried to silence her, she defected to AIKA with a ledger full of their crimes.',
      mentality: 'A velvet-gloved sadist who savors fear like a melody, yet obsesses over perfect execution.',
      likes: 'Audiences that tremble, razor-precise choreography, rare vinyl recordings of dark classical suites.',
      dislikes: 'Sloppy kills, stage managers who talk over her cues, bright hospital lighting.',
      quote: 'Shall we dance? I promise the final note will linger.'
    },
    {
      slug: 'miyu',
      name: 'Miyu',
      title: 'Luminous Aegis',
      heroImage: 'https://media.aikaworld.com/miyu-banner.png',
      role: 'Shield-focused healer',
      element: 'Light',
      playstyle:
        'Miyu coos like a mother soothing children, all while her luminous vines burrow through armor and tear foes apart. She thanks them for feeding the garden as the light drains from their eyes. Under her gentle glow, no corpse is wasted.',
      tips: [
        'Radiant Ward shields stack—rotate them across the party so everyone keeps coverage.',
        'Solaris Pulse heals hardest with three light orbs prepared—pre-plan for heavy raid damage.',
        'Sanctuary Field is stationary, so align it with the team’s called position before the mechanic hits.'
      ],
      lore:
        'Miyu Tanabe is a 30-year-old former orbital defense tactician who coordinated the evacuation of Aika City during the first Resonance War. She now leads AIKA’s field teams, balancing battlefield triage with political negotiations.',
      mentality: 'A stoic guardian whose patience outlasts sieges; she carries everyone’s burdens without complaint.',
      likes: 'Morning drills with precise timing, patching up rookies while telling war stories, polished armor and clean logistics.',
      dislikes: 'Politicians who stall relief efforts, reckless heroics, rooms without natural light.',
      quote: 'Stand behind me. I’ll hold the line until the world remembers us.'
    }
  ],
  hu: [
    {
      slug: 'akari',
      name: 'Akari',
      title: 'Blazeblade Vanguard',
      heroImage: 'https://media.aikaworld.com/akari-banner.png',
      role: 'Frontvonal DPS',
      element: 'Tűz',
      playstyle:
        'Akari vigyorogva rohan az élre, minden töltetet úgy állít be, hogy tűz és repeszek virágozzanak. A szívverését a robbanáshoz igazítja, és kuncog, amikor a sikolyok ráfekszenek a ritmusra. Akinek marad ideje felállni, az csak gyújtós a következő detonációhoz.',
      tips: [
        'A rezgésmérő feltöltése után mindig kezdd a Forgestep dashsel a maximális égési töltetekhez.',
        'A boss fázisváltásai alatt a Pyreguard pajzs aktiválása csapatvédelemmé válik – szólítsd össze a party-t.',
        'A tűz tornádó ultit a csapat kontrollja után dobd be, így biztosan bent maradnak az ellenfelek a sebzésmezőben.'
      ],
      lore:
        'Satō Akari 26 éves, a narukami vulkánkovács város volt salvage-mérnöke. Miután a vállalati biztonsági erők lerombolták a családi MÉH-telepet, mozgó arzenállá építette át, és az AIKA-hoz csatlakozott, hogy levadássza a rajtaütéseket finanszírozó zsoldosokat.',
      mentality:
        'Adrenalinfüggő optimista, aki minden csatateret műhelyként kezel; az emberekben a szikráik alapján bízik meg.',
      likes:
        'Imádja a csilingelő gyutacsot, a túlhajtott pengék finomhangolását és az éjszakai ramen partikat a csapattal.',
      dislikes:
        'Utálja a vállalati biztonsági eligazításokat, a harc utáni tétlen álldogálást és a hő nélküli, újrahasznosított levegőt.',
      quote: 'Tartsd nyitva a szemed – a tűzijátékomhoz nincs biztonsági korlát.'
    },
    {
      slug: 'komi',
      name: 'Komi',
      title: 'Tideweaver Oracle',
      heroImage: 'https://media.aikaworld.com/komi-banner.png',
      role: 'Támogató kontroll',
      element: 'Víz',
      playstyle:
        'Komi apró termete gleccsernyi rosszindulatot rejt. Mozdulatlan csendben vár, míg a csapat pislog, aztán fagyott szálakkal metsz inakat. A levegő még arra sem melegszik fel, hogy figyelmeztetést vigyen.',
      tips: [
        'Az árapály mezőt tartsd a csapat alatt; mozgó harcban használj hullám dash-t, hogy velük együtt sodródjon.',
        'A Purge Bubble megszakítja a legtöbb debuffot – időzítsd a raid mechanikákhoz.',
        'Energizáld a fő DPS-t az Ebbflow buffal, mielőtt az ultija elkezdődik, így duplázódik a sebzésablaka.'
      ],
      lore:
        'Ueno Komi 28 éves árapály-látó a Shinkai-szigetcsoportból. Egy kolostorban nőtt fel, ahol az óceáni rezonanciát térképezték fel, majd otthagyta, hogy vállalati szonár feketebázisokat fejtsen meg; ma az AIKA felderítő szárnyát tartja össze előrejelző árapály-tábláival.',
      mentality:
        'Nyugodt és számító; hagyja, hogy a csend fojtsa az ellenfelet, mielőtt parancsai örvényébe rántaná.',
      likes:
        'Szereti a hajnali teaszertartásokat, a tökéletes szimmetriába rendezett hullámformákat és a vihart megelőző némaságot.',
      dislikes:
        'Utálja a sercegő rádiózajt, a felszerelése körül randalírozó pirokat és azokat, akik megszegik az esküjüket.',
      quote: 'Figyelj csendben – az árapály mindig figyelmezteti azt, aki hajlandó mozdulatlan maradni.'
    },
    {
      slug: 'yui',
      name: 'Yui',
      title: 'Gale Dancer',
      heroImage: 'https://media.aikaworld.com/yui-banner.png',
      role: 'Mobility DPS',
      element: 'Szél',
      playstyle:
        'Yui a szívdobbanások közti árnyékba olvad, és csak akkor bukkan elő, hogy pengéit puha artériákba rántsa. A vérpermet festi meg a csatateret, amelyen lehetetlen sebességgel táncol. Akkor nevet a legjobban, amikor a préda azt hiszi, kijutott a sötétből.',
      tips: [
        'A Skystring grapplinggel láncold össze a levegőben töltött időt, így aktiválod a Cyclone perk bónuszát.',
        'A Zephyr Mark felhalmozódik, ha külön célpontokat érintesz – területi fázisokban váltogasd az ellenfeleket.',
        'Ultid előtt mindig használd a Breeze Step-et, hogy a következő három találat garantált crit legyen.'
      ],
      lore:
        'Kazama Yui 24 éves, korábbi égi futár Neo-Kjótó függő pályáin. Gyógyszert csempészett bandák által uralt légi útvonalakon, míg az AIKA legális lehetőséget nem kínált neki, hogy lerázza a szindikátusokat.',
      mentality:
        'Játékos, izgalomfüggő sodródó, aki nem hajlandó földet érni; a lendületben jobban bízik, mint az ígéretekben.',
      likes:
        'Rajong a nyitott tetőkért, a rögtönzött harci koreográfiáért és a kijárási tilalom után is nyitva tartó tésztázókért.',
      dislikes:
        'Nem bírja a belegabalyodó hevedereket, a liftekre várakozást és azokat, akik lenézik az utcai klánokat.',
      quote: 'Kapj el, ha tudsz – a szél már két lépéssel előttünk jár.'
    },
    {
      slug: 'hina',
      name: 'Hina',
      title: 'Edge Serenade',
      heroImage: 'https://media.aikaworld.com/hina-banner.png',
      role: 'Assassin Burst',
      element: 'Penge',
      playstyle:
        'Hina szent mosollyal törli tisztára a pengét, közben áldásokat súg, amelyek fenyegetéssé savanyodnak. Minden vágást egy cinikus megjegyzéssel zár a bűnökről, amelyeket állítólag rendbe tesz. Nála a kegyelem is csak egy hang a kísérteties himnuszban.',
      tips: [
        'A Shadow Veil után az első találat garantáltan megkettőződik – ezt a boss sebezhető ablakaiban használd ki.',
        'Az Echo Slash stackjeit akkor veszíti el, ha találatot kapsz, ezért a dash iframe-jeivel játssz agresszívan.',
        'A finisher animációja cancellálható a Serenade Waltz dash-sel, így gyorsabban léphetsz ki a veszélyes zónákból.'
      ],
      lore:
        'Kisaragi Hina 27 éves, korábbi koncerthegedűs, aki titokban orgyilkosként dolgozott a koncertjeit szponzoráló plutokratáknak. Miután megpróbálták elhallgattatni, az AIKA-hoz szökött a bűntetteiket feltáró jegyzékével.',
      mentality:
        'Bársonyos kesztyűs szadista, aki dallamként ízlelgeti a félelmet, mégis megszállottan ragaszkodik a tökéletes kivitelezéshez.',
      likes:
        'Élvezi a remegő közönséget, a borotvaéles koreográfiát és a ritka, sötét klasszikus bakeliteket.',
      dislikes:
        'Gyűlöli a slampos kivégzéseket, a cuesorán fecsegő stage manager-eket és a vakító kórházi fényeket.',
      quote: 'Táncolunk? Ígérem, az utolsó hang sokáig visszhangzik majd.'
    },
    {
      slug: 'miyu',
      name: 'Miyu',
      title: 'Luminous Aegis',
      heroImage: 'https://media.aikaworld.com/miyu-banner.png',
      role: 'Gyógyító pajzsfókusz',
      element: 'Fény',
      playstyle:
        'Miyu úgy dorombol, mint egy anyai dajka, miközben fénylő indái páncélon fúrják át magukat és széttépik az ellent. Megköszöni a testüknek, hogy táplálják a kertet, miközben a fény kihuny a szemükből. Gyengéd ragyogása alatt egyetlen hulla sem vész kárba.',
      tips: [
        'A Radiant Ward pajzsok stackelődnek – cseréld rotáció szerint a party tagok között, hogy mindenkinek maradjon.',
        'A Solaris Pulse heal akkor a legerősebb, ha 3 fénygömb aktív – készülj fel előre a nagy sebzés hullámokra.',
        'A Sanctuary Field mozdíthatatlan, ezért a csapat előre jelzett pozíciójához állítsd be, mielőtt a mechanika kezdődik.'
      ],
      lore:
        'Tanabe Miyu 30 éves, korábbi orbitális védelmi taktikus, aki az első Rezonancia-háború alatt koordinálta Aika City evakuálását. Ma az AIKA terepcsapatait vezeti, a harctéri triázst diplomáciai egyeztetésekkel egyensúlyozva.',
      mentality:
        'Sztoikus védelmező, akinek türelme ostromokat él túl; zokszó nélkül cipeli mások terheit.',
      likes:
        'Kedveli a precízen időzített reggeli drilleket, a zöldfülűek ellátása közben mesélt haditörténeteket és a fényesre polírozott felszerelést.',
      dislikes:
        'Elutasítja a segítséget halogató politikusokat, a meggondolatlan hősködést és azokat a szobákat, ahová nem jut be természetes fény.',
      quote: 'Állj mögém. Tartom a vonalat, amíg a világ újra emlékezni fog ránk.'
    }
  ]
};

export function getCharacters(locale: Locale): Character[] {
  return charactersByLocale[locale];
}

export function getCharacter(locale: Locale, slug: string): Character | undefined {
  return charactersByLocale[locale].find(character => character.slug === slug);
}

export const characterSlugs = charactersByLocale.en.map(character => character.slug);
