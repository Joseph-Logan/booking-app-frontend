import { apiProduct } from '../../../services'

const getProducts = async context => {
  try {
    let response = await apiProduct.getProducts()
    context.commit('getProducts', response)
  } catch (err) {
    context.commit('handleErrors', err.response)
  }
}

export default {
  getProducts
}