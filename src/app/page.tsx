'use client'

import React from 'react'
import Link from 'next/link'

const stats = [
  { label: '24h Volume', value: '$2.4B+' },
  { label: 'TVL', value: '$850M+' },
  { label: 'Total Trades', value: '12M+' },
  { label: 'Trading Pairs', value: '500+' },
]

const features = [
  {
    title: 'Native DEX Precompiles',
    description: 'Built into D-Chain with PoolManager (0x0400), SwapRouter (0x0401), HooksRegistry (0x0402), and FlashLoan (0x0403) for the fastest possible execution.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    title: 'Order Book + AMM Hybrid',
    description: 'Central Limit Order Book (CLOB) with 1M+ orders/sec combined with concentrated liquidity AMM. Best execution routing between both.',
    icon: 'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2',
  },
  {
    title: 'Perpetuals & Derivatives',
    description: 'Up to 100x leverage on BTC, ETH, SOL, LUX perpetuals. 8-hour funding intervals, portfolio margin, and comprehensive risk management.',
    icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
  },
  {
    title: 'Flash Loans',
    description: 'Native flash loan facility at 0x0403 for arbitrage, liquidations, and collateral swaps. Zero collateral required, atomic execution.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
]

const steps = [
  {
    step: '01',
    title: 'Connect Wallet',
    description: 'Connect any Web3 wallet to access the full trading suite',
  },
  {
    step: '02',
    title: 'Swap or Trade',
    description: 'Instant swaps via AMM or place limit orders on the CLOB',
  },
  {
    step: '03',
    title: 'Earn Rewards',
    description: 'Provide liquidity, stake, or participate in liquidity mining',
  },
]

const tradingOptions = [
  {
    title: 'Spot Trading',
    description: 'Limit, market, stop-loss, TWAP, iceberg orders. Price-time priority matching with sub-microsecond latency.',
    status: 'Live',
  },
  {
    title: 'Perpetuals',
    description: 'BTC, ETH, SOL, LUX perpetuals with up to 100x leverage. Cross, isolated, and portfolio margin modes.',
    status: 'Live',
  },
  {
    title: 'Options',
    description: 'European-style options with automated market making and delta-neutral strategies.',
    status: 'Coming Soon',
  },
]

const liquidityFeatures = [
  { label: 'LP Pools', value: 'Concentrated liquidity with custom fee tiers and hook contracts' },
  { label: 'Liquidity Mining', value: 'Earn LUX rewards for providing liquidity to core pairs' },
  { label: 'Fee Sharing', value: 'Maker rebates up to 5 bps, volume-based discounts' },
  { label: 'Vaults', value: 'Automated strategies with 2% management, 20% performance fees' },
]

const securityFeatures = [
  {
    title: 'Native Chain Security',
    description: 'Built directly into D-Chain consensus. No external smart contract risk.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'MEV Protection',
    description: 'Batch auctions, commit-reveal schemes, and SNIPER orders prevent front-running.',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  },
  {
    title: 'Multi-Source Oracles',
    description: 'Weighted median from Pyth, Chainlink, and C-Chain AMMs with circuit breakers.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
]

const precompiles = [
  { address: '0x0400', name: 'PoolManager', description: 'Singleton pool management with flash accounting' },
  { address: '0x0401', name: 'SwapRouter', description: 'Optimized swap routing and execution' },
  { address: '0x0402', name: 'HooksRegistry', description: 'Custom hook contracts for advanced logic' },
  { address: '0x0403', name: 'FlashLoan', description: 'Native flash loan facility' },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-wider">
            LUX EXCHANGE
          </Link>
          <div className="hidden md:flex gap-6 text-sm">
            <Link href="#features" className="hover:text-muted-foreground transition-colors">Features</Link>
            <Link href="#trading" className="hover:text-muted-foreground transition-colors">Trading</Link>
            <Link href="#liquidity" className="hover:text-muted-foreground transition-colors">Liquidity</Link>
            <Link href="https://docs.lux.network/exchange" className="hover:text-muted-foreground transition-colors">Docs</Link>
          </div>
          <Link
            href="https://app.lux.exchange"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity text-sm font-medium"
          >
            Launch App
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 text-center">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
          Native DEX on D-Chain
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          LUX EXCHANGE
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl">
          Native DEX with on-chain order book and AMM
        </p>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
          1M+ orders/sec. 597ns latency. 50ms finality. Built directly into the chain with native precompiles.
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
            className="px-8 py-4 bg-card border border-border text-foreground rounded-md hover:bg-muted transition-colors"
          >
            Documentation
          </Link>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 px-6 border-y border-border bg-card">
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

      {/* DEX Precompiles */}
      <section className="py-24 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Native DEX Precompiles</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Built directly into D-Chain. Zero smart contract overhead. Maximum performance.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {precompiles.map((pc) => (
              <div
                key={pc.address}
                className="bg-card border border-border rounded-lg p-6 hover:border-muted-foreground transition-colors"
              >
                <code className="text-sm text-muted-foreground font-mono">{pc.address}</code>
                <h3 className="text-lg font-bold mt-2 mb-2 text-foreground">{pc.name}</h3>
                <p className="text-sm text-muted-foreground">{pc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Core Features</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            The fastest DEX architecture in crypto. Native precompiles meet professional-grade trading.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card border border-border rounded-xl p-8 hover:border-muted-foreground transition-colors"
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
            Start trading in three steps
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-foreground">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Options */}
      <section id="trading" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Trading Options</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            From simple swaps to leveraged perpetuals
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {tradingOptions.map((option) => (
              <div
                key={option.title}
                className="bg-card border border-border rounded-xl p-8 hover:border-muted-foreground transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">{option.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded ${
                    option.status === 'Live'
                      ? 'bg-muted text-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {option.status}
                  </span>
                </div>
                <p className="text-muted-foreground">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liquidity */}
      <section id="liquidity" className="py-24 px-6 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Liquidity Provision</h2>
              <p className="text-muted-foreground mb-8">
                Provide liquidity to earn fees and mining rewards. Concentrated liquidity pools with custom fee tiers and hook contracts for advanced strategies.
              </p>
              <div className="space-y-4">
                {liquidityFeatures.map((feature) => (
                  <div key={feature.label} className="border-l-2 border-border pl-4">
                    <h4 className="font-medium text-foreground">{feature.label}</h4>
                    <p className="text-sm text-muted-foreground">{feature.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-lg font-bold mb-6 text-foreground">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Order Throughput</span>
                  <span className="text-foreground font-bold">1M+ orders/sec</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Matching Latency</span>
                  <span className="text-foreground font-bold">597ns (GPU)</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Finality</span>
                  <span className="text-foreground font-bold">50ms</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-muted-foreground">Max Leverage</span>
                  <span className="text-foreground font-bold">100x</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Security First</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Native chain security with comprehensive risk management and MEV protection
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {securityFeatures.map((feature) => (
              <div key={feature.title} className="bg-card border border-border rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Trading</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Access the fastest DEX in crypto. Native precompiles, professional-grade order book, and seamless AMM liquidity.
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
              className="px-8 py-4 bg-card border border-border text-foreground rounded-md hover:bg-muted transition-colors"
            >
              Read Documentation
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
                Native DEX with on-chain order book and AMM. Built on D-Chain with DexVM.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-foreground">Trading</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="https://app.lux.exchange/swap" className="hover:text-foreground transition-colors">Swap</Link></li>
                <li><Link href="https://app.lux.exchange/trade" className="hover:text-foreground transition-colors">Spot Trading</Link></li>
                <li><Link href="https://app.lux.exchange/perps" className="hover:text-foreground transition-colors">Perpetuals</Link></li>
                <li><Link href="https://app.lux.exchange/pools" className="hover:text-foreground transition-colors">Liquidity Pools</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-foreground">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="https://docs.lux.network/exchange" className="hover:text-foreground transition-colors">Documentation</Link></li>
                <li><Link href="https://github.com/luxfi/exchange" className="hover:text-foreground transition-colors">GitHub</Link></li>
                <li><Link href="https://docs.lux.network/exchange/api" className="hover:text-foreground transition-colors">API Reference</Link></li>
                <li><Link href="https://docs.lux.network/exchange/sdk" className="hover:text-foreground transition-colors">SDK</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-foreground">Ecosystem</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="https://lux.network" className="hover:text-foreground transition-colors">Lux Network</Link></li>
                <li><Link href="https://bridge.lux.network" className="hover:text-foreground transition-colors">Bridge</Link></li>
                <li><Link href="https://explorer.lux.network" className="hover:text-foreground transition-colors">Explorer</Link></li>
                <li><Link href="https://lux.market" className="hover:text-foreground transition-colors">NFT Market</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
            <div className="text-sm text-muted-foreground">
              {new Date().getFullYear()} Lux Partners. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="https://twitter.com/luxdefi" className="hover:text-foreground transition-colors">X</Link>
              <Link href="https://discord.gg/luxnetwork" className="hover:text-foreground transition-colors">Discord</Link>
              <Link href="https://t.me/luxnetwork" className="hover:text-foreground transition-colors">Telegram</Link>
              <Link href="https://github.com/luxfi" className="hover:text-foreground transition-colors">GitHub</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
