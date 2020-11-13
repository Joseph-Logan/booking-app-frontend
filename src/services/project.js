import Axios from 'axios'

import { URL_ENDPOINT } from '../utils/constant'
import Storage from '../utils/storage'

const getProjects = async () => {
  return await Axios.get(`${URL_ENDPOINT}/project`)
}

const getProjectsByCategory = async (id) => {
  return await Axios.get(`${URL_ENDPOINT}/project-category/${id}`)
}

const storeProject = async (data) => {
  Axios.defaults.headers.common['Authorization'] = JSON.parse(Storage.getItem('token'))
  return await Axios.post(`${URL_ENDPOINT}/project`, data)
}

const apiProject = {
  getProjects,
  getProjectsByCategory,
  storeProject
}

export {
  apiProject
}