# AIKA World Marketing Site

A statically exported Next.js 14 application that powers the public marketing presence of AIKA World. The project ships in English by default and provides a fully localised Hungarian experience for all published pages, including legal content.

## Development Environment

### Prerequisites

- Node.js 18 or newer (we recommend using [Volta](https://volta.sh/) or [nvm](https://github.com/nvm-sh/nvm) for version pinning)
- npm 9+

### Quick start

```bash
# install dependencies
npm install

# launch the development server at http://localhost:3000
npm run dev
```

Hot reloading is enabled out of the box. The site is fully static and does not require a database or additional backend services for local development.

## Build & Export

Static exports are produced for Cloudflare Pages deployments:

```bash
# production build (generates build metadata automatically)
npm run build

# optional SSR preview of the production build
npm run start

# export static files into ./out
npx next export

# optional: preview the exported bundle locally
npx serve out
```

The `out` directory contains the artefacts that should be deployed. You can chain everything together with `npm run build && npx next export`.

## Cloudflare Pages Configuration

| Setting                 | Value                                   |
|-------------------------|-----------------------------------------|
| Framework preset        | *None* (custom configuration)           |
| Build command           | `npm run build && npx next export`      |
| Build output directory  | `out`                                   |
| Node.js version         | `18`                                    |
| Environment variables   | `CF_ANALYTICS_TOKEN` (kötelező), `WAYBACK_SAVE_ON_DEPLOY` (opcionális) |

Ensure the build step runs the exact command pair above when setting up your own CI pipeline.

A Cloudflare Insights beacon csak akkor töltődik be, ha a `CF_ANALYTICS_TOKEN` környezeti változó meg van adva; ennek a tokennek a beállítása kötelező az éles telepítéshez.

## Internationalisation (i18n)

- Supported locales are defined in `lib/i18n/config.ts`. English (`en`) is the `defaultLocale`, Hungarian (`hu`) is the alternate locale, and locale detection is disabled in `next.config.js` to keep routing predictable.
- The middleware (`middleware.ts`) sets the `aika_locale` cookie, honours a visitor's `Accept-Language` header on first visit and redirects Hungarian speakers to `/hu` while keeping English traffic on the root paths.
- Translated strings live in `lib/i18n/dictionaries/en.ts` and `lib/i18n/dictionaries/hu.ts`. All components consume typed sections from these dictionaries via `getDictionary(locale)` so that TypeScript can warn on missing keys.
- New namespaces or strings must be added to both dictionaries at the same structural position. The `scripts/validate-translations.ts` script catches missing or mismatched keys during `npm run build`.

## Translation Workflow

1. Update the English copy first inside `lib/i18n/dictionaries/en.ts` (or `lib/legal/content.ts` for legal documents). Keep keys descriptive and group related strings into nested objects rather than flat maps.
2. Mirror the structure in `lib/i18n/dictionaries/hu.ts`, providing the Hungarian equivalent for every string. Keys cannot be omitted.
3. Run `npm run validate:translations` to confirm structural parity before committing.
4. Start the dev server (`npm run dev`) and review both `/` and `/hu` to confirm runtime rendering.
5. When translations touch SEO metadata, also verify Open Graph previews (`public/og/*`) and update alt text or captions accordingly.

## Editing Legal Pages

All legal content is centralised in `lib/legal/content.ts`. Each document (Terms of Use, Privacy Policy, Copyright/DMCA, Fan Content Policy, Trademark Guidelines and the changelog) is stored as a typed object that holds both English and Hungarian variants.

- Update the appropriate `sections`, `lists` and `subsections` arrays to modify copy. Use paragraphs for prose, lists for bullet/ordered content and keep metadata such as `lastUpdated` in ISO format (`YYYY-MM-DD`).
- The `LEGAL_EMAIL` constant and postal address definitions should be kept in sync when contact details change. Update both the English and Hungarian address blocks.
- Pages under `app/legal/*`, `app/privacy` and `app/terms` automatically render the shared content. No additional Markdown files are needed.
- After making changes, run `npm run build` to ensure the TypeScript structures compile and the Wayback archiving hook (see below) remains valid.

## Media Watermarking & Rights Metadata

All Open Graph and press assets are stored under `public/og/` (for static exports) and on the external CDN at `https://media.aikaworld.com`.

1. Always work from the canonical design source (Figma or layered SVG) that includes the AIKA World watermark group. Do not delete or rename the watermark layers when exporting.
2. When exporting SVGs, embed copyright metadata inside `<metadata>` tags (author, licence, source URL). Existing files provide examples that should be mirrored.
3. For raster assets (JPG/PNG) hosted on the CDN, apply the semi-transparent watermark in the bottom-right corner at 160px width for 1920px assets (scale proportionally for other sizes).
4. Optimise images with `svgo` (for SVG) or `squoosh`/`cwebp` (for raster) before committing. Avoid stripping metadata during optimisation.
5. Update component references to point at the new file names and validate share previews with the Facebook Sharing Debugger and Twitter Card Validator.

## Archiving & Compliance

- After `npm run build`, the `scripts/wayback-save.mjs` hook triggers if `WAYBACK_SAVE_ON_DEPLOY=true` is set. Provide a public `SITE_URL` (e.g. `https://aikaworld.com`) to request archival snapshots for both English and Hungarian routes.
- The script targets the homepage, primary marketing sections and all legal URLs. Failures are logged but do not break the deployment.
- Manual replays can be triggered locally with `WAYBACK_SAVE_ON_DEPLOY=true SITE_URL=https://staging.aikaworld.com npm run build`.

## Cloudflare R2 Media Storage

All imagery and video is delivered from `https://media.aikaworld.com`, backed by Cloudflare R2. Folder conventions:

- `presskit/` – logos, key art and screenshots for the press
- `teaser/` – homepage hero video poster (`teaser-poster.jpg`) and video assets (`teaser.webm`, `teaser.mp4`)
- `characters/` – hero images for character profiles
- `og/` – Open Graph preview images
- `screenshots/` – general gameplay captures

Follow the existing structure when adding new assets. Reference full URLs (`https://media.aikaworld.com/<path>`) inside Next.js components. CDN caching may require a few minutes to refresh.

## Performance Audit Checklist

The improvements from task 13 should be preserved. To re-run the audit:

1. `npm run build`
2. `npm run start`
3. Execute a Lighthouse audit (Chrome DevTools or `npx lighthouse http://localhost:3000 --view`).
4. Ensure desktop scores remain ≥ 90 and mobile scores ≥ 85. Capture screenshots locally; version control should not include binary audit artefacts.

## Minimum QA checklist

These steps provide baseline coverage for every marketing page and the global navigation links.

1. Telepítsd a Playwright böngészőket, ha korábban még nem tetted meg: `npx playwright install --with-deps`
2. Futtasd a több nézetes vizuális pillanatképeket: `npm run test:visual`
   - A parancs automatikusan elindítja a helyi Next.js szervert, és minden fő marketing, jogi, devlog és karakter oldalról ment egy snapshotot iPhone 12, iPad és 1440p desktop nézetben. Az eredmények a `test-results/` mappában jönnek létre, de nincsenek verziókezelve.
3. Indítsd el a fejlesztői szervert (`npm run dev`), majd egy második terminálban futtasd a törött link ellenőrzést: `npm run check:links`
   - A Linkinator 4xx/5xx státuszkódokat keres. A futás közben a szervert ne állítsd le.
4. Győződj meg arról, hogy a 404 oldal használható CTA-kat és kapcsolatfelvételi lehetőséget kínál mind EN, mind HU nyelven.

## Contact

For legal matters reach out via `legal@aikaworld.com` or the postal address listed on each legal page. For marketing collaboration requests, contact the studio through the press kit page.
