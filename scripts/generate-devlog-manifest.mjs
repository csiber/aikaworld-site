#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

const repoRoot = path.resolve(process.cwd());
const contentDir = path.join(repoRoot, 'content', 'devlog');
const targetFile = path.join(repoRoot, 'lib', 'devlog', 'generated.ts');

async function ensureDirectoryExists(filePath) {
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
}

function escapeString(value) {
  return JSON.stringify(value);
}

function formatFrontmatter(frontmatter, indent = 4) {
  const baseIndent = ' '.repeat(indent);
  const innerIndent = ' '.repeat(indent + 2);
  const entries = [
    `${innerIndent}title: ${escapeString(frontmatter.title ?? null)}`,
    `${innerIndent}date: ${escapeString(frontmatter.date ?? null)}`,
    `${innerIndent}summary: ${escapeString(frontmatter.summary ?? null)}`,
    `${innerIndent}cover: ${escapeString(frontmatter.cover ?? null)}`
  ];
  return `{
${entries.join(',\n')}
${baseIndent}}`;
}

async function generate() {
  const entries = await fs.readdir(contentDir).catch(error => {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  });

  const mdxFiles = entries.filter(entry => entry.endsWith('.mdx')).sort();

  const mapping = await Promise.all(
    mdxFiles.map(async file => {
      const absolutePath = path.join(contentDir, file);
      const source = await fs.readFile(absolutePath, 'utf8');
      const { data, content } = matter(source);

      const normalizedFrontmatter = {
        title: typeof data.title === 'string' ? data.title : null,
        date: typeof data.date === 'string' ? data.date : null,
        summary: typeof data.summary === 'string' ? data.summary : null,
        cover: typeof data.cover === 'string' ? data.cover : null
      };

      const slug = file.replace(/\.mdx$/i, '');
      return `  {
    slug: ${escapeString(slug)},
    frontmatter: ${formatFrontmatter(normalizedFrontmatter, 4)},
    content: ${escapeString(content)}
  }`;
    })
  );

  const fileContents = `// Ez a fájl automatikusan generálódik a scripts/generate-devlog-manifest.mjs futtatásával.
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
${mapping.join(',\n')}
];
`;

  await ensureDirectoryExists(targetFile);
  await fs.writeFile(targetFile, fileContents, 'utf8');
}

generate().catch(error => {
  console.error('[generate-devlog-manifest] Hiba történt:', error);
  process.exitCode = 1;
});
