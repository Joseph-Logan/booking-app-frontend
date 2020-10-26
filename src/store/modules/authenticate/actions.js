import { apiAuth } from '../../../services'

const handleLoading = (context, status) => {
  context.commit('handleLoading', status)
}

const handleResetState = (context) => {
  context.commit('handleResetState')
}

const signIn = async (context, data) => {
  try {
    let credentials = await apiAuth.signIn(data)
    context.commit('storeCredentials', credentials)
  } catch (err) {
    context.commit('handleErrors', err.response)
  }
}

export default {
  handleLoading,
  handleResetState,
  signIn
}
