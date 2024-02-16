const { connect } = require("mongoose")

const connectToDatabase = () => {
  return connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.bsrek4w.mongodb.net/?retryWrites=true&w=majority`
  )
}

module.exports = { connectToDatabase }
