import type React from "react"
import type { Metadata } from "next"
import { EB_Garamond, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { AccessibilityProvider } from "@/components/accessibility-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "rakshi",
  description: "A personal website for work, art, and in-between notes.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ebGaramond.variable} ${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AccessibilityProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </AccessibilityProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
