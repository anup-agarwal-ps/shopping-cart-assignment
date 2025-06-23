import React, { useContext } from "react"
import { addToCart } from "../apis/add-to-cart"
import { Product } from "../apis/product"
import { GREY_COLOR, THEME_COLOR } from "../constants/colors"
import { CartContext } from "../context/cart"

type Props = {
  product: Product
}

const LazyProductImage = React.lazy(() => import("./product-image"))

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { addCartItem, cartItems, setLoading } = useContext(CartContext)
  const quantity =
    cartItems.find((item) => item.id === product.id)?.quantity || 0

  const addItem = async (product: Product, quantity: number) => {
    try {
      setLoading(true)
      await addToCart()
      addCartItem(product, quantity)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="px-2 box-border w-full md:w-1/2 lg:w-4/12">
      <li className="w-full bg-white border rounded p-3">
        <h3 className="text-base font-medium truncate" title={product.name}>
          {`${product.name.slice(0, 30)}${
            product.name.length > 30 ? "..." : ""
          }`}
        </h3>

        <div className="flex gap-4">
          <LazyProductImage
            description={product.description}
            imageURL={product.imageURL}
            alt={product.name}
          />

          <div className="flex flex-col justify-between w-full space-y-3">
            <div
              id={product.id + product.description}
              title={product.description}
              style={{ backgroundColor: GREY_COLOR }}
              className="p-3 text-sm rounded"
            >
              {`${product.description.slice(0, 80)}${
                product.description.length > 80 ? "..." : ""
              }`}
            </div>

            <div className="text-center">
              {quantity === 0 ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    addItem(product, 1)
                  }}
                  style={{ backgroundColor: THEME_COLOR }}
                  className="w-full py-2 text-white font-semibold rounded px-2"
                >
                  Buy Now @ MRP Rs. {product.price}
                </button>
              ) : (
                <div
                  className="flex items-center justify-between w-full h-10 text-white px-3 rounded"
                  style={{ backgroundColor: THEME_COLOR }}
                >
                  <button
                    className="text-xl font-bold"
                    onClick={(e) => {
                      e.stopPropagation()
                      addItem(product, -1)
                    }}
                  >
                    -
                  </button>

                  <span>{quantity}</span>

                  {product.stock > quantity ? (
                    <button
                      className="text-xl font-bold"
                      onClick={(e) => {
                        e.stopPropagation()
                        addItem(product, 1)
                      }}
                    >
                      +
                    </button>
                  ) : (
                    <span className="opacity-50 text-sm">Max</span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </li>
    </div>
  )
}
