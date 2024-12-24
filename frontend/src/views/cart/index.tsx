import { useContext } from "react"
import { CartContext } from "../../context/cart"
import { Product } from "../../apis/product"
import { addToCart } from "../../apis/add-to-cart"
import { GREY_COLOR, THEME_COLOR } from "../../constants/colors"

type Props = {}

const Cart = (props: Props) => {
  const { cartItems, addCartItem, setLoading, setIsCartDisplayed } =
    useContext(CartContext)

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
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/20 z-[300] cursor-pointer max-[1180px]:bg-transparent"
      onClick={() => setIsCartDisplayed(false)}
    >
      <div className="relative h-full w-[90%] mx-auto bottom-0 right-0 max-[1180px]:w-full">
        <div
          className="absolute bottom-0 right-0 h-[700px] w-[500px] bg-[GREY_COLOR] overflow-y-scroll cursor-default max-[1180px]:w-full max-[1180px]:h-[93%]"
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
          }}
        >
          <div className="flex justify-between items-center h-[10%] px-5 text-white bg-black">
            <div>
              My Cart {cartItems.length ? `(${cartItems.length} item(s))` : ""}
            </div>
            <button
              className="cursor-pointer text-white border-0 bg-transparent max-[1180px]:text-black"
              onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                setIsCartDisplayed(false)
              }}
            >
              X
            </button>
          </div>
          <div className="static h-[78%] overflow-y-scroll py-1">
            {!cartItems.length ? (
              <div className="flex justify-center items-center w-full h-full bg-white">
                <p>There are no items in your cart.</p>
              </div>
            ) : (
              cartItems.map((product) => (
                <div
                  className="flex items-center justify-between w-full p-[30px_0_30px_30px] bg-white my-1"
                  key={product.id}
                >
                  <img
                    src={product.imageURL}
                    alt=""
                    className="h-[60px] w-[60px] mr-5"
                  />
                  <div className="pl-1.5 w-full">
                    <h5 className="mb-2.5">{product.name}</h5>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center bg-white cursor-pointer">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            addItem(product, -1)
                          }}
                          className="cursor-pointer border-0 text-white px-3 py-1.5 rounded-full bg-[THEME_COLOR]"
                        >
                          -
                        </button>
                        <div className="text-black mx-1">
                          {product.quantity}
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            if (product.stock > product.quantity)
                              addItem(product, 1)
                          }}
                          className="cursor-pointer border-0 text-white px-3 py-1.5 rounded-full bg-[THEME_COLOR]"
                        >
                          +
                        </button>
                        <button
                          className="ml-5 mr-2 cursor-pointer border-0 bg-transparent"
                          onClick={() => addItem(product, -product.quantity)}
                        >
                          X
                        </button>
                      </div>
                      <div>Rs. {product.price}</div>
                      <div>Rs. {product.quantity * product.price}</div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          {cartItems.length ? (
            <div className="flex flex-col justify-between h-[12%] p-5 bg-white text-black">
              <p>Promo code can be applied on payment page</p>
              <div
                role="button"
                className="flex items-center justify-between text-white mt-2.5 h-[35px] px-3.5 bg-[THEME_COLOR] rounded cursor-pointer"
              >
                <button className="bg-transparent border-0 text-white">
                  Proceed to checkout
                </button>
                <div>
                  Rs.{" "}
                  {cartItems.reduce(
                    (acc, curr) => acc + curr.quantity * curr.price,
                    0,
                  )}{" "}
                  &gt;
                </div>
              </div>
            </div>
          ) : (
            <div
              className="flex items-center justify-between h-[12%] p-5 bg-white text-black cursor-pointer"
              role="button"
              onClick={() => setIsCartDisplayed(false)}
            >
              <button className="flex items-center justify-center w-full h-[35px] mt-2.5 px-3.5 bg-[THEME_COLOR] rounded text-white border-0 cursor-pointer">
                <div>Keep Shopping</div>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
