import React from 'react'

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          LUX Exchange
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl">
          Trade Any Asset, Anywhere
        </p>
        <p className="text-lg text-gray-400 max-w-2xl">
          A decentralized exchange for trading digital assets with deep liquidity and low fees.
        </p>
      </section>

      {/* Feature Sections */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Deep Liquidity</h2>
          <p className="text-lg text-gray-400">Access liquidity from across the DeFi ecosystem through our cross-chain aggregation.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Low Fees</h2>
          <p className="text-lg text-gray-400">Trade with minimal fees thanks to efficient on-chain execution and optimized gas usage.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Self-Custody</h2>
          <p className="text-lg text-gray-400">Your keys, your coins. Trade directly from your wallet without giving up control.</p>
        </div>
      </section>

    </main>
  )
}
