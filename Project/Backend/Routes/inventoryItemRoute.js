const express = require("express");
const router = express.Router();

const { addInventoryItem, getInventItemDetails, updateInventory, getInventAllItem, deleteInventItem, searchInventItem, fetchAllInventItems, fetchInventItemsByCategory,fetchLowStockInventItem, reportOfInventory, sendLowStockMail} = require("../Controllers/inventoryItemController");




//create data in a database & upload image
router.post("/addInventoryItem",/*upload.single("itemImage")*/addInventoryItem);
//retrieve inventory item details
router.get("/getInventItemDetails/:id", getInventItemDetails);
//update router
router.put("/updateInventDetails/:id", updateInventory);
//retrieve all added items
router.get("/getAll", getInventAllItem);
//delete router
router.delete("/delete/:id",deleteInventItem);
//fetch All items
router.get("/fetchAllInventItems", fetchAllInventItems);
//fetch low stock items
router.get("/low-stock-invent", fetchLowStockInventItem );
//fetch  items by category
router.get("/condition/:condition", fetchInventItemsByCategory );
//search router
router.get("/searchInventItem/:key", searchInventItem );
//Download Item report
router.get("/print", reportOfInventory)
//send email about low stock items in the inventory
router.post("/sendLowStockMail", sendLowStockMail);

module.exports = router;