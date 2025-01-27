const bcrypt = require('bcryptjs');
const httpStatus = require("http-status");
const { companyModel, investorModel } = require("../models/auth.model");

const createCompanyController = async (req, res) => {
  const { body } = req;

  const requiredFields = [
    "company_name",
    "company_email",
    "company_phone_no",
    "country",
    "street",
    "city",
    "date_of_establishment",
    "password",
  ];

  const missingField = requiredFields.filter((field) => !body[field]);
  if (missingField.length > 0) {
    return res.status(400).json({
      error: true,
      message: `${missingField.join(", ")} field(s) is requried`,
      status: 400,
    });
  }

  const companyName = await companyModel.findOne({company_name: body.company_name});
  if (companyName) {
    return res.status(400).json({
      status: 400,
      message: `Company with name ${body.company_name} already exists.`,
      error: true,
      success: false, 
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const newCompany = await companyModel.create({...body, password: hashedPassword});
    return res.status(201).json({
      status: httpStatus.CREATED,
      message: {
        message: `company is created successfully`,
        data: newCompany
      },
      error: false,
      success: true, 
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error,
      error: true,
      success: false,
    });
  }
};

const loginCompanyController = async (req, res) => {
  const { body } = req;

  if (!body.email || !body.password) {
    return res.status(404).json({
      status: 404,
      message:`email and password fields are requried!`,
      error: true,
      success: false, 
    });
  }

  const company = await companyModel.findOne({ company_email: body.company_email });
  if (!company) {
    return res.status(404).json({
      status: 404,
      message:`comapany with this mail is not registered`,
      error: true,
      success: false, 
    });
  }

  try {
    const isPasswordMatch = await bcrypt.compare(body.password, company.password);
    if (isPasswordMatch) {
      const comapanyDetails = company.toObject();
      delete comapanyDetails.password;
      return res.status(201).json({
        status: 201,
        message: {
          message: `company login is successfull`,
          data: comapanyDetails
        },
        error: false,
        success: true, 
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: `Incorrect password`,
        error: true,
        success: false, 
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error,
      error: true,
      success: false,
    });
  }
};

const createInvestorController = async (req, res) => {
  const { body } = req;
  const requiredInvestorFields = [
    "fullName",          
    "email",             
    "phone",             
    "dob",               
    "investmentStage",   
    "investment_amount", 
    "risk_tolerance"     
  ];

  const missingField = requiredInvestorFields.filter((field) => !body[field]);
  if (missingField.length > 0) {
    return res.status(400).json({
      error: true,
      message: `${missingField.join(", ")} field(s) is requried`,
      status: 400,
    });
  }

  const checkEmail = await investorModel.findOne({ email: body.email });
  if (checkEmail) {
    return res.status(400).json({
      status: 400,
      message: `Investor with email ${body.email} already exists.`,
      error: true,
      success: false, 
    });
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);

  try {
    const newInverstor = await investorModel.create({...body, password: hashedPassword});
    console.log("cheking the new investor", newInverstor);
    const investorDetails = newInverstor.toObject();
    delete investorDetails.password;
    return res.status(201).json({
      status: 201,
      message: {
        message: `your investor account is created successfully`,
        data: investorDetails
      },
      error: false,
      success: true, 
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error,
      error: true,
      success: false,
    });
  }
};

const loginInvestorController = async (req, res) => {
  const { body } = req;

  if (!body.email || !body.password) {
    return res.status(404).json({
      status: 404,
      message:`email and password fields are requried!`,
      error: true,
      success: false, 
    });
  }

  const investor = await investorModel.findOne({email: body.email});
  if (!investor) {
    return res.status(404).json({
      status: 404,
      message:`investor with this ${body.email} email is not registered`,
      error: true,
      success: false, 
    });
  }

  try {
  const isPasswordMatch = await bcrypt.compare(body.password, investor.password);
  const investorDetails = investor.toObject();
  delete investorDetails.password;
  if (isPasswordMatch) {
    return res.status(201).json({
      status: 201,
      message: {
        message: `your login is successfull`,
        data: investorDetails
      },
      error: false,
      success: true, 
    });
  } else {
    return res.status(400).json({
      status: 400,
      message: `Incorrect password`,
      error: true,
      success: false, 
    });
  }

} catch (error) {
  return res.status(500).json({
    status: 500,
    message: error,
    error: true,
    success: false,
  });
}
};

module.exports = { createCompanyController, loginCompanyController, createInvestorController, loginInvestorController };
