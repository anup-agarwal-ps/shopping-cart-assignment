import { createContext } from "react"
import { Product } from "../apis/product"

export interface CartContextItem extends Product {
  quantity: number
}

export interface CartContextInterface {
  cartItems: CartContextItem[]
  addCartItem: (product: Product, quantityToBeAdded: number) => void
  loading: boolean
  setLoading: (val: boolean) => void
  isCartDisplayed: boolean
  setIsCartDisplayed: (val: boolean) => void
}

export const CartContext: React.Context<CartContextInterface> = createContext({
  cartItems: [] as CartContextItem[],
  addCartItem: (product: Product, quantityToBeAdded: number) => {},
  loading: false,
  setLoading: (val: boolean) => {},
  isCartDisplayed: false,
  setIsCartDisplayed: (val: boolean) => {},
} as CartContextInterface)

export const CartProvider = CartContext.Provider
