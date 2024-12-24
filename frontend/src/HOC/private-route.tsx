import React, { useContext } from "react"
import { Navigate } from "react-router"
import { LOGIN_PAGE } from "../constants/routes"
import { AuthContext } from "../context/auth"
import { Footer } from "../layout/footer"
import { Header } from "../layout/header"

interface Props {
  Component: React.FC
}

const PrivateRoute: React.FC<Props> = ({ Component }) => {
  const { isUserLoggedIn } = useContext(AuthContext)

  return isUserLoggedIn === true ? (
    <div className="relative bg-white">
      <Header />
      <div className="w-[90%] mx-auto pt-[100px] sm:w-full sm:pt-[80px]">
        <main>
          <Component />
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  ) : isUserLoggedIn === false ? (
    <Navigate to={LOGIN_PAGE} />
  ) : null
}

export default PrivateRoute
