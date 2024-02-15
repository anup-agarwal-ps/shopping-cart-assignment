import Axios from "axios"

export const signUp = (formData: {
  first_name: string
  last_name: string
  email: string
  password: string
  confirm_password: string
}): Promise<Boolean> => {
  return new Promise(async (resolve, reject) => {
    try {
      await Axios.post("/auth/signup", formData)
      resolve(true)
    } catch (error) {
      console.log(error)
      reject("Failed to get details")
    }
  })
}
