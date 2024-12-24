import { useContext, useState } from "react"
import { THEME_COLOR } from "../../constants/colors"
import { AuthContext } from "../../context/auth"
import { login } from "../../apis/login"

type Props = {}

const Login = (props: Props) => {
  const { setIsUserLoggedIn } = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="flex justify-around w-[80%] mx-auto items-start pt-12 pb-12">
      <div className="flex-[0_0_40%] flex justify-center items-center">
        <div>
          <h1 className="text-2xl font-bold">Login</h1>
          <p className="pt-6">
            Get access to your Orders, Wishlist and Recommendations
          </p>
        </div>
      </div>
      <div className="flex-[0_0_60%]">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            login(email, password)
              .then((token) => {
                localStorage.setItem("token", token)
                setIsUserLoggedIn(true)
              })
              .catch(console.log)
          }}
        >
          <div className="flex flex-col gap-1.5 mb-2.5">
            <label htmlFor="login-email" aria-label="Email">
              Email
            </label>
            <input
              id="login-email"
              className="w-[60%] border-none border-b border-gray-300 focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex flex-col gap-1.5 mb-2.5">
            <label htmlFor="login-password" aria-label="Password">
              Password
            </label>
            <input
              id="login-password"
              type="password"
              className="w-[60%] border-none border-b border-gray-300 focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            className="w-[60%] text-white bg-[THEME_COLOR] mt-5 p-2.5 cursor-pointer flex justify-center items-center border-none focus:outline-none"
            tabIndex={0}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
