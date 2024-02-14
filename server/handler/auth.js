const { Router } = require("express")
const { getMe, login, signup } = require("../controller/auth")

const authRouter = Router()

authRouter.get("/me", getMe)

authRouter.post("/", login)

authRouter.post("/signup", signup)

module.exports = { authRouter }
