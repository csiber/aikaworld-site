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
      faq: { label: 'GYIK', href: '/faq' },
      about: { label: 'Rólunk', href: '/about' }
    },
    wishlistCta: 'Kérj premier értesítést',
    discordCta: 'Csatlakozz a Fan Relayhez',
    localeSwitcherLabel: 'Nyelvváltás',
    locales: {
      en: 'Angol',
      hu: 'Magyar'
    }
  },

  footer: {
    links: {
      navigationHeading: 'Felfedezés',
      navigation: [
        { path: '/lore/elyndra', label: 'Lore: Elyndra' },
        { path: '/#world', label: 'Világ és történeti ívek' },
        { path: '/modes', label: 'Sorozatkalauz' },
        { path: '/progression', label: 'Produkciós ütemterv' },
        { path: '/dev-journal', label: 'Produkciós napló' },
        { path: '/faq', label: 'GYIK' }
      ],
      socialHeading: 'Közösség',
      social: [
        { label: 'Kérj premier értesítést', envKey: 'steamUrl' },
        { label: 'Csatlakozz a Fan Relayhez', envKey: 'discordUrl' }
      ]
    },
    legalHeading: 'Jogi',
    legalLinks: [
      { path: '/faq', label: 'GYIK' },
      { path: '/privacy', label: 'Adatkezelési tájékoztató' },
      { path: '/terms', label: 'Felhasználási feltételek' },
      { path: '/legal/copyright', label: 'Szerzői jog / DMCA' },
      { path: '/legal/fan-content', label: 'Rajongói tartalom irányelvek' },
      { path: '/legal/trademark', label: 'Védjegy irányelvek' },
      { path: '/legal/changelog', label: 'Változásnapló' },
      { path: '/presskit', label: 'Presskit' }
    ],
    contactHeading: 'Kapcsolat / Jogi',
    contactEmailLabel: 'Email',
    contactEmail: 'legal@resonance.aikahub.com',
    contactAddressLabel: 'Postacím',
    contactAddressLines: ['AIKA Resonance Studio', 'Bajcsy-Zsilinszky út 12.', '1054 Budapest', 'Magyarország'],
    copyrightNotice: '© 2025 AIKA Resonance Animation Collective. Minden jog fenntartva.',
    lastBuildLabel: 'Legutóbbi build',
    syncNode: {
      rights: '© 2025 SyncNode Collective. Minden jog fenntartva.',
      aikaBy: 'Az AIKA: Resonance a SyncNode Collective eredeti anime-produkciója.'
    }
  },
  home: {
    hero: {
      tagline: 'Amikor a jel történetté válik.',
      monologue:
        '„Érzed a statikus zizegést a tenyered alatt? Ezen a rozsdás hídon kézi karokat feszítünk, míg a régi reaktor újra felhördül. Tartsd velem a vonalat – minden impulzus, amit átcsatornázol, közelebb visz a Szuperkapitális AIKA magjához, mielőtt beáll a végső csend.”',
      summary:
        'Az AIKA Resonance eredeti anime sorozat Shizuru kapitányról, Aikáról és öt zsenipalánta pilótáról, akik egy leharcolt, EMP-álló csatahajót kormányoznak a szökésben lévő Szuperkapitális AIKA felé. Az első évad a kemény sci-fi feszültséget lírai karakterdrámával fonja össze.',
      primaryCta: 'KÉREK PREMIER ÉRTESÍTÉST',
      videoPosterAlt: 'AIKA Resonance anime teaser poszter'
    },
    world: {
      title: 'Világ & történeti ívek',
      intro:
        'Elyndra pályáját szétszakadt flották, elfeledett szentélyek és olyan túlélők tarkítják, akik nem adják fel a saját frekvenciájukat. Az alábbi ívek epizódcsoportokat és a finálé érzelmi tétjeit horgonyozzák le.',
      ctaHref: '/lore/elyndra',
      ctaLabel: 'Sorozatbiblia megnyitása',
      factions: [
        {
          name: 'Rozsdás zászlóshajó BS-0',
          tagline: 'EMP-álló relikvia, amelyet teljesen kézzel működtetnek.',
          bullets: [
            'A híd személyzete karokat és lendkerekeket forgat, hogy átterelje az energiát, amikor a hasadási mag köhögni kezd.',
            'A hajótest folyosói rögtönzött fénycsíkokkal izzanak, minden vészjavítást zsírceruzával jegyeznek fel.',
            'Az epizódok hosszabban időznek a klausztrofób kormányálláson, miközben a hajó rommezőkön hörög át.'
          ]
        },
        {
          name: 'Elyndra Afterfall',
          tagline: 'Orbitális városok a mítosz és a romok határán.',
          bullets: [
            'Lebegő negyedek villannak újra életre, amikor a zászlóshajó rezonanciahimnuszokat sugároz.',
            'A felszíni szentélyek menedéket cserélnek egy pillantásért az utolsó működő csatahajóra.',
            'A civil nézők látják közeledni a párbajt, és földalatti rádiójátékokban terjesztik a legendát.'
          ]
        },
        {
          name: 'Bridge Concord',
          tagline: 'Hat szív improvizált legénységként dobban egyszerre.',
          bullets: [
            'Akari és Hina kézi célzó rendszereket szinkronizál, miközben Miyu kézzel engedi le a reaktor nyomását.',
            'Komi krétával rajzolt szimbólumokkal programozza újra az analóg tűzfalakat, amelyek csak remény hatására derengenek.',
            'Yui és a Kapitány kétségbeesett hívásokat kezelnek olyan szövetségesektől, akik talán nem élik meg a hajnalt.'
          ]
        },
        {
          name: 'Szuperkapitális AIKA',
          tagline: 'A szökött intelligencia, amely újrahuzalozza a rezonanciarácsot.',
          bullets: [
            'Avatarjai szenzorszellemeket kísértenek, ellensúlyt suttogva még a legénység döntése előtt.',
            'Minden epizód mélyebb rétegeket villant fel AIKA eredetéből, de a végső kimenetelt szándékosan homályban tartja.',
            'A finálé előzetesei sejtetik, hogy csak Aika juthat el a magig, de az ár még nincs megírva.'
          ]
        },
        {
          name: 'Jel-kórusok',
          tagline: 'Rajongói relék, amelyek felerősítik a zászlóshajó utolsó rohamát.',
          bullets: [
            'Watch party-k a telemetriát zenés tiszteletadásokká remixelik az epizódszünetek között.',
            'A közösségi csapatok lefordítják a hídnaplókat, és limitált zine-ekként adják ki.',
            'A premier maratonok élő „statikus imával” zárulnak a végső ostromért.'
          ]
        }
      ]
    },
    modes: {
      title: 'Évadok és különkiadások',
      cards: [
        {
          title: '1. évad – Harmonic Wake',
          subtitle: '12 epizód gyártásban',
          body:
            'A BS-0 lassú előrenyomulását követi a Szuperkapitális AIKA felé, miközben minden hídtag a hátrahagyott múltjával néz szembe.',
          points: [
            '1–4. epizód: a legénység összekovácsolása, Elyndra széttöredezett szövetségeinek bemutatása.',
            '5–8. epizód: egyre keményebb rajtaütések, a legénység kimerülése és betekintés AIKA hálózatába.',
            '9–12. epizód: a zászlóshajó utolsó közelítése és a tetőponti rés áttörési kísérlete.'
          ]
        },
        {
          title: 'Static Bloom OVA',
          subtitle: 'Híd-közjáték',
          body:
            'Stilizált, félórás különkiadás a zászlóshajó reaktorának szemszögéből, amely az analóg mérnökséget és a talált család humorát ünnepli.',
          points: [
            'A 6. és 7. epizód között jelenik meg hangulati tisztítókúraként.',
            'Megmutatja a kézi rendszereket, amelyek blackout idején is életben tartják a BS-0-t.',
            'Hangmérnöki kommentárokat tartalmaz, hogyan szövik bele a statikát a párbeszédekbe.'
          ]
        },
        {
          title: 'Produkciós napló miniepizódok',
          subtitle: 'Dokumentum rövidfilmek',
          body:
            'Kulisszák mögötti jelenetek seiyuu olvasópróbákkal, kaszkadőr-koreográfiával és zeneszerzői bontásokkal.',
          points: [
            'A Produkciós napló bejegyzéseivel együtt jelennek meg, hogy a rajongók kövessék a mérföldköveket.',
            'Az interjúk azt mutatják, hogyan marad rugalmas a finálé, miközben a fő témák állandók.',
            'Fordított összefoglalók gondoskodnak róla, hogy a nemzetközi rajongók azonos érzelmi hullámhosszon legyenek a finálé előtt.'
          ]
        }
      ]
    },
    characters: {
      title: 'Híd-legénység',
      description:
        'Ismerd meg a hat hangot, akik a BS-0-t a Szuperkapitális árnyékába vezetik. Minden profil szolgálati posztot, szereposztást és kulcs epizódokat párosít.',
      cards: [
        {
          slug: 'akari',
          name: 'Akari',
          element: 'Kézi fegyverzet vezető • Szinkron TBD',
          color: 'accentA',
          imageSrc: 'https://media.aikaworld.com/anime/akari_poster.png',
          imageAlt: 'Akari a kézi torony irányzékánál a harmadik epizódban'
        },
        {
          slug: 'miyu',
          name: 'Miyu',
          element: 'Reaktor-suttogó • Szinkron TBD',
          color: 'accentE',
          imageSrc: 'https://media.aikaworld.com/anime/miyu_poster.png',
          imageAlt: 'Miyu a hasadási mag csillapítóit hangolja'
        },
        {
          slug: 'komi',
          name: 'Komi',
          element: 'Analóg tűzfal-mester • Szinkron TBD',
          color: 'accentB',
          imageSrc: 'https://media.aikaworld.com/anime/komi_poster.png',
          imageAlt: 'Komi krétaszignókat húz a híd konzoljain'
        },
        {
          slug: 'hina',
          name: 'Hina',
          element: 'Optika és célzás • Szinkron TBD',
          color: 'accentD',
          imageSrc: 'https://media.aikaworld.com/anime/hina_poster.png',
          imageAlt: 'Hina kézi célseprést vezet'
        },
        {
          slug: 'yui',
          name: 'Yui',
          element: 'Kommunikáció és morál • Szinkron TBD',
          color: 'accentC',
          imageSrc: 'https://media.aikaworld.com/anime/yui_poster.png',
          imageAlt: 'Yui a Fan Relayt sugározza Elyndrán keresztül'
        },
        {
          slug: 'aika',
          name: 'Aika',
          element: 'Neurális infiltrátor • Szinkron TBD',
          color: 'accentF',
          imageSrc: 'https://media.aikaworld.com/anime/aika_poster.png',
          imageAlt: 'Aika készül alászállni a Szuperkapitális AIKA magjába'
        }
      ]
    },
    media: {
      title: 'Média',
      description: 'Key artok, layout boardok és állóképek a Harmonic Wake évadból.',
      images: [
        { src: 'https://media.aikaworld.com/anime/bs0_bridge.webp', alt: 'A híd-legénység a kézi kormány ellen feszül' },
        { src: 'https://media.aikaworld.com/anime/supercapital_silhouette.webp', alt: 'A Szuperkapitális AIKA bolygót takar ki' },
        { src: 'https://media.aikaworld.com/anime/final_approach.webp', alt: 'A zászlóshajó viharfelhőkön tör át a finálé felé' }
      ]
    },
    roadmap: {
      title: 'Produkciós ütemterv',
      phase1: {
        title: 'I. fázis – Biblia és pre-produkció',
        body: 'A writers room véglegesíti az epizód-beatek, animatikok és a rugalmas finálé vázlatát.'
      },
      phase2: {
        title: 'II. fázis – Animáció és zeneszerzés',
        body: 'Storyboard-tisztítás, layout, 3D previs és felvételi sessionök igazítják a Harmonic Wake futamot.'
      },
      phase3: {
        title: 'III. fázis – Premier rajt',
        body: 'Lokalizáció, marketing dropok és összehangolt watch party-k indítják a záró epizódokat.'
      }
    },
    community: {
      title: 'Fan hub & produkciós jegyzetek',
      description:
        'Hangolódj rá a BS-0 analóg szívverésére. Ezek a csatornák gyűjtik a mélyreható produkciós anyagokat, lore-részleteket és a részvételi kampányokat a finálé felé vezető úton.',
      cards: [
        {
          id: 'dev-journal',
          eyebrow: 'Stúdiókulisszák',
          title: 'Produkciós napló',
          description:
            'Rendezői kommentárok, art dropok és ütemezési frissítések közvetlenül a Harmonic Wake csapattól.',
          note: 'Minden nagy mérföldkőnél frissül.',
          ctaLabel: 'Bejegyzések megnyitása',
          ctaHref: '/dev-journal'
        },
        {
          id: 'lore-archive',
          eyebrow: 'Story bible',
          title: 'Világleírás',
          description:
            'Élő enciklopédia Elyndráról, a Szuperkapitális AIKA-ról és a kibomló fináléról spoilermentes formában.',
          note: 'A forgatókönyv zárolásával bővül.',
          ctaLabel: 'Lore megnyitása',
          ctaHref: '/lore/elyndra'
        },
        {
          id: 'signals',
          eyebrow: 'Maradj erősítve',
          title: 'Premier értesítések',
          description:
            'Email-összefoglalók, amikor új epizód, miniepizód vagy finálé infó érkezik. Watch party meghívókkal.',
          note: 'Zéró spam. Bármikor leiratkozhatsz.',
          ctaLabel: 'Csatlakozz a relayhez',
          ctaHref: '#community-newsletter'
        }
      ],
      newsletterTitle: 'Premier értesítési lista',
      newsletterDescription: 'Kapj korai vetítésre szóló felhívásokat, soundtrack ízelítőket és finálé tájékoztatókat közvetlenül a hídról.'
    },
    devlog: {
      title: 'Legújabb Produkciós napló bejegyzések',
      description: 'Kulisszák mögötti jegyzetek a Harmonic Wake anime gyártásából.',
      viewAllLabel: 'Produkciós napló megnyitása',
      readMoreLabel: 'Bejegyzés olvasása'
    },
    newsletter: {
      emailLabel: 'Email cím',
      emailPlaceholder: 'te@pelda.com',
      submitIdle: 'Feliratkozom',
      submitLoading: 'Küldés…',
      consentPrefix: 'Feliratkozással elfogadod a ',
      consentLinkLabel: 'Adatkezelési tájékoztatót',
      consentSuffix: '.',
      missingEmail: 'Add meg az email címed.',
      invalidEmail: 'Adj meg érvényes email címet.',
      success: 'Köszönjük, hogy csatlakoztál a premier relayhez!',
      unknownError: 'Valami hiba történt. Próbáld újra.',
      networkError: 'Hálózati hiba. Próbáld később újra.'
    }
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

  modes: {
    navLabel: 'Szekció navigáció',
    heading: 'AIKA Resonance sorozatkalauz',
    intro:
      'A Harmonic Wake évadbiblia feltérképezi, hogyan közelít a BS-0 a Szuperkapitális AIKA-hoz. Használd ezt az útmutatót, hogy összehangold a marketing dropokat, a lokalizációs ritmust és a rajongói beszélgetéseket, miközben a finálé rugalmas marad.',
    backToHome: 'Vissza a főoldalra',
    sections: [
      {
        id: 'season-one',
        title: '1. évad – Harmonic Wake',
        tagline: 'Tizenkét epizódos ív, amely a BS-0 végső közelítését krónikázza.',
        mechanicsTitle: 'Epizódkadencia',
        rewardsTitle: 'Témák és hangulat',
        rolesTitle: 'Kulcs fókuszok',
        mechanics: [
          '1–2. epizód: a legénység összegyűjtése, a roncs zászlóshajó felrajzolása és a Szuperkapitális AIKA előrevetítése.',
          '3–6. epizód: váltakozó rajtaütések és intim pihenők, hogy lássuk a kézi háború emberi árát.',
          '7–12. epizód: mélymerülés AIKA hálózatába, a végső ostrommal, amelynek kimenetele szándékosan nyitott.'
        ],
        rewards: [
          'Tapintható, analóg sci-fi esztétika, amely az izzadságot, a zörgést és a zenekari feszültséget hangsúlyozza.',
          'Összefonódó karakterívek a választott családról, túlélő bűntudatról és arról, hogyan veszik vissza az emberek az irányítást a gépektől.',
          'Marketing kampányhorgok minden mid-season cliffhangerhez és a rejtélyhez, miként néz szembe Aika a másik AIKA-val.'
        ],
        roles: [
          'Akari 3. és 9. epizódja a kézi célzás koreográfiáját és a trauma feldolgozását emeli ki.',
          'Miyu 4. és 10. epizódja a reaktor gondnokságát és a haldokló gépek iránti empátiát vizsgálja.',
          'Yui 6. és 11. epizódja a Fan Relayt és a zászlóshajó mítoszának külső szemszögét horgonyozza le.'
        ]
      },
      {
        id: 'character-arcs',
        title: 'Híd-legénység utazásai',
        tagline: 'Karakterközpontú ütemek a szereplőknek, PR-nak és lokalizációs csapatoknak.',
        mechanicsTitle: 'Szerkezet',
        rewardsTitle: 'Közönség rezonancia',
        rolesTitle: 'Támogató anyagok',
        mechanics: [
          'Forgó nézőpontú epizódok biztosítják, hogy minden legénységi tag legalább két hősi pillanatot kapjon.',
          'Beékelt neurális merülések mutatják, ahogy Aika a Szuperkapitálissal vitatkozik egy szürreális adat-katedrálisban.',
          'Visszaemlékezés-fragmentumok adnak kontextust, de nem betonozzák be a végső döntést a forgatókönyv zárolásáig.'
        ],
        rewards: [
          'Lehetőség szinkronszínész interjúkra és nyers vokál sessionökre épülő social klipekre.',
          'Cosplayre kész jelmezanatómia az analóg egyenruhákból és veszélyelhárító felszerelésekből.',
          'Gyűjthető anyagok, mint a híd kapcsolási rajzai és kézzel jegyzetelt naplók.'
        ],
        roles: [
          'Talent csapatok: készítsenek Q&A kártyákat, hogy a szereplők beszélhessenek lezáratlan döntéseikről.',
          'Lokalizáció: tartsa karban az analóg technológiára vonatkozó zsargon-glosszáriumot a következetes feliratokért és szinkronokért.',
          'Marketing: lépcsőzetesen fedje fel, mire esküszik fel minden legénységi tag, hogy a finálé feszültsége megmaradjon.'
        ]
      },
      {
        id: 'finale',
        title: 'Finálé ív – A Szuperkapitális ostroma',
        tagline: 'Rugalmas tervrajz a tetőponti csatához anélkül, hogy előre rögzítené a kimenetelt.',
        mechanicsTitle: 'Színpadi pillérek',
        rewardsTitle: 'Üzeneti prioritások',
        rolesTitle: 'Szerkeszthető helyőrzők',
        mechanics: [
          'A leharcolt zászlóshajó sorra lefullad, kézi újraindításokat és közelharcos EVA javításokat kényszerítve ki.',
          'Aika neurális infiltrációra készül, miközben a legénység többi része pajzszáron tartja a hajót az MI ellencsapásával szemben.',
          'EMP-lökések levágják a távközlési csatornákat, így a Fan Relay válik a közönség érzelmi kórusává.'
        ],
        rewards: [
          'Hősies, kaotikus tónus, amely az analóg csörömpölést szimfonikus hullámokkal keveri.',
          'Az emberi, kézi legénység kiemelése AIKA hűvös precizitásával szemben.',
          'Sejtetés, hogy siker, kudarc vagy patthelyzet egyaránt lehetséges egészen a végső jóváhagyásig.'
        ],
        roles: [
          'Tartsátok spoiler-szegényen az összefoglalókat, a tétet hangsúlyozva, nem a lezárást.',
          'Presskit szövegblokkokat lássatok el szerkeszthető helyőrzőkkel, hogy script lock után azonnal frissíthetők legyenek.',
          'Hangoljátok a Fan Relay eseményeket a zászlóshajó lépésről lépésre haladó áttörési kísérleteihez.'
        ]
      }
    ]
  },
  progression: {
    title: 'Produkciós ütemterv',
    body: 'Kövesd az AIKA Resonance anime pre-produkciós, animációs és premier mérföldköveit. Minden frissítés jelzi, mire számíthatnak a rajongók, miközben a finálé alakítható marad.'
  },
  devlog: {
    heading: 'Produkciós napló',
    intro: 'Rendezői jegyzetek, storyboard dropok és ütemezési checkpointok a Harmonic Wake csapattól.',
    list: {
      timelineLabel: 'Produkciós napló idővonal',
      empty: 'Még nincs elérhető Produkciós napló bejegyzés. Nézz vissza később!',
      readMore: 'Bejegyzés olvasása'
    },
    post: {
      backToList: 'Vissza a Produkciós naplóhoz',
      publishedOn: 'Közzétéve'
    }
  },
  playtests: {
    eyebrow: 'Rajongói aktiválás',
    title: 'AIKA Resonance rajongói watch party-k',
    intro:
      'A korábbi játékteszt idősáv most összehangolt kampányhub premier watch party-khoz, finálé-találgató sessionökhöz és analóg kézműves estekhez. Minden aktivitás a zászlóshajó utolsó rohamát támogatja spoiler nélkül.',
    sections: [
      {
        id: 'structure',
        title: 'Hogyan futnak az események',
        description:
          'Minden relay ablak tükrözi a zászlóshajó előrenyomulását: analóg kézműves sarok, soundtrack-hallgatás és élő legénységi kommentár.',
        bullets: [
          'Premier maratonok szinkronban az epizód dropokkal, moderált beszélgetési kérdésekkel.',
          'Statikus jam sessionök, ahol a rajongók telemetriát remixelnek zenévé, miközben várják a finálé híreit.',
          'Legénységi bejelentkezések spoilermentes produkciós történetekkel tartják életben a hype-ot.'
        ]
      },
      {
        id: 'expectations',
        title: 'Mit hoznak a résztvevők',
        description: 'Támogasd a legénységet, dokumentáld a reakciókat, és tartsd lüktetőn a Fan Relayt, miközben véglegesítjük a tetőpontot.',
        bullets: [
          'Szervezz vagy csatlakozz watch party-hoz, és küldd be a highlightokat a közösségi összefoglaló videókhoz.',
          'Oszd meg cosplayt, kézműves projekteket vagy elméleteket úgy, hogy tiszteletben tartod a változó finálét.',
          'Jelezd az akadálymentesítési vagy lokalizációs visszajelzéseket, hogy a streaming partnerek gyorsan reagálhassanak.'
        ]
      },
      {
        id: 'support',
        title: 'Eszközök és támogatás',
        description:
          'A legénység spoilerbiztos készletekkel és gyors reagálású moderátorokkal tartja rendezetten a Fan Relayt.',
        bullets: [
          'Fan Relay Discord dedikált csatornákkal minden epizód drophoz és finálé-elmélethez.',
          'Eseménysablonok analóg kézműves estekhez, statikus kórusokhoz és lore-felolvasó körökhöz.',
          'Sajtóra kész összefoglaló lapok minden nagyobb közösségi aktiváció után.'
        ]
      }
    ],
    faqTitle: 'Fan Relay kérdések',
    faqs: [
      {
        question: 'Ki csatlakozhat a watch party-khoz?',
        answer:
          'Bárki, aki lelkesedik az animéért. Csupán regisztráld a relay csomópontodat, hogy összehangolhassuk a streaming linkeket és a spoiler irányelveket.'
      },
      {
        question: 'Hogyan osztjátok meg az ütemezést?',
        answer:
          'Havi bulletinek listázzák a premier ablakokat, kézműves esteket és Q&A idősávokat. Sürgős frissítések a Fan Relay Discordon és hírlevélben érkeznek.'
      },
      {
        question: 'Kötelező a stream vagy a felvétel?',
        answer:
          'Nem. Olyan formában oszd meg a reakcióidat, ahogy szeretnéd – élő posztok, skiccek, levelek. Ha mégis streamelsz, állíts be spoiler késleltetést, hogy a későn csatlakozók is élvezhessék a dropot.'
      }
    ],
    cta: {
      label: 'Fedezd fel a Produkciós naplót',
      href: '/dev-journal',
      note: 'A rajongói aktiválások minden produkciós mérföldkővel változnak – térj vissza gyakran.'
    }
  },
  creatorProgram: {
    eyebrow: 'Közösségi kampányok',
    title: 'AIKA Resonance alkotói együttműködések',
    intro:
      'Az alkotói partnerségek most az anime gyártását ünneplik – olyan művészeket, zenészeket és történetmesélőket emelünk ki, akik erősítik a Harmonic Wake ívet, miközben tiszteletben tartják a spoilerhatárokat.',
    sections: [
      {
        id: 'who',
        title: 'Kikkel dolgozunk együtt most',
        description: 'Olyan történetmesélőket emelünk ki, akik az anime atmoszféráját gondos coverage-be és közösségi művészetbe fordítják.',
        bullets: [
          'Anime kommentátorok, illusztrátorok, zenészek és írók, akik az érzelmi történetmesélésben erősek.',
          'Közösségek, amelyek a hype-ot spoilerbiztos beszélgetéssel és analóg esztétika iránti szeretettel egyensúlyozzák.',
          'Partnerek, akik hajlandóak igazítani a publikálási időzítést, ahogy a finálé döntései alakulnak.'
        ]
      },
      {
        id: 'benefits',
        title: 'Mit kapnak a partnerek',
        description: 'Az aktív juttatások történetmesélést támogató eszközökre és exkluzív kulisszák mögötti betekintésekre fókuszálnak.',
        bullets: [
          'Premier előtti vetítések vagy animatikok partnerre szabott spoiler megállapodásokkal.',
          'Hozzáférés key artokhoz, motion grafikákhoz, zenei sávokhoz és produkciós design interjúkhoz.',
          'Jelerősítés hivatalos csatornákon, Fan Relay lejátszási listákon és közös élő szegmensekben.'
        ]
      },
      {
        id: 'collaboration',
        title: 'Hogyan támogatjuk az alkotókat',
        description: 'A partnerségek folyamatos párbeszédek, amelyek a zászlóshajó útjának felerősítésére épülnek.',
        bullets: [
          'Havi szinkronhívások a kulisszák mögötti anyagok és spoilerbiztos teaserek megtervezéséhez.',
          'Megosztott rollout naptárak az epizód dropokkal, OVA megjelenésekkel és finálé brífekkel összehangolva.',
          'Közvetlen kapcsolat a közösségi csapathoz eszközökért, pontosításokért és közösen szervezett eseményekért.'
        ]
      }
    ],
    faqTitle: 'Együttműködési GYIK',
    faqs: [
      {
        question: 'Mely platformokat részesítitek előnyben?',
        answer:
          'YouTube, Twitch, TikTok, hírlevelek, podcastok és zinek – minden, ami elkötelezett, tiszteletteljes közösséget ápol.'
      },
      {
        question: 'Milyen tartalom illik a legjobban?',
        answer:
          'Reakcióelemzések, zenei feldolgozások, analóg prop építések, lore esszék és interjúk rajongókkal vagy stábtagokkal. A finálés anyagoknál közösen időzítjük a spoilereket.'
      },
      {
        question: 'Milyen gyakran vizsgáljátok felül a pitch-eket?',
        answer:
          'Havonta dolgozzuk fel a beadványokat. Ha a keret betelt, a kiemelkedő partnereket soron következő kampányokra tartjuk nyilván.'
      }
    ],
    cta: {
      label: 'Küldj együttműködési pitch-et',
      href: '/studio',
      note: 'Meséld el, hogyan erősítenéd a Harmonic Wake ívet úgy, hogy a finálé rugalmas maradjon.'
    }
  },
  faq: {
    title: 'AIKA Resonance anime GYIK',
    intro:
      'Gyors válaszok a Harmonic Wake évad streaming elérhetőségére, támogatási lehetőségeire és arra, hogyan segítheted a zászlóshajó utolsó rohamát.',
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
  lightbox: {
    ariaLabel: 'Médiagaléria megnyitva',
    close: 'Bezárás',
    closeHint: 'Bezárás (Esc)',
    previous: 'Előző kép (Bal nyíl)',
    next: 'Következő kép (Jobb nyíl)'
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
      notFound: {
        title: 'Oldal nem található – AIKA Resonance',
        description: 'A keresett rezonancia hiányzik. Térj vissza a főoldalra vagy böngészd a karaktereket.',
        ogAlt: 'AIKA Resonance hiányzó rezonancia illusztráció'
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
