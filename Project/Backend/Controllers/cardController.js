const mongoose = require("mongoose");
const cardSchema = require( "../models/card.js");

const cardModel = mongoose.model("cards", cardSchema)

function addCard(req,res){
    if(req.user){
        let card = new cardModel()
        card.cardNumber = req.body.cardNumber
        card.cardType = req.body.cardType
        card.expiryDate = req.body.expiryDate
        card.ownerName = req.body.ownerName
        card.cvv = req.body.cvv
        card.userId = req.user._id
        card.save().then((result)=>{
            res.send(result)
        })
    }else{
        res.send("please login before add cards")
    }
}
function deleteCard(req,res){
    if(req.user){
        cardModel.deleteOne({_id: req.body.cardId , userId : req.user._id}).then((result)=>{
            res.send(result)
        })
    }else{
        res.send("please login before delete cards")
    }
}
function getAllCards(req,res){
    if(req.user){
        cardModel.find({userId : req.user._id}).then((result)=>{
            res.send(result)
        })
    }else{
        res.send("please login before view cards")
    }
}
function getCard(req,res){
    if(req.user){
        cardModel.findOne({_id: req.body.cardId , userId : req.user._id}).then((result)=>{
            res.send(result)
        })
    }else{
        res.send("please login before view cards")
    }
}
function updateCard(req,res){
    if(req.user){
        cardModel.updateOne({_id: req.body.cardId , userId : req.user._id},{$set:{
            cardNumber : req.body.cardNumber,
            cardType : req.body.cardType,
            expiryDate : req.body.expiryDate,
            ownerName : req.body.ownerName,
            cvv : req.body.cvv
        }}).then((result)=>{
            res.send(result)
        })
    }else{
        res.send("please login before update cards")
    }
}
module.exports = {
    updateCard,
    getCard,
    getAllCards,
    deleteCard,
    addCard
}