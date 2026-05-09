import Link from 'next/link'
import { allPracticeChapters } from '@/data/practice'

export default function PracticePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-3xl font-bold text-white">Practice Questions</h1>
          <span className="text-sm bg-orange-900/60 text-orange-300 border border-orange-700/50 px-3 py-1 rounded-full font-medium">
            Wrong Answers to Revise
          </span>
        </div>
        <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
          Targeted practice on the questions you got wrong. Review concept summaries, then drill the questions until they stick.
        </p>
        <div className="flex gap-4 text-sm text-gray-500">
          <span>{allPracticeChapters.length} chapter{allPracticeChapters.length !== 1 ? 's' : ''}</span>
          <span>•</span>
          <span>{allPracticeChapters.reduce((s, c) => s + c.questions.length, 0)} questions to revise</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {allPracticeChapters.map(chapter => {
          const [correct, total] = chapter.score.split('/').map(Number)
          const wrong = total - correct
          return (
            <div
              key={chapter.id}
              className="group bg-gray-900 border border-gray-800 hover:border-orange-700/60 rounded-xl p-5 transition-all space-y-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
                    {chapter.subject.split(' ').map(w => w[0]).join('')}
                  </span>
                  <h2 className="text-white font-semibold text-base leading-snug">
                    {chapter.title}
                  </h2>
                </div>
              </div>

              <p className="text-gray-400 text-sm">
                Score: <span className="text-white font-medium">{chapter.score}</span>
                {' '}&mdash; <span className="text-orange-400 font-medium">{wrong} to revise</span>
              </p>

              <div className="flex gap-2 pt-1">
                <Link
                  href={`/practice/${chapter.id}?tab=concepts`}
                  className="flex-1 text-center text-xs font-medium bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-colors border border-gray-700 hover:border-gray-600"
                >
                  Concept Summary
                </Link>
                <Link
                  href={`/practice/${chapter.id}?tab=questions`}
                  className="flex-1 text-center text-xs font-medium bg-orange-600/20 hover:bg-orange-600/30 text-orange-300 hover:text-orange-200 px-3 py-2 rounded-lg transition-colors border border-orange-600/40 hover:border-orange-500/50"
                >
                  Practice Questions
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
