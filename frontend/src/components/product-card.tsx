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
  let quantity: number = 0
  cartItems.every((item) => {
    if (item.id === product.id) {
      quantity = item.quantity
      return false
    }
    return true
  })

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
    <li className="flex flex-col items-center justify-around w-full h-[500px] p-0 pb-8 px-2.5 m-0 mb-1.5 mr-1.5 border-b border-r border-gray-300 list-none box-border sm:flex-[0_0_35%] md:flex-[0_0_100%]">
      <h3
        className="w-[95%] min-h-[13%] max-h-[13%] text-ellipsis m-[5px_0] flex items-center"
        title={product.name}
      >
        {`${product.name.slice(0, 30)}${product.name.length > 30 ? "..." : ""}`}
      </h3>
      <LazyProductImage
        description={product.description}
        imageURL={product.imageURL}
        alt={product.name}
      />
      <div className="min-h-[25%] max-h-[25%] mt-2.5 w-full">
        <div
          id={product.id + product.description}
          className="min-h-[66%] max-h-[66%] flex justify-center items-center border border-gray-300 text-center mb-2.5 p-2.5"
          title={product.description}
          style={{ backgroundColor: GREY_COLOR }}
        >
          {`${product.description.slice(0, 80)}${
            product.description.length > 80 ? "..." : ""
          }`}
        </div>
        <div className="p-[5%_10px] w-full min-h-[30%] max-h-[30%] flex justify-between items-center">
          <div>MRP Rs. {product.price}</div>
          <div className="text-center cursor-pointer">
            {quantity === 0 ? (
              <button
                onClick={(_) => {
                  _.stopPropagation()
                  addItem(product, 1)
                }}
                className="bg-[THEME_COLOR] text-white w-full py-2.5 px-2.5 border-transparent cursor-pointer"
              >
                Add
              </button>
            ) : (
              <div className="flex bg-[THEME_COLOR] text-white w-full h-[30px] border-transparent justify-between items-center">
                <button
                  className="p-1 m-0 bg-transparent border-0 text-white cursor-pointer"
                  onClick={(_) => {
                    _.stopPropagation()
                    addItem(product, -1)
                  }}
                >
                  -
                </button>
                <div className="mx-1.25">{quantity}</div>
                {product.stock > quantity && (
                  <button
                    className="p-1 m-0 bg-transparent border-0 text-white cursor-pointer"
                    onClick={(_) => {
                      _.stopPropagation()
                      addItem(product, 1)
                    }}
                  >
                    +
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  )
}
