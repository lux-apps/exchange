'use client'

import React from 'react'
import Link from 'next/link'

const features = [
  {
    title: 'Deep Liquidity',
    description: 'Access liquidity from across the DeFi ecosystem through cross-chain aggregation',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Best Prices',
    description: 'Smart routing finds the optimal path across all DEXs for the best execution',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    title: 'Self-Custody',
    description: 'Trade directly from your wallet. Your keys, your coins, always',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  },
  {
    title: 'Low Fees',
    description: 'Minimal trading fees with optimized gas usage for efficient execution',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
]

const stats = [
  { label: 'Total Volume', value: '$1.2B+' },
  { label: 'Trades', value: '500K+' },
  { label: 'Unique Traders', value: '50K+' },
  { label: 'Supported Tokens', value: '1000+' },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-wider">
            LUX
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="https://lux.network" className="hover:text-gray-300 transition-colors">Network</Link>
            <Link href="https://app.lux.exchange" className="hover:text-gray-300 transition-colors">Trade</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-8">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </div>
        <p className="text-base text-gray-400 mb-4">
          Trade any asset, anywhere
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          LUX EXCHANGE
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
          The decentralized exchange with deep liquidity and the best prices
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="https://app.lux.exchange"
            className="px-8 py-3 bg-white text-black rounded-md hover:bg-gray-200 transition-colors font-medium"
          >
            Start Trading
          </Link>
          <Link
            href="https://docs.lux.network/exchange"
            className="px-8 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors border border-white/10"
          >
            Documentation
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Trade Smarter</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-black/50 border border-white/10 rounded-xl p-8 hover:border-white/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Chains */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Multi-Chain Trading</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Trade seamlessly across multiple chains with unified liquidity
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {['Lux', 'Ethereum', 'Arbitrum', 'Base', 'Polygon', 'BSC'].map((chain) => (
              <div key={chain} className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500" />
                <span className="font-medium">{chain}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Trade?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Connect your wallet and start trading in seconds.
            No registration, no KYC, no limits.
          </p>
          <Link
            href="https://app.lux.exchange"
            className="inline-block px-8 py-4 bg-white text-black rounded-md hover:bg-gray-200 transition-colors font-medium"
          >
            Launch App
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Lux Exchange. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="https://lux.network" className="hover:text-white transition-colors">Network</Link>
            <Link href="https://lux.market" className="hover:text-white transition-colors">Market</Link>
            <Link href="https://lux.fund" className="hover:text-white transition-colors">Fund</Link>
            <Link href="https://lux.partners" className="hover:text-white transition-colors">Partners</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
