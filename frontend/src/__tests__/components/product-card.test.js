import { CartContext } from "../../context/cart"
import { waitFor, render, screen, getByRole } from "../../test-utils/render-utils"
const { ProductCard } = require("../../components/product-card")

jest.mock("../../context/cart")
jest.mock("../../components/product-image")

describe("Testing product card component", () => {
  it("should show add button when quantity is zero", async () => {
    render(
      <CartContext.Provider
        value={{
          cartItems: [
            {
              category: "category",
              description: "description",
              id: "id",
              imageURL: "imageURL",
              name: "name",
              sku: "sku",
              price: 10,
              stock: 11,
              quantity: 0,
            },
          ],
          addCartItem: () => { },
          loading: false,
          setLoading: () => { },
          isCartDisplayed: false,
          setIsCartDisplayed: () => { },
        }}
      >
        <ProductCard
          product={{
            category: "category",
            description: "description",
            id: "id",
            imageURL: "imageURL",
            name: "name",
            sku: "sku",
            price: 10,
            stock: 11,
          }}
        />
      </CartContext.Provider>,
    )
    await waitFor(async () => {
      expect(
        await screen.findByRole("heading")
      ).toBeInTheDocument()
    })
    expect(screen.getByRole("heading", { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('button', {
      name: /buy now @ mrp rs\. 10/i
    })).toBeInTheDocument()
    expect(screen.getByText("description")).toBeInTheDocument()


  })
})
