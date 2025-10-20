const routes = [
  '/',
  '/modes',
  '/progression',
  '/dev-journal',
  '/dev-journal/2024-09-20-community-playtest',
  '/playtests',
  '/creator-program',
  '/characters',
  '/characters/akari',
  '/characters/komi',
  '/characters/yui',
  '/characters/hina',
  '/characters/miyu',
  '/presskit',
  '/faq',
  '/privacy',
  '/terms',
  '/legal/copyright',
  '/legal/fan-content',
  '/legal/trademark',
  '/legal/changelog',
  '/en',
  '/en/modes',
  '/en/progression',
  '/en/dev-journal',
  '/en/dev-journal/2024-09-20-community-playtest',
  '/en/playtests',
  '/en/creator-program',
  '/en/characters',
  '/en/characters/akari',
  '/en/characters/komi',
  '/en/characters/yui',
  '/en/characters/hina',
  '/en/characters/miyu',
  '/en/presskit',
  '/en/faq',
  '/en/privacy',
  '/en/terms',
  '/en/legal/copyright',
  '/en/legal/fan-content',
  '/en/legal/trademark',
  '/en/legal/changelog'
];

async function checkRoute(route: string) {
  const url = `http://localhost:3000${route}`;
  const response = await fetch(url, { redirect: 'manual' });
  if (!response.ok) {
    throw new Error(`${route} → ${response.status} ${response.statusText}`);
  }
}

async function main() {
  const failures: string[] = [];
  for (const route of routes) {
    try {
      await checkRoute(route);
      console.log(`✅ ${route}`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error(`❌ ${message}`);
      failures.push(message);
    }
  }

  if (failures.length > 0) {
    console.error(`\n${failures.length} hiba található.`);
    process.exit(1);
  }

  console.log('\nMinden ellenőrzött útvonal elérhető.');
}

main().catch(error => {
  console.error('Linkellenőrzés váratlanul megszakadt:', error);
  process.exit(1);
});
