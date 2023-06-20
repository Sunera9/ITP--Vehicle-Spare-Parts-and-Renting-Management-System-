const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");


const bankAccountSchema = mongoose.Schema(
    {
        bankName : String,
        accountNumber : Number,
        phoneNumber : String,
        ownerName : String,
        userId : ObjectId
    }
)
module.exports = bankAccountSchema