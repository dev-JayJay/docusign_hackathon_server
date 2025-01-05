const express = require("express");
const authRoute = express.Router();

const { createCompanyController , loginCompanyController } = require('../controllers/auth.controller');

authRoute.post('/register-company', createCompanyController );
authRoute.post('/login-company', loginCompanyController );

module.exports = authRoute;
