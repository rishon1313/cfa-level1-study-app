import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

const client = new Anthropic()

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY === 'your_api_key_here') {
    return NextResponse.json({ error: 'Add ANTHROPIC_API_KEY to .env.local to enable AI features' }, { status: 503 })
  }

  const { topicTitle, concepts } = await req.json()

  const conceptsSummary = concepts.map((c: { title: string; firstPrinciple: string; formula?: string }) =>
    `- ${c.title}: ${c.firstPrinciple}${c.formula ? ` Formula: ${c.formula}` : ''}`
  ).join('\n')

  const message = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1500,
    messages: [{
      role: 'user',
      content: `Generate 5 CFA Level 1 style multiple-choice questions on "${topicTitle}".

Concepts to test:
${conceptsSummary}

Return ONLY valid JSON array (no markdown, no explanation):
[
  {
    "question": "...",
    "options": ["A. ...", "B. ...", "C. ...", "D. ..."],
    "correctIndex": 0,
    "explanation": "..."
  }
]

Make questions exam-realistic. Mix calculation questions with conceptual ones. Explanations should reference first principles.`
    }]
  })

  const text = (message.content[0] as { type: string; text: string }).text
  // Strip markdown code blocks if present
  const jsonText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
  const questions = JSON.parse(jsonText)
  return NextResponse.json({ questions })
}
