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
    <div className="relative flex flex-col min-h-[100vh]">
      <div className="min-h-[100vh]">
        <Header />
        <main className="w-[90%] mx-auto pt-[65px] sm:w-full">
          <Component />
        </main>
      </div>
      <Footer />
    </div>
  ) : isUserLoggedIn === false ? (
    <Navigate to={LOGIN_PAGE} />
  ) : null
}

export default PrivateRoute
