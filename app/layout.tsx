import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Spreewerk Sanierung Berlin | Komplettsanierung & Renovierung',
    template: '%s | Spreewerk Sanierung Berlin',
  },
  description:
    'Professionelle Sanierung in Berlin und Brandenburg. Komplettsanierung, Badsanierung, Altbau, Wasserschäden. Festpreisangebot. Jetzt Termin anfragen.',
  metadataBase: new URL('https://spreewerk.de'),
  openGraph: {
    siteName: 'Spreewerk Sanierung Berlin',
    locale: 'de_DE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://spreewerk.de',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-warm-white text-dark antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
