import { test, expect } from '@playwright/test';
import { getCharacters } from '../../lib/content/characters';
import path from 'node:path';
import fs from 'node:fs';

const staticRoutes = [
  '/',
  '/modes',
  '/playtests',
  '/devlog',
  '/presskit',
  '/faq',
  '/characters',
  '/privacy',
  '/terms',
  '/legal/copyright'
];

function getCharacterRoutes(): string[] {
  const [firstCharacter] = getCharacters('en');
  return firstCharacter ? [`/characters/${firstCharacter.slug}`] : [];
}

function getDevlogRoutes(): string[] {
  const devlogDirectory = path.join(process.cwd(), 'content', 'devlog');

  if (!fs.existsSync(devlogDirectory)) {
    return [];
  }

  const [latest] = fs
    .readdirSync(devlogDirectory)
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => fileName.replace(/\.mdx$/, ''))
    .sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));

  return latest ? [`/devlog/${latest}`] : [];
}

const allRoutes = Array.from(new Set([...staticRoutes, ...getCharacterRoutes(), ...getDevlogRoutes()]));

for (const route of allRoutes) {
  test(`Oldal pillanatkép: ${route}`, async ({ page }, testInfo) => {
    const response = await page.goto(route, { waitUntil: 'domcontentloaded' });
    expect(response, `A(z) ${route} oldal nem adott választ`).toBeTruthy();

    if (response) {
      expect(response.status(), `A(z) ${route} oldal ${response.status()} státuszkódot adott`).toBeLessThan(400);
    }

    const safeRouteName = route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '__');
    const screenshotPath = testInfo.outputPath(`snapshot-${safeRouteName}.png`);

    await page.waitForTimeout(100);

    await page.screenshot({
      path: screenshotPath,
      fullPage: true,
      animations: 'disabled',
      scale: 'device'
    });

    await testInfo.attach('snapshot', {
      path: screenshotPath,
      contentType: 'image/png'
    });
  });
}
