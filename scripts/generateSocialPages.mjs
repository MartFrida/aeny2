import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { createServer } from 'vite'

const root = process.cwd()
const outputDirectory = path.join(root, 'dist')
const vite = await createServer({
  configFile: path.join(root, 'vite.config.ts'),
  appType: 'custom',
  logLevel: 'error',
  server: { middlewareMode: true },
})

let courses
let films
let locales
let publicPageRoutes
let filmRoutePrefix
let siteConfig
try {
  ;({ courses } = await vite.ssrLoadModule('/src/data/courses.ts'))
  ;({ kuriChasqui2026Films: films } = await vite.ssrLoadModule(
    '/src/data/events/kuriChasquiCatalog.ts',
  ))
  ;({ translations: locales } = await vite.ssrLoadModule('/src/i18n/resources.ts'))
  ;({ publicPageRoutes, filmRoutePrefix } = await vite.ssrLoadModule('/src/data/routes.ts'))
  ;({ siteConfig } = await vite.ssrLoadModule('/src/data/site.ts'))
} finally {
  await vite.close()
}

const siteUrl = siteConfig.url
const routes = [
  ...publicPageRoutes.map((page) => page.path),
  ...courses.map((course) => `courses/${course.slug}`),
  ...films.map((film) => `${filmRoutePrefix}${film.slug}`),
]

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')

function metaTag(attribute, key, value) {
  return `<meta ${attribute}="${escapeHtml(key)}" content="${escapeHtml(value)}" />`
}

function setMeta(html, attribute, key, value) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const expression = new RegExp(
    `<meta\\b(?=[^>]*\\b${attribute}\\s*=\\s*["']${escapedKey}["'])[^>]*>`,
    'gi',
  )
  const replacement = metaTag(attribute, key, value)
  let seen = false
  html = html.replace(expression, () => {
    if (seen) return ''
    seen = true
    return replacement
  })
  if (!seen) html = html.replace('</head>', `  ${replacement}\n  </head>`)
  return html
}

function setLink(html, rel, attributes) {
  const expression = new RegExp(
    `<link\\b(?=[^>]*\\brel\\s*=\\s*["']${rel}["'])[^>]*>`,
    'gi',
  )
  let seen = false
  const link = `<link rel="${rel}" ${Object.entries(attributes)
    .map(([key, value]) => `${key}="${escapeHtml(value)}"`)
    .join(' ')} />`
  html = html.replace(expression, () => {
    if (seen) return ''
    seen = true
    return link
  })
  if (!seen) html = html.replace('</head>', `  ${link}\n  </head>`)
  return html
}

function metadataFor(locale, route) {
  const t = locales[locale]
  const page = publicPageRoutes.find((entry) => entry.path === route)
  if (page) {
    const copy = t[page.translationKey]
    return { title: copy.seoTitle, description: copy.seoDescription }
  }

  const course = courses.find((entry) => route === `courses/${entry.slug}`)
  if (course) {
    const courseTitle = locale === 'es' ? course.titleEs : course.titleEn
    const summary = locale === 'es' ? course.summaryEs : course.summaryEn
    return {
      title: t.courses.detail.seoTitle.replace('{{course}}', courseTitle),
      description: summary,
    }
  }

  const filmPrefix = filmRoutePrefix
  if (route.startsWith(filmPrefix)) {
    const film = films.find(
      (entry) => route === `${filmPrefix}${entry.slug}`,
    )
    if (film) {
      const synopsis =
        locale === 'es'
          ? film.synopsisEs || t.festival2026.seoDescription
          : film.synopsisEn || t.festival2026.seoDescription
      return {
        title: `${film.title} | ${t.festival2026.selectionTitle} | AEINY`,
        description: synopsis,
      }
    }
  }
  return null
}

async function writePage(template, locale, route, metadata) {
  const localizedRoute = `/${locale}${route ? `/${route}` : ''}`
  const canonicalUrl = `${siteUrl}${localizedRoute}`
  const imageUrl = `${siteUrl}${siteConfig.socialImages[locale]}`
  const imageAlt = siteConfig.socialImageAlts[locale]
  let html = template.replace(/<html\b[^>]*>/i, `<html lang="${locale}">`)
  html = html.replace(/<title>[\s\S]*?<\/title>/gi, '')
  html = html.replace('</head>', `  <title>${escapeHtml(metadata.title)}</title>\n  </head>`)

  const tags = [
    ['name', 'description', metadata.description],
    ['property', 'og:type', 'website'],
    ['property', 'og:site_name', 'AEINY'],
    ['property', 'og:title', metadata.title],
    ['property', 'og:description', metadata.description],
    ['property', 'og:url', canonicalUrl],
    ['property', 'og:image', imageUrl],
    ['property', 'og:image:secure_url', imageUrl],
    ['property', 'og:image:type', 'image/jpeg'],
    ['property', 'og:image:width', '1200'],
    ['property', 'og:image:height', '630'],
    ['property', 'og:image:alt', imageAlt],
    ['property', 'og:locale', locale === 'es' ? 'es_US' : 'en_US'],
    ['name', 'twitter:card', 'summary_large_image'],
    ['name', 'twitter:title', metadata.title],
    ['name', 'twitter:description', metadata.description],
    ['name', 'twitter:image', imageUrl],
    ['name', 'twitter:image:alt', imageAlt],
  ]
  for (const [attribute, key, value] of tags) {
    html = setMeta(html, attribute, key, value)
  }
  html = html.replace(
    /<meta\b(?=[^>]*\bproperty\s*=\s*["']og:locale:alternate["'])[^>]*>\s*/gi,
    '',
  )
  html = setLink(html, 'canonical', { href: canonicalUrl })
  html = html.replace(
    /<link\b(?=[^>]*\brel\s*=\s*["']alternate["'])[^>]*\bhreflang\s*=\s*["'](?:en|es)["'][^>]*>\s*/gi,
    '',
  )
  for (const alternateLocale of ['en', 'es']) {
    const alternateRoute = `/${alternateLocale}${route ? `/${route}` : ''}`
    const link = `<link rel="alternate" hreflang="${alternateLocale}" href="${siteUrl}${alternateRoute}" />`
    html = html.replace('</head>', `  ${link}\n  </head>`)
  }

  const segments = localizedRoute.replace(/^\/+/, '').split('/')
  const filename = `${segments.pop()}.html`
  const cleanUrlTarget = path.join(outputDirectory, ...segments, filename)
  const directoryIndexTarget = path.join(
    outputDirectory,
    localizedRoute.replace(/^\/+/, ''),
    'index.html',
  )
  await mkdir(path.dirname(cleanUrlTarget), { recursive: true })
  await mkdir(path.dirname(directoryIndexTarget), { recursive: true })
  await Promise.all([
    writeFile(cleanUrlTarget, html),
    writeFile(directoryIndexTarget, html),
  ])
}

const template = await readFile(path.join(outputDirectory, 'index.html'), 'utf8')
let pageCount = 0
for (const locale of ['en', 'es']) {
  for (const route of routes) {
    const metadata = metadataFor(locale, route)
    if (!metadata) throw new Error(`Missing social metadata for /${locale}/${route}`)
    await writePage(template, locale, route, metadata)
    pageCount += 1
  }
}

const englishHome = await readFile(path.join(outputDirectory, 'en.html'), 'utf8')
await writeFile(path.join(outputDirectory, 'index.html'), englishHome)
console.log(`Generated localized social metadata for ${pageCount} public routes.`)

const sitemapEntries = ['en', 'es'].flatMap((locale) => routes.map((route) => {
  const localizedPath = `/${locale}${route ? `/${route}` : ''}`
  const alternates = ['en', 'es'].map((alternate) =>
    `    <xhtml:link rel="alternate" hreflang="${alternate}" href="${escapeHtml(`${siteUrl}/${alternate}${route ? `/${route}` : ''}`)}" />`,
  ).join('\n')
  return `  <url>\n    <loc>${escapeHtml(`${siteUrl}${localizedPath}`)}</loc>\n${alternates}\n  </url>`
}))
await writeFile(path.join(outputDirectory, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sitemapEntries.join('\n')}\n</urlset>\n`,
)
console.log(`Generated sitemap for ${pageCount} public routes.`)
