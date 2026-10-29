# AEINY website

React, TypeScript, Vite and Tailwind. The existing design and public page URLs are preserved.

## Run locally

```bash
npm ci
npm run dev
```

Validated with Node.js 24. Use `npm ci` to install the versions recorded in `package-lock.json`.

## Build and check

```bash
npm run build
npm run lint
npm run audit:project
```

The build creates `dist/`, including localized social metadata and a sitemap for every public route. For manual Netlify deployment, publish the contents of `dist/`. For a Git-connected build, use `npm run build` and publish directory `dist`.

The HTML generator supplies route-specific metadata for social crawlers. It does not prerender the React page body.

## Where content belongs

- `src/pages/` — page markup and page behavior.
- `src/components/` — shared presentation, including the reusable Chasqui Migrante card.
- `src/i18n/en/` and `src/i18n/es/` — interface text grouped by page/domain. `resources.ts` combines them without changing existing translation keys.
- `src/data/contact.ts` — community center contacts and official social links.
- `src/data/navigation.ts` — the shared desktop/mobile/footer menu.
- `src/data/routes.ts` — public routes and their SEO translation keys; shared by the router, metadata generator and sitemap.
- `src/data/site.ts` — site origin and social preview images.
- `src/data/home.ts`, `about.ts`, `ourWork.ts`, `projects.ts` — media paths, link destinations and structured page data.
- `src/data/events/chasquiMigrante2026.ts` — registration links, QR path and common event facts.
- `src/data/events/kuriChasqui2026.ts` — festival media, contacts and sponsors.
- `src/data/kuriChasqui2026.json` — the complete bilingual film catalog. Keep this filename: the catalog loader and image maintenance script use it.
- `src/data/festivalSchedule2026.ts` — daily festival program, translation keys and film IDs.
- `src/data/events/kuriChasquiFounders2026.ts` — structured bilingual founder biographies.
- `src/data/courses.ts` — the complete bilingual course catalog.
- `public/` — assets and hosting files used by the current site. Public URLs remain the same except for two byte-identical image aliases with permanent redirects.
- `archive/` — unused assets, obsolete translation copy and retired data, retained for reference. This directory is not copied into `dist/`.
- `docs/AUDIT_RU.md` — audit findings, checks and remaining editorial decisions.

## Updating content

Update both languages for interface text. The audit compares translation keys and interpolation placeholders. Existing English placeholders in Spanish pages have been preserved and are listed in the report.

The event uses the official Google Forms registration URL and the supplied QR image. There is no active internal Netlify registration form.

When adding a page, add it to `publicPageRoutes` in `src/data/routes.ts`, add its lazy loader in `src/app/router.tsx`, and provide its SEO keys. The build generates its metadata and sitemap entry. Course and film detail URLs come directly from their catalogs.

```bash
npm run audit:project -- --write-inventory
```

This refreshes `docs/public-assets.csv` with source references to deployed public files. The audit does not delete or rewrite site content.

`npm run sync:festival-images` is a separate, optional maintenance command that updates the film catalog from the files in the festival image directory. Run it only when deliberately updating film imagery and review its changes. It is not part of the production build.

The reviewed archive contains source and retained originals, without installed dependencies, Git history or generated build output. Extract it into a **new, empty directory**; overlaying it on the old tree would leave retired files behind. Keep your existing Git checkout/history separately when transferring the reviewed source into your own repository.
