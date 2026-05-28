import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800", "900"]
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: 'Scalable Forge | Engineering Systems Built to Scale',
  description: 'Premium systems engineering consultancy building scalable, maintainable, and robust digital infrastructure for businesses that grow.',
  keywords: ['systems engineering', 'backend systems', 'frontend engineering', 'scalable architecture', 'web systems'],
  authors: [{ name: 'Scalable Forge' }],
  openGraph: {
    title: 'Scalable Forge | Engineering Systems Built to Scale',
    description: 'Premium systems engineering consultancy building scalable, maintainable, and robust digital infrastructure for businesses that grow.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#080a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${playfairDisplay.variable} ${dmSans.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
