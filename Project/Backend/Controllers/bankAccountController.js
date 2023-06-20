const mongoose = require('mongoose')

const bankAccountSchema = require("../models/bankAccount.js");

const bankAccountModel = mongoose.model("bankAccounts",bankAccountSchema)

function addBankAccount(req,res){
    if(req.user){
        let bankAccount = new bankAccountModel()
        bankAccount.bankName = req.body.bankName
        bankAccount.accountNumber = req.body.accountNumber
        bankAccount.phoneNumber = req.body.phoneNumber
        bankAccount.ownerName = req.body.ownerName
        bankAccount.userId = req.user._id
        bankAccount.save().then((result)=>{
            res.send(result)
        })
    }else{
        res.send("please login before adding bank accounts")
    }
}
function deleteBankAccount(req,res){
    if(req.user){
        bankAccountModel.deleteOne({_id : req.body.accountId , userId : req.user._id}).then((result)=>{
            res.send(result)
        })
    }else{
        res.send("please login before delete bank accounts")
    }
}
function getAllBankAccounts(req,res){
    if(req.user){
        bankAccountModel.find({userId : req.user._id}).then((result)=>{
            res.send(result)
        })
    }else{
        res.send("please login before view bank accounts")
    }
}
function getBankAccount(req,res){
    if(req.user){
        bankAccountModel.find({userId : req.user._id, _id : req.body.accountId}).then((result)=>{
            res.send(result)
        })
    }else{
        res.send("please login before retireve bank account details")
    }
}
function updateBankAccount(req,res){
    if(req.user){
        bankAccountModel.updateOne({_id : req.body.accountId , userId : req.user._id},{$set : {
            bankName : req.body.bankName,
            accountNumber : req.body.accountNumber,
            phoneNumber : req.body.phoneNumber,
            ownerName :req.body.ownerName 
        }}).then((result)=>{
            res.send(result)
        })
    }else{
        res.send("please login before update account details")
    }
}
module.exports = {
    addBankAccount,
    deleteBankAccount,
    getAllBankAccounts,
    getBankAccount,
    updateBankAccount
}