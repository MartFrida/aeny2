import { siteConfig } from '../../data/site'
import { useEffect } from 'react'
import { contactInfo } from '../../data/contact'

type PageMetadataProps = {
  language: string
  title: string
  description: string
  canonicalPath: string
  alternateLanguagePaths?: Partial<Record<'en' | 'es', string>>
  includeOrganizationData?: boolean
}

export function PageMetadata({
  language,
  title,
  description,
  canonicalPath,
  alternateLanguagePaths,
  includeOrganizationData = false,
}: PageMetadataProps) {
  useEffect(() => {
    const siteUrl = siteConfig.url
    const locale = language === 'es' ? 'es' : 'en'
    const imageUrl = `${siteUrl}${siteConfig.socialImages[locale]}`
    const imageAlt = siteConfig.socialImageAlts[locale]
    const previousTitle = document.title
    const previousLanguage = document.documentElement.lang
    const metadata = [
      { selector: 'meta[name="description"]', attribute: 'name', key: 'description', content: description },
      { selector: 'meta[property="og:title"]', attribute: 'property', key: 'og:title', content: title },
      { selector: 'meta[property="og:description"]', attribute: 'property', key: 'og:description', content: description },
      { selector: 'meta[property="og:type"]', attribute: 'property', key: 'og:type', content: 'website' },
      { selector: 'meta[property="og:url"]', attribute: 'property', key: 'og:url', content: `${siteUrl}${canonicalPath}` },
      { selector: 'meta[property="og:image"]', attribute: 'property', key: 'og:image', content: imageUrl },
      { selector: 'meta[property="og:image:secure_url"]', attribute: 'property', key: 'og:image:secure_url', content: imageUrl },
      { selector: 'meta[property="og:image:type"]', attribute: 'property', key: 'og:image:type', content: 'image/jpeg' },
      { selector: 'meta[property="og:image:width"]', attribute: 'property', key: 'og:image:width', content: '1200' },
      { selector: 'meta[property="og:image:height"]', attribute: 'property', key: 'og:image:height', content: '630' },
      { selector: 'meta[property="og:image:alt"]', attribute: 'property', key: 'og:image:alt', content: imageAlt },
      { selector: 'meta[property="og:locale"]', attribute: 'property', key: 'og:locale', content: language === 'es' ? 'es_US' : 'en_US' },
      { selector: 'meta[name="twitter:card"]', attribute: 'name', key: 'twitter:card', content: 'summary_large_image' },
      { selector: 'meta[name="twitter:title"]', attribute: 'name', key: 'twitter:title', content: title },
      { selector: 'meta[name="twitter:description"]', attribute: 'name', key: 'twitter:description', content: description },
      { selector: 'meta[name="twitter:image"]', attribute: 'name', key: 'twitter:image', content: imageUrl },
      { selector: 'meta[name="twitter:image:alt"]', attribute: 'name', key: 'twitter:image:alt', content: imageAlt },
    ].map(({ selector, attribute, key, content }) => {
      const existing = document.head.querySelector<HTMLMetaElement>(selector)
      const meta = existing ?? document.createElement('meta')
      const previousContent = existing?.content
      meta.setAttribute(attribute, key)
      meta.content = content
      if (!existing) document.head.append(meta)
      return { meta, previousContent, created: !existing }
    })
    const existingCanonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    const canonical = existingCanonical ?? document.createElement('link')
    const previousCanonical = existingCanonical?.href
    canonical.rel = 'canonical'
    canonical.href = `${siteUrl}${canonicalPath}`
    if (!existingCanonical) document.head.append(canonical)

    const alternateLinks = Object.entries(alternateLanguagePaths ?? {}).map(([locale, path]) => {
      const existing = document.head.querySelector<HTMLLinkElement>(
        `link[rel="alternate"][hreflang="${locale}"]`,
      )
      const link = existing ?? document.createElement('link')
      const previousHref = existing?.href
      link.rel = 'alternate'
      link.hreflang = locale
      link.href = `${siteUrl}${path}`
      if (!existing) document.head.append(link)
      return { link, previousHref, created: !existing }
    })

    let organizationData: HTMLScriptElement | undefined
    if (includeOrganizationData) {
      organizationData = document.createElement('script')
      organizationData.type = 'application/ld+json'
      organizationData.dataset.organization = 'true'
      organizationData.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Alianza Ecuatoriana Internacional',
        url: `${siteConfig.url}/`,
        telephone: contactInfo.phone,
        email: contactInfo.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: contactInfo.addressLine1,
          addressLocality: 'Corona',
          addressRegion: 'NY',
          addressCountry: 'US',
        },
        sameAs: [contactInfo.tiktok],
      })
      document.head.append(organizationData)
    }

    document.title = title
    document.documentElement.lang = language

    return () => {
      document.title = previousTitle
      document.documentElement.lang = previousLanguage
      metadata.forEach(({ meta, previousContent, created }) => {
        if (created) meta.remove()
        else if (previousContent !== undefined) meta.content = previousContent
        else meta.removeAttribute('content')
      })
      if (existingCanonical) {
        if (previousCanonical) canonical.href = previousCanonical
        else canonical.removeAttribute('href')
      } else canonical.remove()
      alternateLinks.forEach(({ link, previousHref, created }) => {
        if (created) link.remove()
        else if (previousHref) link.href = previousHref
        else link.removeAttribute('href')
      })
      organizationData?.remove()
    }
  }, [alternateLanguagePaths, canonicalPath, description, includeOrganizationData, language, title])

  return null
}
