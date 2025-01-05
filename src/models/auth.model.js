const mongoose = require("mongoose");
const {
  investmentStageEnum,
  investmentFocusEnum,
  investmentAmountEnum,
  riskToleranceEnum,
} = require("../utils/enum");

const companyRegistrationSchema = new mongoose.Schema({
  company_name: {
    type: String,
    required: true,
  },
  company_email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Please fill a valid email address'],
  },
  company_phone_no: {
    type: String,
    required: true,
  },
  business_type: {
    type: String,
  },
  country: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
  },
  postal_code: {
    type: String,
  },
  date_of_establishment: {
    type: Date,
    required: true,
  },
  website_url: {
    type: String,
  },
  tax_id_number: {
    type: String,
  },
  registration_number: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

const investorRegistrationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Please fill a valid email address'],
  },
  phone: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  investmentFocus: {
    type: String,
    enum: Object.keys(investmentFocusEnum),
  },
  investmentStage: {
    type: String,
    enum: Object.keys(investmentStageEnum),
    required: true,
  },
  investment_amount: {
    type: String,
    enum: Object.keys(investmentAmountEnum),
    required: true,
  },
  risk_tolerance: {
    type: String,
    enum: Object.keys(riskToleranceEnum),
    required: true,
  },
  previousExperience: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

const investorModel = mongoose.model("Investor", investorRegistrationSchema);
const companyModel = mongoose.model("Company", companyRegistrationSchema);

module.exports = { companyModel, investorModel };
