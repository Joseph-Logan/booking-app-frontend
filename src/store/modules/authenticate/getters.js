/* Create variables to access specific data of storage */

const getIsLoading = state => state.isLoading
const getMessage = state => state.message
const getStatus = state => state.status

export default {
  getIsLoading,
  getMessage,
  getStatus
}
