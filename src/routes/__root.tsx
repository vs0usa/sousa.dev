/// <reference types="vite/client" />
import type { ReactNode } from "react"
import fontLatin from "@fontsource-variable/ibm-plex-sans/files/ibm-plex-sans-latin-wght-normal.woff2?url"
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router"
import { Navbar } from "@/components/ui/navbar"
import appCss from "@/styles/app.css?url"
import { jsonLd, SITE_LANG, seoLinks, seoMeta } from "@/utils/seo"

export const Route = createRootRoute({
  head: () => ({
    links: [
      {
        as: "font",
        crossOrigin: "anonymous",
        href: fontLatin,
        rel: "preload",
        type: "font/woff2",
      },
      { href: appCss, rel: "stylesheet" },
      ...seoLinks,
    ],
    meta: [...seoMeta],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang={SITE_LANG}>
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main className="max-w-screen overflow-x-hidden px-2">{children}</main>
        <Scripts />
      </body>
    </html>
  )
}
