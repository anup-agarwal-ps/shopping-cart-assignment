import { useContext, useEffect } from "react"
import { AuthContext } from "../context/auth"
import { isUserAuthenticated } from "../apis/is-user-authenticated"

const ReloadHandler = () => {
  const { setIsUserLoggedIn } = useContext(AuthContext)
  useEffect(() => {
    if (localStorage.getItem("token")) setIsUserLoggedIn(true)
    else {
      localStorage.removeItem("token")
      setIsUserLoggedIn(false)
    }
  }, [])

  return null
}

export default ReloadHandler
