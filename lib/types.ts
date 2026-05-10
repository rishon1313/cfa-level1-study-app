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
  image?: string         // Path to exam-day revision diagram (relative to /public)
  comparisonTable?: {    // Exam-day quick-reference table
    caption?: string
    headers: string[]
    rows: string[][]
  }
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

export interface PracticeQuestion {
  id: string
  question: string
  options: string[]        // e.g. ["A. ...", "B. ...", "C. ..."]
  correctIndex: number     // 0-based
  explanation: string
  concept: string          // short label e.g. "IFRS Impairment"
}

export interface ConceptSummary {
  title: string
  rule: string             // the one key rule/formula to remember
}

export interface PracticeChapter {
  id: string
  subject: string          // e.g. "Financial Statement Analysis"
  title: string            // e.g. "Analysis of Long-Term Assets"
  score: string            // e.g. "15/33"
  conceptsSummary: ConceptSummary[]
  questions: PracticeQuestion[]  // only the wrong ones
}
