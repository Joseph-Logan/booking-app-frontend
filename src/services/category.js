import Axios from 'axios'

import { URL_ENDPOINT } from '../utils/constant'
import Storage from '../utils/storage'

Axios.defaults.headers.common['Authorization'] = JSON.parse(Storage.getItem('token'))

const getCategories = async () => {
  return await Axios.get(`${URL_ENDPOINT}/category`)
}

const apiCategory = {
  getCategories
}


export {
  apiCategory
}