import Storage from '../../../utils/storage'

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

const getProjects = (state, payload) => {
  let { data } = payload
  state.projects = data.projects
  state.isLoading = false
  state.status = payload.status
}

const storeProject = (state, payload) => {
  let { data } = payload
  state.message = data.name
  state.isLoading = false
  state.status = payload.status

  // store id project for current user

  let user = JSON.parse(Storage.getItem('user'))
  user.projects = [...user.projects, data._id]
  Storage.setItem('user', user)
}

export default {
  handleErrors,
  handleLoading,
  getProjects,
  storeProject
}