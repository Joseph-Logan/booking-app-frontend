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

const handleLoading = (state, status) => {
  state.isLoading = status
}

const handleReset = (state) => {
  state.isLoading = false,
  state.message = null,
  state.status = 0,
  state.memberships = []
}

const storeMembership = (state, payload) => {
  let { data } = payload

  state.memberships = [data]
  state.status = payload.status
  state.isLoading = false
  state.message = '<h2>Compra realizada con exito!!!<h2>'
}

export default {
  handleErrors,
  handleLoading,
  handleReset,
  storeMembership
}