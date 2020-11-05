
const getProducts = (state, payload) => {
  let { data } = payload
  state.products = data.products
  state.isLoading = false
  state.status = payload.status
}

const handleErrors = (state, err) => {
  state.isLoading = false
  state.message = err.data.errors[0].message
  state.status = err.status
}

export default {
  getProducts,
  handleErrors
}