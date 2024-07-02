const { Router } = require("express")
const { bannerController } = require("../controller/banner")
const { isUserAuthenticated } = require("../middleware/isUserAuthenticated")
const bannerRouter = Router()

bannerRouter.get("/", isUserAuthenticated, bannerController.getBanners)

module.exports = { bannerRouter }
