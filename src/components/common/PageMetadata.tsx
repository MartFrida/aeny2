import { useEffect } from 'react'

type PageMetadataProps = {
  language: string
  title: string
  description: string
  canonicalPath: string
  includeOrganizationData?: boolean
}

export function PageMetadata({
  language,
  title,
  description,
  canonicalPath,
  includeOrganizationData = false,
}: PageMetadataProps) {
  useEffect(() => {
    const previousTitle = document.title
    const previousLanguage = document.documentElement.lang
    const metadata = [
      { selector: 'meta[name="description"]', attribute: 'name', key: 'description', content: description },
      { selector: 'meta[property="og:title"]', attribute: 'property', key: 'og:title', content: title },
      { selector: 'meta[property="og:description"]', attribute: 'property', key: 'og:description', content: description },
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
    canonical.href = `https://www.aeiny.org${canonicalPath}`
    if (!existingCanonical) document.head.append(canonical)

    let organizationData: HTMLScriptElement | undefined
    if (includeOrganizationData) {
      organizationData = document.createElement('script')
      organizationData.type = 'application/ld+json'
      organizationData.dataset.organization = 'true'
      organizationData.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Alianza Ecuatoriana Internacional',
        url: 'https://www.aeiny.org/',
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
      organizationData?.remove()
    }
  }, [canonicalPath, description, includeOrganizationData, language, title])

  return null
}
