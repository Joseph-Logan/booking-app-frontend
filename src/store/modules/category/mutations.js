
const getCategories = (state, payload) => {
  let { data } = payload
  state.categories = data.categories
  state.isLoading = false
  state.status = payload.status
}

const handleErrors = (state, err) => {
  state.isLoading = false
  state.message = err.data.errors[0].message
  state.status = err.status
  state.categories = []
}

export default {
  getCategories,
  handleErrors
}