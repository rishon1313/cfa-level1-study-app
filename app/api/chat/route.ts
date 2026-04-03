import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'

const client = new Anthropic()

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY === 'your_api_key_here') {
    return new Response('Add ANTHROPIC_API_KEY to .env.local to enable AI features', { status: 503 })
  }

  const { message, conceptTitle, conceptContext, history } = await req.json()

  const systemPrompt = `You are a CFA Level 1 exam tutor. You are helping a student understand: "${conceptTitle}".

Context about this concept:
${conceptContext}

Rules:
- Always explain using first principles — the WHY behind the concept
- Be concise (exam is in 1.25 months, every minute counts)
- Connect to how it gets tested in CFA L1 exams
- Use formulas where helpful
- Max 150 words per response unless the question demands more`

  const stream = await client.messages.stream({
    model: 'claude-sonnet-4-6',
    max_tokens: 500,
    system: systemPrompt,
    messages: [
      ...history,
      { role: 'user', content: message }
    ]
  })

  const encoder = new TextEncoder()
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
          controller.enqueue(encoder.encode(chunk.delta.text))
        }
      }
      controller.close()
    }
  })

  return new Response(readable, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  })
}
