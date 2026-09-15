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
      // Preload the one subset the page actually uses so the text paints with
      // the right font without waiting on the stylesheet to be parsed first.
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
          // oxlint-disable-next-line react/no-danger -- JSON-LD has to be injected as raw text
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
