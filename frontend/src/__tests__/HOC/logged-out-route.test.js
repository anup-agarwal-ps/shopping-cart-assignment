import { render, screen, waitFor } from "../../test-utils/render-utils"
import LoggedOutRoute from "../../HOC/logged-out-route"
import { AuthProvider } from "../../context/auth"
import * as Router from "react-router"

describe("Test Auth context", () => {
  const Component = () => <h1>Hello world</h1>
  it("logged-out-route compoment should render provided component when user is logged out", async () => {
    render(
      <AuthProvider
        value={{
          isUserLoggedIn: false,
          setIsUserLoggedIn: jest.fn(),
        }}
      >
        <LoggedOutRoute Component={Component} />
      </AuthProvider>,
    )
    await waitFor(async () => {
      const text = await screen.findByRole("heading", { name: "Hello world" })
      expect(text).toBeInTheDocument()
    })
  })
  it("logged-out-route compoment should render provided component when user is neither logge in nor logged out", () => {
    render(
      <AuthProvider
        value={{
          isUserLoggedIn: null,
          setIsUserLoggedIn: jest.fn(),
        }}
      >
        <LoggedOutRoute Component={Component} />
      </AuthProvider>,
    )
    const text = screen.queryByRole("heading", { name: "Hello world" })
    expect(text).not.toBeInTheDocument()
  })
  it("logged-out-route compoment should render provided component when user is logged in", async () => {
    jest.spyOn(Router, "Navigate").mockImplementation(() => <h1>navigate</h1>)
    render(
      <AuthProvider
        value={{
          isUserLoggedIn: true,
          setIsUserLoggedIn: jest.fn(),
        }}
      >
        <LoggedOutRoute Component={Component} />
      </AuthProvider>,
    )
    await waitFor(async () => {
      const text = await screen.findByRole("heading", { name: "navigate" })
      expect(text).toBeInTheDocument()
    })
  })
})