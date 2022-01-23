import getTrendingFeed from '../api/getTrendingFeed'
import defaultMapper from './defaultMapper'

export default async (callback) => defaultMapper({
  request: getTrendingFeed,
  callback,
  defaultReturn: [],
})
