import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import propTypes from 'prop-types'
import userFeedMapper from '../../services/userFeedMapper'

import UserProfile from '../../components/UserProfile/UserProfile'
import VideoGrid from '../../components/VideoGrid/VideoGrid'
import MenuBar from '../../components/MenuBar/MenuBar'

const UserDetails = function ({ currentUserInfo }) {
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
      <MenuBar user={currentUserInfo} />
      <UserProfile {...userInfo} />
      <VideoGrid videos={videos} />
    </div>
  )
}

UserDetails.defaultProps = {
  currentUserInfo: undefined,
}

UserDetails.propTypes = {
  currentUserInfo: propTypes.shape({
    userName: propTypes.string,
    avatar: propTypes.string,
  }),
}

export default UserDetails
