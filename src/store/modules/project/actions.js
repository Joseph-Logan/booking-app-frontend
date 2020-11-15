import { apiProject, apiUser } from '../../../services'
import Storage from '../../../utils/storage'

const handleLoading = (context, status) => {
  context.commit('handleLoading', status)
}

const getProjects = async context => {
  try {
    let response = await apiProject.getProjects()
    context.commit('getProjects', response)
  } catch (err) {
    context.commit('handleErrors', err.response)
  }
}

const getProjectsByCategory = async (context, categoryId) => {
  try {
    let response = await apiProject.getProjectsByCategory(categoryId)
    context.commit('getProjects', response)
  } catch (err) {
    context.commit('handleErrors', err.response)
  }
}

const storeProject = async (context, data) => {
  try {
    let response = await apiProject.storeProject(data)
    context.commit('storeProject', response)
  } catch (err) {
    context.commit('handleErrors', err.response)
  }
}

const getProjectsByUserId = async (context) => {
  try {
    let userId = JSON.parse(Storage.getItem('user'))._id
    let response = await apiUser.getProjectsByUserId({userId})
    context.commit('getProjects', response)
  } catch (err) {
    context.commit('handleErrors', err.response)
  }
} 

export default {
  handleLoading,
  getProjects,
  getProjectsByCategory,
  storeProject,
  getProjectsByUserId
}