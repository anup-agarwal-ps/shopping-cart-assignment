import React, { useContext, useEffect, useState } from "react"
import { THEME_COLOR } from "../../constants/colors"
import { AuthContext } from "../../context/auth"
import { login } from "../../apis/login"
import InputWrapper from "../../components/InputWrapper"

React.lazy(() => import(/* webpackPrefetch: true */ "../home"))

const Login = () => {
  const { setIsUserLoggedIn } = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="w-9/12 mx-auto py-12 flex flex-col lg:gap-10 lg:flex-row gap-0 ">
      <div className="w-full lg:w-5/12 pb-10">
        <div>
          <h1 className="text-2xl font-bold">Login</h1>
          <p className="pt-6">
            Get access to your Orders, Wishlist and Recommendations
          </p>
        </div>
      </div>
      <form
        className="w-full lg:w-7/12 flex flex-col gap-2"
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
        <div className="flex flex-col gap-1.5 focus-within:[#51DAE2]">
          <label htmlFor="login-email" aria-label="Email">
            Email
          </label>
          <InputWrapper
            id="login-email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="flex flex-col gap-1.5 mt-5 focus-within:[#51DAE2]">
          <label htmlFor="login-password" aria-label="Password">
            Password
          </label>
          <InputWrapper
            id="login-password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button
          className={`w-[60%] text-white mt-5 p-2.5 cursor-pointer flex justify-center items-center border-none focus:outline-none`}
          style={{ backgroundColor: THEME_COLOR }}
          tabIndex={0}
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
