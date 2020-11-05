import { apiCategory } from '../../../services'

const getCategories = async context => {
  try {
    let response = await apiCategory.getCategories()
    context.commit('getCategories', response)
  } catch (err) {
    context.commit('handleErrors', err.response)
  }
}

export default {
  getCategories
}