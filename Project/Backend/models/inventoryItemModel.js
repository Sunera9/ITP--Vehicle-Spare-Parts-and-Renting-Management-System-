//create Inventory item Model
const mongoose = require("mongoose")

//create schema
const inventoryItemSchema = mongoose.Schema({
    
    itemName:{
        type:String,
        required:[true,"Please add a Item Name"],
        trim: true //trim if there's space around a name
    },
    sku:{
        type:String,
        required:[true],
        default: "SKU",
        maxlength: 8
    },
    recieveDate: {
        type: Date,   //mm/dd/yy
        required: [true, "Please add Recieve Date"],
        
    },
    category:{
        type:String,
        trim:true
    },
    condition:{
        type:String,
        required:[true,"Please add a item condition"],
        trim:true
    },
    brand:{
        type:String,
        required:true,
        trim:true,
        
    },
    initialPrice:{
        type:Number,
        required:[true,"Please add a Price (per item)"],
        default: 0,
        trim:true
    
    },
    initialQuantity:{
        type:Number,
        required:[true,"Please add a Quantity"],
        trim:true
    },
    
    quantityOut:{
        type:Number,
        trim:true,
        default: 0,
    },
    quantityAvailable:{
        type:Number,
        trim:true,
        
    },
    totalPrice:{
        type:Number,
        trim:true
    },
    supplier:{
        type:String,
        trim: true //trim if there's space around a name
        
    },
    

},
{
    timestamps:true,
})

//access schema
const Inventory_Item = mongoose.model("inventory-items", inventoryItemSchema);
module.exports = Inventory_Item;