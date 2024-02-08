const { Router } = require("express")
const { categoriesController } = require("../controller/categories")
const { isUserAuthenticated } = require("../middleware/isUserAuthenticated")
const categoriesRouter = Router()

categoriesRouter.get(
  "/",
  isUserAuthenticated,
  categoriesController.getCategories
)

module.exports = { categoriesRouter }
