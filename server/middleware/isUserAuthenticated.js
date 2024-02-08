const { verify } = require("jsonwebtoken")

const isUserAuthenticated = function (req, res, next) {
  try {
    verify(req.headers.authorization, process.env.SECRET_KEY)
    next()
  } catch (error) {
    res.status(401).send({ msg: "Invalid token" })
  }
}

module.exports = { isUserAuthenticated }
