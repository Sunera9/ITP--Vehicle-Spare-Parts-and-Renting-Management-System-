const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Token = require("../models/tokenModel");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");
const { fileSizeFormatter } = require("../utils/UserFileUpload");
const cloudinary = require("cloudinary").v2;
const PDFDocument = require("pdfkit");
//Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

//Register User

const registerUser = asyncHandler(async (req, res) => {
  const {
    first_name,
    email,
    password,
    last_name,
    address,
    date_of_birth,
    nic,
    phone,
    cusID,
  } = req.body;
  const jwt = require("jsonwebtoken");

  // Validation
  if (!first_name || !email || !password) {
    res.status(400);

    return res.send({ message: "Please Fill In All Required Fields" });
  }
  if (password.length < 6) {
    res.status(400);
    return res.send({ message: "Password must be up to 6 Characters" });
  }

  // check if user email already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res
      .status(400)
      .json({ message: "Email Has Already Been Registered" });
  }
  // check if user email already exists
  const nicExists = await User.findOne({ nic });

  if (nicExists) {
    res.status(400);
    return res.send({ message: "NIC Has Already Been Used" });
  }
  // //Encrypt password before saving to DB

  // const salt = await bcrypt.genSalt(10);
  // const hashedPassword = await bcrypt.hash(password,salt);

  //Handling image upload
  let fileData = {};
  if (req.file) {
    //save image to cloudinary
    let uploadFile;
    try {
      uploadFile = await cloudinary.uploader.upload(req.file.path, {
        folder: "uploads",
        resource_type: "image",
      });
    } catch (message) {
      res.status(500);
      throw new message("Image could not be uploaded");
    }

    fileData = {
      fileName: req.file.originalname,
      filePath: uploadFile.secure_url,
      fileType: req.file.mimetype,
      fileSize: req.file.size,
    };
  }

  //Create new user
  const user = await User.create({
    first_name,
    email,
    password,
    last_name,
    address,
    date_of_birth,
    nic,
    phone,
    cusID
  });

  // Generate Token

  const token = generateToken(user._id);

  // Send HTTP-only cookie
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // 1 Day
    sameSite: "none",
    secure: true,
  });

  if (user) {
    const { _id, first_name, last_name, address, email, photo, phone,cusID } = user;

    res.status(201).json({
      _id,
      first_name,
      last_name,
      address,
      email,
      photo: fileData,
      phone,
      cusID,

      token,
      date_of_birth,
      nic,
    });
  } else {
    res.status(400);
    return res.send({ message: "Invalid User Data" });
  }
});

//Login user
const loginUser = asyncHandler(async (req, res) => {
  // res.send("Login User");

  const { email, password } = req.body;

  // Validation Request
  if (!email || !password) {
    res.status(400);

    return res.send({ message: "Please Add Email and Password" });
  }

  //Check if user exists

  const user = await User.findOne({ email });

  if (!user) {
    res.status(400);

    return res.send({ message: "User not found , please signup" });
  }
  // Check if user is restricted
  if (user.isRestricted) {
    res.status(401);

    return res.send({
      message: "You are not authorized to access",
    });
  }

  // User Exists, check  if password is correct
  const passwordIsCorrect = await bcrypt.compare(password, user.password);

  // Generate Token
  const token = generateToken(user._id);

  // Send HTTP-only cookie
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // 1 Day
    sameSite: "none",
    secure: true,
  });

  if (user && passwordIsCorrect) {
    const {
      _id,
      first_name,
      last_name,
      address,
      email,
      photo,
      phone,
      date_of_birth,
      nic,
      cusID
    } = user;

    res.status(201).json({
      _id,
      first_name,
      last_name,
      address,
      email,
      photo,
      phone,
      cusID,

      date_of_birth,
      nic,
      token,
    });
  } else {
    res.status(400);

    return res.send({ message: "Invalid email or password" });
  }
});

// Logout User

const logoutUser = asyncHandler(async (req, res) => {
  // res.send("Logout User");
  // Send HTTP-only cookie
  res.cookie("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(0),
    sameSite: "none",
    secure: true,
  });

  return res.status(200).json({ message: "successfully Logged Out" });
});

// Get User Data

const getUser = asyncHandler(async (req, res) => {
  console.log(req.user)
  const user = await User.findById(req.user._id);
  console.log(user)

  if (user) {
    const {
      _id,
      first_name,
      last_name,
      address,
      email,
      photo,
      phone,
      date_of_birth,
      nic,
      cusID,
    } = user;
    res.status(200).json({
      _id,
      first_name,
      last_name,
      address,
      email,
      photo,
      phone,
      date_of_birth,
      nic,
      cusID,
    });
  } else {
    res.status(400);

    return res.send({ message: "User not found" });
  }
});

// Get login Status
const loginStatus = asyncHandler(async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json(false);
  }

  // Verify Token
  const verified = jwt.verify(token, process.env.JWT_SECRET);
  if (verified) {
    return res.json(true);
  }
  return res.json(false);
});

//Update User

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const {
      first_name,
      last_name,
      email,
      address,
      photo,
      phone,
      date_of_birth,
      nic,
    } = user;

    user.first_name = req.body.first_name || first_name;
    user.last_name = req.body.last_name || last_name;
    user.address = req.body.address || address;
    user.phone = req.body.phone || phone;
    user.date_of_birth = req.body.date_of_birth || date_of_birth;
    user.email = req.body.email || email;
    user.photo = req.body.photo || photo;
    user.nic = req.body.nic || nic;

    const updateUser = await user.save();
    res.status(200).json({
      _id: updateUser._id,
      first_name: updateUser.first_name,
      last_name: updateUser.last_name,
      address: updateUser.address,
      email: updateUser.email,
      photo: updateUser.photo,
      phone: updateUser.phone,
      date_of_birth: updateUser.date_of_birth,
      nic: updateUser.nic,
    });
  } else {
    res.status(404);
    throw new message("User not found");
  }
});

// Update the Password

const changePassword = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const { oldPassword, password } = req.body;

  if (!user) {
    res.status(400);
    return res.send("User not found, please signup");
  }
  //Validate
  if (!oldPassword || !password) {
    res.status(400);
    return res.send("Please add old and new password");
  }

  // check if old password matches password in DB
  const passwordIsCorrect = await bcrypt.compare(oldPassword, user.password);

  // Save new password
  if (user && passwordIsCorrect) {
    user.password = password;
    await user.save();
    res.status(200).send("Password change successful");
  } else {
    res.status(400);
    return res.send("Old password is incorrect");
  }
});

//Forgot password

const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new message("User does not exist");
  }

  // Delete token if it exists in DB
  let token = await Token.findOne({ userId: user._id });
  if (token) {
    await token.deleteOne();
  }

  //Delete token if it exists in DB

  token = await Token.findOne({ userId: user._id });
  if (token) {
    await token.deleteOne();
  }

  // Create Reset Token
  let resetToken = crypto.randomBytes(32).toString("hex") + user._id;
  console.log(resetToken);

  // Hash token before saving to DB
  const hashedToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Save Token to DB
  await new Token({
    userId: user._id,
    token: hashedToken,
    createdAt: Date.now(),
    expiresAt: Date.now() + 30 * (60 * 1000), // Thirty minutes
  }).save();

  // Construct Reset Url
  const resetUrl = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;

  // Reset Email
  const message = `
      <h2>Hello ${user.first_name}</h2>
      <p>Please use the url below to reset your password</p>  
      <p>This reset link is valid for only 30 minutes.</p>
      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
      <p>Regards...</p>
      <p>Shantha Motors</p>
    `;
  const subject = "Password Reset Request";
  const send_to = user.email;
  const sent_from = process.env.EMAIL_USER;

  try {
    await sendEmail(subject, message, send_to, sent_from);
    res.status(200).json({ success: true, message: "Reset Email Sent" });
  } catch (message) {
    res.status(500);
    throw new message("Email not sent, please try again");
  }
});

// Reset Password
const resetpassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const { resetToken } = req.params;

  // Hash token, then compare to Token in DB
  const hashedToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // fIND tOKEN in DB
  const userToken = await Token.findOne({
    token: hashedToken,
    expiresAt: { $gt: Date.now() },
  });

  if (!userToken) {
    res.status(404);
    throw new message("Invalid or Expired Token");
  }

  // Find user
  const user = await User.findOne({ _id: userToken.userId });
  user.password = password;
  await user.save();
  res.status(200).json({
    message: "Password Reset Successful, Please Login",
  });
});

// Delete User
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findOneAndDelete({ _id: id });

  if (!user) {
    res.status(400);
    throw new message("User not found");
  }

  res.status(200).send("Employee deleted successfully");
});

// Get all users

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
});

//search function
const searchUser = asyncHandler(async (req, res) => {
  // console.log(req.params.key)

  let data = await User.find({
    $or: [
      { email: { $regex: req.params.key } },
      { address: { $regex: req.params.key } },
    ],
  });
  res.send(data);
});

//pdf report
const printUserID = asyncHandler(async (req, res) => {
  try {
    const users = await User.find();

    const doc = new PDFDocument();
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=all_users.pdf`);

    doc.pipe(res);

    doc
      .roundedRect(50, 50, 500, 600, 10)
      .strokeColor("black")
      .lineWidth(2)
      .stroke()
      .fillColor("#321375")
      .fontSize(20)
      .text("Shantha Motors", 50, 70, { align: "center" })
      .fillColor("black")
      .fontSize(16)
      .text("User Details", 50, 90, { align: "center" });

    let isFirstUser = true;

    for (const user of users) {
      if (!isFirstUser) {
        doc.addPage(); // add a new page before rendering the details of the next user
        doc.moveDown(); // move down the cursor to create some space between the border and the text
        doc
          .roundedRect(50, 50, 500, 550, 10)
          .strokeColor("black")
          .lineWidth(2)
          .stroke()
          .fillColor("#321375")
          .fontSize(20)
          .text("Shantha Motors", 50, 70, { align: "center" })
          .fillColor("black")
          .fontSize(16)
          .text("User Details", 50, 90, { align: "center" });
      } else {
        isFirstUser = false;
      }

      doc.font("Helvetica");
      doc.lineGap(-20); // set line gap to -10
      doc.fillColor("black");
      doc.text(`First Name : ${user.first_name}`, 70, doc.y + 60);
      doc.moveDown();
      doc.text(`Last Name   : ${user.last_name}`, 70, doc.y + 60);
      doc.moveDown();
      doc.text(`Contact No  : ${user.phone}`, 70, doc.y + 60);
      doc.moveDown();
      doc.text(
        `Date of birth : ${new Date(user.date_of_birth).toLocaleDateString(
          "en-US",
          { year: "numeric", month: "long", day: "numeric" }
        )}`,
        70,
        doc.y + 60
      );

      doc.moveDown();
      doc.text(`NIC  : ${user.nic}`, 70, doc.y + 60);
      doc.moveDown();
      doc.text(`Email       : ${user.email}`, 70, doc.y + 60);
      doc.moveDown();
      doc.text(`Address     : ${user.address}`, 70, doc.y + 60);
      doc.moveDown();
      doc.text(
        `Joined Date : ${user.createdAt.toLocaleDateString("en-US", {
          dateStyle: "short",
        })}`,
        70,
        doc.y + 50
      );
    }

    doc.end();
  } catch (err) {
    console.message(err);
    res.status(500).send("message generating PDF document");
  }
});

//restricting user
const restrictUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.isRestricted = true;
    await user.save();

    res.json({ message: "User restricted" });
  } catch (message) {
    console.log(message);
    res.status(500).json({ message: "Internal server message" });
  }
};
//unrestrict user
const unrestrictUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.isRestricted = false;
    await user.save();

    res.json({ message: "User unrestricted" });
  } catch (message) {
    console.log(message);
    res.status(500).json({ message: "Internal server message" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
  updateUser,
  changePassword,
  getAllUsers,
  forgotPassword,
  resetpassword,
  deleteUser,
  loginStatus,
  printUserID,
  searchUser,
  restrictUser,
  unrestrictUser,
};
