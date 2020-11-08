const handleLoading = (state, status) => {
  state.isLoading = status
}

const getProjects = (state, payload) => {
  let { data } = payload
  state.projects = data.projects
  state.isLoading = false
  state.status = payload.status
}

const handleErrors = (state, err) => {
  state.isLoading = false
  state.message = err.data.errors[0].message
  state.status = err.status
  state.projects = []
}

export default {
  handleLoading,
  getProjects,
  handleErrors
}