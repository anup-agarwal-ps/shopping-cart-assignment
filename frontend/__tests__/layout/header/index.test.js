import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import { Header } from "../../../src/layout/header" // index.tsx auto-resolved
import { CartContext } from "../../../src/context/cart"
import { AuthContext } from "../../../src/context/auth"
import * as logoutApi from "../../../src/apis/logout"

jest.mock("../../../src/apis/logout", () => ({
  logout: jest.fn(() => Promise.resolve())
}))

describe("Header Component", () => {
  const renderHeader = (isUserLoggedIn = false) => {
    const setIsCartDisplayed = jest.fn()
    const setIsUserLoggedIn = jest.fn()

    render(
      <Router>
        <CartContext.Provider value={{ setIsCartDisplayed }}>
          <AuthContext.Provider value={{ isUserLoggedIn, setIsUserLoggedIn }}>
            <Header />
          </AuthContext.Provider>
        </CartContext.Provider>
      </Router>
    )

    return { setIsCartDisplayed, setIsUserLoggedIn }
  }

  test("renders logo image", () => {
    renderHeader()
    screen.logTestingPlaygroundURL()
    const logo = screen.getAllByRole("button")[0]
    expect(logo).toHaveAttribute("class", "max-h-[80px] py-[15px] cursor-pointer")
  })

  test("calls setIsCartDisplayed when cart icon is clicked", () => {
    const { setIsCartDisplayed } = renderHeader()
    const cartBtn = screen.getAllByRole("button")[1] // First button is cart
    fireEvent.click(cartBtn)
    expect(setIsCartDisplayed).toHaveBeenCalledWith(true)
  })

  test("shows Login when user is not logged in", () => {
    renderHeader(false)
    expect(screen.getByText(/login/i)).toBeInTheDocument()
  })

  test("shows Logout when user is logged in", () => {
    renderHeader(true)
    expect(screen.getByText(/logout/i)).toBeInTheDocument()
  })

  test("calls logout and clears auth on Logout click", async () => {
    const { setIsUserLoggedIn } = renderHeader(true)
    const logoutBtn = screen.getByText(/logout/i)
    fireEvent.click(logoutBtn)

    await Promise.resolve()

    expect(logoutApi.logout).toHaveBeenCalled()
    expect(setIsUserLoggedIn).toHaveBeenCalledWith(false)
    expect(localStorage.getItem("token")).toBeNull()
  })
})
