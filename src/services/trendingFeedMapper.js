import getTrendingFeed from '../api/getTrendingFeed'
import defaultMapper from './defaultMapper'
import trendingFeed from '../mock/trendingFeed'

export default async (callback) => defaultMapper({
  request: getTrendingFeed,
  callback,
  defaultReturn: trendingFeed,
})
