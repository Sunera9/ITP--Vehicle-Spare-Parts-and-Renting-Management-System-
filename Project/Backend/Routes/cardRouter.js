const express =require("express")
const { addCard, deleteCard, getAllCards, getCard, updateCard } = require( "../Controllers/cardController.js")

const cardRouter = express.Router()
cardRouter.post("/addCard",addCard)
cardRouter.get("/getAllCards",getAllCards)
cardRouter.get("/getCard",getCard)
cardRouter.delete("/deleteCard",deleteCard)
cardRouter.put("/updateCard",updateCard)

module.exports = cardRouter;