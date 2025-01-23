"use client"

import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  return (
    <html lang="de">
      <body className={inter.className}>
        <div className="min-h-screen bg-black text-white">
          <header className="container mx-auto px-4 py-6 flex items-center justify-between border-b border-zinc-800">
            <Link href="/" className="w-32">
              <Image
                src="/logo.png"
                alt="Obas Car Corner Logo"
                width={120}
                height={60}
                className="w-full"
              />
            </Link>
            <nav className="hidden md:flex gap-8">
              <Link
                href="/fahrzeuge"
                className={`hover:text-gray-300 transition-colors ${
                  pathname === "/fahrzeuge" ? "text-white font-bold" : "text-gray-400"
                }`}
              >
                Fahrzeuge
              </Link>
              <Link
                href="/ueber-uns"
                className={`hover:text-gray-300 transition-colors ${
                  pathname === "/ueber-uns" ? "text-white font-bold" : "text-gray-400"
                }`}
              >
                Über uns
              </Link>
              <Link
                href="/kontakt"
                className={`hover:text-gray-300 transition-colors ${
                  pathname === "/kontakt" ? "text-white font-bold" : "text-gray-400"
                }`}
              >
                Kontakt
              </Link>
            </nav>
          </header>
          {children}
          <footer className="bg-zinc-950 py-8 border-t border-zinc-800">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-400">© 2024 Obas Car Corner. Alle Rechte vorbehalten.</div>
                <div className="flex gap-6">
                  <Link href="/datenschutz" className="text-sm text-gray-400 hover:text-white">
                    Datenschutz
                  </Link>
                  <Link href="/impressum" className="text-sm text-gray-400 hover:text-white">
                    Impressum
                  </Link>
                  <Link href="/agb" className="text-sm text-gray-400 hover:text-white">
                    AGB
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

