//SupplierFormModel 

const mongoose = require("mongoose");

const SupplierFormSchema = new mongoose.Schema({

   full_name: {
      type: String,
      required: [true, "Please add the company name"]
   },

   available_item_list: {
    type: String,
    required: [true, "Please add the avaliable items"]
 },

  unit_prices: {
    type: String,
    required: [true, "Please add the unit prices of aforementioned items"]
 },

 Quality_description: {
    type: String,
    required: [true, "Please add a Quality description"]
 },
   
}, {
   timestamps: true,
}
);



const SupplierForm = mongoose.model("SupplierForm", SupplierFormSchema)
module.exports = SupplierForm; 