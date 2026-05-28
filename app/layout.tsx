import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Preloader } from '@/components/preloader'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800", "900"]
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
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
  themeColor: '#040506',
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
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Preloader />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

