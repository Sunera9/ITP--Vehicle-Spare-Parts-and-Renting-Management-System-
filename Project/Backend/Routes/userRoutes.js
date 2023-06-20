const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
  updateUser,
  getAllUsers,
  forgotPassword,
  changePassword,
  resetpassword,
  deleteUser,
  loginStatus,
  printUserID,
  searchUser,
  restrictUser,
  unrestrictUser,
} = require("../Controllers/userController");
const router = express.Router();
const protect = require("../middleware/userAuthMiddleware");
// const { getLoginStatus } = require("../../frontend/src/services/authService");
const { upload } = require("../utils/UserFileUpload");

router.post("/register", upload.single("photo"), (req, res) => {
  registerUser(req, res);
});

router.post("/login", (req, res) => {
  loginUser(req, res);
});

router.get("/logout", (req, res) => {
  logoutUser(req, res);
});

router.get("/getUser", protect, (req, res) => {
  getUser(req, res);
});

router.patch("/updateUser", protect, (req, res) => {
  updateUser(req, res);
});

router.patch("/changePassword", protect, (req, res) => {
  changePassword(req, res);
});

router.post("/forgotPassword", (req, res) => {
  forgotPassword(req, res);
});

router.put("/resetpassword/:resetToken", (req, res) => {
  resetpassword(req, res);
});

router.delete("/deleteUser/:id", (req, res) => {
  deleteUser(req, res);
});
router.get("/getAllUsers", getAllUsers);

router.get("/loggedin", loginStatus);

router.get("/getPdf", printUserID);

router.get("/searchUser/:key", searchUser);

router.put("/:id/restrict", restrictUser);

router.put("/:id/unrestrict", unrestrictUser);

module.exports = router;
