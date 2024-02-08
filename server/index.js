require("dotenv").config()
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const { bannerRouter } = require("./handler/banner")
const { authRouter } = require("./handler/auth")
const { categoriesRouter } = require("./handler/categories")
const { productsRouter } = require("./handler/products")
const { addToCartRouter } = require("./handler/addToCart")
const app = express()
const port = process.env.PORT

app.use(cors())
app.use(bodyParser.json())

app.use("/banners", bannerRouter)
app.use("/auth", authRouter)
app.use("/categories", categoriesRouter)
app.use("/products", productsRouter)
app.use("/addToCart", addToCartRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
