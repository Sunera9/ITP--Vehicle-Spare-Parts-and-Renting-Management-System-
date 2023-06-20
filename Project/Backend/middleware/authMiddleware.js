const asyncHandler = require("express-async-handler");
const Employee = require("../models/employeeModel");
const jwt = require("jsonwebtoken");

//middleware function to protect routes
const protect = asyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies.token;

    //if token does not exist
    if (!token) {
      res.status(401);
      throw new Error("Not autherized, Please login");
    }

    //verify the token
    const verfied = jwt.verify(token, process.env.JWT_SECRET);

    //get user id from  token
    const employee = await Employee.findById(verfied.id).select("-password");

    if (!employee) {
      res.status(401);
      throw new Error("Employee not found");
    }

    req.employee = employee;
    next();
  } catch (error) {
    res.status(401);
    throw new Error("Not autherized, Please login");
  }
});

module.exports = protect;
