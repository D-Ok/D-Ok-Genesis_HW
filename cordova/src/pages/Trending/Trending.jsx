import React, { useEffect, useState } from 'react'

import propTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import Post from '../../components/Post/Post'
import trendingFeedMapper from '../../services/trendingFeedMapper'
import MenuBar from '../../components/MenuBar/MenuBar'

const Trending = function ({ currentUserInfo }) {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    trendingFeedMapper(setPosts)
  }, [])
  const onNavigateToUserHandler = (name) => navigate(`/user/${name}`, { replace: true })

  return (
    <>
      <MenuBar user={currentUserInfo} />
      { posts && posts.map((element) => (
        <Post
          {...element}
          key={element.id}
          onAvatarClick={onNavigateToUserHandler}
        />
      ))}
    </>
  )
}

Trending.defaultProps = {
  onNavigateToUser: () => 0,
  currentUserInfo: undefined,
}

Trending.propTypes = {
  onNavigateToUser: propTypes.func,
  currentUserInfo: propTypes.shape({
    userName: propTypes.string,
    avatar: propTypes.string,
  }),
}

export default Trending
