const { Router } = require("express")
const { addToCartController } = require("../controller/addToCart")
const addToCartRouter = Router()

addToCartRouter.get("/", addToCartController.getAddToCart)
module.exports = { addToCartRouter }
