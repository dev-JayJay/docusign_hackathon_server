const investmentStageEnum = {
    "seed": "Seed Stage",
    "early": "Early Stage",
    "growth": "Growth Stage",
    "mature": "Mature Companies",
};

const investmentFocusEnum = {
    "Technology": "Technology",
    "Healthcare": "Healthcare",
    "Real Estate": "Real Estate",
    "Energy": "Energy",
    "Consumer Goods": "Consumer Goods",
    "Finance": "Finance",
    "Media & Entertainment": "Media & Entertainment",
    "Manufacturing": "Manufacturing",
    "Agriculture": "Agriculture",
    "Transportation": "Transportation",
    "Education": "Education",
    "Environmental": "Environmental",
    "Retail": "Retail",
    "Telecommunications": "Telecommunications",
    "Tourism & Hospitality": "Tourism & Hospitality",
    "Automotive": "Automotive",
    "Sports": "Sports",
    "Pharmaceuticals": "Pharmaceuticals"
};
  
const investmentAmountEnum = {
    "Under $1M": "Under $1M",
    "$1M - $5M": "$1M - $5M",
    "$5M - $10M": "$5M - $10M",
    "$10M - $50M": "$10M - $50M",
    "$50M - $100M": "$50M - $100M",
    "Over $100M": "Over $100M",
  };

  const riskToleranceEnum = {
    "Low": "Low",
    "Medium": "Medium",
    "High": "High",
    "Very High": "Very High", 
    "Conservative": "Conservative", 
    "Moderate": "Moderate",
  };

module.exports = { investmentStageEnum, investmentFocusEnum, investmentAmountEnum, riskToleranceEnum };