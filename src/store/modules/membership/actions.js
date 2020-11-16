import { apiMembership, apiProject } from '../../../services'
import Storage from '@/utils/storage'

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

const getMembershipByUser = async (context) => {
  try {
    let userId = JSON.parse(Storage.getItem('user'))._id
    let response = await apiMembership.getMembershipByUser(userId)
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

const activeProjectAndMembership = async (context, data) => {
  try {
    let response = await apiProject.activeProjectAndMembership(data)
    context.commit('handleLoading', false)
    return response
  } catch (err) {
    context.commit('handleErrors', err.response)
    return err.response
  }
}

const resetState = (context) => {
  context.commit('handleReset')
}

export default {
  handleLoading,
  getMemberships,
  getMembershipByUser,
  purchaseMembership,
  activeProjectAndMembership,
  resetState
}