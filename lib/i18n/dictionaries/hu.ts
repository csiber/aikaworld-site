import type { Dictionary } from '../types';
import { getLegalDocument, getLegalChangelog } from '../../legal/content';

export const huDictionary: Dictionary = {
  locale: 'hu',
  header: {
    brand: 'AIKA WORLD',
    navLabel: 'Fő navigáció',
    nav: {
      modes: 'Játékmódok',
      characters: 'Karakterek',
      media: 'Média',
      roadmap: 'Roadmap',
      community: 'Közösség'
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
    legalHeading: 'Jogi információk',
    legalLinks: [
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
      title: 'Anime co-op action RPG – Raid. Survive. ',
      highlight: 'Resonance.',
      description: 'Öt Rezonátor. Óriási bossok. Végtelen hullámok.',
      wishlistCta: 'Wishlist a Steamen',
      discordCta: 'Csatlakozz Discordon',
      subscribeCta: 'Feliratkozom',
      videoPosterAlt: 'AIKA World teaser poszter'
    },
    modes: {
      title: 'Játékmódok',
      cards: [
        {
          title: 'Raid Boss Arena',
          description: 'Skálázódó aréna-csaták, óriási bossokkal. A szinergia dönt.',
          points: ['Party-size skálázás', 'Mechanikák és fázisok', 'Csapat szerepkörök'],
          linkLabel: 'Részletek megnyitása',
          href: '/hu/modes#raid'
        },
        {
          title: 'Infest Survival',
          description: 'Végtelen hullámok, fokozódó tempó és checkpoint jutalmak.',
          points: ['Wave-alapú hentelés', 'Checkpoint jutalmak', 'Meta-progress: kozmetika/boost'],
          linkLabel: 'Részletek megnyitása',
          href: '/hu/modes#infest'
        }
      ]
    },
    characters: {
      title: 'Rezonátorok',
      description: 'Találd meg a rezonanciád. Az öt lány mind másban zseniális.',
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
      title: 'Közösség & Feliratkozás',
      description: 'Csatlakozz a Discordhoz és iratkozz fel a playtest hírekre.',
      discordCta: 'Csatlakozz Discordon',
      wishlistCta: 'Wishlist a Steamen'
    },
    newsletter: {
      emailLabel: 'E-mail cím',
      emailPlaceholder: 'te@pelda.hu',
      submitIdle: 'Feliratkozom',
      submitLoading: 'Küldés…',
      consent: 'A feliratkozással elfogadod az Adatkezelési tájékoztatót.',
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
      'Merülj el a kooperatív kihívásokban: a Raid Boss Arena a precíz végrehajtást, míg az Infest Survival az adaptív túlélést jutalmazza. Az alábbi útmutatók segítenek felkészülni mindkét módra.',
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
    tipsTitle: 'Tippgyűjtemény'
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
    charactersCta: 'Rezonátorok felfedezése'
  },
  seo: {
    defaultTitle: 'AIKA World – Anime co-op action RPG',
    defaultDescription: 'Raid boss arénák és végtelen hullámok. 5 egyedi Rezonátor.',
    defaultOgAlt: 'AIKA World alap megosztási kép',
    defaultLocale: 'hu_HU',
    pages: {
      home: {
        title: 'AIKA World – Anime co-op action RPG',
        description: 'Raid boss arénák és végtelen hullámok. 5 egyedi Rezonátor.',
        ogAlt: 'AIKA World hős grafika'
      },
      modes: {
        title: 'Játékmódok – AIKA World',
        description:
          'Részletes áttekintés a Raid Boss Arena és az Infest Survival módokról: mechanikák, jutalmak, csapat szerepek az AIKA Worldben.',
        ogAlt: 'AIKA World játékmódok grafika'
      },
      characters: {
        title: 'Rezonátorok – AIKA World',
        description: 'Akari, Komi, Yui, Hina és Miyu részletes karakterprofilja az AIKA World világából.'
      },
      character: {
        description: character =>
          `${character.name} részletes profilja: ${character.role}, ${character.element} elem, játékmenet – tippek raidhez.`,
        ogDescription: character => `${character.role} ${character.element} rezonátor a csapatban.`,
        ogAlt: character => `${character.name} hero bannere`
      },
      presskit: {
        title: 'AIKA World – Presskit',
        description: 'Letölthető logók, key artok, screenshotok és fontos információk az AIKA World sajtó számára.'
      },
      privacy: {
        title: 'Adatvédelmi tájékoztató – AIKA World',
        description: 'Tudd meg, hogyan kezeljük a sütiket, az analitikát és a kapcsolati adatokat az AIKA Worldben.'
      },
      terms: {
        title: 'Felhasználási feltételek – AIKA World',
        description: 'Ismerd meg az AIKA World IP használatának, közösségi részvételének és felelősségi szabályait.'
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
        description: 'A keresett rezgés hiányzik. Térj vissza a főoldalra vagy böngészd a karaktereket.'
      }
    }
  }
};
