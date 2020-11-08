import Axios from 'axios'

import { URL_ENDPOINT } from '../utils/constant'
// import Storage from '../utils/storage'

const getProjects = async () => {
  return await Axios.get(`${URL_ENDPOINT}/project`)
}

const getProjectsByCategory = async (id) => {
  return await Axios.get(`${URL_ENDPOINT}/project-category/${id}`)
}

const apiProject = {
  getProjects,
  getProjectsByCategory
}

export {
  apiProject
}