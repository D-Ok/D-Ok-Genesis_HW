import getUserInfo from '../api/getUserInfo'
import defaultMapper from './defaultMapper'
import userInfo from '../mock/userInfo'

export default async (userID, callback) => defaultMapper({
  request: getUserInfo,
  parameters: userID,
  callback,
  defaultReturn: userInfo,
})
