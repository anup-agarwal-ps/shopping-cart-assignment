import { useContext, useEffect } from "react"
import { AuthContext } from "../context/auth"
import { isUserAuthenticated } from "../apis/is-user-authenticated"

const ReloadHandler = () => {
  const { setIsUserLoggedIn } = useContext(AuthContext)
  useEffect(() => {
    const callAPI = async () => {
      try {
        await isUserAuthenticated()
        setIsUserLoggedIn(true)
      } catch (error) {
        localStorage.removeItem("token")
        setIsUserLoggedIn(false)
      }
    }
    callAPI()
  }, [])

  return null
}

export default ReloadHandler
