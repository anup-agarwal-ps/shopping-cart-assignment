const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../model/user")

const { SECRET_KEY } = require("../config/credentials")

const login = async (req, res) => {
  const { email, password } = req.body
  if (email === "test@test.com" && password === "password") {
    const userDetails = { email }
    const token = jwt.sign({ ...userDetails }, SECRET_KEY)
    res.send({
      token,
    })
  } else {
    return res.status(401).send({
      message: "invalid credentials",
    })
  }
}

const getMe = async (req, res) => {
  const token = req.headers.authorization
  try {
    const data = jwt.verify(token, SECRET_KEY)
    res.status(200).send(JSON.parse(data))
  } catch (error) {
    res.status(401).send({
      message: "invalid token",
    })
  }
}

const logout = async (req, res) =>
  res.send({ msg: "User logged out" })


const signup = async (req, res) =>
  res.send({ msg: "User registered successfully" })

module.exports = { login, getMe, signup, logout }
