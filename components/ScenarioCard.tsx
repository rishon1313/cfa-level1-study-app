'use client'

import { useState } from 'react'

interface ScenarioProps {
  scenario: {
    situation: string
    question: string
    verdict: string
    reasoning: string
  }
}

export default function ScenarioCard({ scenario }: ScenarioProps) {
  const [verdictOpen, setVerdictOpen] = useState(false)

  const isViolation = scenario.verdict.toLowerCase().includes('violation') &&
    !scenario.verdict.toLowerCase().includes('no violation')

  return (
    <div className="border border-violet-700/40 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 bg-violet-950/40">
        <p className="text-xs text-violet-400 font-semibold uppercase tracking-wider">Scenario</p>
      </div>

      <div className="px-4 pb-4 pt-3 bg-violet-950/20 space-y-3">
        {/* Situation */}
        <div className="pl-3 border-l-2 border-violet-700/50">
          <p className="text-gray-200 text-sm leading-relaxed">{scenario.situation}</p>
        </div>

        {/* Question */}
        <p className="text-white text-sm font-semibold italic leading-relaxed">
          {scenario.question}
        </p>

        {/* Collapsible Verdict */}
        <div className="border border-gray-700/50 rounded-lg overflow-hidden">
          <button
            onClick={() => setVerdictOpen(o => !o)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-gray-800/60 hover:bg-gray-800 transition-colors text-left"
          >
            <span className="text-sm text-gray-300 font-medium">
              {verdictOpen ? 'Hide Verdict' : 'Reveal Verdict'}
            </span>
            <span className="text-gray-500 text-xs">{verdictOpen ? '▲' : '▼'}</span>
          </button>

          {verdictOpen && (
            <div className="px-4 py-3 space-y-2">
              {/* Verdict badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold ${
                isViolation
                  ? 'bg-red-900/60 text-red-300 border border-red-700/50'
                  : 'bg-green-900/60 text-green-300 border border-green-700/50'
              }`}>
                <span>{isViolation ? '✗' : '✓'}</span>
                <span>{scenario.verdict}</span>
              </div>
              {/* Reasoning */}
              <p className="text-gray-300 text-sm leading-relaxed">{scenario.reasoning}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
