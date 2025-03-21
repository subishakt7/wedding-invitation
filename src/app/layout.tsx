import { Metadata } from 'next'
import { Dancing_Script, Cormorant_Garamond, Playfair_Display } from 'next/font/google'
import './globals.css'
import { COUPLE_INFO, WEDDING_EVENTS } from "@/constants/wedding"

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-dancing',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: `${COUPLE_INFO.groom.name} & ${COUPLE_INFO.bride.name} Wedding Reception`,
  description: `Join us in celebrating the wedding reception of ${COUPLE_INFO.groom.name} and ${COUPLE_INFO.bride.name}. Together with their families, we invite you to share in our joy on ${WEDDING_EVENTS.reception.date} at ${WEDDING_EVENTS.reception.venue}.`,
  keywords: 'wedding reception, celebration, marriage, ceremony, reception, wedding ceremony',
  openGraph: {
    title: `${COUPLE_INFO.groom.name} & ${COUPLE_INFO.bride.name} Wedding Reception`,
    description: `Join us in celebrating the wedding reception of ${COUPLE_INFO.groom.name} and ${COUPLE_INFO.bride.name}. Together with their families, we invite you to share in our joy.`,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/images/evening.jpeg',
        width: 1200,
        height: 630,
        alt: 'Wedding Reception Celebration'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COUPLE_INFO.groom.name} & ${COUPLE_INFO.bride.name} Wedding Reception`,
    description: `Join us in celebrating the wedding reception of ${COUPLE_INFO.groom.name} and ${COUPLE_INFO.bride.name}. Together with their families, we invite you to share in our joy.`,
    images: ['/images/evening.jpeg']
  },
  metadataBase: new URL('https://wedding-invitation-sigma-six.vercel.app'), // Replace with your actual domain
  alternates: {
    canonical: '/'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dancingScript.variable} ${cormorant.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-gradient-to-br from-wedding-red via-wedding-purple to-wedding-blue min-h-screen">
        {children}
      </body>
    </html>
  )
} 