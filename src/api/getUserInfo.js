import { GLOBAL_CONSTANTS } from '../assets/constants'
import { getData } from './api'

const userInfoUrl = GLOBAL_CONSTANTS.API.ENDPOINTS.USER.INFO

export default (userID) => {
  const endpoint = `${userInfoUrl}${userID}`
  return getData(endpoint)
}
