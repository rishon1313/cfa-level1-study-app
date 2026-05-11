import { Topic } from '@/lib/types'

export const fsaInventoriesTopics: Topic[] = [
  {
    id: 'fsa-inventories',
    title: 'Inventories',
    description: 'Inventory cost flow assumptions (FIFO, LIFO, weighted average), inventory valuation (NRV under IFRS, LCM under US GAAP), and the analytical adjustments needed when comparing companies using different methods.',
    examWeight: '8-12%',
    concepts: [
      {
        id: 'inventory-lcm-lifo-retail',
        topicId: 'fsa-inventories',
        title: 'Lower of Cost or Market (LCM) — LIFO & Retail Method',
        firstPrinciple: 'Under US GAAP, LIFO and the retail method use Lower of Cost or Market (LCM) rather than the simpler Lower of Cost or NRV (used by IFRS and US GAAP\'s FIFO/average cost). The key insight: "Market" is not simply NRV — it is current replacement cost (RC) clamped between a ceiling (NRV) and a floor (NRV minus normal profit margin). This prevents firms from writing inventory down to an unrealistically low value that would inflate future profits when the inventory is sold.',
        formula: 'Ceiling = NRV\nFloor  = NRV − Normal profit margin\nMarket = max(Floor, min(RC, Ceiling))\nCarrying value = min(Cost, Market)',
        examAngle: 'The exam gives you RC, NRV, and normal profit margin, and asks for the balance sheet carrying value. Work the formula in order: (1) clamp RC between floor and ceiling to get Market; (2) take the lower of Cost vs. Market. The most common trap is using RC directly as "market" without applying the ceiling/floor.',
        keyPoints: [
          'LCM applies to LIFO and retail inventory methods under US GAAP; FIFO/average cost use lower of cost or NRV instead',
          'Ceiling = NRV: inventory cannot be written up above what you can sell it for',
          'Floor = NRV − normal profit margin: prevents writing down so low that the eventual sale looks abnormally profitable',
          'Market = RC clamped to [Floor, Ceiling]: if RC > Ceiling → use Ceiling; if RC < Floor → use Floor; otherwise use RC',
          'If Cost < Market, no write-down needed — inventory stays at Cost',
          'Write-downs reduce inventory on the balance sheet and increase COGS (or a loss line) on the income statement',
          'Under IFRS: simpler — always use lower of Cost or NRV (no ceiling/floor concept)'
        ],
        difficulty: 'hard',
        tags: ['LCM', 'lower of cost or market', 'LIFO', 'retail method', 'NRV', 'US GAAP', 'inventory valuation'],
        numericalExample: {
          problem: 'Inventory cost = $120. Current replacement cost (RC) = $95. NRV = $105. Normal profit margin = $20. What is the balance sheet carrying value under LCM?',
          solution: 'Step 1 — Compute ceiling and floor:\n  Ceiling = NRV = $105\n  Floor   = NRV − normal profit margin = $105 − $20 = $85\n\nStep 2 — Clamp RC to get Market:\n  RC = $95; Floor = $85; Ceiling = $105\n  $85 ≤ $95 ≤ $105  →  Market = RC = $95\n\nStep 3 — Apply lower of Cost or Market:\n  Cost = $120 vs. Market = $95\n  $95 < $120  →  write down to Market',
          answer: 'Carrying value = $95\nWrite-down = $120 − $95 = $25 (recognised as a loss / added to COGS)'
        },
        comparisonTable: {
          caption: 'LCM Formula — Component Reference',
          headers: ['Component', 'Formula', 'Purpose'],
          rows: [
            ['Ceiling (upper limit)', 'NRV', 'Cannot carry inventory above what it can be sold for'],
            ['Floor (lower limit)', 'NRV − Normal profit margin', 'Prevents artificially low write-down that inflates future profit'],
            ['Market', 'max(Floor, min(RC, Ceiling))', 'RC clamped between floor and ceiling'],
            ['Carrying value', 'min(Cost, Market)', 'Final balance sheet value — conservatism principle'],
          ]
        }
      }
    ]
  }
]
