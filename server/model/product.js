const { Schema, model, Types } = require("mongoose");

const product = new Schema(
  {
    name: String,
    imageURL: String,
    description: String,
    price: Number,
    stock: Number,
    category: {
      type: Types.ObjectId,
      ref: "category"
    },
    sku: String,
    _id: String,
  }
)

module.exports = model("product", product)