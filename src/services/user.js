import Axios from 'axios'

import { URL_ENDPOINT } from '../utils/constant'
import Storage from '../utils/storage'

const getProjectsByUserId = async (userId) => {
  Axios.defaults.headers.common['Authorization'] = JSON.parse(Storage.getItem('token'))
  return Axios.post(`${URL_ENDPOINT}/project-by-user`, userId)
}

const apiUser = {
  getProjectsByUserId
}

export {
  apiUser
}