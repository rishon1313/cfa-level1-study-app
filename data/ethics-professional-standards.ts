import { Topic } from '@/lib/types'

export const ethicsTopics: Topic[] = [
  {
    id: 'ethics-professionalism',
    title: 'Standards I: Professionalism',
    description: 'Covers knowledge of law, independence and objectivity, misrepresentation, and misconduct. The foundation of professional behavior in finance.',
    examWeight: '10-15%',
    concepts: [
      {
        id: 'knowledge-of-law',
        topicId: 'ethics-professionalism',
        title: 'Standard I(A): Knowledge of the Law',
        firstPrinciple: 'CFA members must know and follow the most restrictive applicable law. When laws conflict, the stricter standard governs. Ignorance of the law is not a defense — the professional obligation requires actively staying current with regulations that govern your practice.',
        formula: 'Standard I(A)',
        examAngle: 'Key trap: when local law is LESS strict than CFA Standards, you must still follow CFA Standards. When local law is MORE strict, follow local law. You must dissociate (quit or report) if employer violates law — you are not required to report to regulators but must not participate.',
        keyPoints: [
          'Follow the most restrictive of: CFA Standards, local law, or employer policy',
          'Must know applicable laws in all jurisdictions where you operate',
          'If employer violates law: dissociate from the activity; report internally; consider reporting to regulators',
          'No obligation to report violations to authorities, but must not participate in violations',
          'Must seek legal counsel when uncertain about legal requirements'
        ],
        difficulty: 'medium',
        tags: ['law', 'compliance', 'jurisdiction', 'dissociation'],
        scenario: {
          situation: 'Maria is a CFA charterholder working in a country where insider trading laws are poorly enforced and local custom treats material nonpublic information as a professional perk. Her supervisor explicitly tells her the firm routinely trades on inside tips and no one has ever been prosecuted. Maria has not personally traded on the information yet.',
          question: 'Does Maria have a duty to act, and if so, what must she do?',
          verdict: 'Violation — if Maria does not dissociate',
          reasoning: 'Even though local enforcement is lax, insider trading violates both CFA Standards and most securities laws. Maria must refuse to participate, document her objection, and dissociate from the activity. She should report internally through compliance channels. The absence of prosecution does not make an illegal act permissible under CFA Standards. If the firm continues, she must consider resigning.'
        }
      },
      {
        id: 'independence-objectivity',
        topicId: 'ethics-professionalism',
        title: 'Standard I(B): Independence and Objectivity',
        firstPrinciple: 'Investment recommendations must be based on honest analysis, not on what will generate fees or please clients. Even the appearance of a conflict of interest undermines trust in capital markets. The moment an analyst\'s conclusion is shaped by who is paying them, the fundamental value of that analysis is destroyed.',
        formula: 'Standard I(B)',
        examAngle: 'Classic traps: accepting gifts or entertainment above a token value from companies being covered; being pressured by investment banking to issue favorable research; allowing "soft dollar" arrangements to influence manager selection. Modest gifts (promotional items of de minimis value) are generally acceptable.',
        keyPoints: [
          'Must not accept gifts/entertainment that could reasonably be expected to compromise independence',
          'Modest/token gifts are acceptable; gifts that could influence recommendations are not',
          'Investment banking pressure to change research ratings is a direct threat to independence',
          'Disclose compensation arrangements that could affect objectivity',
          'Buy-side analysts: must not be pressured by portfolio managers or corporate issuers'
        ],
        difficulty: 'medium',
        tags: ['independence', 'objectivity', 'conflicts', 'gifts', 'research'],
        scenario: {
          situation: 'James covers a mid-cap tech company and has been invited on an all-expenses-paid analyst tour to the company\'s facilities. The trip includes first-class flights, 5-star hotel accommodation, and a golf day — total value approximately $4,500. The company says this is standard practice to help analysts understand the business.',
          question: 'Can James accept the trip, and does he need to disclose it?',
          verdict: 'Violation — if accepted without employer approval and disclosure',
          reasoning: 'A $4,500 all-expenses trip clearly exceeds de minimis value and could reasonably compromise James\'s independence. He must decline or obtain prior written employer approval, and must disclose the arrangement in any research report published about this company. The fact that it is "standard practice" is irrelevant — the standard applies regardless of industry norms.'
        }
      },
      {
        id: 'misrepresentation',
        topicId: 'ethics-professionalism',
        title: 'Standard I(C): Misrepresentation',
        firstPrinciple: 'Trust in financial markets depends on accurate information. Any false statement — whether made intentionally or through negligence — damages the integrity of the profession. Misrepresentation encompasses not just outright lies, but also misleading omissions, plagiarism, cherry-picked performance data, and guarantees of investment performance.',
        formula: 'Standard I(C)',
        examAngle: 'Key areas: (1) plagiarism — using others\' work without attribution; (2) guaranteeing returns — never acceptable; (3) omissions — not volunteering facts that change the meaning; (4) model/data errors that lead to false conclusions. Citing publicly available research models without attribution is plagiarism even if the underlying data is public.',
        keyPoints: [
          'No false or misleading statements about investments, firm, or self — including omissions',
          'Never guarantee investment results (no performance guarantee is acceptable)',
          'Plagiarism: must attribute work to its source; cannot copy research without citation',
          'Cherry-picking performance records violates this standard',
          'Must correct errors in own work when discovered'
        ],
        difficulty: 'medium',
        tags: ['misrepresentation', 'plagiarism', 'guarantees', 'false statements'],
        scenario: {
          situation: 'Rachel runs a small RIA and sends a monthly newsletter that includes a market commentary section. She substantially copies analysis from a respected independent research firm\'s weekly report, rewrites it slightly, and presents it as her own insights without any attribution. She believes she has the right to do this because her firm subscribes to the research service.',
          question: 'Has Rachel violated Standard I(C)?',
          verdict: 'Violation',
          reasoning: 'Paying for a research subscription does not grant the right to republish the content as your own. Rachel has committed plagiarism by presenting the firm\'s analysis as her own without attribution. She must either attribute the original source explicitly ("based on analysis from XYZ Research") or write original commentary. The fact that she rewrote it slightly does not cure the violation — the ideas and structure still belong to the original authors.'
        }
      },
      {
        id: 'misconduct',
        topicId: 'ethics-professionalism',
        title: 'Standard I(D): Misconduct',
        firstPrinciple: 'Professional integrity extends beyond investment activities — dishonest or unethical conduct in any sphere of life can undermine trust in the member and the profession. The CFA designation implies a commitment to the highest ethical standards broadly, not just in client-facing investment work.',
        formula: 'Standard I(D)',
        examAngle: 'Misconduct includes: fraud, theft, or dishonesty in any context (not just work); behavior that reflects adversely on professional integrity. Note: personal bankruptcy alone is NOT misconduct unless it involves fraud. DUI is borderline — depends on circumstances and whether it reflects on professional honesty.',
        keyPoints: [
          'Must not engage in dishonesty, fraud, or deceit in any context (professional or personal)',
          'Conduct that reflects adversely on professional reputation, integrity, or competence is prohibited',
          'Personal bankruptcy is NOT automatically misconduct (financial hardship ≠ dishonesty)',
          'Criminal convictions for fraud or theft clearly constitute misconduct',
          'Applies to all conduct, not just investment-related activities'
        ],
        difficulty: 'medium',
        tags: ['misconduct', 'fraud', 'integrity', 'professional conduct'],
        scenario: {
          situation: 'David, a CFA charterholder and portfolio manager, is going through a difficult divorce. He files personal bankruptcy, listing $800,000 in credit card debts accumulated on luxury items. Separately, three years ago he was convicted of a DUI but served no prison time and completed community service. His clients are unaware of either event.',
          question: 'Do either of these events constitute misconduct under Standard I(D)?',
          verdict: 'No Violation — for bankruptcy; possible concern for DUI',
          reasoning: 'Personal bankruptcy from excessive personal spending, while irresponsible, does not by itself constitute misconduct under I(D) because it does not involve fraud or dishonesty toward others. The DUI conviction is more nuanced — a single DUI generally does not directly reflect on professional integrity in investment management, though a pattern of illegal behavior could. Neither event requires disclosure to clients under this Standard, though firm policies may differ.'
        }
      }
    ]
  },
  {
    id: 'ethics-integrity-markets',
    title: 'Standards II: Integrity of Capital Markets',
    description: 'Covers material nonpublic information and market manipulation. Protecting the fairness and efficiency of capital markets.',
    examWeight: '10-15%',
    concepts: [
      {
        id: 'material-nonpublic-info',
        topicId: 'ethics-integrity-markets',
        title: 'Standard II(A): Material Nonpublic Information',
        firstPrinciple: 'Capital markets function fairly only when all participants trade on the same publicly available information. Allowing those with privileged access to profit at the expense of uninformed public investors destroys market integrity and undermines public trust. The prohibition is absolute — the source of the advantage (friend, client, government contact) does not matter.',
        formula: 'Standard II(A)',
        examAngle: 'Two-part test for illegal insider trading: (1) information must be MATERIAL (would a reasonable investor consider it significant?) AND (2) NONPUBLIC (not available to general public). The mosaic theory: combining individually non-material public facts can be used to form a conclusion — this is legal and encouraged.',
        keyPoints: [
          'Material: information that would significantly affect stock price or that a reasonable investor would want to know',
          'Nonpublic: information not disseminated to the general investment public',
          'If you receive MNPI: must immediately cease trading and place security on restricted list',
          'Mosaic theory: combining public non-material facts is acceptable and encouraged',
          'Firewall: information barriers between investment banking and research/trading are required'
        ],
        difficulty: 'hard',
        tags: ['insider trading', 'MNPI', 'material', 'nonpublic', 'mosaic theory'],
        scenario: {
          situation: 'Sofia, an analyst, is having lunch with a friend who works in the IR department at a large pharmaceutical company. The friend, without intending to disclose anything, mentions offhandedly: "We\'ve been really busy lately preparing for a big announcement next week." Sofia puts together this comment with publicly available data she has been analyzing — unusual options activity, a hiring surge in the manufacturing division, and supply chain intelligence — and concludes the company is about to announce a major drug approval.',
          question: 'Can Sofia act on her conclusion and purchase stock before the announcement?',
          verdict: 'No Violation — mosaic theory applies',
          reasoning: 'The friend\'s casual comment ("big announcement") is vague and non-specific — it is arguably not material nonpublic information because it conveys nothing specific about the nature of the announcement. Sofia\'s conclusion is derived primarily from public sources using legitimate analysis (the mosaic theory). She can trade on this conclusion. However, she should be cautious: if the friend had said "we\'re about to announce FDA approval of Drug X," that would be specific MNPI and she must not trade.'
        }
      },
      {
        id: 'market-manipulation',
        topicId: 'ethics-integrity-markets',
        title: 'Standard II(B): Market Manipulation',
        firstPrinciple: 'Price discovery — the process by which markets determine fair value — only works when prices reflect genuine supply and demand from investors with real economic interests. Manipulative trading that distorts prices harms all legitimate market participants, destroys the price signaling function of markets, and ultimately undermines the allocation of capital in the economy.',
        formula: 'Standard II(B)',
        examAngle: 'Two types of manipulation: (1) transaction-based — actual trades designed to move prices (painting the tape, front-running, creating false volume); (2) information-based — spreading false information to move prices. Legitimate strategies like short selling and writing bearish reports (with genuine analysis) are NOT manipulation.',
        keyPoints: [
          'Transaction manipulation: trades designed to distort prices or volume (painting the tape, wash trades)',
          'Information manipulation: spreading false/misleading information to move prices',
          'Short selling based on genuine analysis is NOT manipulation',
          'Publishing a negative research report based on honest analysis is NOT manipulation',
          '"Banging the close" — trading aggressively near market close to fix settlement prices — is manipulation'
        ],
        difficulty: 'hard',
        tags: ['market manipulation', 'wash trades', 'front-running', 'price manipulation'],
        scenario: {
          situation: 'Tom manages a fund that holds a large position in a small-cap stock. Near quarter-end, he executes a series of large buy orders in the final 10 minutes of trading to push the stock\'s closing price up by 4%, improving his fund\'s quarterly performance figures. He plans to sell the position in the first week of the next quarter.',
          question: 'Is Tom\'s trading strategy a violation?',
          verdict: 'Violation',
          reasoning: 'Tom is engaging in "marking the close" — a classic form of market manipulation. He is executing trades not based on investment merit but with the deliberate intent to inflate the closing price and improve his fund\'s reported performance. This harms other investors who transact at the artificially inflated price and misrepresents the fund\'s true performance. This violates Standard II(B) and is also likely illegal under securities regulations in most jurisdictions.'
        }
      }
    ]
  },
  {
    id: 'ethics-duties-clients',
    title: 'Standards III: Duties to Clients',
    description: 'Covers loyalty, prudence, fair dealing, suitability, performance presentation, and confidentiality. The core obligations owed to clients.',
    examWeight: '10-15%',
    concepts: [
      {
        id: 'loyalty-prudence-care',
        topicId: 'ethics-duties-clients',
        title: 'Standard III(A): Loyalty, Prudence, and Care',
        firstPrinciple: 'The fiduciary relationship places clients\' interests above the manager\'s own interests. Every investment decision must be made in the client\'s best interest, not to generate fees, build relationships, or satisfy the manager\'s personal preferences. "Soft dollar" arrangements, directed brokerage, and excessive trading are all threats to this duty.',
        formula: 'Standard III(A)',
        examAngle: 'Key issues: (1) soft dollars — using client commissions to pay for research is acceptable if it benefits the client; using it for personal expenses (office rent, travel) is a violation; (2) directed brokerage — client can direct commissions to a specific broker, but manager must disclose potential costs; (3) proxy voting — must vote in client\'s best interest, not automatically with management.',
        keyPoints: [
          'Client interests come first — above manager\'s personal interests and employer\'s interests',
          'Soft dollars: acceptable if used for research that benefits clients; not for personal/firm expenses',
          'Must vote proxies in client\'s best interest; should have written proxy voting policy',
          'Directed brokerage: disclose potential conflicts and cost implications to client',
          'Duty of loyalty applies to the beneficial owners of assets (e.g., pension beneficiaries, not the plan sponsor)'
        ],
        difficulty: 'hard',
        tags: ['fiduciary', 'loyalty', 'soft dollars', 'proxy voting', 'prudence'],
        scenario: {
          situation: 'Alice manages a pension fund. The pension plan\'s corporate sponsor instructs her to vote all proxies in favor of management recommendations to "maintain good relationships" with investee companies. Alice is also instructed to route all trades through the sponsor\'s affiliated brokerage firm, which charges commissions 30% above market rates.',
          question: 'Must Alice follow these instructions from the plan sponsor?',
          verdict: 'Violation — if Alice complies',
          reasoning: 'Alice\'s fiduciary duty runs to the pension beneficiaries (retirees), not the corporate sponsor. Voting all proxies with management regardless of the merits fails this duty. Using an overpriced affiliated broker increases transaction costs at the expense of beneficiaries. Alice must push back on both instructions — she should vote proxies on their merits and either negotiate commission rates or seek approval from the beneficiaries\' representatives. She must not blindly follow sponsor instructions that harm beneficiaries.'
        }
      },
      {
        id: 'fair-dealing',
        topicId: 'ethics-duties-clients',
        title: 'Standard III(B): Fair Dealing',
        firstPrinciple: 'All clients deserve equitable treatment — no client should receive preferential treatment in receiving investment recommendations or trade executions. This does not mean all clients receive identical service (tiered service levels are acceptable), but it does mean that investment recommendations must be disseminated simultaneously and no client front-runs others on trade execution.',
        formula: 'Standard III(B)',
        examAngle: 'Common exam scenario: analyst calls favorite clients before posting a recommendation publicly — this is a violation. Acceptable: tiered service levels where premium clients get more frequent contact. Not acceptable: informing some clients of a recommendation change before others. Trade allocation must be pro-rata or by pre-established systematic method.',
        keyPoints: [
          'Recommendations must be disseminated to all clients simultaneously (or as nearly as possible)',
          'Cannot tip off favored clients before publishing a recommendation change',
          'Tiered service levels are acceptable if disclosed; differential access to new recommendations is not',
          'Trade allocations must be fair — pro-rata or systematic, not preferential',
          'Oversubscribed IPO shares must be allocated fairly — cannot give all shares to best clients'
        ],
        difficulty: 'medium',
        tags: ['fair dealing', 'trade allocation', 'simultaneous dissemination', 'IPO allocation'],
        scenario: {
          situation: 'Carlos manages a hedge fund and a mutual fund. He generates a buy idea for a micro-cap stock that is thinly traded. He executes the purchase for his hedge fund first because it pays higher fees, then allocates shares to the mutual fund once the hedge fund is fully positioned. By this time, the stock has risen 8%.',
          question: 'Has Carlos violated Standard III(B)?',
          verdict: 'Violation',
          reasoning: 'Carlos has front-run the mutual fund clients by advantaging the hedge fund simply because it generates higher fees. Both funds are clients and deserve fair treatment. He should have allocated shares pro-rata across both funds simultaneously, or used a pre-established allocation methodology applied consistently. Trading for one client before another based on fee economics violates fair dealing.'
        }
      },
      {
        id: 'suitability',
        topicId: 'ethics-duties-clients',
        title: 'Standard III(C): Suitability',
        firstPrinciple: 'Investments appropriate for one investor can be completely inappropriate for another. A speculative option strategy suitable for a wealthy 30-year-old might be ruinous for a retired couple living on fixed income. Suitability requires understanding the investor\'s complete financial picture before recommending any investment — context is everything.',
        formula: 'Standard III(C)',
        examAngle: 'Two contexts: (1) advisory relationship — must know the client (KYC) and ensure each recommendation is appropriate for THAT client\'s specific situation; (2) portfolio manager context — must ensure the investment is consistent with the IPS and overall portfolio mandate. Unsolicited orders: if client insists on unsuitable trade, may execute but must document objection.',
        keyPoints: [
          'Must understand: time horizon, risk tolerance, liquidity needs, tax situation, unique circumstances',
          'Each recommendation must be suitable for the specific client — not just the "average" client',
          'For portfolio managers: suitability applies to the overall portfolio in context of the IPS',
          'Unsolicited order for unsuitable investment: may execute but must document the objection',
          'Must update suitability assessment when client circumstances change materially'
        ],
        difficulty: 'medium',
        tags: ['suitability', 'KYC', 'IPS', 'risk tolerance', 'client needs'],
        scenario: {
          situation: 'Barbara, a 72-year-old retiree with $400,000 in savings as her sole financial resource, tells her advisor she wants to invest $200,000 in a leveraged cryptocurrency fund she read about online. She is adamant about this choice and says she understands the risks. Her IPS specifies a conservative risk profile focused on capital preservation.',
          question: 'What must Barbara\'s advisor do?',
          verdict: 'Violation — if advisor executes without objection',
          reasoning: 'The leveraged crypto fund is clearly unsuitable for Barbara: it is highly speculative, her time horizon is short, she has no income replacement if losses occur, and it contradicts her IPS. The advisor must explain the unsuitability clearly, document the discussion and objection, and may decline to execute the order. If the client insists after full disclosure, some jurisdictions allow execution with documented objection and client acknowledgment — but the advisor should seriously consider whether this relationship can continue if the client routinely overrides suitability requirements.'
        }
      },
      {
        id: 'performance-presentation',
        topicId: 'ethics-duties-clients',
        title: 'Standard III(D): Performance Presentation',
        firstPrinciple: 'Investment performance records must be reported truthfully and completely — selective presentation is a form of deception. The natural human tendency to show your best results and omit your worst is precisely what this standard guards against. Clients need accurate performance data to evaluate whether a manager adds value and make allocation decisions.',
        formula: 'Standard III(D)',
        examAngle: 'Common violations: showing only your best-performing model portfolios while omitting real accounts; reporting performance of a few cherry-picked securities as representative of the overall strategy; showing gross-of-fee returns without disclosure when net-of-fee returns would be materially different. GIPS compliance is encouraged but not required by the Standards alone.',
        keyPoints: [
          'Must not misrepresent past performance — include complete track record, not cherry-picked periods',
          'Cannot claim GIPS compliance unless fully compliant',
          'Must include terminated accounts/funds in historical composites (survivorship bias)',
          'Simulated and back-tested returns must be clearly labeled as such',
          'Fee disclosures: gross vs. net of fees must be clearly stated'
        ],
        difficulty: 'medium',
        tags: ['performance', 'GIPS', 'track record', 'survivorship bias', 'cherry-picking'],
        scenario: {
          situation: 'Michael runs a small advisory firm with 15 client accounts. He selects the 4 accounts that have the best 3-year track record — all of which happen to have had technology-heavy allocations — and uses these as "representative accounts" in his marketing materials. He does not mention that 3 accounts with similar tech tilts were closed after significant losses in 2022.',
          question: 'Is Michael\'s performance presentation acceptable?',
          verdict: 'Violation',
          reasoning: 'Michael is engaging in survivorship bias by presenting only successful accounts and excluding failed ones. This creates a materially misleading picture of his investment skill. Under Standard III(D), performance must be complete and not misleading. He must either present a full composite of all similar accounts (following GIPS methodology) or clearly disclose the selection methodology and that it excludes closed accounts. The omission of failed accounts is a form of misrepresentation.'
        }
      },
      {
        id: 'preservation-confidentiality',
        topicId: 'ethics-duties-clients',
        title: 'Standard III(E): Preservation of Confidentiality',
        firstPrinciple: 'Clients share sensitive financial and personal information to enable proper investment management. They do so with an expectation of confidentiality. Breaching this trust destroys the advisor-client relationship and can cause real harm. The obligation is broadly stated — it applies to current, former, and prospective clients.',
        formula: 'Standard III(E)',
        examAngle: 'Key exception: confidentiality can be broken when REQUIRED by law (court subpoena, regulatory investigation, mandatory reporting of illegal activity). However, it is NOT broken when a manager suspects (but does not know) that a client is doing something illegal — in that case, seek legal counsel first. Sharing client info with a portfolio analytics firm that the firm has vetted is acceptable.',
        keyPoints: [
          'Must keep client information confidential — current, former, and prospective clients',
          'Cannot share confidential information without client consent, except when required by law',
          'Legal requirement to disclose (subpoena, regulatory order) overrides confidentiality',
          'Suspected illegal activity: consult legal counsel first before disclosing',
          'Sharing info with service providers for legitimate business purposes is acceptable with appropriate controls'
        ],
        difficulty: 'medium',
        tags: ['confidentiality', 'privacy', 'disclosure', 'client information'],
        scenario: {
          situation: 'During a routine review, Linda, an advisor, notices that her client\'s account has received several large wire transfers from offshore entities that seem inconsistent with the client\'s stated occupation as a teacher. She suspects possible money laundering but has no definitive evidence. She is considering reporting this to financial intelligence authorities without telling the client.',
          question: 'What should Linda do?',
          verdict: 'No Violation — reporting to authorities is permissible',
          reasoning: 'When an advisor has reasonable grounds to suspect illegal activity (such as money laundering), many jurisdictions impose a legal duty to report to financial intelligence authorities (e.g., filing a Suspicious Activity Report). This legal reporting obligation overrides the duty of confidentiality under Standard III(E). Linda should: (1) consult legal counsel immediately; (2) file required regulatory reports if mandated by law; (3) NOT inform the client of the report ("tipping off" the client may itself be illegal). This is not a violation of the confidentiality standard because legal obligations take precedence.'
        }
      }
    ]
  },
  {
    id: 'ethics-duties-employers',
    title: 'Standards IV: Duties to Employers',
    description: 'Covers loyalty to employer, additional compensation arrangements, and supervisory responsibilities.',
    examWeight: '10-15%',
    concepts: [
      {
        id: 'loyalty-employer',
        topicId: 'ethics-duties-employers',
        title: 'Standard IV(A): Loyalty to Employer',
        firstPrinciple: 'Employees have obligations to their employers — not unlimited, but real. The employer-employee relationship requires acting in the employer\'s interest during employment. However, this duty is not absolute: employees may take steps to protect their own career interests (like developing professional skills) and must not follow employer instructions that violate the law or CFA Standards.',
        formula: 'Standard IV(A)',
        examAngle: 'Tricky areas: (1) preparing to leave — you may plan your departure and interview elsewhere, but cannot take client lists, use firm resources, or solicit clients/colleagues before you leave; (2) whistleblowing — reporting employer violations to authorities is NOT a violation of loyalty; (3) independent practice — allowed if disclosed and employer consents.',
        keyPoints: [
          'Must act for employer\'s benefit while employed; cannot misappropriate firm resources or property',
          'May plan to leave but cannot solicit clients or take confidential firm information before departure',
          'Independent practice outside regular duties: must disclose and get employer approval',
          'Whistleblowing to authorities is NOT a violation of this standard when employer is violating law',
          'Skills and knowledge developed while employed may be taken to next employer (general knowledge, not client records)'
        ],
        difficulty: 'hard',
        tags: ['employer loyalty', 'whistleblowing', 'independent practice', 'leaving a firm'],
        scenario: {
          situation: 'Greg has decided to leave his current employer and start his own RIA. While still employed, he emails his personal database of 200 client names, contact information, and portfolio details (which he assembled from firm systems) to his personal email. He has not yet told his employer. He plans to contact these clients once he leaves to solicit them to his new firm.',
          question: 'Has Greg violated Standard IV(A)?',
          verdict: 'Violation',
          reasoning: 'Greg has misappropriated confidential firm property — the client database — for his personal benefit. This is a clear violation of loyalty to employer. He may contact former clients using publicly available information after he leaves, but taking confidential client data from firm systems violates both this Standard and likely employment law. The fact that he built relationships with these clients does not give him ownership of the firm\'s records. He must delete the emailed data and rely only on information in his own memory or from public sources after departure.'
        }
      },
      {
        id: 'additional-compensation',
        topicId: 'ethics-duties-employers',
        title: 'Standard IV(B): Additional Compensation Arrangements',
        firstPrinciple: 'When employees receive compensation from sources outside their primary employer, potential conflicts of interest arise. The employer has a right to know about these arrangements so they can assess whether the employee\'s objectivity and time allocation are being compromised. Transparency — through disclosure and consent — is the mechanism that makes these arrangements acceptable.',
        formula: 'Standard IV(B)',
        examAngle: 'The standard requires: written disclosure of all additional compensation to employer AND written consent before accepting. Even if the compensation seems minor or unrelated to current duties, if it could create a conflict or distract from employment obligations, it must be disclosed. Failing to disclose is the violation — not necessarily accepting the compensation.',
        keyPoints: [
          'Must disclose any additional compensation (gifts, bonuses, benefits) from third parties in writing',
          'Must obtain written consent from employer BEFORE accepting additional compensation',
          'Applies to compensation that could create a conflict or appear to compromise independence',
          'Nominal gifts (pens, branded merchandise) generally do not require formal disclosure',
          'Violation is failing to disclose — not the compensation itself (which may be fine if approved)'
        ],
        difficulty: 'medium',
        tags: ['compensation', 'disclosure', 'conflicts', 'employer consent'],
        scenario: {
          situation: 'Amy is a senior equity analyst at an asset manager. A private company she covers on the side approaches her to serve on their advisory board, paying her $30,000 per year for quarterly calls. She discloses this verbally to her manager, who says "sounds fine." She accepts the role without getting written approval from HR or compliance.',
          question: 'Has Amy complied with Standard IV(B)?',
          verdict: 'Violation',
          reasoning: 'While Amy did disclose informally, Standard IV(B) requires written disclosure and written consent from the employer — not just verbal approval from her manager. A verbal "sounds fine" from a manager does not constitute the required formal consent. Amy should have submitted a written disclosure to compliance/HR, obtained written approval, and then accepted the role. She must now formalize this arrangement retroactively by getting written consent or resign from the advisory board.'
        }
      },
      {
        id: 'responsibilities-supervisors',
        topicId: 'ethics-duties-employers',
        title: 'Standard IV(C): Responsibilities of Supervisors',
        firstPrinciple: 'Supervisors are responsible for the ethical conduct of those they supervise. This is not a passive responsibility — it requires actively implementing compliance systems, monitoring subordinates, and responding decisively when violations occur. A manager who "looks the other way" or fails to establish adequate controls is violating this standard even if they personally did nothing wrong.',
        formula: 'Standard IV(C)',
        examAngle: 'Key scenario: supervisor discovers a violation but firm\'s compliance system is inadequate. The supervisor must (a) take immediate steps to stop the violation, (b) report to compliance, AND (c) implement corrective measures to prevent recurrence. Simply reporting upward and doing nothing else is insufficient. If compliance systems are inadequate, must refuse to accept supervisory responsibility.',
        keyPoints: [
          'Must implement compliance procedures adequate to prevent violations by supervisees',
          'Must take prompt action when violations are detected — not just report and forget',
          'Cannot accept supervisory responsibility without adequate compliance systems in place',
          'Supervisory liability attaches even if supervisor was unaware, if they failed to implement adequate procedures',
          'Must conduct investigations of potential violations, not ignore red flags'
        ],
        difficulty: 'hard',
        tags: ['supervision', 'compliance', 'responsibility', 'violations'],
        scenario: {
          situation: 'Peter is the head of trading at a bank. An internal audit flags that one of his traders, Sarah, has been front-running client orders for the past six months. Peter reports the finding to legal and then returns to normal business — he takes no immediate action to stop Sarah\'s trading, does not restrict her access, and does not review her procedures while the investigation is ongoing.',
          question: 'Has Peter violated Standard IV(C)?',
          verdict: 'Violation',
          reasoning: 'Once Peter became aware of a potential violation, his duty required immediate action — not just reporting and waiting. He should have: immediately placed Sarah\'s trading under enhanced supervision or suspended her activity pending investigation; reviewed all recent trades for client harm; implemented corrective procedures. By continuing to allow Sarah to trade without restriction while the investigation is ongoing, Peter is failing his supervisory duty and allowing ongoing client harm. Reporting upward is necessary but not sufficient.'
        }
      }
    ]
  },
  {
    id: 'ethics-investment-analysis',
    title: 'Standards V: Investment Analysis & Recommendations',
    description: 'Covers diligence and reasonable basis, communication with clients, and record retention.',
    examWeight: '10-15%',
    concepts: [
      {
        id: 'diligence-reasonable-basis',
        topicId: 'ethics-investment-analysis',
        title: 'Standard V(A): Diligence and Reasonable Basis',
        firstPrinciple: 'Investment recommendations carry weight — clients act on them, sometimes committing significant portions of their wealth. This creates an obligation to do the work rigorously before making a recommendation. An analyst who publishes a buy rating based on a cursory review is being unfair to clients who trust that professional judgment was applied.',
        formula: 'Standard V(A)',
        examAngle: 'Applies to original research AND using third-party research. If using another firm\'s research, must independently verify that it has reasonable basis. If using quantitative models, must understand what the model does and validate its assumptions. Reasonable basis does not require certainty — it requires professional diligence proportionate to the recommendation.',
        keyPoints: [
          'Must have reasonable and adequate basis for all recommendations and investment actions',
          'Level of diligence should be proportionate to the complexity and significance of the recommendation',
          'When using third-party research: must independently assess if the source is credible and methodology sound',
          'Quantitative models: must understand model assumptions and limitations',
          'Team recommendations: individuals still must believe the group recommendation has reasonable basis'
        ],
        difficulty: 'medium',
        tags: ['diligence', 'reasonable basis', 'research', 'analysis quality'],
        scenario: {
          situation: 'Kevin is a generalist analyst at a small firm. His supervisor asks him to initiate coverage on a biotech company in a highly specialized oncology sub-sector. Kevin has no background in biotech. He reads the company\'s 10-K and an industry report, spends two days on the analysis, and publishes a strong buy recommendation with a 12-month price target. He has not consulted any medical experts or biotech specialists.',
          question: 'Has Kevin met the requirements of Standard V(A)?',
          verdict: 'Violation — likely insufficient diligence',
          reasoning: 'Initiating coverage on a highly specialized biotech with a strong buy recommendation after only two days of analysis by an analyst with no domain expertise likely falls below the reasonable basis standard. The complexity of evaluating clinical trial outcomes, regulatory approval probabilities, and competitive positioning in oncology requires either specialized expertise or consultation with experts who have it. Kevin should either have brought in expert consultants, disclosed the significant limitations of his analysis, or declined to issue a definitive recommendation until adequate diligence was completed.'
        }
      },
      {
        id: 'communication-clients',
        topicId: 'ethics-investment-analysis',
        title: 'Standard V(B): Communication with Clients and Prospective Clients',
        firstPrinciple: 'Clients cannot evaluate their managers or make informed decisions without honest, complete communication about what the manager is doing and why. Vague or incomplete communication is a form of concealment. This standard requires that the investment process, its limitations, and material changes be communicated clearly.',
        formula: 'Standard V(B)',
        examAngle: 'Key requirements: (1) distinguish facts from opinions — clearly label projections as projections; (2) disclose the general principles of the investment process; (3) promptly disclose material changes to the investment process; (4) disclose risks and limitations. Must also use reasonable judgment about what is "material" enough to communicate.',
        keyPoints: [
          'Must clearly distinguish between facts and opinions in all communications',
          'Must disclose the general principles of investment process and significant changes to it',
          'Must disclose material risks associated with the investment process',
          'Projections must be labeled as such — not presented as facts',
          'Must communicate promptly when there are material changes to the investment approach'
        ],
        difficulty: 'medium',
        tags: ['communication', 'disclosure', 'facts vs opinions', 'investment process'],
        scenario: {
          situation: 'Diana manages a "conservative income fund" for 200 retail investors. Over the past year, without notifying clients, she has gradually increased the fund\'s allocation to high-yield junk bonds from 5% to 40% as she sought higher yields. The fund\'s marketing materials still describe it as focused on investment-grade fixed income. The additional risk is not reflected in any client communication.',
          question: 'Has Diana violated Standard V(B)?',
          verdict: 'Violation',
          reasoning: 'Diana has made a material change to the investment process — moving 35% of the fund from investment-grade to high-yield bonds is a fundamental change in risk profile — without communicating this to clients. Clients invested in a "conservative income fund" and deserve to know that the strategy has shifted significantly. She must promptly update all communications and marketing materials, notify clients of the change in risk profile, and allow them to redeem if the new strategy is inconsistent with their objectives. Failing to communicate material changes violates V(B) and likely also III(C) (suitability).'
        }
      },
      {
        id: 'record-retention',
        topicId: 'ethics-investment-analysis',
        title: 'Standard V(C): Record Retention',
        firstPrinciple: 'Investment decisions must be reconstructable after the fact — to answer client questions, respond to regulatory inquiries, and defend the reasonableness of decisions made. Without records, there is no accountability and no way to learn from experience. The professional obligation is to maintain the evidentiary trail.',
        formula: 'Standard V(C)',
        examAngle: 'CFA Standards recommend a minimum of 7 years of records. Local law requirements take precedence if they require longer retention. Electronic records are acceptable. Records supporting research recommendations must be retained — not just the recommendation itself, but the supporting analysis. When leaving a firm, records belong to the firm unless the employer grants permission to take copies.',
        keyPoints: [
          'Must maintain records supporting investment recommendations and decisions',
          'Recommended minimum: 7 years (follow local law if longer retention is required)',
          'Records belong to the employer — cannot take records when changing firms without permission',
          'Electronic records acceptable if appropriately secured and accessible',
          'Records must include both the recommendation AND the supporting analysis/rationale'
        ],
        difficulty: 'easy',
        tags: ['record keeping', 'documentation', 'compliance', '7 years'],
        scenario: {
          situation: 'Frank is an analyst who sends recommendations via encrypted instant messaging to avoid email compliance monitoring. He argues that IM is faster and more secure. He does not retain these message logs and deletes his conversation history monthly. His written reports (stored on the firm server) reference the recommendations but not the underlying analysis.',
          question: 'Is Frank in compliance with Standard V(C)?',
          verdict: 'Violation',
          reasoning: 'Frank is violating record retention in two ways: (1) he is deleting IM communications that constitute investment-related records — the medium does not matter, the content does; and (2) his stored reports lack the supporting analysis required to reconstruct the reasoning behind recommendations. Records must include both the decision and its supporting rationale. Using encrypted IM to avoid compliance monitoring also raises separate concerns about Standard IV(A) loyalty to employer. Frank must enable IM archiving and retain all communications for the required period.'
        }
      }
    ]
  },
  {
    id: 'ethics-conflicts-interest',
    title: 'Standards VI: Conflicts of Interest',
    description: 'Covers disclosure of conflicts, priority of transactions, and referral fees. Managing situations where personal interests may conflict with client interests.',
    examWeight: '10-15%',
    concepts: [
      {
        id: 'disclosure-conflicts',
        topicId: 'ethics-conflicts-interest',
        title: 'Standard VI(A): Disclosure of Conflicts',
        firstPrinciple: 'Conflicts of interest are inevitable in financial services — what matters is whether they are disclosed. A client who knows their advisor owns shares in the company being recommended can discount that advice appropriately. An undisclosed conflict corrupts the relationship silently. Disclosure enables clients to make informed decisions about whether to act on advice.',
        formula: 'Standard VI(A)',
        examAngle: 'Must disclose to both employer AND clients. Key scenarios: (1) personal holdings in recommended securities; (2) board memberships at companies covered; (3) compensation arrangements (especially if fee is tied to products sold); (4) relationships with companies where analyst\'s family member works. Disclosure must be timely, prominent, and specific — not buried in fine print.',
        keyPoints: [
          'Must disclose material conflicts of interest to clients and employer — prominently and in plain language',
          'Personal ownership in recommended securities must be disclosed',
          'Board memberships, relationships with issuers, compensation structures must be disclosed',
          'Disclosure must be timely — before the recommendation, not buried in quarterly statements',
          'Employer conflicts (investment banking relationships with covered companies) must also be disclosed'
        ],
        difficulty: 'medium',
        tags: ['conflicts of interest', 'disclosure', 'transparency', 'ownership'],
        scenario: {
          situation: 'Nathan is a sell-side analyst who publishes a strong buy recommendation on a retailer. What he does not disclose: (a) his wife holds $250,000 of the company\'s stock, (b) his firm\'s investment banking division has a pending fee agreement with the company, and (c) Nathan personally owns call options on the stock. He believes these are immaterial because he genuinely believes in the recommendation.',
          question: 'Has Nathan violated Standard VI(A)?',
          verdict: 'Violation',
          reasoning: 'All three facts are material conflicts that must be disclosed: (1) his wife\'s position creates a clear financial interest in the stock rising; (2) the banking relationship is a textbook example of analyst independence being compromised (pay-to-play); (3) his personal options have leveraged upside from a price increase. Genuine belief in the recommendation does not cure the conflict — clients need to know these facts to properly evaluate the independence of the advice. Each must be disclosed prominently in the research report and in ongoing communications.'
        }
      },
      {
        id: 'priority-transactions',
        topicId: 'ethics-conflicts-interest',
        title: 'Standard VI(B): Priority of Transactions',
        firstPrinciple: 'When an investment professional trades personally in the same securities they recommend to clients, the temptation to front-run clients or exploit information asymmetry is real. Client transactions must come first — the professional\'s personal trades cannot come at the expense of clients. The "Chinese wall" between personal trading and client trading must be real, not theoretical.',
        formula: 'Standard VI(B)',
        examAngle: 'Priority order: clients first, then employer, then personal accounts. Front-running — placing personal orders ahead of known client orders to profit from the price impact — is a clear violation. "Piggybacking" — trading personal account in same direction as client orders — may be acceptable if clients are filled first and personal trade does not affect client pricing.',
        keyPoints: [
          'Client trades must precede personal trades in the same security',
          'Employer/firm trades come before personal trades but after client trades',
          'Front-running — personal trading ahead of client orders — is strictly prohibited',
          'Must establish and follow a personal trading policy with employer pre-clearance',
          'Blackout periods around client trading are standard practice to prevent even appearance of conflict'
        ],
        difficulty: 'hard',
        tags: ['front-running', 'personal trading', 'client priority', 'trade allocation'],
        scenario: {
          situation: 'Elena manages a large mutual fund. She personally decides to buy 5,000 shares of a mid-cap stock for her personal account on Monday morning. On Tuesday, she executes a 200,000-share purchase of the same stock for the fund. The large fund purchase moves the stock price up 3%, benefiting Elena\'s personal position.',
          question: 'Has Elena violated Standard VI(B)?',
          verdict: 'Violation',
          reasoning: 'Elena has engaged in front-running — she purchased shares for her personal account before executing the substantially larger client order that she knew would move the price. Her personal trade directly benefited from the anticipated price impact of the client order. The fact that the client fund also profited from the ultimate price appreciation does not cure the violation — clients were harmed because they paid a higher average price than if the fund had purchased first. Elena must put client trades before any personal trades in the same security.'
        }
      },
      {
        id: 'referral-fees',
        topicId: 'ethics-conflicts-interest',
        title: 'Standard VI(C): Referral Fees',
        firstPrinciple: 'When an advisor receives a fee for referring a client to another service provider, the client needs to know this so they can assess whether the referral was made in the client\'s best interest or the advisor\'s. The same logic applies to arrangements where another party pays fees for client referrals received. Undisclosed referral fees are a hidden conflict of interest.',
        formula: 'Standard VI(C)',
        examAngle: 'Must disclose to both employer and client, before or at time of referral. Applies to both directions: (1) paying referral fees to others for client referrals received; (2) receiving referral fees for directing clients to other services. Must also disclose the nature and value of the compensation so clients can understand the incentive structure.',
        keyPoints: [
          'Must disclose referral arrangements to employer and clients — before or at time of referral',
          'Applies to both: receiving fees for referring clients out AND paying fees for receiving referrals',
          'Must disclose the nature and estimated value of the compensation',
          'Clients can then assess whether recommendation is in their interest or driven by referral fees',
          'Verbal disclosure is acceptable but written confirmation is best practice'
        ],
        difficulty: 'easy',
        tags: ['referral fees', 'disclosure', 'conflicts', 'compensation'],
        scenario: {
          situation: 'Paul is a financial advisor who refers clients needing estate planning to a local law firm. He receives a 15% referral fee from the law firm for each client who engages them. He does not disclose this arrangement to clients, reasoning that the referrals are genuinely to the best law firm for the job and the fee does not influence his judgment.',
          question: 'Has Paul violated Standard VI(C)?',
          verdict: 'Violation',
          reasoning: 'Regardless of whether the law firm is genuinely the best choice, Paul must disclose the referral fee arrangement before making the referral. Clients have the right to know that Paul receives compensation for referrals so they can weigh whether self-interest may have influenced the recommendation. The subjective belief that it does not influence judgment is irrelevant — the Standard requires disclosure, period. Paul must inform clients of the referral fee at or before the time of referral, including the approximate value of the compensation received.'
        }
      }
    ]
  },
  {
    id: 'ethics-responsibilities-cfainstitute',
    title: 'Standards VII: Responsibilities as CFA Member/Candidate',
    description: 'Covers conduct as a CFA Institute member or candidate, and proper reference to the CFA designation.',
    examWeight: '10-15%',
    concepts: [
      {
        id: 'conduct-cfainstitute',
        topicId: 'ethics-responsibilities-cfainstitute',
        title: 'Standard VII(A): Conduct as Participants in CFA Institute Programs',
        firstPrinciple: 'The CFA credential has value because it signals rigorous training and ethical commitment. Anything that undermines the validity of the exam process — whether cheating, sharing questions, or misrepresenting exam status — devalues the credential for every honest charterholder. The integrity of the certification system must be actively protected.',
        formula: 'Standard VII(A)',
        examAngle: 'Specific violations: cheating on the exam, sharing exam questions after the exam (even weeks later), improperly using the CFA Institute name or logo, misrepresenting exam scores or levels completed. Note: discussing general topic areas that appeared on the exam is acceptable; sharing specific questions is not.',
        keyPoints: [
          'Must not cheat or compromise the integrity of the CFA program in any way',
          'Cannot reveal specific exam questions to others (before, during, or after the exam)',
          'Cannot misrepresent CFA Institute membership status, exam scores, or levels completed',
          'Must comply with all CFA Institute bylaws, rules, and regulations',
          'Discussing general topic areas that appeared is acceptable; sharing specific questions is prohibited'
        ],
        difficulty: 'easy',
        tags: ['CFA exam', 'exam integrity', 'cheating', 'misrepresentation'],
        scenario: {
          situation: 'Two weeks after the Level II exam, Jennifer posts on a popular finance study forum: "Heads up for future Level II candidates — there were several detailed questions on the Black-Litterman model and at least 3 vignettes on currency overlay strategies. I\'d really focus on those." She believes she is just helping others prepare and that posting after the exam is okay.',
          question: 'Has Jennifer violated Standard VII(A)?',
          verdict: 'Violation',
          reasoning: 'Jennifer has disclosed specific information about exam content — particular models and topic areas that appeared prominently — which undermines the integrity of the testing process. The prohibition on sharing exam information applies after the exam, not just during it. CFA Institute uses rolling question banks and shared test content across administrations, so revealing specifics helps future candidates in a way that compromises exam fairness. General statements ("the exam covered CAPM and fixed income") are borderline acceptable; targeted guidance on which specific models to focus on based on what appeared crosses the line.'
        }
      },
      {
        id: 'reference-cfaprogram',
        topicId: 'ethics-responsibilities-cfainstitute',
        title: 'Standard VII(B): Reference to CFA Institute, the CFA Designation, and the CFA Program',
        firstPrinciple: 'The CFA designation should only be used in ways that accurately represent the credential and the commitments it entails. Misuse — claiming a designation not yet earned, implying superior returns, or using the designation in misleading contexts — harms both clients who rely on the designation signal and the profession as a whole.',
        formula: 'Standard VII(B)',
        examAngle: 'Common violations: (1) "CFA" as a noun — should be "CFA charterholder" not "I am a CFA"; (2) implying that CFA designation predicts superior performance — it does not; (3) claiming to be a "CFA candidate" for Level 3 when results are pending (must be actually enrolled); (4) continuing to use designation after letting membership lapse. Must always use: "CFA charterholder" or "CFA Institute member."',
        keyPoints: [
          '"CFA" is an adjective, not a noun — must say "CFA charterholder" not "I am a CFA"',
          'Cannot imply CFA designation confers superior investment performance or abilities',
          '"CFA candidate" is only appropriate if currently enrolled in the CFA Program',
          'Must maintain membership and meet continuing education requirements to use the designation',
          'Cannot use the designation in any way that misrepresents the credential or creates false impressions'
        ],
        difficulty: 'easy',
        tags: ['CFA designation', 'credential', 'proper use', 'membership'],
        scenario: {
          situation: 'Robert passed all three CFA exams but has not yet submitted his professional references or paid his membership dues to obtain the charter. On his LinkedIn profile and business card, he writes "Robert Smith, CFA" and his bio states: "Robert holds the CFA designation, the world\'s most rigorous investment credential, which ensures he delivers above-average investment returns." He is technically correct that he passed the exams.',
          question: 'Has Robert violated Standard VII(B)?',
          verdict: 'Violation — multiple violations',
          reasoning: 'Robert has committed two violations: (1) Using "CFA" after his name implies he is a charterholder, which requires both passing exams AND completing the membership application process including professional references and dues. Until the charter is formally awarded, he cannot use the designation. (2) His claim that the CFA designation "ensures above-average investment returns" is false and prohibited — the designation signals knowledge and ethics, not investment performance. He must remove the designation until his charter is formally granted and correct the false performance claim.'
        }
      }
    ]
  }
]
