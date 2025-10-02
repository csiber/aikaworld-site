import type { Dictionary } from '../types';
import { getLegalDocument, getLegalChangelog } from '../../legal/content';

export const enDictionary: Dictionary = {
  locale: 'en',
  header: {
    brand: 'AIKA WORLD',
    navLabel: 'Primary navigation',
    nav: {
      modes: 'Modes',
      characters: 'Characters',
      media: 'Media',
      roadmap: 'Roadmap',
      community: 'Community'
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
    legalHeading: 'Legal',
    legalLinks: [
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
      title: 'Co-op anime action RPG – Squad. Style. Progression.',
      highlight: 'Stylish Resonators, tactical synergy.',
      description:
        'Five Resonators mastering raid arenas and survival waves together. A dark anime world with dynamic combat and deep progression systems built for long-term squad growth.',
      wishlistCta: 'Wishlist on Steam',
      discordCta: 'Join Discord',
      subscribeCta: 'Subscribe',
      videoPosterAlt: 'AIKA World teaser poster'
    },
    modes: {
      title: 'Game Modes',
      cards: [
        {
          title: 'Raid Boss Arena',
          description: 'Brutal arenas, merciless bosses. Only synergy keeps you breathing.',
          points: ['Party-size scaling', 'Mechanics and multi-phase fights', 'Team roles'],
          linkLabel: 'View details',
          href: '/modes#raid'
        },
        {
          title: 'Infest Survival',
          description: 'Endless waves, gore and shredded limbs. Only the strongest endure.',
          points: ['Wave-based carnage', 'Checkpoint rewards', 'Meta progression: cosmetics & boosts'],
          linkLabel: 'View details',
          href: '/modes#infest'
        },
        {
          title: 'Story Mode',
          description:
            'Character-driven episodes, choice-based dialogue and slice-of-life downtime with your squad.',
          points: [
            'Episodic missions with new hub locations',
            'Reputation branches and multiple endings',
            'Co-op social decisions and light roleplay'
          ],
          linkLabel: 'View details',
          href: '/modes#story'
        }
      ]
    },
    characters: {
      title: 'Resonators',
      description: 'Pick your resonance. Each of the five girls excels at a different specialty.',
      cards: [
        { slug: 'akari', name: 'Akari', role: 'Fire', color: 'accentA' },
        { slug: 'komi', name: 'Komi', role: 'Water', color: 'accentB' },
        { slug: 'yui', name: 'Yui', role: 'Wind', color: 'accentC' },
        { slug: 'hina', name: 'Hina', role: 'Blade', color: 'accentD' },
        { slug: 'miyu', name: 'Miyu', role: 'Support', color: 'accentE' }
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
      phases: [
        {
          badge: 'v1 – Raid + Infest',
          title: 'Co-op PvE launch',
          description: 'Team-based boss hunts with cosmetic progression.'
        },
        {
          badge: 'v2 – Story Mode',
          title: 'Narrative arc',
          description: 'Slice-of-life tone, meaningful choices and branching scenes.'
        },
        {
          badge: 'v3 – Toward MMO',
          title: 'Shared-world upgrade',
          description: 'Social hub, factions and persistent community systems.'
        }
      ]
    },
    community: {
      title: 'Community & Newsletter',
      description: 'Join the Discord and sign up for playtest news.',
      discordCta: 'Join Discord',
      wishlistCta: 'Wishlist on Steam'
    },
    newsletter: {
      emailLabel: 'Email address',
      emailPlaceholder: 'you@example.com',
      submitIdle: 'Subscribe',
      submitLoading: 'Sending…',
      consent: 'By subscribing you accept the Privacy Policy.',
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
      'Immerse yourself in co-op challenges: the Raid Boss Arena rewards precision, Infest Survival celebrates adaptive endurance, and Story Mode deepens narrative bonds. Use these guides to prepare your squad for every mode.',
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
  charactersPage: {
    breadcrumb: 'Characters',
    heading: 'AIKA World Resonators',
    intro: "Get to know each lead character's abilities, roles and best practices before entering the raid arenas.",
    roleLabel: 'Role',
    elementLabel: 'Element',
    playstyleLabel: 'Playstyle',
    profileCta: 'Open profile'
  },
  characterPage: {
    breadcrumbRoot: 'Characters',
    archetypeTitle: 'Archetype',
    roleLabel: 'Role',
    elementLabel: 'Element',
    playstyleLabel: 'Playstyle',
    tipsTitle: 'Tip collection',
    loreTitle: 'Who she is',
    mentalityTitle: 'Mindset',
    likesTitle: 'Loves',
    dislikesTitle: 'Loathes',
    quoteTitle: 'Signature quote'
  },
  presskit: {
    heading: 'AIKA World Presskit',
    description: 'All press and creator assets in one place. Free to use under the conditions below.',
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
    charactersCta: 'Explore Resonators'
  },
  seo: {
    defaultTitle: 'AIKA World – Anime co-op action RPG',
    defaultDescription: 'Co-op raid arenas, dark anime visuals and deep progression systems with five unique Resonators.',
    defaultOgAlt: 'AIKA World default share image',
    defaultLocale: 'en_US',
    pages: {
      home: {
        title: 'AIKA World – Anime co-op action RPG',
        description: 'Co-op raid arenas, dark anime visuals and deep progression systems with five unique Resonators.',
        ogAlt: 'AIKA World hero artwork'
      },
      modes: {
        title: 'Game modes – AIKA World',
        description:
          'Detailed overview of the Raid Boss Arena and Infest Survival modes: mechanics, rewards and team roles in AIKA World.',
        ogAlt: 'AIKA World game modes artwork'
      },
      characters: {
        title: 'Resonators – AIKA World',
        description: 'Detailed profiles for Akari, Komi, Yui, Hina and Miyu from the world of AIKA.'
      },
      character: {
        description: character =>
          `${character.name} profile: ${character.role}, ${character.element} element, playstyle tips for raids.`,
        ogDescription: character => `${character.role} ${character.element} Resonator for your squad.`,
        ogAlt: character => `${character.name} hero banner`
      },
      presskit: {
        title: 'AIKA World – Presskit',
        description: 'Downloadable logos, key art, screenshots and essential info for press.'
      },
      privacy: {
        title: 'Privacy Policy – AIKA World',
        description: 'Learn how we process cookies, analytics and contact data to keep the AIKA World community secure.'
      },
      terms: {
        title: 'Terms of Use – AIKA World',
        description: 'Understand the rules for using AIKA World IP, community spaces and downloadable assets.'
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
        description: 'The requested resonance is missing. Return to the homepage or browse characters.'
      }
    }
  }
};
