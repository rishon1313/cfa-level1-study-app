'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { portfolioManagementTopics } from '@/data/portfolio-management'
import { ethicsTopics } from '@/data/ethics-professional-standards'

export default function TopicNav() {
  const pathname = usePathname()

  function renderTopicLink(topic: (typeof portfolioManagementTopics)[number], accentClass: string, activeClass: string) {
    const isActive =
      pathname.startsWith(`/topic/${topic.id}`) ||
      pathname.startsWith(`/quiz/${topic.id}`) ||
      topic.concepts.some(c => pathname.startsWith(`/concept/${c.id}`))

    return (
      <Link
        key={topic.id}
        href={`/topic/${topic.id}`}
        className={`group flex items-start justify-between gap-2 px-3 py-2.5 rounded-lg text-sm transition-colors ${
          isActive
            ? `${activeClass} border`
            : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200 border border-transparent'
        }`}
      >
        <span className="leading-snug">{topic.title}</span>
        <span className={`shrink-0 text-xs mt-0.5 ${isActive ? accentClass : 'text-gray-600'}`}>
          {topic.concepts.length}
        </span>
      </Link>
    )
  }

  return (
    <nav className="w-64 shrink-0">
      <div className="sticky top-4 max-h-[calc(100vh-5rem)] overflow-y-auto pr-1">
        {/* Portfolio Management */}
        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-3 px-1">
          Portfolio Management
        </p>
        <div className="space-y-1">
          {portfolioManagementTopics.map(topic =>
            renderTopicLink(topic, 'text-blue-400', 'bg-blue-600/20 text-blue-300 border-blue-600/30')
          )}
        </div>

        {/* Ethics & Professional Standards */}
        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mt-6 mb-3 px-1 border-t border-gray-800 pt-4">
          Ethics &amp; Professional Standards
        </p>
        <div className="space-y-1">
          {ethicsTopics.map(topic =>
            renderTopicLink(topic, 'text-violet-400', 'bg-violet-600/20 text-violet-300 border-violet-600/30')
          )}
        </div>

        <div className="mt-6 space-y-1 border-t border-gray-800 pt-4">
          <Link
            href="/formulas"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
              pathname === '/formulas'
                ? 'bg-amber-600/20 text-amber-300 border border-amber-600/30'
                : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200 border border-transparent'
            }`}
          >
            <span>Cheat Sheet</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
