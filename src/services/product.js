import Axios from 'axios'

import { URL_ENDPOINT } from '../utils/constant'
import Storage from '../utils/storage'

Axios.defaults.headers.common['Authorization'] = JSON.parse(Storage.getItem('token'))

const getProducts = async () => {
  return await Axios.get(`${URL_ENDPOINT}/product`)
}

const apiProduct = {
  getProducts
}

export {
  apiProduct
}