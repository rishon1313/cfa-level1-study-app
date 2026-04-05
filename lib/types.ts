export interface Concept {
  id: string
  topicId: string
  title: string
  firstPrinciple: string
  formula?: string
  examAngle: string
  keyPoints: string[]
  difficulty: 'easy' | 'medium' | 'hard'
  tags: string[]
  numericalExample?: {
    problem: string      // The question/scenario
    solution: string     // Step-by-step working
    answer: string       // Final answer highlighted
  }
  scenario?: {           // For ethics/case-study chapters
    situation: string
    question: string
    verdict: string
    reasoning: string
  }
  mindMap?: string       // Preformatted ASCII mind map
}

export interface Topic {
  id: string
  title: string
  description: string
  examWeight: string
  concepts: Concept[]
}

export interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}
