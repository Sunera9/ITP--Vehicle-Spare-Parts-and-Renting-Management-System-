const express =require("express");
const { createSupply, getSupplys, getSupply, deleteSupply, updateSupply, searchSupply,  reportOfSupplys, sendMessage } = require("../Controllers/supplyController");
const protect = require("../middleWare/authMiddleware");
const router = express.Router();

router.post("/create", createSupply);
router.get("/allsupplys", getSupplys);
router.get("/single/:id", getSupply);
router.delete("/Delete/:id", deleteSupply);
router.patch("/:id", updateSupply);
//router.get("/print/:id", reportOfSupplys );
router.get("/print", reportOfSupplys );
router.get("/searchSupply/:key", searchSupply);
router.post("/send-message",sendMessage);

module.exports = router;
