import { PracticeChapter } from '@/lib/types'

export const fsaLongTermLiabilities: PracticeChapter = {
  id: 'fsa-long-term-liabilities',
  subject: 'Financial Statement Analysis',
  title: 'Topics in Long-Term Liabilities and Equity',
  score: '10/21',
  conceptsSummary: [
    {
      title: 'Share-Based Compensation Objectives',
      rule: 'Objectives: (1) attract new employees, (2) retain & motivate existing employees, (3) align employee interests with SHAREHOLDERS (not management). Maximising executive pay is NOT an objective.',
    },
    {
      title: 'Stock Grant vs Stock Option',
      rule: 'Stock grant: fair value = market price at grant date. Stock option: fair value must be ESTIMATED (e.g. Black-Scholes). Both are expensed over the vesting/service period — not immediately. Measurement date for both = grant date.',
    },
    {
      title: 'Share-Based Compensation Expense',
      rule: 'Total compensation = shares granted × fair value at grant date. Annual expense = total ÷ vesting period. Recognised even if no cash changes hands.',
    },
    {
      title: 'Lessor: Operating vs Finance Lease',
      rule: 'Operating lease: asset STAYS on lessor\'s balance sheet, continues to be depreciated. Finance/sales-type lease: asset is DERECOGNISED, replaced by lease receivable. Key: lessor keeps asset only in operating lease.',
    },
    {
      title: 'Lessor Revenue at Lease Inception',
      rule: 'Sales-type: full revenue recognised at inception (highest upfront). Direct financing: only interest income over time. Operating: lease receipts recognised as income over lease term. Sales-type gives highest revenue at inception.',
    },
    {
      title: 'Lessee Finance vs Operating Lease (Post-Inception)',
      rule: 'Finance lease: depreciation on ROU asset + interest on lease liability (front-loaded total expense). Operating lease: single straight-line expense each period. Both show ROU asset and liability on balance sheet (post-2019).',
    },
    {
      title: 'Lease Liability at Inception',
      rule: 'Lease liability = PV of future lease payments (NOT fair value of asset). ROU asset ≈ lease liability at inception (plus any initial direct costs). Fair value of asset is irrelevant to the liability measurement.',
    },
    {
      title: 'Defined Benefit Pension — Balance Sheet',
      rule: 'Net pension position = Plan assets (fair value) − PV of pension obligation. Surplus → net pension ASSET. Deficit → net pension LIABILITY. Always net — not shown gross on balance sheet.',
    },
    {
      title: 'Pension — OCI vs P&L (IFRS vs US GAAP)',
      rule: 'IFRS OCI: actuarial gains/losses only. IFRS P&L: service cost + net interest on net pension liability. US GAAP OCI: actuarial G/L + past service costs (amortised into P&L later). US GAAP P&L: interest expense on beginning obligation.',
    },
    {
      title: 'IFRS Manufacturer Lessor',
      rule: 'Manufacturer/dealer lessor under IFRS: lease classified as finance lease → recognise revenue (= asset value) + COGS (= carrying value) at inception. Asset derecognised, replaced by lease receivable. No depreciation — asset is off the books.',
    },
    {
      title: 'Finance Lease Expense Calculation (IFRS Annuity Due)',
      rule: 'If first payment at inception → annuity due. PV = lease liability. Year 1: interest = rate × (PV − first payment). Amortisation = PV ÷ lease term. Total expense = interest + amortisation. Do NOT use asset useful life if no ownership transfer.',
    },
    {
      title: 'Lease Advantages to Lessee',
      rule: 'Lessee advantages: low/no down payment, lower fixed interest rates, less restrictive covenants, off-balance-sheet (pre-2019). High residual value benefits the LESSOR (who retains legal title), not the lessee.',
    },
  ],
  questions: [
    {
      id: 'q2',
      concept: 'Share-Based Compensation Objectives',
      question: 'Which is typically an objective of a share-based compensation plan?',
      options: ['A. Attracting new employees', 'B. Maximizing executive compensation', 'C. Alignment of employees\' interests with those of management'],
      correctIndex: 0,
      explanation: 'Objectives are: attract new employees, retain/motivate existing employees, align interests with SHAREHOLDERS (not management). Maximising executive pay is never stated as an objective. C is a trap — it says "management" not "shareholders".',
    },
    {
      id: 'q4',
      concept: 'Stock Grant vs Stock Option',
      question: 'A key difference between a stock grant and a stock option grant is:',
      options: [
        'A. Fair value of stock grants is based on market value at grant date; fair value of options must be estimated',
        'B. Stock grants are expensed over the service period; stock options are expensed immediately',
        'C. Compensation for stock grants is determined at grant date; for options it is determined at exercise date',
      ],
      correctIndex: 0,
      explanation: 'Stock grant value = market price at grant date (observable). Option value must be estimated (e.g. Black-Scholes) because the future payoff is uncertain. Both are expensed over the service/vesting period — not immediately. Measurement date for both = grant date, not exercise date.',
    },
    {
      id: 'q8',
      concept: 'Lessor: Operating vs Finance Lease',
      question: 'For a lessor, the leased asset appears on the balance sheet and continues to be depreciated when the lease is classified as:',
      options: ['A. A finance lease', 'B. A sales-type lease', 'C. An operating lease'],
      correctIndex: 2,
      explanation: 'Operating lease → lessor retains the asset on its balance sheet and depreciates it. Finance/sales-type lease → lessor derecognises the asset and records a lease receivable instead. No asset on the balance sheet = no depreciation.',
    },
    {
      id: 'q9',
      concept: 'Lessor Revenue at Lease Inception',
      question: 'Under US GAAP, a lessor\'s reported revenues at lease inception will be highest if the lease is classified as:',
      options: ['A. A sales-type lease', 'B. An operating lease', 'C. A direct financing lease'],
      correctIndex: 0,
      explanation: 'Sales-type: full revenue recognised upfront at inception — highest. Direct financing: only interest income earned over time. Operating: lease receipts recognised over the lease term. Sales-type front-loads the most income.',
    },
    {
      id: 'q12',
      concept: 'Lessee Finance vs Operating Lease (Post-Inception)',
      question: 'Under US GAAP, a lessee\'s accounting for a long-term finance lease after inception includes:',
      options: [
        'A. Recognising a single lease expense',
        'B. Recording depreciation expense on the right-of-use asset',
        'C. Increasing the balance of the lease liability by a portion of the lease payment',
      ],
      correctIndex: 1,
      explanation: 'Finance lease: depreciation on ROU asset + interest expense on liability. Lease payments REDUCE the liability (not increase it). Single straight-line expense applies to OPERATING leases, not finance leases.',
    },
    {
      id: 'q13',
      concept: 'Lease Liability at Inception',
      question: 'Finance lease: payments of EUR19M/year for 3 years, FMV of asset = EUR49M, PV of payments = EUR47.25M. Lease liability on balance sheet at inception is:',
      options: ['A. EUR47,250,188', 'B. EUR49,000,000', 'C. EUR57,000,000'],
      correctIndex: 0,
      explanation: 'Lease liability = PV of lease payments = EUR47.25M. The fair value of the asset (EUR49M) is irrelevant to the liability. EUR57M = sum of undiscounted payments (19×3) — never use undiscounted amounts for lease liabilities.',
    },
    {
      id: 'q14',
      concept: 'Defined Benefit Pension — Balance Sheet',
      question: 'Pension obligation = EUR10M, plan assets = EUR9M. Balance sheet presentation under IFRS or US GAAP:',
      options: [
        'A. EUR10M shown as liability, EUR9M shown as asset',
        'B. EUR1M shown as net pension obligation',
        'C. Not on balance sheet — footnote disclosure only',
      ],
      correctIndex: 1,
      explanation: 'Net pension liability = pension obligation − plan assets = 10 − 9 = EUR1M. Always presented net on the balance sheet — not gross. Pre-2006, footnote-only was common, but current standards require balance sheet recognition.',
    },
    {
      id: 'q16',
      concept: 'IFRS Manufacturer Lessor',
      question: 'A manufacturer leases its generators (25-year life) on 20+ year leases under IFRS. In year 1 of the programme, the company will recognise:',
      options: [
        'A. Revenue equal to the value of the leased asset',
        'B. Depreciation of the leased asset as an expense',
        'C. Cost of goods sold equal to the market value of the asset',
      ],
      correctIndex: 0,
      explanation: 'Manufacturer lessor under IFRS → classified as finance lease → recognise revenue (= asset value) and COGS (= carrying value, not market value) at inception. Asset is derecognised → no depreciation. C is wrong because COGS = carrying value, not market value.',
    },
    {
      id: 'q17',
      concept: 'Pension — OCI vs P&L (IFRS vs US GAAP)',
      question: 'Under IFRS, which pension cost of a defined-benefit plan is included in other comprehensive income?',
      options: [
        'A. Net interest expense on the beginning net pension liability',
        'B. Actuarial gains or losses',
        'C. Employee service cost',
      ],
      correctIndex: 1,
      explanation: 'IFRS OCI: actuarial gains/losses only. Net interest and service cost both go to P&L under IFRS. Under US GAAP, both actuarial G/L and past service costs go to OCI initially, then are amortised into P&L.',
    },
    {
      id: 'q18',
      concept: 'Finance Lease Expense Calculation (IFRS Annuity Due)',
      question: 'IFRS lease: 5 payments of $25,000, first due immediately (annuity due), rate = 8%, asset FV = $115,000. Total Year 1 lease expense:',
      options: ['A. $22,024', 'B. $25,000', 'C. $28,185'],
      correctIndex: 2,
      explanation: 'Annuity due PV (Begin mode): PMT=25,000, i=8%, N=5 → PV=$107,803. Pay $25,000 on day 1 → liability = $82,803. Interest Year 1 = 8% × $82,803 = $6,624. Amortisation = $107,803 ÷ 5 years = $21,561. Total = $28,185. Key errors: A amortises over 7 years (asset life, not lease term). B treats as operating lease.',
    },
    {
      id: 'q20',
      concept: 'Lease Advantages to Lessee',
      question: 'Relative to purchasing an asset, leases generally:',
      options: [
        'A. Have more restrictive provisions than other forms of borrowing',
        'B. Provide less costly financing in the form of lower fixed interest rates',
        'C. Require a larger down payment',
      ],
      correctIndex: 1,
      explanation: 'Leases offer less costly financing: lower fixed interest rates and little/no down payment. Lease covenants are typically LESS restrictive than loan covenants — lessors can offer better terms because they retain legal title to the asset as security.',
    },
  ],
}
