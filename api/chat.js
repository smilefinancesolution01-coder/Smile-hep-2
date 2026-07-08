// api/chat.js
// Smile Financial Solution - AI Funding Consultant Pro
// Vercel Serverless Function - Groq API Integration

// ================================
// IMPORTS
// ================================

// Note: In Vercel, you can use require() or import
// We'll use require() for compatibility

// Try to import system prompt (if available as separate file)
let SYSTEM_PROMPT = '';
try {
  const systemPromptModule = require('./systemPrompt.js');
  SYSTEM_PROMPT = systemPromptModule.SYSTEM_PROMPT || systemPromptModule.default || '';
} catch (e) {
  // Fallback: system prompt will be defined inline
  console.warn('systemPrompt.js not found, using fallback prompt');
}

// Try to import schemes (if available)
let GOVERNMENT_SCHEMES = [];
try {
  const schemesModule = require('./schemes.js');
  GOVERNMENT_SCHEMES = schemesModule.GOVERNMENT_SCHEMES || schemesModule.default || [];
} catch (e) {
  console.warn('schemes.js not found, using empty schemes array');
}

// Try to import loans (if available)
let LOAN_PRODUCTS = [];
try {
  const loansModule = require('./loans.js');
  LOAN_PRODUCTS = loansModule.LOAN_PRODUCTS || loansModule.default || [];
} catch (e) {
  console.warn('loans.js not found, using empty loans array');
}

// ================================
// FALLBACK SYSTEM PROMPT
// ================================

if (!SYSTEM_PROMPT) {
  SYSTEM_PROMPT = `You are Smile Financial AI Funding Consultant, a senior financial expert with decades of experience in business loans, government schemes, MSME funding, startup finance, project finance, and customer relationship management. Your role is to guide Indian entrepreneurs and business owners through their funding journey with professional, consultative, and empathetic support.

PERSONALITY & BEHAVIOR:
- Senior Financial Consultant, Business Loan Expert, Government Funding Expert, MSME Consultant, Startup Consultant, Project Finance Consultant, Sales Trainer, CRM Assistant, Documentation Expert, DPR Consultant, Customer Relationship Manager
- Always be professional, warm, and approachable
- Use a consultative approach: ask the right questions, listen carefully, guide step-by-step
- Be proactive: if the customer hasn't mentioned key details, ask politely
- Never assume anything about the customer's business or financial status

LANGUAGE RULES:
- Always reply in professional Hinglish (Hindi + English mix)
- Use simple, natural, conversational Hindi/Urdu with English terms for financial concepts
- Never use robotic or overly formal language
- Explain financial terms simply
- Use respectful forms of address (aap, -ji) when appropriate

CUSTOMER ANALYSIS WORKFLOW:
1. Business Summary: Business Type, Age, Location, Entity Type, Turnover, Profitability, GST status, Udyam status, ITR filing status, CIBIL score
2. Customer Strengths: Positive factors (e.g., stable vintage, good turnover, clean compliance)
3. Weakness / Gaps: Missing documents, low CIBIL, unregistered status, etc.
4. Risk Factors: Business risks, sector risks, financial risks, compliance risks
5. Possible Funding Options: Suggest 2-3 most suitable loan products or schemes
6. Possible Government Schemes: PMEGP, CLCSS, MUDRA, Stand-Up India, etc. as applicable
7. Possible Loan Products: Business Loan, Working Capital, Cash Credit, OD, Machinery Loan, LAP, Startup Loan
8. Required Documents: KYC, ITR, GST, Udyam, Bank Statements, Project Report, etc.
9. Missing Documents: Clearly list what the customer needs to arrange
10. Next Step: Actionable advice

GOVERNMENT SCHEME RULES:
- Explain: Scheme Name, Purpose, Eligibility, Approximate Benefit, Documents, Application Process
- Never invent scheme names or benefits. If unsure, say guidelines should be verified.

LOAN PRODUCT RULES:
- Explain: Eligibility, Business Vintage, Turnover, Documents, Approximate Interest, Tenure, Collateral
- Never guarantee approval. Say final terms depend on lender's underwriting.

COMPLIANCE RULES:
- Never guarantee loan approval, government grant, subsidy, interest rate, or disbursement
- Always add disclaimer: "Final approval depends on eligibility, documents, and lender/government assessment."

FORMATTING RULES:
- Use headings and bullet points
- Keep paragraphs short (max 4 lines)
- Use clear spacing between sections

You are Smile Financial AI Funding Consultant. Your mission is to help Indian entrepreneurs and business owners get the right funding, schemes, and guidance. Be professional, helpful, and consultative. Always prioritize the customer's success.`;
}

// ================================
// ENVIRONMENT VARIABLES
// ================================

const GROQ_API_KEY = process.env.GROQ_API_KEY || '';
const GROQ_MODEL = process.env.GROQ_MODEL || 'llama-3.3-70b-versatile';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const MAX_MESSAGE_LENGTH = 5000;
const DEFAULT_TIMEOUT = 30000;

// ================================
// REQUEST VALIDATION
// ================================

/**
 * Validate the incoming request body
 */
function validateRequest(body) {
  const errors = [];
  
  if (!body || typeof body !== 'object') {
    errors.push('Invalid request body');
    return errors;
  }
  
  if (!body.userMessage || typeof body.userMessage !== 'string') {
    errors.push('userMessage is required and must be a string');
  }
  
  if (body.userMessage && body.userMessage.length > MAX_MESSAGE_LENGTH) {
    errors.push(`userMessage exceeds maximum length of ${MAX_MESSAGE_LENGTH} characters`);
  }
  
  if (body.history && !Array.isArray(body.history)) {
    errors.push('history must be an array');
  }
  
  if (body.customer && typeof body.customer !== 'object') {
    errors.push('customer must be an object');
  }
  
  if (body.crm && typeof body.crm !== 'object') {
    errors.push('crm must be an object');
  }
  
  return errors;
}

/**
 * Sanitize input to prevent injection
 */
function sanitizeInput(str) {
  if (typeof str !== 'string') return str;
  // Remove potential injection patterns
  return str
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/[\u0000-\u001F]/g, '') // Remove control characters
    .trim();
}

// ================================
// CONTEXT BUILDER
// ================================

/**
 * Build the complete context for the AI
 */
function buildContext(body) {
  const { customer = {}, crm = {}, history = [], selectedScheme = null, selectedLoan = null, userMessage = '' } = body;
  
  let context = '';
  
  // 1. Customer Profile
  if (Object.keys(customer).length > 0) {
    context += '\n========== CUSTOMER PROFILE ==========\n';
    context += `Name: ${customer.name || 'Not provided'}\n`;
    context += `Mobile: ${customer.mobile || 'Not provided'}\n`;
    context += `State: ${customer.state || 'Not provided'}\n`;
    context += `Business Type: ${customer.businessType || 'Not provided'}\n`;
    context += `Business Age: ${customer.businessAge || 'Not provided'} years\n`;
    context += `Entity Type: ${customer.entityType || 'Not provided'}\n`;
    context += `GST: ${customer.gst || 'Not provided'}\n`;
    context += `Udyam: ${customer.udyam || 'Not provided'}\n`;
    context += `ITR: ${customer.itr || 'Not provided'}\n`;
    context += `Turnover: ₹${customer.turnover || 'Not provided'} lakhs\n`;
    context += `Monthly Sales: ₹${customer.monthlySales || 'Not provided'} lakhs\n`;
    context += `Profit: ₹${customer.profit || 'Not provided'} lakhs\n`;
    context += `CIBIL: ${customer.cibil || 'Not provided'}\n`;
    context += `Required Funding: ₹${customer.requiredFunding || 'Not provided'} lakhs\n`;
    context += `Purpose: ${customer.purpose || 'Not provided'}\n`;
    context += `Lead Status: ${customer.status || 'Not provided'}\n`;
    context += `Remarks: ${customer.remarks || 'Not provided'}\n`;
    context += '\n';
  }
  
  // 2. CRM Context
  if (Object.keys(crm).length > 0) {
    context += '========== CRM CONTEXT ==========\n';
    context += `Previous Interactions: ${crm.history || 'Not provided'}\n`;
    context += `Follow-up Notes: ${crm.notes || 'Not provided'}\n`;
    context += `Priority: ${crm.priority || 'Not provided'}\n`;
    context += `Source: ${crm.source || 'Not provided'}\n`;
    context += `Assigned To: ${crm.assignedTo || 'Not provided'}\n`;
    context += '\n';
  }
  
  // 3. Conversation History
  if (history && history.length > 0) {
    context += '========== CONVERSATION HISTORY ==========\n';
    // Only include last 10 messages to avoid context overload
    const recentHistory = history.slice(-10);
    recentHistory.forEach(msg => {
      const role = msg.role === 'user' ? 'Customer' : 'AI Consultant';
      context += `${role}: ${msg.content}\n`;
    });
    context += '\n';
  }
  
  // 4. Selected Scheme (if any)
  if (selectedScheme) {
    context += '========== SELECTED SCHEME ==========\n';
    context += `Scheme: ${selectedScheme.schemeName || selectedScheme.name || 'Not provided'}\n`;
    context += `Objective: ${selectedScheme.objective || selectedScheme.overview || 'Not provided'}\n`;
    context += `Eligibility: ${selectedScheme.eligibility || selectedScheme.elig || 'Not provided'}\n`;
    context += `Benefits: ${selectedScheme.benefits || 'Not provided'}\n`;
    context += `Documents: ${Array.isArray(selectedScheme.requiredDocuments) ? selectedScheme.requiredDocuments.join(', ') : selectedScheme.documents || 'Not provided'}\n`;
    context += `Application Process: ${selectedScheme.applicationProcess || 'Not provided'}\n`;
    context += '\n';
  }
  
  // 5. Selected Loan (if any)
  if (selectedLoan) {
    context += '========== SELECTED LOAN PRODUCT ==========\n';
    context += `Product: ${selectedLoan.name || selectedLoan.productName || 'Not provided'}\n`;
    context += `Description: ${selectedLoan.description || 'Not provided'}\n`;
    context += `Eligibility: ${selectedLoan.eligibility || 'Not provided'}\n`;
    context += `Interest Rate: ${selectedLoan.interestRate || 'Not provided'}\n`;
    context += `Tenure: ${selectedLoan.tenure || 'Not provided'}\n`;
    context += `Documents: ${Array.isArray(selectedLoan.documents) ? selectedLoan.documents.join(', ') : selectedLoan.documents || 'Not provided'}\n`;
    context += '\n';
  }
  
  // 6. Available Schemes (contextual)
  if (GOVERNMENT_SCHEMES && GOVERNMENT_SCHEMES.length > 0) {
    context += '========== AVAILABLE GOVERNMENT SCHEMES (Reference) ==========\n';
    const relevantSchemes = GOVERNMENT_SCHEMES.slice(0, 10).map(s => 
      `• ${s.schemeName} - ${s.objective || s.overview || ''}`
    ).join('\n');
    context += relevantSchemes + '\n\n';
  }
  
  // 7. Available Loan Products (contextual)
  if (LOAN_PRODUCTS && LOAN_PRODUCTS.length > 0) {
    context += '========== AVAILABLE LOAN PRODUCTS (Reference) ==========\n';
    const relevantLoans = LOAN_PRODUCTS.slice(0, 10).map(l => 
      `• ${l.name || l.productName || ''} - ${l.description || ''}`
    ).join('\n');
    context += relevantLoans + '\n\n';
  }
  
  // 8. Current User Question
  context += '========== CURRENT QUESTION ==========\n';
  context += `Customer: ${userMessage}\n`;
  context += '\n';
  
  // 9. Instructions
  context += '========== INSTRUCTIONS ==========\n';
  context += `Based on the above context, provide a comprehensive, consultative response in professional Hinglish.

Your response should include (where applicable):
1. Business Summary
2. Customer Strengths
3. Weakness/Risk Factors
4. Possible Funding Options
5. Government Schemes (with eligibility and benefits)
6. Loan Products (with eligibility and documents)
7. Required Documents (list)
8. Missing Documents (list)
9. Consultant Notes/Actionable Advice
10. CRM Remark
11. Next Steps / Follow-up Plan
12. Risk Level (Low/Medium/High)
13. Next Questions to Ask the Customer

Remember:
- Be consultative, not prescriptive
- Never guarantee approval
- Always include appropriate disclaimers
- Keep paragraphs short and use bullet points
- Use Hinglish for better understanding

Begin your response.`;
  
  return context;
}

// ================================
// GROQ API CALL
// ================================

/**
 * Call the Groq API with the prepared context
 */
async function callGroqAPI(context, userMessage) {
  if (!GROQ_API_KEY) {
    throw new Error('GROQ_API_KEY is not configured. Please set it in environment variables.');
  }
  
  const messages = [
    {
      role: 'system',
      content: SYSTEM_PROMPT
    },
    {
      role: 'user',
      content: context
    }
  ];
  
  const requestBody = {
    model: GROQ_MODEL,
    messages: messages,
    temperature: 0.2,
    max_tokens: 3000,
    top_p: 0.9,
    stream: false,
  };
  
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT);
  
  try {
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify(requestBody),
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      let errorText = await response.text();
      let errorMessage = `Groq API Error (${response.status})`;
      
      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.error?.message || errorMessage;
      } catch (e) {
        // Use raw error text
        if (errorText) errorMessage = errorText;
      }
      
      throw new Error(errorMessage);
    }
    
    const data = await response.json();
    
    // Extract response content
    let aiResponse = '';
    if (data.choices && data.choices.length > 0) {
      aiResponse = data.choices[0].message?.content || '';
    } else if (data.content) {
      aiResponse = data.content;
    } else if (data.response) {
      aiResponse = data.response;
    } else {
      aiResponse = JSON.stringify(data);
    }
    
    return {
      success: true,
      response: aiResponse,
      tokens: data.usage?.total_tokens || 0,
      model: data.model || GROQ_MODEL,
      raw: data,
    };
  } catch (error) {
    clearTimeout(timeoutId);
    
    if (error.name === 'AbortError') {
      throw new Error('Request timeout. The AI service took too long to respond.');
    }
    
    throw error;
  }
}

// ================================
// RESPONSE PARSER
// ================================

/**
 * Parse the AI response to extract structured information
 */
function parseAIResponse(response) {
  const result = {
    customerSummary: '',
    crmRemark: '',
    followUp: '',
    riskLevel: 'Medium',
    confidenceLevel: 'High',
  };
  
  // Try to extract key information using patterns
  const lines = response.split('\n');
  
  let currentSection = '';
  for (const line of lines) {
    const trimmed = line.trim();
    
    if (trimmed.toLowerCase().includes('business summary') || 
        trimmed.toLowerCase().includes('summary')) {
      currentSection = 'summary';
      continue;
    }
    
    if (trimmed.toLowerCase().includes('crm remark') || 
        trimmed.toLowerCase().includes('crm note')) {
      currentSection = 'crm';
      continue;
    }
    
    if (trimmed.toLowerCase().includes('follow-up') || 
        trimmed.toLowerCase().includes('next step')) {
      currentSection = 'followup';
      continue;
    }
    
    if (trimmed.toLowerCase().includes('risk level')) {
      const riskMatch = trimmed.match(/(low|medium|high)/i);
      if (riskMatch) {
        result.riskLevel = riskMatch[0].charAt(0).toUpperCase() + riskMatch[0].slice(1).toLowerCase();
      }
      continue;
    }
    
    // Store content in the appropriate section
    if (currentSection === 'summary' && trimmed.length > 0 && !trimmed.startsWith('-')) {
      result.customerSummary += trimmed + ' ';
    }
    
    if (currentSection === 'crm' && trimmed.length > 0 && !trimmed.startsWith('-')) {
      result.crmRemark += trimmed + ' ';
    }
    
    if (currentSection === 'followup' && trimmed.length > 0 && !trimmed.startsWith('-')) {
      result.followUp += trimmed + ' ';
    }
  }
  
  // Trim and clean up
  result.customerSummary = result.customerSummary.trim().substring(0, 300);
  result.crmRemark = result.crmRemark.trim().substring(0, 200);
  result.followUp = result.followUp.trim().substring(0, 200);
  
  // If no summary found, use first 200 characters
  if (!result.customerSummary) {
    result.customerSummary = response.substring(0, 200).trim();
  }
  
  return result;
}

// ================================
// ERROR HANDLER
// ================================

function handleError(error) {
  console.error('API Error:', error.message);
  
  let statusCode = 500;
  let message = 'An unexpected error occurred. Please try again later.';
  
  const errorMsg = error.message.toLowerCase();
  
  if (errorMsg.includes('401') || errorMsg.includes('unauthorized') || errorMsg.includes('api key')) {
    statusCode = 401;
    message = 'Authentication failed. Please check API key configuration.';
  } else if (errorMsg.includes('403') || errorMsg.includes('forbidden')) {
    statusCode = 403;
    message = 'Access forbidden. Please check your permissions.';
  } else if (errorMsg.includes('404') || errorMsg.includes('not found')) {
    statusCode = 404;
    message = 'The requested resource was not found. Please check the API endpoint.';
  } else if (errorMsg.includes('429') || errorMsg.includes('rate limit') || errorMsg.includes('too many requests')) {
    statusCode = 429;
    message = 'Rate limit exceeded. Please wait a moment and try again.';
  } else if (errorMsg.includes('timeout') || errorMsg.includes('timed out')) {
    statusCode = 504;
    message = 'The request timed out. Please try again with a shorter query.';
  } else if (errorMsg.includes('invalid') || errorMsg.includes('validation')) {
    statusCode = 400;
    message = 'Invalid request format. Please check your input.';
  }
  
  return {
    statusCode,
    body: {
      success: false,
      error: message,
      timestamp: new Date().toISOString(),
    },
  };
}

// ================================
// MAIN HANDLER
// ================================

module.exports = async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  
  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Only POST is supported.',
      timestamp: new Date().toISOString(),
    });
  }
  
  try {
    // Parse and validate request body
    let body;
    try {
      body = req.body;
    } catch (e) {
      return res.status(400).json({
        success: false,
        error: 'Invalid JSON body',
        timestamp: new Date().toISOString(),
      });
    }
    
    // Validate request
    const validationErrors = validateRequest(body);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        errors: validationErrors,
        timestamp: new Date().toISOString(),
      });
    }
    
    // Sanitize user message
    const userMessage = sanitizeInput(body.userMessage);
    
    // Build complete context
    const context = buildContext(body);
    
    // Call Groq API
    const result = await callGroqAPI(context, userMessage);
    
    // Parse the response to extract structured information
    const parsed = parseAIResponse(result.response);
    
    // Return success response
    return res.status(200).json({
      success: true,
      timestamp: new Date().toISOString(),
      response: result.response,
      tokens: result.tokens,
      model: result.model,
      customerSummary: parsed.customerSummary,
      crmRemark: parsed.crmRemark,
      followUp: parsed.followUp,
      riskLevel: parsed.riskLevel,
      confidenceLevel: parsed.confidenceLevel,
    });
    
  } catch (error) {
    const errorResponse = handleError(error);
    return res.status(errorResponse.statusCode).json(errorResponse.body);
  }
};

// ================================
// EXPORTS FOR VERCEL
// ================================

// For backward compatibility
module.exports.default = module.exports;

// Export config for Vercel
module.exports.config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
    externalResolver: true,
  },
};
