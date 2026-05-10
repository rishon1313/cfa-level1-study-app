'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Concept } from '@/lib/types'
import FormulaBlock from './FormulaBlock'
import ScenarioCard from './ScenarioCard'

interface ConceptCardProps {
  concept: Concept
  compact?: boolean
}

const difficultyColors = {
  easy: 'bg-green-900/60 text-green-300 border-green-700/50',
  medium: 'bg-yellow-900/60 text-yellow-300 border-yellow-700/50',
  hard: 'bg-red-900/60 text-red-300 border-red-700/50',
}

export default function ConceptCard({ concept, compact = false }: ConceptCardProps) {
  const [numExOpen, setNumExOpen] = useState(false)
  const [mindMapOpen, setMindMapOpen] = useState(false)
  const [imageOpen, setImageOpen] = useState(false)

  if (compact) {
    return (
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-600 transition-colors">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-white font-semibold text-base leading-snug">{concept.title}</h3>
          <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full border font-medium ${difficultyColors[concept.difficulty]}`}>
            {concept.difficulty}
          </span>
        </div>
        <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">{concept.firstPrinciple}</p>
        {concept.tags.slice(0, 3).length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {concept.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-xl font-bold text-white leading-snug">{concept.title}</h2>
        <span className={`shrink-0 text-xs px-2.5 py-1 rounded-full border font-medium ${difficultyColors[concept.difficulty]}`}>
          {concept.difficulty}
        </span>
      </div>

      {/* Tags */}
      {concept.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {concept.tags.map(tag => (
            <span key={tag} className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* First Principle */}
      <div className="bg-blue-950/40 border border-blue-700/40 rounded-xl p-4">
        <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-2">First Principle</p>
        <p className="text-blue-100 text-sm leading-relaxed">{concept.firstPrinciple}</p>
      </div>

      {/* Formula */}
      {concept.formula && (
        <div>
          <FormulaBlock formula={concept.formula} label="Formula" />
        </div>
      )}

      {/* Exam Angle */}
      <div className="bg-green-950/40 border border-green-700/40 rounded-xl p-4">
        <p className="text-xs text-green-400 font-semibold uppercase tracking-wider mb-2">Exam Angle</p>
        <p className="text-green-100 text-sm leading-relaxed">{concept.examAngle}</p>
      </div>

      {/* Key Points */}
      {concept.keyPoints.length > 0 && (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">Key Points</p>
          <ul className="space-y-2">
            {concept.keyPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed">
                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Numerical Example — collapsible */}
      {concept.numericalExample && (
        <div className="border border-amber-700/40 rounded-xl overflow-hidden">
          <button
            onClick={() => setNumExOpen(o => !o)}
            className="w-full flex items-center justify-between px-4 py-3 bg-amber-950/40 hover:bg-amber-950/60 transition-colors text-left"
          >
            <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
              {numExOpen ? '▼' : '▶'} Numerical Example
            </span>
          </button>
          {numExOpen && (
            <div className="px-4 pb-4 pt-3 bg-amber-950/20 space-y-3">
              {/* Problem */}
              <div>
                <p className="text-xs text-amber-500 font-semibold uppercase tracking-wider mb-1">Problem</p>
                <p className="text-white text-sm leading-relaxed">{concept.numericalExample.problem}</p>
              </div>
              {/* Solution */}
              <div>
                <p className="text-xs text-amber-500 font-semibold uppercase tracking-wider mb-1">Solution</p>
                <pre className="text-gray-400 text-sm leading-relaxed whitespace-pre-wrap font-mono">
                  {concept.numericalExample.solution}
                </pre>
              </div>
              {/* Answer */}
              <div className="bg-green-950/40 border border-green-700/30 rounded-lg px-3 py-2">
                <p className="text-xs text-green-400 font-semibold uppercase tracking-wider mb-1">Answer</p>
                <p className="text-green-300 text-sm font-semibold leading-relaxed whitespace-pre-wrap">
                  {concept.numericalExample.answer}
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Mind Map — collapsible */}
      {concept.mindMap && (
        <div className="border border-indigo-700/40 rounded-xl overflow-hidden">
          <button
            onClick={() => setMindMapOpen(o => !o)}
            className="w-full flex items-center justify-between px-4 py-3 bg-indigo-950/40 hover:bg-indigo-950/60 transition-colors text-left"
          >
            <span className="text-xs text-indigo-400 font-semibold uppercase tracking-wider">
              {mindMapOpen ? '▼' : '▶'} Mind Map
            </span>
          </button>
          {mindMapOpen && (
            <div className="px-4 pb-4 pt-3 bg-indigo-950/20">
              <pre className="text-indigo-100 text-xs leading-relaxed whitespace-pre overflow-x-auto font-mono">
                {concept.mindMap}
              </pre>
            </div>
          )}
        </div>
      )}

      {/* Exam Day Visual — diagram image */}
      {concept.image && (
        <div className="border border-purple-700/40 rounded-xl overflow-hidden">
          <button
            onClick={() => setImageOpen(o => !o)}
            className="w-full flex items-center justify-between px-4 py-3 bg-purple-950/40 hover:bg-purple-950/60 transition-colors text-left"
          >
            <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider">
              {imageOpen ? '▼' : '▶'} Exam Day Visual
            </span>
          </button>
          {imageOpen && (
            <div className="px-4 pb-4 pt-3 bg-purple-950/20 flex justify-center">
              <Image
                src={concept.image}
                alt="Exam day revision diagram"
                width={800}
                height={600}
                className="rounded-lg max-w-full h-auto"
              />
            </div>
          )}
        </div>
      )}

      {/* Comparison Table — exam-day quick reference */}
      {concept.comparisonTable && (
        <div className="border border-teal-700/40 rounded-xl overflow-hidden">
          <div className="px-4 py-3 bg-teal-950/40">
            <p className="text-xs text-teal-400 font-semibold uppercase tracking-wider">
              {concept.comparisonTable.caption ?? 'Comparison Table'}
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-teal-950/30 border-b border-teal-800/40">
                  {concept.comparisonTable.headers.map((h, i) => (
                    <th key={i} className="px-4 py-2.5 text-left text-xs font-semibold text-teal-300 uppercase tracking-wider whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {concept.comparisonTable.rows.map((row, ri) => (
                  <tr key={ri} className={`border-b border-gray-800/60 ${ri % 2 === 0 ? 'bg-gray-900/40' : 'bg-gray-900/20'}`}>
                    {row.map((cell, ci) => (
                      <td key={ci} className={`px-4 py-2.5 leading-snug ${ci === 0 ? 'text-white font-semibold' : 'text-gray-300'}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Scenario Card — for ethics concepts */}
      {concept.scenario && (
        <ScenarioCard scenario={concept.scenario} />
      )}
    </div>
  )
}
