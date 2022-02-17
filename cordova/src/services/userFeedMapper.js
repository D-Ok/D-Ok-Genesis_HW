import getUserFeed from '../api/getUserFeed'
import defaultMapper from './defaultMapper'
import userFeed from '../mock/userFeed'

export default async (userID, callback) => defaultMapper({
  request: getUserFeed,
  parameters: userID,
  callback,
  defaultReturn: userFeed,
})
