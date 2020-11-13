import Storage from './storage'
import { USER } from './strings'

const isAuthenticated = () => {
  return Storage.getItem(USER) ? true : false
}

export {
  isAuthenticated
}