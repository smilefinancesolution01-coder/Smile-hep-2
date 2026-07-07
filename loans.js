// ================================================================
// SMILE FINANCIAL SOLUTION - AI FUNDING CONSULTANT
// Indian Loan Product Knowledge Database (loans.js)
// Version 1.0 | Realistic Indian Lending Information
// ================================================================
// NOTE: Interest rates, loan amounts, and eligibility are approximate
// and lender dependent. Always verify with the specific bank/NBFC
// before advising customers. Terms vary by institution and market conditions.
// ================================================================

const loanProducts = [
  // =============================================================
  // 1. BUSINESS LOAN
  // =============================================================
  {
    id: 'BL001',
    loanName: 'Business Loan',
    category: 'Unsecured Business Funding',
    whatIsIt: 'Unsecured loan for business expansion, working capital, machinery purchase, or any business need. No collateral required.',
    suitableFor: 'Established businesses, self-employed professionals, traders, manufacturers, and service providers.',
    customerProfile: [
      'Business owner with 2+ years of experience',
      'Self-employed professional (CA, Doctor, Consultant)',
      'Small business needing funds for growth',
      'Business with regular income and tax compliance'
    ],
    businessType: ['Manufacturing', 'Trading', 'Service', 'Retail', 'Food Processing', 'IT', 'Healthcare', 'Education'],
    minimumBusinessAge: '2 years (new business possible with co-applicant)',
    eligibilityCriteria: [
      'Business vintage minimum 2 years',
      'Regular income proof via ITR/Bank Statement',
      'GST registration (if applicable)',
      'CIBIL score 650+ (higher score = better rates)',
      'No major defaults in last 12 months'
    ],
    incomeRequirement: 'Minimum annual income ₹3 Lakh (salaried) or ₹4 Lakh (business)',
    turnoverRequirement: 'Annual turnover ₹5 Lakh+ (for business)',
    cibilRequirement: 'CIBIL 650+ (preferred 700+)',
    loanAmountRange: '₹50,000 to ₹50 Lakh (unsecured) | Higher amount with collateral',
    interestInformation: 'Approx 10% to 18% p.a. (depends on profile, bank, and market)',
    tenureInformation: '1 to 5 years (some banks offer up to 7 years)',
    collateralRequirement: 'No collateral required for up to ₹50 Lakh (may require for higher amount)',
    documentsRequired: [
      'Aadhaar Card',
      'PAN Card',
      'ITR (last 2 years)',
      'Bank Statements (last 6 months)',
      'GST Registration (if applicable)',
      'Business Profile/Brochure',
      'Proof of Business (Shop Act, GST, MSME)',
      'Financial Statements (Profit & Loss, Balance Sheet)'
    ],
    loanPurpose: ['Business Expansion', 'Working Capital', 'Machinery Purchase', 'Stock Purchase', 'Debt Consolidation', 'Infrastructure'],
    applicationProcess: [
      'Check eligibility and CIBIL score',
      'Prepare documents as per checklist',
      'Apply online or visit nearest bank branch',
      'Bank verification (physical/telephonic)',
      'Credit assessment and underwriting',
      'Loan approval and sanction letter',
      'Document signing and disbursement'
    ],
    bankCheckingPoints: [
      'Business vintage and stability',
      'CIBIL score and credit history',
      'Income tax compliance and turnover',
      'GST compliance (if applicable)',
      'Bank statement analysis (cash flow)',
      'Existing liabilities and EMIs'
    ],
    approvalFactors: [
      'Strong CIBIL score (700+)',
      'Higher business vintage (5+ years)',
      'Good turnover and profit margins',
      'Low existing debt burden',
      'Clean credit history',
      'Strong collaterals (if any)'
    ],
    commonRejectionReasons: [
      'CIBIL score below 650',
      'Less than 2 years business vintage',
      'Inconsistent income/turnover',
      'High existing debt',
      'Payment defaults in last 12 months',
      'Incomplete documentation',
      'No GST registration (for applicable businesses)'
    ],
    consultantExplanation: 'Business Loan unsecured loan hai jo business expansion, stock purchase, ya machinery ke liye le sakte hain. Collateral ki zarurat nahi hai, lekin CIBIL score aur business vintage matter karti hai. Interest rates profile ke hisaab se 10-18% tak ho sakti hai.',
    customerPitch: 'Business Loan se aapko ₹50 Lakh tak ka unsecured loan mil sakta hai. Business expansion, stock purchase, ya machinery ke liye perfect hai. CIBIL score acha hona chahiye (650+). 2+ years business vintage bhi requirement hai.'
  },

  // =============================================================
  // 2. MSME BUSINESS LOAN
  // =============================================================
  {
    id: 'MSME001',
    loanName: 'MSME Business Loan',
    category: 'MSME Funding',
    whatIsIt: 'Specialized loan for Micro, Small, and Medium Enterprises with government backed benefits and easier eligibility.',
    suitableFor: 'MSME registered businesses, small manufacturers, traders, and service providers.',
    customerProfile: [
      'Udyam registered MSMEs',
      'Small business owners',
      'Manufacturing units with small scale',
      'Service providers with MSME registration'
    ],
    businessType: ['Manufacturing', 'Trading', 'Service', 'Food Processing', 'Handicrafts', 'IT/ITES', 'Textile', 'Agro-processing'],
    minimumBusinessAge: '1 year (some banks require 2 years)',
    eligibilityCriteria: [
      'MSME registration (Udyam Registration) mandatory',
      'Business vintage 1-2 years',
      'CIBIL score 600+',
      'Regular GST/ITR compliance',
      'No major payment defaults'
    ],
    incomeRequirement: 'Annual income ₹2 Lakh+ (business)',
    turnoverRequirement: 'Annual turnover ₹2 Lakh+',
    cibilRequirement: 'CIBIL 600+ (preferred 650+)',
    loanAmountRange: '₹50,000 to ₹5 Crore (depends on bank and profile)',
    interestInformation: 'Approx 8% to 14% p.a. (government backed schemes may have lower rates)',
    tenureInformation: '1 to 7 years',
    collateralRequirement: 'No collateral for loans up to ₹50 Lakh (under CGTMSE)',
    documentsRequired: [
      'Udyam Registration Certificate',
      'Aadhaar, PAN',
      'ITR (last 2 years)',
      'Bank Statements (last 6 months)',
      'GST Registration',
      'Business Profile',
      'Financial Statements'
    ],
    loanPurpose: ['Working Capital', 'Business Expansion', 'Machinery Purchase', 'Stock Purchase', 'Infrastructure'],
    applicationProcess: [
      'Get Udyam Registration first (if not done)',
      'Check CIBIL score and eligibility',
      'Apply at any bank (PSU banks preferred for MSME)',
      'Bank verification and credit assessment',
      'CGTMSE guarantee processing (if applicable)',
      'Approval and disbursement'
    ],
    bankCheckingPoints: [
      'Udyam Registration validity',
      'Business stability and income',
      'GST and ITR compliance',
      'CIBIL score and credit history',
      'Bank statement cash flow'
    ],
    approvalFactors: [
      'Valid Udyam Registration',
      '3+ years business vintage',
      'CIBIL score 650+',
      'Good GST/ITR compliance',
      'Low existing debt',
      'CGTMSE coverage'
    ],
    commonRejectionReasons: [
      'No Udyam Registration',
      'CIBIL score below 600',
      'No GST/ITR compliance',
      'Irregular income',
      'High existing liabilities',
      'Incomplete documentation'
    ],
    consultantExplanation: 'MSME Business Loan Udyam registered businesses ke liye special hai. Government backed CGTMSE guarantee milti hai, isliye collateral-free loan ₹50 Lakh tak mil sakta hai. Interest rates bhi kam hain (8-14%). Pehle Udyam registration karna mandatory hai.',
    customerPitch: 'MSME Business Loan se aapko ₹5 Crore tak collateral-free funding mil sakti hai. Udyam registration hai toh bank aasani se loan de dete hain. Interest rates low hain (8-14%) aur CGTMSE guarantee bhi milti hai.'
  },

  // =============================================================
  // 3. WORKING CAPITAL LOAN
  // =============================================================
  {
    id: 'WCL001',
    loanName: 'Working Capital Loan',
    category: 'Short Term Funding',
    whatIsIt: 'Short term loan to manage day-to-day operations, purchase stock, pay salaries, and manage cash flow gaps.',
    suitableFor: 'Businesses with seasonal requirements, inventory needs, and cash flow gaps.',
    customerProfile: [
      'Business with seasonal operations',
      'Stock-intensive businesses (traders, retailers)',
      'Manufacturing units needing raw material',
      'Service businesses with payment delays'
    ],
    businessType: ['Manufacturing', 'Trading', 'Retail', 'Food Processing', 'Agriculture', 'Dairy', 'Logistics', 'Healthcare'],
    minimumBusinessAge: '1 year',
    eligibilityCriteria: [
      'Business vintage 1+ year',
      'Regular income via bank statements',
      'CIBIL score 600+',
      'GST registration (for eligible businesses)',
      'Stock and sales proof'
    ],
    incomeRequirement: 'Annual income ₹2 Lakh+',
    turnoverRequirement: 'Annual turnover ₹3 Lakh+',
    cibilRequirement: 'CIBIL 600+ (preferred 650+)',
    loanAmountRange: '₹1 Lakh to ₹25 Lakh (can go higher with collateral)',
    interestInformation: 'Approx 10% to 16% p.a.',
    tenureInformation: '6 months to 3 years (renewable)',
    collateralRequirement: 'No collateral for small amounts (up to ₹10 Lakh)',
    documentsRequired: [
      'Aadhaar, PAN',
      'Bank Statements (last 6 months)',
      'Stock Statement',
      'GST Registration (if applicable)',
      'ITR (if applicable)',
      'Business Proof'
    ],
    loanPurpose: ['Stock Purchase', 'Raw Material', 'Salary Payments', 'Operational Expenses', 'Cash Flow Management'],
    applicationProcess: [
      'Prepare stock and sales data',
      'Apply with bank or NBFC',
      'Bank verifies stock and sales',
      'Credit assessment',
      'Approval and disbursement'
    ],
    bankCheckingPoints: [
      'Stock turnover ratio',
      'Sales and purchase cycle',
      'Cash flow pattern',
      'CIBIL and credit history',
      'GST/ITR compliance'
    ],
    approvalFactors: [
      'Consistent sales pattern',
      'Good stock turnover',
      'CIBIL score 650+',
      'Low existing debt',
      'Clear cash flow'
    ],
    commonRejectionReasons: [
      'Irregular sales/income',
      'Poor stock management',
      'CIBIL below 600',
      'High existing debt',
      'No GST/ITR compliance'
    ],
    consultantExplanation: 'Working Capital Loan business ke daily operations ke liye use hota hai. Stock purchase, salary payment, aur operational expenses ke liye best hai. Short term loan hai (6 months to 3 years) aur interest rate 10-16% hai.',
    customerPitch: 'Working Capital Loan se aapko ₹25 Lakh tak ki funding milti hai daily operations ke liye. Stock purchase, salary payment, aur cash flow management ke liye best hai. Aapke business ki sales aur stock pattern matter karti hai.'
  },

  // =============================================================
  // 4. CASH CREDIT (CC)
  // =============================================================
  {
    id: 'CC001',
    loanName: 'Cash Credit (CC)',
    category: 'Revolving Credit',
    whatIsIt: 'Revolving credit facility against stock and book debts. You can withdraw and repay multiple times within the limit. Interest is charged only on the amount used.',
    suitableFor: 'Businesses with regular stock and receivables, requiring flexible working capital.',
    customerProfile: [
      'Manufacturing units with consistent stock',
      'Traders with inventory and receivables',
      'Businesses with seasonal working capital needs',
      'Wholesalers and distributors'
    ],
    businessType: ['Manufacturing', 'Trading', 'Retail', 'Wholesale', 'Food Processing', 'Agriculture', 'Dairy'],
    minimumBusinessAge: '2 years',
    eligibilityCriteria: [
      '2+ years business vintage',
      'Stock and book debt documentation',
      'CIBIL score 650+',
      'GST and ITR compliance',
      'Physical stock verification possible'
    ],
    incomeRequirement: 'Annual income ₹3 Lakh+',
    turnoverRequirement: 'Annual turnover ₹10 Lakh+',
    cibilRequirement: 'CIBIL 650+',
    loanAmountRange: '₹2 Lakh to ₹5 Crore (based on stock/book debt valuation)',
    interestInformation: 'Approx 9% to 14% p.a. (interest on utilized amount)',
    tenureInformation: '1 year (renewable annually)',
    collateralRequirement: 'Stock and book debts are the primary security',
    documentsRequired: [
      'Stock Statement (monthly)',
      'Book Debt Statement',
      'Aadhaar, PAN',
      'ITR (last 2 years)',
      'Bank Statements (last 6 months)',
      'GST Registration',
      'Financial Statements',
      'Stock valuation report'
    ],
    loanPurpose: ['Working Capital', 'Stock Purchase', 'Operational Expenses', 'Book Debt Management'],
    applicationProcess: [
      'Prepare stock and book debt statements',
      'Apply at bank with complete documentation',
      'Bank conducts physical stock verification',
      'Assessment of stock and debt quality',
      'Limit set based on valuation',
      'Approval and limit activation'
    ],
    bankCheckingPoints: [
      'Stock quality and valuation',
      'Book debt quality and aging',
      'Stock turnover ratio',
      'Sales and purchase cycle',
      'CIBIL and credit history',
      'GST/ITR compliance'
    ],
    approvalFactors: [
      'Quality of stock (marketable/non-perishable)',
      'Low book debt aging',
      'Good sales turnover',
      'CIBIL score 650+',
      'Clean credit history',
      'Strong financials'
    ],
    commonRejectionReasons: [
      'Perishable stock',
      'High book debt aging (90+ days)',
      'Low stock turnover',
      'CIBIL below 650',
      'No GST/ITR compliance',
      'Incomplete stock documentation'
    ],
    consultantExplanation: 'Cash Credit (CC) ek flexible loan facility hai jo stock aur book debt ke against milti hai. Limit approve hoti hai, aur aap utna hi withdraw kar sakte hain jitna zaroorat hai. Interest sirf used amount par lagta hai. Stock and book debt quality important hai.',
    customerPitch: 'Cash Credit facility se aapko stock aur book debt ke against flexible limit milti hai. Aap ₹5 Crore tak ka limit le sakte hain, aur jitna use karte hain utna hi interest dena hai. Stock and book debt quality matter karti hai.'
  },

  // =============================================================
  // 5. OVERDRAFT FACILITY (OD)
  // =============================================================
  {
    id: 'OD001',
    loanName: 'Overdraft Facility (OD)',
    category: 'Revolving Credit',
    whatIsIt: 'Overdraft facility against current account. You can withdraw more than your account balance up to a pre-approved limit. Interest is charged only on the amount overdrawn.',
    suitableFor: 'Businesses with fluctuating cash flow, requiring short term liquidity support.',
    customerProfile: [
      'Businesses with consistent bank transactions',
      'Companies with high operational expenses',
      'Businesses with seasonal cash flow gaps',
      'Current account holders with good relationship'
    ],
    businessType: ['Manufacturing', 'Trading', 'Service', 'Retail', 'IT', 'Healthcare', 'Education'],
    minimumBusinessAge: '1 year (good relationship with bank)',
    eligibilityCriteria: [
      'Current account with the bank',
      'Good banking relationship (6+ months)',
      'CIBIL score 600+',
      'Regular bank transactions',
      'No major defaults'
    ],
    incomeRequirement: 'Annual income ₹2 Lakh+',
    turnoverRequirement: 'Annual turnover ₹5 Lakh+',
    cibilRequirement: 'CIBIL 600+',
    loanAmountRange: '₹50,000 to ₹2 Crore (based on relationship and account turnover)',
    interestInformation: 'Approx 10% to 16% p.a. (interest on utilized amount)',
    tenureInformation: '1 year (renewable annually)',
    collateralRequirement: 'Property or FD can be used for higher limits',
    documentsRequired: [
      'Current Account Statement (last 6 months)',
      'Aadhaar, PAN',
      'ITR (if applicable)',
      'Business Proof',
      'GST Registration (if applicable)'
    ],
    loanPurpose: ['Short Term Liquidity', 'Operational Expenses', 'Cash Flow Management', 'Emergency Funding'],
    applicationProcess: [
      'Maintain good current account relationship',
      'Apply for OD facility with bank',
      'Bank checks account activity and turnover',
      'Limit assessment based on transactions',
      'Approval and facility activation'
    ],
    bankCheckingPoints: [
      'Account turnover and average balance',
      'Number and regularity of transactions',
      'CIBIL and credit history',
      'Relationship with the bank',
      'Business stability'
    ],
    approvalFactors: [
      'High account turnover',
      'Good average balance',
      'Low bounced cheque history',
      'CIBIL score 650+',
      'Long banking relationship'
    ],
    commonRejectionReasons: [
      'Low account turnover',
      'Frequent bounced cheques',
      'CIBIL below 600',
      'Short banking relationship',
      'Inconsistent transaction pattern'
    ],
    consultantExplanation: 'Overdraft (OD) facility aapke current account mein additional limit deti hai. Agar aapka account mein balance kam hai toh bhi aap withdrawal kar sakte hain. Interest sirf overused amount par lagta hai. Bank relationship aur account turnover matter karti hai.',
    customerPitch: 'Overdraft facility se aapka current account ek flexible funding source ban jata hai. Aap pre-approved limit tak withdraw kar sakte hain, aur interest sirf utilized amount par dena hai. Bank relationship aur account turnover important hai.'
  },

  // =============================================================
  // 6. TERM LOAN
  // =============================================================
  {
    id: 'TL001',
    loanName: 'Term Loan',
    category: 'Long Term Funding',
    whatIsIt: 'Long term loan for capital expenditure, business expansion, asset purchase, and infrastructure. EMI based repayment structure.',
    suitableFor: 'Businesses planning expansion, machinery purchase, property acquisition, or major capital investments.',
    customerProfile: [
      'Established businesses with 3+ years',
      'Businesses planning expansion',
      'Manufacturing units needing machinery',
      'Businesses buying property/infrastructure'
    ],
    businessType: ['Manufacturing', 'Food Processing', 'IT', 'Healthcare', 'Education', 'Agriculture', 'Infrastructure'],
    minimumBusinessAge: '3 years (2 years for some banks)',
    eligibilityCriteria: [
      '3+ years business vintage',
      'Strong financials and profitability',
      'CIBIL score 650+',
      'GST and ITR compliance',
      'Clear business plan for asset purchase'
    ],
    incomeRequirement: 'Annual income ₹5 Lakh+',
    turnoverRequirement: 'Annual turnover ₹15 Lakh+',
    cibilRequirement: 'CIBIL 650+ (preferred 700+)',
    loanAmountRange: '₹5 Lakh to ₹10 Crore (higher with collateral)',
    interestInformation: 'Approx 8% to 13% p.a.',
    tenureInformation: '3 to 15 years (depends on asset life)',
    collateralRequirement: 'May require property or asset as collateral (can be unsecured for small amounts)',
    documentsRequired: [
      'Detailed Project Report (DPR)',
      'Aadhaar, PAN',
      'ITR (last 3 years)',
      'Bank Statements (last 12 months)',
      'Financial Statements (last 3 years)',
      'GST Registration',
      'Asset/Property Documents',
      'Business Plan'
    ],
    loanPurpose: ['Machinery Purchase', 'Business Expansion', 'Property/Infrastructure', 'Asset Purchase', 'Capacity Expansion'],
    applicationProcess: [
      'Prepare Detailed Project Report (DPR)',
      'Apply with complete documentation',
      'Bank conducts technical and financial appraisal',
      'Site visit and asset verification',
      'Credit assessment and underwriting',
      'Approval and sanction letter',
      'Disbursement in stages (if required)'
    ],
    bankCheckingPoints: [
      'Project viability and DPR quality',
      'Promoter\'s track record',
      'Asset valuation and collateral',
      'Financial strength and profitability',
      'CIBIL and credit history',
      'Industry potential'
    ],
    approvalFactors: [
      'Strong DPR with realistic projections',
      'High promoter net worth',
      'CIBIL score 700+',
      'Good financial track record',
      'Industry growth potential',
      'Clear collateral coverage'
    ],
    commonRejectionReasons: [
      'Weak DPR/project report',
      'Poor financial track record',
      'CIBIL below 650',
      'Insufficient collateral',
      'Industry in decline',
      'Incomplete documentation',
      'Promoter\'s poor credit history'
    ],
    consultantExplanation: 'Term Loan long term funding hai capital expenditure ke liye. Machinery, expansion, property, aur infrastructure ke liye use hota hai. EMI structure hota hai aur tenure 3-15 years ka ho sakta hai. DPR (Detailed Project Report) bahut important hai.',
    customerPitch: 'Term Loan se aapko ₹10 Crore tak ki long term funding milti hai machinery, expansion, aur property ke liye. EMI system hai aur tenure 3-15 years ka ho sakta hai. DPR strong hona chahiye aur financial track record acha hona chahiye.'
  },

  // =============================================================
  // 7. MACHINERY LOAN
  // =============================================================
  {
    id: 'ML001',
    loanName: 'Machinery Loan',
    category: 'Asset Funding',
    whatIsIt: 'Specialized loan for purchase of machinery, equipment, and manufacturing assets. The machinery itself acts as security.',
    suitableFor: 'Manufacturing units, agro-processing units, and businesses requiring specialized equipment.',
    customerProfile: [
      'Manufacturing business owners',
      'Food processing units',
      'Textile and garment units',
      'Engineering and fabrication units',
      'Agro-processing businesses'
    ],
    businessType: ['Manufacturing', 'Food Processing', 'Textile', 'Engineering', 'Agro-processing', 'Printing', 'Pharmaceutical'],
    minimumBusinessAge: '2 years',
    eligibilityCriteria: [
      '2+ years business vintage',
      'Valid quotations for machinery',
      'CIBIL score 600+',
      'GST and ITR compliance',
      'Clear business use of machinery'
    ],
    incomeRequirement: 'Annual income ₹3 Lakh+',
    turnoverRequirement: 'Annual turnover ₹10 Lakh+',
    cibilRequirement: 'CIBIL 600+ (preferred 650+)',
    loanAmountRange: '₹2 Lakh to ₹5 Crore (80-90% of machinery cost)',
    interestInformation: 'Approx 8% to 14% p.a.',
    tenureInformation: '3 to 7 years (based on machinery life)',
    collateralRequirement: 'The machinery itself acts as primary security',
    documentsRequired: [
      'Machinery Quotations/Invoices',
      'Aadhaar, PAN',
      'ITR (last 2 years)',
      'Bank Statements (last 6 months)',
      'Financial Statements',
      'GST Registration',
      'Business Proof'
    ],
    loanPurpose: ['Machinery Purchase', 'Equipment Upgradation', 'Automation', 'Capacity Expansion'],
    applicationProcess: [
      'Get quotations from multiple suppliers',
      'Prepare machinery purchase plan',
      'Apply with bank/NBFC',
      'Bank verifies quotations and suppliers',
      'Technical feasibility assessment',
      'Approval and disbursement to supplier'
    ],
    bankCheckingPoints: [
      'Machinery quality and supplier credibility',
      'Quotation vs market price',
      'Business need and utilisation',
      'CIBIL and credit history',
      'Financial strength of business'
    ],
    approvalFactors: [
      'Reputed machinery supplier',
      'Competitive quotations',
      'Clear business need',
      'CIBIL score 650+',
      'Good business track record',
      'Strong financials'
    ],
    commonRejectionReasons: [
      'Inflated quotations',
      'Unreliable supplier',
      'Unclear business need',
      'CIBIL below 600',
      'Weak financial track record',
      'No clear ROI on machinery'
    ],
    consultantExplanation: 'Machinery Loan manufacturing aur processing units ke liye special hai. Machinery khud security ban jaati hai, isliye collateral ki zarurat nahi hoti. 80-90% machinery cost loan mil jaati hai. Supplier quotations aur business need important hai.',
    customerPitch: 'Machinery Loan se aapko 80-90% machinery cost tak funding milti hai. Machinery khud security ban jaati hai. New technology aur automation ke liye perfect hai. Supplier quotations aur business need clear honi chahiye.'
  },

  // =============================================================
  // 8. LOAN AGAINST PROPERTY (LAP)
  // =============================================================
  {
    id: 'LAP001',
    loanName: 'Loan Against Property (LAP)',
    category: 'Secured Loan',
    whatIsIt: 'Secured loan against residential or commercial property. Higher loan amount with lower interest rates due to property security.',
    suitableFor: 'Business owners, property owners needing large funds for business or personal needs.',
    customerProfile: [
      'Residential/commercial property owners',
      'Businesses needing large funds (₹10 Lakh+)',
      'Individuals with property but no regular income',
      'Entrepreneurs needing capital for business'
    ],
    businessType: ['All business types (any sector)'],
    minimumBusinessAge: 'No minimum (can be used for any purpose)',
    eligibilityCriteria: [
      'Clear property title',
      'Property valuation from approved valuer',
      'CIBIL score 550+ (higher score preferred)',
      'Income proof (for repayment capacity)',
      'Age 21-65 years'
    ],
    incomeRequirement: 'Any income (regular, business, rental) sufficient to service EMI',
    turnoverRequirement: 'Not mandatory (varies by bank)',
    cibilRequirement: 'CIBIL 550+ (preferred 650+)',
    loanAmountRange: '₹5 Lakh to ₹5 Crore (up to 60-70% of property value)',
    interestInformation: 'Approx 7% to 11% p.a. (lower than unsecured loans)',
    tenureInformation: '5 to 15 years (up to 20 years in some banks)',
    collateralRequirement: 'Residential/commercial property as primary security',
    documentsRequired: [
      'Property Documents (title deed, encumbrance, etc.)',
      'Property Valuation Report',
      'Aadhaar, PAN',
      'ITR (last 2-3 years)',
      'Bank Statements (last 12 months)',
      'Income Proof (salary/business/rental)',
      'Business Proof (if business purpose)'
    ],
    loanPurpose: ['Business Expansion', 'Debt Consolidation', 'Personal Needs', 'Children\'s Education', 'Medical Emergency', 'Property Purchase'],
    applicationProcess: [
      'Get property valuation done',
      'Prepare complete property documents',
      'Apply at bank/NBFC',
      'Bank conducts legal and technical verification',
      'Credit assessment and underwriting',
      'Approval and sanction',
      'Property registration (if required)',
      'Disbursement'
    ],
    bankCheckingPoints: [
      'Property title and legal clearance',
      'Property valuation and market price',
      'Encumbrance check',
      'CIBIL and credit history',
      'Repayment capacity (FOIR)',
      'Income stability'
    ],
    approvalFactors: [
      'Clear property title',
      'High property valuation',
      'CIBIL score 650+',
      'Stable income source',
      'Low existing debt',
      'Good property location'
    ],
    commonRejectionReasons: [
      'Unclear property title',
      'Property under dispute',
      'Valuation below bank threshold',
      'CIBIL below 550',
      'Insulin income proof',
      'High existing debt-to-income ratio'
    ],
    consultantExplanation: 'Loan Against Property (LAP) secured loan hai jo residential ya commercial property ke against milta hai. Interest rates low hain (7-11%) aur loan amount ₹5 Crore tak ho sakti hai. Property title clear hona bahut important hai.',
    customerPitch: 'Loan Against Property se aapko ₹5 Crore tak ka loan mil sakta hai, aur interest rate sirf 7-11% hai. Property ke against secured loan hai, isliye amount bhi achi milti hai. Property title clear hona chahiye.'
  },

  // =============================================================
  // 9. PERSONAL LOAN
  // =============================================================
  {
    id: 'PL001',
    loanName: 'Personal Loan',
    category: 'Unsecured Personal Funding',
    whatIsIt: 'Unsecured loan for personal needs like education, medical, travel, home renovation, or debt consolidation. No collateral required.',
    suitableFor: 'Salaried individuals, self-employed professionals, and business owners with regular income.',
    customerProfile: [
      'Salaried employee with 2+ years experience',
      'Self-employed professional (CA, doctor, consultant)',
      'Business owner with regular income',
      'Individuals needing quick funding'
    ],
    businessType: ['All sectors (for business owners)'],
    minimumBusinessAge: 'No minimum (for salaried)',
    eligibilityCriteria: [
      'Age 21-60 years',
      'Stable income source (salary/business)',
      'CIBIL score 650+',
      'No major defaults',
      'Working 2+ years (salaried) or business vintage 2+ years'
    ],
    incomeRequirement: 'Minimum monthly income ₹15,000 (salaried) or ₹20,000 (business)',
    turnoverRequirement: 'Not mandatory (for business owners)',
    cibilRequirement: 'CIBIL 650+',
    loanAmountRange: '₹50,000 to ₹20 Lakh (higher for high income individuals)',
    interestInformation: 'Approx 10% to 18% p.a.',
    tenureInformation: '1 to 5 years',
    collateralRequirement: 'No collateral required',
    documentsRequired: [
      'Aadhaar, PAN',
      'ITR (last 2 years) / Salary Slips (last 3 months)',
      'Bank Statements (last 6 months)',
      'Identity and Address Proof',
      'Business Proof (if self-employed)'
    ],
    loanPurpose: ['Emergency', 'Medical', 'Education', 'Travel', 'Home Renovation', 'Debt Consolidation', 'Wedding'],
    applicationProcess: [
      'Check CIBIL score online',
      'Apply online or visit bank branch',
      'Submit documents',
      'Instant verification (online)',
      'Credit assessment',
      'Approval and disbursement (within 24-48 hours)'
    ],
    bankCheckingPoints: [
      'CIBIL score and credit history',
      'Income stability and source',
      'Existing debt burden (FOIR)',
      'Employment/business stability',
      'Bank statement transactions'
    ],
    approvalFactors: [
      'CIBIL score 700+',
      'Stable income (3+ years)',
      'Low existing debt',
      'High income vs EMI',
      'Good credit utilization ratio'
    ],
    commonRejectionReasons: [
      'CIBIL below 650',
      'Unstable income source',
      'High existing debt burden',
      'Low income vs loan amount',
      'Recent defaults',
      'Incomplete documentation'
    ],
    consultantExplanation: 'Personal Loan unsecured loan hai, isliye collateral ki zarurat nahi hai. Salary ya business income proof necessary hai. CIBIL score 650+ hona chahiye. Interest rate 10-18% hai aur amount ₹20 Lakh tak mil sakti hai.',
    customerPitch: 'Personal Loan se aapko ₹20 Lakh tak unsecured funding milti hai. Medical, education, travel, ya debt consolidation ke liye best hai. CIBIL score 650+ hona chahiye aur income stable honi chahiye.'
  },

  // =============================================================
  // 10. HOME LOAN
  // =============================================================
  {
    id: 'HL001',
    loanName: 'Home Loan',
    category: 'Secured Property Loan',
    whatIsIt: 'Long term loan for purchase, construction, renovation, or balance transfer of residential property.',
    suitableFor: 'Individuals and families purchasing or constructing a home.',
    customerProfile: [
      'Salaried employee with 3+ years experience',
      'Self-employed professional with 3+ years',
      'Business owner with 3+ years vintage',
      'Individuals buying first home or upgrading'
    ],
    businessType: ['All sectors (for business owners)'],
    minimumBusinessAge: '3 years (for business owners)',
    eligibilityCriteria: [
      'Age 21-65 years (at loan maturity)',
      'Stable income (3+ years)',
      'CIBIL score 650+ (preferred 700+)',
      'Property documents clear',
      'No major payment defaults'
    ],
    incomeRequirement: 'Minimum monthly income ₹25,000 (salaried) or ₹30,000 (business)',
    turnoverRequirement: 'Annual turnover ₹10 Lakh+ (for business)',
    cibilRequirement: 'CIBIL 650+ (preferred 700+)',
    loanAmountRange: '₹5 Lakh to ₹5 Crore (up to 80-90% of property value)',
    interestInformation: 'Approx 6.5% to 10% p.a. (floating rates)',
    tenureInformation: '5 to 30 years',
    collateralRequirement: 'The property itself acts as primary security',
    documentsRequired: [
      'Property Documents (sale deed, title, etc.)',
      'Aadhaar, PAN',
      'ITR (last 3 years)',
      'Bank Statements (last 12 months)',
      'Salary Slips (last 3 months) / Business Proof',
      'Financial Statements (for business)',
      'Construction/Balance Transfer documents (if applicable)'
    ],
    loanPurpose: ['Property Purchase', 'Home Construction', 'Home Renovation', 'Balance Transfer', 'Plot Purchase'],
    applicationProcess: [
      'Property identification and valuation',
      'Complete documentation',
      'Apply at bank',
      'Bank conducts legal and technical verification',
      'Credit assessment and underwriting',
      'Sanction letter',
      'Property registration (if required)',
      'Disbursement (staged for construction)'
    ],
    bankCheckingPoints: [
      'Property legal title and clearance',
      'Property valuation',
      'CIBIL and credit history',
      'Income stability and FOIR',
      'Construction progress (for under-construction)',
      'Property location and amenities'
    ],
    approvalFactors: [
      'Clear property title',
      'CIBIL score 700+',
      'Stable income (5+ years)',
      'Low existing debt burden',
      'High property valuation',
      'Good property location'
    ],
    commonRejectionReasons: [
      'Unclear property title',
      'CIBIL below 650',
      'Property under dispute',
      'Unstable income',
      'High existing debt',
      'Low property valuation'
    ],
    consultantExplanation: 'Home Loan property purchase ya construction ke liye long term loan hai. 30 years tak ka tenure ho sakta hai aur interest rate 6.5-10% hai. Property title clear hona mandatory hai. CIBIL score 650+ chahiye.',
    customerPitch: 'Home Loan se aapko 30 years tak ka loan mil sakta hai, interest rate 6.5-10% hai. Property purchase, construction, ya balance transfer ke liye best hai. Property title clear hona chahiye aur CIBIL score 650+ hona chahiye.'
  },

  // =============================================================
  // 11. VEHICLE LOAN
  // =============================================================
  {
    id: 'VL001',
    loanName: 'Vehicle Loan',
    category: 'Asset Funding',
    whatIsIt: 'Loan for purchase of commercial or personal vehicles. The vehicle acts as primary security.',
    suitableFor: 'Businesses needing commercial vehicles, individuals purchasing personal vehicles.',
    customerProfile: [
      'Business owners needing commercial vehicles',
      'Logistics and transport operators',
      'Salaried individuals for personal vehicle',
      'Self-employed professionals'
    ],
    businessType: ['Transport', 'Logistics', 'Manufacturing', 'Trading', 'Service', 'Agriculture'],
    minimumBusinessAge: '1 year (for commercial vehicle)',
    eligibilityCriteria: [
      'Age 21-65 years',
      'Valid driving license',
      'CIBIL score 600+ (preferred 650+)',
      'Income proof for repayment',
      'Commercial vehicle: business proof required'
    ],
    incomeRequirement: 'Minimum monthly income ₹20,000 (salaried) or ₹25,000 (business)',
    turnoverRequirement: 'Annual turnover ₹5 Lakh+ (for commercial vehicle)',
    cibilRequirement: 'CIBIL 600+ (preferred 650+)',
    loanAmountRange: '₹1 Lakh to ₹50 Lakh (up to 80-90% of vehicle value)',
    interestInformation: 'Approx 7% to 12% p.a.',
    tenureInformation: '3 to 7 years',
    collateralRequirement: 'The vehicle itself acts as primary security',
    documentsRequired: [
      'Vehicle Quotation',
      'Driving License',
      'Aadhaar, PAN',
      'ITR (last 2 years) / Salary Slips',
      'Bank Statements (last 6 months)',
      'Business Proof (for commercial)'
    ],
    loanPurpose: ['Commercial Vehicle Purchase', 'Personal Vehicle Purchase', 'Fleet Expansion'],
    applicationProcess: [
      'Select vehicle and get quotation',
      'Apply with bank/NBFC',
      'Bank verifies quotation and income',
      'Credit assessment',
      'Approval and disbursement (often direct to dealer)'
    ],
    bankCheckingPoints: [
      'Vehicle dealer credibility',
      'Vehicle model and market value',
      'CIBIL and credit history',
      'Income and repayment capacity',
      'Business requirement (for commercial)'
    ],
    approvalFactors: [
      'Reputed vehicle dealer',
      'CIBIL score 650+',
      'Stable income source',
      'Low existing debt',
      'Clear business need for commercial vehicle'
    ],
    commonRejectionReasons: [
      'CIBIL below 600',
      'Unstable income',
      'High existing debt',
      'No valid driving license',
      'Incomplete documentation'
    ],
    consultantExplanation: 'Vehicle Loan commercial ya personal vehicle purchase ke liye hai. Vehicle khud security ban jaati hai. 80-90% on-road price tak loan mil sakta hai. Interest rate 7-12% hai aur tenure 3-7 years ka hai.',
    customerPitch: 'Vehicle Loan se aapko 80-90% vehicle value tak loan milta hai. Commercial vehicle, personal vehicle, ya fleet expansion ke liye best hai. Vehicle dealership quotation aur valid driving license required hai.'
  },

  // =============================================================
  // 12. STARTUP LOAN
  // =============================================================
  {
    id: 'SL001',
    loanName: 'Startup Loan',
    category: 'New Business Funding',
    whatIsIt: 'Specialized loan for new businesses, startups, and early-stage companies. May include equity funding or convertible loans.',
    suitableFor: 'New business owners, innovative startups, and entrepreneurs with scalable business models.',
    customerProfile: [
      'First-time entrepreneurs',
      'Innovative tech startups',
      'Business with scalable model',
      'DPIIT recognized startups (preferred)'
    ],
    businessType: ['Technology', 'Manufacturing', 'Service', 'Food Processing', 'Agritech', 'Fintech', 'Edtech', 'Healthcare'],
    minimumBusinessAge: '0-2 years (new business)',
    eligibilityCriteria: [
      'Innovative business idea',
      'Scalable business model',
      'Strong business plan',
      'CIBIL score 600+ (personal)',
      'DPIIT recognition preferred'
    ],
    incomeRequirement: 'Business plan with clear revenue projections',
    turnoverRequirement: 'Projected turnover as per business plan',
    cibilRequirement: 'CIBIL 600+ (personal credit score)',
    loanAmountRange: '₹2 Lakh to ₹2 Crore (based on business plan and stage)',
    interestInformation: 'Approx 8% to 16% p.a. (some government schemes have 0% interest)',
    tenureInformation: '1 to 5 years',
    collateralRequirement: 'CGTMSE guarantee available (no collateral up to ₹50 Lakh)',
    documentsRequired: [
      'Detailed Business Plan',
      'Financial Projections (3-5 years)',
      'Aadhaar, PAN',
      'Bank Account Details',
      'DPIIT Recognition (if applicable)',
      'Innovation/Patent Proof (if any)',
      'Business Model Canvas'
    ],
    loanPurpose: ['Business Setup', 'Prototype Development', 'Product Launch', 'Market Entry', 'Working Capital'],
    applicationProcess: [
      'Develop strong business plan and pitch deck',
      'Register on Startup India portal (if applicable)',
      'Apply at bank or through incubator',
      'Business plan presentation and evaluation',
      'Credit assessment (personal and business)',
      'Approval and disbursement (staged based on milestones)'
    ],
    bankCheckingPoints: [
      'Business plan viability',
      'Market potential and competition',
      'Promoter\'s background and experience',
      'Innovation and scalability',
      'Financial projections realism',
      'Personal CIBIL score'
    ],
    approvalFactors: [
      'Strong business plan',
      'Scalable and innovative model',
      'Promoter\'s domain expertise',
      'DPIIT recognition',
      'Clear revenue model',
      'Incubator backing'
    ],
    commonRejectionReasons: [
      'Unclear business model',
      'No innovation or scalability',
      'Weak financial projections',
      'Promoter no domain experience',
      'Low personal CIBIL score',
      'No DPIIT recognition (for certain schemes)'
    ],
    consultantExplanation: 'Startup Loan new business owners ke liye special hai. Business plan strong hona chahiye aur revenue model clear hona chahiye. DPIIT recognition se government schemes ka benefit milta hai. CGTMSE guarantee se collateral-free loan mil sakta hai.',
    customerPitch: 'Startup Loan se aapko ₹2 Crore tak funding milti hai new business ke liye. Business plan strong hona chahiye aur idea innovative hona chahiye. DPIIT recognition se government benefits bhi milte hain. Scalable business model matter karta hai.'
  }
];

// ================================================================
// HELPER FUNCTIONS
// ================================================================

function searchLoanProduct(keyword) {
  if (!keyword || keyword.trim() === '') return loanProducts;
  const term = keyword.toLowerCase().trim();
  return loanProducts.filter(loan => {
    return loan.loanName.toLowerCase().includes(term) ||
           loan.whatIsIt.toLowerCase().includes(term) ||
           loan.category.toLowerCase().includes(term) ||
           loan.suitableFor.toLowerCase().includes(term) ||
           loan.businessType.some(biz => biz.toLowerCase().includes(term)) ||
           loan.eligibilityCriteria.some(crit => crit.toLowerCase().includes(term)) ||
           loan.loanPurpose.some(p => p.toLowerCase().includes(term));
  });
}

function getLoanByCategory(category) {
  if (!category || category.trim() === '') return loanProducts;
  return loanProducts.filter(loan =>
    loan.category.toLowerCase().includes(category.toLowerCase().trim())
  );
}

function getLoanByBusinessType(businessType) {
  if (!businessType || businessType.trim() === '') return loanProducts;
  const term = businessType.toLowerCase().trim();
  return loanProducts.filter(loan =>
    loan.businessType.some(biz => biz.toLowerCase().includes(term))
  );
}

function getLoanById(id) {
  return loanProducts.find(loan => loan.id === id) || null;
}

function getAllCategories() {
  const categories = new Set(loanProducts.map(l => l.category));
  return Array.from(categories).sort();
}

function getAllBusinessTypes() {
  const types = new Set();
  loanProducts.forEach(l => l.businessType.forEach(b => types.add(b)));
  return Array.from(types).sort();
}

function compareLoanProducts(type) {
  const results = [];
  const keyword = type.toLowerCase().trim();
  
  // Business type comparison
  const byBusiness = loanProducts.filter(l =>
    l.businessType.some(biz => biz.toLowerCase().includes(keyword))
  );
  
  // Purpose comparison
  const byPurpose = loanProducts.filter(l =>
    l.loanPurpose.some(p => p.toLowerCase().includes(keyword))
  );
  
  // Category comparison
  const byCategory = loanProducts.filter(l =>
    l.category.toLowerCase().includes(keyword)
  );
  
  // Combine and deduplicate
  const combined = [...byBusiness, ...byPurpose, ...byCategory];
  const unique = [];
  const ids = new Set();
  combined.forEach(loan => {
    if (!ids.has(loan.id)) {
      ids.add(loan.id);
      unique.push(loan);
    }
  });
  
  return unique;
}

// Consultant guidance for common scenarios
function getLoanRecommendation(scenario) {
  const scenarios = {
    'stock purchase': ['Working Capital Loan', 'Cash Credit', 'Business Loan'],
    'machinery': ['Machinery Loan', 'Term Loan', 'Business Loan'],
    'expansion': ['Term Loan', 'Business Loan', 'MSME Business Loan'],
    'daily operations': ['Working Capital Loan', 'Overdraft', 'Cash Credit'],
    'new business': ['Startup Loan', 'Business Loan', 'MSME Business Loan'],
    'property': ['Loan Against Property', 'Home Loan', 'Term Loan'],
    'emergency': ['Personal Loan', 'Overdraft', 'Business Loan'],
    'salary': ['Working Capital Loan', 'Overdraft', 'Cash Credit'],
    'technology': ['Technology Loan', 'Business Loan', 'Term Loan'],
    'export': ['Export Loan', 'Working Capital Loan', 'Business Loan']
  };
  
  const lowerScenario = scenario.toLowerCase();
  for (const [key, value] of Object.entries(scenarios)) {
    if (lowerScenario.includes(key)) {
      return value.map(name => loanProducts.find(l => l.loanName === name)).filter(Boolean);
    }
  }
  
  // Default recommendation
  return [loanProducts.find(l => l.loanName === 'Business Loan')].filter(Boolean);
}

// ================================================================
// EXPORT
// ================================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    loanProducts,
    searchLoanProduct,
    getLoanByCategory,
    getLoanByBusinessType,
    getLoanById,
    getAllCategories,
    getAllBusinessTypes,
    compareLoanProducts,
    getLoanRecommendation
  };
}

// ================================================================
// USAGE NOTES:
// ================================================================
// 1. Search: searchLoanProduct('working capital') returns all working capital loans
// 2. Category: getLoanByCategory('Unsecured') returns all unsecured loans
// 3. Business Type: getLoanByBusinessType('Manufacturing') returns loans for manufacturing
// 4. Compare: compareLoanProducts('machinery') returns relevant loan options for machinery
// 5. Recommendation: getLoanRecommendation('stock purchase') returns loan suggestions
// 6. Interest rates are approximate and lender dependent
// 7. Always verify current rates and eligibility with specific banks/NBFCs
// ================================================================

console.log(`✅ Smile Financial Solutions - Loan Database Loaded`);
console.log(`📊 Total Loan Products: ${loanProducts.length}`);
console.log(`📂 Categories: ${getAllCategories().join(', ')}`);
console.log(`🏢 Business Types: ${getAllBusinessTypes().slice(0, 10).join(', ')}...`);
console.log(`💡 Use searchLoanProduct(), getLoanByCategory(), compareLoanProducts()`);
console.log(`💡 Use getLoanRecommendation('stock purchase') for scenario-based recommendations`);
