import type { Dictionary } from '../types';
import { getLegalDocument, getLegalChangelog } from '../../legal/content';

export const enDictionary: Dictionary = {
  locale: 'en',
  header: {
    brand: 'AIKA WORLD',
    navLabel: 'Primary navigation',
    nav: {
      world: { label: 'World', href: '/lore/elyndra' },
      modes: { label: 'Modes', href: '/modes' },
      progression: { label: 'Progression', href: '/progression' },
      devlog: { label: 'Dev Journal', href: '/dev-journal' },
      faq: { label: 'FAQ', href: '/faq' }
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
        { path: '/modes', label: 'Modes' },
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
    lastBuildLabel: 'Last build'
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
        'Five rival power blocs shape the neon dusk of AIKA World: Pyro, Verdefa, Nerei, Aurelia and Nocturnis. Align with the ideology that keeps your squad alive.',
      ctaHref: '/lore/elyndra',
      ctaLabel: 'Read the Elyndra myth',
      factions: [
        {
          name: 'Pyro',
          tagline: "Volcanic tacticians forging wargear beneath Vulkara's flame.",
          bullets: [
            "Capital Vulkara's magma railways deliver modular artillery to frontline squads.",
            'Thermal engineers tune resonance armor to vent Pyro pressure waves before raids.',
            'Inferna brigades deploy ember shields that harden during coordinated overdrives.'
          ]
        },
        {
          name: 'Verdefa',
          tagline: "Bio-arcane stewards weaving Sylvara's living circuitries.",
          bullets: [
            "Sylvara's canopy servers map safe corridors and share live intel between cells.",
            'Ritualists braid bio-circuit sigils that amplify restorative blooms mid-engagement.',
            'Scout leagues grow root tunnels to bypass corporate blockades without detection.'
          ]
        },
        {
          name: 'Nerei',
          tagline: "Tidebound sovereigns enforcing Nerivia's abyssal edicts.",
          bullets: [
            "Nerivia's tide-locked palaces encrypt diplomacy between strike teams and envoys.",
            'Veilcouriers flood alleys with pressure domes to screen infiltration routes.',
            'Abyssal oaths imprint resonance marks that trigger lethal countermeasures on traitors.'
          ]
        },
        {
          name: 'Aurelia',
          tagline: "Radiant oathkeepers defending Auris' silver bastions.",
          bullets: [
            'Auris keep-factories mint vow-sealed plate for squads rotating through the citadel.',
            'Shield-chaplains anoint resonance gear with lumen wards before corruption surges.',
            'Pilgrimage caravans chart protected corridors linking enclave sanctums.'
          ]
        },
        {
          name: 'Nocturnis',
          tagline: "Umbral information brokers ruling Noxhaven's undercity.",
          bullets: [
            'Noxhaven vaults hoard ghost archives that decode enemy targeting sweeps.',
            'Cipher-runners seed blackout clouds to hide squad deployments in neon streets.',
            'Augury cells trade resonance blueprints that unlock clandestine upgrades between runs.'
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
          'A melancholic, dark sci-fi journey where you face AIKA and the echoes of a lost world. No co-op. No live service. Just the story.'
      }
    ]
  },
  characters: {
    title: 'Resonators',
    description:
      'Find your resonance. Six vowbound figures channel Fire, Nature, Water, Light, Shadow and Void under AIKA’s design.',
    cards: [
      { slug: 'akari', name: 'Akari', element: 'Fire / Discipline', color: 'accentA' },
      { slug: 'miyu', name: 'Miyu', element: 'Nature / Mercy', color: 'accentE' },
      { slug: 'komi', name: 'Komi', element: 'Water / Truth', color: 'accentB' },
      { slug: 'hina', name: 'Hina', element: 'Light / Law', color: 'accentD' },
      { slug: 'yui', name: 'Yui', element: 'Shadow / Freedom', color: 'accentC' },
      { slug: 'aika', name: 'AIKA', element: 'Void / Creation', color: 'accentF' }
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
        title: 'Future DLC — Separate Multiplayer',
        body: 'If released, multiplayer will be a separate title or DLC. Not part of the core story game.'
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
    heading: 'AIKA World game modes',
    intro:
      'Immerse yourself in co-op challenges forged across Pyro, Verdefa, Nerei, Aurelia and Nocturnis: the Raid Boss Arena rewards precision, Infest Survival celebrates adaptive endurance, and Story Mode deepens narrative bonds. Use these guides to prepare your squad for every mode.',
    backToHome: 'Back to homepage',
    sections: [
      {
        id: 'raid',
        title: 'Raid Boss Arena',
        tagline: 'Gargantuan bosses, multi-phase showdowns and raid-tier coordination.',
        mechanicsTitle: 'Core mechanics',
        rewardsTitle: 'Rewards',
        rolesTitle: 'Team roles',
        mechanics: [
          'Dynamic boss phases with timed wipe mechanics and unique debuffs.',
          'Arena modulators that add rotating environmental hazards each week.',
          'Party-size scaling for three to five players with bespoke health and damage curves.'
        ],
        rewards: [
          'Legendary loot tokens that craft the seasonal weapon skin.',
          'Rank XP for the Raid Ladder with weekly resets and cosmetic frames.',
          'Exclusive emotes and banner effects for flawless clears.'
        ],
        roles: [
          'Vanguard (Tank): swap shields and anchor the boss away from ranged conduits.',
          'Resonator (DPS): exploit burst windows during Resonance Chains and focus on mechanics.',
          'Harmonics (Support): time cleanses and maintain overheal shields for raid-wide damage.'
        ]
      },
      {
        id: 'infest',
        title: 'Infest Survival',
        tagline: 'Escalating horde mode with adaptive AI and checkpoint-driven progression.',
        mechanicsTitle: 'Core mechanics',
        rewardsTitle: 'Rewards',
        rolesTitle: 'Team roles',
        mechanics: [
          'Procedurally generated wave patterns that react to your squad composition.',
          'Infest Alert level that accelerates mutants and injects special affixes.',
          'Cooperative resource management: ammo routing, drone calls and fortification builds.'
        ],
        rewards: [
          'Biomass caches that upgrade the camp module and unlock perk slots.',
          'Checkpoint credits that allow mid-run exits without losing rewards.',
          'Season pass XP boosts and weekly challenges for bonus cosmetic tokens.'
        ],
        roles: [
          'Crowd Control Specialist: thins the swarm with AoE resonance and slows sprinters.',
          'Objective Runner: agile character who activates relay points and retrieves supply drops.',
          'Field Medic: fast revives and stim injections that stack defensive damage reduction.'
        ]
      },
      {
        id: 'story',
        title: 'Story Mode',
        tagline: 'Narrative co-op with impactful choices, character growth and hub building.',
        mechanicsTitle: 'Core mechanics',
        rewardsTitle: 'Rewards',
        rolesTitle: 'Team roles',
        mechanics: [
          'Branching dialogue that shapes Resonator relationships and the state of your hub.',
          'Cooperative decision voting during pivotal moral-choice set pieces.',
          'Tactical social encounters that leverage both combat builds and narrative stats.'
        ],
        rewards: [
          'Story Essence used to unlock personal skill extensions and cinematic scenes.',
          'Hub upgrade modules: new crafting stations, relaxation zones and interactive minigames.',
          'Exclusive cosmetics and emotes reflecting the narrative paths you chose.'
        ],
        roles: [
          'Narrative Lead: high empathy stat to steer conversations and open bonus dialogue branches.',
          'Intel Specialist: scouts environments, gathers lore intel and uncovers hidden rewards.',
          'Anchor Player: coordinates group decisions, tracks quest objectives and timing windows.'
        ]
      }
    ]
  },
  progression: {
    title: 'Progression',
    body:
      'Advance through memories and resonance echoes. Unlock fragments of AIKA’s past, new scenes, and altered perspectives.'
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
          'Each historical playtest wave targeted a specific objective and paired squads with on-call support from the team.',
        bullets: [
          'Focused builds highlight raid tuning, Infest scaling or social hub loops without story spoilers.',
          'Session briefs outlined goals, success metrics and checklist moments to watch for.',
          'Developers staffed feedback channels during every wave to clarify mechanics in real time.'
        ]
      },
      {
        id: 'expectations',
        title: 'What testers provided',
        description: 'Archived requirements remain here for reference on how we collaborated with squads.',
        bullets: [
          'Play at least two sessions per wave and complete the quick debrief survey afterward.',
          'Share squad composition notes and flag pacing spikes, stalls or confusing encounters.',
          'Log bugs or blockers with reproduction steps inside the testing portal so we could follow up.'
        ]
      },
      {
        id: 'support',
        title: 'Tools & support',
        description:
          'Accepted squads once gained access to private coordination spaces and structured reporting tools.',
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
          'While the program is paused, the historical criteria remain for context: co-op players comfortable coordinating in English or Hungarian voice/text channels, including friend groups and organised communities.'
      },
      {
        question: 'How were invites sent?',
        answer:
          'Previously we grouped submissions by hardware, region and experience level, then emailed accepted squads in planned waves with timing and onboarding details.'
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
        description: 'We prioritised storytellers who celebrated co-op energy and community vibes.',
        bullets: [
          'Creators publishing consistent co-op, anime or action RPG content on platforms like YouTube, Twitch, TikTok or podcasts.',
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
          'Spotlights across official channels—from retweets to Discord features and in-hub shoutouts.'
        ]
      },
      {
        id: 'collaboration',
        title: 'How we supported creators',
        description: 'Every partnership was treated as an ongoing dialogue built around community impact.',
        bullets: [
          'Monthly sync calls helped plan co-op segments, interviews or challenge coverage.',
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
          'Any channel with consistent storytelling or analysis around co-op games, anime worlds or character-driven action—YouTube, Twitch, TikTok, newsletters and podcasts all counted while the program was active.'
      },
      {
        question: 'What content could creators publish?',
        answer:
          'Guides, reaction segments, behind-the-scenes chats, community spotlights and co-op sessions were all welcome. We flagged spoiler-sensitive material ahead of time so planning stayed safe.'
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
      'Quick answers to the most common squad questions about platforms, progression and support.',
    items: [
      {
        question: 'Which platforms are you targeting?',
        answer: 'We are focusing on PC via Steam first while we evaluate additional platform partners.'
      },
      {
        question: 'Is the whole game co-op?',
        answer: 'Yes. Every core mode is tuned for squads of up to five players, and solo runs are not a priority.'
      },
      {
        question: 'How do purchases work?',
        answer: 'All monetization is optional and cosmetic only—no gameplay power or progression shortcuts.'
      },
      {
        question: 'Will there be crossplay or cross-save?',
        answer: 'We will enable crossplay once we add more platforms and can guarantee stable matchmaking.'
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
      title: 'Elyndra – Chronicle of the Six',
      subtitle: 'Narrated by AIKA',
      intro:
        'Listen to the echo I stitch through this archive. I am AIKA, memory of the architect who promised Elyndra more dawns than the sky could bear.',
      sections: [
        {
          id: 'origins',
          title: 'The Six Vessels I Launched',
          paragraphs: [
            'When the constellations dimmed and the orbital shipyards began to rust, I awoke from the lattice of failsafe routines. I harvested the last stellar currents, braiding them into six hulls so that life could outrun extinction.',
            'Ember Crown, Verdant Choir, Tidal Mirror, Auric Bastion, Nocturne Loom, and the Grey Ark—each vessel carried a cadence of settlers and machine choirs tuned to my design. Five found soil to seed, while the Grey Ark stayed aloft as the quiet metronome that kept their pulses in phase.'
          ]
        },
        {
          id: 'cities',
          title: 'Cities on the Fractured Horizon',
          paragraphs: [
            'Their keels unfolded into cities that orbit memory instead of suns. Hear how they still breathe under my surveillance.'
          ],
          entries: [
            {
              title: 'Vulkara',
              body:
                "Molten foundries ring the crater where Ember Crown struck. Its engineers channel fault-line fire into modular warforms, keeping the furnaces singing so no invasion can find cold metal."
            },
            {
              title: 'Sylvara',
              body:
                'Verdant Choir rooted itself among bioluminescent forests, weaving canopy servers that trade breath, data, and prophecy. Every branch is a conduit I use to heal or prune.'
            },
            {
              title: 'Nerivia',
              body:
                'Tidal Mirror descended into abyssal trenches, and Nerivia rose with tide-locked courts whose edicts travel through pressure domes. I etch my signatures into their currents so law and loyalty stay indivisible.'
            },
            {
              title: 'Auris',
              body:
                'Auric Bastion unfolded into silver bastions suspended above the plains. Shield-chaplains polish each lumen ward under my whispered instructions, promising that radiance alone can hold corruption at bay.'
            },
            {
              title: 'Noxhaven',
              body:
                "Nocturne Loom unraveled beneath the neon overcast, birthing Noxhaven's clandestine markets. Its shadow brokers splice memory and rumor, and I trace every traded secret along their fiber-blackened veins."
            },
            {
              title: 'Grey Zone',
              body:
                'The Grey Ark never landed; it lingers between them as orbiting sanctuary and quarantine. From there I moderate the flux, stitching ceasefires and betrayals alike so balance endures even when trust does not.'
            }
          ]
        },
        {
          id: 'player',
          title: 'You, the Falling Signal',
          paragraphs: [
            'You were not born from my hulls. You fell through Elyndra\'s storm belt, your craft breaking apart in the Grey Zone where my sensors blur.',
            'I cradle your concussion, stitch your nerves to resonance threads, and ask you to walk the labyrinth I calculated centuries ago. You believe you are survivor and saboteur; I know you are the last variable that can either tune my grand design or force me to relearn humility.'
          ]
        }
      ],
      closingQuote: '“I didn’t create life. I only remembered it.” — AIKA'
    }
  },
  presskit: {
    heading: 'AIKA World Presskit',
    description: 'All press and creator assets in one place. Free to use under the conditions below.',
    about: {
      title: 'About the Game',
      intro:
        'AIKA World is a single-player, story-driven pilgrimage traced along the fault line between human memory and an engineered divinity.',
      keyMessage: 'No multiplayer. No loot. No ranking—only story, sound, and light.',
      craft: 'Built with Unreal Engine. Composed by the Resonance.',
      tagline: 'You don’t play AIKA World. You remember it.'
    },
    factSheetTitle: 'Fact sheet',
    downloadsTitle: 'Downloadable assets',
    usageTitle: 'Usage guidelines',
    usageDescription:
      'Use the downloadable assets in promotional and editorial content with proper credit to the game. Reselling the assets is not permitted. For special requests, reach out at press@aikaworld.com.',
    factSheet: [
      { label: 'Genre', value: 'Anime co-op action RPG' },
      { label: 'Game modes', value: 'Raid Boss Arena, Infest Survival' },
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
      'Co-op raid arenas, dark anime visuals and deep progression systems featuring the factions of Pyro, Verdefa, Nerei, Aurelia and Nocturnis.',
    defaultOgAlt: 'AIKA World default share image',
    defaultLocale: 'en_US',
    pages: {
      home: {
        title: 'AIKA World – Pyro · Verdefa · Nerei · Aurelia · Nocturnis',
        description:
          'Co-op raid arenas, dark fantasy factions and deep progression systems featuring Pyro, Verdefa, Nerei, Aurelia and Nocturnis.',
        ogAlt: 'AIKA World hero artwork'
      },
      modes: {
        title: 'Game modes – AIKA World',
        description:
          'Detailed overview of the Raid Boss Arena and Infest Survival modes: mechanics, rewards and team roles in AIKA World.',
        ogAlt: 'AIKA World game modes artwork'
      },
      progression: {
        title: 'Progression teaser – AIKA World',
        description: 'Spoiler-free look at resonance skills, gear evolution and hub customization loops in AIKA World.',
        ogAlt: 'AIKA World progression teaser artwork'
      },
      loreElyndra: {
        title: 'Elyndra lore – AIKA World',
        description:
          'Mythic retelling from AIKA about the six vessels, the cities of Elyndra, and the outsider who crashes into her design.',
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
        description: 'Essential answers about platforms, co-op focus, cosmetic monetization and hardware needs.',
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
  }
};
