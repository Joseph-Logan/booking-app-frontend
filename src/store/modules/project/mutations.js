import Storage from '../../../utils/storage'

const handleErrors = (state, err) => {
  state.isLoading = false
  state.message = err.data.errors[0].message
  state.status = err.status
  state.projects = []
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