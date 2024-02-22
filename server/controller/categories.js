const category = require("../model/category")

const getCategories = async (req, res) => {
  try {
    const categories = (await category.find({}).lean()).map(obj => ({ ...obj, id: obj._id }))
    res.send(categories)
  } catch (error) {
    console.log(error)
    res.status(500).send({ msg: "Something went wrong" })
  }
}
module.exports = { categoriesController: { getCategories } }
