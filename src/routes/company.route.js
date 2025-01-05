const express = require('express');
const companyRoute = express.Router();

const { companyDetailsController } = require('../controllers/company.controller');

companyRoute.get('/', companyDetailsController);

module.exports = companyRoute;