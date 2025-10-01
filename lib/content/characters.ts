import type { Locale } from '../i18n/config';
import type { Character } from '../i18n/types';

const charactersByLocale: Record<Locale, Character[]> = {
  en: [
    {
      slug: 'akari',
      name: 'Akari',
      title: 'Blazeblade Vanguard',
      heroImage: 'https://media.aikaworld.com/akari-banner.png',
      role: 'Frontline DPS',
      element: 'Fire',
      playstyle: 'Burst combos built on melee rhythm with high mobility.',
      tips: [
        'After filling the resonance gauge, always open with Forgestep dash to stack maximum burn charges.',
        'During boss phase swaps, activating the Pyreguard shield turns into party-wide protection—call everyone in.',
        'Drop the fire tornado ultimate after your team controls the arena so enemies stay inside the damage field.'
      ]
    },
    {
      slug: 'komi',
      name: 'Komi',
      title: 'Tideweaver Oracle',
      heroImage: 'https://media.aikaworld.com/komi-banner.png',
      role: 'Support control',
      element: 'Water',
      playstyle: 'Ranged crowd-control with strong cleanses and reactive buffs.',
      tips: [
        'Keep the tide field underneath the squad; in motion, use wave dash so it flows with them.',
        'Purge Bubble removes most debuffs—time it with raid mechanics.',
        'Empower your lead DPS with Ebbflow before their ultimate starts to double their burst window.'
      ]
    },
    {
      slug: 'yui',
      name: 'Yui',
      title: 'Gale Dancer',
      heroImage: 'https://media.aikaworld.com/yui-banner.png',
      role: 'Mobility DPS',
      element: 'Wind',
      playstyle: 'Aerial combos with constant evasion and stacking damage-over-time.',
      tips: [
        'Chain Skystring grapples to extend airtime and trigger the Cyclone perk bonus.',
        'Zephyr Mark stacks when you tag separate targets—rotate enemies during multi-add phases.',
        'Before ulting, always trigger Breeze Step so your next three hits are guaranteed crits.'
      ]
    },
    {
      slug: 'hina',
      name: 'Hina',
      title: 'Edge Serenade',
      heroImage: 'https://media.aikaworld.com/hina-banner.png',
      role: 'Assassin burst',
      element: 'Blade',
      playstyle: 'Rapid execution rotations with stealth-based repositioning.',
      tips: [
        'After Shadow Veil the opening strike always duplicates—line it up with boss vulnerability windows.',
        'Echo Slash stacks fall off when you take a hit, so play aggressively around dash iframes.',
        'Cancel the finisher animation with Serenade Waltz dash to exit danger zones faster.'
      ]
    },
    {
      slug: 'miyu',
      name: 'Miyu',
      title: 'Luminous Aegis',
      heroImage: 'https://media.aikaworld.com/miyu-banner.png',
      role: 'Shield-focused healer',
      element: 'Light',
      playstyle: 'Constant barrier management with timed burst healing.',
      tips: [
        'Radiant Ward shields stack—rotate them across the party so everyone keeps coverage.',
        'Solaris Pulse heals hardest with three light orbs prepared—pre-plan for heavy raid damage.',
        'Sanctuary Field is stationary, so align it with the team’s called position before the mechanic hits.'
      ]
    }
  ],
  hu: [
    {
      slug: 'akari',
      name: 'Akari',
      title: 'Blazeblade Vanguard',
      heroImage: 'https://media.aikaworld.com/akari-banner.png',
      role: 'Frontvonal DPS',
      element: 'Tűz',
      playstyle: 'Közelharci ütemre épülő burst kombók, magas mozgékonysággal.',
      tips: [
        'A rezgésmérő feltöltése után mindig kezdd a Forgestep dashsel a maximális égési töltetekhez.',
        'A boss fázisváltásai alatt a Pyreguard pajzs aktiválása csapatvédelemmé válik – szólítsd össze a party-t.',
        'A tűz tornádó ultit a csapat kontrollja után dobd be, így biztosan bent maradnak az ellenfelek a sebzésmezőben.'
      ]
    },
    {
      slug: 'komi',
      name: 'Komi',
      title: 'Tideweaver Oracle',
      heroImage: 'https://media.aikaworld.com/komi-banner.png',
      role: 'Támogató kontroll',
      element: 'Víz',
      playstyle: 'Távolsági crowd-control, erős cleanse és reaktív buffok.',
      tips: [
        'Az árapály mezőt tartsd a csapat alatt; mozgó harcban használj hullám dash-t, hogy velük együtt sodródjon.',
        'A Purge Bubble megszakítja a legtöbb debuffot – időzítsd a raid mechanikákhoz.',
        'Energizáld a fő DPS-t az Ebbflow buffal, mielőtt az ultija elkezdődik, így duplázódik a sebzésablaka.'
      ]
    },
    {
      slug: 'yui',
      name: 'Yui',
      title: 'Gale Dancer',
      heroImage: 'https://media.aikaworld.com/yui-banner.png',
      role: 'Mobility DPS',
      element: 'Szél',
      playstyle: 'Légi kombók, folyamatos kitérés és DOT sebzés.',
      tips: [
        'A Skystring grapplinggel láncold össze a levegőben töltött időt, így aktiválod a Cyclone perk bónuszát.',
        'A Zephyr Mark felhalmozódik, ha külön célpontokat érintesz – területi fázisokban váltogasd az ellenfeleket.',
        'Ultid előtt mindig használd a Breeze Step-et, hogy a következő három találat garantált crit legyen.'
      ]
    },
    {
      slug: 'hina',
      name: 'Hina',
      title: 'Edge Serenade',
      heroImage: 'https://media.aikaworld.com/hina-banner.png',
      role: 'Assassin Burst',
      element: 'Penge',
      playstyle: 'Gyors kivégző rotáció, stealth alapú reposition.',
      tips: [
        'A Shadow Veil után az első találat garantáltan megkettőződik – ezt a boss sebezhető ablakaiban használd ki.',
        'Az Echo Slash stackjeit akkor veszíti el, ha találatot kapsz, ezért a dash iframe-jeivel játssz agresszívan.',
        'A finisher animációja cancellálható a Serenade Waltz dash-sel, így gyorsabban léphetsz ki a veszélyes zónákból.'
      ]
    },
    {
      slug: 'miyu',
      name: 'Miyu',
      title: 'Luminous Aegis',
      heroImage: 'https://media.aikaworld.com/miyu-banner.png',
      role: 'Gyógyító pajzsfókusz',
      element: 'Fény',
      playstyle: 'Állandó pajzsmenedzsment és időzített burst heal.',
      tips: [
        'A Radiant Ward pajzsok stackelődnek – cseréld rotáció szerint a party tagok között, hogy mindenkinek maradjon.',
        'A Solaris Pulse heal akkor a legerősebb, ha 3 fénygömb aktív – készülj fel előre a nagy sebzés hullámokra.',
        'A Sanctuary Field mozdíthatatlan, ezért a csapat előre jelzett pozíciójához állítsd be, mielőtt a mechanika kezdődik.'
      ]
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
