import pa11y from 'pa11y';

const baseUrl = process.env.A11Y_BASE_URL ?? 'http://localhost:3000';
const targetPaths = process.env.A11Y_PATHS
  ? process.env.A11Y_PATHS.split(',').map(path => path.trim()).filter(Boolean)
  : ['/', '/hu', '/modes', '/hu/modes', '/characters', '/hu/characters'];

async function runCheck(path: string) {
  const url = new URL(path, baseUrl).toString();
  const result = await pa11y(url, {
    standard: 'WCAG2AA',
    runners: ['axe'],
    timeout: 60000,
    hideElements: ['[data-pa11y-ignore]']
  });

  const issues = result.issues.filter(issue => issue.type === 'error');
  return {
    url,
    issues
  };
}

async function main() {
  console.log('A11y ellenőrzés indul a következő oldalakra:');
  targetPaths.forEach(path => console.log(` - ${new URL(path, baseUrl).toString()}`));

  const results = [] as Awaited<ReturnType<typeof runCheck>>[];

  for (const path of targetPaths) {
    try {
      const result = await runCheck(path);
      results.push(result);
    } catch (error) {
      console.error(`Hiba történt a következő oldal ellenőrzésekor: ${path}`);
      console.error(error instanceof Error ? error.message : error);
      process.exitCode = 1;
      return;
    }
  }

  let hasErrors = false;

  results.forEach(result => {
    if (result.issues.length === 0) {
      console.log(`✔ ${result.url}: nincs kritikus (error) típusú a11y probléma.`);
      return;
    }

    hasErrors = true;
    console.error(`✖ ${result.url}: ${result.issues.length} hiba található.`);
    result.issues.forEach(issue => {
      console.error(`  - ${issue.code} @ ${issue.selector}`);
      console.error(`    Üzenet: ${issue.message}`);
      if (issue.context) {
        console.error(`    Kontextus: ${issue.context}`);
      }
    });
  });

  if (hasErrors) {
    process.exitCode = 1;
  } else {
    console.log('A11y ellenőrzés sikeres: nincs hibaként jelölt probléma a vizsgált oldalakon.');
  }
}

main().catch(error => {
  console.error('A11y ellenőrzés futtatása közben hiba történt:');
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
