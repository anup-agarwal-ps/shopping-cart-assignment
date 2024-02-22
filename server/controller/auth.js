const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../model/user")
const { getRedisClient } = require("../connection/redis")
const { SECRET_KEY } = require("../config/credentials")

const login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email }).lean()
  if (!user) {
    return res.status(401).send({
      message: "invalid credentials",
    })
  }
  const isPasswordCorrect = bcrypt.compare(password, user.password)
  if (isPasswordCorrect) {
    const userDetails = { ...user, password: undefined }
    const client = await getRedisClient()
    const token = jwt.sign({ ...userDetails }, SECRET_KEY)
    client.set(
      token,
      JSON.stringify({ ...userDetails, token }),
      { EX: 60 * 60 },
      console.log
    )
    res.send({
      token,
    })
  } else {
    res.status(401).send({
      message: "invalid credentials",
    })
  }
}

const getMe = async (req, res) => {
  const token = req.headers.authorization
  try {
    const client = await getRedisClient()
    const data = await client.get(token)
    if (!data) throw Error("Invalid token")
    res.status(200).send(JSON.parse(data))
  } catch (error) {
    res.status(401).send({
      message: "invalid token",
    })
  }
}

const logout = async (req, res) => {
  const token = req.headers.authorization
  const client = await getRedisClient()
  try {
    await client.del(token)
    res.send({ msg: "User logged out" })
  } catch (error) {
    console.log(error)
    res.status(401).send({
      message: "Something went wrong",
    })
  }
}

const signup = async (req, res) => {
  const { first_name, last_name, email, password, confirm_password } = req.body
  if (password !== confirm_password) {
    return res.status(400).send({ msg: "Passwords do not match" })
  }
  const hashedPassword = await bcrypt.hash(password, 10)
  User.findOne({ email }).then(async (user) => {
    if (user) {
      res.status(409).send({ msg: "User already exists" })
    } else {
      const user = new User({
        password: hashedPassword,
        email,
        first_name,
        last_name,
      })
      await user.save()
      res.send({ msg: "User registered successfully" })
    }
  })
}

module.exports = { login, getMe, signup, logout }
