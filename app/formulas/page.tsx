'use client'

import { useState } from 'react'
import Link from 'next/link'
import { portfolioManagementTopics } from '@/data/portfolio-management'
import { ethicsTopics } from '@/data/ethics-professional-standards'
import FormulaBlock from '@/components/FormulaBlock'

const pmFormulas = portfolioManagementTopics
const ethicsFormulas = ethicsTopics

export default function FormulasPage() {
  const [search, setSearch] = useState('')

  const normalizedSearch = search.toLowerCase()

  function filterTopics(topics: typeof portfolioManagementTopics) {
    return topics.map(topic => {
      const conceptsWithFormulas = topic.concepts.filter(c => {
        if (!c.formula) return false
        if (!normalizedSearch) return true
        return (
          c.title.toLowerCase().includes(normalizedSearch) ||
          c.formula.toLowerCase().includes(normalizedSearch) ||
          c.tags.some(t => t.toLowerCase().includes(normalizedSearch))
        )
      })
      return { ...topic, concepts: conceptsWithFormulas }
    }).filter(t => t.concepts.length > 0)
  }

  const filteredPM = filterTopics(pmFormulas)
  const filteredEthics = filterTopics(ethicsFormulas)

  const totalPMFormulas = portfolioManagementTopics.reduce(
    (sum, t) => sum + t.concepts.filter(c => c.formula).length, 0
  )
  const totalEthicsFormulas = ethicsTopics.reduce(
    (sum, t) => sum + t.concepts.filter(c => c.formula).length, 0
  )
  const totalFormulas = totalPMFormulas + totalEthicsFormulas

  const hasResults = filteredPM.length > 0 || filteredEthics.length > 0

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Home</Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-300 text-sm">Cheat Sheet</span>
        </div>
        <h1 className="text-2xl font-bold text-white">Cheat Sheet &amp; Standards Reference</h1>
        <p className="text-gray-400 text-sm">
          {totalPMFormulas} Portfolio Management formulas &middot; {totalEthicsFormulas} Ethics Standards codes ({totalFormulas} total)
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search formulas, standards, or topics..."
          className="w-full max-w-lg bg-gray-900 border border-gray-700 focus:border-gray-500 text-white text-sm placeholder-gray-500 rounded-xl px-4 py-2.5 outline-none transition-colors"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 text-xs transition-colors"
          >
            Clear
          </button>
        )}
      </div>

      {/* Formula Sections */}
      {!hasResults ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-sm">No results match &ldquo;{search}&rdquo;</p>
        </div>
      ) : (
        <div className="space-y-12">
          {/* Portfolio Management Formulas */}
          {filteredPM.length > 0 && (
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-bold text-white">Portfolio Management Formulas</h2>
                <span className="text-xs text-gray-600 border-b border-gray-800 flex-1 mb-0.5"></span>
              </div>
              {filteredPM.map(topic => (
                <div key={topic.id} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/topic/${topic.id}`}
                      className="text-base font-semibold text-white hover:text-blue-300 transition-colors"
                    >
                      {topic.title}
                    </Link>
                    <span className="text-xs text-gray-600 border-b border-gray-800 flex-1 mb-0.5"></span>
                  </div>

                  <div className="space-y-4">
                    {topic.concepts.map(concept => (
                      <div key={concept.id} className="space-y-1.5">
                        <Link
                          href={`/concept/${concept.id}`}
                          className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                          {concept.title}
                        </Link>
                        <FormulaBlock formula={concept.formula!} />
                        <p className="text-xs text-gray-500 leading-relaxed pl-1">{concept.examAngle}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Ethics Standards Reference */}
          {filteredEthics.length > 0 && (
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-bold text-white">Ethics Standards Reference</h2>
                <span className="text-xs text-gray-600 border-b border-gray-800 flex-1 mb-0.5"></span>
              </div>
              {filteredEthics.map(topic => (
                <div key={topic.id} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/topic/${topic.id}`}
                      className="text-base font-semibold text-white hover:text-violet-300 transition-colors"
                    >
                      {topic.title}
                    </Link>
                    <span className="text-xs text-gray-600 border-b border-gray-800 flex-1 mb-0.5"></span>
                  </div>

                  <div className="space-y-4">
                    {topic.concepts.map(concept => (
                      <div key={concept.id} className="space-y-1.5">
                        <Link
                          href={`/concept/${concept.id}`}
                          className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                          {concept.title}
                        </Link>
                        <div className="bg-violet-950/40 border border-violet-700/40 rounded-lg px-3 py-2">
                          <p className="text-violet-300 font-mono text-sm font-semibold">{concept.formula}</p>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed pl-1">{concept.examAngle}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
