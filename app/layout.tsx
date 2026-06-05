import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
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
  themeColor: '#07090B',
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
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
      <GoogleAnalytics gaId="G-WWTPVG0YHJ" />
    </html>
  )
}
