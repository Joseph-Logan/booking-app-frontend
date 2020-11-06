import Axios from 'axios'

import { URL_ENDPOINT } from '../utils/constant'

// Axios.defaults.headers.common['Authorization'] = `${tokenType.toLowerCase()} ${token}`

const signIn = async (data) => {
  let credentials = await Axios.post(`${URL_ENDPOINT}/sign-in`, data)
  return credentials
}

const signUp = async (data) => {
  return await Axios.post(`${URL_ENDPOINT}/sign-up`, data)
}

const apiAuth = {
  signIn,
  signUp
}

export {
  apiAuth
}