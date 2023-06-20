const mongoose = require("mongoose");

const supplySchema = mongoose.Schema({


  company_name: {
    type: String,
    required: [true, "Please add a name"],
    trim: true
  },

  item_name: {
    type: String,
    required: true,
    default: "SKU",
    trim: true
  },

  quantity: {
    type: String,
    required: [true, "Please add aquantity"],
    trim: true
  },
  price: {
    type: String,
    required: [true, "Please add a price"],
    trim: true
  },
  Order_status: {
    type: String,
    required: [true, "Please enter order status"],
    trim: true
  },

  date: {
    type: String,
    required: [true, "Please item received date"],
    default: "SKU",
  },

}, {
  timestamps: true,


});

const Supply = mongoose.model("Supply", supplySchema);
module.exports = Supply;