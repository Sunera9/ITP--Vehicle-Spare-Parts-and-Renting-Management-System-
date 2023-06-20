const mongoose = require('mongoose')
const cartItemModel = require('../models/cartItem')
const Supply = require('../models/supplyModel')
// const Product = require('../models/productModel');



function addItemToCart(req,res){
    console.log(req.body);
    if(req.user){ 
        console.log(req.body.productId)

        let{productId, qty} = req.body
        console.log(productId,qty)
        console.log(req.body)
        cartItemModel.find({userId : req.user._id , productId : productId}).then((response)=>{
            console.log(response.length)
            if(response.length !=0){
                qty += response[0].qty
                console.log(qty)
                updateQty(req,res)
                console.log('Reached')
            }else{
                let cart = new cartItemModel();        
                cart.userId = req.user._id
                cart.productId = productId
                cart.qty = qty
                cart.save().then((response)=>{
                res.send(response)
        })
            }
        })
        
    }else{
        res.send("please login")
    }   
}
function findOneItem(userId,productId){
    return cartItemModel.find({userId : userId , productId : productId})
    
}
function updateQty(req,res){
    
    if(req.user){
        const{productId, qty} = req.body
        if(qty<=0){
            res.send("cart qty cannot be a negative or zero")
        }else{
            cartItemModel.updateOne({userId : req.user._id , productId : productId},{$set : {
                qty : qty            
            }}).then((result)=>{
                res.send(result)
            })
        }
        
    }else{
        res.send("please login before update address")
    }
}
function deleteItem(req,res){
    if(req.user){
        const{productId} = req.body
        cartItemModel.deleteOne({userId  : req.user._id , productId : productId}).then((response)=>{
            res.send(response)
        })
    }else{
        res.send("please login")
    }
}
function getCart(req,res){
    if(req.user){
        
        cartItemModel.aggregate([{
            $lookup:{
                from : "products",
                localField : "productId",
                foreignField : "_id",
                as : "item"
            }
        },{
            $match : {"userId" : new mongoose.Types.ObjectId(req.user._id)}
        }]).then((response)=>{
            res.send(response)
        })
    }else{
        res.send("please login to view cart")
    }
}

module.exports = {
        addItemToCart,
        updateQty,
        deleteItem,
        getCart,

}