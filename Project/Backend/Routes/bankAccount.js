const express = require("express")
const { addBankAccount, deleteBankAccount, getAllBankAccounts, getBankAccount, updateBankAccount } = require( "../Controllers/bankAccountController.js")

const bankAccountsRouter = express.Router()

bankAccountsRouter.post("/addBankAccount",addBankAccount)
bankAccountsRouter.get("/getAllBankAccounts",getAllBankAccounts)
bankAccountsRouter.get("/getBankAccount",getBankAccount)
bankAccountsRouter.put("/updateBankAccount",updateBankAccount)
bankAccountsRouter.delete("/deleteBankAccount",deleteBankAccount)

module.exports =  bankAccountsRouter