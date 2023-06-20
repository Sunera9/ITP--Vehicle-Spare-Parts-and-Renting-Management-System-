const asyncHandler = require("express-async-handler");
const PDFDocument = require("pdfkit");
const Product = require("../models/productModel");
const { fileSizeFormatter } = require("../utils/fileupload");
const nodemailer = require('nodemailer');
const cron = require("node-cron");


const createProduct = asyncHandler(async(req,res) => {

    
    const {name,itemId,category,quantity,price,description}= req.body;

    //validation
   if(!name || !category || !quantity || !price || !description) {
        res.status(400);
        throw new Error("Please fill in all fields");

    }
    //handle the image upload
    /*let fileData ={}
    if(req.file){
        fileData = {
            //fileName: req.file.originalname,
            filePath: req.file.path,
            //fileType: req.file.mimetype,
            //fileSize: req.file.size ,
        }
    }*/

    //create product
    const products= await Product.create({
        //user: req.user.id,
        name,
        itemId,
        category,
        quantity,
        price,
        description,
        image:req.file.path

    })

    res.status(201).json(products)
});

// get all products

const getProducts = asyncHandler(async (req,res) => {
    const products = await Product.find().sort("-createdAt");
    res.status(200).json(products)
});

//delete products

const deleteProduct =asyncHandler(async (req,res) => {

    const {id} = req.params
    const product = await Product.findOneAndDelete({_id:id})
    //const product = await Product.findById(req.params.id);
    //if product dosent exist
    if(!product){
        res.status(404);
        throw new Error("Product not Found");
    }
    //await product.remove();
    res.status(200).json(product);
});

//update product
//const updateProduct = asyncHandler(async (req,res) => {
    //res.send("Update")

    const updateProduct = asyncHandler(async(req,res) => {

    
        const {name,category,quantity,price,description}= req.body;
        const {id} = req.params

        const product = await Product.findById(id)

          //if product dosent exist
        if(!product){
        res.status(404);
        throw new Error("Product not Found");
    }
    
      
        //handle the image upload
        let fileData ={}
        if(req.file){
            fileData = {
               // fileName: req.file.originalname,
                filePath: req.file.path,
                //fileType: req.file.mimetype,
                //fileSize: req.file.size ,
            }
        }
    
        //update product
        const updateProduct = await Product.findByIdAndUpdate(
            {_id: id},
            {
                name,
                category,
                quantity,
                price,
                description,
                //image:fileData || product.image,
            },
            {
                new: true,
                runValidators: true
            }
        )


       
    
        res.status(200).json(updateProduct);
    });

//});

//serch product
const serchProduct = async (req, res) => {

    let data = await Product.find(
        {
            "$or": [
                    {name: {$regex: req.params.key}},
                   

                
            ]
        }
    )
    res.send (data);
}

//generating pdf
async function downloadProductReport(req,res){
    try{
        //query the mongodb database for the data
        const data = await Product.find({});
        //set the response heders to indicate that sending a pdf file
        res.setHeader("Content-Type","application/pdf");
        res.setHeader("Content-Disposition","attachment;filename=product_report.pdf");

        //create a new instance of the PDFDocument class and pipe it to the response object
        const doc = new PDFDocument();
        doc.pipe(res);
      
        doc.font('Helvetica-Bold');
        doc.fontSize(17).text("Shantha Motors", {align: 'center'});
        doc.fontSize(10).text("Store Product Details",{align:'center'});
        doc.fillColor('black');
         doc.text(`\n`);
        //loop through the data and add it to the pdf document
        data.forEach((products) => {
      
        doc.roundedRect(50,50,500,700,10).strokeColor('black').lineWidth(2).stroke();

            doc.text(`Product ID : ${products._id}`);
            doc.text(`Product Name : ${products.name}`);
            doc.text(`Product Category : ${products.category}`);
            doc.text(`Product Quantity : ${products.quantity}`);
            doc.text(`Product Price : ${products.price}`);
            doc.text(`Product Description : ${products.description}`);
            doc.text(`\n`);

        }
        
        );
        //finalized the pdf document and end the response
        doc.end();
    }catch(error){
        console.error(error);
        res.status(500).send("server error")
    }
}
//fetch images
const fetchImages = async (req, res) => {
    const filename = req.params.filename;
  res.sendFile(path.join(__dirname, 'uploads', filename));
  }
  const fetchAllItems = async (req, res) => {
    try {
      // Query the database to get all items
      const items = await Product.find({});
      
      // Return the total number of items in the response
      res.json({ totalItems: items.length });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  };

  const fetchItemsByCategory = async (req, res) => {
    try {
        // Fetch all products from the database
        const products = await Product.find();
    
        // Extract unique categories from the products
        const categories = [...new Set(products.map(product => product.category))];
    
        res.json({ categories });
      } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
      }
  };

  const fetchLowStockItems = async (req, res) => {
    try {
      const lowStockThreshold = 10; // Set low stock threshold value
      const items = await Product.find({});
      const lowStockItems = items.filter(item => item.quantity < lowStockThreshold);
      res.json(lowStockItems);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  };
  const sendLowStockEmail = async () => {
    try {
      // Fetch all products from the database with a quantity less than or equal to 10
     const lowStockThreshold = 10; // Set low stock threshold value
      const items = await Product.find({});
      const lowStockItems = items.filter(item => item.quantity < lowStockThreshold);
     // const lowStockItems = await Product.find({ quantity: { $lte: 10 } });

      if (lowStockItems.length > 0) {
        // Set up nodemailer transport and message options
        const transporter = nodemailer.createTransport({
          host: "smtp.office365.com",
          port: 587,
          secure: false,
          auth: {
            user: "kavisha3011@outlook.com",
            
            pass: "sanduni@1130",
          },
        });
        const message = {
          from: "kavisha3011@outlook.com",
          to: "kavishaperera1130@gmail.com",
          subject: "Low Stock Items",
          text: `The following items are low in stock:\n\n${lowStockItems
            .map((item) => `${item.name} (${item.quantity})`)
            .join("\n")}`,
        };
  
        // Send the email
        const info = await transporter.sendMail(message);
        console.log(`Low stock email sent: ${info.messageId}`);
      }
  
      // If there are low stock products, create and send the email
    
    } catch (error) {
      console.error(error);
    }
  };
  
  // Call the sendLowStockEmail function every hour
 // setInterval(sendLowStockEmail, 60 * 60 * 1000);
  cron.schedule('0 * * * *', sendLowStockEmail);
 // cron.schedule('*/1 * * * *', sendLowStockEmail);


module.exports ={
    createProduct,
    getProducts,
    deleteProduct,
    updateProduct,
    serchProduct,
    downloadProductReport,
    fetchAllItems,
    fetchItemsByCategory,
    fetchLowStockItems,
    fetchImages,
    
};