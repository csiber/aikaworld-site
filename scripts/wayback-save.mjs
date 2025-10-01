const shouldSave = process.env.WAYBACK_SAVE_ON_DEPLOY === 'true';

if (!shouldSave) {
  console.log('[wayback] Skipped (WAYBACK_SAVE_ON_DEPLOY not set to "true").');
  process.exit(0);
}

const siteUrl = process.env.SITE_URL;

if (!siteUrl) {
  console.error('[wayback] Missing SITE_URL environment variable.');
  process.exit(1);
}

const paths = ['/', '/privacy', '/terms', '/legal/copyright', '/legal/fan-content', '/legal/trademark', '/legal/changelog'];
const prefixes = ['', '/hu'];

const targets = new Set();

for (const prefix of prefixes) {
  for (const path of paths) {
    const combined = prefix === '' ? path : path === '/' ? prefix : `${prefix}${path}`;
    const url = new URL(combined, siteUrl).toString();
    targets.add(url);
  }
}

async function save(url) {
  const endpoint = `https://web.archive.org/save/${encodeURIComponent(url)}`;
  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'User-Agent': 'AIKA-World-Legal-Automation/1.0'
      }
    });
    if (!response.ok) {
      console.warn(`[wayback] Failed to archive ${url}: ${response.status} ${response.statusText}`);
    } else {
      console.log(`[wayback] Archive requested for ${url}`);
    }
  } catch (error) {
    console.warn(`[wayback] Error archiving ${url}:`, error instanceof Error ? error.message : error);
  }
}

for (const url of targets) {
  // eslint-disable-next-line no-await-in-loop
  await save(url);
}
