import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect, useState } from "react"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router"
import { HOME_PAGE, LOGIN_PAGE, REGISTER_PAGE } from "../../constants/routes"
import { THEME_COLOR } from "../../constants/colors"
import { CartContext } from "../../context/cart"
import { AuthContext } from "../../context/auth"
import { useLocation } from "react-router"
import { Link } from "react-router-dom"
import { logout } from "../../apis/logout"

export const Header = () => {
  const [imgSrc, setImgSrc] = useState("")
  const navigate = useNavigate()
  const { setIsCartDisplayed } = useContext(CartContext)
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(AuthContext)
  const location = useLocation()

  useEffect(() => {
    if (window.innerWidth < 701) setImgSrc("/static/images/logo.png")
    else setImgSrc("/static/images/logo_2x.png")
  }, [])
  
  const handleLogoutButton = () => {
    logout()
      .then(() => {
        setIsUserLoggedIn(false)
        localStorage.removeItem("token")
      })
      .catch(console.log)
  }
  
  return (
    <header className="header">
      <div className="header-content">
        <h1 id="sabka-bazaar-logo" className="hidden bg-black">
          Sabka Bazaar
        </h1>
        <Link to={HOME_PAGE}>
          <img
            role="button"
            tabIndex={0}
            className="logo"
            src={imgSrc}
            aria-labelledby="sabka-bazaar-logo"
            alt=""
          />
        </Link>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button
            className="cart"
            onClick={(_) => {
              setIsCartDisplayed(true)
            }}
          >
            <FontAwesomeIcon
              color={THEME_COLOR}
              icon={faShoppingCart}
              size="2xl"
            />
          </button>
          {isUserLoggedIn ? (
            <button
              style={{
                color: THEME_COLOR,
                margin: "0 20px",
                backgroundColor: "transparent",
                border: "0",
                cursor: "pointer",
              }}
              tabIndex={0}
              onClick={(_) => {
                handleLogoutButton()
              }}
            >
              Logout
            </button>
          ) : (
            <button
              style={{
                color: THEME_COLOR,
                backgroundColor: "transparent",
                border: "0",
                margin: "0 20px",
                cursor: "pointer",
              }}
              tabIndex={0}
              onClick={(_) =>
                navigate(
                  location.pathname === LOGIN_PAGE ? REGISTER_PAGE : LOGIN_PAGE,
                )
              }
            >
              {location.pathname === LOGIN_PAGE ? "Register" : "Login"}
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
