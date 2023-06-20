const express = require("express")
const { addAddress, deleteAddress, getAddress, getAllAddresses, updateAddress } = require("../Controllers/addressController.js")

const addressRouter = express.Router()
addressRouter.post("/addAddress",(req,res)=>{
    addAddress(req,res)
})
addressRouter.delete("/deleteAddress",(req,res)=>{
    deleteAddress(req,res)
})
addressRouter.get("/allAddresses",(req,res)=>{
    getAllAddresses(req,res)})
addressRouter.put("/updateAddress",(req,res)=>{updateAddress(req,res)})
addressRouter.get("/address",(req,res)=>{getAddress(req,res)})
module.exports = addressRouter