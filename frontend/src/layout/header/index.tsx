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
    <header className="w-full min-h-[40px] max-h-[80px] border-b border-gray-300 fixed flex items-center bg-white z-[100] max-[1180px]:h-[7%]">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <h1 id="sabka-bazaar-logo" className="hidden bg-black">
          Sabka Bazaar
        </h1>
        <Link to={HOME_PAGE}>
          <img
            role="button"
            tabIndex={0}
            className="max-h-[80px] py-[15px] cursor-pointer"
            src={imgSrc}
            aria-labelledby="sabka-bazaar-logo"
            alt=""
          />
        </Link>
        <div className="flex items-center">
          <button
            className="cursor-pointer h-[40px] flex items-center bg-transparent border-none"
            onClick={() => setIsCartDisplayed(true)}
          >
            <FontAwesomeIcon
              color={THEME_COLOR}
              icon={faShoppingCart}
              size="2xl"
            />
          </button>
          {isUserLoggedIn ? (
            <button
              className="text-[THEME_COLOR] mx-[20px] bg-transparent border-none cursor-pointer"
              tabIndex={0}
              onClick={() => handleLogoutButton()}
            >
              Logout
            </button>
          ) : (
            <button
              className="text-[THEME_COLOR] bg-transparent border-none mx-[20px] cursor-pointer"
              tabIndex={0}
              onClick={() =>
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
