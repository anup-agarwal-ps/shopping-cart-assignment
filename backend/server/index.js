require("dotenv").config()
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const serverlessHttp = require("serverless-http")
const { PORT } = require("./config/credentials")
const app = express()
app.use(cors())
app.use(bodyParser.json())
const { Router } = require("./router")

app.use(express.static("build"))

app.use("/api", Router)

if (process.env.IS_SLS === "Yes") {
  module.exports = { app: serverlessHttp(app) }
}
else {
  try {
    app.listen(PORT, () =>
      console.log(`Shopping API listening on port ${PORT}!`)
    )
  } catch (error) {
    console.log(error)
  }
}
