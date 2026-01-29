import React, { type PropsWithChildren } from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LUX Exchange | Native DEX with On-Chain Order Book and AMM',
  description: 'Native DEX with on-chain order book and AMM. 1M+ orders/sec, 597ns latency, 50ms finality. Perpetuals, flash loans, and liquidity mining on D-Chain.',
  keywords: ['DEX', 'decentralized exchange', 'order book', 'CLOB', 'AMM', 'perpetuals', 'DeFi', 'Lux', 'D-Chain', 'flash loans', 'liquidity mining'],
  authors: [{ name: 'Lux Partners' }],
  creator: 'Lux Partners',
  publisher: 'Lux Partners',
  metadataBase: new URL('https://lux.exchange'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lux.exchange',
    siteName: 'LUX Exchange',
    title: 'LUX Exchange | Native DEX with On-Chain Order Book and AMM',
    description: 'Native DEX with on-chain order book and AMM. 1M+ orders/sec, 597ns latency, 50ms finality. Perpetuals, flash loans, and liquidity mining on D-Chain.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LUX Exchange - Decentralized Multi-Chain Trading',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@luxdefi',
    creator: '@luxdefi',
    title: 'LUX Exchange | Native DEX with On-Chain Order Book and AMM',
    description: 'Native DEX on D-Chain. 1M+ orders/sec, 597ns latency, 50ms finality. Perpetuals, flash loans, liquidity mining.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#000000' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} bg-background text-foreground min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  )
}
