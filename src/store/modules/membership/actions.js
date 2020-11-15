import { apiMembership } from '../../../services'

const handleLoading = (context, status) => {
  context.commit('handleLoading', status)
}

const getMemberships = async (context) => {
  try {
    let response = await apiMembership.getMemberships()
    context.commit('getMemberships', response)
  } catch (err) {
    context.commit('handleErrors', err.response)
  }
}

const purchaseMembership = async (context, data) => {
  try {
    let response = await apiMembership.purchaseMembership(data)
    context.commit('storeMembership', response)
  } catch (err) {
    context.commit('handleErrors', err.response)
  }
}

const resetState = (context) => {
  context.commit('handleReset')
}

export default {
  handleLoading,
  getMemberships,
  purchaseMembership,
  resetState
}