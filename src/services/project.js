import Axios from 'axios'

import { URL_ENDPOINT } from '../utils/constant'
// import Storage from '../utils/storage'

const getProjects = async () => {
  return await Axios.get(`${URL_ENDPOINT}/project`)
}

const apiProject = {
  getProjects
}

export {
  apiProject
}