const { Router } = require("express")
const { productsController } = require("../controller/products")
const { isUserAuthenticated } = require("../middleware/isUserAuthenticated")
const productsRouter = Router()

productsRouter.get("/", isUserAuthenticated, productsController.getProducts)

module.exports = { productsRouter }
