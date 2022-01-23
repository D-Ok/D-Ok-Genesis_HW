import { GLOBAL_CONSTANTS } from '../assets/constants'
import { getData } from './api'

const userFeedUrl = GLOBAL_CONSTANTS.API.ENDPOINTS.USER.FEED

export default (userID) => {
  const endpoint = `${userFeedUrl}${userID}`
  return getData(endpoint)
}
