'use client'

import { useState, use } from 'react'
import Link from 'next/link'
import { portfolioManagementTopics } from '@/data/portfolio-management'
import { QuizQuestion } from '@/lib/types'
import QuizCard from '@/components/QuizCard'

type QuizState = 'idle' | 'loading' | 'active' | 'complete' | 'error'

export default function QuizPage({ params }: { params: Promise<{ topicId: string }> }) {
  const { topicId } = use(params)
  const topic = portfolioManagementTopics.find(t => t.id === topicId)

  const [state, setState] = useState<QuizState>('idle')
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [errorMsg, setErrorMsg] = useState('')

  if (!topic) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400">Topic not found.</p>
        <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block">
          Back to Home
        </Link>
      </div>
    )
  }

  const generateQuiz = async () => {
    setState('loading')
    setErrorMsg('')
    setCurrentIndex(0)
    setScore(0)

    try {
      const res = await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicTitle: topic.title,
          concepts: topic.concepts.map(c => ({
            title: c.title,
            firstPrinciple: c.firstPrinciple,
            formula: c.formula,
          }))
        })
      })

      if (!res.ok) {
        const errData = await res.json()
        setErrorMsg(errData.error || 'Failed to generate quiz')
        setState('error')
        return
      }

      const data = await res.json()
      setQuestions(data.questions)
      setState('active')
    } catch {
      setErrorMsg('Network error. Please try again.')
      setState('error')
    }
  }

  const handleAnswer = (correct: boolean) => {
    if (correct) setScore(s => s + 1)
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(i => i + 1)
    } else {
      setState('complete')
    }
  }

  const passThreshold = Math.ceil(questions.length * 0.7)
  const passed = score >= passThreshold

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
        <span>/</span>
        <Link href={`/topic/${topic.id}`} className="hover:text-gray-300 transition-colors">
          {topic.title}
        </Link>
        <span>/</span>
        <span className="text-gray-300">Quiz</span>
      </nav>

      <div className="max-w-2xl">
        {/* Idle State */}
        {state === 'idle' && (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center space-y-4">
            <div>
              <h1 className="text-xl font-bold text-white mb-1">Quiz: {topic.title}</h1>
              <p className="text-gray-400 text-sm">
                5 AI-generated CFA Level 1 style questions on {topic.concepts.length} concepts
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {topic.concepts.map(c => (
                <span key={c.id} className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full">
                  {c.title}
                </span>
              ))}
            </div>
            <button
              onClick={generateQuiz}
              className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-3 rounded-xl transition-colors text-sm"
            >
              Generate 5 Quiz Questions
            </button>
          </div>
        )}

        {/* Loading State */}
        {state === 'loading' && (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 flex flex-col items-center gap-4">
            <div className="flex gap-1.5">
              {[0, 1, 2].map(i => (
                <div
                  key={i}
                  className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 150}ms` }}
                />
              ))}
            </div>
            <p className="text-gray-400 text-sm">Generating exam-style questions...</p>
          </div>
        )}

        {/* Error State */}
        {state === 'error' && (
          <div className="bg-red-950/40 border border-red-800/50 rounded-xl p-6 space-y-4">
            <p className="text-red-300 text-sm">{errorMsg}</p>
            <div className="flex gap-3">
              <button
                onClick={generateQuiz}
                className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Try Again
              </button>
              <Link
                href={`/topic/${topic.id}`}
                className="text-gray-400 hover:text-white text-sm px-4 py-2 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors"
              >
                Back to Topic
              </Link>
            </div>
          </div>
        )}

        {/* Active State */}
        {state === 'active' && questions.length > 0 && (
          <QuizCard
            question={questions[currentIndex]}
            questionNumber={currentIndex + 1}
            total={questions.length}
            onAnswer={handleAnswer}
          />
        )}

        {/* Complete State */}
        {state === 'complete' && (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center space-y-5">
            <div>
              <p className="text-5xl font-bold text-white mb-1">{score}/{questions.length}</p>
              <p className={`text-lg font-semibold ${passed ? 'text-green-400' : 'text-red-400'}`}>
                {passed ? 'Passed!' : 'Keep Studying'}
              </p>
            </div>

            <div className={`inline-block px-4 py-2 rounded-xl text-sm ${
              passed
                ? 'bg-green-950/40 border border-green-700/50 text-green-300'
                : 'bg-red-950/40 border border-red-700/50 text-red-300'
            }`}>
              {passed
                ? `Strong performance. Review any concepts you got wrong.`
                : `Score ${passThreshold}+ to pass. Review the topic and try again.`
              }
            </div>

            <div className="flex gap-3 justify-center">
              <button
                onClick={generateQuiz}
                className="bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-colors"
              >
                Try Again
              </button>
              <Link
                href={`/topic/${topic.id}`}
                className="border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-colors"
              >
                Back to Topic
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
