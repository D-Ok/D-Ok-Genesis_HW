import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import userFeedMapper from '../../services/userFeedMapper'

import UserProfile from '../../components/UserProfile/UserProfile'
import VideoGrid from '../../components/VideoGrid/VideoGrid'

const UserDetails = function () {
  const { uniqueId } = useParams()
  const [userInfo, setUserInfo] = useState()
  const [videos, setVideos] = useState([])

  useEffect(() => {
    userFeedMapper(uniqueId, setVideos)
  }, [uniqueId])

  useEffect(() => {
    if (!videos || videos.length === 0) return

    const user = videos[0].author
    const stats = videos[0].authorStats

    setUserInfo({ user, stats })
  }, [videos])

  return (
    <div>
      <UserProfile {...userInfo} />
      <VideoGrid videos={videos} />
    </div>
  )
}

export default UserDetails
