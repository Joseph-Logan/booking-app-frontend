import Axios from 'axios'

import { URL_ENDPOINT } from '../utils/constant'
import Storage from '../utils/storage'

// implememt interceptor

const getCategories = async () => {
  Axios.defaults.headers.common['Authorization'] = JSON.parse(Storage.getItem('token'))
  return await Axios.get(`${URL_ENDPOINT}/category`)
}

const apiCategory = {
  getCategories
}


export {
  apiCategory
}