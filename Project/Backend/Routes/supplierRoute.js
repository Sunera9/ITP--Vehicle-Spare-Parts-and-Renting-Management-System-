const express =require("express");

const { registerSupplier, loginSupplier, logout, getSupplier, loginStatus } = require("../Controllers/supplierController");
const protect = require("../middleWare/authMiddleware");
const router = express.Router();

router.post("/register", registerSupplier); 
router.post("/login", loginSupplier);
router.get("/logout", logout);
router.get("/getsupplier", protect, getSupplier);
router.get("/loggedin", loginStatus);

module.exports = router;