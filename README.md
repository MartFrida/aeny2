# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Event registration notifications

For Chasqui Migrante 2026 registrations, configure Netlify Form Notifications in the Netlify dashboard:

**Forms → Form notifications → Add notification → Email notification → `info.ccandino@gmail.com`**

The registration form stores submissions as `chasqui-migrante-2026-registration`. An optional secure payment link can be configured with the `VITE_CHASQUI_PAYMENT_URL` environment variable.

## Social previews and route metadata

The production build runs `scripts/generateSocialPages.mjs` after Vite and writes localized static HTML for each public route. Netlify serves these route-specific HTML files so social crawlers receive page titles, descriptions, canonical URLs, Open Graph and Twitter Card metadata without executing JavaScript. Spanish routes use `/og-image.jpg`; English routes use `/og-image-en.jpg`. Keep this generator and its route metadata in sync when adding public routes.
