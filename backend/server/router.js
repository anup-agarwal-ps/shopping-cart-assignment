const { bannerRouter } = require("./handler/banner")
const { authRouter } = require("./handler/auth")
const { categoriesRouter } = require("./handler/categories")
const { productsRouter } = require("./handler/products")
const { addToCartRouter } = require("./handler/addToCart")
const Router = require("express").Router()

Router.use("/banners", bannerRouter)
Router.use("/auth", authRouter)
Router.use("/categories", categoriesRouter)
Router.use("/products", productsRouter)
Router.use("/addToCart", addToCartRouter)

module.exports = { Router }