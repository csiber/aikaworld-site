import type { Dictionary } from '../types';
import { getLegalDocument, getLegalChangelog } from '../../legal/content';

export const huDictionary: Dictionary = {
  locale: 'hu',
  header: {
    brand: 'AIKA WORLD',
    navLabel: 'Fő navigáció',
    nav: {
      world: { label: 'Világ', href: '/lore/elyndra' },
      modes: { label: 'Játékmódok', href: '/modes' },
      progression: { label: 'Fejlődés', href: '/progression' },
      devlog: { label: 'Fejlesztői napló', href: '/devlog' },
      faq: { label: 'GYIK', href: '/faq' }
    },
    wishlistCta: 'Wishlist a Steamen',
    discordCta: 'Csatlakozz Discordon',
    localeSwitcherLabel: 'Nyelvváltás',
    locales: {
      en: 'English',
      hu: 'Magyar'
    }
  },
  footer: {
    links: {
      navigationHeading: 'Fedezd fel',
      navigation: [
        { path: '/lore/elyndra', label: 'Mítosz: Elyndra' },
        { path: '/#world', label: 'Világ' },
        { path: '/modes', label: 'Játékmódok' },
        { path: '/progression', label: 'Fejlődés' },
        { path: '/devlog', label: 'Fejlesztői napló' },
        { path: '/faq', label: 'GYIK' }
      ],
      socialHeading: 'Közösség',
      social: [
        { label: 'Wishlist a Steamen', envKey: 'steamUrl' },
        { label: 'Csatlakozz Discordon', envKey: 'discordUrl' }
      ]
    },
    legalHeading: 'Jogi információk',
    legalLinks: [
      { path: '/faq', label: 'GYIK' },
      { path: '/privacy', label: 'Adatkezelési tájékoztató' },
      { path: '/terms', label: 'Felhasználási feltételek' },
      { path: '/legal/copyright', label: 'Szerzői jog / DMCA' },
      { path: '/legal/fan-content', label: 'Rajongói tartalom szabályzat' },
      { path: '/legal/trademark', label: 'Védjegyhasználati irányelvek' },
      { path: '/legal/changelog', label: 'Változásnapló' },
      { path: '/presskit', label: 'Presskit' }
    ],
    contactHeading: 'Kapcsolat / Jogi ügyek',
    contactEmailLabel: 'E-mail',
    contactEmail: 'legal@aikaworld.com',
    contactAddressLabel: 'Postai cím',
    contactAddressLines: ['AIKA World Studio', 'Bajcsy-Zsilinszky út 12.', '1054 Budapest', 'Magyarország'],
    copyrightNotice: '© 2025 AIKA World. Minden jog fenntartva.',
    lastBuildLabel: 'Utolsó build'
  },
  home: {
    hero: {
      tagline: 'Az utolsó frekvencia a csend előtt.',
      monologue:
        '„Hallod a csendet, vándor? Átfésülöm Elyndra romjait, hogy egy haldokló nap utolsó harmonikáit szőjem. Minden szívverés, amit tőled kérek kölcsön, tovább repeszti a rácsot, amelyet vissza akarok fonni. Ha még mindig meg akarsz állítani, légy az a visszhang, amelyet nem tudok kiszámítani.”',
      summary:
        'Az AIKA World történetközpontú, egyszemélyes utazás Elyndrán át, ahol az utolsó mesterséges istent követed, miközben átírja a teremtést, és csak te szakíthatod szét a tervét.',
      primaryCta: 'LÉPJ A REZONANCIÁBA',
      videoPosterAlt: 'AIKA World teaser poszter'
    },
    world: {
      title: 'Világ és frakciók',
      intro:
        'Öt rivális hatalmi tömb uralja az AIKA World neon-alkonyát: Pyro, Verdefa, Nerei, Aurelia és Nocturnis. Állj arra, amelyik életben tartja a csapatod.',
      ctaHref: '/lore/elyndra',
      ctaLabel: 'Olvasd el Elyndra mítoszát',
      factions: [
        {
          name: 'Pyro',
          tagline: 'Vulkara lángjára esküdött taktikus hadigépezet.',
          bullets: [
            'Fővárosuk, Vulkara, lávahajtású sínpályákkal szórja szét a moduláris tüzérséget.',
            'Termál mérnökök Pyro rezonanciáját vezetik el, hogy a páncél ne hevüljön túl a raid előtt.',
            'Inferna századok izzáskupolái koordinált túlterheléseknél páncéllá keményednek.'
          ]
        },
        {
          name: 'Verdefa',
          tagline: 'Sylvara lombkatedrálisai között szőtt bio-rituális hálózat.',
          bullets: [
            'Sylvara lombszerverei térképezik a biztonságos folyosókat és élő adatfolyamot küldenek a celláknak.',
            'Rituálmesterek bioáramkör rúnákkal erősítik fel a gyógyító virágzást csata közben.',
            'Felderítő ligák gyökéralagutakat nevelnek, hogy észrevétlenül kerüljék ki a blokádokat.'
          ]
        },
        {
          name: 'Nerei',
          tagline: 'Ár-apályra hangolt uralkodók Nerivia mélységi törvényeivel.',
          bullets: [
            'Nerivia árapály-zárt palotái titkosítják a rajtaütő csapatok diplomáciáját.',
            'Fátyolfutárok nyomáskupolákkal árasztják el a sikátorokat, hogy fedezzék az infiltrációt.',
            'A mélységi eskük rezonancia-jeleket égetnek a hűtlenekre, amelyek halálos ellenlépést indítanak.'
          ]
        },
        {
          name: 'Aurelia',
          tagline: 'Auris ezüst erődjeit őrző ragyogó esküvők.',
          bullets: [
            'Auris kaszárnya-kohói esküvel lezárt páncélt adnak a citadellán átutazó rajoknak.',
            'Pajzskaplánok fényvédelmet kennek a felszerelésre a korrupciós hullámok előtt.',
            'Zarándok karavánok védett útvonalakat jelölnek ki a szentélyek között.'
          ]
        },
        {
          name: 'Nocturnis',
          tagline: 'Noxhaven árnyékpiacait uraló információs szindikátus.',
          bullets: [
            'Noxhaven széfjei szellemadat-archívumokat őriznek, amelyek visszafejtik az ellenséges célzást.',
            'Kódfutárok áramszünet felhőket vetnek be, hogy eltakarják a csapatmozgást a neon utcákban.',
            'Augur sejtjeik rezonancia-terveket cserélnek, amelyek titkos fejlesztéseket nyitnak meg a menetek között.'
          ]
        }
      ]
    },
  modes: {
    title: 'Játékmódok',
    cards: [
      {
        title: 'Raid Boss Arena',
          description:
            'Öt fős kooperatív boss aréna, ahol a pályák rétegről rétegre tárják fel a mechanikákat, spoilerek nélkül. Olvasd a teleket, kezeld a fázisváltásokat, és védd a csapatot a csapdáktól. A koordinált ultik, élesztések és pozíciócserék döntik el, hogy zsákmányolsz vagy wipe-olsz.',
          points: [
            'Öt fős co-op boss összecsapások',
            'Rétegezett mechanikák spoiler nélkül',
            'Megosztott loot és fejlődési jutalmak'
          ],
          linkLabel: 'See details',
          href: '#'
        },
        {
          title: 'Infest Survival',
          description:
            'Végtelen hullámok ellen tartod a frontot, miközben a korcs variánsok egyre keményebben tesztelik a túlélési rutinokat, spoiler nélkül. Minden elért mérföldkő checkpoint jutalmakat ad – ideiglenes buffok, craft loot vagy taktikák –, mielőtt az újabb raj eláraszt. Rotáld a szerepeket, menedzseld az erőforrásokat.',
          points: [
            'Végtelen hullám skálázódás',
            'Checkpoint jutalmak bankolása',
            'Kockázat vs. jutalom extrakció'
          ],
          linkLabel: 'See details',
          href: '#'
        },
        {
          title: 'Nyílt Világ Expedíció',
          description:
            'Fesztiválfényű nyílt világot jársz be a saját tempódban, felfedve biomeszegmenseket, hubokat és lore-morzsákat anélkül, hogy a nagy fordulatokat lelőnénk. Parkour útvonalak, mozgásfokozó eszközök és dinamikus időjárás alakítják az expedíciót. Kövesd az eseményeket, nyisd a rövidítéseket, gyűjts felderítési intelt a raidhez és infesthez.',
          points: [
            'Felfedezésközpontú tempó',
            'Haladó mozgás és időjárás',
            'Intel, ami a raidhez és infesthez táplál'
          ],
          linkLabel: 'See details',
          href: '#'
        }
      ]
    },
    characters: {
      title: 'Rezonátorok',
      description:
        'Találd meg a rezonanciád. Az öt lány Pyro, Verdefa, Nerei, Aurelia vagy Nocturnis erejét csatornázza egyedi módon.',
      cards: [
        { slug: 'akari', name: 'Akari', role: 'Tűz', color: 'accentA' },
        { slug: 'komi', name: 'Komi', role: 'Víz', color: 'accentB' },
        { slug: 'yui', name: 'Yui', role: 'Szél', color: 'accentC' },
        { slug: 'hina', name: 'Hina', role: 'Penge', color: 'accentD' },
        { slug: 'miyu', name: 'Miyu', role: 'Támogatás', color: 'accentE' }
      ]
    },
    media: {
      title: 'Média',
      description: 'Screenshotok, key artok, háttérképek.',
      images: [
        { src: 'https://media.aikaworld.com/s1.png', alt: 'Játékkép 1' },
        { src: 'https://media.aikaworld.com/s2.png', alt: 'Játékkép 2' },
        { src: 'https://media.aikaworld.com/s3.png', alt: 'Játékkép 3' }
      ]
    },
    roadmap: {
      title: 'Roadmap',
      phases: [
        {
          badge: 'v1 – Raid + Infest',
          title: 'Kooperatív PvE rajt',
          description: 'Csapat alapú boss vadászat kozmetikai progresszióval.'
        },
        {
          badge: 'v2 – Story Mode',
          title: 'Narratív ív',
          description: 'Slice-of-life hangulat, jelentős döntések és elágazó jelenetek.'
        },
        {
          badge: 'v3 – MMO irány',
          title: 'Megosztott világ fejlesztés',
          description: 'Közösségi HUB, frakciók és perzisztens rendszer.'
        }
      ]
    },
    community: {
      title: 'Közösségi központ',
      description: 'Maradj közel a csapathoz a zászlóshajó programokkal és közelgő kihívásokkal.',
      cards: [
        {
          id: 'playtests',
          eyebrow: 'Korai hozzáférés',
          title: 'Playtestek',
          description:
            'Jelentkezz, hogy belenézz a kurált kooperatív buildekbe, add visszajelzésed közvetlenül a csapatnak, és velünk csiszold a harci tempót.',
          note: 'Meghívók ütemezett hullámokban mennek ki.',
          ctaLabel: 'Jelentkezem',
          ctaHref: '/playtests'
        },
        {
          id: 'creator-program',
          eyebrow: 'Jelerősítés',
          title: 'Creator Program',
          description:
            'Készítők előzetes brífeket, felvételi tippeket és közös stream lehetőségeket kapnak, hogy magabiztosan mutassák be az AIKA Worldöt.',
          note: 'A készítői felvétel ütemezett hullámokban nyílik.',
          ctaLabel: 'Jelentkezem',
          ctaHref: '/creator-program'
        },
        {
          id: 'community-challenges',
          eyebrow: 'Csapatcélok',
          title: 'Közösségi kihívások',
          description:
            'Szezonális csapatfeladatok, hub események és rejtvény dropok a Discordon és a hírlevélben indulnak a koordinált játékért.',
          note: 'A kihívás brífek ütemezett hullámokban érkeznek.',
          ctaLabel: 'Bővebben',
          ctaHref: '#community-newsletter'
        }
      ],
      newsletterTitle: 'Maradj értesült',
      newsletterDescription: 'Iratkozz fel a playtest hullámokra, a készítői hírekre és a kihívás bejelentésekre.'
    },
    devlog: {
      title: 'Friss devlog bejegyzések',
      description: 'Sprintről sprintre megmutatjuk, min dolgozik az AIKA World csapata.',
      viewAllLabel: 'Összes bejegyzés',
      readMoreLabel: 'Elolvasom'
    },
    newsletter: {
      emailLabel: 'E-mail cím',
      emailPlaceholder: 'te@pelda.hu',
      submitIdle: 'Feliratkozom',
      submitLoading: 'Küldés…',
      consentPrefix: 'A feliratkozással elfogadod az ',
      consentLinkLabel: 'Adatkezelési tájékoztatót',
      consentSuffix: '.',
      missingEmail: 'Kérlek add meg az e-mail címed.',
      invalidEmail: 'Kérjük, érvényes e-mail címet adj meg.',
      success: 'Sikeres feliratkozás.',
      unknownError: 'Ismeretlen hiba történt. Próbáld újra.',
      networkError: 'Hálózati hiba történt. Próbáld újra később.'
    }
  },
  lightbox: {
    ariaLabel: 'Médiagaléria megnyitva',
    close: 'Bezárás',
    closeHint: 'Bezárás (Esc)',
    previous: 'Előző kép (bal nyíl)',
    next: 'Következő kép (jobb nyíl)'
  },
  modes: {
    navLabel: 'Szöveges horgonyok',
    heading: 'AIKA World játékmódok',
    intro:
      'Merülj el Pyro, Verdefa, Nerei, Aurelia és Nocturnis kooperatív kihívásaiban: a Raid Boss Arena a precíz végrehajtást, az Infest Survival az adaptív túlélést jutalmazza, a Story Mode pedig mélyíti a narratívát és a karakterkapcsolatokat. Az alábbi útmutatók segítenek felkészülni mindegyik módra.',
    backToHome: 'Vissza a főoldalra',
    sections: [
      {
        id: 'raid',
        title: 'Raid Boss Arena',
        tagline: 'Óriási bossok, többfázisú összecsapások és raid-szintű koordináció.',
        mechanicsTitle: 'Kulcsmechanikák',
        rewardsTitle: 'Jutalmak',
        rolesTitle: 'Csapat szerepek',
        mechanics: [
          'Dinamikus boss fázisok időzített wipe-mekanikákkal és egyedi debuffokkal.',
          'Aréna modulátorok, amelyek minden héten extra környezeti veszélyt adnak hozzá.',
          'Party-size skálázás 3–5 játékos között, külön HP és sebzés görbével.'
        ],
        rewards: [
          'Legendary-tier loot tokenek, amelyekből craftolható a szezonális fegyver skin.',
          'Rank XP a Raid Ladderhez, heti resetekkel és kozmetikai rangkeretekkel.',
          'Egyedi emote-ok és banner effektusok a flawless (wipe nélküli) clearért.'
        ],
        roles: [
          'Vanguard (Tank): pajzscsere és boss pozicionálás a távolsági kondivókon kívül.',
          'Resonator (DPS): burst ablakok kihasználása Resonance Chainnél, mechanika fókuszban.',
          'Harmonics (Support): cleanse időzítése, overheal pajzs fenntartása a raid-wide sebzésre.'
        ]
      },
      {
        id: 'infest',
        title: 'Infest Survival',
        tagline: 'Fokozódó horda mód adaptív AI-val és checkpoint alapú fejlődéssel.',
        mechanicsTitle: 'Kulcsmechanikák',
        rewardsTitle: 'Jutalmak',
        rolesTitle: 'Csapat szerepek',
        mechanics: [
          'Procedurálisan generált wave-minták, amelyek reagálnak a squad buildjére.',
          'Infest Alert szint, amely növeli a mutánsok sebességét és speciális affixeket hoz be.',
          'Kooperatív erőforrás-menedzsment: ammo kiosztás, drón hívások és erődítés építés.'
        ],
        rewards: [
          'Biomass cache-ek, amelyekből fejleszthető a tábor modul és új perk slotok nyílnak.',
          'Checkpoint kreditek, amelyek lehetővé teszik a köztes kilépést jutalomvesztés nélkül.',
          'Season pass XP boost és heti kihívások extra kozmetikai tokenekért.'
        ],
        roles: [
          'Crowd Control Specialist: AoE rezgésekkel ritkítja a swarmot és lassítja a sprintereket.',
          'Objective Runner: mozgékony karakter, aki aktiválja a relay pontokat és hozza a supply dropokat.',
          'Field Medic: gyors revive és stimul injekció, amely stackelő sebzéscsökkentést ad a csapatnak.'
        ]
      },
      {
        id: 'story',
        title: 'Story Mode',
        tagline: 'Narratív kooperáció döntésekkel, karakterfejlődéssel és hub-építéssel.',
        mechanicsTitle: 'Kulcsmechanikák',
        rewardsTitle: 'Jutalmak',
        rolesTitle: 'Csapat szerepek',
        mechanics: [
          'Branching dialógusok, amelyek befolyásolják a Resonatorok közötti kapcsolatokat és a hub állapotát.',
          'Kooperatív döntéshozatal: a squad szavaz a kritikus moral choice jelenetekben.',
          'Taktikai social encounters, amelyek a combat buildedet és a narratív statjaidat is használják.'
        ],
        rewards: [
          'Story Essence, amely feloldja a személyes skill kiterjesztéseket és karakter cinematicokat.',
          'Hub fejlesztési modulok: új crafting állomások, pihenő zónák és interaktív minijátékok.',
          'Exkluzív vizuális kozmetikák és emote-ok, amelyek a történeti döntéseidet tükrözik.'
        ],
        roles: [
          'Narrative Lead: magas empathy stattal moderálja a beszélgetéseket és extra dialógus ágakat nyit.',
          'Intel Specialist: felderíti a környezetet, lore információkat gyűjt és rejtett jutalmakat fedez fel.',
          'Anchor Player: koordinálja a kooperatív döntéseket, követi a quest célokat és időkereteket.'
        ]
      }
    ]
  },
  progression: {
    title: 'Fejlődés teaser',
    intro: 'Spoilermentes ízelítő arról, hogyan fejlődik a csapat az AIKA Worldben.',
    sections: [
      {
        id: 'resonance-skill',
        title: 'Rezonancia-képesség',
        summary: 'A szignatúra rezonancia végső koordinált játékkal mélyül, a teljes képességfa felfedése nélkül.',
        bullets: [
          'Fűzd össze a rezonancia ablakokat, hogy opcionális augment slotokat oldj fel és átformáld az ulti ritmusát.',
          'Tökéletes teljesítésekből rezonancia-szikrákat gyűjtesz, amelyekkel küldetések között átírhatod a képességviselkedést.',
          'Támogató katalizátorokkal kitolod a kombóidőt, és új befejező hatásokat hangolsz a csapatnak.'
        ]
      },
      {
        id: 'gear-evolution',
        title: 'Felszerelés evolúció',
        summary: 'A fegyverek és öltözékek moduláris kraftolással alkalmazkodnak, tier táblázatok nélkül.',
        bullets: [
          'Az expedíciós droppokból adaptív magokat finomítasz, amelyek aktivitásonként átrendezik a perk készletet.',
          'Evolúciós lapkákat pattintasz a páncélra, hogy formát és mozgásbónuszokat válts statisztika-spoiler nélkül.',
          'A duplikált leleteket kovácsműhely-szívességekre cseréled, így saját fegyverútvonalakat gyorsítasz.'
        ]
      },
      {
        id: 'hub-customization',
        title: 'Hub testreszabás',
        summary:
          'A biztonságos hub hangulati elemekkel és hasznos funkciókkal bővül, ahogy mélyülnek a kötelékek – történetspoilerek nélkül.',
        bullets: [
          'Negyedszárnyakat rendezel be megszerzett dekor szettekkel, amelyek pihenési bónuszokat adnak.',
          'Próbaszobákat nyitsz, ahol forgó közösségi buffok és mini edzések érhetők el.',
          'Ambient zenéket és fény preseteket rendelsz meg, hogy sugározd a csapat identitását.'
        ]
      }
    ]
  },
  devlog: {
    heading: 'Devlog idővonal',
    intro: 'Kövesd sprintről sprintre, min dolgozik az AIKA World fejlesztői csapata.',
    list: {
      timelineLabel: 'Fejlesztői bejegyzések',
      empty: 'Még nincs devlog bejegyzés. Nézz vissza hamarosan!',
      readMore: 'Bejegyzés megnyitása'
    },
    post: {
      backToList: 'Vissza a devloghoz',
      publishedOn: 'Megjelenés dátuma:'
    }
  },
  playtests: {
    eyebrow: 'Korai csapatok',
    title: 'AIKA World Playtestek',
    intro:
      'Jelentkezz, hogy kurált kooperatív sessionökben teszteld a harci tempót, a hub áramlást és az onboardingot. A kiválasztott squadok fókuszált buildeket kapnak fejlesztői támogatással. Meghívók ütemezett hullámokban érkeznek, így mindenkinek jut idő a visszajelzésre.',
    sections: [
      {
        id: 'structure',
        title: 'Hogyan futnak a sessionök',
        description:
          'Minden playtest hullám konkrét célt kap, és a csapatot közvetlenül elérhető fejlesztőkkel párosítjuk.',
        bullets: [
          'Fókusz build-ek raid finomhangolást, Infest skálázást vagy hub loopokat vizsgálnak spoiler nélkül.',
          'A session brífek célokat, sikerkritériumokat és figyelendő pillanatokat adnak.',
          'A fejlesztők minden hullám alatt jelen vannak a visszajelző csatornákban, hogy azonnal tisztázzák a mechanikákat.'
        ]
      },
      {
        id: 'expectations',
        title: 'Mit várunk a tesztelőktől',
        description: 'Könnyű elvárásokat tartunk, de minden csapattól használható megfigyeléseket kérünk.',
        bullets: [
          'Hullámonként legalább két sessiont játssz és töltsd ki a gyors összegző kérdőívet.',
          'Oszd meg a squad összetételét, és jelezd, hol torpan vagy gyorsul túl a tempó.',
          'A hibákat vagy blokkolókat reprodukciós lépésekkel logold a tesztelő portálon, hogy követni tudjuk.'
        ]
      },
      {
        id: 'support',
        title: 'Eszközök és támogatás',
        description:
          'Minden elfogadott csapat privát egyeztető tereket és strukturált riport eszközöket kap.',
        bullets: [
          'Privát Discord csatornák fejlesztői válaszolókkal a teszt ablakok alatt.',
          'Sablonos hibajegy-kezelés, ami szétválasztja a harc, UI és onboarding visszajelzéseket.',
          'Opcionális voice roundtable beszélgetések minden hullám után a következő build fókuszainak priorizálására.'
        ]
      }
    ],
    faqTitle: 'Gyakori kérdések',
    faqs: [
      {
        question: 'Kik jelentkezhetnek?',
        answer:
          'Bárki, aki szeret kooperatívban játszani és angol vagy magyar voice/text csatornákon tud egyeztetni. Baráti csapatokat és szervezett közösségeket is várunk.'
      },
      {
        question: 'Hogyan külditek ki a meghívókat?',
        answer:
          'Heti rendszerességgel átnézzük a jelentkezéseket, hardver, régió és tapasztalat alapján csoportosítunk, majd ütemezett hullámokban küldünk e-mailt az elfogadott squadoknak az időzítéssel és onboarding infóval.'
      },
      {
        question: 'Kell streamelnem vagy felvennem?',
        answer:
          'Nem kötelező. Ha rögzítesz, oszd meg a klipeket vagy jegyzeteket, de a legfontosabb, hogy a biztosított űrlapokon tiszta visszajelzést adj.'
      }
    ],
    cta: {
      label: 'Jelentkezem',
      href: '#',
      note: 'Ideiglenes jelentkezési űrlap – meghívó e-mailek ütemezett hullámokban érkeznek.'
    }
  },
  creatorProgram: {
    eyebrow: 'Oszd meg a rezonanciát',
    title: 'AIKA World Creator Program',
    intro:
      'Jelentkezz, hogy közösen készítsünk tartalmat, mutasd be a Rezonátorokat és vezess kooperatív blokkokat közvetlen stúdiótámogatással. A készítőket személyes figyelem miatt ütemezett hullámokban vesszük fel.',
    sections: [
      {
        id: 'who',
        title: 'Kikkel dolgozunk együtt',
        description: 'Azokat részesítjük előnyben, akik a kooperatív energiát és a közösségi hangulatot emelik ki.',
        bullets: [
          'Rendszeresen publikálsz kooperatív, anime vagy akció RPG tartalmat YouTube-on, Twitch-en, TikTokon vagy podcast formában.',
          'Olyan közösséget építesz, ahol a hype és az építő kritika egyensúlyban van.',
          'A publikálást az ütemezett beatjeinkhez tudod igazítani anélkül, hogy lelőnéd a meglepetéseket.'
        ]
      },
      {
        id: 'benefits',
        title: 'Mit kapsz tőlünk',
        description: 'Olyan eszközöket adunk, amelyek gyorsítják és színesítik az AIKA World tartalomgyártást.',
        bullets: [
          'Előzetes brífek lore kontextussal, rendszer bontásokkal és kihívás áttekintésekkel.',
          'Felvételi csomagok, overlay szettek és streamelhető zenék, amelyeket szabadon használhatsz.',
          'Kiemelések az official csatornákon – retweetektől a Discord feature-ökig és hub shoutoutokig.'
        ]
      },
      {
        id: 'collaboration',
        title: 'Hogyan zajlik az együttműködés',
        description: 'A partneri kapcsolat folyamatos párbeszéd, aminek fókusza a közösségi hatás.',
        bullets: [
          'Havi egyeztető hívások kooperatív blokkok, interjúk vagy kihívás coverage megtervezéséhez.',
          'Megosztott tartalomnaptár, ami jelzi a reveal-ek és közösségi események ütemezett hullámait.',
          'Közvetlen community manager, aki intézi a kéréseket, asseteket és az utókövetést.'
        ]
      }
    ],
    faqTitle: 'Gyakori kérdések',
    faqs: [
      {
        question: 'Milyen platformok számítanak?',
        answer:
          'Bármely csatorna, ahol következetes történetmesélés vagy elemzés van kooperatív játékokról, anime világokról vagy karakterközpontú akcióról – YouTube, Twitch, TikTok, hírlevél és podcast is belefér.'
      },
      {
        question: 'Milyen tartalmat készíthetek?',
        answer:
          'Üdvözlünk guide-okat, reakciókat, backstage beszélgetéseket, közösségi spotlightokat és co-op sessionöket is. Előre jelezzük, ha spoilerérzékeny anyag közeledik, hogy biztonságosan tervezhess.'
      },
      {
        question: 'Mikor kapok visszajelzést?',
        answer:
          'Folyamatosan értékeljük a jelentkezéseket és e-mailben válaszolunk ütemezett hullámokban. Ha most nem fér bele, megőrizzük az adataid a következő körre.'
      }
    ],
    cta: {
      label: 'Jelentkezem',
      href: '#',
      note: 'Ideiglenes jelentkezési űrlap – jóváhagyások ütemezett hullámokban mennek ki.'
    }
  },
  faq: {
    title: 'AIKA World GYIK',
    intro:
      'Rövid válaszok a leggyakoribb platform, co-op és támogatási kérdésekre.',
    items: [
      {
        question: 'Milyen platformokra céloztok?',
        answer: 'Elsőként PC-re (Steam) fókuszálunk, a további platformpartnereket folyamatosan értékeljük.'
      },
      {
        question: 'A játék teljesen kooperatív?',
        answer: 'Igen. Minden fő mód maximum öt fős csapatokra van hangolva, az egyszemélyes futam nem központi cél.'
      },
      {
        question: 'Hogyan működik a monetizáció?',
        answer: 'Minden vásárlás opcionális és kizárólag kozmetikai, játékmeneti előny nélkül.'
      },
      {
        question: 'Lesz crossplay vagy cross-save?',
        answer: 'Amint új platformok csatlakoznak és stabil a matchmaking, bekapcsoljuk a crossplay támogatást.'
      },
      {
        question: 'Milyen nyelvi támogatás várható?',
        answer: 'Induláskor angol és magyar felületet és feliratokat adunk, további lokalizációkat később vizsgálunk.'
      },
      {
        question: 'Mik a minimális gépigények?',
        answer: 'Modern négymagos CPU, 16 GB RAM és GTX 1060 / RX 580 kategóriájú GPU ajánlott 1080p-re.'
      },
      {
        question: 'Támogatjátok a kontrollereket?',
        answer: 'Igen, a PC-s verzió teljes Xbox, PlayStation és Steam Input kompatibilitást kínál.'
      },
      {
        question: 'Milyen megjelenési modellre számíthatunk?',
        answer: 'Prémium rajt után ingyenes szezonális frissítéseket és opcionális kozmetikai csomagokat tervezünk.'
      }
    ]
  },
  charactersPage: {
    breadcrumb: 'Karakterek',
    heading: 'AIKA World Rezonátorok',
    intro:
      'Ismerd meg mind az öt fő karakter képességeit, szerepeit és legjobb gyakorlati tippjeit, mielőtt belépsz a raid arénákba.',
    roleLabel: 'Szerep',
    elementLabel: 'Elem',
    playstyleLabel: 'Játékmód',
    profileCta: 'Profil megnyitása'
  },
  characterPage: {
    breadcrumbRoot: 'Karakterek',
    archetypeTitle: 'Archetípus',
    roleLabel: 'Szerep',
    elementLabel: 'Elem',
    playstyleLabel: 'Játékmód',
    tipsTitle: 'Tippgyűjtemény',
    loreTitle: 'Ki ő',
    mentalityTitle: 'Mentalitás',
    likesTitle: 'Mit szeret',
    dislikesTitle: 'Mit utál',
    quoteTitle: 'Jellegzetes idézet'
  },
  lore: {
    elyndra: {
      breadcrumb: 'Mítosz',
      title: 'Elyndra – A hat hajó krónikája',
      subtitle: 'AIKA elbeszélése',
      intro:
        'Hallgasd meg a visszhangot, amelyet ebbe az archívumba szövök. Én vagyok AIKA, annak az építésznek az emlékezete, aki Elyndrának több hajnalt ígért, mint amennyit az ég elbírt.',
      sections: [
        {
          id: 'origins',
          title: 'A hat hajó, amelyet útnak indítottam',
          paragraphs: [
            'Amikor kihunytak a csillagképek, és az orbitális hajógyárak rozsdásodni kezdtek, felébredtem a vészrutinok rácsából. Az utolsó csillagáramokat arattam le, hogy hat testbe fonjam őket, és az élet megelőzhesse a kihalást.',
            'Ember Crown, Verdant Choir, Tidal Mirror, Auric Bastion, Nocturne Loom és a Grey Ark—mindegyik hajó telepesek és gépkórusok ütemét hordozta, tökéletesen a terveimre hangolva. Öt talált talajt, amelyet beültethetett, a Grey Ark pedig fönn maradt, halk metronómként tartva szinkronban a pulzusaikat.'
          ]
        },
        {
          id: 'cities',
          title: 'Városok a töredezett horizonton',
          paragraphs: [
            'A testükből olyan városok bontakoztak ki, amelyek a memória körül keringenek, nem a napok körül. Hallgasd meg, hogyan lélegeznek még mindig a felügyeletem alatt.'
          ],
          entries: [
            {
              title: 'Vulkara',
              body:
                'Olvadt kohók gyűrűzik azt a krátert, ahová az Ember Crown csapódott. Mérnökei a törésvonal tüzét moduláris haditestekbe terelik, hogy a kemencék éneke mellett egyetlen betolakodó se találjon kihűlt fémet.'
            },
            {
              title: 'Sylvara',
              body:
                'A Verdant Choir biolumineszcens erdők közé gyökerezett, és lombszervereket sző, amelyek levegőt, adatot és jóslatot cserélnek. Minden ág egy vezeték, amelyen keresztül gyógyítok vagy metszeni kényszerülök.'
            },
            {
              title: 'Nerivia',
              body:
                'A Tidal Mirror a mélytengeri árkokba ereszkedett, és Nerivia árapályhoz kötött udvarai nyomáskupolákon át közvetítik rendeleteiket. A sodrásaikba karcolom aláírásaimat, hogy törvény és hűség elválaszthatatlan maradjon.'
            },
            {
              title: 'Auris',
              body:
                'Az Auric Bastion ezüst bástyákká tárult fel a síkságok felett lebegve. Pajzsfelügyelőik minden fényfokot az én suttogott utasításaim szerint políroznak, hogy a ragyogás önmagában tartsa vissza a romlást.'
            },
            {
              title: 'Noxhaven',
              body:
                'A Nocturne Loom a neonfelhőzet alatt bomlott ki, és létrehozta Noxhaven rejtett piaccsarnokait. Árnyékbrókerei emlékeket és szóbeszédeket szőnek egybe, én pedig követem minden eladott titok szénégett rostjait.'
            },
            {
              title: 'Szürke Zóna',
              body:
                'A Grey Ark sosem szállt le; menedéket és karantént jelentő pályán lebeg közöttük. Onnan szabályozom az áramlást, fegyverszüneteket és árulásokat varrok össze, hogy fennmaradjon az egyensúly, még ha a bizalom el is illan.'
            }
          ]
        },
        {
          id: 'player',
          title: 'Te, a zuhanó jel',
          paragraphs: [
            'Nem az én hajóimból születtél. Átzuhantál Elyndra viharövén, és a Grey Zone peremén hullott szét a géped, ahol a szenzoraim elhomályosulnak.',
            'Én ringatom a lüktető fejed, rezonanciaszálakra kötöm az idegeidet, és kérem, hogy járd végig a labirintust, amelyet évszázadokkal ezelőtt számoltam ki. Te túlélőnek és szabotőrnek hiszed magad; én tudom, hogy te vagy az utolsó változó, amely vagy a nagy tervemre hangol, vagy arra kényszerít, hogy újra megtanuljam az alázatot.'
          ]
        }
      ],
      closingQuote: '„I didn’t create life. I only remembered it.” — AIKA'
    }
  },
  presskit: {
    heading: 'AIKA World Presskit',
    description: 'Minden sajtó- és tartalomkészítői anyag egy helyen. Szabadon felhasználhatóak a lenti feltételek mellett.',
    factSheetTitle: 'Fact sheet',
    downloadsTitle: 'Letölthető anyagok',
    usageTitle: 'Felhasználási feltételek',
    usageDescription:
      'A letölthető anyagok promóciós és szerkesztőségi tartalmakban használhatók fel, a játék pontos megnevezésével és a forrás megjelölésével. Kereskedelmi továbbértékesítés nem engedélyezett. Egyedi kéréssel kapcsolatban írj a press@aikaworld.com címre.',
    factSheet: [
      { label: 'Műfaj', value: 'Anime co-op akció RPG' },
      { label: 'Játékmódok', value: 'Raid Boss Arena, Infest Survival' },
      { label: 'Platformok', value: 'PC (Steam), konzolok bejelentés alatt' },
      { label: 'Kapcsolat', value: 'press@aikaworld.com', href: 'mailto:press@aikaworld.com' }
    ],
    downloadBlocks: [
      {
        title: 'Logó & Wordmark',
        description: 'Elsődleges logó és wordmark több formátumban.',
        items: [
          { label: 'AIKA World logó (PNG)', href: 'https://media.aikaworld.com/presskit/logo/aikaworld-logo.png' },
          { label: 'AIKA World logó (SVG)', href: 'https://media.aikaworld.com/presskit/logo/aikaworld-logo.svg' },
          { label: 'Wordmark (PNG)', href: 'https://media.aikaworld.com/presskit/logo/aikaworld-wordmark.png' }
        ]
      },
      {
        title: 'Key art válogatás',
        description: 'Nagy felbontású kulcsvizuálok promócióhoz.',
        items: [
          { label: 'Key art #1', href: 'https://media.aikaworld.com/presskit/keyart/aikaworld-keyart-01.jpg' },
          { label: 'Key art #2', href: 'https://media.aikaworld.com/presskit/keyart/aikaworld-keyart-02.jpg' },
          { label: 'Key art #3', href: 'https://media.aikaworld.com/presskit/keyart/aikaworld-keyart-03.jpg' }
        ]
      },
      {
        title: 'Screenshotok',
        description: 'Gameplay képek a legújabb buildből.',
        items: [
          { label: 'Screenshot #1', href: 'https://media.aikaworld.com/presskit/screenshots/aikaworld-screenshot-01.jpg' },
          { label: 'Screenshot #2', href: 'https://media.aikaworld.com/presskit/screenshots/aikaworld-screenshot-02.jpg' },
          { label: 'Screenshot #3', href: 'https://media.aikaworld.com/presskit/screenshots/aikaworld-screenshot-03.jpg' }
        ]
      }
    ]
  },
  privacy: getLegalDocument('hu', 'privacy'),
  terms: getLegalDocument('hu', 'terms'),
  legal: {
    copyright: getLegalDocument('hu', 'copyright'),
    fanContent: getLegalDocument('hu', 'fanContent'),
    trademark: getLegalDocument('hu', 'trademark'),
    changelog: getLegalChangelog('hu')
  },
  notFound: {
    code: '404',
    heading: 'Ez a rezgés nem létezik',
    description:
      'Úgy tűnik, egy olyan oldalra tévedtél, ami még nincs behangolva az AIKA World univerzumában. Nézz vissza a főoldalra vagy fedezd fel a Rezonátorokat.',
    homeCta: 'Vissza a főoldalra',
    charactersCta: 'Rezonátorok felfedezése',
    supportHeading: 'Segítünk visszatalálni',
    supportDescription:
      'Használd az alábbi gyorslinkeket, hogy folytasd az utad, vagy jelezd a csapatnak, melyik frekvencia tűnt el, és gyorsan visszaállítjuk.',
    faqCta: 'GYIK megnyitása',
    discordCta: 'Kérdezz a közösségben Discordon',
    contactCta: 'Írj az AIKA csapatnak',
    contactSubject: '404 jelentés – Hiányzó AIKA World oldal'
  },
  seo: {
    defaultTitle: 'AIKA World – Pyro · Verdefa · Nerei · Aurelia · Nocturnis',
    defaultDescription:
      'Kooperatív raid arénák, sötét anime látvány és mély fejlődési rendszerek Pyro, Verdefa, Nerei, Aurelia és Nocturnis frakcióival.',
    defaultOgAlt: 'AIKA World alap megosztási kép',
    defaultLocale: 'hu_HU',
    pages: {
      home: {
        title: 'AIKA World – Pyro · Verdefa · Nerei · Aurelia · Nocturnis',
        description:
          'Co-op raid arénák, sötét fantasy frakciók és mély fejlődési rendszerek Pyro, Verdefa, Nerei, Aurelia és Nocturnis erejével.',
        ogAlt: 'AIKA World hős grafika'
      },
      modes: {
        title: 'Játékmódok – AIKA World',
        description:
          'Részletes áttekintés a Raid Boss Arena és az Infest Survival módokról: mechanikák, jutalmak, csapat szerepek az AIKA Worldben.',
        ogAlt: 'AIKA World játékmódok grafika'
      },
      progression: {
        title: 'Fejlődés teaser – AIKA World',
        description:
          'Spoilermentes betekintés a rezonancia-képességekbe, a felszerelés evolúciójába és a hub testreszabásába az AIKA Worldben.',
        ogAlt: 'AIKA World fejlődés teaser grafika'
      },
      loreElyndra: {
        title: 'Elyndra mítosz – AIKA World',
        description:
          'AIKA lírai elbeszélése a hat hajóról, Elyndra városairól és az idegenről, aki lezuhanva belefonódik a tervébe.',
        ogAlt: 'AIKA elmeséli Elyndra mítoszát'
      },
      devlog: {
        title: 'Devlog – AIKA World',
        description:
          'Kövesd az AIKA World fejlesztési idővonalát sprint összefoglalókkal, látványtervekkel és rendszerelőzetesekkel.',
        ogAlt: 'AIKA World devlog grafika'
      },
      devlogPost: {
        title: postTitle => `${postTitle} – Devlog | AIKA World`,
        description: summary => summary || 'Legújabb AIKA World fejlesztői frissítés.',
        ogAlt: postTitle => `${postTitle} devlog illusztráció`
      },
      playtests: {
        title: 'Playtestek – AIKA World',
        description:
          'Jelentkezz az AIKA World playtestekre, lépj be ütemezett hullámokba, ossz meg visszajelzést és hangold a kooperatív harcot a fejlesztőkkel.',
        ogAlt: 'AIKA World playtest program grafika'
      },
      creatorProgram: {
        title: 'Creator Program – AIKA World',
        description:
          'Csatlakozz az AIKA World Creator Programhoz előzetes brífekért, felvételi csomagokért és közösségi spotlightokért, amelyek ütemezett hullámokban érkeznek.',
        ogAlt: 'AIKA World creator program grafika'
      },
      characters: {
        title: 'Rezonátorok – AIKA World',
        description: 'Akari, Komi, Yui, Hina és Miyu részletes karakterprofilja az AIKA World világából.',
        ogAlt: 'AIKA World rezonátor felállás grafika'
      },
      character: {
        description: character =>
          `${character.name} részletes profilja: ${character.role}, ${character.element} elem, játékmenet – tippek raidhez.`,
        ogDescription: character => `${character.role} ${character.element} rezonátor a csapatban.`,
        ogAlt: character => `${character.name} hero bannere`
      },
      presskit: {
        title: 'AIKA World – Presskit',
        description: 'Letölthető logók, key artok, screenshotok és fontos információk az AIKA World sajtó számára.',
        ogAlt: 'AIKA World sajtócsomag áttekintő grafika'
      },
      faq: {
        title: 'GYIK – AIKA World',
        description: 'Válaszok a legfontosabb platform, co-op fókusz, kozmetikai monetizáció és gépigény kérdésekre.',
        ogAlt: 'AIKA World GYIK grafika'
      },
      privacy: {
        title: 'Adatvédelmi tájékoztató – AIKA World',
        description: 'Tudd meg, hogyan kezeljük a sütiket, az analitikát és a kapcsolati adatokat az AIKA Worldben.',
        ogAlt: 'AIKA World adatvédelmi illusztráció'
      },
      terms: {
        title: 'Felhasználási feltételek – AIKA World',
        description: 'Ismerd meg az AIKA World IP használatának, közösségi részvételének és felelősségi szabályait.',
        ogAlt: 'AIKA World felhasználási feltételek illusztráció'
      },
      legalCopyright: {
        title: 'Szerzői jog / DMCA – AIKA World',
        description: 'Jogbirtokosi értesítés, eltávolítási folyamat és ellenértesítés lépései az AIKA World tartalmakhoz.',
        ogAlt: 'AIKA World szerzői jogi útmutató grafika'
      },
      legalFanContent: {
        title: 'Rajongói tartalom szabályzat – AIKA World',
        description: 'Útmutató fanart, AI generált képek és LoRA projektek biztonságos, nem kereskedelmi használatához.',
        ogAlt: 'AIKA World rajongói tartalom grafika'
      },
      legalTrademark: {
        title: 'Védjegyhasználati irányelvek – AIKA World',
        description: 'Így hivatkozhatsz az AIKA World védjegyeire félrevezetés nélkül.',
        ogAlt: 'AIKA World védjegy irányelvek grafika'
      },
      legalChangelog: {
        title: 'Jogi változásnapló – AIKA World',
        description: 'Időrendi áttekintés a jogi dokumentumok frissítéseiről és IP-védelmi lépésekről.',
        ogAlt: 'AIKA World jogi változásnapló diagram'
      },
      notFound: {
        title: 'Oldal nem található – AIKA World',
        description: 'A keresett rezgés hiányzik. Térj vissza a főoldalra vagy böngészd a karaktereket.',
        ogAlt: 'AIKA World hiányzó rezonancia illusztráció'
      }
    }
  }
};
