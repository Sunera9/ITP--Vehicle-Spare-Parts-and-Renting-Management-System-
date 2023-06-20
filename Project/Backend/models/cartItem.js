const mongoose = require('mongoose')
const supplyModel = require('../models/supplyModel')
const {ObjectId} = require('mongodb')
const cartItemSchema = mongoose.Schema(
    {
        userId : ObjectId,
        productId : {
            type: mongoose.Schema.Types.ObjectId,
            required: true           
          },
        qty : Number
    }
    
)
const cartItemModel =  new mongoose.model("cartItem",cartItemSchema)

module.exports = cartItemModel