import Link from 'next/link'
import { notFound } from 'next/navigation'
import { portfolioManagementTopics } from '@/data/portfolio-management'
import { ethicsTopics } from '@/data/ethics-professional-standards'
import { economicsTopics } from '@/data/economics'
import ConceptCard from '@/components/ConceptCard'
import ChatInterface from '@/components/ChatInterface'

const allTopics = [...portfolioManagementTopics, ...ethicsTopics, ...economicsTopics]

export async function generateStaticParams() {
  return allTopics.flatMap(t =>
    t.concepts.map(c => ({ id: c.id }))
  )
}

export default async function ConceptPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  let concept = null
  let topic = null

  for (const t of allTopics) {
    const found = t.concepts.find(c => c.id === id)
    if (found) {
      concept = found
      topic = t
      break
    }
  }

  if (!concept || !topic) notFound()

  // Find previous and next concepts for navigation
  const allConcepts = allTopics.flatMap(t => t.concepts)
  const currentIndex = allConcepts.findIndex(c => c.id === id)
  const prevConcept = currentIndex > 0 ? allConcepts[currentIndex - 1] : null
  const nextConcept = currentIndex < allConcepts.length - 1 ? allConcepts[currentIndex + 1] : null

  // Build context string for Claude
  const conceptContext = [
    `Topic: ${topic.title}`,
    `First Principle: ${concept.firstPrinciple}`,
    concept.formula ? `Formula: ${concept.formula}` : null,
    `Exam Angle: ${concept.examAngle}`,
    `Key Points:\n${concept.keyPoints.map(kp => `- ${kp}`).join('\n')}`,
  ].filter(Boolean).join('\n\n')

  return (
    <div className="space-y-6 pb-20">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
        <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
        <span>/</span>
        <Link href={`/topic/${topic.id}`} className="hover:text-gray-300 transition-colors">
          {topic.title}
        </Link>
        <span>/</span>
        <span className="text-gray-300">{concept.title}</span>
      </nav>

      {/* Main Content: 2-column layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Concept Card (60%) */}
        <div className="lg:w-[60%]">
          <ConceptCard concept={concept} />
        </div>

        {/* Right: Chat Interface (40%) */}
        <div className="lg:w-[40%]">
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">
            AI Tutor
          </p>
          <ChatInterface
            conceptTitle={concept.title}
            conceptContext={conceptContext}
          />
        </div>
      </div>

      {/* Fixed Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-gray-950/95 backdrop-blur border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <div className="flex-1">
            {prevConcept ? (
              <Link
                href={`/concept/${prevConcept.id}`}
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <span className="text-lg leading-none group-hover:-translate-x-0.5 transition-transform">&larr;</span>
                <span className="line-clamp-1 max-w-[200px] sm:max-w-xs">{prevConcept.title}</span>
              </Link>
            ) : (
              <Link
                href={`/topic/${topic!.id}`}
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <span className="text-lg leading-none group-hover:-translate-x-0.5 transition-transform">&larr;</span>
                <span>Back to Topic</span>
              </Link>
            )}
          </div>

          <span className="text-xs text-gray-600 shrink-0">
            {currentIndex + 1} / {allConcepts.length}
          </span>

          <div className="flex-1 flex justify-end">
            {nextConcept ? (
              <Link
                href={`/concept/${nextConcept.id}`}
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <span className="line-clamp-1 max-w-[200px] sm:max-w-xs text-right">{nextConcept.title}</span>
                <span className="text-lg leading-none group-hover:translate-x-0.5 transition-transform">&rarr;</span>
              </Link>
            ) : (
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <span>All Topics</span>
                <span className="text-lg leading-none group-hover:translate-x-0.5 transition-transform">&rarr;</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
