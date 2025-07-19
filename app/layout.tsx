// Added Google Search Console verification meta tag
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fuel Price Pros - Big Fleet Discounts for Growing Operations",
  description:
    "Helping growing fleets and owner-operators access big fleet savings with smart tactics and smarter tech. Fuel cards, consulting, and aerodynamic upgrades.",
  verification: {
    google: "z-IHbVHwO_KNtsF_3gPMiVCit89IgQ4YUkTDPJeLcrE",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Analytics />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
