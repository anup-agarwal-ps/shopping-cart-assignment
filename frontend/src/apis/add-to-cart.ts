import Axios from "axios"

export const addToCart = (): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      await Axios.post("/addToCart")
      resolve()
    } catch (error) {
      console.log(error)
      reject("Failed to add to cart")
    }
  })
}
