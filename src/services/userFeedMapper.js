import getUserFeed from '../api/getUserFeed'
import defaultMapper from './defaultMapper'

export default async (userID, callback) => defaultMapper({
  request: getUserFeed,
  parameters: userID,
  callback,
  defaultReturn: [],
})
