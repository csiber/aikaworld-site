const routes = [
  '/',
  '/modes',
  '/progression',
  '/devlog',
  '/devlog/2024-09-20-community-playtest',
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
  '/hu',
  '/hu/modes',
  '/hu/progression',
  '/hu/devlog',
  '/hu/devlog/2024-09-20-community-playtest',
  '/hu/playtests',
  '/hu/creator-program',
  '/hu/characters',
  '/hu/characters/akari',
  '/hu/characters/komi',
  '/hu/characters/yui',
  '/hu/characters/hina',
  '/hu/characters/miyu',
  '/hu/presskit',
  '/hu/faq',
  '/hu/privacy',
  '/hu/terms',
  '/hu/legal/copyright',
  '/hu/legal/fan-content',
  '/hu/legal/trademark',
  '/hu/legal/changelog'
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
