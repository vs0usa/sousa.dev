import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vitor Sousa - Développeur fullstack",
  description: "",
  appleWebApp: {
    title: "Vitor Sousa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="max-w-screen overflow-x-hidden px-2">{children}</main>
      </body>
    </html>
  );
}
