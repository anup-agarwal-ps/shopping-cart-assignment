import { render, waitFor } from "@testing-library/react"
import ReloadHandler from "../../src/components/ReloadHandler"
import { AuthContext } from "../../src/context/auth"

describe("ReloadHandler", () => {
  const mockRemoveItem = jest.fn()
  const getItemSpied = jest.spyOn(Storage.prototype, "getItem")
  jest.spyOn(Storage.prototype, "removeItem").mockImplementation(mockRemoveItem)

  afterEach(() => {
    localStorage.clear()
    jest.restoreAllMocks()
  })

  it("should test ReloadHandler component should call setIsUserLoggedIn with true as parameter", () => {
    getItemSpied.mockImplementation((_) => "value")
    const mockSetIsUserLoggedIn = jest.fn()
    render(
      <AuthContext.Provider
        value={{
          isUserLoggedIn: true,
          setIsUserLoggedIn: mockSetIsUserLoggedIn,
        }}
      >
        <ReloadHandler />
      </AuthContext.Provider>,
    )
    expect(mockSetIsUserLoggedIn).toHaveBeenCalledWith(true)
  })
  it("should test ReloadHandler component should call setIsUserLoggedIn with false as parameter", () => {
    getItemSpied.mockImplementation((_) => null)
    const mockSetIsUserLoggedIn = jest.fn()
    render(
      <AuthContext.Provider
        value={{
          isUserLoggedIn: false,
          setIsUserLoggedIn: mockSetIsUserLoggedIn,
        }}
      >
        <ReloadHandler />
      </AuthContext.Provider>,
    )
    waitFor(() => {
      expect(mockRemoveItem).toHaveBeenCalledWith("token")
    })
    expect(mockSetIsUserLoggedIn).toHaveBeenCalledWith(false)
  })
})
