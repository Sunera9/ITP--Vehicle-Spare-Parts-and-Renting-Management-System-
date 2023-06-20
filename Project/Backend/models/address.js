const mongoose = require("mongoose");

const { ObjectId } = require("mongodb");

const addressSchema = mongoose.Schema(
    {
         userId : ObjectId,
        address : String,
        userId: ObjectId,
        address: String,
        name: String,
        phone: String,
    }
)
module.exports = addressSchema