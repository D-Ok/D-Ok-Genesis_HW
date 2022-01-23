import { GLOBAL_CONSTANTS } from '../assets/constants'
import { getData } from './api'

const trendingFeedUrl = GLOBAL_CONSTANTS.API.ENDPOINTS.TRENDING_FEED

export default () => getData(trendingFeedUrl)
