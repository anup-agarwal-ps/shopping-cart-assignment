const { connect } = require("mongoose")
const { DB_USERNAME, DB_PASSWORD } = require("../config/credentials")

const connectToDatabase = () => {
  return connect(
    `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.bsrek4w.mongodb.net/?retryWrites=true&w=majority`
  )
}

module.exports = { connectToDatabase }
