require("dotenv").config()
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const { bannerRouter } = require("./handler/banner")
const { authRouter } = require("./handler/auth")
const { categoriesRouter } = require("./handler/categories")
const { productsRouter } = require("./handler/products")
const { addToCartRouter } = require("./handler/addToCart")
const { connectToDatabase } = require("./connection/mongo")
const { getRedisClient } = require("./connection/redis")
const serverlessHttp = require("serverless-http")
const { PORT } = require("./config/credentials")
const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use(express.static("build"))

app.use("/banners", bannerRouter)
app.use("/auth", authRouter)
app.use("/categories", categoriesRouter)
app.use("/products", productsRouter)
app.use("/addToCart", addToCartRouter)

const bootstrap = async () => {
  try {
    await Promise.all([connectToDatabase(), getRedisClient()])
    console.log("Database connected successfully.")
    console.log("Connected to redis successfully.")
    app.listen(PORT, () =>
      console.log(`Shopping API listening on port ${PORT}!`)
    )
  } catch (error) {
    console.log(error)
  }
}

module.exports = { app: serverlessHttp(bootstrap()) }
