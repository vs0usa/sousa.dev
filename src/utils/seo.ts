const SITE_URL = "https://sousa.dev"
const SITE_NAME = "Vitor Sousa"
const SITE_TITLE = "Vitor Sousa - Développeur fullstack"
const SITE_DESCRIPTION = "Qui je suis, ce que je fais et sais faire."

export const SITE_LANG = "fr"

const SITE_LOCALE = "fr_FR"
const THEME_COLOR = "#0b0b0b"
const OG_IMAGE = `${SITE_URL}/opengraph-image.png`
const OG_IMAGE_ALT = "Vitor Sousa - Développeur fullstack"
const OG_IMAGE_WIDTH = "1200"
const OG_IMAGE_HEIGHT = "630"
const GITHUB_URL = "https://github.com/vs0usa"
const LINKEDIN_URL = "https://www.linkedin.com/in/vitor-gomes-de-sousa/"
const EMAIL = "vitor@sousa.dev"

interface MetaTag {
  readonly charSet?: string
  readonly content?: string
  readonly name?: string
  readonly property?: string
  readonly title?: string
}

interface LinkTag {
  readonly as?: string
  readonly crossOrigin?: "anonymous"
  readonly href: string
  readonly rel: string
  readonly sizes?: string
  readonly type?: string
}

export const seoMeta: readonly MetaTag[] = [
  { charSet: "utf-8" },
  { content: "width=device-width, initial-scale=1", name: "viewport" },
  { title: SITE_TITLE },
  { content: SITE_DESCRIPTION, name: "description" },
  { content: SITE_NAME, name: "author" },
  { content: SITE_NAME, name: "creator" },
  { content: THEME_COLOR, name: "theme-color" },
  { content: SITE_NAME, name: "apple-mobile-web-app-title" },
  { content: "yes", name: "mobile-web-app-capable" },

  { content: "index, follow", name: "robots" },
  {
    content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    name: "googlebot",
  },

  { content: "profile", property: "og:type" },
  { content: `${SITE_URL}/`, property: "og:url" },
  { content: SITE_TITLE, property: "og:title" },
  { content: SITE_DESCRIPTION, property: "og:description" },
  { content: SITE_NAME, property: "og:site_name" },
  { content: SITE_LOCALE, property: "og:locale" },
  { content: OG_IMAGE, property: "og:image" },
  { content: OG_IMAGE, property: "og:image:secure_url" },
  { content: "image/png", property: "og:image:type" },
  { content: OG_IMAGE_WIDTH, property: "og:image:width" },
  { content: OG_IMAGE_HEIGHT, property: "og:image:height" },
  { content: OG_IMAGE_ALT, property: "og:image:alt" },
  { content: "Vitor", property: "profile:first_name" },
  { content: "Sousa", property: "profile:last_name" },
  { content: "vs0usa", property: "profile:username" },

  { content: "summary_large_image", name: "twitter:card" },
  { content: SITE_TITLE, name: "twitter:title" },
  { content: SITE_DESCRIPTION, name: "twitter:description" },
  { content: OG_IMAGE, name: "twitter:image" },
  { content: OG_IMAGE_ALT, name: "twitter:image:alt" },
]

export const seoLinks: readonly LinkTag[] = [
  { href: `${SITE_URL}/`, rel: "canonical" },
  { href: "/site.webmanifest", rel: "manifest" },
  { href: "/favicon.ico", rel: "icon", sizes: "48x48" },
  { href: "/icon.svg", rel: "icon", type: "image/svg+xml" },
  { href: "/icon-96.png", rel: "icon", sizes: "96x96", type: "image/png" },
  { href: "/apple-touch-icon.png", rel: "apple-touch-icon", sizes: "180x180" },
  { href: `${SITE_URL}/sitemap.xml`, rel: "sitemap", type: "application/xml" },
]

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@id": `${SITE_URL}/#person`,
      "@type": "Person",
      address: {
        "@type": "PostalAddress",
        addressCountry: "FR",
        addressLocality: "Paris",
      },
      email: `mailto:${EMAIL}`,
      image: `${SITE_URL}/photo.jpg`,
      jobTitle: "Développeur fullstack",
      name: SITE_NAME,
      sameAs: [GITHUB_URL, LINKEDIN_URL],
      url: SITE_URL,
    },
    {
      "@id": `${SITE_URL}/#website`,
      "@type": "WebSite",
      description: SITE_DESCRIPTION,
      inLanguage: "fr-FR",
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#person` },
      url: SITE_URL,
    },
    {
      "@id": `${SITE_URL}/#webpage`,
      "@type": "ProfilePage",
      about: { "@id": `${SITE_URL}/#person` },
      description: SITE_DESCRIPTION,
      inLanguage: "fr-FR",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      name: SITE_TITLE,
      primaryImageOfPage: OG_IMAGE,
      url: `${SITE_URL}/`,
    },
  ],
}
