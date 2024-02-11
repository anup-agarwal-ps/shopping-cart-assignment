import React, { useContext, useEffect } from "react"
import { Navigate, useNavigate } from "react-router"
import { LOGIN_PAGE } from "../constants/routes"
import { AuthContext } from "../context/auth"
import { Footer } from "../layout/footer"
import { Header } from "../layout/header"
import "./private-route.scss"

interface Props {
  Component: React.FC
}

const PrivateRoute: React.FC<Props> = ({ Component }) => {
  const { isUserLoggedIn } = useContext(AuthContext)

  return isUserLoggedIn === true ? (
    <div className="private-route-container">
      <Header />
      <div className="main-container">
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
