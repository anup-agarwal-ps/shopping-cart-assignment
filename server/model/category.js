const { Schema, model } = require("mongoose");

const category = new Schema(
  {
    name: String,
    key: String,
    description: String,
    enabled: Boolean,
    order: Number,
    imageUrl: String,
    _id: String,
  }
)

module.exports = model("category", category)