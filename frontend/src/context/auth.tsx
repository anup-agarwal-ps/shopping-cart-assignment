import { createContext } from "react"

export interface AuthContextInterface {
  isUserLoggedIn: boolean | null
  setIsUserLoggedIn: (val: boolean) => void
}

export const AuthContext: React.Context<AuthContextInterface> = createContext({
  isUserLoggedIn: null,
  setIsUserLoggedIn: (val: boolean) => val,
} as AuthContextInterface)

export const AuthProvider = AuthContext.Provider
