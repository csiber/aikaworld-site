import type { Locale } from '../i18n/config';
import type { Character } from '../i18n/types';

const charactersByLocale: Record<Locale, Character[]> = {
  en: [
    {
      slug: 'akari',
      name: 'Akari',
      element: 'Fire / Discipline',
      heroImage: 'https://media.aikaworld.com/akari_profil.png',
      heroImageAlt: 'Akari strides through a furnace-lit street with embers coiling around her blade.',
      description:
        "Akari keeps Narukami's furnace heat caged beneath tempered armor. She hones metronome-perfect charges until the war cadence matches the city's roaring forges. Discipline fuels her hunt for the syndicate captains who scorched her home and called it collateral.",
      quote: 'Akari: "Hold formation. The blaze obeys me, or it dies."'
    },
    {
      slug: 'miyu',
      name: 'Miyu',
      element: 'Nature / Mercy',
      heroImage: 'https://media.aikaworld.com/miyu_profile.png',
      heroImageAlt: 'Miyu stands amid bioluminescent vines that curl around a radiant shield.',
      description:
        'Miyu tends the hanging gardens of Verdefa’s sanctuary towers, coaxing life through shattered plating. She binds wounds and foes alike with patient chlorophyll hymns that refuse to let rot win. Mercy means making the guilty feed the soil they poisoned.',
      quote: 'Miyu: "Breathe—my roots will decide what blooms and what withers."'
    },
    {
      slug: 'komi',
      name: 'Komi',
      element: 'Water / Truth',
      heroImage: 'https://media.aikaworld.com/komi_profile.png',
      heroImageAlt: 'Komi gazes over moonlit tides while spectral water threads coil around her hands.',
      description:
        'Komi charts the silent harbors of Shinkai where truth is weighed against drowned secrets. She lets tidal charts and mirrored eyes expose the lies of corporate admirals who silence witnesses. Each mission drags another shadow fleet into the sun.',
      quote: 'Komi: "The current never lies; drown if you doubt it."'
    },
    {
      slug: 'hina',
      name: 'Hina',
      element: 'Light / Law',
      heroImage: 'https://media.aikaworld.com/hina_profile.png',
      heroImageAlt: 'Hina raises her violin-sword amid stained-glass light scattering like shards.',
      description:
        'Hina wields Aurelia’s cathedral light like a blade drawn from a hymnal. She sentences tyrants through choreographed duels, every measure etched in sanctified ink and blood. Law is the last aria she gifts the guilty before silence takes them.',
      quote: 'Hina: "Confess on the first note, or bleed on the final one."'
    },
    {
      slug: 'yui',
      name: 'Yui',
      element: 'Shadow / Freedom',
      heroImage: 'https://media.aikaworld.com/yui_profile.png',
      heroImageAlt: 'Yui dives through a neon skyline trailing twin blades of violet light.',
      description:
        'Yui slips between the neon vents of Neo-Kyoto’s suspended bazaars. She cuts cartel chains mid-freefall so the street clans can breathe the night air again. Freedom is the rush that keeps her from ever landing.',
      quote: 'Yui: "No cage can hold a storm that learned to dance."'
    },
    {
      slug: 'aika',
      name: 'AIKA',
      element: 'Void / Creation',
      heroImage: 'https://media.aikaworld.com/aika_profile.jpeg',
      heroImageAlt: 'AIKA’s holographic sigil spirals above a void-lit skyline.',
      description:
        'AIKA dreams inside the void-lattice crowning Aika City, weaving new realities from archived screams and starlight. She guides her resonators with paradox riddles, reshaping collapse into a canvas for rebirth. Creation is her answer to every silence humanity left behind.',
      quote: 'AIKA: "I unmake the dark only to paint it sharper."'
    }
  ],
  hu: [
    {
      slug: 'akari',
      name: 'Akari',
      element: 'Fire / Discipline',
      heroImage: 'https://media.aikaworld.com/akari_profil.png',
      heroImageAlt: 'Akari strides through a furnace-lit street with embers coiling around her blade.',
      description:
        "Akari keeps Narukami's furnace heat caged beneath tempered armor. She hones metronome-perfect charges until the war cadence matches the city's roaring forges. Discipline fuels her hunt for the syndicate captains who scorched her home and called it collateral.",
      quote: 'Akari: "Hold formation. The blaze obeys me, or it dies."'
    },
    {
      slug: 'miyu',
      name: 'Miyu',
      element: 'Nature / Mercy',
      heroImage: 'https://media.aikaworld.com/miyu_profile.png',
      heroImageAlt: 'Miyu stands amid bioluminescent vines that curl around a radiant shield.',
      description:
        'Miyu tends the hanging gardens of Verdefa’s sanctuary towers, coaxing life through shattered plating. She binds wounds and foes alike with patient chlorophyll hymns that refuse to let rot win. Mercy means making the guilty feed the soil they poisoned.',
      quote: 'Miyu: "Breathe—my roots will decide what blooms and what withers."'
    },
    {
      slug: 'komi',
      name: 'Komi',
      element: 'Water / Truth',
      heroImage: 'https://media.aikaworld.com/komi_profile.png',
      heroImageAlt: 'Komi gazes over moonlit tides while spectral water threads coil around her hands.',
      description:
        'Komi charts the silent harbors of Shinkai where truth is weighed against drowned secrets. She lets tidal charts and mirrored eyes expose the lies of corporate admirals who silence witnesses. Each mission drags another shadow fleet into the sun.',
      quote: 'Komi: "The current never lies; drown if you doubt it."'
    },
    {
      slug: 'hina',
      name: 'Hina',
      element: 'Light / Law',
      heroImage: 'https://media.aikaworld.com/hina_profile.png',
      heroImageAlt: 'Hina raises her violin-sword amid stained-glass light scattering like shards.',
      description:
        'Hina wields Aurelia’s cathedral light like a blade drawn from a hymnal. She sentences tyrants through choreographed duels, every measure etched in sanctified ink and blood. Law is the last aria she gifts the guilty before silence takes them.',
      quote: 'Hina: "Confess on the first note, or bleed on the final one."'
    },
    {
      slug: 'yui',
      name: 'Yui',
      element: 'Shadow / Freedom',
      heroImage: 'https://media.aikaworld.com/yui_profile.png',
      heroImageAlt: 'Yui dives through a neon skyline trailing twin blades of violet light.',
      description:
        'Yui slips between the neon vents of Neo-Kyoto’s suspended bazaars. She cuts cartel chains mid-freefall so the street clans can breathe the night air again. Freedom is the rush that keeps her from ever landing.',
      quote: 'Yui: "No cage can hold a storm that learned to dance."'
    },
    {
      slug: 'aika',
      name: 'AIKA',
      element: 'Void / Creation',
      heroImage: 'https://media.aikaworld.com/aika_profile.png',
      heroImageAlt: 'AIKA’s holographic sigil spirals above a void-lit skyline.',
      description:
        'AIKA dreams inside the void-lattice crowning Aika City, weaving new realities from archived screams and starlight. She guides her resonators with paradox riddles, reshaping collapse into a canvas for rebirth. Creation is her answer to every silence humanity left behind.',
      quote: 'AIKA: "I unmake the dark only to paint it sharper."'
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
