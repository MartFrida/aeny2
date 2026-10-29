import { readFile, readdir, stat, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import ts from 'typescript'
import { createServer } from 'vite'

const root = process.cwd()
const errors = []
const report = (condition, message) => { if (!condition) errors.push(message) }
async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  return (await Promise.all(entries.map((entry) => entry.isDirectory()
    ? walk(path.join(directory, entry.name)) : [path.join(directory, entry.name)]))).flat()
}
const sourceFiles = (await walk(path.join(root, 'src'))).filter((file) => /\.(?:tsx?|jsx?|json|css)$/.test(file))
const fileSet = new Set(sourceFiles)
const imports = new Map()
const strings = []
const templates = []
const literalKeys = []
const relative = (file) => path.relative(root, file).replaceAll(path.sep, '/')
function resolveLocal(file, specifier) {
  const base = path.resolve(path.dirname(file), specifier)
  return [base, ...['.ts', '.tsx', '.js', '.jsx', '.json', '.css'].map((suffix) => base + suffix),
    path.join(base, 'index.ts'), path.join(base, 'index.tsx')].find((candidate) => fileSet.has(candidate))
}
for (const file of sourceFiles.filter((entry) => /\.[jt]sx?$/.test(entry))) {
  const source = ts.createSourceFile(file, await readFile(file, 'utf8'), ts.ScriptTarget.Latest, true)
  const dependencies = []
  function addImport(specifier) {
    if (!specifier?.startsWith('.')) return
    const resolved = resolveLocal(file, specifier)
    report(Boolean(resolved), `Missing local import: ${relative(file)} -> ${specifier}`)
    if (resolved) dependencies.push(resolved)
  }
  function visit(node) {
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) strings.push({ file, value: node.text })
    if (ts.isTemplateExpression(node)) templates.push({ file, value: node.head.text + node.templateSpans.map((span) => '*' + span.literal.text).join('') })
    if (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) addImport(node.moduleSpecifier?.text)
    if (ts.isImportTypeNode(node) && ts.isLiteralTypeNode(node.argument)) addImport(node.argument.literal.text)
    if (ts.isCallExpression(node) && node.expression.kind === ts.SyntaxKind.ImportKeyword) addImport(node.arguments[0]?.text)
    if (ts.isCallExpression(node) && ts.isIdentifier(node.expression) && node.expression.text === 't') {
      const argument = node.arguments[0]
      if (argument && ts.isStringLiteral(argument)) literalKeys.push({ file, key: argument.text })
    }
    ts.forEachChild(node, visit)
  }
  visit(source)
  imports.set(file, dependencies)
}
const reachable = new Set()
const queue = [path.join(root, 'src/main.tsx')]
while (queue.length) {
  const file = queue.pop()
  if (reachable.has(file)) continue
  reachable.add(file)
  queue.push(...(imports.get(file) ?? []))
}
const unusedSource = sourceFiles.filter((file) => !reachable.has(file) && !file.endsWith('.d.ts'))
for (const file of unusedSource) errors.push(`Unreachable source file: ${relative(file)}`)

const vite = await createServer({ configFile: path.join(root, 'vite.config.ts'), appType: 'custom', logLevel: 'error', server: { middlewareMode: true } })
let translations, courses, films, schedule, pageRoutes, filmPrefix, siteConfig
try {
  ;({ translations } = await vite.ssrLoadModule('/src/i18n/resources.ts'))
  ;({ courses } = await vite.ssrLoadModule('/src/data/courses.ts'))
  ;({ kuriChasqui2026Films: films } = await vite.ssrLoadModule('/src/data/events/kuriChasquiCatalog.ts'))
  ;({ festivalSchedule2026: schedule } = await vite.ssrLoadModule('/src/data/festivalSchedule2026.ts'))
  ;({ publicPageRoutes: pageRoutes, filmRoutePrefix: filmPrefix } = await vite.ssrLoadModule('/src/data/routes.ts'))
  ;({ siteConfig } = await vite.ssrLoadModule('/src/data/site.ts'))
} finally { await vite.close() }
function flatten(value, prefix = '', result = {}) {
  for (const [key, entry] of Object.entries(value)) {
    const next = prefix ? `${prefix}.${key}` : key
    if (entry && typeof entry === 'object') flatten(entry, next, result)
    else result[next] = entry
  }
  return result
}
const flattened = { en: flatten(translations.en), es: flatten(translations.es) }
const allKeys = new Set([...Object.keys(flattened.en), ...Object.keys(flattened.es)])
function getKey(dictionary, key) { return key.split('.').reduce((value, part) => value?.[part], dictionary) }
function keyExists(dictionary, key) {
  return getKey(dictionary, key) !== undefined || ['_one', '_other'].every((suffix) => getKey(dictionary, key + suffix) !== undefined)
}
for (const key of allKeys) {
  report(key in flattened.en && key in flattened.es, `Translation key mismatch: ${key}`)
  if (typeof flattened.en[key] === 'string' && typeof flattened.es[key] === 'string') {
    const variables = (text) => [...text.matchAll(/{{\s*([\w.]+)\s*}}/g)].map((match) => match[1]).sort().join(',')
    report(variables(flattened.en[key]) === variables(flattened.es[key]), `Interpolation mismatch: ${key}`)
  }
}
for (const { file, key } of literalKeys) for (const language of ['en', 'es']) {
  report(keyExists(translations[language], key), `Missing ${language} translation: ${relative(file)} -> ${key}`)
}
function checkUnique(entries, property, label) {
  const seen = new Set()
  for (const entry of entries) {
    report(entry[property] !== undefined && !seen.has(entry[property]), `Missing or duplicate ${label} ${property}: ${entry[property]}`)
    seen.add(entry[property])
  }
}
for (const [entries, label] of [[films, 'film'], [courses, 'course']]) {
  checkUnique(entries, 'id', label); checkUnique(entries, 'slug', label)
}
const filmIds = new Set(films.map((film) => film.id))
for (const day of schedule) for (const item of day.items) {
  if (item.filmId !== undefined) report(filmIds.has(item.filmId), `Unknown schedule filmId ${item.filmId}`)
}
for (const page of pageRoutes) for (const language of ['en', 'es']) {
  const copy = translations[language][page.translationKey]
  report(Boolean(copy?.seoTitle && copy?.seoDescription), `Missing SEO copy: ${language}/${page.path}`)
}

const publicDirectory = path.join(root, 'public')
const publicFiles = await walk(publicDirectory)
const assetPaths = new Set(publicFiles.map((file) => path.relative(publicDirectory, file).replaceAll(path.sep, '/')))
const references = new Map()
function addReference(value, file) {
  if (!value.startsWith('/') || value.startsWith('//')) return
  const urlPath = decodeURIComponent(value.split(/[?#]/, 1)[0]).slice(1)
  if (!/\.(?:webp|jpe?g|png|ico|svg|webmanifest)$/.test(urlPath)) return
  report(assetPaths.has(urlPath), `Missing public asset: ${relative(file)} -> ${value}`)
  if (!references.has(urlPath)) references.set(urlPath, new Set())
  references.get(urlPath).add(relative(file))
}
const activeStrings = strings.filter(({ file }) => reachable.has(file))
for (const { file, value } of activeStrings) addReference(value, file)
// Film catalog JSON is data, not a JavaScript import expression.
for (const film of films) for (const value of [film.poster, ...(film.gallery ?? [])]) {
  if (typeof value === 'string') addReference(value, path.join(root, 'src/data/kuriChasqui2026.json'))
}
const templatePrefixes = templates.filter(({ file, value }) => reachable.has(file) && value.startsWith('/images/'))
for (const asset of assetPaths) {
  const basename = path.posix.basename(asset)
  const values = activeStrings.filter(({ value }) => value === basename)
  const template = templatePrefixes.find(({ value }) => `/${asset}`.startsWith(value.split('*')[0]))
  if (values.length && template) addReference(`/${asset}`, template.file)
}
const indexFile = path.join(root, 'index.html')
for (const match of (await readFile(indexFile, 'utf8')).matchAll(/(?:href|src)=["']([^"']+)["']/g)) addReference(match[1], indexFile)
const manifestFile = path.join(publicDirectory, 'site.webmanifest')
const manifest = JSON.parse(await readFile(manifestFile, 'utf8'))
for (const icon of manifest.icons ?? []) addReference(icon.src, manifestFile)
const hostingFiles = new Set(['_redirects', 'robots.txt', 'site.webmanifest'])
const unusedAssets = [...assetPaths].filter((asset) => !references.has(asset) && !hostingFiles.has(asset))
for (const asset of unusedAssets) errors.push(`Public file without a source reference: ${asset}`)

const routes = [...pageRoutes.map((page) => page.path), ...courses.map((course) => `courses/${course.slug}`), ...films.map((film) => `${filmPrefix}${film.slug}`)]
const expectedUrls = ['en', 'es'].flatMap((locale) => routes.map((route) => `${siteConfig.url}/${locale}${route ? `/${route}` : ''}`))
try {
  const sitemap = await readFile(path.join(root, 'dist/sitemap.xml'), 'utf8')
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
  report(urls.length === expectedUrls.length && new Set(urls).size === urls.length, 'Built sitemap route count mismatch')
  for (const url of expectedUrls) report(urls.includes(url), `Missing sitemap URL: ${url}`)
} catch { errors.push('Build output is missing; run npm run build before npm run audit:project.') }
if (process.argv.includes('--write-inventory')) {
  const quote = (value) => `"${String(value).replaceAll('"', '""')}"`
  const rows = [['path', 'bytes', 'usage', 'source_files']]
  for (const asset of [...assetPaths].sort()) rows.push([asset, (await stat(path.join(publicDirectory, asset))).size,
    hostingFiles.has(asset) ? 'hosting' : references.has(asset) ? 'referenced' : 'unreferenced', [...(references.get(asset) ?? [])].sort().join('; ')])
  await mkdir(path.join(root, 'docs'), { recursive: true })
  await writeFile(path.join(root, 'docs/public-assets.csv'), '\ufeff' + rows.map((row) => row.map(quote).join(',')).join('\n') + '\n')
}
console.log(`Source files: ${sourceFiles.length}; unreachable: ${unusedSource.length}`)
console.log(`Public files: ${assetPaths.size}; without a reference: ${unusedAssets.length}`)
console.log(`Translation keys: ${allKeys.size}; EN/ES schema and placeholders checked`)
console.log(`Films: ${films.length}; courses: ${courses.length}; public routes: ${expectedUrls.length}`)
if (errors.length) { for (const error of errors) console.error(error); process.exitCode = 1 }
else console.log('Project structure audit passed.')
