'use client'

import { useState, use } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { allPracticeChapters } from '@/data/practice'

type Tab = 'concepts' | 'questions'

export default function PracticeChapterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const searchParams = useSearchParams()
  const initialTab = (searchParams.get('tab') as Tab) || 'concepts'

  const chapter = allPracticeChapters.find(c => c.id === id)

  const [tab, setTab] = useState<Tab>(initialTab)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  if (!chapter) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400">Chapter not found.</p>
        <Link href="/practice" className="text-orange-400 hover:text-orange-300 text-sm mt-2 inline-block">
          Back to Practice
        </Link>
      </div>
    )
  }

  const questions = chapter.questions
  const currentQ = questions[currentIndex]

  function handleSelect(idx: number) {
    if (selected !== null) return
    setSelected(idx)
    if (idx === currentQ.correctIndex) {
      setScore(s => s + 1)
    }
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1)
      setSelected(null)
    } else {
      setDone(true)
    }
  }

  function handleRestart() {
    setCurrentIndex(0)
    setSelected(null)
    setScore(0)
    setDone(false)
  }

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/practice" className="hover:text-gray-300 transition-colors">Practice</Link>
        <span>/</span>
        <span className="text-gray-300">{chapter.title}</span>
      </nav>

      {/* Header */}
      <div className="space-y-1">
        <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">{chapter.subject}</span>
        <h1 className="text-2xl font-bold text-white">{chapter.title}</h1>
        <p className="text-sm text-gray-400">
          Score: <span className="text-white font-medium">{chapter.score}</span>
          {' '}&mdash; {questions.length} questions to revise
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-900 border border-gray-800 rounded-xl p-1 w-fit">
        <button
          onClick={() => setTab('concepts')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            tab === 'concepts'
              ? 'bg-orange-600/20 text-orange-300 border border-orange-600/30'
              : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
          }`}
        >
          Concepts
        </button>
        <button
          onClick={() => { setTab('questions'); handleRestart() }}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            tab === 'questions'
              ? 'bg-orange-600/20 text-orange-300 border border-orange-600/30'
              : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
          }`}
        >
          Questions
        </button>
      </div>

      {/* Concepts Tab */}
      {tab === 'concepts' && (
        <div className="space-y-3 max-w-2xl">
          {chapter.conceptsSummary.map((concept, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 border-l-2 border-l-orange-600"
            >
              <p className="text-white font-semibold text-sm mb-1.5">{concept.title}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{concept.rule}</p>
            </div>
          ))}
        </div>
      )}

      {/* Questions Tab */}
      {tab === 'questions' && (
        <div className="max-w-2xl">
          {done ? (
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center space-y-5">
              <div>
                <p className="text-5xl font-bold text-white mb-1">{score}/{questions.length}</p>
                <p className={`text-lg font-semibold ${score >= Math.ceil(questions.length * 0.7) ? 'text-green-400' : 'text-orange-400'}`}>
                  {score >= Math.ceil(questions.length * 0.7) ? 'Strong work!' : 'Keep drilling'}
                </p>
              </div>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={handleRestart}
                  className="bg-orange-600 hover:bg-orange-500 text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-colors"
                >
                  Restart
                </button>
                <Link
                  href="/practice"
                  className="border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-colors"
                >
                  Back to Practice
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-5">
              {/* Progress */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Q{currentIndex + 1} of {questions.length}</span>
                <span className="text-xs text-orange-400 font-medium bg-orange-600/10 border border-orange-600/20 px-2 py-0.5 rounded-full">
                  {currentQ.concept}
                </span>
              </div>

              {/* Question */}
              <p className="text-white text-base leading-relaxed font-medium">{currentQ.question}</p>

              {/* Options */}
              <div className="space-y-2">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selected === idx
                  const isCorrect = idx === currentQ.correctIndex
                  const revealed = selected !== null

                  let className = 'w-full text-left px-4 py-3 rounded-xl text-sm border transition-colors '
                  if (!revealed) {
                    className += 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-750 hover:border-gray-600 hover:text-white'
                  } else if (isCorrect) {
                    className += 'bg-green-950/50 border-green-700/60 text-green-300'
                  } else if (isSelected && !isCorrect) {
                    className += 'bg-red-950/50 border-red-700/60 text-red-300'
                  } else {
                    className += 'bg-gray-800/50 border-gray-700/50 text-gray-500'
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={revealed}
                      className={className}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>

              {/* Explanation */}
              {selected !== null && (
                <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-4 space-y-2">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Explanation</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{currentQ.explanation}</p>
                </div>
              )}

              {/* Next button */}
              {selected !== null && (
                <div className="flex justify-end">
                  <button
                    onClick={handleNext}
                    className="bg-orange-600 hover:bg-orange-500 text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-colors"
                  >
                    {currentIndex < questions.length - 1 ? 'Next' : 'See Results'}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
