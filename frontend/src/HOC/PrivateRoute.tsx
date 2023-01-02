import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import { LOGIN_PAGE } from "../constants/routes"
import { AuthContext } from "../context/auth"
import { Footer } from "../layout/footer"
import { Header } from "../layout/header"

interface Props {
  Component: React.FC
}

const PrivateRoute: React.FC<Props> = ({ Component }) => {
  const { isUserLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate(LOGIN_PAGE)
    }
  }, [isUserLoggedIn, navigate])
  return isUserLoggedIn ? (
    <div style={{ position: "relative" }}>
      <Header />
      <div
        style={{
          width: "90%",
          margin: "0px auto",
          paddingTop: "100px",
        }}
      >
        <main>
          <Component />
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  ) : null
}

export default PrivateRoute