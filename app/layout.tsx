import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import Link from 'next/link'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import TopicNav from '@/components/TopicNav'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

export const metadata: Metadata = {
  title: 'CFA L1 Revision Tool',
  description: 'A structured CFA Level 1 revision tool covering Portfolio Management and Ethics & Professional Standards. Each concept includes first principles, formulas, exam angles, and worked examples.',
  openGraph: {
    title: 'CFA L1 Revision Tool',
    description: 'Structured revision for CFA Level 1 — first principles, formulas, exam angles, worked examples. Covers Portfolio Management and Ethics.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-screen bg-gray-950 text-gray-100 antialiased flex flex-col">
        {/* Top Nav */}
        <header className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">CFA</div>
              <span className="text-white font-semibold text-sm">Level 1 Study</span>
            </Link>
            <nav className="flex items-center gap-1">
              <Link
                href="/"
                className="text-sm text-gray-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/formulas"
                className="text-sm text-gray-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Cheat Sheet
              </Link>
            </nav>
          </div>
        </header>

        {/* Main content with sidebar */}
        <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6">
          <div className="flex gap-8">
            {/* Sidebar — hidden on mobile */}
            <aside className="hidden lg:block">
              <TopicNav />
            </aside>

            {/* Page content */}
            <main className="flex-1 min-w-0">
              {children}
            </main>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
