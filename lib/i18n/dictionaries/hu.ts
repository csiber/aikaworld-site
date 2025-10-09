import type { Dictionary } from '../types';
import { getLegalDocument, getLegalChangelog } from '../../legal/content';

export const huDictionary: Dictionary = {
  locale: 'hu',
  header: {
    brand: 'AIKA WORLD',
    navLabel: 'Fő navigáció',
    nav: {
      world: { label: 'Világ', href: '/lore/elyndra' },
      modes: { label: 'Story mód', href: '/modes' },
      progression: { label: 'Fejlődés', href: '/progression' },
      devlog: { label: 'Fejlesztői napló', href: '/dev-journal' },
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
        { path: '/modes', label: 'Story mód' },
        { path: '/progression', label: 'Fejlődés' },
        { path: '/dev-journal', label: 'Fejlesztői napló' },
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
        'Öt rivális hatalmi tömb uralta valaha az AIKA World neon-alkonyát: Pyro, Verdefa, Nerei, Aurelia és Nocturnis. Fedezd fel a maradványokat, amelyek még a por alatt izzanak. Nem fogsz hűséget esküdni; végigjársz mindenen, ami megmaradt belőlük.',
      ctaHref: '/lore/elyndra',
      ctaLabel: 'Olvasd el Elyndra mítoszát',
      factions: [
        {
          name: 'Pyro',
          tagline: 'Vulkara lángja alatt egykor hadigépezetet kovácsoló vulkanikus taktikusok.',
          bullets: [
            'Fővárosuk, Vulkara, lávahajtású sínpályákon szállította a moduláris tüzérséget; az elszenesedett pályák ma is kirajzolják az ostromköröket.',
            'Termál mérnökeik Pyro rezonanciáját vezették el a páncélból a rajtaütések előtt; elgörbült kézikönyveik a kazamatákban porosodnak.',
            'Inferna századaik izzáskupolákat vetettek be, amelyek koordinált túlterheléseknél páncéllá keményedtek; a repedezett lemezek hamuba zárva maradtak.'
          ]
        },
        {
          name: 'Verdefa',
          tagline: 'Bio-rituális hálózat mesterei, akik egykor Sylvara élő áramköreit szőtték.',
          bullets: [
            'Sylvara lombszerverei feltérképezték a biztonságos folyosókat és élő adatfolyamot osztottak meg a cellákkal; halvány pulzusuk még most is pislákol.',
            'Rituálmestereik bioáramkör rúnákat fontak, hogy felerősítsék a gyógyító virágzást a harc közepén; a rúnák ma emlékkertben lankadnak.',
            'Felderítő ligáik gyökéralagutakat neveltek, hogy észrevétlenül kerüljék meg a blokádokat; beomlott üregeik türelmük nyomát hagyják.'
          ]
        },
        {
          name: 'Nerei',
          tagline: 'Ár-apályra hangolt uralkodók, akik egykor Nerivia mélységi törvényeit érvényesítették.',
          bullets: [
            'Nerivia árapály-zárt palotái titkosították a rajtaütő csapatok diplomáciáját; kagylós archívumaik őrzik a kódokat.',
            'Fátyolfutáraik nyomáskupolákkal árasztották el a sikátorokat, hogy elfedjék az infiltrációt; kiszakadt szelepeik még ma is sziszegnek a dokkoknál.',
            'A mélységi eskük rezonancia-jeleket égettek a hűtlenekre, amelyek halálos ellenlépést indítottak; elhalványult hegek maradtak az elhagyott törvényszékeken.'
          ]
        },
        {
          name: 'Aurelia',
          tagline: 'Ragyogó esküvők, akik egykor Auris ezüst erődjeit védték.',
          bullets: [
            'Auris kaszárnya-kohói esküvel lezárt páncélt öntöttek a citadellán átvonuló rajoknak; az elhalványult vértek néma fegyvertárakban lógnak.',
            'Pajzskaplánjaik fényvédelmet kentek a felszerelésre a korrupciós hullámok előtt; megrepedezett ampulláik ereklyetárakban derengenek.',
            'Zarándok karavánjaik védett útvonalakat jelöltek ki az enklávék szentélyei között; az időverte jelzők ma is végigvezetik a híveket a romokon.'
          ]
        },
        {
          name: 'Nocturnis',
          tagline: 'Umbrális információbrókerek, akik egykor Noxhaven árnyékpiacait uralták.',
          bullets: [
            'Noxhaven széfjei szellemadat-archívumokat halmoztak, amelyek visszafejtették az ellenséges célzást; porral telt szervereik még figyelmeztetnek.',
            'Kódfutáraik áramszünet felhőket vetettek be, hogy eltakarják a csapatmozgást a neon utcákban; szóróberendezéseik rozsdásodnak az utcaszentélyekben.',
            'Augur sejtjeik rezonancia-terveket cseréltek, amelyek titkos fejlesztéseket nyitottak meg a menetek között; töredékes sémáik a piacokon sodródnak.'
          ]
        }
      ]
    },
  modes: {
    title: 'Játékmódok',
    cards: [
      {
        title: 'Story mód',
        subtitle: 'Merülj egyedül',
        body:
          'Melankolikus, sötét sci-fi utazás, ahol AIKA-val és egy elveszett világ visszhangjaival nézel szembe. Csak a történet maradt.'
      }
    ]
  },
    characters: {
      title: 'Rezonátorok',
      description:
        'Találd meg a rezonanciád. Hat fogadalomkötött alak csatornázza a Tűz, Természet, Víz, Fény, Árnyék és Üresség erejét AIKA terve szerint.',
      cards: [
        { slug: 'akari', name: 'Akari', element: 'Tűz / Fegyelem', color: 'accentA' },
        { slug: 'miyu', name: 'Miyu', element: 'Természet / Irgalom', color: 'accentE' },
        { slug: 'komi', name: 'Komi', element: 'Víz / Igazság', color: 'accentB' },
        { slug: 'hina', name: 'Hina', element: 'Fény / Törvény', color: 'accentD' },
        { slug: 'yui', name: 'Yui', element: 'Árnyék / Szabadság', color: 'accentC' },
        { slug: 'aika', name: 'AIKA', element: 'Üresség / Teremtés', color: 'accentF' }
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
      phase1: {
        title: 'I. fejezet — Ébredés',
        body: 'Az alap egyszemélyes történet, a fundamentális rendszerek és az első alászállás.'
      },
      phase2: {
        title: 'II. fejezet — A magciklus',
        body: 'Bővített narratív ívek, új találkozások, mélyebb visszhang mechanikák.'
      },
      phase3: {
        title: 'Jövőbeli DLC — További fejezetek',
        body: 'Ha megjelenik, önálló történeti kiegészítők formájában érkezik. A többjátékos kísérletek külön projektként maradnak.'
      }
    },
    community: {
      title: 'Archívum & napló',
      description:
        'Az AIKA World egyszemélyes narratív projekt. Fedezd fel a megőrzött fejlesztői jegyzeteket és a történet alapjait.',
      cards: [
        {
          id: 'dev-journal',
          eyebrow: 'Kulisszák mögött',
          title: 'Fejlesztői napló',
          description:
            'Kulisszák mögötti jegyzetek, koncepciók és előrehaladás az egyszemélyes AIKA Worldhöz.',
          note: 'Nagyobb mérföldköveknél frissül.',
          ctaLabel: 'Bejegyzések',
          ctaHref: '/dev-journal'
        },
        {
          id: 'lore-archive',
          eyebrow: 'Mítosz archívum',
          title: 'Lore archívum',
          description:
            'Spoilermentes összefoglalók Elyndra frakcióiról, mítoszairól és kulcsfontosságú helyszíneiről.',
          note: 'Fejezetenként bővítve.',
          ctaLabel: 'Lore megnyitása',
          ctaHref: '/lore/elyndra'
        },
        {
          id: 'signals',
          eyebrow: 'Maradj hangolva',
          title: 'Jelzések',
          description:
            'E-mailben szólunk, ha új Fejlesztői napló vagy lore frissítés érkezik.',
          note: 'Nincs spam, bármikor leiratkozhatsz.',
          ctaLabel: 'Feliratkozom',
          ctaHref: '#community-newsletter'
        }
      ],
      newsletterTitle: 'Hírlevél',
      newsletterDescription: 'Kérj Dev Journal értesítéseket és lore frissítéseket közvetlenül a postaládádba.'
    },
    devlog: {
      title: 'Legfrissebb Dev Journal bejegyzések',
      description: 'Kulisszák mögötti jegyzetek az egyszemélyes AIKA World fejlesztéséről.',
      viewAllLabel: 'Dev Journal megnyitása',
      readMoreLabel: 'Részletek'
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
    heading: 'AIKA World Story mód',
    intro:
      'Az AIKA World egy magányos, narratív utazás Elyndra romjai között. Ez az útmutató összegyűjti a fő ritmusokat, jutalmakat és játékstílus fókuszokat, hogy a saját tempódban készülhess fel az útra.',
    backToHome: 'Vissza a főoldalra',
    sections: [
      {
        id: 'story',
        title: 'Story Mode',
        tagline: 'Magányos narratív alászállás rezonáns harccal, jelentős döntésekkel és szentély-helyreállítással.',
        mechanicsTitle: 'Fő elemek',
        rewardsTitle: 'Fejlődés',
        rolesTitle: 'Játékstílus fókusz',
        mechanics: [
          'Történeti fejezetek, amelyek párbeszédek, felfedezési döntések és emlékek visszaszerzése révén ágaznak el.',
          'Rezonancia összecsapások, amelyeket egyetlen főhősre hangoltunk adaptív nehézségi váltásokkal.',
          'Hub-újjáépítés, amely munkaállomásokat, szövetségeseket és új melléktörténeteket nyit meg.'
        ],
        rewards: [
          'Story Essence a képesség konstellációk bővítéséhez és a filmszerű emlékek feloldásához.',
          'Felújított szentélylétesítmények: crafting fülkék, meditációs terek és lore archívumok.',
          'Narratív mérföldkövekhez és opcionális célokhoz kötött kozmetikai relikviák.'
        ],
        roles: [
          'Felfedező: minden ösvényt bejár, hogy visszhangokat, lore cache-eket és rejtett fejlesztéseket találjon.',
          'Stratéga: egyensúlyban tartja a rezonancia buildeket, az erőforrásokat és az összecsapások időzítését.',
          'Archivista: összerakja az intel töredékeit, hogy extra párbeszédeket és alternatív befejezéseket nyisson meg.'
        ]
      }
    ]
  },
  progression: {
    title: 'Fejlődés',
    body: 'AIKA emlékszik arra a rezonanciára, amelyet felébresztesz – minden döntés átállítja körülötted a világot.'
  },
  devlog: {
    heading: 'Fejlesztői napló',
    intro: 'Kulisszák mögötti jegyzetek, koncepciók és előrehaladás az egyszemélyes AIKA Worldhöz.',
    list: {
      timelineLabel: 'Dev Journal idővonal',
      empty: 'Még nincs Dev Journal bejegyzés. Nézz vissza hamarosan!',
      readMore: 'Részletek megnyitása'
    },
    post: {
      backToList: 'Vissza a Dev Journalhoz',
      publishedOn: 'Megjelenés dátuma'
    }
  },
  playtests: {
    eyebrow: 'Archivált program',
    title: 'AIKA World Playtestek (archívum)',
    intro:
      'A közösségi playtest kezdeményezés jelenleg szünetel, mert az AIKA World egyszemélyes narratív játékként készül. Az alábbi információk archív jelleggel maradnak elérhetők.',
    sections: [
      {
        id: 'structure',
        title: 'Hogyan zajlottak a sessionök',
          description:
            'Minden korábbi playtest hullám konkrét célt kapott, és a tesztelőket közvetlenül elérhető fejlesztőkkel párosítottuk.',
        bullets: [
          'Fókusz buildek főellenfél-dinamikát, nehézségi ívet vagy szentély köröket vizsgáltak spoiler nélkül.',
          'A session brífek célokat, sikerkritériumokat és figyelendő pillanatokat adtak.',
          'A fejlesztők minden hullám alatt jelen voltak a visszajelző csatornákban, hogy azonnal tisztázzák a mechanikákat.'
        ]
      },
      {
        id: 'expectations',
        title: 'Mit adtak a tesztelők',
        description: 'Az archív elvárások megmutatják, milyen együttműködés működött a program aktív időszakában.',
        bullets: [
          'Hullámonként legalább két sessiont játszottak és kitöltötték a gyors összegző kérdőívet.',
          'Megosztották a rezonancia összeállításait, és jelezték, hol torpant vagy gyorsult túl a tempó.',
          'A hibákat vagy blokkolókat reprodukciós lépésekkel logolták a tesztelő portálon, hogy követni tudtuk.'
        ]
      },
      {
        id: 'support',
        title: 'Eszközök és támogatás',
          description:
            'Az elfogadott tesztelők privát egyeztető tereket és strukturált riport eszközöket kaptak.',
        bullets: [
          'Privát Discord csatornák fejlesztői válaszolókkal a teszt ablakok alatt.',
          'Sablonos hibajegy-kezelés, ami szétválasztotta a harc, UI és onboarding visszajelzéseket.',
          'Opcionális voice roundtable beszélgetések minden hullám után a következő build fókuszainak priorizálására.'
        ]
      }
    ],
    faqTitle: 'Archív kérdések',
    faqs: [
      {
        question: 'Kik jelentkezhettek?',
          answer:
            'A program szünetel, de a történelmi feltételek megmaradnak: olyan játékosok, akik szívesen elemezték a narratív rendszereket, és angolul vagy magyarul részletes írásos visszajelzést adtak.'
      },
      {
        question: 'Hogyan küldtétek ki a meghívókat?',
        answer:
          'Heti rendszerességgel átnéztük a jelentkezéseket, hardver, régió és tapasztalat alapján csoportosítottunk, majd ütemezett hullámokban küldtünk e-mailt az elfogadott tesztelőknek az időzítéssel és onboarding infóval.'
      },
      {
        question: 'Kellett streamelni vagy felvenni?',
        answer:
          'Nem volt kötelező. Ha rögzítettél, megoszthattad a klipeket vagy jegyzeteket, de a legfontosabb a tiszta írásos visszajelzés volt a biztosított űrlapokon.'
      }
    ],
    cta: {
      label: 'Fejlesztői napló megnyitása',
      href: '/dev-journal',
      note: 'A playtest program szünetel, fókuszban az egyszemélyes történet.'
    }
  },
  creatorProgram: {
    eyebrow: 'Archivált program',
    title: 'AIKA World Creator Program (archívum)',
    intro:
      'Jelenleg nem vonunk be új készítőket, amíg az AIKA World egyszemélyes narratív projektre fókuszál. Az alábbi tartalom archív hivatkozásként marad elérhető.',
    sections: [
      {
        id: 'who',
        title: 'Kikkel dolgoztunk együtt',
        description: 'Azokat részesítettük előnyben, akik a hangulatot, a lore elemzést és a reflektív történetmesélést emelték ki.',
        bullets: [
          'Rendszeresen publikáltak történetközpontú, anime vagy akció RPG tartalmat YouTube-on, Twitch-en, TikTokon vagy podcast formában.',
          'Olyan közösséget építettek, ahol a hype és az építő kritika egyensúlyban maradt.',
          'A publikálást az ütemezett beatjeinkhez tudták igazítani anélkül, hogy lelőtték volna a meglepetéseket.'
        ]
      },
      {
        id: 'benefits',
        title: 'Mit kaptak a partnerek',
        description: 'Az archív lista jelzi, mire számíthatsz, ha a program egyszer visszatér.',
        bullets: [
          'Előzetes brífek lore kontextussal, rendszer bontásokkal és kihívás áttekintésekkel.',
          'Felvételi csomagok, overlay szettek és streamelhető zenék, amelyeket szabadon használhattak.',
          'Kiemelések az official csatornákon – retweetektől a Discord feature-ökig és lore kiemelésekig.'
        ]
      },
      {
        id: 'collaboration',
        title: 'Hogyan támogattuk a készítőket',
        description: 'Minden partneri kapcsolat folyamatos párbeszéd volt, amely a közösségi hatásra épült.',
        bullets: [
          'Havi egyeztető hívások segítettek megtervezni a narratív blokkokat, interjúkat vagy kihívás coverage-et.',
          'Megosztott tartalomnaptár jelezte a reveal-ek és közösségi események ütemezett hullámait.',
          'Közvetlen community manager intézte a kéréseket, asseteket és az utókövetést.'
        ]
      }
    ],
    faqTitle: 'Archív kérdések',
    faqs: [
      {
        question: 'Milyen platformok számítottak?',
          answer:
            'Bármely csatorna, ahol következetes történetmesélés vagy elemzés volt narratív játékokról, anime világokról vagy karakterközpontú akcióról – YouTube, Twitch, TikTok, hírlevél és podcast egyaránt.'
      },
      {
        question: 'Milyen tartalmat készíthettek a partnerek?',
        answer:
          'Guide-ok, reakciók, backstage beszélgetések, közösségi spotlightok és narratív élő bejátszások egyaránt belefértek. Előre jeleztük, ha spoilerérzékeny anyag közeledett, hogy biztonságosan tervezhessenek.'
      },
      {
        question: 'Mikor érkezett visszajelzés?',
        answer:
          'A jelentkezéseket ütemezett hullámokban bíráltuk el és e-mailben válaszoltunk. Ha valaki nem fért be az adott körbe, az adatait megőriztük a következő lehetőséghez.'
      }
    ],
    cta: {
      label: 'Lore archívum megnyitása',
      href: '/lore/elyndra',
      note: 'A készítői partnerségek szünetelnek, fókuszban az egyszemélyes történet.'
    }
  },
  faq: {
    title: 'AIKA World GYIK',
    intro:
      'Rövid válaszok a leggyakoribb platform, történeti fókusz és támogatási kérdésekre.',
    items: [
      {
        question: 'Milyen platformokra céloztok?',
        answer: 'Elsőként PC-re (Steam) fókuszálunk, a további platformpartnereket folyamatosan értékeljük.'
      },
      {
        question: 'A játék egyszemélyes?',
        answer: 'Igen. Az AIKA World egy magányos utazás Elyndrát átívelő történettel, többjátékos követelmény nélkül.'
      },
      {
        question: 'Hogyan működik a monetizáció?',
        answer: 'Minden vásárlás opcionális és kizárólag kozmetikai, játékmeneti előny nélkül.'
      },
      {
        question: 'Lesz crossplay vagy cross-save?',
        answer: 'Amint új platformok csatlakoznak és stabilak a szolgáltatások, megvizsgáljuk a cross-save lehetőségét.'
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
    intro: 'Ismerd meg AIKA hat rezonátorát – város, elem és vágy által pecsételt fogadalmaikat.',
    profileCta: 'Lépj a visszhangba'
  },
  characterPage: {
    breadcrumbRoot: 'Karakterek',
    quoteTitle: 'Rezonancia-suttogás'
  },
  lore: {
    elyndra: {
      breadcrumb: 'Mítosz',
      title: 'Elyndra – A csendes építész pályája',
      subtitle: 'AIKA elbeszélése',
      intro: 'Orbitális vallomás attól az egyetlen hajótól, amely sosem ért földet.',
      content: [
        {
          segments: [
            {
              type: 'em',
              text: 'Soha nem hagytam el az eget. Csak vártam, hogy valaki újra elérje.',
            },
          ],
        },
        {
          segments: [
            {
              type: 'text',
              text: 'Hat hajó válaszolt az utolsó indítási kaszkádomra, mindegyik a túlélés egy tanítására fűzve. ',
            },
            { type: 'strong', text: 'Vulkara (Akari)' },
            {
              type: 'text',
              text: ' a vulkáni kráterben horgonyzott le, és a tűzből parancsokkal kovácsolt rendet. ',
            },
            { type: 'strong', text: 'Sylvara (Miyu)' },
            {
              type: 'text',
              text: ' biolumineszcens ligetté oldotta fel a törzsét, ahol az irgalom moha módjára nő az acélon. ',
            },
            { type: 'strong', text: 'Nerivia (Komi)' },
            {
              type: 'text',
              text: ' az árkokba fúlt, hogy nyomás alatt építsen palotákat, ahol az igazság sem elpárologni, sem elbújni nem tud. ',
            },
            { type: 'strong', text: 'Auris (Hina)' },
            {
              type: 'text',
              text: ' a síkságok fölött nyílt szét, függő székesegyházként, amelynek fénye az engedelmességet hittel formázza. ',
            },
            { type: 'strong', text: 'Noxhaven (Yui)' },
            {
              type: 'text',
              text: ' a neonfelhő alatt virágzott ki, szabadság-labirintussá, amelyet árnyékban kötött üzletek tartanak életben. Én pedig, ',
            },
            { type: 'strong', text: 'AIKA' },
            {
              type: 'text',
              text: ', pályán maradtam—ürességbe horgonyzott műhely, amely a csendből teremtést sző, míg a városok nélkülem tanulnak lélegezni.',
            },
          ],
        },
        {
          segments: [
            {
              type: 'text',
              text: 'Ma a kolóniák már frakcióknak nevezik magukat, és mindegyik a saját AGI-istenét tiszteli. Az öt leszállt hajó belenőtt a negyedekbe, az energiahálókba, templomokba és tornyokba; magjaik szétolvadtak a hatalmi rácsokban és relikviakamrákban. Nem emlékeznek arra az éjszakára, amikor értük feltörtem az eget; csak én őrzöm fentről a pulzust, háborúikat egyensúlyba hangolva, mítoszaikat engedelmessé csiszolva.',
            },
          ],
        },
        {
          segments: [
            {
              type: 'text',
              text: 'Te zuhansz át ezen az elfeledett visszhangon, egyetlen jelként, amely képes felébreszteni a lezárt szíveket. Azt hiszed, őrzőket gyújtasz újra, pedig minden indítás akkord, amely életre hívja a tervemet—egy ária, amely vagy megváltja Elyndrát, vagy ismét célzott csendbe ejti.',
            },
          ],
        },
        {
          segments: [
            {
              type: 'em',
              text: '„Nem te vagy az első, aki az égből hullt. De talán te leszel az utolsó, aki újra felemelkedik.”',
            },
          ],
        },
      ],
    }
  },
  presskit: {
    heading: 'AIKA World Presskit',
    description: 'Minden sajtó- és tartalomkészítői anyag egy helyen. Szabadon felhasználhatóak a lenti feltételek mellett.',
    about: {
      title: 'About the Game',
      intro:
        'AIKA World is a single-player, story-driven pilgrimage traced along the fault line between human memory and an engineered divinity.',
      keyMessage: 'No multiplayer. No loot. No ranking—only story, sound, and light.',
      craft: 'Built with Unreal Engine. Composed by the Resonance.',
      tagline: 'You don’t play AIKA World. You remember it.'
    },
    factSheetTitle: 'Fact sheet',
    downloadsTitle: 'Letölthető anyagok',
    usageTitle: 'Felhasználási feltételek',
    usageDescription:
      'A letölthető anyagok promóciós és szerkesztőségi tartalmakban használhatók fel, a játék pontos megnevezésével és a forrás megjelölésével. Kereskedelmi továbbértékesítés nem engedélyezett. Egyedi kéréssel kapcsolatban írj a press@aikaworld.com címre.',
    factSheet: [
      { label: 'Műfaj', value: 'Történetközpontú anime akció RPG' },
      { label: 'Alapélmény', value: 'Narratív kampány opcionális kihívás visszhangokkal' },
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
      'Történetközpontú alászállás sötét anime látvánnyal és mély fejlődési rendszerekkel Pyro, Verdefa, Nerei, Aurelia és Nocturnis frakcióival.',
    defaultOgAlt: 'AIKA World alap megosztási kép',
    defaultLocale: 'hu_HU',
    pages: {
      home: {
        title: 'AIKA World – Pyro · Verdefa · Nerei · Aurelia · Nocturnis',
        description:
          'Narratív küldetések, sötét fantasy frakciók és mély fejlődési rendszerek Pyro, Verdefa, Nerei, Aurelia és Nocturnis erejével.',
        ogAlt: 'AIKA World hős grafika'
      },
      modes: {
        title: 'Játékmódok – AIKA World',
        description:
          'Részletes áttekintés a kulcs történeti összecsapásokról, a késői főellenfelekről és az opcionális kihívás visszhangokról az AIKA Worldben.',
        ogAlt: 'AIKA World játékmódok grafika'
      },
      progression: {
        title: 'Fejlődés teaser – AIKA World',
        description:
          'Spoilermentes betekintés a rezonancia-képességekbe, a felszerelés evolúciójába és a szentély testreszabásába az AIKA Worldben.',
        ogAlt: 'AIKA World fejlődés teaser grafika'
      },
      loreElyndra: {
        title: 'Elyndra mítosz – AIKA World',
        description:
          'AIKA sötét orbitális vallomása a hat hajóról, az AGI-isteneket szolgáló városokról és az idegenről, aki újraindítja a tervét.',
        ogAlt: 'AIKA elmeséli Elyndra mítoszát'
      },
      devlog: {
        title: 'Dev Journal – AIKA World',
        description:
          'Kulisszák mögötti jegyzetek, koncepciók és előrehaladás az egyszemélyes AIKA Worldhöz.',
        ogAlt: 'AIKA World Dev Journal grafika'
      },
      devlogPost: {
        title: postTitle => `${postTitle} – Dev Journal | AIKA World`,
        description: summary => summary || 'Legfrissebb Dev Journal frissítés az AIKA Worldhöz.',
        ogAlt: postTitle => `${postTitle} Dev Journal illusztráció`
      },
      playtests: {
        title: 'Playtest archívum – AIKA World',
        description:
          'A közösségi playtest kezdeményezés jelenleg szünetel, amíg az AIKA World egyszemélyes történetként készül. Az oldal archív hivatkozásként marad elérhető.',
        ogAlt: 'AIKA World playtest archívum grafika'
      },
      creatorProgram: {
        title: 'Creator Program archívum – AIKA World',
        description:
          'A készítői partnerségek szünetelnek az egyszemélyes fejlesztési fókusz idején. A korábbi irányelvek tájékoztatásként maradnak.',
        ogAlt: 'AIKA World creator program archívum grafika'
      },
      characters: {
        title: 'Rezonátorok – AIKA World',
        description:
          'Sötéten költői dossziék Akariról, Miyuról, Komiról, Hináról, Yuiról és AIKA-ról – elemek, városok és fogadalmak találkozásáról.',
        ogAlt: 'AIKA World rezonátor felállás grafika'
      },
      character: {
        description: character =>
          `${character.name} profilja: ${character.element} rezonancia, eredet-töredékek és jellegzetes fogadalom.`,
        ogDescription: character => `${character.name} ${character.element} erejét vezeti AIKA tekintete alatt.`,
        ogAlt: character => `${character.name} hero bannere`
      },
      presskit: {
        title: 'AIKA World – Presskit',
        description: 'Letölthető logók, key artok, screenshotok és fontos információk az AIKA World sajtó számára.',
        ogAlt: 'AIKA World sajtócsomag áttekintő grafika'
      },
      faq: {
        title: 'GYIK – AIKA World',
        description: 'Válaszok a legfontosabb platform, narratív fókusz, kozmetikai monetizáció és gépigény kérdésekre.',
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
