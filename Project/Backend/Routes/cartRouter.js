const express = require('express')
const { getSupplys, createSupply } = require('../controllers/supplyController')
const { addItemToCart, updateQty, deleteItem, getCart } = require('../Controllers/cartController')


const CartRouter = express.Router()

CartRouter.post("/",addItemToCart)
CartRouter.put("/",updateQty)
CartRouter.delete("/",deleteItem)
CartRouter.get("/",getCart)
CartRouter.get("/allSupplies",getSupplys)
CartRouter.post("/insertSupply",createSupply)


module.exports = CartRouter
