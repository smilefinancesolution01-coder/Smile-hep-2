// ================================================================
// SMILE FINANCIAL SOLUTION - AI FUNDING CONSULTANT
// Government Schemes Database (schemes.js)
// Version 1.0 | Authentic Indian Government Schemes
// ================================================================
// NOTE: Benefits, eligibility, and interest rates depend on 
// current government guidelines. Please verify from official 
// portals before advising customers.
// ================================================================

const schemes = [
  // =============================================================
  // 1. STARTUP INDIA SEED FUND SCHEME
  // =============================================================
  {
    id: 'SISF001',
    schemeName: 'Startup India Seed Fund Scheme',
    launchYear: 2021,
    ministry: 'Department for Promotion of Industry and Internal Trade (DPIIT)',
    category: 'Startup Funding',
    purpose: 'Financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialization.',
    suitableFor: 'Early-stage startups with innovative ideas, technology-driven ventures, and scalable business models.',
    entityType: 'Private Limited Company, LLP, Partnership, Sole Proprietorship (DPIIT recognized)',
    businessType: ['Technology', 'Manufacturing', 'Agritech', 'Healthtech', 'Fintech', 'Edtech', 'Cleantech', 'Logistics', 'Consumer Products', 'SaaS'],
    eligibility: 'DPIIT recognized startup, incorporated within 2-5 years, innovative product/service, scalable business model.',
    businessAge: '0-5 years',
    fundingType: 'Equity, Convertible Debentures, Grants, Debt',
    maximumFunding: '₹5 Crore (maximum ₹50 Lakh per startup)',
    loanDetails: 'Interest-free debt (convertible) with 0% interest',
    subsidyDetails: 'Grant up to ₹50 Lakh for selected startups',
    grantDetails: 'Up to ₹50 Lakh as grant for prototyping and product development',
    interestInformation: '0% interest on debt component (convertible)',
    repaymentTenure: 'Flexible, based on milestones',
    collateralInformation: 'No collateral required',
    documentsRequired: [
      'DPIIT Recognition Certificate',
      'Incorporation Certificate',
      'Detailed Business Plan',
      'Financial Projections (3-5 years)',
      'Pitch Deck',
      'Innovation Proof (patent/IP details)',
      'Bank Account Details'
    ],
    applicationProcess: 'Apply through Startup India portal → Incubator/accelerator evaluation → Expert committee review → Approval and disbursement',
    approvalProcess: 'Incubator evaluation → Expert committee recommendation → DPIIT approval → Funds disbursed in tranches based on milestones',
    commonRejectionReasons: [
      'No DPIIT recognition',
      'Lack of innovation/novelty',
      'Weak business model',
      'Incomplete documentation',
      'Not scalable',
      'No market validation'
    ],
    consultantNotes: 'This is excellent for first-time entrepreneurs. Ensure DPIIT recognition before applying. Connect with a recognized incubator for better chances.',
    customerPitch: 'Startup India Seed Fund Scheme se aapko ₹50 Lakh tak ki grant aur interest-free funding mil sakti hai. Agar aapka idea innovative hai toh yeh scheme aapke liye perfect hai.',
    officialPortal: 'www.startupindia.gov.in'
  },

  // =============================================================
  // 2. PMEGP (PRIME MINISTER'S EMPLOYMENT GENERATION PROGRAMME)
  // =============================================================
  {
    id: 'PMEGP001',
    schemeName: 'Prime Minister\'s Employment Generation Programme (PMEGP)',
    launchYear: 2008,
    ministry: 'Ministry of MSME',
    category: 'Micro Enterprise',
    purpose: 'Generate employment opportunities by establishing micro-enterprises in rural and urban areas.',
    suitableFor: 'Individuals, entrepreneurs, SHGs, cooperatives, and trusts wanting to start manufacturing or service micro-enterprises.',
    entityType: 'Individual, SHG, Cooperative, Trust, Partnership, Private Limited',
    businessType: ['Manufacturing', 'Service', 'Food Processing', 'Handicrafts', 'Agro-based', 'IT/ITES'],
    eligibility: 'Any Indian citizen, 18+ years, minimum 8th pass (for manufacturing), 10th pass (for service). No income limit.',
    businessAge: 'New Business (0-3 years)',
    fundingType: 'Term Loan, Subsidy',
    maximumFunding: '₹25 Lakh (Manufacturing) | ₹10 Lakh (Service)',
    loanDetails: 'Margin money subsidy 15% to 35% (rural: 25-35%, urban: 15-25%)',
    subsidyDetails: '15-35% margin money subsidy (depends on category and location)',
    grantDetails: 'N/A (Subsidy only)',
    interestInformation: 'Bank rate as applicable (8-12% p.a.)',
    repaymentTenure: '3-7 years',
    collateralInformation: 'No collateral required for projects up to ₹25 Lakh',
    documentsRequired: [
      'Aadhaar Card',
      'PAN Card',
      'Educational Certificates',
      'Caste Certificate (if applicable)',
      'Project Report/Detailed Project Report',
      'Business Plan',
      'Bank Account Details'
    ],
    applicationProcess: 'Apply online through PMEGP portal → District Task Force Committee (DTFC) verification → Bank loan processing → Disbursement',
    approvalProcess: 'DTFC screening → Project viability assessment → Bank appraisal → Loan sanction and subsidy release',
    commonRejectionReasons: [
      'Incomplete project report',
      'Non-viable business idea',
      'Lack of technical feasibility',
      'Age/education criteria not met',
      'Wrong category selection'
    ],
    consultantNotes: 'Best scheme for first-time entrepreneurs. Margin money subsidy reduces your own investment. Manufacturing projects get more subsidy.',
    customerPitch: 'PMEGP scheme ke under aapko 15% se 35% tak subsidy milti hai. Agar aap manufacturing ya service business start karna chahte hain toh yeh scheme aapke liye best hai.',
    officialPortal: 'www.pmegp.in'
  },

  // =============================================================
  // 3. PRADHAN MANTRI MUDRA YOJANA (PMMY)
  // =============================================================
  {
    id: 'PMMY001',
    schemeName: 'Pradhan Mantri Mudra Yojana (PMMY)',
    launchYear: 2015,
    ministry: 'Ministry of Finance',
    category: 'Micro Finance',
    purpose: 'Provide collateral-free loans to micro and small enterprises for income-generating activities.',
    suitableFor: 'Small business owners, street vendors, artisans, small traders, self-employed individuals.',
    entityType: 'Individual, Sole Proprietorship, Partnership, Private Limited',
    businessType: ['Retail', 'Trading', 'Service', 'Manufacturing', 'Agriculture', 'Dairy', 'Food Processing', 'Handicrafts', 'Transport', 'Tourism'],
    eligibility: 'Any Indian citizen with a business plan, 18+ years, no prior default history.',
    businessAge: 'New Business to 5+ Years',
    fundingType: 'Term Loan, Working Capital',
    maximumFunding: '₹10 Lakh (Shishu: ₹50,000, Kishor: ₹50,000 to ₹5 Lakh, Tarun: ₹5 Lakh to ₹10 Lakh)',
    loanDetails: 'Collateral-free loans with flexible repayment',
    subsidyDetails: 'N/A (Interest subvention for certain categories)',
    grantDetails: 'N/A',
    interestInformation: '8-14% p.a. (depending on bank and category)',
    repaymentTenure: '1-5 years',
    collateralInformation: 'No collateral required',
    documentsRequired: [
      'Aadhaar Card',
      'PAN Card',
      'Business Plan',
      'Bank Account Details',
      'Proof of Business Activity',
      'Photograph'
    ],
    applicationProcess: 'Visit any bank/NBFC → Submit application + documents → Bank assessment → Loan approval → Disbursement',
    approvalProcess: 'Bank verification → Credit assessment → Approval based on CIBIL and business viability → Funds disbursed',
    commonRejectionReasons: [
      'Poor CIBIL score',
      'Insufficient business proof',
      'Unclear repayment source',
      'Previous default history',
      'Incomplete application'
    ],
    consultantNotes: 'Most popular scheme for small businesses. Shishu (up to ₹50K) is easiest to get. Tarun (up to ₹10L) needs better business proof.',
    customerPitch: 'Mudra Yojana ke under aapko ₹10 Lakh tak ka collateral-free loan mil sakta hai. Shishu, Kishor aur Tarun - teen categories hain. Aapki requirement ke hisaab se loan le sakte hain.',
    officialPortal: 'www.mudra.org.in'
  },

  // =============================================================
  // 4. PM FORMALISATION OF MICRO FOOD PROCESSING ENTERPRISES (PMFME)
  // =============================================================
  {
    id: 'PMFME001',
    schemeName: 'PM Formalisation of Micro Food Processing Enterprises (PMFME)',
    launchYear: 2020,
    ministry: 'Ministry of Food Processing Industries',
    category: 'Food Processing',
    purpose: 'Support micro food processing enterprises for formalization, technology upgradation, and market access.',
    suitableFor: 'Existing and new food processing micro-enterprises, farmer producer organizations (FPOs), SHGs, cooperatives.',
    entityType: 'Individual, SHG, FPO, Cooperative, Partnership, Private Limited',
    businessType: ['Food Processing', 'Agro-processing', 'Dairy', 'Bakery', 'Spice Processing', 'Fruit & Vegetable Processing', 'Poultry', 'Fisheries'],
    eligibility: 'Micro food processing enterprises, 5+ workers, investment up to ₹2 Crore, must be a food business operator.',
    businessAge: '0-10 years',
    fundingType: 'Term Loan, Grant, Subsidy',
    maximumFunding: '₹10 Lakh (Seed capital), ₹1 Crore (Infrastructure)',
    loanDetails: 'Credit-linked subsidy up to 35% of project cost',
    subsidyDetails: '35% credit-linked subsidy (up to ₹10 Lakh per unit)',
    grantDetails: '₹10 Lakh seed capital for FPOs/SHGs',
    interestInformation: 'As per bank rate (7-11% p.a.)',
    repaymentTenure: '3-7 years',
    collateralInformation: 'As per bank policy (CGTMSE available)',
    documentsRequired: [
      'FSSAI License/Registration',
      'Business Plan',
      'Project Report',
      'Bank Account Details',
      'Aadhaar, PAN',
      'Land/Lease Document',
      'Machinery Quotations'
    ],
    applicationProcess: 'Apply through PMFME portal → District level screening → Bank processing → Subsidy release post project completion',
    approvalProcess: 'District committee evaluation → Project viability check → Bank approval → Subsidy disbursement',
    commonRejectionReasons: [
      'No FSSAI license',
      'Unviable business model',
      'Incomplete project report',
      'Location constraints',
      'Environmental clearance issues'
    ],
    consultantNotes: 'Food processing is a priority sector. FSSAI registration is mandatory. Scheme also offers technical support and training.',
    customerPitch: 'PMFME scheme se aapko 35% subsidy milti hai food processing business ke liye. FSSAI registration hai toh aap is scheme ka benefit le sakte hain.',
    officialPortal: 'www.pmfme.mofpi.gov.in'
  },

  // =============================================================
  // 5. CGTMSE CREDIT GUARANTEE SCHEME
  // =============================================================
  {
    id: 'CGTMSE001',
    schemeName: 'Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)',
    launchYear: 2000,
    ministry: 'Ministry of MSME',
    category: 'Credit Guarantee',
    purpose: 'Provide credit guarantee to banks for collateral-free lending to MSMEs.',
    suitableFor: 'New and existing MSMEs requiring loans without collateral.',
    entityType: 'Individual, Partnership, Private Limited, LLP, Cooperative',
    businessType: ['Manufacturing', 'Service', 'Trading', 'Food Processing', 'Agriculture', 'IT', 'Healthcare'],
    eligibility: 'MSMEs with Udyam Registration, credit facilities up to ₹2 Crore.',
    businessAge: '0-15 years',
    fundingType: 'Term Loan, Working Capital, Cash Credit, Overdraft',
    maximumFunding: '₹2 Crore (85% guarantee for micro enterprises)',
    loanDetails: 'Loan amount guaranteed by CGTMSE',
    subsidyDetails: 'N/A (Guarantee cover)',
    grantDetails: 'N/A',
    interestInformation: 'As per bank rates (8-14% p.a.)',
    repaymentTenure: '1-5 years (working capital) | 3-7 years (term loan)',
    collateralInformation: 'No collateral required (covered by CGTMSE)',
    documentsRequired: [
      'Udyam Registration Certificate',
      'Business Plan',
      'Financial Statements (last 2 years)',
      'Bank Statements',
      'GST Registration',
      'ITR (if applicable)'
    ],
    applicationProcess: 'Apply at any bank → Bank applies for CGTMSE guarantee → Loan approval → Disbursement',
    approvalProcess: 'Bank assessment → CGTMSE coverage approval → Loan sanction → Disbursement',
    commonRejectionReasons: [
      'No Udyam registration',
      'Poor credit history',
      'Unclear business viability',
      'Insufficient business vintage',
      'High industry risk'
    ],
    consultantNotes: 'This is not a loan scheme but a guarantee scheme. Always encourage customers to get Udyam registration first.',
    customerPitch: 'CGTMSE guarantee scheme ke under aapko collateral-free loan mil sakta hai ₹2 Crore tak. Bank ko government guarantee milti hai, isliye bank aasani se loan de dete hain.',
    officialPortal: 'www.cgtmse.in'
  },

  // =============================================================
  // 6. STAND-UP INDIA
  // =============================================================
  {
    id: 'SUI001',
    schemeName: 'Stand-Up India',
    launchYear: 2016,
    ministry: 'Ministry of Finance',
    category: 'Women & SC/ST Entrepreneurship',
    purpose: 'Promote entrepreneurship among SC/ST and women by providing bank loans for greenfield projects.',
    suitableFor: 'SC/ST entrepreneurs and women entrepreneurs starting a new business.',
    entityType: 'Individual, Partnership, Private Limited, LLP',
    businessType: ['Manufacturing', 'Trading', 'Service', 'Food Processing', 'Textile', 'Handicrafts', 'IT/ITES'],
    eligibility: 'SC/ST or Woman entrepreneur, 18+ years, new enterprise (greenfield), loan amount ₹10 Lakh to ₹1 Crore.',
    businessAge: 'New Business (Greenfield)',
    fundingType: 'Term Loan, Working Capital',
    maximumFunding: '₹1 Crore',
    loanDetails: 'Composite loan including term loan and working capital',
    subsidyDetails: 'N/A (Interest subvention may apply)',
    grantDetails: 'N/A',
    interestInformation: 'As per bank rates (8-12% p.a.)',
    repaymentTenure: '3-7 years',
    collateralInformation: 'CGTMSE guarantee available for collateral-free loans',
    documentsRequired: [
      'Caste Certificate (SC/ST)',
      'Business Plan/Project Report',
      'Educational Certificates',
      'Bank Account Details',
      'Aadhaar, PAN',
      'Photograph'
    ],
    applicationProcess: 'Apply at any scheduled commercial bank → Project appraisal → Loan sanction → Disbursement',
    approvalProcess: 'Bank appraisal → Credit assessment → Approval → Disbursement in tranches',
    commonRejectionReasons: [
      'Not a greenfield project',
      'Ineligible category',
      'Weak project viability',
      'Incomplete documentation',
      'No business experience'
    ],
    consultantNotes: 'Great scheme for SC/ST and women. Greenfield means new business, not expansion. Loan amount is composite – covers both capex and working capital.',
    customerPitch: 'Stand-Up India scheme SC/ST aur women entrepreneurs ke liye hai. ₹10 Lakh se ₹1 Crore tak ka loan mil sakta hai. Business naya hona chahiye (greenfield).',
    officialPortal: 'www.standupmitra.in'
  },

  // =============================================================
  // 7. PM VISHWAKARMA SCHEME
  // =============================================================
  {
    id: 'PMV001',
    schemeName: 'PM Vishwakarma Scheme',
    launchYear: 2023,
    ministry: 'Ministry of MSME',
    category: 'Artisan & Traditional Crafts',
    purpose: 'Support traditional artisans and craftsmen with recognition, skill upgradation, and financial support.',
    suitableFor: 'Traditional artisans, craftsmen, and workers in 18 identified trades.',
    entityType: 'Individual, SHG, Cooperative',
    businessType: ['Handicrafts', 'Handloom', 'Pottery', 'Carpentry', 'Cobbling', 'Metalwork', 'Weaving', 'Tailoring', 'Bamboo Work', 'Stone Carving'],
    eligibility: 'Traditional artisans/craftsmen, 18+ years, engaged in one of 18 identified trades, family income < ₹1 Lakh/month.',
    businessAge: '0-15 years',
    fundingType: 'Term Loan, Subsidy, Grant',
    maximumFunding: '₹2 Lakh (₹1 Lakh + ₹1 Lakh)',
    loanDetails: 'Two tranches: ₹1 Lakh (0% interest) + ₹1 Lakh (5% interest)',
    subsidyDetails: '8% interest subsidy on the second tranche',
    grantDetails: '₹15,000 for tool kit purchase',
    interestInformation: 'First tranche: 0%, Second: 5% (effective after subsidy)',
    repaymentTenure: '3-5 years',
    collateralInformation: 'No collateral required',
    documentsRequired: [
      'Aadhaar Card',
      'Bank Account Details',
      'Proof of traditional trade',
      'Photograph',
      'Family income certificate'
    ],
    applicationProcess: 'Apply at Common Service Centre (CSC) or PM Vishwakarma portal → Recognition certificate → Training → Loan application → Disbursement',
    approvalProcess: 'Recognition verification → Training completion → Bank loan approval → Disbursement',
    commonRejectionReasons: [
      'Not in listed trades',
      'Income criteria not met',
      'Insufficient proof of traditional craft',
      'Incomplete application'
    ],
    consultantNotes: 'New scheme with 0% interest loan. Ensure customer is in one of the 18 recognized trades. Toolkit grant is additional benefit.',
    customerPitch: 'PM Vishwakarma scheme se aapko ₹2 Lakh tak ka loan milta hai, jisme pehla ₹1 Lakh 0% interest par hai. Sath mein ₹15,000 toolkit grant bhi milti hai.',
    officialPortal: 'www.pmvishwakarma.gov.in'
  },

  // =============================================================
  // 8. AGRICULTURE INFRASTRUCTURE FUND (AIF)
  // =============================================================
  {
    id: 'AIF001',
    schemeName: 'Agriculture Infrastructure Fund (AIF)',
    launchYear: 2020,
    ministry: 'Ministry of Agriculture and Farmers Welfare',
    category: 'Agriculture Infrastructure',
    purpose: 'Create post-harvest agricultural infrastructure and community farming assets.',
    suitableFor: 'Farmers, FPOs, Agri-entrepreneurs, SHGs, startups, cooperatives, PACS.',
    entityType: 'Individual, FPO, SHG, Cooperative, Partnership, Private Limited',
    businessType: ['Agri-infrastructure', 'Cold Storage', 'Warehousing', 'Packaging', 'Processing', 'Supply Chain', 'Agri-logistics'],
    eligibility: 'Projects related to agriculture infrastructure, primary processing, and supply chain.',
    businessAge: '0-10 years',
    fundingType: 'Term Loan, Interest Subvention',
    maximumFunding: '₹2 Crore (individual), ₹5 Crore (FPO/cooperative)',
    loanDetails: 'Interest subvention of 3% per annum (up to 7 years)',
    subsidyDetails: '3% interest subvention for first 7 years',
    grantDetails: 'N/A (Interest subvention only)',
    interestInformation: 'Effective rate after subvention: 4-8% p.a.',
    repaymentTenure: '7-10 years (with moratorium)',
    collateralInformation: 'As per bank policy (CGTMSE available)',
    documentsRequired: [
      'Land documents',
      'Project Report with DPR',
      'Bank Account Details',
      'Aadhaar, PAN',
      'No Objection Certificate (if applicable)'
    ],
    applicationProcess: 'Apply through Agriculture Infrastructure Fund portal → Bank appraisal → Loan approval → Disbursement',
    approvalProcess: 'Project evaluation → Bank credit assessment → Scheme committee approval → Funds released',
    commonRejectionReasons: [
      'Non-agricultural project',
      'Incomplete DPR',
      'Land ownership issues',
      'Unclear project viability',
      'Environmental concerns'
    ],
    consultantNotes: 'Excellent for post-harvest infrastructure. Cold storage, warehousing, and processing units get priority. Interest subvention makes it affordable.',
    customerPitch: 'Agriculture Infrastructure Fund se aapko 3% interest subvention milti hai. Cold storage, godown, processing unit - aise projects ke liye ₹2 Crore tak loan mil sakta hai.',
    officialPortal: 'www.aif.mofpi.gov.in'
  },

  // =============================================================
  // 9. STARTUP INDIA RECOGNITION BENEFITS
  // =============================================================
  {
    id: 'SIR001',
    schemeName: 'Startup India Recognition Benefits',
    launchYear: 2016,
    ministry: 'DPIIT, Ministry of Commerce and Industry',
    category: 'Startup Ecosystem',
    purpose: 'Provide regulatory, tax, and funding benefits to recognized startups.',
    suitableFor: 'DPIIT recognized startups looking for tax benefits, funding access, and regulatory support.',
    entityType: 'Private Limited, LLP, Partnership, Sole Proprietorship',
    businessType: ['Any innovative sector (Technology, Healthcare, Agri, Fintech, Edtech, CleanTech, Logistics)'],
    eligibility: 'DPIIT recognized startup, innovative product/service, scalable, incorporated within 10 years.',
    businessAge: '0-10 years',
    fundingType: 'Tax Benefits, Funding Access, Regulatory Support',
    maximumFunding: 'N/A (Access to other schemes)',
    loanDetails: 'N/A',
    subsidyDetails: 'Tax exemption for 3 years, capital gains exemption, patent benefits',
    grantDetails: 'N/A',
    interestInformation: 'N/A',
    repaymentTenure: 'N/A',
    collateralInformation: 'N/A',
    documentsRequired: [
      'Incorporation Certificate',
      'DPIIT Recognition Certificate',
      'Brief Business Plan',
      'Innovation Proof'
    ],
    applicationProcess: 'Apply on Startup India portal → Self-certification → Recognition certificate issued',
    approvalProcess: 'Online verification → DPIIT recognition granted',
    commonRejectionReasons: [
      'No innovation',
      'Not scalable',
      'Incorporated more than 10 years ago',
      'Incomplete application'
    ],
    consultantNotes: 'This is not a funding scheme but a recognition that opens doors to multiple benefits. Always recommend DPIIT recognition first.',
    customerPitch: 'Startup India recognition se aapko tax benefits, funding access, aur regulatory support milti hai. Pehle DPIIT recognition lein, phir aap seed fund, patent benefits, aur incubator access le sakte hain.',
    officialPortal: 'www.startupindia.gov.in'
  },

  // =============================================================
  // 10. MSME CREDIT GUARANTEE RELATED SCHEMES
  // =============================================================
  {
    id: 'MSMECG001',
    schemeName: 'MSME Credit Guarantee Related Schemes (Various)',
    launchYear: 2020,
    ministry: 'Ministry of MSME',
    category: 'Credit Guarantee',
    purpose: 'Provide credit guarantee for MSME loans through various specialized schemes.',
    suitableFor: 'MSMEs needing credit guarantee cover for bank loans.',
    entityType: 'Individual, Partnership, Private Limited, LLP',
    businessType: ['Manufacturing', 'Service', 'Trading', 'Food Processing', 'IT', 'Healthcare'],
    eligibility: 'MSMEs with Udyam Registration, loan amount up to ₹5 Crore.',
    businessAge: '0-15 years',
    fundingType: 'Term Loan, Working Capital',
    maximumFunding: '₹5 Crore',
    loanDetails: 'Loans covered under credit guarantee schemes',
    subsidyDetails: 'N/A (Guarantee cover only)',
    grantDetails: 'N/A',
    interestInformation: 'As per bank rates (7-14% p.a.)',
    repaymentTenure: '1-5 years',
    collateralInformation: 'No collateral required (covered by guarantee)',
    documentsRequired: [
      'Udyam Registration',
      'Financial Statements',
      'Bank Statements',
      'GST Registration',
      'Business Plan'
    ],
    applicationProcess: 'Apply at any bank → Bank applies for credit guarantee → Loan approval',
    approvalProcess: 'Bank assessment → Guarantee application → Loan sanction',
    commonRejectionReasons: [
      'No Udyam registration',
      'Poor credit history',
      'Weak business model'
    ],
    consultantNotes: 'Multiple credit guarantee schemes exist under MSME. Always check the latest notification from SIDBI.',
    customerPitch: 'MSME credit guarantee schemes se aapko collateral-free loan ₹5 Crore tak mil sakta hai. Udyam registration mandatory hai.',
    officialPortal: 'www.sidbi.in'
  },

  // =============================================================
  // 11. CREDIT LINKED CAPITAL SUBSIDY SCHEMES
  // =============================================================
  {
    id: 'CLCSS001',
    schemeName: 'Credit Linked Capital Subsidy Scheme (CLCSS)',
    launchYear: 2000,
    ministry: 'Ministry of MSME',
    category: 'Technology Upgradation',
    purpose: 'Provide capital subsidy to MSMEs for technology upgradation and modernisation.',
    suitableFor: 'MSMEs upgrading technology, machinery, and processes.',
    entityType: 'Individual, Partnership, Private Limited, LLP',
    businessType: ['Manufacturing', 'Food Processing', 'Textile', 'Engineering', 'Chemicals', 'Auto Components'],
    eligibility: 'MSMEs with Udyam Registration, investment in approved machinery/technology.',
    businessAge: '1-15 years',
    fundingType: 'Term Loan, Capital Subsidy',
    maximumFunding: '₹1 Crore (15% subsidy on capital investment)',
    loanDetails: '15% capital subsidy on investment in eligible machinery',
    subsidyDetails: '15% capital subsidy (maximum ₹1 Crore)',
    grantDetails: 'N/A (Subsidy only)',
    interestInformation: 'As per bank rates (7-12% p.a.)',
    repaymentTenure: '3-7 years',
    collateralInformation: 'As per bank policy',
    documentsRequired: [
      'Udyam Registration',
      'Project Report',
      'Machinery Quotations',
      'Financial Statements',
      'Bank Account Details'
    ],
    applicationProcess: 'Apply at bank → Bank processes loan → Post project completion, subsidy claimed',
    approvalProcess: 'Bank appraisal → Subsidy approval from MSME department → Subsidy release',
    commonRejectionReasons: [
      'Ineligible machinery',
      'No Udyam registration',
      'Investment criteria not met',
      'Incomplete documentation'
    ],
    consultantNotes: 'Subsidy is available only on approved machinery and technology. Check the list of eligible machinery before planning.',
    customerPitch: 'CLCSS scheme se aapko 15% capital subsidy milti hai technology upgradation ke liye. ₹1 Crore tak subsidy le sakte hain.',
    officialPortal: 'www.dcmsme.gov.in'
  },

  // =============================================================
  // 12. NATIONAL LIVESTOCK MISSION RELATED SUPPORT
  // =============================================================
  {
    id: 'NLM001',
    schemeName: 'National Livestock Mission (NLM) - Livestock Support',
    launchYear: 2014,
    ministry: 'Ministry of Fisheries, Animal Husbandry & Dairying',
    category: 'Livestock & Dairy',
    purpose: 'Support livestock entrepreneurship, infrastructure, and breed improvement.',
    suitableFor: 'Livestock farmers, dairy entrepreneurs, SHGs, FPOs, cooperatives.',
    entityType: 'Individual, SHG, FPO, Cooperative, Partnership, Private Limited',
    businessType: ['Dairy', 'Poultry', 'Goat/Sheep', 'Piggery', 'Animal Feed', 'Meat Processing', 'Animal Health'],
    eligibility: 'Dairy/livestock farmers with animal count, SHGs, FPOs, and entrepreneurs.',
    businessAge: '0-15 years',
    fundingType: 'Term Loan, Subsidy, Grant',
    maximumFunding: '₹2 Crore (varies by component)',
    loanDetails: 'Credit linked subsidy (25-50%)',
    subsidyDetails: '25-50% subsidy depending on category and component',
    grantDetails: 'Infrastructure grants up to ₹50 Lakh',
    interestInformation: 'As per bank rates (7-11% p.a.)',
    repaymentTenure: '3-7 years',
    collateralInformation: 'As per bank policy',
    documentsRequired: [
      'Animal ownership proof',
      'Land documents',
      'Project Report',
      'Bank Account Details',
      'Aadhaar, PAN',
      'Veterinary Certificate'
    ],
    applicationProcess: 'Apply at bank or through State Department → Project appraisal → Loan approval → Subsidy release',
    approvalProcess: 'Department evaluation → Bank appraisal → Approval → Disbursement',
    commonRejectionReasons: [
      'No animal count proof',
      'Land title issues',
      'Unviable business model',
      'Incomplete documentation'
    ],
    consultantNotes: 'Dairy and poultry are priority areas. Subsidy percentage depends on category (general: 25%, SC/ST: 50%).',
    customerPitch: 'National Livestock Mission se dairy, poultry, aur animal husbandry ke liye 25-50% subsidy milti hai. Animal count aur land documents ready rakhein.',
    officialPortal: 'www.dahd.nic.in'
  },

  // =============================================================
  // 13. DAIRY ENTREPRENEURSHIP RELATED SCHEMES
  // =============================================================
  {
    id: 'DES001',
    schemeName: 'Dairy Entrepreneurship Development Scheme (DEDS)',
    launchYear: 2010,
    ministry: 'National Dairy Development Board (NDDB)',
    category: 'Dairy',
    purpose: 'Promote dairy entrepreneurship through financial support and technical guidance.',
    suitableFor: 'Dairy farmers, entrepreneurs, SHGs, FPOs wanting to start or expand dairy business.',
    entityType: 'Individual, SHG, FPO, Partnership, Private Limited',
    businessType: ['Dairy Farming', 'Milk Processing', 'Value-Added Products', 'Cold Chain', 'Dairy Equipment'],
    eligibility: 'Individuals, SHGs, FPOs with experience in dairy, 18+ years, viable business plan.',
    businessAge: '0-10 years',
    fundingType: 'Term Loan, Subsidy',
    maximumFunding: '₹2 Crore (dairy projects)',
    loanDetails: 'Credit linked subsidy (33-50%)',
    subsidyDetails: '33% (general), 50% (SC/ST/women)',
    grantDetails: 'N/A (Subsidy only)',
    interestInformation: 'As per bank rates (7-10% p.a.)',
    repaymentTenure: '3-7 years',
    collateralInformation: 'As per bank policy',
    documentsRequired: [
      'Land documents',
      'Project Report',
      'Bank Account Details',
      'Aadhaar, PAN',
      'NDDB registration (if applicable)'
    ],
    applicationProcess: 'Apply through bank or NDDB → Project feasibility study → Loan approval → Subsidy disbursement',
    approvalProcess: 'NDDB technical evaluation → Bank appraisal → Approval → Funds disbursed',
    commonRejectionReasons: [
      'Unviable project',
      'Land ownership issues',
      'No dairy experience',
      'Incomplete project report'
    ],
    consultantNotes: 'Dairy sector has high demand. Value-added products (ghee, paneer, curd) have better margins. Connect with NDDB for technical support.',
    customerPitch: 'Dairy Entrepreneurship Scheme se aapko 33-50% subsidy milti hai dairy farming aur processing ke liye. NDDB ka support bhi available hai.',
    officialPortal: 'www.nddb.coop'
  },

  // =============================================================
  // 14. STATE STARTUP POLICY FRAMEWORK
  // =============================================================
  {
    id: 'SSPF001',
    schemeName: 'State Startup Policy Framework (Various States)',
    launchYear: 2016,
    ministry: 'State Governments (Various Departments)',
    category: 'Startup Support',
    purpose: 'Provide state-level incentives, incubator support, and funding to startups.',
    suitableFor: 'Startups registered in respective states, DPIIT recognized or state recognized.',
    entityType: 'Private Limited, LLP, Partnership, Sole Proprietorship',
    businessType: ['All sectors (state dependent)'],
    eligibility: 'Startups registered in the state, DPIIT recognized, innovative and scalable.',
    businessAge: '0-5 years (varies by state)',
    fundingType: 'Grant, Subsidy, Tax Benefits, Incubator Support',
    maximumFunding: 'Varies by state (₹10 Lakh to ₹5 Crore)',
    loanDetails: 'N/A (Grant based)',
    subsidyDetails: 'Stamp duty exemption, patent fee reimbursement, rent subsidy, etc.',
    grantDetails: 'Seed grants, prototype grants, market access grants',
    interestInformation: 'N/A',
    repaymentTenure: 'N/A',
    collateralInformation: 'N/A',
    documentsRequired: [
      'DPIIT/State Recognition',
      'Business Plan',
      'Financial Projections',
      'Innovation Proof'
    ],
    applicationProcess: 'Apply through state startup portal → Evaluation committee review → Approval → Benefits disbursed',
    approvalProcess: 'State committee evaluation → Approval → Benefits released',
    commonRejectionReasons: [
      'No DPIIT recognition',
      'Not innovative',
      'Not scalable',
      'Business not registered in state'
    ],
    consultantNotes: 'Each state has its own policy. Check the specific state\'s startup policy for exact benefits. Some states offer cash grants, others offer tax benefits.',
    customerPitch: 'State Startup Policies ke under aapko rent subsidy, stamp duty exemption, aur seed grants mil sakte hain. Apne state ki portal check karein.',
    officialPortal: 'State specific (e.g., startup.karnataka.gov.in)'
  },

  // =============================================================
  // 15. TECHNOLOGY UPGRADATION SUPPORT SCHEMES
  // =============================================================
  {
    id: 'TUSS001',
    schemeName: 'Technology Upgradation Support Scheme (TUSS)',
    launchYear: 2020,
    ministry: 'Ministry of MSME',
    category: 'Technology Upgradation',
    purpose: 'Support MSMEs for adoption of advanced technology, Industry 4.0, and digitalization.',
    suitableFor: 'MSMEs looking to adopt new technology, automation, IoT, AI, and digital tools.',
    entityType: 'Individual, Partnership, Private Limited, LLP',
    businessType: ['Manufacturing', 'IT', 'Food Processing', 'Textile', 'Engineering', 'Auto Components'],
    eligibility: 'MSMEs with Udyam Registration, willingness to adopt new technology, viable project.',
    businessAge: '1-15 years',
    fundingType: 'Term Loan, Grant, Subsidy',
    maximumFunding: '₹1 Crore (25-50% subsidy on technology adoption)',
    loanDetails: 'Credit linked subsidy for technology purchase',
    subsidyDetails: '25-50% subsidy on technology investment',
    grantDetails: 'Pilot project grants up to ₹25 Lakh',
    interestInformation: 'As per bank rates (7-12% p.a.)',
    repaymentTenure: '3-7 years',
    collateralInformation: 'As per bank policy',
    documentsRequired: [
      'Udyam Registration',
      'Technology Proposal',
      'Project Report',
      'Financial Statements',
      'Vendor Quotations'
    ],
    applicationProcess: 'Apply through MSME portal → Technology assessment → Bank loan processing → Subsidy release',
    approvalProcess: 'Technology committee evaluation → Bank appraisal → Approval → Disbursement',
    commonRejectionReasons: [
      'No Udyam registration',
      'Technology not approved',
      'Unviable project',
      'Incomplete documentation'
    ],
    consultantNotes: 'Industry 4.0 is the future. Encourage customers to adopt automation, IoT, and AI. Subsidy covers both hardware and software.',
    customerPitch: 'Technology Upgradation Scheme se aapko 25-50% subsidy milti hai nayi technology adopt karne ke liye. Automation, IoT, AI - yeh sab cover hai.',
    officialPortal: 'www.msme.gov.in'
  },

  // =============================================================
  // 16. EXPORT PROMOTION SUPPORT SCHEMES
  // =============================================================
  {
    id: 'EPS001',
    schemeName: 'Export Promotion Support Schemes (Various)',
    launchYear: 2015,
    ministry: 'Ministry of Commerce and Industry',
    category: 'Export Promotion',
    purpose: 'Support MSMEs for export promotion, market access, and international expansion.',
    suitableFor: 'MSMEs looking to export products/services, attend international trade fairs.',
    entityType: 'Individual, Partnership, Private Limited, LLP',
    businessType: ['Manufacturing', 'Handicrafts', 'Textile', 'Food Processing', 'IT/ITES', 'Engineering'],
    eligibility: 'MSMEs with export potential, Udyam Registration, valid IEC code.',
    businessAge: '1-15 years',
    fundingType: 'Grant, Subsidy, Interest Subvention',
    maximumFunding: '₹2 Crore (varies by component)',
    loanDetails: 'Interest subvention on export credit (2-5%)',
    subsidyDetails: 'Market development assistance, trade fair participation subsidy',
    grantDetails: 'Export incentives, duty drawback, RoDTEP',
    interestInformation: 'Subvented export credit (4-7% p.a.)',
    repaymentTenure: '1-5 years',
    collateralInformation: 'As per bank policy',
    documentsRequired: [
      'IEC Code',
      'Udyam Registration',
      'Export Order/Contract',
      'Financial Statements',
      'GST Registration'
    ],
    applicationProcess: 'Apply through DGFT → Export promotion council → Bank loan (if required) → Subsidy claim',
    approvalProcess: 'DGFT evaluation → Scheme approval → Benefits disbursed',
    commonRejectionReasons: [
      'No IEC code',
      'No export order',
      'Incomplete documentation',
      'Product not eligible'
    ],
    consultantNotes: 'Export is a priority sector. Ensure customer has IEC code and understands export documentation. RoDTEP and duty drawback are additional benefits.',
    customerPitch: 'Export Promotion schemes se aapko interest subvention, market development assistance, aur export incentives milte hain. International market mein business expand karne ke liye best hai.',
    officialPortal: 'www.dgft.gov.in'
  },

  // =============================================================
  // 17. MSME CLUSTER DEVELOPMENT PROGRAMME
  // =============================================================
  {
    id: 'CDP001',
    schemeName: 'MSME Cluster Development Programme (CDP)',
    launchYear: 2005,
    ministry: 'Ministry of MSME',
    category: 'Cluster Development',
    purpose: 'Develop and strengthen MSME clusters through infrastructure, technology, and common facility centers.',
    suitableFor: 'MSMEs located in industrial clusters, associations, and cooperative societies.',
    entityType: 'Individual, Partnership, Private Limited, LLP, Cooperative, Association',
    businessType: ['Manufacturing', 'Handicrafts', 'Textile', 'Food Processing', 'Engineering', 'Chemicals'],
    eligibility: 'MSMEs in identified clusters, association membership, Udyam Registration.',
    businessAge: '1-15 years',
    fundingType: 'Grant, Subsidy, Infrastructure Support',
    maximumFunding: '₹5 Crore (varies by cluster)',
    loanDetails: 'Credit linked support for common facilities',
    subsidyDetails: 'Infrastructure subsidy (40-60%)',
    grantDetails: 'Common Facility Centre grants up to ₹2 Crore',
    interestInformation: 'As per bank rates (7-11% p.a.)',
    repaymentTenure: '3-7 years',
    collateralInformation: 'As per bank policy',
    documentsRequired: [
      'Udyam Registration',
      'Association/Cooperative membership proof',
      'Project Report',
      'Land documents',
      'Bank Account Details'
    ],
    applicationProcess: 'Apply through MSME Development Institute → Cluster assessment → Project approval → Implementation',
    approvalProcess: 'Cluster feasibility study → MSME committee approval → Funding released',
    commonRejectionReasons: [
      'Not in identified cluster',
      'No association membership',
      'Land issues',
      'Unviable cluster project'
    ],
    consultantNotes: 'Cluster development is a collective effort. Multiple businesses can benefit from common facilities. Check if your industry has a cluster in your area.',
    customerPitch: 'MSME Cluster Development Programme se common facility centers, infrastructure, aur technology support milti hai. Agar aap industrial cluster mein hain toh is scheme ka benefit lein.',
    officialPortal: 'www.dcmsme.gov.in'
  },

  // =============================================================
  // 18. WOMEN ENTREPRENEUR SUPPORT SCHEMES
  // =============================================================
  {
    id: 'WESS001',
    schemeName: 'Women Entrepreneur Support Schemes (Various)',
    launchYear: 2015,
    ministry: 'Ministry of MSME & State Governments',
    category: 'Women Entrepreneurship',
    purpose: 'Provide financial support, skill training, and market access to women entrepreneurs.',
    suitableFor: 'Women entrepreneurs starting or expanding business in any sector.',
    entityType: 'Individual, Partnership (with majority women), SHG, Private Limited',
    businessType: ['All sectors (Manufacturing, Service, Trading, Handicrafts, Food Processing, IT)'],
    eligibility: 'Women entrepreneurs (minimum 51% ownership), 18+ years, viable business plan.',
    businessAge: '0-15 years',
    fundingType: 'Term Loan, Subsidy, Grant, Interest Subvention',
    maximumFunding: '₹5 Crore (varies by scheme)',
    loanDetails: 'Credit linked subsidy (20-50%)',
    subsidyDetails: '20-50% subsidy for women entrepreneurs',
    grantDetails: 'Seed grants up to ₹10 Lakh (under various schemes)',
    interestInformation: '2-5% interest subvention for women',
    repaymentTenure: '3-10 years',
    collateralInformation: 'CGTMSE guarantee available',
    documentsRequired: [
      'Aadhaar, PAN',
      'Business Plan',
      'Financial Statements',
      'Bank Account Details',
      'Women proof (certificate)'
    ],
    applicationProcess: 'Apply at any bank or through women entrepreneurship portal → Bank appraisal → Loan approval → Subsidy disbursement',
    approvalProcess: 'Bank assessment → Scheme approval (women component) → Funds released',
    commonRejectionReasons: [
      'Women ownership less than 51%',
      'Unviable business model',
      'Incomplete documentation',
      'Poor credit history'
    ],
    consultantNotes: 'Multiple schemes exist for women entrepreneurs across central and state governments. Always check the latest notifications for additional benefits.',
    customerPitch: 'Women Entrepreneur Support Schemes ke under aapko 20-50% subsidy, 2-5% interest subvention, aur CGTMSE guarantee milti hai. Women owned business ke liye best schemes hain.',
    officialPortal: 'www.womenentrepreneurship.gov.in'
  },

  // =============================================================
  // 19. SC/ST ENTREPRENEUR SUPPORT SCHEMES
  // =============================================================
  {
    id: 'SCST001',
    schemeName: 'SC/ST Entrepreneur Support Schemes (Various)',
    launchYear: 2016,
    ministry: 'Ministry of Social Justice & State Governments',
    category: 'SC/ST Entrepreneurship',
    purpose: 'Support SC/ST entrepreneurs through financial assistance, training, and market linkages.',
    suitableFor: 'SC/ST entrepreneurs starting or expanding business in any sector.',
    entityType: 'Individual, Partnership (with majority SC/ST), SHG, Private Limited',
    businessType: ['All sectors (Manufacturing, Service, Trading, Handicrafts, Food Processing, IT)'],
    eligibility: 'SC/ST entrepreneurs (minimum 51% ownership), 18+ years, viable business plan.',
    businessAge: '0-15 years',
    fundingType: 'Term Loan, Subsidy, Grant, Interest Subvention',
    maximumFunding: '₹3 Crore (varies by scheme)',
    loanDetails: 'Credit linked subsidy (30-50%)',
    subsidyDetails: '30-50% subsidy for SC/ST entrepreneurs',
    grantDetails: 'Seed grants up to ₹15 Lakh (under various schemes)',
    interestInformation: '3-5% interest subvention for SC/ST',
    repaymentTenure: '3-10 years',
    collateralInformation: 'CGTMSE guarantee available',
    documentsRequired: [
      'Aadhaar, PAN',
      'Caste Certificate',
      'Business Plan',
      'Financial Statements',
      'Bank Account Details'
    ],
    applicationProcess: 'Apply at any bank or through SC/ST entrepreneurship portal → Bank appraisal → Loan approval → Subsidy disbursement',
    approvalProcess: 'Bank assessment → Scheme approval (SC/ST component) → Funds released',
    commonRejectionReasons: [
      'SC/ST ownership less than 51%',
      'Invalid caste certificate',
      'Unviable business model',
      'Incomplete documentation'
    ],
    consultantNotes: 'SC/ST entrepreneurs get higher subsidy percentages and lower interest rates. Encourage customers to maintain proper caste certificate and documents.',
    customerPitch: 'SC/ST Entrepreneur Support Schemes se aapko 30-50% subsidy, 3-5% interest subvention, aur CGTMSE guarantee milti hai. SC/ST entrepreneurs ke liye exclusive schemes hain.',
    officialPortal: 'www.msme.gov.in (SC/ST section)'
  },

  // =============================================================
  // 20. DIGITAL MSME SUPPORT SCHEMES
  // =============================================================
  {
    id: 'DMS001',
    schemeName: 'Digital MSME Support Schemes (Various)',
    launchYear: 2020,
    ministry: 'Ministry of MSME',
    category: 'Digital Transformation',
    purpose: 'Support MSMEs for digital adoption, e-commerce, and digital marketing.',
    suitableFor: 'MSMEs wanting to adopt digital tools, e-commerce platforms, and digital marketing.',
    entityType: 'Individual, Partnership, Private Limited, LLP',
    businessType: ['Manufacturing', 'Service', 'Trading', 'Retail', 'Handicrafts', 'Food Processing'],
    eligibility: 'MSMEs with Udyam Registration, willing to adopt digital technologies.',
    businessAge: '1-15 years',
    fundingType: 'Grant, Subsidy',
    maximumFunding: '₹2 Lakh (Digital toolkit)',
    loanDetails: 'N/A (Grant based)',
    subsidyDetails: 'Subsidy for digital tools, website development, and e-commerce onboarding',
    grantDetails: '₹2 Lakh for digital toolkit adoption',
    interestInformation: 'N/A',
    repaymentTenure: 'N/A',
    collateralInformation: 'N/A',
    documentsRequired: [
      'Udyam Registration',
      'Digital Adoption Plan',
      'Bank Account Details',
      'Aadhaar, PAN'
    ],
    applicationProcess: 'Apply through MSME digital portal → Digital assessment → Approval → Toolkit disbursement',
    approvalProcess: 'Digital readiness evaluation → Approval → Tools provided',
    commonRejectionReasons: [
      'No Udyam registration',
      'No clear digital plan',
      'Incomplete application'
    ],
    consultantNotes: 'Digital adoption is crucial for MSMEs. This scheme helps MSMEs get on digital platforms, e-commerce, and digital payments.',
    customerPitch: 'Digital MSME Support Schemes se aapko ₹2 Lakh tak ka grant milta hai digital tools, website, aur e-commerce onboarding ke liye. Digital adoption easy aur affordable ho jata hai.',
    officialPortal: 'www.digitalmsme.gov.in'
  }
];

// ================================================================
// EXPORT FUNCTIONS
// ================================================================

function searchScheme(keyword) {
  if (!keyword || keyword.trim() === '') return schemes;
  const term = keyword.toLowerCase().trim();
  return schemes.filter(scheme => {
    return scheme.schemeName.toLowerCase().includes(term) ||
           scheme.purpose.toLowerCase().includes(term) ||
           scheme.category.toLowerCase().includes(term) ||
           scheme.suitableFor.toLowerCase().includes(term) ||
           scheme.businessType.some(biz => biz.toLowerCase().includes(term)) ||
           scheme.eligibility.toLowerCase().includes(term);
  });
}

function getSchemeByCategory(category) {
  if (!category || category.trim() === '') return schemes;
  return schemes.filter(scheme => 
    scheme.category.toLowerCase().includes(category.toLowerCase().trim())
  );
}

function getSchemeByBusinessType(businessType) {
  if (!businessType || businessType.trim() === '') return schemes;
  const term = businessType.toLowerCase().trim();
  return schemes.filter(scheme =>
    scheme.businessType.some(biz => biz.toLowerCase().includes(term))
  );
}

function getSchemeById(id) {
  return schemes.find(scheme => scheme.id === id) || null;
}

function getAllCategories() {
  const categories = new Set(schemes.map(s => s.category));
  return Array.from(categories).sort();
}

function getAllBusinessTypes() {
  const types = new Set();
  schemes.forEach(s => s.businessType.forEach(b => types.add(b)));
  return Array.from(types).sort();
}

// Export for Node.js (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    schemes,
    searchScheme,
    getSchemeByCategory,
    getSchemeByBusinessType,
    getSchemeById,
    getAllCategories,
    getAllBusinessTypes
  };
}

// ================================================================
// USAGE NOTES:
// ================================================================
// 1. Search: searchScheme('mudra') returns all schemes containing 'mudra'
// 2. Category: getSchemeByCategory('Startup') returns all startup schemes
// 3. Business Type: getSchemeByBusinessType('Dairy') returns all dairy-related schemes
// 4. All schemes are REAL Indian government schemes as of 2024-25
// 5. Benefits and eligibility may change. Always verify from official portal.
// 6. Use consultantNotes for customer guidance
// 7. customerPitch is Hinglish explanation for customer communication
// ================================================================

console.log(`✅ Smile Financial Solutions - Schemes Database Loaded`);
console.log(`📊 Total Schemes: ${schemes.length}`);
console.log(`📂 Categories: ${getAllCategories().join(', ')}`);
console.log(`🏢 Business Types: ${getAllBusinessTypes().slice(0, 10).join(', ')}...`);
console.log(`💡 Use searchScheme(), getSchemeByCategory(), getSchemeByBusinessType()`);
