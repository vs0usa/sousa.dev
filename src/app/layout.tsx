import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/ui/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vitor Sousa - Développeur fullstack",
  description: "Qui je suis, ce que je fais et sais faire.",
  appleWebApp: { title: "Vitor Sousa" },
  authors: [{ name: "Vitor Sousa", url: "https://sousa.dev" }],
  creator: "Vitor Sousa",
}

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="max-w-screen overflow-x-hidden px-2">{children}</main>
      </body>
    </html>
  )
}
