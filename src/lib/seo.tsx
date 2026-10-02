import { useEffect } from 'react'

type SeoProps = {
  title: string
  description: string
  image?: string
}

export function Seo({ title, description, image }: SeoProps) {
  useEffect(() => {
    document.title = title

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) metaDescription.setAttribute('content', description)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', title)

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) ogDescription.setAttribute('content', description)

    if (image) {
      const ogImage = document.querySelector('meta[property="og:image"]')
      if (ogImage) ogImage.setAttribute('content', image)
    }
  }, [description, image, title])

  return null
}
