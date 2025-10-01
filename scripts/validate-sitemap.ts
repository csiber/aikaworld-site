import { XMLParser } from 'fast-xml-parser';

async function main() {
  const sitemapUrl = process.env.SITEMAP_URL ?? 'http://localhost:3000/sitemap.xml';
  const response = await fetch(sitemapUrl);

  if (!response.ok) {
    throw new Error(`Nem sikerült letölteni a sitemapet (${response.status} ${response.statusText}) a következő URL-ről: ${sitemapUrl}`);
  }

  const xml = await response.text();
  const parser = new XMLParser({ ignoreAttributes: false });
  const parsed = parser.parse(xml);

  const urlset = parsed?.urlset;
  if (!urlset) {
    throw new Error('A sitemap nem tartalmaz <urlset> gyökelemet.');
  }

  const rawUrls = urlset.url;
  const entries = Array.isArray(rawUrls) ? rawUrls : rawUrls ? [rawUrls] : [];

  if (entries.length === 0) {
    throw new Error('A sitemap nem tartalmaz egyetlen <url> elemet sem.');
  }

  const errors: string[] = [];

  entries.forEach((entry, index) => {
    const currentPath = `url[${index}]`;
    const loc = entry?.loc;

    if (!loc) {
      errors.push(`${currentPath}: hiányzik a <loc> elem.`);
      return;
    }

    try {
      // Ellenőrizzük, hogy érvényes abszolút URL-e.
      new URL(loc);
    } catch {
      errors.push(`${currentPath}: érvénytelen URL a <loc> mezőben: ${loc}`);
    }

    const lastmod = entry?.lastmod;
    if (lastmod && Number.isNaN(Date.parse(lastmod))) {
      errors.push(`${currentPath}: értelmezhetetlen <lastmod> dátum: ${lastmod}`);
    }

    const alternates = entry?.['xhtml:link'];
    if (alternates) {
      const links = Array.isArray(alternates) ? alternates : [alternates];
      links.forEach((link: Record<string, unknown>, altIndex) => {
        const rel = link?.['@_rel'];
        const hrefLang = link?.['@_hreflang'];
        const href = link?.['@_href'];

        if (rel !== 'alternate') {
          errors.push(`${currentPath}.alternates[${altIndex}]: a rel attribútum értéke nem 'alternate'.`);
        }

        if (typeof hrefLang !== 'string' || hrefLang.trim() === '') {
          errors.push(`${currentPath}.alternates[${altIndex}]: hiányzó vagy üres hreflang attribútum.`);
        }

        if (typeof href !== 'string' || href.trim() === '') {
          errors.push(`${currentPath}.alternates[${altIndex}]: hiányzó vagy üres href attribútum.`);
        } else {
          try {
            new URL(href);
          } catch {
            errors.push(`${currentPath}.alternates[${altIndex}]: érvénytelen alternate href: ${href}`);
          }
        }
      });
    }
  });

  if (errors.length > 0) {
    console.error('Sikertelen sitemap validáció:');
    errors.forEach(error => console.error(` - ${error}`));
    process.exitCode = 1;
    return;
  }

  console.log(`Sitemap validáció sikeres (${entries.length} URL).`);
}

main().catch(error => {
  console.error('Sitemap validáció közben hiba történt:');
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
