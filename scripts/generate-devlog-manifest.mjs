#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const repoRoot = path.resolve(process.cwd());
const contentDir = path.join(repoRoot, 'content', 'devlog');
const targetFile = path.join(repoRoot, 'lib', 'devlog', 'generated.ts');

async function ensureDirectoryExists(filePath) {
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
}

function createIdentifier(filename) {
  const base = filename.replace(/\.mdx$/i, '');
  const cleaned = base.replace(/[^a-zA-Z0-9]+/g, '_');
  const identifier = cleaned.replace(/^(\d)/, '_$1');
  return `devlog_${identifier}`;
}

async function generate() {
  const entries = await fs.readdir(contentDir).catch(error => {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  });

  const mdxFiles = entries.filter(entry => entry.endsWith('.mdx')).sort();

  const imports = [];
  const mapping = [];

  for (const file of mdxFiles) {
    const identifier = createIdentifier(file);
    const relativePath = `../../content/devlog/${file}?raw`;
    imports.push(`import ${identifier} from '${relativePath}';`);
    const slug = file.replace(/\.mdx$/i, '');
    mapping.push(`  { slug: '${slug}', source: ${identifier} }`);
  }

  const fileContents = `// Ez a fájl automatikusan generálódik a scripts/generate-devlog-manifest.mjs futtatásával.
// NE szerkeszd kézzel, mert a következő generálás felülírja.

export type DevlogEntrySource = {
  slug: string;
  source: string;
};

${imports.join('\n')}

export const devlogEntries: DevlogEntrySource[] = [
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
