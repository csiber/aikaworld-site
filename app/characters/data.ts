export type Character = {
  slug: string;
  name: string;
  title: string;
  heroImage: string;
  role: string;
  element: string;
  playstyle: string;
  tips: string[];
};

export const characters: Character[] = [
  {
    slug: 'akari',
    name: 'Akari',
    title: 'Blazeblade Vanguard',
    heroImage: 'https://media.aikaworld.com/characters/akari-banner.jpg',
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
    heroImage: 'https://media.aikaworld.com/characters/komi-banner.jpg',
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
    heroImage: 'https://media.aikaworld.com/characters/yui-banner.jpg',
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
    heroImage: 'https://media.aikaworld.com/characters/hina-banner.jpg',
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
    heroImage: 'https://media.aikaworld.com/characters/miyu-banner.jpg',
    role: 'Gyógyító pajzsfókusz',
    element: 'Fény',
    playstyle: 'Állandó pajzsmenedzsment és időzített burst heal.',
    tips: [
      'A Radiant Ward pajzsok stackelődnek – cseréld rotáció szerint a party tagok között, hogy mindenkinek maradjon.',
      'A Solaris Pulse heal akkor a legerősebb, ha 3 fénygömb aktív – készülj fel előre a nagy sebzés hullámokra.',
      'A Sanctuary Field mozdíthatatlan, ezért a csapat előre jelzett pozíciójához állítsd be, mielőtt a mechanika kezdődik.'
    ]
  }
];

export const getCharacter = (slug: string) => characters.find(character => character.slug === slug);
