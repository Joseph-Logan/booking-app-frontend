/* Handler of methods to modified data of storage */
// import Storage from '../../../utils/storage'

import {
  SIGNIN_SUCCESS,
  SIGNUP_SUCCESS
} from '../../../utils/strings'

import Storage from '../../../utils/storage'

const handleLoading = (state, status) => {
  state.isLoading = status
}

const handleResetState = (state) => {
  let data = {
    isLoading: false,
    message: null,
    status: 0
  }
  Object.assign(state, data)
}

const storeCredentials = (state, payload) => {
  let { data } = payload
  state.isLoading = false
  state.message = `${SIGNIN_SUCCESS} ${data.user.name}`
  state.status = payload.status

  let item = [
    {user: data.user},
    {token: data.token}
  ]
  Storage.setItemsIterator(item)
}

const verifySignUp = (state, payload) => {
  state.isLoading = false
  state.message = `${SIGNUP_SUCCESS}`
  state.status = payload.status
}

const handleErrors = (state, err) => {
  state.isLoading = false
  state.message = err.data.errors[0].message
  state.status = err.status
}

export default {
  handleLoading,
  handleResetState,
  storeCredentials,
  verifySignUp,
  handleErrors
}
