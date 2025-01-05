const express = require("express");
const authRoute = express.Router();

const { createCompanyController , loginCompanyController, createInvestorController, loginInvestorController } = require('../controllers/auth.controller');

// company onboarding
authRoute.post('/register-company', createCompanyController );
authRoute.post('/login-company', loginCompanyController );

// investor onboarding
authRoute.post('/register-investor', createInvestorController );
authRoute.post('/login-investor', loginInvestorController );

module.exports = authRoute;
