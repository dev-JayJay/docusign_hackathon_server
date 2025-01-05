// import all route here
const express = require("express");
const routes = express.Router();

const authRoute = require("./auth.route");
const companyRoute = require("./company.route");

routes.use('/auth', authRoute);
routes.use('/company', companyRoute);

module.exports = routes;
