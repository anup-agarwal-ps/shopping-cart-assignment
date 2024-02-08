const { Router } = require("express")
const { productsController } = require("../controller/products")
const productsRouter = Router()

productsRouter.get("/", productsController.getProducts)

module.exports = { productsRouter }
