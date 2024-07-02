const { verify } = require("jsonwebtoken")
const { SECRET_KEY } = require("../config/credentials")

const isUserAuthenticated = function (req, res, next) {
  try {
    verify(req.headers.authorization, SECRET_KEY)
    next()
  } catch (error) {
    res.status(401).send({ msg: "Invalid token" })
  }
}

module.exports = { isUserAuthenticated }
