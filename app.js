// ================================================================
// SMILE FINANCIAL SOLUTION - AI FUNDING CONSULTANT
// Complete Application Logic (app.js)
// Version 1.0 | Vanilla JavaScript | Production Ready
// ================================================================

// ================================================================
// GLOBAL CONFIGURATION
// ================================================================

const APP_CONFIG = {
  APP_NAME: 'Smile Financial Solution',
  VERSION: '1.0',
  STORAGE_KEY: 'smile_customers',
  NOTES_KEY: 'smile_notes',
  REPORTS_KEY: 'smile_reports',
  MAX_CUSTOMERS: 100
};

// ================================================================
// STATE MANAGEMENT
// ================================================================

let currentCustomer = null;
let analysisResults = null;
let activePage = 'dashboard';

// ================================================================
// UTILITY FUNCTIONS
// ================================================================

function formatCurrency(amount) {
  if (!amount || isNaN(amount)) return '₹0';
  return '₹' + Number(amount).toLocaleString('en-IN', {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  });
}

function formatDate(date) {
  if (!date) return 'N/A';
  const d = new Date(date);
  return d.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
}

function getCurrentDate() {
  return new Date().toISOString().split('T')[0];
}

function getTimestamp() {
  return new Date().toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function generateId() {
  return 'CUST' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substring(2, 5).toUpperCase();
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ================================================================
// CUSTOMER DATA MANAGEMENT
// ================================================================

class CustomerManager {
  constructor() {
    this.storageKey = APP_CONFIG.STORAGE_KEY;
    this.customers = this.loadCustomers();
  }

  loadCustomers() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error loading customers:', error);
      return [];
    }
  }

  saveCustomers() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.customers));
      return true;
    } catch (error) {
      console.error('Error saving customers:', error);
      return false;
    }
  }

  addCustomer(customerData) {
    const customer = {
      id: generateId(),
      ...customerData,
      createdAt: getTimestamp(),
      updatedAt: getTimestamp(),
      notes: customerData.notes || []
    };
    this.customers.unshift(customer);
    this.saveCustomers();
    return customer;
  }

  getCustomer(id) {
    return this.customers.find(c => c.id === id) || null;
  }

  updateCustomer(id, updates) {
    const index = this.customers.findIndex(c => c.id === id);
    if (index === -1) return null;
    
    this.customers[index] = {
      ...this.customers[index],
      ...updates,
      updatedAt: getTimestamp()
    };
    this.saveCustomers();
    return this.customers[index];
  }

  deleteCustomer(id) {
    this.customers = this.customers.filter(c => c.id !== id);
    this.saveCustomers();
    return true;
  }

  searchCustomers(query) {
    if (!query || query.trim() === '') return this.customers;
    const term = query.toLowerCase().trim();
    return this.customers.filter(c => 
      c.name?.toLowerCase().includes(term) ||
      c.businessType?.toLowerCase().includes(term) ||
      c.city?.toLowerCase().includes(term) ||
      c.mobile?.includes(term)
    );
  }

  getAllCustomers() {
    return this.customers;
  }

  getCustomerCount() {
    return this.customers.length;
  }
}

// ================================================================
// NOTES MANAGEMENT
// ================================================================

class NotesManager {
  constructor() {
    this.storageKey = APP_CONFIG.NOTES_KEY;
    this.notes = this.loadNotes();
  }

  loadNotes() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error loading notes:', error);
      return [];
    }
  }

  saveNotes() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.notes));
      return true;
    } catch (error) {
      console.error('Error saving notes:', error);
      return false;
    }
  }

  addNote(customerId, noteText, type = 'general') {
    const note = {
      id: 'NOTE' + Date.now().toString(36).toUpperCase(),
      customerId,
      text: noteText,
      type: type,
      timestamp: getTimestamp()
    };
    this.notes.unshift(note);
    this.saveNotes();
    return note;
  }

  getNotes(customerId) {
    return this.notes.filter(n => n.customerId === customerId);
  }

  deleteNote(noteId) {
    this.notes = this.notes.filter(n => n.id !== noteId);
    this.saveNotes();
    return true;
  }
}

// ================================================================
// FUNDING ANALYSIS ENGINE
// ================================================================

class FundingAnalyzer {
  constructor() {
    this.schemes = typeof schemes !== 'undefined' ? schemes : [];
    this.loans = typeof loanProducts !== 'undefined' ? loanProducts : [];
  }

  analyzeProfile(customer) {
    const results = {
      recommendedSchemes: [],
      recommendedLoans: [],
      riskLevel: 'Medium',
      missingDocuments: [],
      consultantNotes: [],
      eligibility: [],
      summary: ''
    };

    // 1. Analyze for Government Schemes
    if (this.schemes.length > 0) {
      results.recommendedSchemes = this.matchSchemes(customer);
    }

    // 2. Analyze for Loan Products
    if (this.loans.length > 0) {
      results.recommendedLoans = this.matchLoans(customer);
    }

    // 3. Determine Risk Level
    results.riskLevel = this.calculateRisk(customer);

    // 4. Identify Missing Documents
    results.missingDocuments = this.identifyMissingDocuments(customer);

    // 5. Generate Consultant Notes
    results.consultantNotes = this.generateConsultantNotes(customer, results);

    // 6. Generate Summary
    results.summary = this.generateSummary(customer, results);

    return results;
  }

  matchSchemes(customer) {
    const matched = [];
    const businessType = customer.businessType?.toLowerCase() || '';
    const fundingAmount = parseFloat(customer.fundingAmount) || 0;
    const isStartup = customer.isStartup || false;
    const isFoodProcessing = businessType.includes('food') || businessType.includes('processing');
    const isMicro = fundingAmount <= 1000000;
    const isSmall = fundingAmount <= 2500000;
    const isWoman = customer.isWoman || false;
    const isSCST = customer.isSCST || false;

    for (const scheme of this.schemes) {
      let matchScore = 0;
      const reasons = [];

      // Business type match
      if (scheme.businessType.some(type => businessType.includes(type.toLowerCase()))) {
        matchScore += 30;
        reasons.push('Business type matches');
      }

      // Funding amount match
      if (scheme.maximumFunding) {
        const maxAmount = this.parseAmount(scheme.maximumFunding);
        if (fundingAmount <= maxAmount) {
          matchScore += 20;
          reasons.push('Funding amount within scheme limit');
        }
      }

      // Business age match
      if (scheme.businessAge) {
        const age = customer.businessAge || '0';
        if (scheme.businessAge.includes('New') && age === 'New') {
          matchScore += 15;
          reasons.push('New business eligible');
        } else if (scheme.businessAge.includes('0-') || scheme.businessAge.includes('0-3')) {
          matchScore += 10;
        }
      }

      // Specific category matches
      if (isFoodProcessing && scheme.category === 'Food Processing') {
        matchScore += 25;
        reasons.push('Food processing sector match');
      }

      if (isStartup && scheme.category === 'Startup Funding') {
        matchScore += 30;
        reasons.push('Startup category match');
      }

      if (isMicro && scheme.category === 'Micro Enterprise') {
        matchScore += 20;
        reasons.push('Micro enterprise match');
      }

      if (isWoman && scheme.suitableFor.toLowerCase().includes('woman')) {
        matchScore += 25;
        reasons.push('Women entrepreneur match');
      }

      if (isSCST && scheme.suitableFor.toLowerCase().includes('sc/st')) {
        matchScore += 25;
        reasons.push('SC/ST entrepreneur match');
      }

      // Check eligibility
      let eligible = true;
      if (scheme.eligibility) {
        if (scheme.eligibility.toLowerCase().includes('dpiit') && !isStartup) {
          eligible = false;
        }
        if (scheme.eligibility.toLowerCase().includes('udyam') && !customer.udyam) {
          eligible = false;
        }
        if (scheme.eligibility.toLowerCase().includes('fssai') && !customer.fssai) {
          eligible = false;
        }
      }

      if (eligible && matchScore >= 20) {
        matched.push({
          scheme: scheme,
          score: matchScore,
          reasons: reasons,
          eligible: true
        });
      }
    }

    // Sort by score
    matched.sort((a, b) => b.score - a.score);
    return matched.slice(0, 5);
  }

  matchLoans(customer) {
    const matched = [];
    const purpose = customer.fundingPurpose?.toLowerCase() || '';
    const businessType = customer.businessType?.toLowerCase() || '';
    const fundingAmount = parseFloat(customer.fundingAmount) || 0;
    const cibil = parseInt(customer.cibil) || 0;
    const businessAge = customer.businessAge || '0';

    for (const loan of this.loans) {
      let matchScore = 0;
      const reasons = [];

      // Business type match
      if (loan.businessType.some(type => businessType.includes(type.toLowerCase()))) {
        matchScore += 25;
        reasons.push('Business type matches');
      }

      // Purpose match
      if (loan.loanPurpose.some(p => purpose.includes(p.toLowerCase()))) {
        matchScore += 30;
        reasons.push('Funding purpose matches');
      }

      // Amount match
      if (loan.loanAmountRange) {
        const range = loan.loanAmountRange;
        const amounts = range.match(/₹(\d+[,.]?\d*)\s*(?:to|Lakh|Crore)/gi);
        if (amounts) {
          matchScore += 15;
          reasons.push('Amount range compatible');
        }
      }

      // CIBIL match
      if (loan.cibilRequirement) {
        const required = parseInt(loan.cibilRequirement.match(/\d+/)?.[0] || 0);
        if (cibil >= required) {
          matchScore += 20;
          reasons.push('CIBIL score meets requirement');
        } else if (cibil > 0 && cibil < required) {
          matchScore -= 10;
          reasons.push('CIBIL score below recommended');
        }
      }

      // Business age match
      if (loan.minimumBusinessAge) {
        const minYears = parseInt(loan.minimumBusinessAge.match(/\d+/)?.[0] || 0);
        const ageYears = parseInt(businessAge) || 0;
        if (ageYears >= minYears || businessAge === '3+' || businessAge === '5+') {
          matchScore += 15;
          reasons.push('Business age meets requirement');
        }
      }

      // Specific scenario matches
      if (purpose.includes('working capital') && loan.category === 'Short Term Funding') {
        matchScore += 20;
        reasons.push('Working capital scenario match');
      }

      if (purpose.includes('machinery') && loan.loanName === 'Machinery Loan') {
        matchScore += 30;
        reasons.push('Machinery purchase match');
      }

      if (purpose.includes('property') && loan.loanName === 'Loan Against Property') {
        matchScore += 25;
        reasons.push('Property funding match');
      }

      if (fundingAmount > 2500000 && loan.category === 'Long Term Funding') {
        matchScore += 15;
        reasons.push('Large funding requirement match');
      }

      if (matchScore > 0) {
        matched.push({
          loan: loan,
          score: matchScore,
          reasons: reasons,
          eligible: matchScore > 20
        });
      }
    }

    matched.sort((a, b) => b.score - a.score);
    return matched.slice(0, 5);
  }

  calculateRisk(customer) {
    let riskScore = 0;
    const cibil = parseInt(customer.cibil) || 0;
    const businessAge = customer.businessAge || '0';
    const fundingAmount = parseFloat(customer.fundingAmount) || 0;
    const monthlyProfit = parseFloat(customer.monthlyProfit) || 0;

    // CIBIL risk (weight: 40%)
    if (cibil >= 750) riskScore += 10;
    else if (cibil >= 700) riskScore += 20;
    else if (cibil >= 650) riskScore += 35;
    else if (cibil >= 600) riskScore += 55;
    else if (cibil > 0) riskScore += 70;
    else riskScore += 50; // No CIBIL

    // Business age risk (weight: 25%)
    if (businessAge === '5+') riskScore -= 10;
    else if (businessAge === '3-5') riskScore += 5;
    else if (businessAge === '1-3') riskScore += 20;
    else if (businessAge === 'New') riskScore += 35;

    // Profitability risk (weight: 20%)
    if (monthlyProfit > 100000) riskScore -= 10;
    else if (monthlyProfit > 50000) riskScore += 5;
    else if (monthlyProfit > 20000) riskScore += 20;
    else if (monthlyProfit > 0) riskScore += 35;
    else riskScore += 50;

    // Funding amount vs business size (weight: 15%)
    const monthlySales = parseFloat(customer.monthlySales) || 0;
    if (fundingAmount > monthlySales * 12) riskScore += 30;
    else if (fundingAmount > monthlySales * 6) riskScore += 15;

    // Determine risk level
    if (riskScore <= 30) return 'Low';
    else if (riskScore <= 55) return 'Medium';
    else return 'High';
  }

  identifyMissingDocuments(customer) {
    const missing = [];
    const docChecks = {
      'Aadhaar': customer.aadhaar,
      'PAN': customer.pan,
      'Bank Statement': customer.bankStatement,
      'Business Proof': customer.businessProof,
      'ITR': customer.itr,
      'GST': customer.gst,
      'Udyam': customer.udyam,
      'CIBIL Score': customer.cibil && customer.cibil > 0,
      'DPR': customer.dpr
    };

    for (const [doc, hasDoc] of Object.entries(docChecks)) {
      if (!hasDoc) {
        missing.push(doc);
      }
    }

    // Additional documents based on business type
    const businessType = customer.businessType?.toLowerCase() || '';
    if (businessType.includes('food') || businessType.includes('processing')) {
      if (!customer.fssai) missing.push('FSSAI License');
    }
    if (customer.fundingPurpose?.toLowerCase().includes('machinery')) {
      if (!customer.machineryQuotes) missing.push('Machinery Quotes');
    }
    if (parseFloat(customer.fundingAmount) > 2500000) {
      if (!customer.propertyDocs) missing.push('Property Documents');
    }

    return missing;
  }

  generateConsultantNotes(customer, results) {
    const notes = [];
    const riskLevel = results.riskLevel;
    const missingDocs = results.missingDocuments;

    // Risk-based notes
    if (riskLevel === 'High') {
      notes.push('⚠️ High risk profile. Consider secured loan options or lower funding amount.');
      notes.push('📊 Improve CIBIL score before applying for unsecured loans.');
    } else if (riskLevel === 'Medium') {
      notes.push('📈 Moderate risk profile. Multiple funding options available.');
      notes.push('💡 Consider improving CIBIL score to get better interest rates.');
    } else {
      notes.push('✅ Low risk profile. Strong eligibility for most funding options.');
      notes.push('🏦 Good chance of getting competitive interest rates.');
    }

    // Document notes
    if (missingDocs.length > 0) {
      notes.push(`📋 Missing documents: ${missingDocs.join(', ')}. Prepare these before applying.`);
    }

    // Business-specific notes
    const businessType = customer.businessType?.toLowerCase() || '';
    if (businessType.includes('food')) {
      notes.push('🍽️ Food processing businesses should get FSSAI license for better funding options.');
    }
    if (businessType.includes('manufacturing')) {
      notes.push('🏭 Manufacturing businesses should consider CGTMSE guarantee scheme.');
    }
    if (customer.isStartup) {
      notes.push('🚀 Startups should register with DPIIT for Startup India benefits.');
    }

    // CIBIL notes
    const cibil = parseInt(customer.cibil) || 0;
    if (cibil > 0 && cibil < 650) {
      notes.push('📉 CIBIL below 650. Work on credit improvement before applying.');
    } else if (cibil >= 750) {
      notes.push('🌟 Excellent CIBIL score. Eligible for best interest rates.');
    }

    // Gender/community specific notes
    if (customer.isWoman) {
      notes.push('👩 Women entrepreneurs eligible for special schemes and subsidies.');
    }
    if (customer.isSCST) {
      notes.push('👥 SC/ST entrepreneurs eligible for special government schemes and higher subsidies.');
    }

    return notes.slice(0, 8);
  }

  generateSummary(customer, results) {
    const recommendedSchemes = results.recommendedSchemes.slice(0, 3);
    const recommendedLoans = results.recommendedLoans.slice(0, 3);
    
    let summary = `📊 Funding Analysis for ${customer.name || 'Customer'}\n\n`;
    
    if (recommendedSchemes.length > 0) {
      summary += `🏛️ Recommended Schemes:\n`;
      recommendedSchemes.forEach(item => {
        summary += `  • ${item.scheme.schemeName} (${item.scheme.category})\n`;
      });
      summary += '\n';
    }
    
    if (recommendedLoans.length > 0) {
      summary += `🏦 Recommended Loans:\n`;
      recommendedLoans.forEach(item => {
        summary += `  • ${item.loan.loanName} (${item.loan.category})\n`;
      });
      summary += '\n';
    }
    
    summary += `📊 Risk Level: ${results.riskLevel}\n`;
    
    if (results.missingDocuments.length > 0) {
      summary += `📋 Missing Documents: ${results.missingDocuments.join(', ')}\n`;
    }
    
    return summary;
  }

  parseAmount(amountString) {
    if (!amountString) return Infinity;
    const clean = amountString.replace(/[₹,]/g, '');
    const match = clean.match(/^([\d.]+)\s*([LC]?)/i);
    if (!match) return Infinity;
    
    let amount = parseFloat(match[1]);
    const unit = match[2]?.toUpperCase();
    
    if (unit === 'L') amount *= 100000;
    else if (unit === 'C') amount *= 10000000;
    
    return amount;
  }
}

// ================================================================
// EMI CALCULATOR
// ================================================================

function calculateEMI(principal, annualRate, tenureYears) {
  const monthlyRate = annualRate / 12 / 100;
  const tenureMonths = tenureYears * 12;
  
  if (principal <= 0 || monthlyRate <= 0 || tenureMonths <= 0) {
    return {
      emi: 0,
      totalInterest: 0,
      totalPayment: 0,
      monthlyRate: monthlyRate * 100,
      tenureMonths: tenureMonths
    };
  }
  
  const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths) / 
              (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  const totalPayment = emi * tenureMonths;
  const totalInterest = totalPayment - principal;
  
  return {
    emi: Math.round(emi * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
    totalPayment: Math.round(totalPayment * 100) / 100,
    monthlyRate: monthlyRate * 100,
    tenureMonths: tenureMonths,
    principal: principal
  };
}

function calculateSubsidy(projectCost, subsidyPercentage) {
  if (projectCost <= 0 || subsidyPercentage <= 0) {
    return {
      subsidyAmount: 0,
      remainingAmount: projectCost,
      subsidyPercentage: 0
    };
  }
  
  const subsidyAmount = projectCost * (subsidyPercentage / 100);
  const remainingAmount = projectCost - subsidyAmount;
  
  return {
    subsidyAmount: Math.round(subsidyAmount * 100) / 100,
    remainingAmount: Math.round(remainingAmount * 100) / 100,
    subsidyPercentage: subsidyPercentage
  };
}

// ================================================================
// DPR GENERATOR
// ================================================================

function generateDPR(customer) {
  const businessType = customer.businessType || 'N/A';
  const monthlySales = parseFloat(customer.monthlySales) || 0;
  const monthlyProfit = parseFloat(customer.monthlyProfit) || 0;
  const annualTurnover = parseFloat(customer.annualTurnover) || monthlySales * 12;
  const fundingAmount = parseFloat(customer.fundingAmount) || 0;
  const purpose = customer.fundingPurpose || 'General';
  
  // Calculate derived metrics
  const netProfit = monthlyProfit * 12;
  const profitMargin = annualTurnover > 0 ? (netProfit / annualTurnover) * 100 : 0;
  const loanAmount = fundingAmount;
  
  const dpr = {
    businessName: customer.businessName || customer.name || 'Your Business',
    businessType: businessType,
    promoter: customer.name || 'N/A',
    location: `${customer.city || 'N/A'}, ${customer.state || 'N/A'}`,
    businessAge: customer.businessAge || 'N/A',
    monthlySales: monthlySales,
    annualTurnover: annualTurnover,
    monthlyProfit: monthlyProfit,
    annualProfit: netProfit,
    profitMargin: profitMargin,
    fundingRequired: loanAmount,
    fundingPurpose: purpose,
    employeeCount: customer.employeeCount || 0,
    investment: customer.investment || 0,
    machineryCost: customer.machineryCost || 0,
    workingCapital: customer.workingCapital || 0,
    cibil: customer.cibil || 0,
    gst: customer.gst || false,
    udyam: customer.udyam || false,
    itr: customer.itr || false
  };
  
  // Generate DPR summary text
  const summary = `
📄 DETAILED PROJECT REPORT (DPR)

Business: ${dpr.businessName}
Type: ${dpr.businessType}
Promoter: ${dpr.promoter}
Location: ${dpr.location}
Business Age: ${dpr.businessAge}

📊 FINANCIAL OVERVIEW
Monthly Sales: ${formatCurrency(dpr.monthlySales)}
Annual Turnover: ${formatCurrency(dpr.annualTurnover)}
Monthly Profit: ${formatCurrency(dpr.monthlyProfit)}
Annual Profit: ${formatCurrency(dpr.annualProfit)}
Profit Margin: ${dpr.profitMargin.toFixed(1)}%

💰 FUNDING REQUIREMENT
Amount: ${formatCurrency(dpr.fundingRequired)}
Purpose: ${dpr.fundingPurpose}
CIBIL Score: ${dpr.cibil || 'N/A'}

📋 DOCUMENT STATUS
GST: ${dpr.gst ? '✓ Available' : '✗ Not Available'}
Udyam: ${dpr.udyam ? '✓ Available' : '✗ Not Available'}
ITR: ${dpr.itr ? '✓ Available' : '✗ Not Available'}

💡 RECOMMENDATION
${dpr.profitMargin > 10 ? 'Strong business with good profitability. Eligible for competitive rates.' :
  dpr.profitMargin > 5 ? 'Moderate profitability. Consider secured options for better rates.' :
  'Improve profitability before large funding applications.'}

${dpr.udyam ? '✓ Udyam registration adds credibility for government schemes.' :
  '⚠️ Udyam registration recommended for MSME benefits.'}
  `;
  
  return {
    data: dpr,
    summary: summary
  };
}

// ================================================================
// CUSTOMER REPORT GENERATOR
// ================================================================

function generateCustomerReport(customer, analysisResults) {
  if (!customer) {
    return {
      html: '<p style="color: #c62828;">Please analyze a customer first.</p>',
      plain: 'No customer data available.'
    };
  }
  
  const analysis = analysisResults || new FundingAnalyzer().analyzeProfile(customer);
  
  const html = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; border-bottom: 3px solid #1a73e8; padding-bottom: 20px; margin-bottom: 20px;">
        <h1 style="color: #1a73e8; font-size: 28px; margin: 0;">😊 Smile Financial Solution</h1>
        <p style="color: #555; font-size: 16px; margin: 5px 0;">AI Funding Consultant - Funding Analysis Report</p>
        <p style="color: #777; font-size: 13px;">Generated: ${getTimestamp()}</p>
      </div>
      
      <div style="background: #f0f6ff; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #0b1e33; margin: 0 0 10px 0;">👤 Customer Details</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 5px 20px; font-size: 14px;">
          <div><strong>Name:</strong> ${customer.name || 'N/A'}</div>
          <div><strong>Mobile:</strong> ${customer.mobile || 'N/A'}</div>
          <div><strong>State:</strong> ${customer.state || 'N/A'}</div>
          <div><strong>City:</strong> ${customer.city || 'N/A'}</div>
          <div><strong>Business Type:</strong> ${customer.businessType || 'N/A'}</div>
          <div><strong>Business Age:</strong> ${customer.businessAge || 'N/A'}</div>
          <div><strong>CIBIL Score:</strong> ${customer.cibil || 'N/A'}</div>
          <div><strong>Funding Required:</strong> ${formatCurrency(customer.fundingAmount)}</div>
          <div><strong>Funding Purpose:</strong> ${customer.fundingPurpose || 'N/A'}</div>
        </div>
      </div>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
        <div style="background: #e8f5e9; padding: 15px; border-radius: 8px; border-left: 4px solid #4caf50;">
          <div style="font-size: 12px; color: #555;">Risk Level</div>
          <div style="font-size: 20px; font-weight: bold; color: ${analysis.riskLevel === 'Low' ? '#2e7d32' : analysis.riskLevel === 'Medium' ? '#ef6c00' : '#c62828'};">
            ${analysis.riskLevel}
          </div>
        </div>
        <div style="background: #fff3e0; padding: 15px; border-radius: 8px; border-left: 4px solid #ff9800;">
          <div style="font-size: 12px; color: #555;">Missing Documents</div>
          <div style="font-size: 16px; font-weight: bold; color: #e65100;">
            ${analysis.missingDocuments.length > 0 ? analysis.missingDocuments.length : '✓ All'}
          </div>
          <div style="font-size: 12px; color: #777;">${analysis.missingDocuments.join(', ')}</div>
        </div>
      </div>
      
      ${analysis.recommendedSchemes.length > 0 ? `
        <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <h4 style="color: #0d47a1; margin: 0 0 10px 0;">🏛️ Recommended Government Schemes</h4>
          ${analysis.recommendedSchemes.slice(0, 3).map(item => `
            <div style="border-bottom: 1px solid #bbdefb; padding: 8px 0;">
              <strong>${item.scheme.schemeName}</strong>
              <span style="color: #555; font-size: 13px;">- ${item.scheme.category}</span>
              <div style="font-size: 12px; color: #777;">${item.reasons.join('; ')}</div>
            </div>
          `).join('')}
        </div>
      ` : ''}
      
      ${analysis.recommendedLoans.length > 0 ? `
        <div style="background: #e8f5e9; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <h4 style="color: #1b5e20; margin: 0 0 10px 0;">🏦 Recommended Loan Products</h4>
          ${analysis.recommendedLoans.slice(0, 3).map(item => `
            <div style="border-bottom: 1px solid #c8e6c9; padding: 8px 0;">
              <strong>${item.loan.loanName}</strong>
              <span style="color: #555; font-size: 13px;">- ${item.loan.category}</span>
              <div style="font-size: 12px; color: #777;">${item.reasons.join('; ')}</div>
            </div>
          `).join('')}
        </div>
      ` : ''}
      
      ${analysis.consultantNotes.length > 0 ? `
        <div style="background: #fff8e1; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <h4 style="color: #e65100; margin: 0 0 10px 0;">💡 Consultant Notes</h4>
          <ul style="margin: 0; padding-left: 20px;">
            ${analysis.consultantNotes.map(note => `<li style="font-size: 14px; color: #555; margin-bottom: 5px;">${note}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      
      <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #e0e0e0;">
        <h4 style="color: #0b1e33; margin: 0 0 10px 0;">📋 Next Steps</h4>
        <ol style="margin: 0; padding-left: 20px; font-size: 14px; color: #333;">
          <li>Prepare missing documents: ${analysis.missingDocuments.join(', ') || 'All documents available'}</li>
          <li>Apply for recommended schemes and loans</li>
          <li>Consider risk level: ${analysis.riskLevel}</li>
          <li>Schedule follow-up consultation</li>
        </ol>
      </div>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #777;">
        <p>© 2024 Smile Financial Solution - AI Funding Consultant</p>
        <p>This is an advisory report. Please verify details with official sources.</p>
      </div>
    </div>
  `;
  
  const plain = `
Smile Financial Solution - Funding Analysis Report
Generated: ${getTimestamp()}

Customer: ${customer.name || 'N/A'}
Business: ${customer.businessType || 'N/A'} (${customer.businessAge || 'N/A'})
Funding: ${formatCurrency(customer.fundingAmount)} for ${customer.fundingPurpose || 'General'}
CIBIL: ${customer.cibil || 'N/A'}
Risk Level: ${analysis.riskLevel}

Recommended Schemes: ${analysis.recommendedSchemes.slice(0, 3).map(item => item.scheme.schemeName).join(', ')}
Recommended Loans: ${analysis.recommendedLoans.slice(0, 3).map(item => item.loan.loanName).join(', ')}
Missing Documents: ${analysis.missingDocuments.join(', ') || 'All available'}

Consultant Notes:
${analysis.consultantNotes.map(note => `- ${note}`).join('\n')}

Next Steps:
1. Prepare missing documents
2. Apply for recommended funding
3. Follow up consultation
  `;
  
  return {
    html: html,
    plain: plain
  };
}

// ================================================================
// UI HELPERS
// ================================================================

function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  const colors = {
    success: '#4caf50',
    error: '#f44336',
    warning: '#ff9800',
    info: '#2196f3'
  };
  
  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 12px 24px;
    background: ${colors[type] || '#2196f3'};
    color: white;
    border-radius: 8px;
    font-size: 14px;
    max-width: 90%;
    z-index: 9999;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    animation: slideIn 0.3s ease;
  `;
  
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function showLoading(show = true) {
  const loader = document.getElementById('loadingOverlay');
  if (loader) {
    loader.style.display = show ? 'flex' : 'none';
  }
}

function formatStatus(status) {
  const statusMap = {
    'Low': '🟢',
    'Medium': '🟡',
    'High': '🔴'
  };
  return (statusMap[status] || '⚪') + ' ' + status;
}

// ================================================================
// EXPORT MODULE
// ================================================================

// Make available globally
window.SmileFunding = {
  // Managers
  CustomerManager: CustomerManager,
  NotesManager: NotesManager,
  FundingAnalyzer: FundingAnalyzer,
  
  // Core functions
  calculateEMI: calculateEMI,
  calculateSubsidy: calculateSubsidy,
  generateDPR: generateDPR,
  generateCustomerReport: generateCustomerReport,
  
  // Utilities
  formatCurrency: formatCurrency,
  formatDate: formatDate,
  getTimestamp: getTimestamp,
  generateId: generateId,
  
  // UI Helpers
  showToast: showToast,
  showLoading: showLoading,
  formatStatus: formatStatus
};

// ================================================================
// INITIALIZATION
// ================================================================

console.log('✅ Smile Financial Solution - App Loaded');
console.log(`📊 Customer Manager: ${typeof CustomerManager}`);
console.log(`📊 Notes Manager: ${typeof NotesManager}`);
console.log(`📊 Funding Analyzer: ${typeof FundingAnalyzer}`);

// Add animation styles if not present
if (!document.getElementById('smileStyles')) {
  const style = document.createElement('style');
  style.id = 'smileStyles';
  style.textContent = `
    @keyframes slideIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    #loadingOverlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 9998;
    }
    
    .loading-spinner {
      width: 50px;
      height: 50px;
      border: 4px solid #f3f3f3;
      border-top: 4px solid #1a73e8;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
  
  // Add loading overlay
  const overlay = document.createElement('div');
  overlay.id = 'loadingOverlay';
  overlay.innerHTML = '<div class="loading-spinner"></div>';
  document.body.appendChild(overlay);
}

// ================================================================
// READY TO USE
// ================================================================

console.log('💡 Usage Examples:');
console.log('  const customer = { name: "Ramesh", businessType: "Food Processing", ... }');
console.log('  const analyzer = new FundingAnalyzer();');
console.log('  const results = analyzer.analyzeProfile(customer);');
console.log('  const emi = calculateEMI(500000, 12, 5);');
console.log('  const dpr = generateDPR(customer);');
console.log('  const report = generateCustomerReport(customer, results);');

console.log('✅ Ready for integration with index.html, schemes.js, loans.js');
