const multer = require("multer")
const express = require('express')
const { dirname } = require('path');
const appDir = dirname(require.main.filename);

const { createPayment, getAllPayments, markAsRecieved, genPDF } = require("../Controllers/paymentController")

const paymentRouter = express.Router()

const paymentStorage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'uploads/paymentSlips')
    },
    filename : (req,file,cb)=>{
        cb(null, file.originalname)
    }
})
const paymentUpload = multer({storage : paymentStorage})
paymentRouter.post('/pImg',paymentUpload.single('image'),(req,res)=>{
    res.send("success")
})
paymentRouter.get("/pimg/:id",(req,res)=>{
    res.sendFile(appDir+'/uploads/paymentSlips/'+req.params.id+'.jpg')
})
paymentRouter.post("/",createPayment)
paymentRouter.get("/",getAllPayments)
paymentRouter.get("/pdf",genPDF)
paymentRouter.put("/:id",markAsRecieved)
 module.exports= paymentRouter