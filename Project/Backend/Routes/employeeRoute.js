const express = require("express");
const { registerEmployee, loginEmployee, logout, getEmployee, loginStatus,  updateEmployee, changePassword , deleteEmployee,  getAllEmployees, searchEmployee,printEmpID, markAttendance, downloadAttendance } = require("../Controllers/employeeController");
const protect = require("../middleware/authMiddleware");
const router = express.Router();
const {upload } = require("../utils/empFileUpload");



// employee Routes
router.post("/register",upload.single("profile_pic") ,registerEmployee)
router.post("/login", loginEmployee)
router.get("/logout", logout)
router.get("/getEmployee", protect ,getEmployee)
router.get("/loggedin", loginStatus)
router.patch("/updateEmployee",protect ,updateEmployee)
router.patch("/changePassword",protect, changePassword)
router.delete("/deleteEmployee/:id",protect,deleteEmployee)
router.get("/getAll", getAllEmployees)
router.get("/searchEmployee/:key", searchEmployee)
router.get("/getEmpID/:id", printEmpID)
router.post("/attendance/:id", markAttendance)
router.get("/attendance/download", downloadAttendance)

module.exports = router;