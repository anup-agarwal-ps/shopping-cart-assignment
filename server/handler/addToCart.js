const { Router } = require("express")
const { addToCartController } = require("../controller/addToCart")
const { isUserAuthenticated } = require("../middleware/isUserAuthenticated")
const addToCartRouter = Router()

addToCartRouter.get("/", isUserAuthenticated, addToCartController.getAddToCart)
module.exports = { addToCartRouter }
