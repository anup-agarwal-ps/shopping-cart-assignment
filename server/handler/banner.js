const { Router } = require("express")
const { bannerController } = require("../controller/banner")
const bannerRouter = Router()

bannerRouter.get("/", bannerController.getBanners)

module.exports = { bannerRouter }