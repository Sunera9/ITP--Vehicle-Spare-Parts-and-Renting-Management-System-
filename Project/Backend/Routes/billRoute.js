const express = require ("express");
const router = express.Router();

const { addBill , getBills, deleteBill, getBill, updateBill, searchBill } = require("../Controllers/billController");
const { addPendingBill, getPendingBills, getPendingBill, deletePendingBill, updatePendingBill, searchPendingBill } = require("../Controllers/pendingBillController");
const { downloadBillReport } = require("../utils/reportBill");
const { downloadPendingBillReport } = require("../utils/reportPendingBill");
const { sendEmail } = require("../utils/sendPendingBillEmail");

router.post ("/add", addBill);
router.get ("/", getBills);
router.get ("/:id", getBill)
router.delete ("/:id", deleteBill);
router.put ("/:id", updateBill);
router.get ("/search/:key", searchBill);

router.post ("/pending/add", addPendingBill);
router.get ("/pending/getAll", getPendingBills);
router.get ("/pending/:id", getPendingBill);
router.delete ("/pending/:id", deletePendingBill);
router.put ("/pending/:id", updatePendingBill);
router.get ("/pending/search/:key", searchPendingBill);

router.get ("/download_report/bill", downloadBillReport);
router.get ("/download_report/pending_bill", downloadPendingBillReport);

router.post ("/pending/sendEmail", sendEmail);

module.exports = router