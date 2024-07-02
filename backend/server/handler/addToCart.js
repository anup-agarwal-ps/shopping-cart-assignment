const { Router } = require("express")
const { addToCartController } = require("../controller/addToCart")
const { isUserAuthenticated } = require("../middleware/isUserAuthenticated")
const addToCartRouter = Router()

addToCartRouter.post("/", isUserAuthenticated, addToCartController.AddToCart)
module.exports = { addToCartRouter }
