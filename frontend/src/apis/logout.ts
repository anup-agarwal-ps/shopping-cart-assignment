import Axios from "axios"

export const logout = (): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Axios.get<{ msg: string }>("/auth/logout")
      resolve(response.data.msg)
    } catch (error) {
      console.log(error)
      reject("logout api error")
    }
  })
}
