const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
   
    name:{
        type: String,
        required:[true, "Please add a name"],
        trim: true
    },
    itemId:{
        type: String,
        required: true,
        default: function () {
            return "IT" + Math.floor(1000 + Math.random() * 9000);
         }, // Generates a 4-digit random ,
        trim: true
    },
    category:{
        type: String,
        required:[true,"Please add a category"],
        trim: true
    },
    quantity:{
        type: String,
        required:[true,"Please add quantity"],
        trim: true
    },
    price:{
        type: Number,
        required:[true,"Please add a price"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please add a description"],
        trim: true
    },
    image:{
        type: String,
        //default:{}
        data: Buffer
    },
    avalability:{
        type:Boolean,

    },
    subscribers:[
        {
            type:mongoose.Schema.Types.ObjectId,ref:'Subscriber'
        }
    ]

},{
    timestamps:true,
});

const Product = mongoose.model("Product",productSchema);
module.exports=Product;