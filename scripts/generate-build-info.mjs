import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const timestamp = new Date().toISOString();
const date = timestamp.slice(0, 10);
const dir = resolve('lib/generated');
const target = resolve(dir, 'build-info.ts');

mkdirSync(dir, { recursive: true });

const content = `export const buildInfo = {\n  timestamp: '${timestamp}',\n  date: '${date}'\n} as const;\n`;

writeFileSync(target, content, 'utf8');

console.log(`[build-info] Generated build metadata at ${timestamp}`);
