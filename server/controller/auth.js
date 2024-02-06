const secretKey = process.env.SECRET_KEY

const login = (req, res) => {
  const { username, password } = req.body
  if (username === "username" && password === "password") {
    res.send({
      token: jwt.sign({ username }, secretKey),
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

module.exports = { login, getMe }
