import { createContext } from "react"

export interface AuthContextInterface {
  isUserLoggedIn: boolean
  setIsUserLoggedIn: (val: boolean) => void
}

export const AuthContext: React.Context<AuthContextInterface> = createContext({
  isUserLoggedIn: false,
  setIsUserLoggedIn: (val: boolean) => val,
} as AuthContextInterface)

export const AuthProvider = AuthContext.Provider
