import { CartContext } from "../../context/cart"
import { setMSWServer } from "../../msw-utility"
import { waitFor, render, screen, getByRole, fireEvent } from "../../test-utils/render-utils"
import { rest } from "msw"

const { ProductCard } = require("../../components/product-card")

jest.mock("../../context/cart")
jest.mock("../../components/product-image")

describe("Testing product card component", () => {
  const server = setMSWServer([rest.post("/addToCart", (req, res, ctx) => {
    return res(ctx.status(200))
  })]);
  it("should call API successfully on add button click", async () => {
    const addCartItemMock = jest.fn()
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
          addCartItem: addCartItemMock,
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
    expect(screen.getByText("description")).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', {
      name: /buy now @ mrp rs\. 10/i
    }))
    await waitFor(() => {
      expect(addCartItemMock).toHaveBeenCalled()
    })
  })

  it("should call API but it should fail on add button click", async () => {
    const addCartItemMock = jest.fn()
    server.use(rest.post("/addToCart", (req, res, ctx) => {
      return res(ctx.status(404))
    }))

    render(
      <CartContext.Provider
        value={{
          cartItems: [
            {
              category: "category",
              description: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
              id: "id",
              imageURL: "imageURL",
              name: "name",
              sku: "sku",
              price: 10,
              stock: 11,
              quantity: 1,
            },
          ],
          addCartItem: addCartItemMock,
          loading: false,
          setLoading: () => { },
          isCartDisplayed: false,
          setIsCartDisplayed: () => { },
        }}
      >
        <ProductCard
          product={{
            category: "category",
            description: "IAmTheProductDescriptionWhoIsTryingToGoBeyond30CharactersIAmTheProductDescriptionWhoIsTryingToGoBeyond30Characters",
            id: "id",
            imageURL: "imageURL",
            name: "IAmTheProductNameWhoIsTryingToGoBeyond30CharactersIAmTheProductNameWhoIsTryingToGoBeyond30Characters",
            sku: "sku",
            price: 10,
            stock: 11,
          }}
        />
      </CartContext.Provider>,
    )

    fireEvent.click(await screen.findByRole('button', {
      name: "+"
    }))
    fireEvent.click(screen.getByRole('button', {
      name: "-"
    }))
  })

  it("should show max button instead of +", async () => {
    render(
      <CartContext.Provider
        value={{
          cartItems: [
            {
              category: "category",
              description: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
              id: "id",
              imageURL: "imageURL",
              name: "name",
              sku: "sku",
              price: 10,
              stock: 11,
              quantity: 11,
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
            description: "IAmTheProductDescriptionWhoIsTryingToGoBeyond30CharactersIAmTheProductDescriptionWhoIsTryingToGoBeyond30Characters",
            id: "id",
            imageURL: "imageURL",
            name: "IAmTheProductNameWhoIsTryingToGoBeyond30CharactersIAmTheProductNameWhoIsTryingToGoBeyond30Characters",
            sku: "sku",
            price: 10,
            stock: 11,
          }}
        />
      </CartContext.Provider>,
    )
    fireEvent.click(await screen.findByRole('button', {
      name: "-"
    }))
    screen.logTestingPlaygroundURL()
    expect(screen.getByText(/max/i))
  })
})
