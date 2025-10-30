// Ez a fájl automatikusan generálódik a scripts/generate-devlog-manifest.mjs futtatásával.
// NE szerkeszd kézzel, mert a következő generálás felülírja.

export type DevlogEntryFrontmatter = {
  title: string | null;
  date: string | null;
  summary: string | null;
  cover: string | null;
};

export type DevlogEntry = {
  slug: string;
  frontmatter: DevlogEntryFrontmatter;
  content: string;
};

export const devlogEntries: DevlogEntry[] = [
  {
    slug: "2024-08-15-engine-updates",
    frontmatter: {
      title: "Motorfejlesztések és új eszközök",
      date: "2024-08-15",
      summary: "Hogyan csiszoltuk a harci animációkat és milyen eszközöket adtunk a pályatervezők kezébe.",
      cover: "https://media.aikaworld.com/devlog/engine-updates-cover.jpg"
    },
    content: "\n## Mit fejlesztettünk a motoron?\n\nAz elmúlt hetekben a renderelési pipeline átalakításával foglalkoztunk. Az új deferred shading rendszer lehetővé teszi, hogy nagyobb mennyiségű dinamikus fényforrást kezeljünk stabil teljesítmény mellett.\n\n- Optimalizáltuk a GPU buffer menedzsmentet.\n- Átdolgoztuk a LOD rendszert, így a nagy távolságban látható egységek is részletesebbnek hatnak.\n\n## Eszközök a pályatervezőknek\n\nA pályatervezők mostantól a böngészőből is elérhető layout editort használhatják. Az eszköz közvetlenül a játékklienssel szinkronizál, így az iterációk sokkal gyorsabban zajlanak.\n\n> A következő hetekben a közösség számára is szervezünk egy zárt tesztet, ahol kipróbálhatjátok az új funkciókat.\n"
  },
  {
    slug: "2024-09-05-combat-ai",
    frontmatter: {
      title: "Harci MI a történetalapú összecsapásokhoz",
      date: "2024-09-05",
      summary: "A döntési fa mostantól a narratív encounterek feszültségét emeli, hogy az egyjátékos kaland még filmszerűbb legyen.",
      cover: "https://media.aikaworld.com/devlog/combat-ai-cover.jpg"
    },
    content: "\n### Történetérzékeny döntési fa\n\nAz új logika minden ellenfelet szerepbe helyez: a vezér a saját motivációját követi, a zsoldosok pedig reagálnak a játékos morálcsapásaira. A rendszer így nem csapatkörökben gondolkodik, hanem a történet előrehaladását szolgálja, és minden döntés a főszereplő útját formálja.\n\n### Fókusz a magányos hősre\n\nElhagytuk a csapatláncokra és közös szinergiákra épülő kísérleteket, helyettük a különleges történetpillanatokra koncentrálunk. A társalgási triggerpontok és az egyedi ellenségreakciók segítik a játékos narratív döntéseit, miközben megmarad a feszült, egyjátékos élmény.\n"
  }
];
