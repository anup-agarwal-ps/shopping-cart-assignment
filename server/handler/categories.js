const { Router } = require("express")
const { categoriesController } = require("../controller/categories")
const categoriesRouter = Router()

categoriesRouter.get("/", categoriesController.getCategories)

module.exports = { categoriesRouter }
