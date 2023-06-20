const asyncHandler = require("express-async-handler");
const Supplier = require("../models/supplierModel");
//const SupplierForm = require("../models/SupplierFormModel");
//const Order = require("../models/orderModel");
//const Notification = require("../models/notificationModel");


const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { trusted } = require("mongoose");
 
//Generate Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

//Register Supplier
const registerSupplier = asyncHandler(async (req, res) => {
    const { company_name, first_name, last_name, email, mobile, company_address, password } = req.body;


    //validation
    if (!company_name || !email || !password) {
        res.status(400);
        throw new Error("Please fill in all required feilds");
    }
    if (password.length < 6) {
        res.status(400);
        throw new Error("Password must be upto 6 characters");
    }


    //check if supplier email already exists   
    const supplierExists = await Supplier.findOne({ email });

    if (supplierExists) {
        res.status(400);
        throw new Error("Email has already been registered");
    }


    //create new supplier 
    const supplier = await Supplier.create({
        company_name,
        first_name,
        last_name,
        email,
        mobile,
        company_address,
        password,
    });

    //Generate Token
    const token = generateToken(supplier._id);

    //Send HTTP-only cookie
    res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400), //1 day
        sameSite: "none",
        secure: true,
    });


    if (supplier) {
        const { _id, company_name, first_name, last_name, email, mobile, company_address } = supplier;
        res.status(201).json({
            _id,
            company_name,
            first_name,
            last_name,
            email,
            mobile,
            company_address,
            token,
        });
    }
    else {
        res.status(400);
        throw new Error("could not create supplier");
    }

});

//Login Supplier
const loginSupplier = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    //Validate Request
    if (!email || !password) {
        res.status(400);
        throw new Error("Please add email and password");
    }

    //Check if supplier exists
    const supplier = await Supplier.findOne({ email })

    if (!supplier) {
        res.status(400);
        throw new Error("supplier not found, please signup");
    }

    //Supplier exists, check if password is correct
    const passwordIsCorrect = await bcrypt.compare(password, supplier.password);

    //Generate Token
    const token = generateToken(supplier._id);

    //Send HTTP-only cookie (to frontend)
    res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400), //1 day
        sameSite: "none",
        secure: true,
    });




    if (supplier && passwordIsCorrect) {
        const { _id, company_name, first_name, last_name, email, mobile, company_address } = supplier;
        res.status(200).json({
            _id,
            company_name,
            first_name,
            last_name,
            email,
            mobile,
            company_address,
            token,
        });

    } else {
        res.status(400);
        throw new Error("Invalid email or password");
    }
});



//Logout Supplier
const logout = asyncHandler(async (req, res) => {
    res.cookie("token", "", {
        path: "/",
        httpOnly: true,
        expires: new Date(0),
        sameSite: "none",
        secure: true,
    });
    return res.status(200).json({ message: "Successfully Logged Out" });
});



//Get Supplier Data(supplier profile)
const getSupplier = asyncHandler(async (req, res) => {
    const supplier = await Supplier.findById(req.supplier._id); //get supplier frm the database

    if (supplier) {
        const { _id, company_name, first_name, last_name, email, mobile, company_address } = supplier;
        res.status(200).json({
            _id,
            company_name,
            first_name,
            last_name,
            email,
            mobile,
            company_address,
        });
    }
    else {
        res.status(400);
        throw new Error("Supplier Not Found");
    }
});


//Get Login status
const loginStatus = asyncHandler(async (req, res) => {

    const token = req.cookies.token;
    if (!token) {
        return res.json(false);
    }

    //Verify Token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (verified) {
        return res.json(true);
    }
    return res.json(false);
});




module.exports = {
    registerSupplier,
    loginSupplier,
    logout,
    getSupplier,
    loginStatus,
    
};