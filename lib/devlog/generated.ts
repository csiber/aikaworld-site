// Ez a fájl automatikusan generálódik a scripts/generate-devlog-manifest.mjs futtatásával.
// NE szerkeszd kézzel, mert a következő generálás felülírja.

export type DevlogEntrySource = {
  slug: string;
  source: string;
};

import devlog__2024_08_15_engine_updates from '../../content/devlog/2024-08-15-engine-updates.mdx?raw';
import devlog__2024_09_05_combat_ai from '../../content/devlog/2024-09-05-combat-ai.mdx?raw';

export const devlogEntries: DevlogEntrySource[] = [
  { slug: '2024-08-15-engine-updates', source: devlog__2024_08_15_engine_updates },
  { slug: '2024-09-05-combat-ai', source: devlog__2024_09_05_combat_ai }
];
