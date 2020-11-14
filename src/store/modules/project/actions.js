import { apiProject } from '../../../services'

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


export default {
  handleLoading,
  getProjects,
  getProjectsByCategory,
  storeProject
}