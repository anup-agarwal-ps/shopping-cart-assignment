import Axios, { AxiosError } from "axios"

export const login = (email: string, password: string): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await Axios.post<{ token: string }>("/auth", {
        email,
        password,
      })
      const token = response.data.token
      resolve(token)
    } catch (error) {
      const err = error as AxiosError
      reject({ error, statusCode: err.response?.status })
    }
  })
}
