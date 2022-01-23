import getUserInfo from '../api/getUserInfo'
import defaultMapper from './defaultMapper'

export default async (userID, callback) => defaultMapper({
  request: getUserInfo,
  parameters: userID,
  callback,
  defaultReturn: undefined,
})
