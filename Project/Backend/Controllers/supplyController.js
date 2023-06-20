const asyncHandler = require("express-async-handler");
const Supply = require("../models/supplyModel");
const PDFDocument =require("pdfkit");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");


//Create Supply
const createSupply = asyncHandler(async (req, res) => {
    const { company_name, item_name, quantity, price, Order_status, date } = req.body;

    //Validation
    if (!company_name || !item_name || !quantity || !price || !Order_status || !date) {
        res.status(400);
        throw new Error("Please fill in all feilds");
    }

    
    //Create supply
    const supply = await Supply.create({
        company_name,
        item_name,
        quantity,
        price,
        Order_status,
        date,
    })

    res.status(201).json(supply);
});




//Get all supplys
const getSupplys = asyncHandler(async (req, res) => {
    const supplys = await Supply.find().sort("-createdAt");
    res.status(200).json(supplys);
});

//Get single supply
const getSupply = asyncHandler(async (req, res) => {
    const supply = await Supply.findById(req.params.id)

    if (!supply) {
        res.status(404)
        throw new Error("Supply not found");
    }
    res.status(200).json(supply);
});


//deleting a supply detail
const deleteSupply = asyncHandler(async(req,res) => {
    const {id} = req.params
    const supply = await Supply.findOneAndDelete({_id:id})

    if(!supply){
        res.status(400)
        throw new Error("Supply detail not found")
    }

    res.status(200).send("Supply detail deleted successfully")
});
 

//update supply detail
const updateSupply = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Supply detail'})
    }

    const supply = await Supply.findOneAndUpdate({_id: id}, {
         ...req.body
    })

     //check wthr the supply detail is available
     if(!supply){
        return res.status(404).json({error: 'Supply detail not found'})
    }

    res.status(200).json(supply)
}



//Generate pdf
async function reportOfSupplys (req, res) {
    try {
        //query the mongodb database for the data
        const data = await Supply.find ({});

        //set the response headers to indicate that we are sending a pdf file
        res.setHeader ("Content-Type", "application/pdf");
        res.setHeader ("Content-Disposition", "attachment; filename = supply_report.pdf");

        //create a new instance of the PDFDocument class and pipe it to the response object
        const doc = new PDFDocument();
        doc.pipe (res);

        //display the topic
        doc.font ('Helvetica-Bold');
        doc.fontSize (20).text ("Shantha Motors", {align: 'center'});
        doc.fontSize (16).text ("Supplier Management\nReport of Supplys\n\n", {align: 'center'});

        //loop through the data and add it to the pdf document
        data.forEach ((supply) => {
            doc.font ('Helvetica');
            doc.fontSize (12);
            doc.text (`Supply Id : ${supply._id}`);
            doc.text (`Company : ${supply.company_name}`);
            doc.text (`Item Name : ${supply.item_name}`);
            doc.text (`Quantity : ${supply.quantity}`);
            doc.text (`Price : ${supply.price}`);
            doc.text (`Order Status : ${supply.Order_status}`);
            doc.text (`Date : ${supply.date}`);
            doc.moveDown();
        });

        //finalize the pdf document and end the response
        doc.end();

    } catch (error) {

        console.error (error);
        res.status (500).send ("Server error");
    }
}




//search function
const searchSupply = asyncHandler( async(req,res)=>{

    //console.log(req.params.key)
  
     let data = await Supply.find(
        {
           "$or":[
              {company_name:{$regex:req.params.key}},
              {item_name:{$regex:req.params.key}}
           ]
        }
     )
     res.send(data)
  });
  

  //send Emails
const sendMessage = (req, res) => {
const { subject, message, receiverEmail } = req.body;

// validate inputs
if (!subject || !message || !receiverEmail) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // check if the email address is valid 
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(receiverEmail)) {
    return res.status(400).json({ error: "Invalid email address" });
  }
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: "ranurividyaratna@outlook.com",
      pass: "zxcvb88zxcvb",
    },
  });

  // send mail with defined transport object
  let mailOptions = {
    from: "ranurividyaratna@outlook.com", // sender address
    to: receiverEmail, // receiver email 
    subject: subject, 
    text: message, 
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);

    } else {
      console.log("Message sent: %s", info.messageId);
    }
  });
};



module.exports = {
    createSupply,
    getSupplys,
    getSupply,
    deleteSupply,
    updateSupply,
    searchSupply,
    reportOfSupplys,
    sendMessage,

};