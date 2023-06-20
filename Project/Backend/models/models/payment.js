const mongoose = require("mongoose");

const { ObjectId } = require("mongodb");

const paymentSchema = mongoose.Schema(
    {      
        subtotal : Number,
        bonus : Number,
        shipping : Number,
        date : {type : Date , default : Date.now},
        type : String,
        status : String,
        address : String,
        phone : String,
        custName : String,
        paymentName : String,

        //
        // _id: {
        //     type: mongoose.Schema.Types.ObjectId,
        // }
    }
)
module.exports = paymentSchema




// const paymentSchema = mongoose.Schema({
//     subtotal: {
//       type: Number,
//       required: [true, "Please enter the subtotal"],
//     },
//     bonus: {
//       type: Number,
//       required: [true, "Please enter the bonus"],
//     },
//     shipping: {
//       type: Number,
//       required: [true, "Please enter the shipping cost"],
//     },
//     date: {
//       type: Date,
//       default: Date.now,
//     },
//     type: {
//       type: String,
//       required: [true, "Please enter the payment type"],
//     },
//     status: {
//       type: String,
//       required: [true, "Please enter the payment status"],
//     },
//     address: {
//       type: String,
//       required: [true, "Please enter the payment address"],
//     },
//     phone: {
//       type: String,
//       required: [true, "Please enter the phone number"],
//     },
//     custName: {
//       type: String,
//       required: [true, "Please enter the customer name"],
//     },
//     paymentName: {
//       type: String,
//       required: [true, "Please enter the payment name"],
//     },
//   });
  
//   module.exports = paymentSchema;