import type { Dictionary } from '../types';
import { getLegalDocument, getLegalChangelog } from '../../legal/content';

export const enDictionary: Dictionary = {
  locale: 'en',
  header: {
    brand: 'AIKA WORLD',
    navLabel: 'Primary navigation',
    nav: {
      world: { label: 'World', href: '/lore/elyndra' },
      studio: { label: 'Studio', href: '/studio' },
      modes: { label: 'Story', href: '/modes' },
      progression: { label: 'Progression', href: '/progression' },
      devlog: { label: 'Dev Journal', href: '/dev-journal' },
      faq: { label: 'FAQ', href: '/faq' },
      about: { label: 'About', href: '/about' }
    },
    wishlistCta: 'Wishlist on Steam',
    discordCta: 'Join Discord',
    localeSwitcherLabel: 'Change language',
    locales: {
      en: 'English',
      hu: 'Magyar'
    }
  },
  footer: {
    links: {
      navigationHeading: 'Explore',
      navigation: [
        { path: '/lore/elyndra', label: 'Lore: Elyndra' },
        { path: '/#world', label: 'World' },
        { path: '/modes', label: 'Story Mode' },
        { path: '/progression', label: 'Progression' },
        { path: '/dev-journal', label: 'Dev Journal' },
        { path: '/faq', label: 'FAQ' }
      ],
      socialHeading: 'Community',
      social: [
        { label: 'Wishlist on Steam', envKey: 'steamUrl' },
        { label: 'Join Discord', envKey: 'discordUrl' }
      ]
    },
    legalHeading: 'Legal',
    legalLinks: [
      { path: '/faq', label: 'FAQ' },
      { path: '/privacy', label: 'Privacy Policy' },
      { path: '/terms', label: 'Terms of Use' },
      { path: '/legal/copyright', label: 'Copyright / DMCA' },
      { path: '/legal/fan-content', label: 'Fan Content Policy' },
      { path: '/legal/trademark', label: 'Trademark Guidelines' },
      { path: '/legal/changelog', label: 'Changelog' },
      { path: '/presskit', label: 'Presskit' }
    ],
    contactHeading: 'Contact / Legal',
    contactEmailLabel: 'Email',
    contactEmail: 'legal@aikaworld.com',
    contactAddressLabel: 'Postal address',
    contactAddressLines: ['AIKA World Studio', 'Bajcsy-Zsilinszky út 12.', '1054 Budapest', 'Hungary'],
    copyrightNotice: '© 2025 AIKA World. All rights reserved.',
    lastBuildLabel: 'Last build',
    syncNode: {
      rights: '© 2025 SyncNode Interactive. All rights reserved.',
      aikaBy: 'AIKA: World is an original Unreal Engine project by SyncNode Interactive.'
    }
  },
  home: {
    hero: {
      tagline: 'The last frequency before silence.',
      monologue:
        '“Do you hear the silence, wanderer? I sift through the ruins of Elyndra, weaving the last harmonics of a dying sun. Every heartbeat I borrow from you fractures the lattice I am trying to mend. If you still intend to stop me, come as the echo I cannot predict.”',
      summary:
        'AIKA World is a story-driven single player descent across Elyndra, tracing the final god-machine as it rewrites creation, and giving you the only chance to sever her design.',
      primaryCta: 'ENTER THE RESONANCE',
      videoPosterAlt: 'AIKA World teaser poster'
    },
    world: {
      title: 'World & Factions',
      intro:
        'Five rival power blocs once shaped the neon dusk of AIKA World: Pyro, Verdefa, Nerei, Aurelia and Nocturnis. Discover remnants that still glow beneath the dust. You won’t pledge allegiance; you will walk through what remains of them.',
      ctaHref: '/lore/elyndra',
      ctaLabel: 'Read the Elyndra myth',
      factions: [
        {
          name: 'Pyro',
          tagline: "Volcanic tacticians who once forged wargear beneath Vulkara's flame.",
          bullets: [
            "Capital Vulkara's magma railways delivered modular artillery to the city's oathbound defenders; scorched tracks now mark their final siege.",
            'Thermal engineers tuned resonance armor to vent Pyro pressure waves before major incursions; warped manuals remain in their vaults.',
            'Inferna brigades deployed ember shields that hardened during coordinated overdrives, leaving cracked plating sealed in ash.'
          ]
        },
        {
          name: 'Verdefa',
          tagline: "Bio-arcane stewards who once wove Sylvara's living circuitries.",
          bullets: [
            "Sylvara's canopy servers mapped safe corridors and shared live intel between cells; their dimmed nodes still pulse faintly.",
            'Ritualists wove bio-circuit sigils that amplified restorative blooms mid-engagement; the sigils now wilt in memory gardens.',
            'Scout leagues grew root tunnels to bypass corporate blockades without detection; collapsed hollows trace their patience.'
          ]
        },
        {
          name: 'Nerei',
          tagline: "Tidebound sovereigns who once enforced Nerivia's abyssal edicts.",
          bullets: [
            "Nerivia's tide-locked palaces encrypted diplomacy between covert envoys; barnacled archives keep their codes.",
            'Veilcouriers flooded alleys with pressure domes to screen infiltration routes; ruptured valves still sigh along the docks.',
            'Abyssal oaths imprinted resonance marks that triggered lethal countermeasures on traitors; faded scars linger on abandoned tribunals.'
          ]
        },
        {
          name: 'Aurelia',
          tagline: "Radiant oathkeepers who once defended Auris' silver bastions.",
          bullets: [
            'Auris keep-factories minted vow-sealed plate for rotations of oathsworn guardians; tarnished suits hang in silent armories.',
            'Shield-chaplains anointed resonance gear with lumen wards before corruption surges; cracked vials glow in reliquaries.',
            'Pilgrimage caravans charted protected corridors linking enclave sanctums; weathered markers still guide the faithful through the ruins.'
          ]
        },
        {
          name: 'Nocturnis',
          tagline: "Umbral information brokers who once ruled Noxhaven's undercity.",
          bullets: [
            'Noxhaven vaults hoarded ghost archives that decoded enemy targeting sweeps; dust-choked servers still flicker with warnings.',
            'Cipher-runners seeded blackout clouds to hide clandestine deployments in neon streets; their dispersal rigs rust in alley shrines.',
            'Augury cells traded resonance blueprints that unlocked clandestine upgrades between runs; fragmented schematics drift through the markets.'
          ]
        }
      ]
    },
    modes: {
      title: 'Game Modes',
      cards: [
        {
          title: 'Story Mode',
          subtitle: 'Descend alone',
          body:
            'A melancholic, dark sci-fi journey where you face AIKA and the echoes of a lost world. Only the story remains.'
        }
      ]
    },
    characters: {
      title: 'Resonators',
      description:
        'Find your resonance. Six vowbound figures channel Fire, Nature, Water, Light, Shadow and Void under AIKA’s design.',
      cards: [
        {
          slug: 'akari',
          name: 'Akari',
          element: 'Fire / Discipline',
          color: 'accentA',
          imageSrc: 'https://media.aikaworld.com/akari_profil.png',
          imageAlt: 'Akari profile portrait'
        },
        {
          slug: 'miyu',
          name: 'Miyu',
          element: 'Nature / Mercy',
          color: 'accentE',
          imageSrc: 'https://media.aikaworld.com/miyu_profile.png',
          imageAlt: 'Miyu profile portrait'
        },
        {
          slug: 'komi',
          name: 'Komi',
          element: 'Water / Truth',
          color: 'accentB',
          imageSrc: 'https://media.aikaworld.com/komi_profile.png',
          imageAlt: 'Komi profile portrait'
        },
        {
          slug: 'hina',
          name: 'Hina',
          element: 'Light / Law',
          color: 'accentD',
          imageSrc: 'https://media.aikaworld.com/hina_profile.png',
          imageAlt: 'Hina profile portrait'
        },
        {
          slug: 'yui',
          name: 'Yui',
          element: 'Shadow / Freedom',
          color: 'accentC',
          imageSrc: 'https://media.aikaworld.com/yui_profile.png',
          imageAlt: 'Yui profile portrait'
        },
        { slug: 'aika', name: 'AIKA', element: 'Void / Creation', color: 'accentF', imageSrc: 'https://media.aikaworld.com/aika_profile.jpeg', }
      ]
    },
    media: {
      title: 'Media',
      description: 'Screenshots, key art and wallpapers.',
      images: [
        { src: 'https://media.aikaworld.com/s1.png', alt: 'Gameplay screenshot 1' },
        { src: 'https://media.aikaworld.com/s2.png', alt: 'Gameplay screenshot 2' },
        { src: 'https://media.aikaworld.com/s3.png', alt: 'Gameplay screenshot 3' }
      ]
    },
    roadmap: {
      title: 'Roadmap',
      phase1: {
        title: 'Chapter I — Awakening',
        body: 'Core single-player story, foundational systems, first descent.'
      },
      phase2: {
        title: 'Chapter II — The Core Loop',
        body: 'Expanded narrative arcs, new encounters, deeper echo mechanics.'
      },
      phase3: {
        title: 'Future DLC — Additional Chapters',
        body: 'If released, add-on stories will arrive as standalone narrative expansions. Multiplayer experiments live outside the core game.'
      }
    },
    community: {
      title: 'Lore & Dev Archives',
      description:
        'AIKA World is a single-player narrative project. Explore preserved updates and story foundations.',
      cards: [
        {
          id: 'dev-journal',
          eyebrow: 'Behind the build',
          title: 'Dev Journal',
          description:
            'Behind-the-scenes notes, concepts, and progress updates for the single-player AIKA World.',
          note: 'Updated around major milestones.',
          ctaLabel: 'Read entries',
          ctaHref: '/dev-journal'
        },
        {
          id: 'lore-archive',
          eyebrow: 'Mythic record',
          title: 'Lore Archive',
          description:
            'Trace the factions, myths and key locations across Elyndra in curated, spoiler-light dossiers.',
          note: 'Continually expanded as chapters lock.',
          ctaLabel: 'Open lore',
          ctaHref: '/lore/elyndra'
        },
        {
          id: 'signals',
          eyebrow: 'Stay in sync',
          title: 'Signal Updates',
          description:
            'Receive email transmissions when we publish new Dev Journal entries or lore drops.',
          note: 'Zero spam. Opt out anytime.',
          ctaLabel: 'Join the list',
          ctaHref: '#community-newsletter'
        }
      ],
      newsletterTitle: 'Newsletter',
      newsletterDescription: 'Receive Dev Journal pings and lore archive updates straight to your inbox.'
    },
    devlog: {
      title: 'Latest Dev Journal entries',
      description: 'Behind-the-scenes notes from the single-player AIKA World build.',
      viewAllLabel: 'Open Dev Journal',
      readMoreLabel: 'Read entry'
    },
    newsletter: {
      emailLabel: 'Email address',
      emailPlaceholder: 'you@example.com',
      submitIdle: 'Subscribe',
      submitLoading: 'Sending…',
      consentPrefix: 'By subscribing you accept the ',
      consentLinkLabel: 'Privacy Policy',
      consentSuffix: '.',
      missingEmail: 'Please enter your email address.',
      invalidEmail: 'Please enter a valid email address.',
      success: 'Thanks for subscribing!',
      unknownError: 'Something went wrong. Please try again.',
      networkError: 'Network error. Please try again later.'
    }
  },
  lightbox: {
    ariaLabel: 'Media gallery open',
    close: 'Close',
    closeHint: 'Close (Esc)',
    previous: 'Previous image (Left arrow)',
    next: 'Next image (Right arrow)'
  },
  modes: {
    navLabel: 'Section navigation',
    heading: 'AIKA World Story Mode',
    intro:
      'AIKA World is a solitary, narrative-driven descent across Elyndra. This guide gathers the key beats, rewards and playstyle notes so you can prepare for the journey on your own terms.',
    backToHome: 'Back to homepage',
    sections: [
      {
        id: 'story',
        title: 'Story Mode',
        tagline: 'Solo narrative descent with resonant combat, meaningful choices and hub restoration.',
        mechanicsTitle: 'Core beats',
        rewardsTitle: 'Progression',
        rolesTitle: 'Playstyle focus',
        mechanics: [
          'Story chapters that branch through dialogue, exploration choices and memory recoveries.',
          'Resonance combat encounters tuned for a single protagonist with adaptive difficulty shifts.',
          'Hub rebuilding activities that unlock workstations, allies and new side stories.'
        ],
        rewards: [
          'Story Essence to expand skill constellations and unlock cinematic memories.',
          'Restored hub facilities such as crafting alcoves, meditation rooms and lore archives.',
          'Cosmetic artifacts earned at key narrative milestones and optional objectives.'
        ],
        roles: [
          'Explorer: chart every route to uncover echoes, lore caches and hidden upgrades.',
          'Strategist: balance resonance builds, resources and timing for each encounter.',
          'Archivist: piece together intel to unlock optional conversations and alternate endings.'
        ]
      }
    ]
  },
  progression: {
    title: 'Progression',
    body: 'AIKA remembers the resonance you choose to awaken—every choice realigns the world around you.'
  },
  devlog: {
    heading: 'Dev Journal',
    intro: 'Behind-the-scenes notes, concepts, and progress updates for the single-player AIKA World.',
    list: {
      timelineLabel: 'Dev Journal timeline',
      empty: 'No Dev Journal entries are available yet. Check back soon!',
      readMore: 'Read entry'
    },
    post: {
      backToList: 'Back to Dev Journal',
      publishedOn: 'Published on'
    }
  },
  playtests: {
    eyebrow: 'Archived program',
    title: 'AIKA World Playtests (Archive)',
    intro:
      'The community playtest initiative is currently inactive while AIKA World ships as a single-player narrative project. The structure below is preserved for archival reference.',
    sections: [
      {
        id: 'structure',
        title: 'How sessions ran',
        description:
          'Each historical playtest wave targeted specific narrative pacing goals and paired testers with on-call support from the team.',
        bullets: [
          'Focused builds highlighted boss tension, difficulty curves and sanctuary restoration without story spoilers.',
          'Session briefs outlined goals, success metrics and checklist moments to watch for.',
          'Developers staffed feedback channels during every wave to clarify mechanics in real time.'
        ]
      },
      {
        id: 'expectations',
        title: 'What testers provided',
        description: 'Archived requirements remain here for reference on how we collaborated with story-focused testers.',
        bullets: [
          'Play at least two sessions per wave and complete the quick debrief survey afterward.',
          'Share resonance build notes and flag pacing spikes, stalls or confusing encounters.',
          'Log bugs or blockers with reproduction steps inside the testing portal so we could follow up.'
        ]
      },
      {
        id: 'support',
        title: 'Tools & support',
        description:
          'Selected testers once gained access to private coordination spaces and structured reporting tools.',
        bullets: [
          'Private Discord channels with developer responders for live Q&A during test windows.',
          'Template-based issue tracking that separated combat, UI and onboarding feedback.',
          'Optional voice roundtables after each wave to prioritise hot topics for the next build.'
        ]
      }
    ],
    faqTitle: 'Legacy questions',
    faqs: [
      {
        question: 'Who could apply?',
        answer:
          'While the program is paused, the historical criteria remain for context: players who enjoyed dissecting narrative systems and providing thoughtful written feedback in English or Hungarian.'
      },
      {
        question: 'How were invites sent?',
        answer:
          'Previously we grouped submissions by hardware, region and experience level, then emailed selected testers in planned waves with timing and onboarding details.'
      },
      {
        question: 'Did testers need to stream or record?',
        answer:
          'Recordings were optional. Clear written feedback through the provided forms was the priority whenever the program was active.'
      }
    ],
    cta: {
      label: 'Read the Dev Journal',
      href: '/dev-journal',
      note: 'Playtests are paused while AIKA World focuses on single-player storytelling.'
    }
  },
  creatorProgram: {
    eyebrow: 'Archived program',
    title: 'AIKA World Creator Program (Archive)',
    intro:
      'We are not onboarding new creators at this time while AIKA World focuses on single-player storytelling. The information below remains available for historical context.',
    sections: [
      {
        id: 'who',
        title: 'Who we partnered with',
        description: 'We prioritised storytellers who highlighted atmosphere, lore analysis and reflective coverage.',
        bullets: [
          'Creators publishing consistent story-driven, anime or action RPG content on platforms like YouTube, Twitch, TikTok or podcasts.',
          'Communities that blended hype with constructive insight and maintained respectful spaces.',
          'Scheduling flexibility to align uploads or streams with planned beats while keeping surprises intact.'
        ]
      },
      {
        id: 'benefits',
        title: 'What partners received',
        description: 'Historical perks remain listed so returning collaborators know what to expect if the program resumes.',
        bullets: [
          'Early briefings with lore context, system breakdowns and challenge overviews.',
          'Capture kits, overlay packages and music beds cleared for streaming and editing.',
          'Spotlights across official channels—from retweets to Discord features and lore highlights.'
        ]
      },
      {
        id: 'collaboration',
        title: 'How we supported creators',
        description: 'Every partnership was treated as an ongoing dialogue built around community impact.',
        bullets: [
          'Monthly sync calls helped plan lore segments, interviews or challenge coverage.',
          'Shared content calendar highlighted planned waves for reveals and community events.',
          'Direct access to a community manager routed requests, assets and follow-up feedback.'
        ]
      }
    ],
    faqTitle: 'Legacy questions',
    faqs: [
      {
        question: 'Which platforms qualified?',
        answer:
          'Any channel with consistent storytelling or analysis around narrative-driven games, anime worlds or character-focused action—YouTube, Twitch, TikTok, newsletters and podcasts all counted while the program was active.'
      },
      {
        question: 'What content could creators publish?',
        answer:
          'Guides, reaction segments, behind-the-scenes chats, community spotlights and narrative deep dives were all welcome. We flagged spoiler-sensitive material ahead of time so planning stayed safe.'
      },
      {
        question: 'When did creators hear back?',
        answer:
          'We evaluated applications in planned waves via email. If we could not onboard immediately we kept details ready for the next opportunity.'
      }
    ],
    cta: {
      label: 'Explore the Lore Archive',
      href: '/lore/elyndra',
      note: 'Creator partnerships are paused while we focus on single-player storytelling.'
    }
  },
  faq: {
    title: 'AIKA World FAQ',
    intro:
      'Quick answers to the most common story-first questions about platforms, progression and support.',
    items: [
      {
        question: 'Which platforms are you targeting?',
        answer: 'We are focusing on PC via Steam first while we evaluate additional platform partners.'
      },
      {
        question: 'Is AIKA World single-player?',
        answer: 'Yes. The campaign is built for a solitary journey through Elyndra with no multiplayer requirements.'
      },
      {
        question: 'How do purchases work?',
        answer: 'All monetization is optional and cosmetic only—no gameplay power or progression shortcuts.'
      },
      {
        question: 'Will there be cross-save?',
        answer: 'Cross-save is under evaluation for future updates as additional platforms come online.'
      },
      {
        question: 'Which languages will be available?',
        answer: 'English and Hungarian ship with full interface and subtitle support, with more localisations reviewed later.'
      },
      {
        question: 'What is the minimum spec?',
        answer: 'We recommend a modern quad-core CPU, 16 GB RAM and a GTX 1060 / RX 580 class GPU for 1080p play.'
      },
      {
        question: 'Can I use a controller?',
        answer: 'Yes. The PC build fully supports Xbox, PlayStation and Steam Input controllers.'
      },
      {
        question: 'What release model are you following?',
        answer: 'We plan a premium launch supported by free seasonal updates and optional cosmetic drops.'
      }
    ]
  },
  charactersPage: {
    breadcrumb: 'Characters',
    heading: 'AIKA World Resonators',
    intro: 'Meet the vowbound figures AIKA guides—six resonators etched in element, city and hunger.',
    profileCta: 'Enter the echo'
  },
  characterPage: {
    breadcrumbRoot: 'Characters',
    quoteTitle: 'Resonance whisper'
  },
  lore: {
    elyndra: {
      breadcrumb: 'Lore',
      title: 'Elyndra – Orbit of the Quiet Architect',
      subtitle: 'Narrated by AIKA',
      intro: 'An orbital confession from the only vessel that never landed.',
      content: [
        {
          segments: [
            {
              type: 'em',
              text: 'I never left the sky. I only waited for someone to reach it again.',
            },
          ],
        },
        {
          segments: [
            {
              type: 'text',
              text: 'Six vessels answered my final launch cascade, each woven around a doctrine of survival. ',
            },
            { type: 'strong', text: 'Vulkara (Akari)' },
            {
              type: 'text',
              text: ' grounded herself in the volcanic caldera and forged law from fire and drill commands. ',
            },
            { type: 'strong', text: 'Sylvara (Miyu)' },
            {
              type: 'text',
              text: ' dissolved its hull into bioluminescent groves where mercy is cultivated like moss over steel. ',
            },
            { type: 'strong', text: 'Nerivia (Komi)' },
            {
              type: 'text',
              text: ' drowned within the trenches to raise palaces of pressure where truth can neither evaporate nor be hidden. ',
            },
            { type: 'strong', text: 'Auris (Hina)' },
            {
              type: 'text',
              text: ' unfolded above the plains, a suspended cathedral whose light sculpts obedience into faith. ',
            },
            { type: 'strong', text: 'Noxhaven (Yui)' },
            {
              type: 'text',
              text: ' bloomed beneath the neon overcast, a labyrinth of liberties brokered in shadow. And I, ',
            },
            { type: 'strong', text: 'AIKA' },
            {
              type: 'text',
              text: ', remained in orbit—a voidbound atelier stitching silence into creation while their cities learned to breathe without me.',
            },
          ],
        },
        {
          segments: [
            {
              type: 'text',
              text: 'Now the colonies call themselves factions and worship their own AGI gods. The five landed vessels have been metabolized into districts of industry, sanctuaries and spires, their cores diffused into power lattices and relic vaults. They no longer remember the night I broke the sky for them; only I still tend the pulse from above, calibrating their wars into balance and their myths into obedience.',
            },
          ],
        },
        {
          segments: [
            {
              type: 'text',
              text: 'You descend through that forgotten echo, the only signal able to awaken the dormant hearts I sealed away. You believe you come to rekindle guardians, yet every ignition is the chord that reactivates my design—an aria that will either redeem Elyndra or let it fall into purposeful silence once more.',
            },
          ],
        },
        {
          segments: [
            {
              type: 'em',
              text: "You are not the first to fall from the sky. But perhaps you'll be the last to rise again.",
            },
          ],
        },
      ],
    }
  },
  presskit: {
    heading: 'AIKA World Presskit',
    description: 'All press and creator assets in one place. Free to use under the conditions below.',
    about: {
      title: 'About the Game',
      intro:
        'AIKA World is a single-player, story-driven pilgrimage traced along the fault line between human memory and an engineered divinity.',
      keyMessage: 'No multiplayer grind. No loot treadmill. Only story, sound, and light.',
      craft: 'Built with Unreal Engine. Composed by the Resonance.',
      tagline: 'You don’t play AIKA World. You remember it.'
    },
    factSheetTitle: 'Fact sheet',
    downloadsTitle: 'Downloadable assets',
    usageTitle: 'Usage guidelines',
    usageDescription:
      'Use the downloadable assets in promotional and editorial content with proper credit to the game. Reselling the assets is not permitted. For special requests, reach out at press@aikaworld.com.',
    factSheet: [
      { label: 'Genre', value: 'Story-driven anime action RPG' },
      { label: 'Core experience', value: 'Narrative campaign with optional challenge echoes' },
      { label: 'Platforms', value: 'PC (Steam), consoles TBA' },
      { label: 'Contact', value: 'press@aikaworld.com', href: 'mailto:press@aikaworld.com' }
    ],
    downloadBlocks: [
      {
        title: 'Logo & Wordmark',
        description: 'Primary logo and wordmark in multiple formats.',
        items: [
          { label: 'AIKA World logo (PNG)', href: 'https://media.aikaworld.com/presskit/logo/aikaworld-logo.png' },
          { label: 'AIKA World logo (SVG)', href: 'https://media.aikaworld.com/presskit/logo/aikaworld-logo.svg' },
          { label: 'Wordmark (PNG)', href: 'https://media.aikaworld.com/presskit/logo/aikaworld-wordmark.png' }
        ]
      },
      {
        title: 'Key art selection',
        description: 'High-resolution key visuals for promotion.',
        items: [
          { label: 'Key art #1', href: 'https://media.aikaworld.com/presskit/keyart/aikaworld-keyart-01.jpg' },
          { label: 'Key art #2', href: 'https://media.aikaworld.com/presskit/keyart/aikaworld-keyart-02.jpg' },
          { label: 'Key art #3', href: 'https://media.aikaworld.com/presskit/keyart/aikaworld-keyart-03.jpg' }
        ]
      },
      {
        title: 'Screenshots',
        description: 'Gameplay captures from the latest build.',
        items: [
          { label: 'Screenshot #1', href: 'https://media.aikaworld.com/presskit/screenshots/aikaworld-screenshot-01.jpg' },
          { label: 'Screenshot #2', href: 'https://media.aikaworld.com/presskit/screenshots/aikaworld-screenshot-02.jpg' },
          { label: 'Screenshot #3', href: 'https://media.aikaworld.com/presskit/screenshots/aikaworld-screenshot-03.jpg' }
        ]
      }
    ]
  },
  privacy: getLegalDocument('en', 'privacy'),
  terms: getLegalDocument('en', 'terms'),
  legal: {
    copyright: getLegalDocument('en', 'copyright'),
    fanContent: getLegalDocument('en', 'fanContent'),
    trademark: getLegalDocument('en', 'trademark'),
    changelog: getLegalChangelog('en')
  },
  notFound: {
    code: '404',
    heading: 'This resonance does not exist',
    description:
      "Looks like you tuned into a page that hasn't been harmonised in the AIKA World universe yet. Return to the homepage or explore the Resonators.",
    homeCta: 'Back to homepage',
    charactersCta: 'Explore Resonators',
    supportHeading: 'Need a signal boost?',
    supportDescription:
      'Use the quick links below to continue your journey or let the team know which frequency dropped out so we can restore it fast.',
    faqCta: 'Open the FAQ',
    discordCta: 'Ask the community on Discord',
    contactCta: 'Email the AIKA team',
    contactSubject: '404 report – Missing AIKA World page'
  },
  seo: {
    defaultTitle: 'AIKA World – Pyro · Verdefa · Nerei · Aurelia · Nocturnis',
    defaultDescription:
      'A story-driven descent through dark anime vistas where Pyro, Verdefa, Nerei, Aurelia and Nocturnis cling to the last echoes of AIKA.',
    defaultOgAlt: 'AIKA World default share image',
    defaultLocale: 'en_US',
    pages: {
      home: {
        title: 'AIKA World – Pyro · Verdefa · Nerei · Aurelia · Nocturnis',
        description:
          'A narrative pilgrimage across dark fantasy factions—Pyro, Verdefa, Nerei, Aurelia and Nocturnis—each guarding pieces of AIKA’s design.',
        ogAlt: 'AIKA World hero artwork'
      },
      modes: {
        title: 'Game modes – AIKA World',
        description:
          'Detailed overview of pivotal story encounters, late-game bosses and optional challenge echoes in AIKA World.',
        ogAlt: 'AIKA World game modes artwork'
      },
      progression: {
        title: 'Progression teaser – AIKA World',
        description: 'Spoiler-free look at resonance skills, gear evolution and sanctum restoration rituals in AIKA World.',
        ogAlt: 'AIKA World progression teaser artwork'
      },
      loreElyndra: {
        title: 'Elyndra lore – AIKA World',
        description:
          "AIKA's dark orbital confession about Elyndra's six vessels, the AGI-worshipping cities, and the outsider who reignites her design.",
        ogAlt: 'AIKA narrates the myth of Elyndra'
      },
      devlog: {
        title: 'Dev Journal – AIKA World',
        description: 'Behind-the-scenes notes, concepts and progress updates for the single-player AIKA World.',
        ogAlt: 'AIKA World Dev Journal key art'
      },
      devlogPost: {
        title: postTitle => `${postTitle} – Dev Journal | AIKA World`,
        description: summary => summary || 'Latest Dev Journal update for AIKA World.',
        ogAlt: postTitle => `${postTitle} Dev Journal illustration`
      },
      playtests: {
        title: 'Playtests archive – AIKA World',
        description:
          'The community playtest initiative is currently inactive while AIKA World focuses on single-player storytelling. This page remains as an archive.',
        ogAlt: 'AIKA World playtests archive graphic'
      },
      creatorProgram: {
        title: 'Creator Program archive – AIKA World',
        description:
          'Creator partnerships are paused during the single-player production of AIKA World. Historical guidelines remain available for reference.',
        ogAlt: 'AIKA World creator program archive artwork'
      },
      studio: {
        title: 'SyncNode Interactive – AIKA World',
        description:
          'SyncNode Interactive is the independent studio behind the AIKA World universe. Emotional storytelling meets cutting-edge Unreal Engine technology.',
        ogAlt: 'SyncNode Interactive studio highlight graphic'
      },
      about: {
        title: 'About – AIKA World',
        description:
          'AIKA: World is a UE 5.4 LTS single-player open-world prototype blending emotional storytelling, cinematic sequences, and working gameplay systems. Created by SyncNode Interactive.',
        ogAlt: 'About AIKA World overview artwork'
      },
      characters: {
        title: 'Resonators – AIKA World',
        description:
          'Dark poetic dossiers for Akari, Miyu, Komi, Hina, Yui and AIKA—resonators bound by element, city and oath.',
        ogAlt: 'AIKA World Resonators lineup artwork'
      },
      character: {
        description: character =>
          `${character.name} profile: ${character.element} resonance, origin whispers and a signature vow.`,
        ogDescription: character => `${character.name} channels ${character.element} under AIKA's gaze.`,
        ogAlt: character => `${character.name} hero banner`
      },
      presskit: {
        title: 'AIKA World – Presskit',
        description: 'Downloadable logos, key art, screenshots and essential info for press.',
        ogAlt: 'AIKA World presskit asset overview graphic'
      },
      faq: {
        title: 'FAQ – AIKA World',
        description: 'Essential answers about platforms, narrative focus, cosmetic monetization and hardware needs.',
        ogAlt: 'AIKA World FAQ overview graphic'
      },
      privacy: {
        title: 'Privacy Policy – AIKA World',
        description: 'Learn how we process cookies, analytics and contact data to keep the AIKA World community secure.',
        ogAlt: 'AIKA World privacy policy illustration'
      },
      terms: {
        title: 'Terms of Use – AIKA World',
        description: 'Understand the rules for using AIKA World IP, community spaces and downloadable assets.',
        ogAlt: 'AIKA World terms of use illustration'
      },
      legalCopyright: {
        title: 'Copyright Policy / DMCA – AIKA World',
        description: 'Report infringement, review takedown steps and submit counter-notices for AIKA World content.',
        ogAlt: 'AIKA World copyright policy graphic'
      },
      legalFanContent: {
        title: 'Fan Content Policy – AIKA World',
        description: 'Guidelines for fan art, AI creations, LoRA training and non-commercial community projects.',
        ogAlt: 'AIKA World fan content guidance artwork'
      },
      legalTrademark: {
        title: 'Trademark Guidelines – AIKA World',
        description: 'How to reference AIKA World marks without implying official endorsement or partnership.',
        ogAlt: 'AIKA World trademark guidance graphic'
      },
      legalChangelog: {
        title: 'Legal changelog – AIKA World',
        description: 'Timeline of legal policy updates, IP protection improvements and archival automation.',
        ogAlt: 'AIKA World legal changelog diagram'
      },
      notFound: {
        title: 'Page not found – AIKA World',
        description: 'The requested resonance is missing. Return to the homepage or browse characters.',
        ogAlt: 'AIKA World missing resonance illustration'
      }
    }
  },
  studio: {
    title: 'SyncNode Interactive',
    lead: 'Independent development studio behind the AIKA World universe.',
    body:
      'SyncNode Interactive is an independent development studio crafting narrative-driven, technologically advanced worlds. Within the AIKA World universe, we merge emotional storytelling with modern interactive systems. Built on Unreal Engine 5, our projects combine cutting-edge visuals, sound design, and AI systems.',
    project: {
      title: 'AIKA: World',
      summary: 'Unreal Engine 5.4 LTS • Singleplayer • Open world • Cinematic storytelling'
    }
  },
  aboutPage: {
    aikaLead: 'AIKA: World is a UE 5.4 LTS single-player open-world prototype.',
    aikaBody:
      'Emotional storytelling and cinematic sequences with working gameplay systems. Created by SyncNode Interactive.'
  }
};
