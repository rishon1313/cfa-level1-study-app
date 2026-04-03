import { Topic } from '@/lib/types'

export const portfolioManagementTopics: Topic[] = [
  {
    id: 'pm-overview',
    title: 'Portfolio Management: An Overview',
    description: 'Introduces the portfolio management process, types of investors, and pooled investment vehicles. Establishes why portfolios are managed holistically rather than security-by-security.',
    examWeight: '5-8%',
    concepts: [
      {
        id: 'investment-needs-individuals',
        topicId: 'pm-overview',
        title: 'Investment Needs of Individual Investors',
        firstPrinciple: 'Individual investors face a fundamental life-cycle challenge: they earn income during working years but need wealth during retirement. The investment portfolio must bridge this gap by growing capital over time while managing risk according to each person\'s unique circumstances. Life stage, human capital, and liabilities define what an "optimal" portfolio looks like for any individual.',
        examAngle: 'Exam questions test whether you can identify what drives an individual\'s risk tolerance (time horizon, income stability, wealth) and distinguish "ability to take risk" from "willingness to take risk."',
        keyPoints: [
          'Risk tolerance has two components: ability (objective, based on financial situation) and willingness (subjective, psychological comfort)',
          'Young investors have high human capital (future earnings) and can tolerate more financial risk; older investors have less time to recover losses',
          'Liquidity needs reduce risk tolerance — if you need cash soon, you cannot accept high volatility',
          'An investor\'s overall wealth = human capital + financial capital; portfolio construction should account for both',
          'Goals-based investing segments the portfolio by specific objectives (retirement, education, emergency fund)'
        ],
        difficulty: 'easy',
        tags: ['individuals', 'risk tolerance', 'life cycle', 'human capital']
      },
      {
        id: 'investment-needs-institutional',
        topicId: 'pm-overview',
        title: 'Investment Needs of Institutional Investors',
        firstPrinciple: 'Institutional investors hold assets on behalf of beneficiaries, creating a fiduciary duty to invest prudently. Each institution type has distinct liability structures that drive investment policy — a pension fund must meet future benefit payments, an endowment must provide perpetual spending support, and an insurance company must pay claims. The liability profile is the anchor around which the entire investment program is designed.',
        examAngle: 'Know the five major institution types (pension, endowment/foundation, insurance, bank, sovereign wealth fund) and their distinguishing features: time horizon, liquidity needs, and regulatory constraints.',
        keyPoints: [
          'Defined benefit pension plans: liabilities are tied to employee salaries; must match duration of assets to liabilities',
          'Endowments: infinite time horizon, typically 5% annual spending rule, high risk tolerance',
          'Life insurance companies: long-duration liabilities, need long-duration fixed income assets (liability matching)',
          'P&C insurance companies: short-duration liabilities, need high liquidity',
          'Banks: must manage interest rate risk between short-term deposits (liabilities) and long-term loans (assets)'
        ],
        difficulty: 'medium',
        tags: ['institutions', 'pension', 'endowment', 'insurance', 'fiduciary']
      },
      {
        id: 'portfolio-management-process',
        topicId: 'pm-overview',
        title: 'The Portfolio Management Process',
        firstPrinciple: 'Portfolio management is a continuous feedback loop, not a one-time event. Markets change, investor circumstances evolve, and portfolios drift from their targets — requiring systematic monitoring and rebalancing. The three-step process (planning, execution, feedback) ensures the portfolio always serves its intended purpose rather than drifting based on ad hoc decisions.',
        examAngle: 'The exam tests whether you know the correct order: IPS creation → asset allocation → security selection → monitoring/rebalancing. Know that the IPS comes FIRST.',
        keyPoints: [
          'Step 1 — Planning: Define objectives and constraints, create Investment Policy Statement (IPS)',
          'Step 2 — Execution: Strategic asset allocation, tactical deviations, security selection',
          'Step 3 — Feedback: Monitor performance, rebalance to target weights, revise IPS as needed',
          'The IPS is the governing document — every investment decision must align with it',
          'Top-down approach: asset allocation accounts for ~90% of portfolio return variation over time'
        ],
        difficulty: 'easy',
        tags: ['process', 'IPS', 'asset allocation', 'rebalancing', 'planning']
      },
      {
        id: 'types-investors',
        topicId: 'pm-overview',
        title: 'Types of Investors and Characteristics',
        firstPrinciple: 'Different investor types face different risk-return tradeoffs driven by their underlying obligations and time horizons. Understanding these differences is essential because the "right" portfolio is defined relative to an investor\'s specific purpose — there is no universally optimal portfolio, only one that best fits specific constraints and objectives.',
        examAngle: 'Exam often presents a scenario and asks you to identify the investor type or rank their risk tolerance. Focus on time horizon and liquidity as the key determinants.',
        keyPoints: [
          'Individual investors: variable risk tolerance, relatively illiquid (human capital tied up), tax-sensitive',
          'Pension funds (DB): risk tolerance depends on funded status; underfunded plans must be more conservative',
          'Endowments: highest risk tolerance due to perpetual time horizon; can invest in illiquid alternatives',
          'Insurance companies: lowest risk tolerance; heavily regulated; must maintain solvency',
          'Sovereign wealth funds: government-owned; typically long time horizon; often used for intergenerational wealth transfer'
        ],
        difficulty: 'easy',
        tags: ['investor types', 'risk tolerance', 'time horizon', 'liquidity']
      },
      {
        id: 'pooled-vehicles',
        topicId: 'pm-overview',
        title: 'Pooled Investment Vehicles',
        firstPrinciple: 'Pooling assets from multiple investors achieves economies of scale and diversification that individual investors could not access on their own. A small investor cannot afford a 500-stock portfolio, but by pooling with others they access instant diversification. The pooling structure also enables professional management, which small investors may lack the expertise to provide themselves.',
        formula: 'NAV = (Total Assets - Total Liabilities) / Shares Outstanding',
        examAngle: 'Know the differences between open-end vs. closed-end funds, ETFs vs. mutual funds, and the key features of hedge funds. NAV calculation is testable.',
        keyPoints: [
          'Open-end mutual funds: priced at NAV at end of day; redeemable at NAV; no secondary market needed',
          'Closed-end funds: fixed shares, trade on exchange at premium or discount to NAV',
          'ETFs: like closed-end but use creation/redemption mechanism to keep price near NAV; typically lower costs',
          'Hedge funds: limited partnerships, accredited investors only, use leverage/short selling, 2-and-20 fee structure',
          'Fund of funds: invest in multiple hedge funds; adds diversification but adds a second layer of fees'
        ],
        difficulty: 'medium',
        tags: ['mutual funds', 'ETF', 'hedge funds', 'NAV', 'closed-end funds']
      }
    ]
  },
  {
    id: 'pm-risk-return-1',
    title: 'Portfolio Risk and Return: Part I',
    description: 'Covers return measurement, risk measures, diversification, and the efficient frontier. Establishes the mathematical foundation for understanding how portfolios behave differently from individual securities.',
    examWeight: '5-8%',
    concepts: [
      {
        id: 'holding-period-return',
        topicId: 'pm-risk-return-1',
        title: 'Holding Period Return',
        firstPrinciple: 'Investors earn returns from two sources: price appreciation (capital gains) and cash distributions (dividends/coupons). Holding period return captures total wealth creation over a specific period. It is the fundamental building block for all return calculations and must be calculated before annualizing or comparing across investments.',
        formula: 'HPR = (P1 - P0 + D) / P0',
        examAngle: 'Straightforward calculation — always include dividends in numerator. Watch for questions asking about return before vs. after tax.',
        keyPoints: [
          'HPR = (End Price - Begin Price + Income) / Begin Price',
          'Can be greater than 100% for winning stocks; can be negative (but floored at -100% for long positions)',
          'Does not account for the time period — a 20% HPR over 1 year vs. 5 years means very different things',
          'Must convert to annualized return to compare investments with different holding periods',
          'Total return = price return + income return (dividends); both components matter'
        ],
        difficulty: 'easy',
        tags: ['returns', 'HPR', 'dividends', 'capital gains'],
        numericalExample: {
          problem: 'You buy a stock at $50.00. Over the year it pays a $2.00 dividend and the price rises to $54.00. What is the holding period return?',
          solution: 'HPR = (P1 - P0 + D) / P0\nP0 = $50.00, P1 = $54.00, D = $2.00\nHPR = ($54.00 - $50.00 + $2.00) / $50.00\nHPR = $6.00 / $50.00',
          answer: 'HPR = 0.12 = 12.0%  (price return of 8% + income return of 4%)'
        }
      },
      {
        id: 'arithmetic-vs-geometric-mean',
        topicId: 'pm-risk-return-1',
        title: 'Arithmetic vs. Geometric Mean Return',
        firstPrinciple: 'The arithmetic mean overstates realized portfolio growth because it ignores compounding — if a portfolio falls 50% then rises 100%, the arithmetic mean is 25% but actual gain is 0%. The geometric mean reflects the true compound growth rate of wealth. However, arithmetic mean is better for estimating expected future single-period returns because it is unbiased.',
        formula: 'Geometric Mean = [(1+R1)(1+R2)...(1+Rn)]^(1/n) - 1',
        examAngle: 'Exam tests which mean to use: geometric for past performance/wealth growth, arithmetic for expected future returns. Geometric is ALWAYS ≤ arithmetic.',
        keyPoints: [
          'Arithmetic mean = simple average of returns; appropriate for forecasting single-period expected return',
          'Geometric mean = compound annual growth rate (CAGR); appropriate for measuring past multi-period performance',
          'Geometric mean ≤ Arithmetic mean; the gap widens with higher volatility',
          'Formula: GM = [(1+R1)(1+R2)...(1+Rn)]^(1/n) - 1',
          'If returns are identical each period, arithmetic = geometric mean'
        ],
        difficulty: 'medium',
        tags: ['arithmetic mean', 'geometric mean', 'CAGR', 'returns'],
        numericalExample: {
          problem: 'A portfolio has annual returns of +20%, -10%, and +15% over three years. Calculate both the arithmetic mean and geometric mean return. Which should you use to describe the portfolio\'s actual growth, and which for forecasting next year\'s single-period return?',
          solution: 'Arithmetic Mean = (20% + (–10%) + 15%) / 3 = 25% / 3\nArithmetic Mean = 8.33%\n\nGeometric Mean = [(1.20)(0.90)(1.15)]^(1/3) − 1\n= [1.2420]^(1/3) − 1\n= 1.0751 − 1',
          answer: 'Geometric Mean ≈ 7.51%  (use for actual past wealth growth)\nArithmetic Mean = 8.33%  (use for forecasting expected single-period return)\nNote: Geometric (7.51%) < Arithmetic (8.33%) — always true when returns vary'
        }
      },
      {
        id: 'money-weighted-return',
        topicId: 'pm-risk-return-1',
        title: 'Money-Weighted Return (IRR)',
        firstPrinciple: 'When investors add or withdraw capital mid-period, the timing of those flows affects personal wealth differently. Money-weighted return (= IRR) captures this timing effect — if you invest more just before a downturn, your personal return is worse than the fund\'s time-weighted return. MWR reflects the actual investor experience; TWR reflects the portfolio manager\'s skill independent of client cash flows.',
        formula: 'Solve for r: PV(outflows) = PV(inflows), i.e., 0 = CF0 + CF1/(1+r) + CF2/(1+r)² + ... + (CFn+Vn)/(1+r)^n',
        examAngle: 'Exam tests which return measure is appropriate: TWR for evaluating manager skill (they don\'t control cash flows), MWR for evaluating investor outcomes.',
        keyPoints: [
          'Money-weighted return = Internal Rate of Return (IRR) on the portfolio cash flows',
          'MWR is affected by the size and timing of client contributions/withdrawals',
          'Time-weighted return eliminates cash flow timing effects; preferred for manager performance evaluation',
          'CFA Institute requires GIPS-compliant firms to use TWR for performance reporting',
          'If investor adds money before good returns, MWR > TWR; if before bad returns, MWR < TWR'
        ],
        difficulty: 'hard',
        tags: ['MWR', 'IRR', 'TWR', 'cash flows', 'performance measurement'],
        numericalExample: {
          problem: 'At t=0, you buy 1 share at $100. At t=1, you receive a $5 dividend AND buy 1 more share at $110. At t=2, you sell both shares at $120 each. What is the money-weighted return?',
          solution: 'Set up the IRR equation (outflows negative, inflows positive):\nt=0: −$100  (buy 1 share)\nt=1: −$110 + $5 = −$105  (buy 2nd share, receive dividend on 1st share)\nt=2: +$240  (sell 2 shares × $120)\n\nSolve: −100 − 105/(1+r) + 240/(1+r)² = 0\nMultiply through by (1+r)²:\n−100(1+r)² − 105(1+r) + 240 = 0\nLet x = (1+r): −100x² − 105x + 240 = 0  →  100x² + 105x − 240 = 0\nUsing quadratic formula: x = [−105 + √(105² + 4×100×240)] / (2×100)\nx = [−105 + √(11025 + 96000)] / 200 = [−105 + √107025] / 200\n√107025 ≈ 327.1\nx = (−105 + 327.1) / 200 = 222.1 / 200 ≈ 1.1105',
          answer: 'MWR ≈ 11.1% per period\nNote: This is the IRR — solve numerically or via trial-and-error on the exam. The key is setting up cash flows correctly.'
        }
      },
      {
        id: 'variance-std-dev',
        topicId: 'pm-risk-return-1',
        title: 'Variance and Standard Deviation',
        firstPrinciple: 'Risk in finance is measured as the dispersion of outcomes around the expected return — the more dispersed the outcomes, the less certain the investor about what they will actually receive. Variance quantifies this dispersion mathematically. Standard deviation (the square root) is preferred because it is in the same units as returns, making interpretation intuitive.',
        formula: 'σ² = Σ[P(i) × (Ri - E(R))²] for discrete; σ² = Σ(Ri - R̄)²/(n-1) for historical sample',
        examAngle: 'Know when to divide by n (population) vs. n-1 (sample). CFA typically uses n-1 for historical data. Standard deviation assumes normal distribution.',
        keyPoints: [
          'Variance = weighted average of squared deviations from expected return',
          'Standard deviation (σ) = √variance; in same units as returns, easier to interpret',
          'For a normal distribution: 68% of returns within ±1σ, 95% within ±2σ, 99% within ±3σ',
          'Population variance divides by n; sample variance divides by (n-1) to correct for bias',
          'Limitation: treats upside and downside deviations equally — doesn\'t distinguish "good" volatility from "bad"'
        ],
        difficulty: 'medium',
        tags: ['variance', 'standard deviation', 'risk', 'normal distribution'],
        numericalExample: {
          problem: 'An asset has three possible scenarios: Boom (prob = 30%, return = +25%), Normal (prob = 50%, return = +8%), Recession (prob = 20%, return = −15%). Compute the expected return, variance, and standard deviation.',
          solution: 'Step 1 — Expected Return:\nE(R) = 0.30×25% + 0.50×8% + 0.20×(−15%)\n     = 7.5% + 4.0% − 3.0% = 8.5%\n\nStep 2 — Variance:\nσ² = 0.30×(25−8.5)² + 0.50×(8−8.5)² + 0.20×(−15−8.5)²\n   = 0.30×(16.5)² + 0.50×(−0.5)² + 0.20×(−23.5)²\n   = 0.30×272.25 + 0.50×0.25 + 0.20×552.25\n   = 81.675 + 0.125 + 110.45\n   = 192.25 (%²)\n\nStep 3 — Standard Deviation:\nσ = √192.25',
          answer: 'E(R) = 8.5%,  σ² = 192.25 (%²),  σ = 13.87%\nInterpretation: roughly 68% of outcomes fall within 8.5% ± 13.87% (i.e., −5.37% to 22.37%)'
        }
      },
      {
        id: 'coefficient-variation',
        topicId: 'pm-risk-return-1',
        title: 'Coefficient of Variation',
        firstPrinciple: 'Standard deviation alone cannot compare risk across investments with different return levels — a bond with 2% return and 1% std dev sounds "safer" than a stock with 15% return and 5% std dev, but the bond bears 50% risk per unit of return vs. 33% for the stock. The coefficient of variation normalizes risk per unit of return, enabling apples-to-apples comparison.',
        formula: 'CV = σ / E(R)',
        examAngle: 'CV is risk per unit of expected return — lower CV is better (less risk per unit of reward). Exam tests ability to rank investments by CV when comparing different return levels.',
        keyPoints: [
          'CV = Standard Deviation / Expected Return',
          'Lower CV = better risk-return tradeoff (less risk per unit of return earned)',
          'Useful when comparing investments with different return levels',
          'Does not work well when expected return is negative or zero (CV becomes meaningless)',
          'Complement to Sharpe ratio: both normalize risk by return, but Sharpe uses excess return'
        ],
        difficulty: 'easy',
        tags: ['CV', 'coefficient of variation', 'risk-return', 'comparison'],
        numericalExample: {
          problem: 'Asset A has E(R) = 12%, σ = 18%. Asset B has E(R) = 8%, σ = 10%. Which asset has a better risk-return tradeoff based on CV?',
          solution: 'CV(A) = σA / E(RA) = 18% / 12% = 1.50\nCV(B) = σB / E(RB) = 10% / 8% = 1.25\n\nInterpretation:\nAsset A: 1.50 units of risk per unit of return\nAsset B: 1.25 units of risk per unit of return',
          answer: 'Asset B has a better risk-return tradeoff (CV = 1.25 < 1.50)\nDespite lower absolute return, Asset B delivers more return per unit of risk taken'
        }
      },
      {
        id: 'sharpe-ratio',
        topicId: 'pm-risk-return-1',
        title: 'Sharpe Ratio',
        firstPrinciple: 'The risk-free rate is the return available with zero risk — any risky investment must earn more than this to justify the risk taken. The Sharpe ratio measures how much excess return (above risk-free) an investor earns per unit of total risk (σ). It answers the key question: "Am I being adequately compensated for the risk I\'m taking?"',
        formula: 'Sharpe Ratio = (Rp - Rf) / σp',
        examAngle: 'Higher Sharpe = better risk-adjusted performance. Exam tests ability to rank portfolios by Sharpe ratio and identify its limitation (penalizes upside volatility equally with downside).',
        keyPoints: [
          'Sharpe = (Portfolio Return - Risk-Free Rate) / Portfolio Standard Deviation',
          'Higher Sharpe ratio = more return per unit of risk = better risk-adjusted performance',
          'Uses total risk (σ), appropriate when portfolio is the investor\'s only investment',
          'Limitation: uses standard deviation, which penalizes upside volatility equally with downside',
          'Negative Sharpe ratio means portfolio underperformed the risk-free rate — risky and unrewarding'
        ],
        difficulty: 'medium',
        tags: ['Sharpe ratio', 'risk-adjusted return', 'risk-free rate', 'performance'],
        numericalExample: {
          problem: 'Portfolio X: return = 14%, σ = 20%. Portfolio Y: return = 11%, σ = 12%. Risk-free rate = 4%. Which portfolio has better risk-adjusted performance?',
          solution: 'Sharpe(X) = (Rp − Rf) / σp = (14% − 4%) / 20% = 10% / 20% = 0.50\nSharpe(Y) = (Rp − Rf) / σp = (11% − 4%) / 12% = 7% / 12% = 0.583',
          answer: 'Portfolio Y has the higher Sharpe ratio (0.583 > 0.50)\nDespite lower raw return, Y earns more excess return per unit of risk — it is the better risk-adjusted choice'
        }
      },
      {
        id: 'covariance-correlation',
        topicId: 'pm-risk-return-1',
        title: 'Covariance and Correlation',
        firstPrinciple: 'Diversification works because asset returns do not move in perfect lockstep — when one zigs, another often zags. Covariance measures the direction and magnitude of this co-movement in raw units; correlation normalizes it to a -1 to +1 scale. This co-movement is the mathematical reason why combining assets reduces portfolio risk below the weighted average of individual risks.',
        formula: 'Correlation ρ(A,B) = Cov(A,B) / (σA × σB); range: -1 ≤ ρ ≤ +1',
        examAngle: 'Know that diversification benefits increase as correlation decreases. Perfect positive correlation (+1) = no diversification benefit. Perfect negative correlation (-1) = maximum diversification.',
        keyPoints: [
          'Covariance = E[(RA - E(RA))(RB - E(RB))]; positive = move together, negative = move opposite',
          'Correlation = Covariance / (σA × σB); standardized to [-1, +1]',
          'ρ = +1: perfect positive correlation, no diversification benefit',
          'ρ = -1: perfect negative correlation, can eliminate all portfolio risk',
          'ρ = 0: uncorrelated assets, substantial but not complete diversification benefit'
        ],
        difficulty: 'medium',
        tags: ['covariance', 'correlation', 'diversification', 'co-movement'],
        numericalExample: {
          problem: 'In Scenario 1 (prob = 60%): Asset A returns +10%, Asset B returns +6%. In Scenario 2 (prob = 40%): Asset A returns −5%, Asset B returns +4%. E(RA) = 4%, E(RB) = 5.2%. Compute Cov(A,B) and ρ(A,B). Assume σA = 6.0% and σB = 0.98%.',
          solution: 'Cov(A,B) = Σ P(s) × [RA(s) − E(RA)] × [RB(s) − E(RB)]\n\nScenario 1: 0.60 × (10%−4%) × (6%−5.2%) = 0.60 × 6% × 0.8% = 0.60 × 0.048 = 0.0288%²\nScenario 2: 0.40 × (−5%−4%) × (4%−5.2%) = 0.40 × (−9%) × (−1.2%) = 0.40 × 0.108 = 0.0432%²\n\nCov(A,B) = 0.0288 + 0.0432 = 0.072 (%²)\n\nρ(A,B) = Cov(A,B) / (σA × σB) = 0.072 / (6.0% × 0.98%)',
          answer: 'Cov(A,B) = 0.072 (%²),  ρ(A,B) ≈ +0.012 (near zero)\nAssets are nearly uncorrelated — combining them provides substantial diversification benefit'
        }
      },
      {
        id: 'two-asset-portfolio',
        topicId: 'pm-risk-return-1',
        title: 'Two-Asset Portfolio Risk and Return',
        firstPrinciple: 'When you combine two assets, the portfolio expected return is simply the weighted average of individual returns (linearity). But portfolio risk is NOT a simple weighted average — it is reduced by the correlation term, which captures diversification benefits. This asymmetry (linear returns, sub-linear risk) is the mathematical foundation of diversification: you get the average return but less than average risk.',
        formula: 'E(Rp) = w1×R1 + w2×R2\nσp² = w1²σ1² + w2²σ2² + 2w1w2Cov(1,2)',
        examAngle: 'Exam frequently tests the portfolio variance formula — know that lower correlation reduces portfolio variance. If ρ = -1, can achieve zero variance with the right weights.',
        keyPoints: [
          'Portfolio return = weighted average of individual returns (simple and linear)',
          'Portfolio variance = w1²σ1² + w2²σ2² + 2w1w2ρ12σ1σ2',
          'Diversification benefit = reduction in risk below weighted average of individual SDs',
          'When ρ < 1, portfolio σ < weighted average of individual σs',
          'When ρ = 1 (no diversification): portfolio σ = weighted average of individual σs exactly'
        ],
        difficulty: 'hard',
        tags: ['two-asset portfolio', 'portfolio variance', 'diversification', 'correlation'],
        numericalExample: {
          problem: 'Asset 1: E(R1) = 10%, σ1 = 15%. Asset 2: E(R2) = 6%, σ2 = 8%. Portfolio weights: w1 = 60%, w2 = 40%. Correlation ρ12 = 0.30. Compute portfolio expected return and standard deviation.',
          solution: 'Step 1 — Portfolio Expected Return:\nE(Rp) = w1×R1 + w2×R2 = 0.60×10% + 0.40×6% = 6.0% + 2.4% = 8.4%\n\nStep 2 — Portfolio Variance:\nσp² = w1²σ1² + w2²σ2² + 2×w1×w2×ρ12×σ1×σ2\n    = (0.60)²×(0.15)² + (0.40)²×(0.08)² + 2×0.60×0.40×0.30×0.15×0.08\n    = 0.36×0.0225 + 0.16×0.0064 + 2×0.60×0.40×0.30×0.0120\n    = 0.00810 + 0.001024 + 0.001728\n    = 0.010852\n\nStep 3 — Portfolio Std Dev:\nσp = √0.010852 = 0.1042 = 10.42%',
          answer: 'E(Rp) = 8.4%,  σp = 10.42%\nDiversification benefit: weighted avg σ = 0.60×15% + 0.40×8% = 12.2%, but portfolio σ = 10.42% — risk is 1.78% lower thanks to ρ < 1'
        }
      },
      {
        id: 'efficient-frontier',
        topicId: 'pm-risk-return-1',
        title: 'The Efficient Frontier',
        firstPrinciple: 'For any given level of risk, there exists a portfolio that maximizes expected return — and for any given return, a portfolio that minimizes risk. The set of all such optimal portfolios traces out the efficient frontier. Investors should only hold portfolios on this frontier because any portfolio below it is dominated (higher risk for same return or lower return for same risk), representing a missed opportunity.',
        examAngle: 'Exam tests the shape (curved, concave), why it\'s curved (diversification effect), and why rational investors only hold portfolios on the upper portion (minimum variance portfolio and above).',
        keyPoints: [
          'Efficient frontier = set of portfolios with highest return for each risk level (or minimum risk for each return)',
          'Shape: curved/concave due to diversification; more curved with lower asset correlations',
          'Minimum Variance Portfolio (MVP): leftmost point on frontier; lowest risk achievable',
          'Rational investors choose only from the upper half of the frontier (above MVP)',
          'Adding assets shifts the frontier leftward (better risk-return) if the new asset has low correlation'
        ],
        difficulty: 'medium',
        tags: ['efficient frontier', 'Markowitz', 'portfolio optimization', 'risk-return']
      },
      {
        id: 'minimum-variance-portfolio',
        topicId: 'pm-risk-return-1',
        title: 'Minimum Variance Portfolio',
        firstPrinciple: 'The minimum variance portfolio (MVP) is the portfolio with the lowest achievable risk — the leftmost point on the efficient frontier. It exists because as you shift weight from a high-variance to a lower-variance asset, risk first decreases then increases again (due to correlation effects). The MVP represents the point of maximum diversification benefit.',
        formula: 'w1(MVP) = (σ2² - Cov(1,2)) / (σ1² + σ2² - 2×Cov(1,2))',
        examAngle: 'Know the MVP formula for a two-asset case. The exam may ask you to calculate the MVP weight or identify that an investor seeking to minimize risk should hold the MVP.',
        keyPoints: [
          'MVP is the leftmost point on the efficient frontier — minimum achievable portfolio variance',
          'For two assets: w1 = (σ2² - Cov12) / (σ1² + σ2² - 2×Cov12)',
          'If ρ = -1, MVP can achieve zero variance with w1 = σ2/(σ1+σ2)',
          'Portfolios below the MVP on the frontier are inefficient (dominated by MVP and above)',
          'MVP is relevant for extreme risk-averse investors; most investors choose points above MVP'
        ],
        difficulty: 'hard',
        tags: ['MVP', 'minimum variance', 'efficient frontier', 'optimization'],
        numericalExample: {
          problem: 'Asset A: σA = 20%. Asset B: σB = 12%. Covariance Cov(A,B) = 0.0096 (i.e., 0.96%²). Find the weight in Asset A that minimizes portfolio variance.',
          solution: 'w_A(MVP) = (σB² − Cov(A,B)) / (σA² + σB² − 2×Cov(A,B))\n\nσA² = (0.20)² = 0.0400\nσB² = (0.12)² = 0.0144\nCov(A,B) = 0.0096\n\nNumerator:   σB² − Cov = 0.0144 − 0.0096 = 0.0048\nDenominator: σA² + σB² − 2×Cov = 0.0400 + 0.0144 − 2×0.0096\n           = 0.0544 − 0.0192 = 0.0352\n\nw_A = 0.0048 / 0.0352',
          answer: 'w_A = 0.1364 ≈ 13.6%  →  w_B = 86.4%\nThe portfolio minimizing risk holds only 13.6% in the higher-variance Asset A'
        }
      }
    ]
  },
  {
    id: 'pm-risk-return-2',
    title: 'Portfolio Risk and Return: Part II',
    description: 'Builds on Part I with the Capital Asset Pricing Model (CAPM), systematic vs. unsystematic risk, and the Capital Market Line. The theoretical foundation for pricing risky assets.',
    examWeight: '5-8%',
    concepts: [
      {
        id: 'capital-allocation-line',
        topicId: 'pm-risk-return-2',
        title: 'Capital Allocation Line (CAL)',
        firstPrinciple: 'When a risk-free asset exists, an investor can combine it with any risky portfolio, creating a linear risk-return tradeoff. Lending (investing in risk-free) or borrowing (leveraging) at the risk-free rate shifts the investor along this line. The slope of this line is the Sharpe ratio — every point on the CAL has the same reward-to-risk tradeoff as the risky portfolio chosen.',
        formula: 'E(Rp) = Rf + [(E(Ri) - Rf) / σi] × σp',
        examAngle: 'The CAL is specific to any risky portfolio. The CML is the special case when the risky portfolio is the market portfolio. Know what the slope represents (Sharpe ratio).',
        keyPoints: [
          'CAL = line from risk-free rate through a chosen risky portfolio, extended via borrowing',
          'Slope of CAL = Sharpe ratio of the risky portfolio = (E(Ri) - Rf) / σi',
          'Points to the left of risky portfolio: lending at Rf (< 100% in risky asset)',
          'Points to the right of risky portfolio: borrowing at Rf (> 100% in risky asset, leveraged)',
          'Steeper CAL = better risk-return tradeoff; optimal risky portfolio has steepest possible CAL'
        ],
        difficulty: 'medium',
        tags: ['CAL', 'capital allocation line', 'risk-free rate', 'Sharpe ratio', 'leverage'],
        numericalExample: {
          problem: 'Risk-free rate Rf = 3%. Risky portfolio P has E(Rp) = 11%, σp = 16%. An investor constructs a combined portfolio with σ = 10%. What is the expected return of the combined portfolio? What fraction is invested in the risky asset?',
          solution: 'CAL equation: E(R) = Rf + [(E(Rp) − Rf) / σp] × σ_combined\nSlope (Sharpe) = (11% − 3%) / 16% = 8% / 16% = 0.50\n\nE(R) = 3% + 0.50 × 10% = 3% + 5% = 8%\n\nWeight in risky asset: σ_combined = w × σp\n10% = w × 16%  →  w = 10%/16%',
          answer: 'E(R_combined) = 8.0%,  w_risky = 62.5%,  w_risk-free = 37.5%\nThe investor lends 37.5% at the risk-free rate and invests 62.5% in the risky portfolio'
        }
      },
      {
        id: 'capital-market-line',
        topicId: 'pm-risk-return-2',
        title: 'Capital Market Line (CML)',
        firstPrinciple: 'In a world where all investors have homogeneous expectations, they will all hold the same risky portfolio — the market portfolio (all investable assets weighted by market cap). The CML is the optimal CAL in this world, running from the risk-free rate through the market portfolio. Since it is the steepest possible CAL, no portfolio above the CML is achievable, and no rational investor should hold a portfolio below it.',
        formula: 'E(Rp) = Rf + [(E(Rm) - Rf) / σm] × σp',
        examAngle: 'CML applies only to efficient (well-diversified) portfolios, not individual securities. For individual securities, use the SML. This distinction is heavily tested.',
        keyPoints: [
          'CML: the specific CAL using the market portfolio as the risky asset',
          'Assumes: all investors have same expectations, can borrow/lend at Rf, no taxes/transactions costs',
          'CML applies to efficient portfolios only — individual stocks do NOT lie on the CML',
          'Every portfolio on CML has zero unsystematic risk (fully diversified)',
          'Slope of CML = Sharpe ratio of market portfolio = (E(Rm) - Rf) / σm'
        ],
        difficulty: 'medium',
        tags: ['CML', 'capital market line', 'market portfolio', 'efficient frontier']
      },
      {
        id: 'systematic-unsystematic-risk',
        topicId: 'pm-risk-return-2',
        title: 'Systematic vs. Unsystematic Risk',
        firstPrinciple: 'Not all risk is the same. Unsystematic (company-specific) risk can be eliminated for free through diversification — why should the market reward you for bearing risk you did not have to take? The market only compensates investors for systematic (market-wide) risk, which cannot be diversified away. This insight is fundamental: only systematic risk is priced into expected returns.',
        formula: 'Total Risk = Systematic Risk + Unsystematic Risk\nσ²total = β²σ²market + σ²error',
        examAngle: 'Exam tests that only systematic risk earns a return premium. Diversification eliminates unsystematic risk. About 20-30 randomly chosen stocks eliminates most unsystematic risk.',
        keyPoints: [
          'Systematic risk: market-wide risk affecting all assets (recessions, interest rates, inflation) — cannot diversify away',
          'Unsystematic risk: company/industry-specific risk (management changes, product recalls) — can be eliminated by diversification',
          'Market compensates only for systematic risk because unsystematic risk is diversifiable (avoidable)',
          'Measured by beta (β): systematic risk relative to the market; market β = 1 by definition',
          'With ~20-30 stocks, ~90% of unsystematic risk is eliminated; most remaining risk is systematic'
        ],
        difficulty: 'medium',
        tags: ['systematic risk', 'unsystematic risk', 'diversification', 'beta', 'market risk']
      },
      {
        id: 'capm',
        topicId: 'pm-risk-return-2',
        title: 'Capital Asset Pricing Model (CAPM)',
        firstPrinciple: 'CAPM answers the fundamental pricing question: given that only systematic risk is rewarded, what return should any risky asset earn? The answer is: the risk-free rate (compensation for time value) plus a risk premium proportional to the asset\'s beta (compensation for systematic risk taken). This linear relationship between expected return and beta is the Security Market Line.',
        formula: 'E(Ri) = Rf + βi × [E(Rm) - Rf]',
        examAngle: 'CAPM is one of the most tested formulas. Know it cold. Also know that: if a stock plots above SML → undervalued (buy), below SML → overvalued (sell).',
        keyPoints: [
          'E(Ri) = Rf + βi × (E(Rm) - Rf); market risk premium = E(Rm) - Rf',
          'Beta of market = 1; β > 1 means more volatile than market; β < 1 means less volatile',
          'Riskier assets (higher β) have higher expected returns under CAPM',
          'If actual return > CAPM expected return → asset is undervalued (above SML)',
          'If actual return < CAPM expected return → asset is overvalued (below SML)'
        ],
        difficulty: 'medium',
        tags: ['CAPM', 'beta', 'expected return', 'market risk premium', 'SML'],
        numericalExample: {
          problem: 'Risk-free rate Rf = 3%, expected market return E(Rm) = 10%, stock beta β = 1.2. What is the required return on this stock according to CAPM?',
          solution: 'E(Ri) = Rf + βi × [E(Rm) − Rf]\nMarket risk premium = E(Rm) − Rf = 10% − 3% = 7%\nE(Ri) = 3% + 1.2 × 7%\nE(Ri) = 3% + 8.4%',
          answer: 'Required return = 11.4%\nIf an analyst forecasts the stock will return 13%, it plots above the SML → stock is undervalued → buy signal\nIf forecast is 10%, stock plots below the SML → overvalued → sell signal'
        }
      },
      {
        id: 'beta',
        topicId: 'pm-risk-return-2',
        title: 'Beta: Measuring Systematic Risk',
        firstPrinciple: 'Beta measures how sensitive an asset\'s returns are to market-wide movements — the "leverage" to market risk. A beta of 1.5 means if the market rises 10%, the asset is expected to rise 15%. Beta captures only the systematic component of risk because it measures co-movement with the market, not total volatility. This makes beta the appropriate risk measure when holding a diversified portfolio.',
        formula: 'β = Cov(Ri, Rm) / Var(Rm) = ρ(i,m) × σi / σm',
        examAngle: 'Beta calculation from covariance/variance is testable. Also know portfolio beta = weighted average of individual betas (unlike portfolio σ, which is not a simple weighted average).',
        keyPoints: [
          'β = Cov(Ri, Rm) / σ²m = ρ(i,m) × (σi / σm)',
          'Market beta = 1; defensive stocks β < 1 (utilities, consumer staples); aggressive stocks β > 1 (tech, financials)',
          'Portfolio beta = weighted average of individual betas: βp = Σ(wi × βi)',
          'Beta of risk-free asset = 0 (no co-movement with market)',
          'Negative beta assets (e.g., some gold positions) reduce portfolio risk as natural hedges'
        ],
        difficulty: 'medium',
        tags: ['beta', 'systematic risk', 'covariance', 'market sensitivity'],
        numericalExample: {
          problem: 'A stock has Cov(stock, market) = 0.0180 and the market variance σ²m = 0.0144. Compute the stock\'s beta. Also, if ρ(i,m) = 0.75, σi = 20%, σm = 12%, verify using the alternative formula.',
          solution: 'Method 1 — Covariance/Variance:\nβ = Cov(Ri, Rm) / σ²m = 0.0180 / 0.0144 = 1.25\n\nMethod 2 — Correlation formula:\nβ = ρ(i,m) × σi / σm = 0.75 × 20% / 12% = 0.75 × 1.6667',
          answer: 'β = 1.25  (both methods agree)\nInterpretation: if the market rises 10%, the stock is expected to rise 12.5%\nSince β > 1, this is an aggressive (above-market-risk) stock'
        }
      },
      {
        id: 'sml-vs-cml',
        topicId: 'pm-risk-return-2',
        title: 'Security Market Line vs. Capital Market Line',
        firstPrinciple: 'The CML and SML are both lines from the risk-free rate but they use different risk measures for different purposes. CML uses total risk (σ) and applies to efficient portfolios only. SML uses systematic risk (β) and applies to any asset or portfolio, efficient or not. The SML is more general and powerful — it prices any security based on its contribution to systematic risk.',
        formula: 'CML: E(Rp) = Rf + [(E(Rm)-Rf)/σm] × σp\nSML: E(Ri) = Rf + βi × (E(Rm)-Rf)',
        examAngle: 'This distinction is tested frequently. Key rule: use CML for efficient/diversified portfolios (x-axis = total risk σ); use SML for any individual security (x-axis = beta β).',
        keyPoints: [
          'CML: x-axis = total risk (σ); applies ONLY to efficient (fully diversified) portfolios',
          'SML: x-axis = systematic risk (β); applies to ANY asset (individual stocks, portfolios, inefficient)',
          'All fairly priced assets/portfolios lie on the SML; only efficient portfolios lie on the CML',
          'An individual stock lies on the SML but NOT on the CML (has unsystematic risk above CML)',
          'Both lines originate at the risk-free rate; SML is the CAPM formula plotted as a line'
        ],
        difficulty: 'hard',
        tags: ['SML', 'CML', 'CAPM', 'beta', 'total risk'],
        numericalExample: {
          problem: 'Rf = 3%, E(Rm) = 10%, σm = 14%. Stock Z has β = 0.8, σZ = 18%, and an analyst forecasts a return of 9.5%. Is Stock Z overvalued or undervalued? Does Stock Z lie on the CML?',
          solution: 'Step 1 — CAPM required return (SML):\nE(RZ) = Rf + β × (E(Rm) − Rf) = 3% + 0.8 × (10% − 3%) = 3% + 5.6% = 8.6%\n\nStep 2 — Compare with analyst forecast:\nAnalyst forecast 9.5% > CAPM required 8.6% → Stock Z plots above SML → undervalued → Buy\nJensen\'s Alpha = 9.5% − 8.6% = +0.9%\n\nStep 3 — Does Stock Z lie on the CML?\nCML return at σ = 18%: E(R) = 3% + [(10%−3%)/14%] × 18% = 3% + 9.0% = 12.0%\nStock Z expected only 9.5% at σ = 18% → plots BELOW the CML → not an efficient portfolio',
          answer: 'Stock Z is undervalued vs. SML (positive alpha = +0.9%) → Buy signal\nBut Stock Z does NOT lie on the CML — it has unsystematic risk that efficient portfolios have eliminated'
        }
      },
      {
        id: 'capm-applications',
        topicId: 'pm-risk-return-2',
        title: 'CAPM Applications: Cost of Equity and Valuation',
        firstPrinciple: 'CAPM is not just theoretical — it has direct practical applications. For corporations, the CAPM-derived required return IS the cost of equity capital, which anchors DCF valuations and capital budgeting decisions. For investors, comparing CAPM-implied expected returns with actual/estimated returns identifies mispriced securities. Alpha (the gap between actual and CAPM-expected return) quantifies manager skill or mispricing.',
        formula: 'Alpha (α) = Actual Return - CAPM Expected Return\nCost of Equity = Rf + β × (Rm - Rf)',
        examAngle: 'Exam tests calculating required return via CAPM and using it as a discount rate. Also tests: if alpha > 0, stock is undervalued and plots above SML.',
        keyPoints: [
          'Jensen\'s Alpha = Actual Return - [Rf + β(Rm - Rf)]; positive alpha = outperformance',
          'Alpha > 0: asset above SML, undervalued — buy signal',
          'Alpha < 0: asset below SML, overvalued — sell signal',
          'CAPM cost of equity = Rf + β(ERP); used as discount rate in DDM and FCFE models',
          'Limitations of CAPM: assumes single factor (market risk), static betas, perfect markets'
        ],
        difficulty: 'hard',
        tags: ['alpha', 'CAPM applications', 'cost of equity', 'valuation', 'Jensen\'s alpha']
      }
    ]
  },
  {
    id: 'pm-planning-construction',
    title: 'Basics of Portfolio Planning and Construction',
    description: 'Covers the Investment Policy Statement, objectives, constraints, strategic asset allocation, and ESG considerations. The practical framework for building portfolios tailored to specific investors.',
    examWeight: '5-8%',
    concepts: [
      {
        id: 'investment-policy-statement',
        topicId: 'pm-planning-construction',
        title: 'Investment Policy Statement (IPS)',
        firstPrinciple: 'The IPS is the governance document that defines the rules of the investment game before any securities are purchased. Without an IPS, investment decisions become ad hoc, emotional, and inconsistent. The IPS forces clarity on objectives and constraints upfront, prevents panic selling in downturns (the policy was set when thinking clearly), and provides the benchmark against which the manager can be held accountable.',
        examAngle: 'Know the mandatory components of an IPS: client description, purpose, objectives (risk and return), and constraints (LLTTU). The exam may ask which component is missing from a given IPS.',
        keyPoints: [
          'IPS mandatory components: client description, purpose statement, duties/responsibilities, objectives, constraints',
          'Objectives section has two parts: risk objective and return objective — both must be stated',
          'Risk objective should be stated first — return objective must be consistent with risk tolerance',
          'IPS is a living document — should be reviewed and updated when investor circumstances change significantly',
          'GIPS-compliant managers must have an IPS for each client account'
        ],
        difficulty: 'easy',
        tags: ['IPS', 'investment policy statement', 'governance', 'objectives', 'constraints']
      },
      {
        id: 'risk-objectives',
        topicId: 'pm-planning-construction',
        title: 'Risk Objectives',
        firstPrinciple: 'Risk objectives define how much uncertainty of outcomes an investor can and will accept. "Ability to bear risk" is objective (financial capacity to absorb losses without jeopardizing goals) while "willingness to bear risk" is subjective (psychological comfort). When these conflict, the more conservative view should govern — you cannot force an investor to emotionally handle more risk than they are willing to accept, and you should not allow behavioral mistakes to override true financial capacity.',
        examAngle: 'Exam scenario: if ability is high but willingness is low → use low risk objective. If ability is low but willingness is high → use low risk objective. The more conservative ALWAYS governs.',
        keyPoints: [
          'Ability to bear risk: objective financial factors — time horizon, income stability, liquidity needs, wealth level',
          'Willingness to bear risk: subjective psychological factor — comfort with volatility, past investment experience',
          'When ability and willingness conflict: use the LOWER (more conservative) of the two',
          'Risk objectives must be specific and measurable (e.g., "no more than 10% annual loss with 95% probability")',
          'Absolute risk objective: target max dollar loss; Relative risk objective: target vs. benchmark'
        ],
        difficulty: 'medium',
        tags: ['risk objectives', 'ability to bear risk', 'willingness to bear risk', 'IPS']
      },
      {
        id: 'return-objectives',
        topicId: 'pm-planning-construction',
        title: 'Return Objectives',
        firstPrinciple: 'Return objectives must be grounded in what is both needed (to meet goals) and achievable (given risk tolerance and market expectations). The mistake of setting aspirational return targets without linking them to realistic risk assumptions is common — an investor who needs 12% annual returns but will panic at a 10% drawdown has an internal contradiction that must be resolved. Return needs must be reconciled with risk tolerance.',
        formula: 'Required Return = (Target Wealth / Current Wealth)^(1/n) - 1',
        examAngle: 'Exam tests identifying unrealistic return objectives (too high given risk tolerance) and correctly stating return objectives (after-tax, after-inflation, in nominal or real terms).',
        keyPoints: [
          'Return objectives should be stated in nominal or real terms, before or after tax — be consistent',
          'Required return = growth rate needed to reach target wealth given current assets and time horizon',
          'Spending needs + inflation + fees = minimum return needed to maintain real purchasing power',
          'Return objective must be achievable given the investor\'s risk tolerance — the two must be consistent',
          'For endowments: 5% spending + inflation + fees ≈ typical long-term return target'
        ],
        difficulty: 'medium',
        tags: ['return objectives', 'required return', 'inflation', 'real return', 'nominal return']
      },
      {
        id: 'constraints-llttu',
        topicId: 'pm-planning-construction',
        title: 'Investment Constraints (LLTTU)',
        firstPrinciple: 'Every investor faces real-world limitations that constrain which portfolios are actually feasible — regardless of what the efficient frontier suggests is theoretically optimal. Constraints translate from the investor\'s life situation into portfolio boundaries. Ignoring constraints leads to portfolios that are mathematically optimal but practically unworkable (e.g., suggesting an 80% equity portfolio to someone who needs to sell assets in 6 months).',
        examAngle: 'Memorize LLTTU: Liquidity, Legal/regulatory, Time horizon, Taxes, Unique circumstances. Exam presents a scenario and asks which constraints apply or which constraint the manager is violating.',
        keyPoints: [
          'L — Liquidity: need for cash in the short term reduces investment in illiquid/volatile assets',
          'L — Legal/Regulatory: pension funds, insurance companies, trusts face legal restrictions on investments',
          'T — Time Horizon: longer horizon → more risk tolerance; short horizon → need capital preservation',
          'T — Taxes: taxable investors prefer tax-efficient strategies (low turnover, tax-loss harvesting, muni bonds)',
          'U — Unique: personal preferences, ESG restrictions, employer stock concentration, socially responsible investing'
        ],
        difficulty: 'easy',
        tags: ['LLTTU', 'constraints', 'liquidity', 'taxes', 'time horizon', 'IPS']
      },
      {
        id: 'strategic-asset-allocation',
        topicId: 'pm-planning-construction',
        title: 'Strategic Asset Allocation',
        firstPrinciple: 'Strategic asset allocation (SAA) is the most important investment decision — setting the long-run target weights for major asset classes based on the investor\'s objectives and constraints. Research shows SAA explains roughly 90% of portfolio return variability over time. Tactical asset allocation (short-term deviations) and security selection matter far less than getting the SAA right.',
        examAngle: 'Know the difference: SAA = long-term policy targets; TAA = short-term tactical tilts around SAA. Rebalancing restores portfolio to SAA targets when drift occurs.',
        keyPoints: [
          'SAA defines long-run target weights (e.g., 60% equity, 35% bonds, 5% alternatives)',
          'Based on: capital market expectations (returns, risks, correlations) + investor objectives/constraints',
          'SAA explains ~90% of portfolio return variation; security selection explains ~10%',
          'Tactical Asset Allocation (TAA): short-term deviations from SAA based on market views',
          'Rebalancing: periodically restoring portfolio to SAA targets; manages drift from market movements'
        ],
        difficulty: 'medium',
        tags: ['SAA', 'asset allocation', 'TAA', 'rebalancing', 'target weights']
      },
      {
        id: 'esg-considerations',
        topicId: 'pm-planning-construction',
        title: 'ESG Considerations in Portfolio Management',
        firstPrinciple: 'ESG (Environmental, Social, Governance) integration reflects the recognition that non-financial factors affect long-run financial performance and that investors have preferences about how their capital is deployed. ESG is not purely altruistic — environmental risks (climate change), social risks (labor practices), and governance risks (management misconduct) can materially impact returns. ESG integration is increasingly part of standard fiduciary practice.',
        examAngle: 'Know the three approaches: negative screening (exclude), positive/best-in-class screening (include top ESG scores), and ESG integration (include ESG factors in financial analysis). Also know thematic investing and impact investing.',
        keyPoints: [
          'Negative screening: exclude industries/companies (tobacco, weapons, fossil fuels) — reduces investable universe',
          'Positive/best-in-class: include highest ESG-rated companies within each sector',
          'ESG integration: systematically include material ESG factors in traditional financial analysis',
          'Impact investing: target measurable social/environmental outcomes alongside financial returns',
          'Governance (G) factors (board quality, shareholder rights) are typically most directly linked to financial performance'
        ],
        difficulty: 'medium',
        tags: ['ESG', 'environmental', 'social', 'governance', 'screening', 'impact investing']
      }
    ]
  },
  {
    id: 'pm-behavioral-biases',
    title: 'Behavioral Biases of Individuals',
    description: 'Explores how psychological biases cause investors to make systematic errors in judgment and decision-making, leading to suboptimal portfolio outcomes. Based on behavioral finance research.',
    examWeight: '5-8%',
    concepts: [
      {
        id: 'cognitive-belief-perseverance',
        topicId: 'pm-behavioral-biases',
        title: 'Cognitive Biases: Belief Perseverance',
        firstPrinciple: 'Humans are wired to defend their existing beliefs — changing your mind requires cognitive effort and can feel psychologically threatening to one\'s self-image. Belief perseverance biases cause investors to seek confirming information, ignore contradicting evidence, and hold positions long after the fundamental case has changed. These biases are "cognitive" because they stem from faulty reasoning rather than pure emotion.',
        examAngle: 'Know the five belief perseverance biases: Conservatism, Confirmation, Representativeness, Illusion of Control, Hindsight. Exam presents a scenario and asks which bias applies.',
        keyPoints: [
          'Conservatism: under-updating beliefs when new contrary information arrives; sticking too long with original forecast',
          'Confirmation bias: seeking information that confirms existing view, ignoring contradictory evidence',
          'Representativeness: judging probability based on how similar something seems to a stereotype, ignoring base rates',
          'Illusion of control: believing you can influence outcomes that are random (e.g., luck in stock picking)',
          'Hindsight bias: believing past events were predictable ("I knew it all along"); leads to overconfidence'
        ],
        difficulty: 'medium',
        tags: ['cognitive bias', 'belief perseverance', 'conservatism', 'confirmation bias', 'representativeness']
      },
      {
        id: 'cognitive-processing-errors',
        topicId: 'pm-behavioral-biases',
        title: 'Cognitive Biases: Information Processing Errors',
        firstPrinciple: 'Even when starting from accurate beliefs, humans systematically misprocess information in predictable ways. These errors arise from mental shortcuts (heuristics) that evolved for efficiency but cause systematic mistakes in complex financial decisions. Unlike belief perseverance, information processing errors occur in how we handle data we receive, not in whether we accept it.',
        examAngle: 'Key biases: Anchoring, Mental Accounting, Framing, Availability. Exam scenario: investor refuses to sell below purchase price = anchoring. Treating lottery winnings differently from salary = mental accounting.',
        keyPoints: [
          'Anchoring: over-relying on first piece of information received; e.g., refusing to sell below original purchase price',
          'Mental accounting: treating money differently based on its source or intended use, violating fungibility of money',
          'Framing: making different decisions based on how information is presented (gain vs. loss framing)',
          'Availability: overweighting recent or memorable events; e.g., overestimating crash risk after recent crash',
          'Gambler\'s fallacy: believing past random events affect future random events (coins have no memory)'
        ],
        difficulty: 'medium',
        tags: ['cognitive bias', 'anchoring', 'mental accounting', 'framing', 'availability bias']
      },
      {
        id: 'emotional-biases',
        topicId: 'pm-behavioral-biases',
        title: 'Emotional Biases',
        firstPrinciple: 'Emotional biases stem from feelings and impulses rather than faulty reasoning — they are harder to correct because they persist even when investors intellectually recognize them. Loss aversion is the most powerful: the pain of a $1 loss is psychologically about twice as strong as the pleasure of a $1 gain. This asymmetry distorts rational risk-taking and causes investors to hold losers too long (to avoid locking in the loss) and sell winners too early.',
        examAngle: 'Know six emotional biases: Loss Aversion, Overconfidence, Self-Control, Status Quo, Endowment, Regret Aversion. Loss aversion is most important — drives the disposition effect.',
        keyPoints: [
          'Loss aversion: losses feel roughly 2× more painful than equal gains feel pleasant; leads to disposition effect',
          'Disposition effect: holding losing investments too long, selling winners too early (both driven by loss aversion)',
          'Overconfidence: overestimating skill/accuracy; leads to excessive trading, under-diversification',
          'Status quo bias: preference for current allocation over change; leads to portfolio inertia/under-rebalancing',
          'Regret aversion: avoiding decisions that might cause future regret; herding behavior, paralysis'
        ],
        difficulty: 'medium',
        tags: ['emotional bias', 'loss aversion', 'overconfidence', 'disposition effect', 'status quo bias']
      },
      {
        id: 'market-effects-biases',
        topicId: 'pm-behavioral-biases',
        title: 'Market-Level Effects of Behavioral Biases',
        firstPrinciple: 'When many investors share the same biases, their aggregate behavior creates observable market anomalies that cannot be explained by rational efficient market theory. Momentum exists because investors underreact to new information (conservatism bias) and then overreact when the trend becomes obvious (representativeness). Understanding which biases drive which anomalies explains why these patterns persist.',
        examAngle: 'Exam connects individual biases to market outcomes: momentum → underreaction/overreaction cycle; bubbles → herding + overconfidence; value premium → loss aversion + mental accounting.',
        keyPoints: [
          'Momentum effect: price trends persist short-term due to underreaction to news (conservatism/anchoring)',
          'Bubbles: overconfidence + representativeness + herding drive prices far above fundamental value',
          'Value premium: cheap stocks outperform partly because loss aversion makes investors shun recent losers',
          'Home bias: investors overweight domestic stocks due to familiarity bias and illusion of control',
          'Herding: investors copy others, especially under uncertainty; amplifies market trends and reversals'
        ],
        difficulty: 'hard',
        tags: ['market anomalies', 'momentum', 'bubbles', 'herding', 'behavioral finance', 'EMH']
      }
    ]
  },
  {
    id: 'pm-risk-management',
    title: 'Introduction to Risk Management',
    description: 'Covers enterprise risk management, types of financial and non-financial risks, quantitative risk measures (VaR, CVaR), and risk-adjusted performance metrics. The formal framework for identifying and managing portfolio risks.',
    examWeight: '5-8%',
    concepts: [
      {
        id: 'risk-governance',
        topicId: 'pm-risk-management',
        title: 'Risk Governance and the Risk Management Process',
        firstPrinciple: 'Risk cannot be eliminated — it can only be identified, measured, and consciously accepted or mitigated. Effective risk governance means making deliberate decisions about which risks to bear (for compensation) and which to reduce (not compensated). An enterprise risk management (ERM) framework ensures risk-taking is intentional, measured, and within approved limits rather than accidental and unlimited.',
        examAngle: 'Know the steps of the risk management process: identify risks → measure/quantify → manage (accept, avoid, transfer, reduce) → monitor. ERM integrates risk management across the entire firm.',
        keyPoints: [
          'Risk management process: identify → measure → decide to accept/avoid/transfer/reduce → monitor',
          'Enterprise Risk Management (ERM): firm-wide, integrated approach to managing all risk types together',
          'Risk budget: explicit limit on how much risk (in $ or σ terms) each portfolio/desk can take',
          'Risk governance should be separate from trading/portfolio management (independence principle)',
          'Risk tolerance ≠ risk capacity: tolerance is policy; capacity is the maximum loss the firm can survive'
        ],
        difficulty: 'medium',
        tags: ['risk management', 'ERM', 'risk governance', 'risk budget', 'risk process']
      },
      {
        id: 'risk-types',
        topicId: 'pm-risk-management',
        title: 'Types of Risk: Financial and Non-Financial',
        firstPrinciple: 'Financial risks arise from market prices and financial structures; non-financial risks arise from operational failures and external events. Both categories can cause large losses — the 2008 crisis showed that operational/model risks (mispriced CDOs) caused larger losses than direct market risk for many institutions. A complete risk management program addresses all risk types, not just the quantifiable market risks.',
        examAngle: 'Classify risks correctly: market (price), credit (counterparty default), liquidity, operational (fraud, systems failures), model, legal/regulatory, and tail/event risk.',
        keyPoints: [
          'Market risk: losses from changes in prices (equity, rates, FX, commodities) — measured by VaR, β',
          'Credit risk: counterparty fails to pay (default risk) or credit quality deteriorates (spread risk)',
          'Liquidity risk: cannot execute trades at fair value; can amplify other risks in a crisis',
          'Operational risk: losses from failed processes, systems, people, or external events (fraud, cyberattack)',
          'Model risk: losses from using incorrect models or inputs; "all models are wrong but some are useful"'
        ],
        difficulty: 'medium',
        tags: ['risk types', 'market risk', 'credit risk', 'liquidity risk', 'operational risk', 'model risk']
      },
      {
        id: 'var-cvar',
        topicId: 'pm-risk-management',
        title: 'Value at Risk (VaR) and Conditional VaR',
        firstPrinciple: 'VaR answers a specific question: "What is the maximum loss I should expect NOT to exceed over a given period, at a given confidence level?" It condenses the risk of an entire portfolio into a single, interpretable number. However, VaR says nothing about what happens in the tail — if losses DO exceed the VaR, how bad do they get? CVaR (Expected Shortfall) answers this: the average loss when losses exceed the VaR threshold.',
        formula: 'VaR at 95%: loss not exceeded 95% of the time\nCVaR = E[Loss | Loss > VaR] = average tail loss',
        examAngle: 'VaR interpretation is heavily tested: "With 95% confidence, maximum loss over 1 day is $X" means 5% chance of losing MORE than $X. CVaR is always worse (larger) than VaR.',
        keyPoints: [
          'VaR(95%, 1-day) = loss level exceeded only 5% of days (1 out of 20 trading days on average)',
          'Three VaR methods: parametric (assumes normal distribution), historical simulation, Monte Carlo simulation',
          'VaR does NOT tell you the maximum possible loss — only the loss not exceeded at the confidence level',
          'CVaR (Conditional VaR / Expected Shortfall): average loss in the worst 5% of cases; always ≥ VaR',
          'Key limitation of VaR: underestimates tail risk if returns have fat tails (non-normal distribution)'
        ],
        difficulty: 'hard',
        tags: ['VaR', 'CVaR', 'expected shortfall', 'tail risk', 'risk measurement'],
        numericalExample: {
          problem: 'A portfolio is worth $10,000,000. Daily returns are approximately normally distributed with mean = 0.05% and daily standard deviation = 1.2%. Compute the 5% daily VaR (i.e., the loss not exceeded 95% of the time). Use the parametric method with z = 1.645 for the 5th percentile.',
          solution: 'Parametric VaR formula:\nVaR = Portfolio Value × (μ − z × σ) expressed as a loss\n\nFor 5% VaR (95% confidence), z = 1.645:\nReturn at 5th percentile = μ − z × σ = 0.05% − 1.645 × 1.2%\n                        = 0.05% − 1.974% = −1.924%\n\nVaR (dollar) = $10,000,000 × 1.924% (note: VaR is expressed as a positive loss amount)',
          answer: 'Daily 5% VaR = $192,400\nInterpretation: On 19 out of 20 trading days, losses will be LESS than $192,400. On roughly 1 day per month, losses are expected to exceed this amount.\nCVaR (expected shortfall) would be the average loss on those worst 5% days — always larger than $192,400'
        }
      },
      {
        id: 'risk-adjusted-measures',
        topicId: 'pm-risk-management',
        title: 'Risk-Adjusted Performance Measures',
        firstPrinciple: 'Raw returns are meaningless without context of the risk taken to achieve them. Risk-adjusted measures normalize returns by the risk incurred, enabling fair comparison across portfolios with different risk levels. A manager who earns 15% with 30% volatility is not performing better than one who earns 12% with 10% volatility — in fact, the second manager has a far superior risk-adjusted performance.',
        formula: 'Sharpe: (Rp-Rf)/σp | Treynor: (Rp-Rf)/βp | Jensen: Rp-[Rf+β(Rm-Rf)] | Info Ratio: α/TE',
        examAngle: 'Know which measure to use: Sharpe for total risk (standalone portfolio); Treynor/Jensen for systematic risk (portfolio within a larger portfolio); Information Ratio for active managers vs. benchmark.',
        keyPoints: [
          'Sharpe ratio: excess return per unit of total risk (σ); use when portfolio = investor\'s entire investment',
          'Treynor ratio: excess return per unit of systematic risk (β); use when portfolio is ONE component of total wealth',
          'Jensen\'s Alpha: actual return minus CAPM-required return; absolute measure of outperformance',
          'Information Ratio (IR): alpha / tracking error; measures active return per unit of active risk',
          'M² (Modigliani-Modigliani): scales portfolio to match market volatility then compares return to market'
        ],
        difficulty: 'hard',
        tags: ['Sharpe', 'Treynor', 'Jensen alpha', 'information ratio', 'risk-adjusted performance'],
        numericalExample: {
          problem: 'Fund A: Rp = 14%, σp = 20%, βp = 1.10, tracking error = 6%, alpha vs. benchmark = 2%. Fund B: Rp = 11%, σp = 12%, βp = 0.80, tracking error = 3%, alpha = 1.2%. Rf = 3%, E(Rm) = 10%. Compute all four measures for each fund.',
          solution: 'Sharpe Ratio:\n  A: (14−3)/20 = 0.55    B: (11−3)/12 = 0.667\n\nTreynor Ratio:\n  A: (14−3)/1.10 = 10.0   B: (11−3)/0.80 = 10.0\n\nJensen\'s Alpha:\n  A: 14% − [3%+1.10×7%] = 14% − 10.7% = +3.3%\n  B: 11% − [3%+0.80×7%] = 11% − 8.6% = +2.4%\n\nInformation Ratio:\n  A: 2% / 6% = 0.333    B: 1.2% / 3% = 0.400',
          answer: 'Sharpe: Fund B wins (0.667 > 0.55) — better total-risk-adjusted return\nTreynor: Tie (10.0 = 10.0) — equal systematic-risk-adjusted return\nJensen\'s Alpha: Fund A wins (+3.3% > +2.4%) — larger absolute outperformance\nInformation Ratio: Fund B wins (0.40 > 0.33) — more consistent active return per unit of active risk\nKey: Which measure to use depends on whether the fund is a standalone investment (Sharpe) or part of a larger portfolio (Treynor/Jensen)'
        }
      }
    ]
  }
]
