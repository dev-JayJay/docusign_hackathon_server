const mongoose = require("mongoose");

const companyRegistrationSchema = new mongoose.Schema({
  company_name: {
    type: String,
    required: true,
  },
  company_email: {
    type: String,
    required: true,
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
    required: true
  },
});

const companyModel = mongoose.model('companies', companyRegistrationSchema); 
module.exports = companyModel;