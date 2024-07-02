const { Router } = require("express")
const { getMe, login, signup, logout } = require("../controller/auth")

const authRouter = Router()

authRouter.get("/me", getMe)

authRouter.post("/", login)

authRouter.post("/signup", signup)

authRouter.get("/logout", logout)

module.exports = { authRouter }
