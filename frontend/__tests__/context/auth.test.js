import { fireEvent, render, screen } from "../test-utils/render-utils"
import { AuthContext, AuthProvider } from "../../src/context/auth"
import { useContext } from "react"

describe("Test Auth context", () => {
  const mockSetIsUserLoggedIn = jest.fn()
  const Component = () => {
    const { isUserLoggedIn, setIsUserLoggedIn } = useContext(AuthContext)

    return isUserLoggedIn ? (
      <button onClick={() => setIsUserLoggedIn(false)}>Logged in</button>
    ) : (
      <button onClick={() => setIsUserLoggedIn(true)}>Log in</button>
    )
  }

  it("should test Auth context when user is logged in", async () => {
    render(
      <AuthProvider
        value={{
          isUserLoggedIn: true,
          setIsUserLoggedIn: mockSetIsUserLoggedIn,
        }}
      >
        <Component />
      </AuthProvider>,
    )
    const loggedInButton = screen.getByRole("button", { name: "Logged in" })
    expect(loggedInButton).toBeInTheDocument()
    fireEvent.click(loggedInButton)
    expect(mockSetIsUserLoggedIn).toHaveBeenCalledWith(false)
  })

  it("should test Auth context when user is logged out", async () => {
    render(
      <AuthProvider
        value={{
          isUserLoggedIn: false,
          setIsUserLoggedIn: mockSetIsUserLoggedIn,
        }}
      >
        <Component />
      </AuthProvider>,
    )
    const loggedInButton = screen.getByRole("button", { name: "Log in" })
    expect(loggedInButton).toBeInTheDocument()
    fireEvent.click(loggedInButton)
    expect(mockSetIsUserLoggedIn).toHaveBeenCalledWith(true)
  })
})
