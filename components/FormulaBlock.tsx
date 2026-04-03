'use client'

import { useState } from 'react'

interface FormulaBlockProps {
  formula: string
  label?: string
}

export default function FormulaBlock({ formula, label }: FormulaBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(formula)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group">
      {label && (
        <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-1">{label}</p>
      )}
      <div className="bg-amber-950/40 border border-amber-700/50 rounded-lg px-4 py-3 flex items-start justify-between gap-3">
        <pre className="font-mono text-sm text-amber-200 whitespace-pre-wrap leading-relaxed flex-1">
          {formula}
        </pre>
        <button
          onClick={handleCopy}
          className="shrink-0 text-xs text-amber-500 hover:text-amber-300 transition-colors mt-0.5 opacity-0 group-hover:opacity-100"
          aria-label="Copy formula"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  )
}
