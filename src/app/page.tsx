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

const steps = [
  {
    step: '01',
    title: 'Connect Wallet',
    description: 'Connect your preferred Web3 wallet securely',
  },
  {
    step: '02',
    title: 'Select Tokens',
    description: 'Choose the tokens you want to swap',
  },
  {
    step: '03',
    title: 'Execute Trade',
    description: 'Confirm and execute at the best available price',
  },
]

const chains = [
  { name: 'Lux', letter: 'L' },
  { name: 'Ethereum', letter: 'E' },
  { name: 'Arbitrum', letter: 'A' },
  { name: 'Base', letter: 'B' },
  { name: 'Polygon', letter: 'P' },
  { name: 'BSC', letter: 'B' },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-wider">
            LUX
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="https://lux.network" className="hover:text-muted-foreground transition-colors">Network</Link>
            <Link href="https://docs.lux.network/exchange" className="hover:text-muted-foreground transition-colors">Docs</Link>
            <Link href="https://app.lux.exchange" className="hover:text-muted-foreground transition-colors">Trade</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 text-center">
        <div className="w-20 h-20 rounded-full bg-card border border-border backdrop-blur-sm flex items-center justify-center mb-8">
          <svg className="w-10 h-10 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </div>
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
          Decentralized Multi-Chain Trading
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          LUX EXCHANGE
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl">
          Trade any token across multiple chains with deep liquidity, best prices, and full self-custody
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="https://app.lux.exchange"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity font-medium"
          >
            Launch App
          </Link>
          <Link
            href="https://docs.lux.network/exchange"
            className="px-8 py-3 bg-card border border-border backdrop-blur-sm text-foreground rounded-md hover:bg-muted transition-colors"
          >
            Read Docs
          </Link>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 px-6 border-y border-border bg-card backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features 2x2 Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Trade Smarter</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Built for traders who demand the best execution and complete control
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card border border-border backdrop-blur-sm rounded-xl p-8 hover:border-muted transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Start trading in three simple steps
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-card border border-border backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-foreground">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Chain */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Multi-Chain Trading</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Trade seamlessly across multiple chains with unified liquidity and optimal routing
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {chains.map((chain) => (
              <div
                key={chain.name}
                className="flex items-center gap-3 px-6 py-3 bg-card border border-border backdrop-blur-sm rounded-full hover:border-muted transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-sm font-bold text-foreground">{chain.letter}</span>
                </div>
                <span className="font-medium text-foreground">{chain.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liquidity Section */}
      <section className="py-24 px-6 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Deep Liquidity Aggregation</h2>
              <p className="text-muted-foreground mb-6">
                Lux Exchange aggregates liquidity from multiple DEXs and liquidity pools across chains
                to ensure you always get the best execution price for your trades.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-foreground rounded-full" />
                  Cross-chain liquidity aggregation
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-foreground rounded-full" />
                  Smart order routing for optimal prices
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-foreground rounded-full" />
                  Minimal slippage on large orders
                </li>
              </ul>
            </div>
            <div className="bg-card border border-border backdrop-blur-sm rounded-2xl p-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Total Liquidity</span>
                  <span className="text-foreground font-bold">$500M+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">DEXs Integrated</span>
                  <span className="text-foreground font-bold">50+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Avg. Execution Time</span>
                  <span className="text-foreground font-bold">&lt;2s</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-muted-foreground">Price Improvement</span>
                  <span className="text-foreground font-bold">0.5%+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Security First</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Your assets remain in your wallet until the moment of trade execution.
            No deposits, no custody risk, no counterparty exposure.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Non-Custodial</h3>
              <p className="text-muted-foreground text-sm">You control your keys and assets at all times</p>
            </div>
            <div className="bg-card border border-border backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Audited</h3>
              <p className="text-muted-foreground text-sm">Smart contracts audited by leading security firms</p>
            </div>
            <div className="bg-card border border-border backdrop-blur-sm rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">Transparent</h3>
              <p className="text-muted-foreground text-sm">Open source and verifiable on-chain</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Trade?</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Connect your wallet and start trading in seconds.
            No registration, no KYC, no limits.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="https://app.lux.exchange"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity font-medium"
            >
              Launch App
            </Link>
            <Link
              href="https://docs.lux.network/exchange"
              className="px-8 py-4 bg-card border border-border backdrop-blur-sm text-foreground rounded-md hover:bg-muted transition-colors"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold mb-4 text-foreground">LUX Exchange</h3>
              <p className="text-muted-foreground text-sm">
                Decentralized multi-chain trading with deep liquidity and the best prices.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-foreground">Products</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="https://app.lux.exchange" className="hover:text-foreground transition-colors">Exchange</Link></li>
                <li><Link href="https://lux.market" className="hover:text-foreground transition-colors">Market</Link></li>
                <li><Link href="https://bridge.lux.network" className="hover:text-foreground transition-colors">Bridge</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-foreground">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="https://docs.lux.network" className="hover:text-foreground transition-colors">Documentation</Link></li>
                <li><Link href="https://github.com/luxfi" className="hover:text-foreground transition-colors">GitHub</Link></li>
                <li><Link href="https://lux.network/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-foreground">Ecosystem</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="https://lux.network" className="hover:text-foreground transition-colors">Network</Link></li>
                <li><Link href="https://lux.fund" className="hover:text-foreground transition-colors">Fund</Link></li>
                <li><Link href="https://lux.partners" className="hover:text-foreground transition-colors">Partners</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
            <div className="text-sm text-muted-foreground">
              {new Date().getFullYear()} Lux Partners. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="https://twitter.com/luxfi" className="hover:text-foreground transition-colors">Twitter</Link>
              <Link href="https://discord.gg/luxfi" className="hover:text-foreground transition-colors">Discord</Link>
              <Link href="https://t.me/luxfi" className="hover:text-foreground transition-colors">Telegram</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
