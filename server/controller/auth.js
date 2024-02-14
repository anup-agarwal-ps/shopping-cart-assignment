const secretKey = process.env.SECRET_KEY
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../model/user")

const login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email }).lean()
  const isPasswordCorrect = await bcrypt.compare(password, user.password)
  if (isPasswordCorrect) {
    const userDetails = { ...user, password: undefined }
    res.send({
      token: jwt.sign({ ...userDetails }, secretKey),
    })
  } else {
    res.status(401).send({
      message: "invalid credentials",
    })
  }
}

const getMe = (req, res) => {
  const token = req.headers.authorization
  try {
    jwt.verify(token, secretKey)
    res.status(200).send(jwt.decode(token))
  } catch (error) {
    res.status(401).send({
      message: "invalid token",
    })
  }
}

const signup = async (req, res) => {
  const {
    first_name,
    last_name,
    email,
    password,
    confirm_password
  } = req.body
  if (password !== confirm_password) {
    return res.status(400).send({ msg: "Passwords do not match" })
  }
  const hashedPassword = await bcrypt.hash(password, 10)
  User.findOne({ email }).then(async user => {
    if (user) {
      res.status(409).send({ msg: "User already exists" })
    }
    else {
      const user = new User({
        password: hashedPassword,
        email,
        first_name,
        last_name
      })
      await user.save()
      res.send({ msg: "User registered successfully" })
    }
  })
}

module.exports = { login, getMe, signup }
