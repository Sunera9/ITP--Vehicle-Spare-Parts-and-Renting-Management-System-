const express = require("express");
const router = express.Router();

const { createProduct, getProducts, deleteProduct, updateProduct,serchProduct, downloadProductReport 
    ,fetchAllItems,fetchItemsByCategory,fetchLowStockItems, fetchImages
} = require("../controllers/productController");
//const { Subscribers, productavalability }= require("../controllers/subcriberController");
const {upload} = require("../utils/fileupload");



router.post("/addProduct", upload.single("image"),createProduct);
router.get("/", getProducts);
router.delete("/:id", deleteProduct);
router.put("/:id", upload.single("image"),updateProduct);
router.get("/serch/:key",serchProduct);
router.post("/reports/generate",downloadProductReport);
router.get('/fetchAllItems', fetchAllItems);
router.get('/category/:category', fetchItemsByCategory);
//router.post("/subcriber",Subscribers);
//router.put("/product/:id",productavalability);
router.get('/low-stock/:threshold', fetchLowStockItems);
router.get('/uploads\:filename', fetchImages);




module.exports = router;