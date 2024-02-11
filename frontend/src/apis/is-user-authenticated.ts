import Axios from "axios"

export interface UserDetails {
  username: string
}

export const isUserAuthenticated = (): Promise<UserDetails> => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await Axios.get<UserDetails>("/auth/me")
      resolve(response.data as UserDetails)
    } catch (error) {
      console.log(error)
      reject("Invalid token")
    }
  })
}
