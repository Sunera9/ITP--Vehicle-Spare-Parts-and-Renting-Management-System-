const mongoose = require("mongoose");
const addressSchema = require ("../models/address.js");
const addressModel = mongoose.model("addresses",addressSchema)

function addAddress(req,res){
    if(req.user){
        let address = new addressModel()
        address.userId = req.user._id
        address.address = req.body.address
        address.phone = req.body.phone
        address.name = req.body.name
        address.save().then((result)=>{
            res.send(result)
        })
    }else{
        res.send("please login before add  addresses.")
    }
}
function deleteAddress(req,res){
    if(req.user){
        addressModel.deleteOne({_id : req.body.addressId , userId  : req.user._id}).then((result)=>{
            res.send(result)
        })
    }else{
        res.send("please login  before deleting address")
    }
}
function getAllAddresses(req,res){
    if(req.user){
        addressModel.find({userId : req.user._id}).then((result)=>{
            res.send(result)
        })
    }else{
        res.send("Please login before get your address list")
    }
}
function getAddress(req,res){
    if(req.user){
        addressModel.findOne({userId : req.user._id , _id : req.body.addressId }).then((result)=>{
            res.send(result)
        })
    }else{
        res.send("Please login before get address")
    }
}
function updateAddress(req,res){
    if(req.user){
        addressModel.updateOne({userId : req.user._id , _id : req.body.addressId},{$set : {
            address : req.body.address , 
            phone : req.body.phone , 
            name : req.body.name
            
        }}).then((result)=>{
            res.send(result)
        })
    }else{
        res.send("please login before update address")
    }
}
module.exports = {
    updateAddress,
    getAddress,
    getAllAddresses,
    deleteAddress,
    addAddress
}