import Link from 'next/link'
import { portfolioManagementTopics } from '@/data/portfolio-management'
import { ethicsTopics } from '@/data/ethics-professional-standards'
import { economicsTopics } from '@/data/economics'

const difficultyColorMap = {
  easy: 'bg-green-900/50 text-green-300',
  medium: 'bg-yellow-900/50 text-yellow-300',
  hard: 'bg-red-900/50 text-red-300',
}

function getTopicDifficulty(conceptCount: number): 'easy' | 'medium' | 'hard' {
  if (conceptCount <= 4) return 'easy'
  if (conceptCount <= 7) return 'medium'
  return 'hard'
}

export default function HomePage() {
  const totalConcepts = portfolioManagementTopics.reduce((sum, t) => sum + t.concepts.length, 0)
  const totalFormulas = portfolioManagementTopics.reduce(
    (sum, t) => sum + t.concepts.filter(c => c.formula).length, 0
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-3xl font-bold text-white">Portfolio Management</h1>
          <span className="text-sm bg-blue-900/60 text-blue-300 border border-blue-700/50 px-3 py-1 rounded-full font-medium">
            5-8% Exam Weight
          </span>
        </div>
        <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
          Quick revision summarised with first principles for CFA Level 1. Master the concepts, understand the exam angles with key points.
        </p>
        <div className="flex gap-4 text-sm text-gray-500">
          <span>{portfolioManagementTopics.length} topics</span>
          <span>•</span>
          <span>{totalConcepts} concepts</span>
          <span>•</span>
          <span>{totalFormulas} formulas</span>
        </div>
      </div>

      {/* Topic Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {portfolioManagementTopics.map(topic => {
          const difficulty = getTopicDifficulty(topic.concepts.length)
          const formulaCount = topic.concepts.filter(c => c.formula).length

          return (
            <Link
              key={topic.id}
              href={`/topic/${topic.id}`}
              className="group bg-gray-900 border border-gray-800 hover:border-gray-600 rounded-xl p-5 transition-all hover:bg-gray-900/80 space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-white font-semibold text-base leading-snug group-hover:text-blue-300 transition-colors">
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
                </div>
                <span className="text-xs text-blue-500 group-hover:text-blue-400 transition-colors">
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
          Cheat Sheet
        </Link>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 pt-8 space-y-6">
        {/* Ethics Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 flex-wrap">
            <Link href="/ethics" className="text-3xl font-bold text-white hover:text-violet-300 transition-colors">
              Ethics &amp; Professional Standards
            </Link>
            <span className="text-sm bg-violet-900/60 text-violet-300 border border-violet-700/50 px-3 py-1 rounded-full font-medium">
              10-15% Exam Weight
            </span>
          </div>
          <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
            The most important section for passing. Each standard includes a realistic case scenario with verdict and reasoning.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>{ethicsTopics.length} standard groups</span>
            <span>•</span>
            <span>{ethicsTopics.reduce((s, t) => s + t.concepts.length, 0)} individual standards</span>
          </div>
        </div>

        {/* Ethics Topic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {ethicsTopics.map(topic => {
            const formulaCount = topic.concepts.filter(c => c.formula).length
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
                </div>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {topic.description}
                </p>
                <div className="flex items-center justify-between pt-1">
                  <div className="flex gap-3 text-xs text-gray-500">
                    <span>{topic.concepts.length} standards</span>
                    {formulaCount > 0 && <span>{formulaCount} codes</span>}
                  </div>
                  <span className="text-xs text-violet-500 group-hover:text-violet-400 transition-colors">
                    Study &rarr;
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        <Link
          href="/ethics"
          className="inline-flex items-center gap-2 bg-violet-600/20 hover:bg-violet-600/30 border border-violet-600/40 text-violet-300 font-medium text-sm px-5 py-2.5 rounded-xl transition-colors"
        >
          View Ethics Overview &rarr;
        </Link>
      </div>

      {/* Economics Section */}
      <div className="border-t border-gray-800 pt-8 space-y-6">
        {/* Economics Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 flex-wrap">
            <Link href="/economics" className="text-3xl font-bold text-white hover:text-green-300 transition-colors">
              Economics
            </Link>
            <span className="text-sm bg-green-900/60 text-green-300 border border-green-700/50 px-3 py-1 rounded-full font-medium">
              8-13% Exam Weight
            </span>
          </div>
          <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
            Micro and macro foundations: demand and supply, market structures, GDP measurement, business cycles, monetary and fiscal policy, and international trade.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>{economicsTopics.length} topics</span>
            <span>•</span>
            <span>{economicsTopics.reduce((s, t) => s + t.concepts.length, 0)} concepts</span>
          </div>
        </div>

        {/* Economics Topic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {economicsTopics.map(topic => {
            const formulaCount = topic.concepts.filter(c => c.formula).length
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
                </div>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {topic.description}
                </p>
                <div className="flex items-center justify-between pt-1">
                  <div className="flex gap-3 text-xs text-gray-500">
                    <span>{topic.concepts.length} concepts</span>
                    {formulaCount > 0 && <span>{formulaCount} formulas</span>}
                  </div>
                  <span className="text-xs text-green-500 group-hover:text-green-400 transition-colors">
                    Study &rarr;
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        <Link
          href="/economics"
          className="inline-flex items-center gap-2 bg-green-600/20 hover:bg-green-600/30 border border-green-600/40 text-green-300 font-medium text-sm px-5 py-2.5 rounded-xl transition-colors"
        >
          View Economics Overview &rarr;
        </Link>
      </div>
    </div>
  )
}
