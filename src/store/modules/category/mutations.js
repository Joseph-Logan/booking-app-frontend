
const getCategories = (state, payload) => {
  let { data } = payload
  state.categories = data.categories
  state.isLoading = false
  state.status = payload.status
}

const handleErrors = (state, err) => {
  if (err.status === 403) {
    state.message = `<h2> ${err.data.errors[0].message.name}</h2>`

    setTimeout(() => {
      state.message = '<h2>Redireccionando</h2>'

    }, 1500);

    setTimeout(() => {
      window.location = '/sign-in'
      localStorage.clear()
    }, 3000);
  }
  else {
    state.message = `<h2> ${err.data.errors[0].message}</h2>`
  }
  state.status = err.status
  state.memberships = []
  state.isLoading = false
}

export default {
  getCategories,
  handleErrors
}