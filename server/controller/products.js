const product = require("../model/product")

const getProducts = async (req, res) => {
  try {
    const products = (await product.find({}).lean()).map(obj => ({ ...obj, id: obj._id }))
    res.send(products)
  } catch (error) {
    console.log(error)
    res.status(500).send({ msg: "Something went wrong" })
  }
}

module.exports = { productsController: { getProducts } }
