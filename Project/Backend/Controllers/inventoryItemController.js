const asyncHandler = require("express-async-handler");
const Inventory_Item = require("../models/inventoryItemModel");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const PDFDocument = require("pdfkit"); //pdf generate library
const nodemailer = require('nodemailer'); //email library



//add new item to the inventory
const addInventoryItem =  asyncHandler( async(req,res) => {

   //getting information from the body of the request
   const {
    itemName,sku,recieveDate,category,condition,brand,initialPrice,initialQuantity, supplier} = req.body;

   //validation
   if (!itemName || !sku || !recieveDate || !category || !condition || !brand || !initialPrice || !initialQuantity || !supplier ){
    res.status(400)
    throw new Error ("Please fill the all required fields");
   }

  // calculate the totalPrice
  const totalPrice = initialPrice * initialQuantity;

   //check if item Name is already exists
   const inventoryItemExists = await Inventory_Item.findOne({itemName});

   if (inventoryItemExists){
    res.status(400);
    throw new Error ("Item Id is already exist");
   }


   //create new Item to the Inventory
   const InventoryItem = await Inventory_Item.create ({
    itemName,
    sku,
    recieveDate,
    category,
    condition,
    brand,
    initialPrice,
    initialQuantity,
    totalPrice,
    supplier,
    
   });

   res.status(201).json(InventoryItem)
});

//UPDATE
const updateInventory = asyncHandler(async(req,res) => {

    const {itemName,sku,condition,initialQuantity,quantityOut,totalPrice}= req.body;
    const {id} = req.params

    const inventItem = await Inventory_Item.findById(id)

      //if product dosent exist
    if(!inventItem){
    res.status(404);
    throw new Error("Invent Item not Found");
}

// Calculate quantityAvailable
const quantityAvailable = initialQuantity - quantityOut;

// Get the initialPrice from the database
const initialPrice = inventItem.initialPrice;

// Calculate totalPrice
const calculatedTotalPrice = isNaN(quantityAvailable * initialPrice) ? 0 : quantityAvailable * initialPrice;




//update product
    const updateInvent = await Inventory_Item.findByIdAndUpdate(
        {_id: id},
        {
            itemName,
            sku,
            condition,
            initialQuantity,
            quantityOut,
            quantityAvailable,
            totalPrice: calculatedTotalPrice,
        },
        {
            new: true,
            runValidators: true
        }
    )

res.status(200).json(updateInvent);
});


//get Inventory item details
const getInventItemDetails = async(req,res) => {
    const{id} =req.params

    const InventoryItem = await Inventory_Item.findById(id)

    if (!InventoryItem) {
        return res.status(404).json({error:"Item Not Found in the Inventory"})
    }

    res.status(200).json(InventoryItem)
}



//get all products
const getInventAllItem = asyncHandler(async(req,res) => {
    const InventoryItem = await Inventory_Item.find({}) .sort("-createdAt")

    res.status(200).json(InventoryItem )
    
});


//delete item from inventory
const deleteInventItem =asyncHandler(async (req,res) => {

    const {id} = req.params
    const inventoryItem = await Inventory_Item.findOneAndDelete({_id:id})
    
    //if product dosent exist
    if(!inventoryItem){
        res.status(404);
        throw new Error("Item is not Found in the Inventory");
    }
    //await product.remove();
    res.status(200).json(inventoryItem);
});

//fetch Items
const fetchAllInventItems = async(req,res) =>{
    try {
        //query database to get all invent items
        const inventoryItem = await Inventory_Item.find({});

        //retrun total Numbers of invent items 
        res.json({totalItems: inventoryItem.length});

    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};
const fetchInventItemsByCategory = async (req, res) => {
    try {
        // Fetch all products from the database
        const inventoryItem = await Inventory_Item.find();
    
        // Extract unique categories from the products
        const categories = [...new Set(inventoryItem.map(inventItm => inventItm.condition))];
    
        res.json({ categories });
      } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
      }
  };


  //fetch Low stock items
  const fetchLowStockInventItem = asyncHandler(async (req, res) => {
    const lowStockItems = await Inventory_Item.find({ quantityAvailable: { $lt: 200 } });
  
    res.status(200).json(lowStockItems);
  });


//search function
const searchInventItem = asyncHandler( async(req,res)=>{
    // console.log(req.params.key)
    
     let data = await Inventory_Item.find(
        {
           "$or":[
              {itemName:{$regex:req.params.key}},
              {condition:{$regex:req.params.key}}
           ]
        }
     )
     res.send(data)
  })


//Generate PDF
async function reportOfInventory (req, res) {
  try {
      //query the mongodb database for the data
      const data = await Inventory_Item.find ({});

      //set the response headers to indicate that we are sending a pdf file
      res.setHeader ("Content-Type", "application/pdf");
      res.setHeader ("Content-Disposition", "attachment; filename = invent_report.pdf");

      //create a new instance of the PDFDocument class and pipe it to the response object
      const doc = new PDFDocument();
      doc.pipe (res);

      //display the topic
      doc.font ('Helvetica-Bold');
      doc.fontSize (20).text ("Shantha Motors", {align: 'center'});
      doc.fontSize (16).text ("Inventory Management\nReport of Invetory Details\n\n", {align: 'center'});

      let totalItems = 0;
      let totalPrice = 0;

      

      //loop through the data and add it to the pdf document
      
      data.forEach ((invent) => {
          doc.font ('Helvetica');
          doc.fontSize (12);
          doc.text (`Invent Id : ${invent._id}`);
          doc.text (`Item Name : ${invent.itemName}`);
          doc.text (`SKU Number : ${invent.sku}`);
          doc.text (`Recieve Date : ${invent.recieveDate}`);
          doc.text (`Category : ${invent.category}`);
          doc.text (`Condition : ${invent.condition}`);
          doc.text (`Brand : ${invent.brand}`);
          doc.text (`Initial Price : ${invent.initialPrice}`);
          doc.text (`Quantity In : ${invent.initialQuantity}`);
          doc.text (`Quantity Out : ${invent.qunatityOut}`);
          doc.text (`Quantity Available : ${invent.quantityAvailable}`);
          doc.text (`Total Price : ${invent.totalPrice}`);
          doc.text (`Supplier : ${invent.supplier}`);
          doc.moveDown();

          // Increment the total items and total price
          totalItems += invent.initialQuantity;
          totalPrice += invent.totalPrice;
      });


      // Add total items and total price to the PDF document
      doc.text(`Total Number of Items: ${totalItems}`);
      doc.text(`Total Price of Inventory: ${totalPrice}`);


       
       //finalize the pdf document and end the response
       doc.end();

      } catch (error) {
  
          console.error (error);
          res.status (500).send ("Server error");
      }
  }







//send email to the supplier with the Low stock item details
const sendLowStockMail = asyncHandler(async (req, res) => {
  try {
    // fetch low stock items
    const lowStockItems = await Inventory_Item.find({ quantityAvailable: { $lt: 200 } });
  
    // create message to send
    const message = {
      from: 'isharaak56@gmail.com', //sender email
      to: 'akachini995@gmail.com', //reciever email
      subject: 'Low Stock Items',
      html: `<p>The following items are low in stock:</p>
            <ul>
              ${lowStockItems.map(item => `<li>Item Name:${item.itemName} , SKU: ${item.sku} ,  Available Quantity: ${item.quantityAvailable} , Supplier: ${item.supplier}</li>`).join('')}
            </ul>`
    };
  
    // create transporter for email service
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'isharaak56@gmail.com', //sender email
        pass: 'tjlfzvenhjckxvtj' //sender email app password
      }
    });
  
    // send email
    const info = await transporter.sendMail(message);
    console.log(`Message sent: ${info.messageId}`);

    res.status(200).json({ message: 'Email sent' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});



//access it from create Inventory Item route
module.exports = {
    addInventoryItem,
    getInventItemDetails,
    updateInventory,
    getInventAllItem,
    deleteInventItem,
    fetchAllInventItems,
    fetchInventItemsByCategory,
    fetchLowStockInventItem,
    searchInventItem,
    reportOfInventory,
    sendLowStockMail,
    
    
};


