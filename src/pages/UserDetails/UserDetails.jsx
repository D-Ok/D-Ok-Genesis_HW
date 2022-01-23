import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import userFeedMapper from '../../services/userFeedMapper'
import userInfoMapper from '../../services/userInfoMapper'

import UserProfile from '../../components/UserProfile/UserProfile'
import VideoGrid from '../../components/VideoGrid/VideoGrid'

const UserDetails = function () {
  const { uniqueId } = useParams()
  const [userInfo, setUserInfo] = useState()
  const [videos, setVideos] = useState([])

  useEffect(() => {
    userFeedMapper(uniqueId, setVideos)
    userInfoMapper(uniqueId, setUserInfo)
  }, [uniqueId])

  return (
    <div>
      <UserProfile {...userInfo} />
      <VideoGrid videos={videos} />
    </div>
  )
}

export default UserDetails
