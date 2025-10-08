import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { cache } from 'react';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import type { Locale } from '../i18n/config';

const LORE_PATH = path.join(process.cwd(), 'content', 'lore', 'elyndra.md');
const EN_MARKER = '<!-- EN -->';
const HU_MARKER = '<!-- HU -->';

async function renderMarkdown(markdown: string): Promise<string> {
  const rendered = await remark().use(remarkHtml).process(markdown);
  return rendered.toString().trim();
}

function extractSegments(source: string): { en: string; hu: string } {
  const enIndex = source.indexOf(EN_MARKER);
  const huIndex = source.indexOf(HU_MARKER);

  if (enIndex === -1 || huIndex === -1) {
    throw new Error('Az elyndra lore fájlban hiányzik az EN vagy HU jelölő.');
  }

  const englishRaw = source.slice(enIndex + EN_MARKER.length, huIndex).trim();
  const hungarianRaw = source.slice(huIndex + HU_MARKER.length).trim();

  if (!englishRaw) {
    throw new Error('Az elyndra lore angol tartalma üres.');
  }

  if (!hungarianRaw) {
    throw new Error('Az elyndra lore magyar tartalma üres.');
  }

  return { en: englishRaw, hu: hungarianRaw };
}

const loadLoreContent = cache(async () => {
  const file = await readFile(LORE_PATH, 'utf8');
  const segments = extractSegments(file);
  const [en, hu] = await Promise.all([renderMarkdown(segments.en), renderMarkdown(segments.hu)]);
  return { en, hu };
});

export const getElyndraLore = cache(async (locale: Locale): Promise<string> => {
  const content = await loadLoreContent();
  return locale === 'hu' ? content.hu : content.en;
});
