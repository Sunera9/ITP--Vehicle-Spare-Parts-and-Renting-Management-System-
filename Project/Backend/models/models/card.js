const mongoose = require("mongoose");

const { ObjectId } = require("mongodb");

const cardSchema = mongoose.Schema(
    {
        cardNumber : String,
        cardType : String,
        expiryDate : Date,
        ownerName : String,
        cvv : Number,
        userId : ObjectId
    }
)
module.exports = cardSchema