'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface ChatInterfaceProps {
  conceptTitle: string
  conceptContext: string
}

export default function ChatInterface({ conceptTitle, conceptContext }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [apiError, setApiError] = useState<string | null>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async () => {
    const trimmed = input.trim()
    if (!trimmed || isLoading) return

    const userMessage: Message = { role: 'user', content: trimmed }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setIsLoading(true)
    setApiError(null)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          conceptTitle,
          conceptContext,
          history: messages.map(m => ({ role: m.role, content: m.content }))
        })
      })

      if (!res.ok) {
        const errText = await res.text()
        setApiError(errText)
        setIsLoading(false)
        return
      }

      const assistantMessage: Message = { role: 'assistant', content: '' }
      setMessages(prev => [...prev, assistantMessage])

      const reader = res.body?.getReader()
      const decoder = new TextDecoder()

      if (!reader) {
        setIsLoading(false)
        return
      }

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value, { stream: true })
        setMessages(prev => {
          const updated = [...prev]
          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            content: updated[updated.length - 1].content + chunk
          }
          return updated
        })
      }
    } catch (err) {
      setApiError('Network error. Please try again.')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const suggestedQuestions = [
    `How does ${conceptTitle} get tested on the CFA exam?`,
    `Give me a quick memory trick for ${conceptTitle}`,
    `Walk me through a calculation example`,
  ]

  return (
    <div className="flex flex-col h-full min-h-[420px] bg-gray-950 border border-gray-800 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 bg-gray-900 border-b border-gray-800 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Ask AI</p>
          <p className="text-xs text-gray-500 mt-0.5">Tutoring: {conceptTitle}</p>
        </div>
        <span className="text-xs font-medium bg-amber-500/15 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full">
          Coming Soon
        </span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="space-y-2">
            <p className="text-xs text-gray-500 mb-3">Suggested questions:</p>
            {suggestedQuestions.map((q, i) => (
              <div
                key={i}
                className="block w-full text-left text-xs text-gray-600 bg-gray-900/50 border border-gray-800/50 rounded-lg px-3 py-2 cursor-not-allowed select-none"
              >
                {q}
              </div>
            ))}
            <p className="text-xs text-gray-600 italic pt-2">AI tutoring will be available soon.</p>
          </div>
        )}

        {apiError && (
          <div className="bg-red-950/50 border border-red-800/50 rounded-lg p-3">
            <p className="text-xs text-red-400">{apiError}</p>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-xl px-3 py-2.5 text-sm leading-relaxed ${
              msg.role === 'user'
                ? 'bg-blue-600 text-white rounded-br-sm'
                : 'bg-gray-800 text-gray-200 rounded-bl-sm'
            }`}>
              {msg.content || (isLoading && i === messages.length - 1 ? (
                <span className="inline-flex gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay:'0ms'}}></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay:'150ms'}}></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay:'300ms'}}></span>
                </span>
              ) : '')}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input — disabled, coming soon */}
      <div className="px-3 py-3 bg-gray-900 border-t border-gray-800">
        <div className="flex gap-2 items-end">
          <textarea
            value=""
            disabled
            placeholder="AI tutoring coming soon..."
            rows={1}
            className="flex-1 bg-gray-800/50 text-sm text-gray-600 placeholder-gray-600 rounded-lg px-3 py-2 resize-none cursor-not-allowed"
          />
          <button
            disabled
            className="shrink-0 bg-gray-800 text-gray-600 text-sm font-medium px-3 py-2 rounded-lg cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
