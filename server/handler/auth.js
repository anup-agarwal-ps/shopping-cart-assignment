const { Router } = require("express")
const { getMe, login } = require("../controller/auth")

const authRouter = Router()

authRouter.get("/me", getMe)

authRouter.post("/", login)

module.exports = { authRouter }
