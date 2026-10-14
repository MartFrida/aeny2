import { readFile, readdir, stat, writeFile } from 'node:fs/promises'
import { dirname, extname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const catalogPath = join(projectRoot, 'src', 'data', 'kuriChasqui2026.json')
const imageDirectory = join(
  projectRoot,
  'public',
  'images',
  'events',
  'festival-andino-2026',
  'films',
)
const publicImagePrefix = '/images/events/festival-andino-2026/films'
const supportedExtensions = new Set(['.webp', '.jpg', '.jpeg', '.png'])
const extensionPriority = ['.webp', '.jpg', '.jpeg', '.png']

function hasValidImageSignature(buffer, extension) {
  if (extension === '.webp') {
    return buffer.subarray(0, 4).toString() === 'RIFF' && buffer.subarray(8, 12).toString() === 'WEBP'
  }
  if (extension === '.jpg' || extension === '.jpeg') {
    return buffer[0] === 0xff && buffer[1] === 0xd8
  }
  if (extension === '.png') {
    return buffer.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
  }
  return false
}

function getLocalPath(publicUrl) {
  if (!publicUrl.startsWith('/') || publicUrl.startsWith('//')) return undefined

  let decodedPath
  try {
    decodedPath = decodeURIComponent(new URL(publicUrl, 'https://aeiny.invalid').pathname)
  } catch {
    return undefined
  }

  const localPath = resolve(projectRoot, 'public', `.${decodedPath}`)
  const publicDirectory = resolve(projectRoot, 'public')
  const pathFromPublic = relative(publicDirectory, localPath)
  if (pathFromPublic.startsWith('..') || pathFromPublic === '') return undefined
  return localPath
}

async function isExistingLocalImage(publicUrl) {
  const localPath = getLocalPath(publicUrl)
  if (!localPath) return !publicUrl.startsWith('/')

  try {
    return (await stat(localPath)).isFile()
  } catch {
    return false
  }
}

function choosePreferred(images) {
  return extensionPriority
    .map((extension) => images.find((image) => image.extension === extension))
    .find(Boolean)
}

async function main() {
  const catalog = JSON.parse(await readFile(catalogPath, 'utf8'))
  if (!Array.isArray(catalog)) throw new Error('The festival catalog must be a JSON array.')

  const filmsBySlug = new Map()
  for (const film of catalog) {
    if (typeof film.slug !== 'string' || !film.slug) {
      throw new Error('Every catalog film must have a non-empty slug.')
    }
    if (filmsBySlug.has(film.slug.toLowerCase())) {
      throw new Error(`Duplicate film slug in catalog: ${film.slug}`)
    }
    filmsBySlug.set(film.slug.toLowerCase(), film)
    if (film.gallery !== undefined && !Array.isArray(film.gallery)) {
      throw new Error(`The gallery field must be an array for film "${film.slug}".`)
    }
  }

  const names = await readdir(imageDirectory)
  const imagesByFilm = new Map()
  const unmatchedFiles = []
  let invalidImages = 0

  for (const name of names) {
    const extension = extname(name).toLowerCase()
    if (!supportedExtensions.has(extension)) continue

    const imagePath = join(imageDirectory, name)
    const imageStat = await stat(imagePath)
    if (!imageStat.isFile()) continue

    const contents = await readFile(imagePath)
    if (!hasValidImageSignature(contents, extension)) {
      unmatchedFiles.push(`${name} (invalid ${extension.slice(1)} file)`)
      invalidImages += 1
      continue
    }

    const stem = name.slice(0, -extname(name).length).toLowerCase()
    const isPoster = stem.endsWith('-poster')
    const slug = isPoster ? stem.slice(0, -'-poster'.length) : stem
    const film = filmsBySlug.get(slug)
    if (!film) {
      unmatchedFiles.push(name)
      continue
    }

    const image = {
      extension,
      name,
      publicUrl: `${publicImagePrefix}/${name}`,
    }
    const images = imagesByFilm.get(film.slug) ?? { posters: [], gallery: [] }
    images[isPoster ? 'posters' : 'gallery'].push(image)
    imagesByFilm.set(film.slug, images)
  }

  let changed = false
  let postersAdded = 0
  let galleryImagesAdded = 0
  let galleryImagesRemoved = 0

  for (const film of catalog) {
    const images = imagesByFilm.get(film.slug) ?? { posters: [], gallery: [] }
    const officialPoster = choosePreferred(images.posters)
    const additionalImage = choosePreferred(images.gallery)

    if (film.poster !== undefined && film.poster !== null && typeof film.poster !== 'string') {
      throw new Error(`The poster field must be a string or null for film "${film.slug}".`)
    }

    let poster = officialPoster?.publicUrl
    if (!poster && additionalImage) poster = additionalImage.publicUrl
    if (!poster && film.poster && (await isExistingLocalImage(film.poster))) poster = film.poster

    if (poster && film.poster !== poster) {
      film.poster = poster
      postersAdded += 1
      changed = true
    } else if (!poster && film.poster && !(await isExistingLocalImage(film.poster))) {
      film.poster = null
      changed = true
    }

    const existingGallery = film.gallery ?? []
    const gallery = []
    for (const image of existingGallery) {
      if (typeof image !== 'string') {
        throw new Error(`Every gallery item must be a string for film "${film.slug}".`)
      }
      if (!(await isExistingLocalImage(image))) {
        galleryImagesRemoved += 1
        continue
      }
      if (!gallery.includes(image)) gallery.push(image)
    }

    if (additionalImage && !gallery.includes(additionalImage.publicUrl)) {
      gallery.push(additionalImage.publicUrl)
      galleryImagesAdded += 1
    }

    if (gallery.length > 0 || film.gallery !== undefined) {
      if (JSON.stringify(film.gallery ?? []) !== JSON.stringify(gallery)) {
        film.gallery = gallery
        changed = true
      }
    }
  }

  if (changed) {
    await writeFile(catalogPath, `${JSON.stringify(catalog, null, 2)}\n`, 'utf8')
  }

  console.log(`Catalog films preserved: ${catalog.length}`)
  console.log(`Poster paths added or synchronized: ${postersAdded}`)
  console.log(`Gallery images added: ${galleryImagesAdded}`)
  console.log(`Missing gallery references removed: ${galleryImagesRemoved}`)
  console.log(`Catalog updated: ${changed ? 'yes' : 'no changes needed'}`)
  if (unmatchedFiles.length > 0) {
    console.warn('Image files not matched to a catalog slug:')
    for (const name of unmatchedFiles) console.warn(`  - ${name}`)
  } else {
    console.log('Unmatched supported image files: none')
  }
  if (invalidImages > 0) {
    console.warn(`Invalid supported image files skipped: ${invalidImages}`)
  }
}

main().catch((error) => {
  console.error('Could not synchronize festival images:', error)
  process.exitCode = 1
})
