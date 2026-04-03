import Link from 'next/link'
import { ethicsTopics } from '@/data/ethics-professional-standards'

const difficultyColorMap = {
  easy: 'bg-green-900/50 text-green-300',
  medium: 'bg-yellow-900/50 text-yellow-300',
  hard: 'bg-red-900/50 text-red-300',
}

function getTopicDifficulty(conceptCount: number): 'easy' | 'medium' | 'hard' {
  if (conceptCount <= 3) return 'easy'
  if (conceptCount <= 5) return 'medium'
  return 'hard'
}

export default function EthicsPage() {
  const totalConcepts = ethicsTopics.reduce((sum, t) => sum + t.concepts.length, 0)
  const totalStandards = ethicsTopics.length

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 flex-wrap">
          <Link href="/" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Home</Link>
          <span className="text-gray-600">/</span>
          <h1 className="text-3xl font-bold text-white">Ethics &amp; Professional Standards</h1>
          <span className="text-sm bg-violet-900/60 text-violet-300 border border-violet-700/50 px-3 py-1 rounded-full font-medium">
            10-15% Exam Weight
          </span>
        </div>
        <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
          The Ethics section is one of the highest-weighted areas on the CFA Level 1 exam and is the most likely differentiator between candidates who pass and fail. Master the Standards of Professional Conduct and practice with realistic vignette scenarios.
        </p>
        <div className="flex gap-4 text-sm text-gray-500">
          <span>{totalStandards} standard groups</span>
          <span>•</span>
          <span>{totalConcepts} individual standards</span>
          <span>•</span>
          <span>{totalConcepts} case scenarios</span>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-violet-950/40 border border-violet-700/40 rounded-xl p-4">
        <p className="text-violet-300 text-sm leading-relaxed">
          <strong className="text-violet-200">Exam tip:</strong> Ethics questions are scenario-based. The correct answer almost always comes down to identifying whether a specific Standard applies and what the most conservative compliant action is. Pay close attention to what is disclosed vs. undisclosed, and to the timing of actions.
        </p>
      </div>

      {/* Topic Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {ethicsTopics.map(topic => {
          const difficulty = getTopicDifficulty(topic.concepts.length)
          const scenarioCount = topic.concepts.filter(c => c.scenario).length

          return (
            <Link
              key={topic.id}
              href={`/topic/${topic.id}`}
              className="group bg-gray-900 border border-gray-800 hover:border-violet-700/60 rounded-xl p-5 transition-all hover:bg-gray-900/80 space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-white font-semibold text-base leading-snug group-hover:text-violet-300 transition-colors">
                  {topic.title}
                </h2>
                <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full font-medium ${difficultyColorMap[difficulty]}`}>
                  {difficulty}
                </span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                {topic.description}
              </p>

              <div className="flex items-center justify-between pt-1">
                <div className="flex gap-3 text-xs text-gray-500">
                  <span>{topic.concepts.length} standards</span>
                  {scenarioCount > 0 && <span>{scenarioCount} scenarios</span>}
                </div>
                <span className="text-xs text-violet-500 group-hover:text-violet-400 transition-colors">
                  Study &rarr;
                </span>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 pt-2">
        <Link
          href="/formulas"
          className="bg-amber-600/20 hover:bg-amber-600/30 border border-amber-600/40 text-amber-300 font-medium text-sm px-5 py-2.5 rounded-xl transition-colors"
        >
          Standards Reference
        </Link>
        <Link
          href="/"
          className="bg-blue-600/20 hover:bg-blue-600/30 border border-blue-600/40 text-blue-300 font-medium text-sm px-5 py-2.5 rounded-xl transition-colors"
        >
          Portfolio Management
        </Link>
      </div>
    </div>
  )
}
