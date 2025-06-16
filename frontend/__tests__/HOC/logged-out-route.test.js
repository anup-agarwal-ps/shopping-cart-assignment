import { render, screen, waitFor } from "../../test-utils/render-utils"
import LoggedOutRoute from "../../src/HOC/logged-out-route"
import { AuthProvider } from "../../src/context/auth"
import * as Router from "react-router"

jest.mock("react-router", () => {
  return {
    ...jest.requireActual("react-router"),
    Navigate: jest.fn(),
  };
});

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
  it("logged-out-route compoment should render nothing when user is neither logged in nor logged out", () => {
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
    Router.Navigate.mockImplementation(() => <h1>navigate</h1>)
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
      expect(Router.Navigate).toHaveBeenCalled()
    })
  })
})
