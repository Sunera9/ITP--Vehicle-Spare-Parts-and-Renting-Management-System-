const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const protect = asyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      res.status(401);
      return res.send({ error: "Not authorized , please login" });
    }

    // Verify Token
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    // Get user id fromm token
    const user = await User.findById(verified.id).select("-password");

    if (!user) {
      res.status(401);
      return res.send({ error: "User Not Found" });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401);
    return res.send({ error: "Not authorized , please login" });
  }
});

module.exports = protect;
