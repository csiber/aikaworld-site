import { cache } from 'react';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import type { Locale } from '../i18n/config';
import progressionSource from '../../content/progression.mdx?raw';

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
    throw new Error('A progression tartalomból hiányzik az EN vagy HU jelölő.');
  }

  const englishRaw = source.slice(enIndex + EN_MARKER.length, huIndex).trim();
  const hungarianRaw = source.slice(huIndex + HU_MARKER.length).trim();

  if (!englishRaw) {
    throw new Error('A progression angol tartalma üres.');
  }

  if (!hungarianRaw) {
    throw new Error('A progression magyar tartalma üres.');
  }

  return { en: englishRaw, hu: hungarianRaw };
}

const loadProgressionContent = cache(async () => {
  const segments = extractSegments(progressionSource);
  const [en, hu] = await Promise.all([renderMarkdown(segments.en), renderMarkdown(segments.hu)]);
  return { en, hu };
});

export const getProgressionContent = cache(async (locale: Locale): Promise<string> => {
  const content = await loadProgressionContent();
  return locale === 'hu' ? content.hu : content.en;
});
