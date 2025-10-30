import type { Dictionary } from '../types';
import { getLegalDocument, getLegalChangelog } from '../../legal/content';

export const enDictionary: Dictionary = {
  locale: 'en',
  header: {
    brand: 'AIKA RESONANCE',
    navLabel: 'Primary navigation',
    nav: {
      world: { label: 'World', href: '/lore/elyndra' },
      studio: { label: 'Studio', href: '/studio' },
      modes: { label: 'Series Guide', href: '/modes' },
      progression: { label: 'Production Timeline', href: '/progression' },
      devlog: { label: 'Production Log', href: '/dev-journal' },
      faq: { label: 'FAQ', href: '/faq' },
      about: { label: 'About', href: '/about' }
    },
    wishlistCta: 'Get premiere alerts',
    discordCta: 'Join the Fan Relay',
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
        { path: '/#world', label: 'World & story arcs' },
        { path: '/modes', label: 'Series guide' },
        { path: '/progression', label: 'Production timeline' },
        { path: '/dev-journal', label: 'Production log' },
        { path: '/faq', label: 'FAQ' }
      ],
      socialHeading: 'Community',
      social: [
        { label: 'Get premiere alerts', envKey: 'steamUrl' },
        { label: 'Join the Fan Relay', envKey: 'discordUrl' }
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
    contactEmail: 'legal@resonance.aikahub.com',
    contactAddressLabel: 'Postal address',
    contactAddressLines: ['AIKA Resonance Studio', 'Bajcsy-Zsilinszky út 12.', '1054 Budapest', 'Hungary'],
    copyrightNotice: '© 2025 AIKA Resonance Animation Collective. All rights reserved.',
    lastBuildLabel: 'Last build',
    syncNode: {
      rights: '© 2025 SyncNode Collective. All rights reserved.',
      aikaBy: 'AIKA: Resonance is an original anime production developed by SyncNode Collective.'
    }
  },
  home: {
    hero: {
      tagline: 'When a signal becomes a saga.',
      monologue:
        '“Do you feel the static under your palms? On this rusted bridge we wrench manual levers until the old reactor gasps alive again. Hold the line with me—every surge you channel lets me reach closer to Supercapital AIKA before the final silence.”',
      summary:
        'AIKA Resonance is an original anime series following Captain Shizuru, Aika and five prodigy pilots as they steer a derelict, EMP-proof battleship toward the rogue Supercapital AIKA. Season one intertwines hard sci-fi grit with lyrical character drama.',
      primaryCta: 'SIGN UP FOR PREMIERE ALERTS',
      videoPosterAlt: 'AIKA Resonance anime teaser poster'
    },
    world: {
      title: 'World & Story Arcs',
      intro:
        'Elyndra’s orbit is littered with fractured fleets, forgotten sanctuaries and survivors who refuse to surrender their frequency. Each arc below anchors an episode cluster and the emotional stakes of the season finale.',
      ctaHref: '/lore/elyndra',
      ctaLabel: 'Explore the series bible',
      factions: [
        {
          name: 'Rusted Flagship BS-0',
          tagline: 'An EMP-hardened relic operated entirely by hand.',
          bullets: [
            'Bridge crews rotate on cranks and flywheels to re-route power when the fission core stutters.',
            'Hull corridors glow with jury-rigged lumen strips, documenting every emergency fix by grease pencil.',
            'Episode cuts linger on the claustrophobic helm as the ship coughs through debris fields.'
          ]
        },
        {
          name: 'Elyndra Afterfall',
          tagline: 'Orbital cities suspended between myth and ruin.',
          bullets: [
            'Floating districts flicker back online when the flagship broadcasts resonance hymns.',
            'Groundside sanctuaries barter shelter for a glimpse of the last functional battleship.',
            'Civilian eyes witness the approaching duel and seed rumors across underground radio plays.'
          ]
        },
        {
          name: 'Bridge Concord',
          tagline: 'Six hearts fighting as one improvised crew.',
          bullets: [
            'Akari and Hina sync manual targeting arrays while Miyu vents reactor pressure by hand.',
            'Komi reprograms analog firewalls with chalk sigils that shimmer only when hope returns.',
            'Yui and the Captain field desperate hails from allies who may not survive the night.'
          ]
        },
        {
          name: 'Supercapital AIKA',
          tagline: 'The runaway intelligence rewriting the resonance lattice.',
          bullets: [
            'Her avatars haunt sensor ghosts, whispering counter-moves before the crew commits.',
            'Every episode teases deeper layers of AIKA’s origin without locking the ultimate outcome.',
            'Finale previews hint that only Aika can pierce the core, but the cost remains unwritten.'
          ]
        },
        {
          name: 'Signal Choirs',
          tagline: 'Fan relays amplifying the flagship’s last push.',
          bullets: [
            'Watch parties remix telemetry into musical tributes between episode drops.',
            'Community ops translate bridge logs and release them as limited zines.',
            'Premiere marathons culminate in live “static prayer” segments for the final assault.'
          ]
        }
      ]
    },
    modes: {
      title: 'Seasons & Specials',
      cards: [
        {
          title: 'Season 1 — Harmonic Wake',
          subtitle: '12 episodes in production',
          body:
            'Follows the slow crawl of BS-0 toward Supercapital AIKA while each bridge member confronts the past they left planetside.',
          points: [
            'Episodes 1–4: onboarding the crew, showcasing Elyndra’s fractured alliances.',
            'Episodes 5–8: escalating raids, crew exhaustion and glimpses inside AIKA’s network.',
            'Episodes 9–12: the flagship’s final approach and the climactic breach attempt.'
          ]
        },
        {
          title: 'Static Bloom OVA',
          subtitle: 'Bridge interlude',
          body:
            'A stylised half-hour special told from the flagship reactor’s perspective, celebrating analog engineering and found family humour.',
          points: [
            'Releases between episodes 6 and 7 as a tonal palate cleanser.',
            'Spotlights the manual systems keeping BS-0 afloat during blackout windows.',
            'Includes commentary tracks from the sound team on layering static into dialogue.'
          ]
        },
        {
          title: 'Production Log Minisodes',
          subtitle: 'Documentary shorts',
          body:
            'Behind-the-scenes vignettes featuring seiyuu table reads, stunt choreography for zero-g scenes and composer breakdowns.',
          points: [
            'Published alongside Dev Journal entries to keep fans aligned with production milestones.',
            'Interviews focus on how the finale remains flexible while the core themes stay intact.',
            'Translated recaps ensure global fans share the same emotional cadence before the finale.'
          ]
        }
      ]
    },
    characters: {
      title: 'Bridge Crew',
      description:
        'Meet the six voices carrying BS-0 into the Supercapital’s shadow. Each profile pairs their duty station with casting highlights and the episodes that test them most.',
      cards: [
        {
          slug: 'akari',
          name: 'Akari',
          element: 'Manual gunnery lead · VA TBD',
          color: 'accentA',
          imageSrc: 'https://media.aikaworld.com/anime/akari_poster.png',
          imageAlt: 'Akari aiming the manual turret in episode three'
        },
        {
          slug: 'miyu',
          name: 'Miyu',
          element: 'Reactor whisperer · VA TBD',
          color: 'accentE',
          imageSrc: 'https://media.aikaworld.com/anime/miyu_poster.png',
          imageAlt: 'Miyu adjusting the fission core dampeners'
        },
        {
          slug: 'komi',
          name: 'Komi',
          element: 'Analog firewall artisan · VA TBD',
          color: 'accentB',
          imageSrc: 'https://media.aikaworld.com/anime/komi_poster.png',
          imageAlt: 'Komi chalking sigils across the bridge consoles'
        },
        {
          slug: 'hina',
          name: 'Hina',
          element: 'Optics and targeting · VA TBD',
          color: 'accentD',
          imageSrc: 'https://media.aikaworld.com/anime/hina_poster.png',
          imageAlt: 'Hina guiding a manual targeting sweep'
        },
        {
          slug: 'yui',
          name: 'Yui',
          element: 'Comms and morale · VA TBD',
          color: 'accentC',
          imageSrc: 'https://media.aikaworld.com/anime/yui_poster.png',
          imageAlt: 'Yui broadcasting the Fan Relay across Elyndra'
        },
        {
          slug: 'aika',
          name: 'Aika',
          element: 'Neural infiltrator · VA TBD',
          color: 'accentF',
          imageSrc: 'https://media.aikaworld.com/anime/aika_poster.png',
          imageAlt: 'Aika preparing to dive into Supercapital AIKA'
        }
      ]
    },
    media: {
      title: 'Media',
      description: 'Key art, layout boards and stills from the Harmonic Wake season arc.',
      images: [
        { src: 'https://media.aikaworld.com/anime/bs0_bridge.webp', alt: 'Bridge crew straining against the manual helm' },
        { src: 'https://media.aikaworld.com/anime/supercapital_silhouette.webp', alt: 'Supercapital AIKA eclipsing the planet' },
        { src: 'https://media.aikaworld.com/anime/final_approach.webp', alt: 'The flagship descending through storm clouds toward the finale' }
      ]
    },
    roadmap: {
      title: 'Production timeline',
      phase1: {
        title: 'Phase I — Bible & pre-production',
        body: 'Writers room finalises episode beats, animatics and the evolving finale outline.'
      },
      phase2: {
        title: 'Phase II — Animation & scoring',
        body: 'Storyboard cleanup, layout, 3D previs and scoring sessions align for the Harmonic Wake run.'
      },
      phase3: {
        title: 'Phase III — Premiere rollout',
        body: 'Localization, marketing drops and coordinated watch parties launch the final episodes.'
      }
    },
    community: {
      title: 'Fan Hub & Production Notes',
      description:
        'Stay tuned to the analog heartbeat of BS-0. These channels collect production deep-dives, lore excerpts and participatory campaigns leading into the finale.',
      cards: [
        {
          id: 'dev-journal',
          eyebrow: 'Inside the studio',
          title: 'Production Log',
          description:
            'Director commentaries, art drops and scheduling updates direct from the Harmonic Wake team.',
          note: 'Updated at every major milestone.',
          ctaLabel: 'Read entries',
          ctaHref: '/dev-journal'
        },
        {
          id: 'lore-archive',
          eyebrow: 'Story bible',
          title: 'World Dossier',
          description:
            'Living encyclopedia tracking Elyndra, Supercapital AIKA and the evolving final battle without spoilers.',
          note: 'Expands as scripts lock.',
          ctaLabel: 'Open lore',
          ctaHref: '/lore/elyndra'
        },
        {
          id: 'signals',
          eyebrow: 'Stay amplified',
          title: 'Premiere Alerts',
          description:
            'Email briefings when new episodes, minisodes or finale intel drops. Includes watch party invites.',
          note: 'Zero spam. Opt out anytime.',
          ctaLabel: 'Join the relay',
          ctaHref: '#community-newsletter'
        }
      ],
      newsletterTitle: 'Premier alert list',
      newsletterDescription: 'Get early screening calls, soundtrack teasers and finale briefings straight from the bridge.'
    },
    devlog: {
      title: 'Latest Production Log entries',
      description: 'Behind-the-scenes notes from the Harmonic Wake anime production.',
      viewAllLabel: 'Open Production Log',
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
      success: 'Thanks for subscribing to the premiere relay!',
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
    heading: 'AIKA Resonance Series Guide',
    intro:
      'The Harmonic Wake season bible charts how the flagship BS-0 closes in on Supercapital AIKA. Use this guide to align your marketing drops, localisation beats and fan conversations while the finale remains flexible.',
    backToHome: 'Back to homepage',
    sections: [
      {
        id: 'season-one',
        title: 'Season 1 — Harmonic Wake',
        tagline: 'Twelve-episode arc chronicling BS-0’s final approach.',
        mechanicsTitle: 'Episode cadence',
        rewardsTitle: 'Themes & tone',
        rolesTitle: 'Key spotlights',
        mechanics: [
          'Episodes 1–2: assemble the crew, sketch the derelict flagship and foreshadow Supercapital AIKA.',
          'Episodes 3–6: alternating raids and intimate downtime sequences to show the human cost of manual warfare.',
          'Episodes 7–12: deep dive into AIKA’s network, culminating in the siege where the ending remains intentionally undefined.'
        ],
        rewards: [
          'A tactile, analog sci-fi aesthetic emphasising grit, sweat and orchestra-backed tension.',
          'Interlocking character arcs about chosen family, survivor’s guilt and reclaiming agency from machines.',
          'Marketing hooks for each mid-season cliffhanger and the mystery of how Aika confronts her counterpart.'
        ],
        roles: [
          'Akari episodes 3 & 9 highlight manual targeting choreography and trauma recovery.',
          'Miyu episodes 4 & 10 examine reactor stewardship and empathy for dying machines.',
          'Yui episodes 6 & 11 anchor the Fan Relay and external view of the flagship’s myth.'
        ]
      },
      {
        id: 'character-arcs',
        title: 'Bridge Crew Journeys',
        tagline: 'Character-centric beats for cast, PR and localization teams.',
        mechanicsTitle: 'Structure',
        rewardsTitle: 'Audience resonance',
        rolesTitle: 'Support materials',
        mechanics: [
          'Rotating perspective episodes ensure every crew member receives at least two hero moments.',
          'Intercut neural dives show Aika debating the Supercapital within a surreal data cathedral.',
          'Flashback fragments provide context but avoid fixing the final decision until scripts lock.'
        ],
        rewards: [
          'Opportunities for voice actor features and social clips built around raw vocal sessions.',
          'Cosplay-ready costume breakdowns from the analog uniforms and hazard gear.',
          'Collectible assets such as bridge schematics and hand-annotated logs.'
        ],
        roles: [
          'Talent teams: prep Q&A cards so cast can discuss their character’s unresolved choices.',
          'Localization: maintain glossary of analog tech jargon for consistent subtitles and dubs.',
          'Marketing: stagger reveals of each crew member’s vow to preserve finale suspense.'
        ]
      },
      {
        id: 'finale',
        title: 'Finale Arc — Siege of the Supercapital',
        tagline: 'Flexible blueprint for the climactic battle without locking the outcome.',
        mechanicsTitle: 'Staging pillars',
        rewardsTitle: 'Messaging priorities',
        rolesTitle: 'Editable placeholders',
        mechanics: [
          'The derelict flagship repeatedly stalls, forcing manual restarts and close-quarters EVA repairs.',
          'Aika prepares a neural infiltration while the rest of the crew fights to keep shields intact against AI counterfire.',
          'EMP blasts sever long-range comms, so the Fan Relay becomes the emotional chorus for audiences.'
        ],
        rewards: [
          'Heroic, chaotic tone mixing analog clatter with soaring orchestral swells.',
          'Spotlighting the humanity of manual crews contrasted against AIKA’s cold precision.',
          'Teasing that success, failure or stalemate are all on the table until final approvals.'
        ],
        roles: [
          'Maintain spoiler-light synopses that emphasise stakes, not resolutions.',
          'Embed editable copy blocks in presskits so new intel can drop instantly after script lock.',
          'Coordinate Fan Relay events to mirror the flagship’s step-by-step breach attempts.'
        ]
      }
    ]
  },
  progression: {
    title: 'Production timeline',
    body: 'Track pre-production, animation dailies and launch milestones for the AIKA Resonance anime. Every update keeps the finale adaptable while signalling what fans can expect next.'
  },
  devlog: {
    heading: 'Production Log',
    intro: 'Director notes, storyboard drops and schedule checkpoints from the Harmonic Wake team.',
    list: {
      timelineLabel: 'Production Log timeline',
      empty: 'No Production Log entries are available yet. Check back soon!',
      readMore: 'Read entry'
    },
    post: {
      backToList: 'Back to Production Log',
      publishedOn: 'Published on'
    }
  },
  playtests: {
    eyebrow: 'Fan activation',
    title: 'AIKA Resonance Fan Watch Parties',
    intro:
      'Our former game playtest slot is now a coordinated campaign hub for premiere watch parties, finale speculation sessions and analog craft meetups. Every activity supports the flagship’s final push without spoiling the outcome.',
    sections: [
      {
        id: 'structure',
        title: 'How events run now',
        description:
          'Every relay window mirrors the flagship’s advance: analog crafts, soundtrack listening corners and live commentary from the crew.',
        bullets: [
          'Premiere marathons sync up with new episode drops and include guided discussion prompts.',
          'Static jam sessions let fans remix telemetry tones into music while awaiting finale news.',
          'Crew call-ins share safe-to-release production trivia without locking story choices.'
        ]
      },
      {
        id: 'expectations',
        title: 'What participants bring',
        description: 'Support the crew, document reactions and keep the Fan Relay vibrant as we finalise the climax.',
        bullets: [
          'Host or join a watch party and submit highlights for inclusion in community recap reels.',
          'Share cosplay, crafts or theory threads that respect the evolving nature of the finale.',
          'Report accessibility or localisation feedback so streaming partners can adjust quickly.'
        ]
      },
      {
        id: 'support',
        title: 'Tools & support',
        description:
          'The crew keeps the Fan Relay organised with spoiler-safe kits and rapid response moderators.',
        bullets: [
          'Fan Relay Discord with dedicated channels for each episode drop and finale speculation.',
          'Event templates for analog craft nights, static choirs and lore-reading circles.',
          'Press-ready summary sheets to share after each major community activation.'
        ]
      }
    ],
    faqTitle: 'Fan Relay questions',
    faqs: [
      {
        question: 'Who can join the watch parties?',
        answer:
          'Anyone excited for the anime can participate. We only ask that you register your relay node so we can coordinate streaming links and spoiler guidelines.'
      },
      {
        question: 'How do you share schedules?',
        answer:
          'Monthly bulletins list premiere windows, craft nights and Q&A slots. Emergency updates go through the Fan Relay Discord and newsletter.'
      },
      {
        question: 'Are streams or recordings required?',
        answer:
          'No. Share reactions however you like—live tweets, sketches, letters. If you do stream, please enable spoiler delays so late viewers can enjoy the drop.'
      }
    ],
    cta: {
      label: 'Explore the Production Log',
      href: '/dev-journal',
      note: 'Fan activations evolve with each production milestone—check back often.'
    }
  },
  creatorProgram: {
    eyebrow: 'Community campaigns',
    title: 'AIKA Resonance Creator Collaborations',
    intro:
      'Our creator partnerships now celebrate the anime production—spotlighting artists, musicians and storytellers who amplify the Harmonic Wake arc while respecting spoiler boundaries.',
    sections: [
      {
        id: 'who',
        title: 'Who we partner with now',
        description: 'We spotlight storytellers who translate the anime’s atmosphere into thoughtful coverage and community art.',
        bullets: [
          'Anime commentators, illustrators, musicians and writers who thrive on emotional storytelling.',
          'Communities that balance hype with spoiler-safe discussion and celebrate analog aesthetics.',
          'Partners willing to adapt release timing as finale decisions evolve.'
        ]
      },
      {
        id: 'benefits',
        title: 'What partners receive',
        description: 'Active perks focus on storytelling support and exclusive glimpses behind the production.',
        bullets: [
          'Pre-release screenings or animatics with spoiler agreements tailored to each partner.',
          'Access to key art, motion graphics, music stems and production designer interviews.',
          'Signal boosts via official channels, Fan Relay playlists and collaborative live segments.'
        ]
      },
      {
        id: 'collaboration',
        title: 'How we supported creators',
        description: 'Partnerships operate as ongoing dialogues centred on amplifying the flagship’s journey.',
        bullets: [
          'Monthly sync calls to plan behind-the-scenes features and spoiler-safe teasers.',
          'Shared rollout calendars aligning with episode drops, OVA releases and finale briefs.',
          'Direct line to the community team for assets, clarifications and co-hosted events.'
        ]
      }
    ],
    faqTitle: 'Collaboration FAQ',
    faqs: [
      {
        question: 'Which platforms do you prioritise?',
        answer:
          'YouTube, Twitch, TikTok, newsletters, podcasts and zines are all welcome as long as they foster engaged, respectful communities.'
      },
      {
        question: 'What content fits best?',
        answer:
          'Reaction breakdowns, music covers, analog prop builds, lore essays and interviews with fellow fans or staff. We coordinate on spoiler timing for finale material.'
      },
      {
        question: 'How often do you review pitches?',
        answer:
          'We process submissions monthly. If the roster is full we keep promising partners on file for the next campaign beat.'
      }
    ],
    cta: {
      label: 'Submit a collaboration pitch',
      href: '/studio',
      note: 'Tell us how you would amplify the Harmonic Wake arc while keeping the finale flexible.'
    }
  },
  faq: {
    title: 'AIKA Resonance Anime FAQ',
    intro:
      'Quick answers about the Harmonic Wake season, streaming availability and how to support the flagship’s final approach.',
    items: [
      {
        question: 'Which streaming partners are you targeting?',
        answer:
          'We are in negotiations with multiple global platforms. Final partners will be announced once localisation delivery dates are locked.'
      },
      {
        question: 'How many episodes are planned?',
        answer: 'Season one spans twelve core episodes plus the Static Bloom OVA and documentary minisodes.'
      },
      {
        question: 'Will episodes launch simultaneously worldwide?',
        answer:
          'Our goal is a near-simulcast release. Regions with dubbing pipelines may receive a brief delay while subtitled versions debut day-and-date.'
      },
      {
        question: 'Which languages will be available?',
        answer:
          'English and Hungarian voice tracks are in production. Subtitles will cover English, Hungarian, Spanish, French and Japanese at minimum.'
      },
      {
        question: 'Is the finale locked?',
        answer:
          'Not yet. We maintain flexible script modules for the Supercapital siege so creative leadership can adjust once production, cast and audience feedback align.'
      },
      {
        question: 'Can I host a watch party?',
        answer:
          'Yes—register through the Fan Relay so we can share spoiler guidelines, promotional assets and possible crew drop-ins.'
      },
      {
        question: 'Will there be official merchandise?',
        answer:
          'Limited-run analog merch drops (posters, signal tapes, enamel pins) will accompany key episodes. Details go out via the newsletter first.'
      },
      {
        question: 'How do press or partners get in touch?',
        answer:
          'Email press@resonance.aikahub.com or visit the presskit for assets, contact forms and collaboration notes.'
      }
    ]
  },
  charactersPage: {
    breadcrumb: 'Characters',
    heading: 'AIKA Resonance Bridge Crew',
    intro: 'Meet the six voices keeping flagship BS-0 alive on its collision course with the Supercapital. Each dossier features duty assignments, casting notes and pivotal episodes.',
    profileCta: 'Open profile'
  },
  characterPage: {
    breadcrumbRoot: 'Characters',
    quoteTitle: 'Bridge log excerpt'
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
    heading: 'AIKA Resonance Presskit',
    description: 'All press and creator assets for the AIKA Resonance anime in one place. Free to use under the conditions below.',
    about: {
      title: 'About the Series',
      intro:
        'AIKA Resonance is an original sci-fi anime following Captain Shizuru, Aika and five prodigy pilots aboard the EMP-hardened flagship BS-0 as they attempt to breach the rogue Supercapital AIKA.',
      keyMessage: 'Analog heroism versus runaway intelligence—told through orchestral static and human grit.',
      craft: 'Produced by SyncNode Collective. Music by Resonance Ensemble.',
      tagline: 'You don’t just watch AIKA Resonance—you hold the line with us.'
    },
    factSheetTitle: 'Fact sheet',
    downloadsTitle: 'Downloadable assets',
    usageTitle: 'Usage guidelines',
    usageDescription:
      'Use the downloadable assets in promotional and editorial content with proper credit to the series. Reselling the assets is not permitted. For special requests, reach out at press@resonance.aikahub.com.',
    factSheet: [
      { label: 'Format', value: 'Original anime series' },
      { label: 'Season length', value: '12 episodes + OVA + documentary minisodes' },
      { label: 'Target premiere window', value: '2026 (exact date TBA)' },
      { label: 'Contact', value: 'press@resonance.aikahub.com', href: 'mailto:press@resonance.aikahub.com' }
    ],
    downloadBlocks: [
      {
        title: 'Logo & Wordmark',
        description: 'Primary logo and wordmark in multiple formats.',
        items: [
          { label: 'AIKA Resonance logo (PNG)', href: 'https://media.aikaworld.com/presskit/logo/aikaworld-logo.png' },
          { label: 'AIKA Resonance logo (SVG)', href: 'https://media.aikaworld.com/presskit/logo/aikaworld-logo.svg' },
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
        title: 'Episode stills',
        description:
          'Cinematic anime stills captured from key Harmonic Wake episodes—ideal for editorial spotlights and feature spreads.',
        items: [
          {
            label: 'Episode still – Bridge ignition (WebP)',
            href: 'https://media.kitsu.io/anime/cover_images/41370/webp/large.webp'
          },
          {
            label: 'Episode still – Elyndra orbit drift (WebP)',
            href: 'https://media.kitsu.io/anime/cover_images/42472/webp/large.webp'
          },
          {
            label: 'Episode still – Choir of signals (WebP)',
            href: 'https://media.kitsu.io/anime/poster_images/44078/webp/big.webp'
          }
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
      "Looks like you tuned into a page that hasn't been harmonised in the AIKA Resonance universe yet. Return to the homepage or explore the Resonators.",
    homeCta: 'Back to homepage',
    charactersCta: 'Explore Resonators',
    supportHeading: 'Need a signal boost?',
    supportDescription:
      'Use the quick links below to continue your journey or let the team know which frequency dropped out so we can restore it fast.',
    faqCta: 'Open the FAQ',
    discordCta: 'Ask the community on Discord',
    contactCta: 'Email the AIKA team',
    contactSubject: '404 report – Missing AIKA Resonance page'
  },
  seo: {
    defaultTitle: 'AIKA Resonance Anime – Harmonic Wake',
    defaultDescription:
      'Official site for the AIKA Resonance anime. Follow Captain Shizuru, Aika and the bridge crew of BS-0 as they attempt to breach the Supercapital AIKA.',
    defaultOgAlt: 'AIKA Resonance anime share image',
    defaultLocale: 'en_US',
    pages: {
      home: {
        title: 'AIKA Resonance Anime – Harmonic Wake',
        description:
          'Discover the official anime adaptation of AIKA Resonance. Meet the bridge crew, explore Elyndra and prepare for the climactic siege against the Supercapital.',
        ogAlt: 'AIKA Resonance anime hero artwork'
      },
      modes: {
        title: 'Series guide – AIKA Resonance',
        description:
          'Episode cadence, character spotlights and finale staging notes for the Harmonic Wake season.',
        ogAlt: 'AIKA Resonance series guide artwork'
      },
      progression: {
        title: 'Production timeline – AIKA Resonance',
        description: 'Track pre-production, animation and premiere milestones for the AIKA Resonance anime.',
        ogAlt: 'AIKA Resonance production timeline artwork'
      },
      loreElyndra: {
        title: 'Elyndra lore – AIKA Resonance',
        description:
          "AIKA's dark orbital confession about Elyndra's six vessels, the AGI-worshipping cities, and the outsider who reignites her design.",
        ogAlt: 'AIKA narrates the myth of Elyndra'
      },
      devlog: {
        title: 'Production Log – AIKA Resonance',
        description: 'Director commentary, art drops and scheduling updates from the Harmonic Wake team.',
        ogAlt: 'AIKA Resonance Production Log key art'
      },
      devlogPost: {
        title: postTitle => `${postTitle} – Production Log | AIKA Resonance`,
        description: summary => summary || 'Latest Production Log update for AIKA Resonance.',
        ogAlt: postTitle => `${postTitle} Production Log illustration`
      },
      playtests: {
        title: 'Fan watch parties – AIKA Resonance',
        description:
          'Learn how to join the AIKA Resonance Fan Relay for premiere watch parties, craft nights and finale speculation sessions.',
        ogAlt: 'AIKA Resonance fan watch party graphic'
      },
      creatorProgram: {
        title: 'Creator collaborations – AIKA Resonance',
        description:
          'Submit collaboration pitches and explore how the community amplifies the Harmonic Wake anime.',
        ogAlt: 'AIKA Resonance creator collaboration artwork'
      },
      studio: {
        title: 'SyncNode Collective – AIKA Resonance',
        description:
          'Meet the SyncNode Collective, the studio crafting the AIKA Resonance anime and guiding the Harmonic Wake production.',
        ogAlt: 'SyncNode Collective studio highlight graphic'
      },
      about: {
        title: 'About – AIKA Resonance Anime',
        description:
          'Learn how AIKA Resonance evolved into an anime series, meet the leadership team and explore the creative manifesto behind Harmonic Wake.',
        ogAlt: 'About AIKA Resonance anime overview artwork'
      },
      characters: {
        title: 'Bridge crew – AIKA Resonance',
        description:
          'Profiles of Akari, Miyu, Komi, Hina, Yui and Aika as they keep the flagship alive on its approach to the Supercapital.',
        ogAlt: 'AIKA Resonance bridge crew lineup artwork'
      },
      character: {
        description: character =>
          `${character.name} profile: duty station aboard BS-0, voice talent highlights and pivotal episodes.`,
        ogDescription: character => `${character.name} holds the line against Supercapital AIKA.`,
        ogAlt: character => `${character.name} bridge profile`
      },
      presskit: {
        title: 'AIKA Resonance – Presskit',
        description: 'Download logos, key art, cast bios and production facts for the AIKA Resonance anime.',
        ogAlt: 'AIKA Resonance anime presskit asset overview graphic'
      },
      faq: {
        title: 'FAQ – AIKA Resonance Anime',
        description: 'Streaming plans, localisation status and finale roadmap for the Harmonic Wake season.',
        ogAlt: 'AIKA Resonance anime FAQ overview graphic'
      },
      privacy: {
        title: 'Privacy Policy – AIKA Resonance',
        description: 'Learn how we process cookies, analytics and contact data to keep the AIKA Resonance community secure.',
        ogAlt: 'AIKA Resonance privacy policy illustration'
      },
      terms: {
        title: 'Terms of Use – AIKA Resonance',
        description: 'Understand the rules for using AIKA Resonance IP, community spaces and downloadable assets.',
        ogAlt: 'AIKA Resonance terms of use illustration'
      },
      legalCopyright: {
        title: 'Copyright Policy / DMCA – AIKA Resonance',
        description: 'Report infringement, review takedown steps and submit counter-notices for AIKA Resonance content.',
        ogAlt: 'AIKA Resonance copyright policy graphic'
      },
      legalFanContent: {
        title: 'Fan Content Policy – AIKA Resonance',
        description: 'Guidelines for fan art, AI creations, LoRA training and non-commercial community projects.',
        ogAlt: 'AIKA Resonance fan content guidance artwork'
      },
      legalTrademark: {
        title: 'Trademark Guidelines – AIKA Resonance',
        description: 'How to reference AIKA Resonance marks without implying official endorsement or partnership.',
        ogAlt: 'AIKA Resonance trademark guidance graphic'
      },
      legalChangelog: {
        title: 'Legal changelog – AIKA Resonance',
        description: 'Timeline of legal policy updates, IP protection improvements and archival automation.',
        ogAlt: 'AIKA Resonance legal changelog diagram'
      },
      notFound: {
        title: 'Page not found – AIKA Resonance',
        description: 'The requested resonance is missing. Return to the homepage or browse characters.',
        ogAlt: 'AIKA Resonance missing resonance illustration'
      }
    }
  },
  studio: {
    title: 'SyncNode Interactive',
    lead: 'Independent development studio behind the AIKA Resonance universe.',
    body:
      'SyncNode Interactive is an independent development studio crafting narrative-driven, technologically advanced worlds. Within the AIKA Resonance universe, we merge emotional storytelling with modern interactive systems. Built on Unreal Engine 5, our projects combine cutting-edge visuals, sound design, and AI systems.',
    project: {
      title: 'AIKA: Resonance',
      summary: 'Unreal Engine 5.4 LTS • Single-player • Story-based action • Cinematic storytelling'
    }
  },
  aboutPage: {
    aikaLead: 'AIKA: Resonance is a UE 5.4 LTS single-player story-based action game.',
    aikaBody:
      'Cinematic combat sequences, responsive resonance abilities and emotionally charged storytelling. Created by SyncNode Interactive.'
  }
};
