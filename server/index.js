require("dotenv").config()
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const { bannerRouter } = require("./handler/banner")
const { authRouter } = require("./handler/auth")
const { categoriesRouter } = require("./handler/categories")
const { productsRouter } = require("./handler/products")
const { addToCartRouter } = require("./handler/addToCart")
const { connect } = require("mongoose")
const app = express()
const port = process.env.PORT

app.use(cors())
app.use(bodyParser.json())

app.use("/banners", bannerRouter)
app.use("/auth", authRouter)
app.use("/categories", categoriesRouter)
app.use("/products", productsRouter)
app.use("/addToCart", addToCartRouter)

connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.bsrek4w.mongodb.net/?retryWrites=true&w=majority`
).then((_) => {
  console.log("Database connected successfully")
  app.listen(port, () => console.log(`Shopping API listening on port ${port}!`))
}).catch(_ => {
  console.log(_)
  console.log("Failed to connect to db")
})
