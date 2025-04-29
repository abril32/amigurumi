import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Amigurumi Shop",
  description: "Handmade amigurumi toys for everyone",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="max-w-6xl mx-auto px-4">
          <header className="flex justify-between items-center py-4 border-b">
            <div className="font-bold text-xl">Logotipo</div>
            <nav className="flex gap-4">
              <Link href="/about" className="hover:underline">
                Sobre nosotros
              </Link>
              <Link href="/contact" className="hover:underline">
                Contactanos
              </Link>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
