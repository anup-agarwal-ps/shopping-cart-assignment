const AddToCart = (req, res) => {
  res.send({
    response: "Success",
    responseMessage: "Product added to cart successfully",
  })
}
module.exports = { addToCartController: { AddToCart } }
