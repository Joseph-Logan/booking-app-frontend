import Axios from 'axios'

import { URL_ENDPOINT } from '../utils/constant'
import Storage from '../utils/storage'

Axios.defaults.headers.common['Authorization'] = JSON.parse(Storage.getItem('token'))

const getMemberships = async () => {
  return await Axios.get(`${URL_ENDPOINT}/membership`)
}

const purchaseMembership = async (data) => {
  return await Axios.post(`${URL_ENDPOINT}/purchase-membership`, data)
}

const apiMembership = {
  getMemberships,
  purchaseMembership
}

export  {
  apiMembership
}