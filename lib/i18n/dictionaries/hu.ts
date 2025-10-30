import type { Dictionary } from '../types';
import { getLegalDocument, getLegalChangelog } from '../../legal/content';

export const huDictionary: Dictionary = {
  locale: 'hu',
  header: {
    brand: 'AIKA RESONANCE',
    navLabel: 'Fő navigáció',
    nav: {
      world: { label: 'Világ', href: '/lore/elyndra' },
      studio: { label: 'Stúdió', href: '/studio' },
      modes: { label: 'Sorozatkalauz', href: '/modes' },
      progression: { label: 'Produkciós ütemterv', href: '/progression' },
      devlog: { label: 'Produkciós napló', href: '/dev-journal' },
      faq: {
    title: 'AIKA Resonance anime GYIK',
    intro:
      'Gyors válaszok a Harmonic Wake évad streaming elérhetőségére, támogatási lehetőségeire és arra, hogyan segítheted a csatahajó utolsó rohamát.',
    items: [
      {
        question: 'Mely streaming partnerekkel tárgyaltok?',
        answer:
          'Több globális platformmal egyeztetünk, a végső partnereket a lokalizációs határidők lezárása után jelentjük be.'
      },
      {
        question: 'Hány epizóddal számolhatunk?',
        answer: 'Az első évad tizenkét fő epizódból, a Static Bloom OVA-ból és dokumentum minisorozatokból áll.'
      },
      {
        question: 'Világszerte egyszerre debütálnak a részek?',
        answer:
          'Célunk a közel egyidejű premier. A szinkronra váró régiók rövid késéssel csatlakozhatnak, a feliratos verziók napra pontosan indulnak.'
      },
      {
        question: 'Milyen nyelveken lesz elérhető?',
        answer:
          'Magyar és angol szinkron készül, a feliratok angol, magyar, spanyol, francia és japán nyelven biztosan megjelennek.'
      },
      {
        question: 'Lezártátok már a finálét?',
        answer:
          'Még nem. Moduláris forgatókönyv-részleteket tartunk fenn, hogy a Szuperkapitális ostroma a produkciós, szereplői és rajongói visszajelzések alapján igazítható legyen.'
      },
      {
        question: 'Szervezhetek saját watch party-t?',
        answer:
          'Igen – regisztrálj a Fan Relayben, így megkapod a spoiler irányelveket, promócsomagokat és a legénység esetleges bejelentkezését.'
      },
      {
        question: 'Lesz hivatalos merchandise?',
        answer:
          'Limitált analóg merch dropok (poszterek, jelkazetták, enamel kitűzők) kísérik a fő epizódokat. A részleteket először a hírlevélben osztjuk meg.'
      },
      {
        question: 'Hol érhetnek el az újságírók vagy partnerek?',
        answer:
          'Írj a press@resonance.aikahub.com címre, vagy látogasd meg a presskitet a legfrissebb anyagokért és űrlapokért.'
      }
    ]
  },
  charactersPage: {
    breadcrumb: 'Karakterek',
    heading: 'AIKA Resonance híd-legénység',
    intro: 'Ismerd meg a hat hangot, akik a BS-0 fedélzetén tartják életben a küldetést a Szuperkapitális árnyékában. Minden dosszié szolgálati pozíciót, szinkronszereposztást és kulcs epizódokat tartalmaz.',
    profileCta: 'Profil megnyitása'
  },
  characterPage: {
    breadcrumbRoot: 'Karakterek',
    quoteTitle: 'Hídnapló-részlet'
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
    heading: 'AIKA Resonance Presskit',
    description: 'Minden sajtó- és tartalomkészítői anyag az AIKA Resonance animéről egy helyen. A lenti feltételek mellett szabadon felhasználhatók.',
    about: {
      title: 'A sorozatról',
      intro:
        'Az AIKA Resonance eredeti sci-fi anime: Shizuru kapitány, Aika és öt zsenipalánta pilóta az EMP-álló BS-0 fedélzetén próbál behatolni a szökésben lévő Szuperkapitális AIKA rendszerébe.',
      keyMessage: 'Analóg hősiesség kontra elszabadult intelligencia – statikusba csomagolt érzelmi sci-fi.',
      craft: 'Gyártó: SyncNode Collective. Zene: Resonance Ensemble.',
      tagline: 'Nem csak nézed az AIKA Resonance-t – velünk tartod a frontot.'
    },
    factSheetTitle: 'Gyors tények',
    downloadsTitle: 'Letölthető anyagok',
    usageTitle: 'Felhasználási feltételek',
    usageDescription:
      'A letölthető anyagok promóciós és szerkesztőségi tartalmakban használhatók a sorozat pontos megnevezésével. Kereskedelmi továbbértékesítés nem engedélyezett. Egyedi kéréshez írj a press@resonance.aikahub.com címre.',
    factSheet: [
      { label: 'Formátum', value: 'Eredeti anime sorozat' },
      { label: 'Évad hossza', value: '12 epizód + OVA + dokumentum minisorozatok' },
      { label: 'Célzott premier', value: '2026 (pontos dátum később)' },
      { label: 'Kapcsolat', value: 'press@resonance.aikahub.com', href: 'mailto:press@resonance.aikahub.com' }
    ],
    downloadBlocks: [
      {
        title: 'Logó & wordmark',
        description: 'Elsődleges logók több formátumban.',
        items: [
          { label: 'AIKA Resonance logó (PNG)', href: 'https://media.aikaworld.com/presskit/logo/aikaworld-logo.png' },
          { label: 'AIKA Resonance logó (SVG)', href: 'https://media.aikaworld.com/presskit/logo/aikaworld-logo.svg' },
          { label: 'Wordmark (PNG)', href: 'https://media.aikaworld.com/presskit/logo/aikaworld-wordmark.png' }
        ]
      },
      {
        title: 'Key art válogatás',
        description: 'Nagy felbontású kulcsvizuálok a Harmonic Wake évadból.',
        items: [
          { label: 'Key art #1', href: 'https://media.aikaworld.com/presskit/keyart/aikaworld-keyart-01.jpg' },
          { label: 'Key art #2', href: 'https://media.aikaworld.com/presskit/keyart/aikaworld-keyart-02.jpg' },
          { label: 'Key art #3', href: 'https://media.aikaworld.com/presskit/keyart/aikaworld-keyart-03.jpg' }
        ]
      },
      {
        title: 'Epizód állóképek',
        description:
          'Filmszerű anime állóképek a Harmonic Wake kulcs epizódjaiból – szerkesztőségi cikkekhez és kiemelésekhez optimalizálva.',
        items: [
          {
            label: 'Epizód állókép – Hídindítás (WebP)',
            href: 'https://media.kitsu.io/anime/cover_images/41370/webp/large.webp'
          },
          {
            label: 'Epizód állókép – Elyndra pályasodrás (WebP)',
            href: 'https://media.kitsu.io/anime/cover_images/42472/webp/large.webp'
          },
          {
            label: 'Epizód állókép – Jelek kórusa (WebP)',
            href: 'https://media.kitsu.io/anime/poster_images/44078/webp/big.webp'
          }
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
      'Úgy tűnik, egy olyan oldalra tévedtél, ami még nincs behangolva az AIKA Resonance univerzumában. Nézz vissza a főoldalra vagy fedezd fel a Rezonátorokat.',
    homeCta: 'Vissza a főoldalra',
    charactersCta: 'Rezonátorok felfedezése',
    supportHeading: 'Segítünk visszatalálni',
    supportDescription:
      'Használd az alábbi gyorslinkeket, hogy folytasd az utad, vagy jelezd a csapatnak, melyik frekvencia tűnt el, és gyorsan visszaállítjuk.',
    faqCta: 'GYIK megnyitása',
    discordCta: 'Kérdezz a közösségben Discordon',
    contactCta: 'Írj az AIKA csapatnak',
    contactSubject: '404 jelentés – Hiányzó AIKA Resonance oldal'
  },
  seo: {
    defaultTitle: 'AIKA Resonance anime – Harmonic Wake',
    defaultDescription:
      'Az AIKA Resonance anime hivatalos oldala. Kövesd Shizuru kapitányt, Aikát és a BS-0 hídját, ahogy megkísérlik feltörni a Szuperkapitális AIKA rendszerét.',
    defaultOgAlt: 'AIKA Resonance anime megosztási kép',
    defaultLocale: 'hu_HU',
    pages: {
      home: {
        title: 'AIKA Resonance anime – Harmonic Wake',
        description:
          'Ismerd meg az AIKA Resonance anime adaptációját. Találkozz a híd-legénységgel, fedezd fel Elyndrát és készülj fel a Szuperkapitális ostromára.',
        ogAlt: 'AIKA Resonance anime hero artwork'
      },
      modes: {
        title: 'Sorozatkalauz – AIKA Resonance',
        description:
          'Epizódkadencia, karakter fókuszok és finálé stábjegyzetek a Harmonic Wake évadból.',
        ogAlt: 'AIKA Resonance sorozatkalauz grafika'
      },
      progression: {
        title: 'Produkciós ütemterv – AIKA Resonance',
        description: 'Pre-produkciós, animációs és premier mérföldkövek nyomon követése az AIKA Resonance animénél.',
        ogAlt: 'AIKA Resonance produkciós ütemterv grafika'
      },
      loreElyndra: {
        title: 'Elyndra lore – AIKA Resonance',
        description:
          'AIKA sötét orbitális vallomása Elyndra hat hajójáról, az AGI-t imádó városokról és az idegenről, aki újraindítja a tervét.',
        ogAlt: 'AIKA elmeséli Elyndra mítoszát'
      },
      devlog: {
        title: 'Produkciós napló – AIKA Resonance',
        description: 'Rendezői kommentárok, art dropok és ütemezési frissítések a Harmonic Wake csapattól.',
        ogAlt: 'AIKA Resonance Produkciós napló key art'
      },
      devlogPost: {
        title: postTitle => `${postTitle} – Produkciós napló | AIKA Resonance`,
        description: summary => summary || 'Legfrissebb Produkciós napló bejegyzés az AIKA Resonance animéről.',
        ogAlt: postTitle => `${postTitle} Produkciós napló illusztráció`
      },
      playtests: {
        title: 'Fan watch party-k – AIKA Resonance',
        description:
          'Tudd meg, hogyan csatlakozhatsz az AIKA Resonance Fan Relay eseményeihez: watch party-k, kézműves estek és finálé találgatások.',
        ogAlt: 'AIKA Resonance fan watch party grafika'
      },
      creatorProgram: {
        title: 'Alkotói együttműködések – AIKA Resonance',
        description:
          'Küldd el az együttműködési ötleted, és nézd meg, miként erősíti a közösség a Harmonic Wake anime kampányát.',
        ogAlt: 'AIKA Resonance alkotói együttműködés grafika'
      },
      studio: {
        title: 'SyncNode Collective – AIKA Resonance',
        description:
          'Ismerd meg a SyncNode Collective csapatát, akik az AIKA Resonance animét készítik és a Harmonic Wake produkciót vezetik.',
        ogAlt: 'SyncNode Collective stúdió kiemelő grafika'
      },
      about: {
        title: 'Rólunk – AIKA Resonance anime',
        description:
          'Tudd meg, hogyan vált az AIKA Resonance animációs projektté, ismerd meg a vezető csapatot és a Harmonic Wake kreatív manifesztóját.',
        ogAlt: 'AIKA Resonance anime bemutatkozó grafika'
      },
      characters: {
        title: 'Híd-legénység – AIKA Resonance',
        description:
          'Akari, Miyu, Komi, Hina, Yui és Aika portréi, akik életben tartják a BS-0-t a Szuperkapitális felé vezető úton.',
        ogAlt: 'AIKA Resonance híd-legénység lineup grafika'
      },
      character: {
        description: character => `${character.name} profilja: szolgálati pozíció a BS-0 fedélzetén, szinkronhang és kulcs epizódok.`,
        ogDescription: character => `${character.name} tartja a frontot a Szuperkapitális AIKA ellen.`,
        ogAlt: character => `${character.name} hídprofil`
      },
      presskit: {
        title: 'AIKA Resonance – Presskit',
        description: 'Logók, key artok, szereplői életrajzok és produkciós tények letöltésre.',
        ogAlt: 'AIKA Resonance anime presskit grafika'
      },
      faq: {
        title: 'GYIK – AIKA Resonance anime',
        description: 'Streaming tervek, lokalizációs állapot és finálé ütemezés a Harmonic Wake évadhoz.',
        ogAlt: 'AIKA Resonance anime GYIK grafika'
      },
      privacy: {
        title: 'Adatkezelési tájékoztató – AIKA Resonance',
        description: 'Tudd meg, hogyan kezeljük a sütiket, analitikát és kapcsolatfelvételi adatokat az AIKA Resonance közösségben.',
        ogAlt: 'AIKA Resonance adatkezelés illusztráció'
      },
      terms: {
        title: 'Felhasználási feltételek – AIKA Resonance',
        description: 'Ismerd meg az AIKA Resonance IP használatának, közösségi tereknek és letölthető anyagoknak a szabályait.',
        ogAlt: 'AIKA Resonance felhasználási feltételek illusztráció'
      },
      legalCopyright: {
        title: 'Szerzői jog / DMCA – AIKA Resonance',
        description: 'Jelents jogsértést, nézd át az eltávolítási lépéseket és az ellenkérelmi folyamatot az AIKA Resonance tartalmaknál.',
        ogAlt: 'AIKA Resonance szerzői jogi grafika'
      },
      legalFanContent: {
        title: 'Rajongói tartalom irányelvek – AIKA Resonance',
        description: 'Útmutató rajongói art, AI alkotások, LoRA tréning és nem kereskedelmi projektek számára.',
        ogAlt: 'AIKA Resonance rajongói tartalom grafika'
      },
      legalTrademark: {
        title: 'Védjegy irányelvek – AIKA Resonance',
        description: 'Ismerd meg, hogyan használhatod jogszerűen az AIKA Resonance védjegyeit.',
        ogAlt: 'AIKA Resonance védjegy grafika'
      },
      legalChangelog: {
        title: 'Jogi változásnapló – AIKA Resonance',
        description: 'Frissítések a jogi dokumentumok változásairól.',
        ogAlt: 'AIKA Resonance jogi változásnapló grafika'
      },
      presskitPage: {
        title: 'Presskit – AIKA Resonance anime',
        description: 'Letölthető sajtócsomag a Harmonic Wake kampányhoz.',
        ogAlt: 'AIKA Resonance presskit előnézet'
      }
    }
  },
  studio: {
    title: 'SyncNode Collective',
    lead: 'Animációs műhely, amely a Harmonic Wake évadot életre hívja.',
    body:
      'A SyncNode Collective rendezőkből, animációs vezetőkből és hangmérnökökből álló kollektíva, amely az AIKA Resonance anime produkcióját felügyeli. A csapat az analóg inspirációt digitális pipeline-okkal ötvözi, hogy a BS-0 fedélzetének rezgése minden epizódban hitelesen szólaljon meg.',
    project: {
      title: 'AIKA Resonance – Harmonic Wake',
      summary: 'Eredeti sci-fi anime • 12 epizód + OVA • Nemzetközi koprodukció • Resonance Ensemble zenéje'
    }
  },
  aboutPage: {
    aikaLead: 'Az AIKA Resonance egy eredeti sci-fi anime sorozat.',
    aikaBody:
      'Kövesd Shizuru kapitányt, Aikát és a híd-legénységet, amint megpróbálják feltörni a Szuperkapitális AIKA rendszerét. A Harmonic Wake évad a kollektív áldozat, az analóg hősiesség és az AI-val vívott morális harc története.'
  }
};
