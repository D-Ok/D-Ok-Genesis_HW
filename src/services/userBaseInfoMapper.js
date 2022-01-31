import userInfoMapper from './userInfoMapper'

export default async (userID, callback) => {
  const userInfo = await userInfoMapper(userID)
  console.log(userInfo)
  if (!userInfo) return

  const result = {
    userName: userID,
    avatar: userInfo.avatarThumb,
  }

  if (callback) {
    callback(result)
  } else {
    return result
  }
}
