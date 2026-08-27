import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Réné KOMTSINDI — Élève ingénieur logiciel | Data Engineering",
  description:
    "Portfolio de Réné Alban Komtsindi, élève ingénieur en 5e année (2026–2027), option génie logiciel, en spécialisation Data Engineering. Projets MicroRecouv, lakehouse, AquaSensus.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange storageKey="portefolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
