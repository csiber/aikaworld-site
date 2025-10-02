import fs from 'node:fs';
import path from 'node:path';

const outputDir = path.resolve('.vercel/output');
const configPath = path.join(outputDir, 'config.json');
const functionsDir = path.join(outputDir, 'functions');

if (!fs.existsSync(configPath)) {
  console.error('[patch-vercel-output] Skipping: config.json not found.');
  process.exit(0);
}

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
let updatedRoute = false;

if (Array.isArray(config.routes)) {
  for (const route of config.routes) {
    if (route && route.dest === '/_not-found') {
      route.dest = '/404';
      updatedRoute = true;
    }
  }
}

if (!updatedRoute) {
  console.warn('[patch-vercel-output] Warning: no /_not-found route found to patch.');
} else {
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + '\n');
}

const functionDirsToRemove = ['_not-found.func', '_not-found.rsc.func'];
for (const dirName of functionDirsToRemove) {
  const fullPath = path.join(functionsDir, dirName);
  if (fs.existsSync(fullPath)) {
    fs.rmSync(fullPath, { recursive: true, force: true });
  }
}

console.log('[patch-vercel-output] Patched Vercel build output for not-found route.');
