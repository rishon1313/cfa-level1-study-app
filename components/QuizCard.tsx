'use client'

import { useState } from 'react'
import { QuizQuestion } from '@/lib/types'

interface QuizCardProps {
  question: QuizQuestion
  questionNumber: number
  total: number
  onAnswer: (correct: boolean) => void
}

export default function QuizCard({ question, questionNumber, total, onAnswer }: QuizCardProps) {
  const [selected, setSelected] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)

  const handleSelect = (index: number) => {
    if (revealed) return
    setSelected(index)
    setRevealed(true)
  }

  const handleNext = () => {
    if (selected !== null) {
      onAnswer(selected === question.correctIndex)
    }
  }

  const getOptionStyle = (index: number) => {
    if (!revealed) {
      return selected === index
        ? 'border-blue-500 bg-blue-950/40 text-white'
        : 'border-gray-700 hover:border-gray-500 text-gray-300 cursor-pointer'
    }
    if (index === question.correctIndex) {
      return 'border-green-500 bg-green-950/40 text-green-200'
    }
    if (index === selected && selected !== question.correctIndex) {
      return 'border-red-500 bg-red-950/40 text-red-200'
    }
    return 'border-gray-800 text-gray-500'
  }

  return (
    <div className="space-y-5">
      {/* Progress */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">Question {questionNumber} of {total}</span>
        <div className="flex gap-1">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-6 rounded-full ${
                i < questionNumber - 1 ? 'bg-blue-500' : i === questionNumber - 1 ? 'bg-blue-400' : 'bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
        <p className="text-white text-base leading-relaxed">{question.question}</p>
      </div>

      {/* Options */}
      <div className="space-y-2.5">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            className={`w-full text-left border rounded-xl px-4 py-3 text-sm leading-relaxed transition-colors ${getOptionStyle(index)}`}
          >
            <span className="flex items-start gap-3">
              <span className={`shrink-0 font-medium text-xs mt-0.5 ${
                !revealed ? 'text-gray-500' :
                index === question.correctIndex ? 'text-green-400' :
                index === selected ? 'text-red-400' : 'text-gray-600'
              }`}>
                {['A', 'B', 'C', 'D'][index]}.
              </span>
              <span>{option.replace(/^[A-D]\.\s*/, '')}</span>
            </span>
          </button>
        ))}
      </div>

      {/* Explanation */}
      {revealed && (
        <div className={`border rounded-xl p-4 ${
          selected === question.correctIndex
            ? 'bg-green-950/40 border-green-700/40'
            : 'bg-red-950/30 border-red-800/40'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-sm font-semibold ${
              selected === question.correctIndex ? 'text-green-400' : 'text-red-400'
            }`}>
              {selected === question.correctIndex ? 'Correct!' : 'Incorrect'}
            </span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">{question.explanation}</p>
        </div>
      )}

      {/* Next button */}
      {revealed && (
        <button
          onClick={handleNext}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm py-3 rounded-xl transition-colors"
        >
          {questionNumber === total ? 'See Results' : 'Next Question'}
        </button>
      )}
    </div>
  )
}
