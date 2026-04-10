import Link from 'next/link'
import { economicsTopics } from '@/data/economics'

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

export default function EconomicsPage() {
  const totalConcepts = economicsTopics.reduce((sum, t) => sum + t.concepts.length, 0)
  const totalFormulas = economicsTopics.reduce(
    (sum, t) => sum + t.concepts.filter(c => c.formula).length, 0
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 flex-wrap">
          <Link href="/" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Home</Link>
          <span className="text-gray-600">/</span>
          <h1 className="text-3xl font-bold text-white">Economics</h1>
          <span className="text-sm bg-green-900/60 text-green-300 border border-green-700/50 px-3 py-1 rounded-full font-medium">
            8-13% Exam Weight
          </span>
        </div>
        <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
          One of the largest sections on the CFA Level 1 exam, covering microeconomic foundations (demand, supply, market structures) and macroeconomics (GDP, business cycles, monetary and fiscal policy, international trade). Strong coverage here provides an edge across multiple topic areas.
        </p>
        <div className="flex gap-4 text-sm text-gray-500">
          <span>{economicsTopics.length} topics</span>
          <span>•</span>
          <span>{totalConcepts} concepts</span>
          <span>•</span>
          <span>{totalFormulas} formulas</span>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-green-950/40 border border-green-700/40 rounded-xl p-4">
        <p className="text-green-300 text-sm leading-relaxed">
          <strong className="text-green-200">Exam tip:</strong> Economics questions test both conceptual understanding and numerical application. Focus on the logic behind models (why curves shift, what elasticity implies for revenue, how market structure affects pricing) rather than memorising outcomes. The CFA exam rewards candidates who can reason from first principles.
        </p>
      </div>

      {/* Topic Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {economicsTopics.map(topic => {
          const difficulty = getTopicDifficulty(topic.concepts.length)
          const formulaCount = topic.concepts.filter(c => c.formula).length
          const hasNumerical = topic.concepts.some(c => c.numericalExample)

          return (
            <Link
              key={topic.id}
              href={`/topic/${topic.id}`}
              className="group bg-gray-900 border border-gray-800 hover:border-green-700/60 rounded-xl p-5 transition-all hover:bg-gray-900/80 space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-white font-semibold text-base leading-snug group-hover:text-green-300 transition-colors">
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
                  <span>{topic.concepts.length} concepts</span>
                  {formulaCount > 0 && <span>{formulaCount} formulas</span>}
                  {hasNumerical && <span>worked examples</span>}
                </div>
                <span className="text-xs text-green-500 group-hover:text-green-400 transition-colors">
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
          Formulas Cheat Sheet
        </Link>
        <Link
          href="/"
          className="bg-blue-600/20 hover:bg-blue-600/30 border border-blue-600/40 text-blue-300 font-medium text-sm px-5 py-2.5 rounded-xl transition-colors"
        >
          Portfolio Management
        </Link>
        <Link
          href="/ethics"
          className="bg-violet-600/20 hover:bg-violet-600/30 border border-violet-600/40 text-violet-300 font-medium text-sm px-5 py-2.5 rounded-xl transition-colors"
        >
          Ethics &amp; Standards
        </Link>
      </div>
    </div>
  )
}
