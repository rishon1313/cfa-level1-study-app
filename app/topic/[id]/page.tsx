import Link from 'next/link'
import { notFound } from 'next/navigation'
import { portfolioManagementTopics } from '@/data/portfolio-management'
import { ethicsTopics } from '@/data/ethics-professional-standards'
import { economicsTopics } from '@/data/economics'
import ConceptCard from '@/components/ConceptCard'

const allTopics = [...portfolioManagementTopics, ...ethicsTopics, ...economicsTopics]

export async function generateStaticParams() {
  return allTopics.map(t => ({ id: t.id }))
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const topic = allTopics.find(t => t.id === id)

  if (!topic) notFound()

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-gray-300">{topic.title}</span>
      </nav>

      {/* Topic Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-2xl font-bold text-white">{topic.title}</h1>
          <span className="text-xs bg-blue-900/60 text-blue-300 border border-blue-700/50 px-2.5 py-1 rounded-full font-medium">
            {topic.examWeight} exam weight
          </span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">{topic.description}</p>
        <p className="text-gray-500 text-sm">{topic.concepts.length} concepts</p>
      </div>

      {/* Concept Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {topic.concepts.map(concept => (
          <Link key={concept.id} href={`/concept/${concept.id}`}>
            <ConceptCard concept={concept} compact />
          </Link>
        ))}
      </div>

      {/* Quiz Button */}
      <div className="pt-2">
        <Link
          href={`/quiz/${topic.id}`}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-colors"
        >
          Quiz this Topic
        </Link>
      </div>
    </div>
  )
}
